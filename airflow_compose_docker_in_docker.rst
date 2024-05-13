.. post:: May 13, 2024
   :tags: blog, airflow
   :author: Antoine Tavant

Use Docker Operator in Airflow Docker
=====================================

In this post, we will see how to use the Docker Operator in Airflow 
with the Docker compose deployment.

Information on the Airflow setup can be found in the documentation 
`https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html`_ .

However, the default setup is not compatible with the Docker Operator, 
as the Docker Operator needs to communicate with the Docker daemon.
Indeed, it requires to run docker in docker.

Volume configuration
--------------------
For the worker to access the Docker daemon, we need to mount the Docker socket in the worker container.

Add to the volume configuration of ``environment`` in the ``docker-compose.yaml`` file the following line:

.. code-block:: yaml

    volumes :
      - ...
      - /var/run/docker.sock:/var/run/docker.sock

User group configuration
------------------------
The worker container needs to be in the same group as the Docker daemon to access the Docker socket.

1. create a group where the Docker daemon runs: ``sudo groupadd docker``
2. get the GID of the group: ``getent group docker | cut -d: -f3``. The output is the GID of the group. It is usually 999.
3. Add the GID to the worker container in the ``docker-compose.yaml`` file:
   
   .. code-block:: yaml

    environment:
      group_add:
        - 999   # GID of the docker group

Additionnal requirements
------------------------
The worker container needs to have the Docker provider installed.
One temporary solution is to add the requirements in the airflow configuration

In the .env file, add the following line:

.. code-block:: 

    _PIP_ADDITIONAL_REQUIREMENTS="apache-airflow-providers-docker==3.10.0"

A more permanent solution is to create a custom image with the requirements installed.
To do so, create a Dockerfile in the ``docker-compose.yaml`` directory:

.. code-block:: Dockerfile

    FROM apache/airflow:2.2.0
    USER root
    RUN pip install apache-airflow-providers-docker==3.10.0
    USER airflow

Freezing the requirements in the Dockerfile is a good practice to avoid any issues with the dependencies.

Then, update the ``docker-compose.yaml`` file to use the custom image:

.. code-block:: yaml

    x-airflow-common:
        &airflow-common
        # In order to add custom dependencies or upgrade provider packages you can use your extended image.
        # Comment the image line, place your Dockerfile in the directory where you placed the docker-compose.yaml
        # and uncomment the "build" line below, Then run `docker-compose build` to build the images.
        #image: apache/airflow:2.8.3-python3.11
        build: .  # bluid the dockerfile to install



Docker Operator configuration
-----------------------------

Let's see how to use the Docker Operator in a DAG.
We will use the new TaskFlow API.

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

Optional configurations to the docker operator are:

- ``"mounts"``: list of volumes to mount in the container. Needs to be a list of ```Mount`` objects <https://docker-py.readthedocs.io/en/stable/api.html#docker.types.Mount>`_:
  
  .. code-block:: python

     from docker.types import Mount
     mounts = [Mount(source='/host/path', target='/container/path', type='bind')]

- ``"tty"``: allocate a pseudo-TTY. Default is False. Setting to True will provide better logs. [To Be checked]
- ``"xcom_all"``: push all the logs to the XCom. Default is False. Setting to True will push all the logs to the XCom. [To Be checked]
- ``"docker_conn_id"``: the connection ID to use to connect to the Docker daemon. Default is ``"docker_default"``. Creadentials can be set in the Airflow UI or in the .env file. See below for more information.


Setting connection
------------------
To set the creadentials to a docker connection,
you can use the UI or the .env file.

The content of the .env file should be:

.. code-block:: python

    AIRFLOW_CONN_<MY_DOCKER_CONN_id>='{
        "conn_type": "docker",
        "host": "<the registry host>",
        "port": "<the Port>",
        "login": "<your login or Tocken name>",
        "password": "<your password or Tokken>",
    }'

As you can see, the connection id is defined in the
name of the variable if Uppercase and with the prefix ``AIRFLOW_CONN_``.
The connection cna be used in the Docker Operator by setting the ``docker_conn_id``
parameter to the connection id, this time in lowercase, as in the example above: ``my_docker_conn_id``.