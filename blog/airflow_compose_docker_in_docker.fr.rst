.. post:: 13 mai 2024
   :tags: blog, airflow
   :author: Antoine Tavant
   :language: fr

Utiliser l'opérateur Docker dans Airflow Docker
===============================================

Dans cet article, nous verrons comment utiliser l'opérateur Docker dans Airflow
avec le déploiement Docker Compose.

Des informations sur la configuration d'Airflow peuvent être trouvées dans `la documentation <https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html>`_ .

Cependant, la configuration par défaut n'est pas compatible avec l'opérateur Docker,
car l'opérateur Docker a besoin de communiquer avec le daemon Docker.
En effet, il nécessite d'exécuter Docker dans Docker.

Configuration des volumes
-------------------------
Pour que le worker puisse accéder au daemon Docker, nous devons monter le socket Docker dans le conteneur du worker.

Ajoutez à la configuration des volumes de ``environment`` dans le fichier ``docker-compose.yaml`` la ligne suivante :

.. code-block:: yaml

    volumes :
      - ...
      - /var/run/docker.sock:/var/run/docker.sock

Configuration du groupe utilisateur
-----------------------------------
Le conteneur worker doit être dans le même groupe que le daemon Docker pour accéder au socket Docker.

1. créez un groupe où le daemon Docker s'exécute : ``sudo groupadd docker``
2. obtenez le GID du groupe : ``getent group docker | cut -d: -f3``. La sortie est le GID du groupe. Il est généralement 999.
3. Ajoutez le GID au conteneur worker dans le fichier ``docker-compose.yaml`` :
   
   .. code-block:: yaml

    environment:
      group_add:
        - 999   # GID du groupe docker

Exigences additionnelles
------------------------
Le conteneur worker doit avoir le fournisseur Docker installé.
Une solution temporaire est d'ajouter les exigences dans la configuration d'airflow

Dans le fichier .env, ajoutez la ligne suivante :

.. code-block:: 

    _PIP_ADDITIONAL_REQUIREMENTS="apache-airflow-providers-docker==3.10.0"

Une solution plus permanente est de créer une image personnalisée avec les exigences installées.
Pour ce faire, créez un Dockerfile dans le répertoire ``docker-compose.yaml`` :

.. code-block:: Dockerfile

    FROM apache/airflow:2.2.0
    USER root
    RUN pip install apache-airflow-providers-docker==3.10.0
    USER airflow

Geler les exigences dans le Dockerfile est une bonne pratique pour éviter tout problème avec les dépendances.

Ensuite, mettez à jour le fichier ``docker-compose.yaml`` pour utiliser l'image personnalisée :

.. code-block:: yaml

    x-airflow-common:
        &airflow-common
        # Afin d'ajouter des dépendances personnalisées ou de mettre à niveau les packages du fournisseur, vous pouvez utiliser votre image étendue.
        # Commentez la ligne de l'image, placez votre Dockerfile dans le répertoire où vous avez placé le docker-compose.yaml
        # et décommentez la ligne "build" ci-dessous, puis exécutez `docker-compose build` pour construire les images.
        #image: apache/airflow:2.8.3-python3.11
        build: .  # construire le dockerfile pour installer



Configuration de l'opérateur Docker
-----------------------------------

Voyons comment utiliser l'opérateur Docker dans un DAG.
Nous utiliserons la nouvelle API TaskFlow.

.. code-block:: python

   from airflow.decorators import dag, task

   @dag(schedule_interval='@daily', start_date=days_ago(1), catchup=False)
   def docker_operator_dag():
       @task.docker(
           image='alpine:latest',
           task_id='docker_task',
           command='echo "Hello, World!"',
           api_version='auto',
           auto_remove=True,
           docker_url='unix://var/run/docker.sock',
           docker_conn_id='my_docker_conn_id',
       )
       def docker_task():
           pass

    docker_task()

Les configurations optionnelles à l'opérateur docker sont :

- ``"mounts"`` : liste des volumes à monter dans le conteneur. Doit être une liste d'objets `Mount <https://docker-py.readthedocs.io/en/stable/api.html#docker.types.Mount>`_ :
  
  .. code-block:: python

     from docker.types import Mount
     mounts = [Mount(source='/host/path', target='/container

/path', type='bind')]

- ``"tty"`` : allouer un pseudo-TTY. Par défaut c'est False. Le mettre à True fournira de meilleurs logs. [À vérifier]
- ``"xcom_all"`` : pousser tous les logs vers le XCom. Par défaut c'est False. Le mettre à True poussera tous les logs vers le XCom. [À vérifier]
- ``"docker_conn_id"`` : l'ID de connexion à utiliser pour se connecter au daemon Docker. Par défaut c'est ``"docker_default"``. Les crédentials peuvent être définis dans l'interface utilisateur d'Airflow ou dans le fichier .env. Voir ci-dessous pour plus d'informations.


Configuration de la connexion
-----------------------------
Pour définir les crédentials d'une connexion docker,
vous pouvez utiliser l'interface utilisateur ou le fichier .env.

Le contenu du fichier .env devrait être :

.. code-block:: python

    AIRFLOW_CONN_<MY_DOCKER_CONN_id>='{
        "conn_type": "docker",
        "host": "<l'hôte du registre>",
        "port": "<le Port>",
        "login": "<votre login ou nom de Token>",
        "password": "<votre mot de passe ou Token>",
    }'

Comme vous pouvez le voir, l'ID de connexion est défini dans le
nom de la variable en majuscule et avec le préfixe ``AIRFLOW_CONN_``.
La connexion peut être utilisée dans l'opérateur Docker en définissant le paramètre ``docker_conn_id``
à l'ID de connexion, cette fois en minuscule, comme dans l'exemple ci-dessus : ``my_docker_conn_id``.