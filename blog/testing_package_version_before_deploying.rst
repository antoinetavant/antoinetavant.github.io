.. post:: May 16, 2024
   :tags: how-to, gitlab
   :author: Antoine Tavant
   :language: en


Checking package version bump in Gitlab CI/CD
=============================================

Using Gitlab, you can deploy you package to the Gitlab package repository.
This is a great way to share your package with your team, privately or publicly.

In the case of python packages, you cannot deploy a package with the same version number.

Hence, it can be useful to test the version number of the package before deploying it, for instance during a Merge Request.

Getting the current version number
----------------------------------

You first need to get the current version number of the package.
You can do this by reading the ``__version__`` attribute of the package.
In case it is defined in the ``__init__.py`` file, you can use the following command:

.. code-block:: bash

   VERSION=$(grep -oP '(?<=__version__ = ")[^"]*' my_package/__init__.py )

This will store the version number in the ``VERSION`` variable. 
It uses perl regex to extract the anything between ``__version__ = "`` and the next ``"``.
For instance, if the ``__init__.py`` file contains the following line:

.. code-block:: python

   __version__ = "0.1.0.rc2"

The ``VERSION`` variable will be set to ``0.1.0.rc2``.

You can adapt this command to your package structure.

Testing the version number
--------------------------
Next, have a look to the package registry to see if the version number is already deployed.

I thought it could be done by using the Gitlab API, but it seems that the API does not provide a way to list the packages in the registry.
Hence, a workaround is to try to install the package with the version number and see if it fails.

.. code-block:: bash

   export PIP_EXTRA_INDEX_URL=https://example.gitlab.com/api/v4/projects/$CI_PROJECT_ID/packages/pypi/simple
   pip install --no-deps my_package==$VERSION || exit_code=$?
   if [ -z "$exit_code" ]; then
      # if exit_code is empty, then the package is not already published on packages-registry
      echo "Version $VERSION already published on packages-registry"
      exit 1
   fi

This will install the package with the version number and store the exit code in the ``exit_code`` variable.
If the package is already published, the exit code will be 0, and the script will exit with an error code.
If the package is not published, the exit code will be different from 0, and the script will continue, allowing the deployment.

Adding it to the Gitlab CI/CD
-----------------------------

You can add this test in your ``.gitlab-ci.yml`` file, for instance in the ``test`` stage:

.. code-block:: yaml

   test-version:
      stage: test
      script:
         - VERSION=$(grep -oP '(?<=__version__ = ")[^"]*' my_package/__init__.py )
         - export PIP_EXTRA_INDEX_URL=https://example.gitlab.com/api/v4/projects/$CI_PROJECT_ID/packages/pypi/simple
         - pip install --no-deps my_package==$VERSION || exit_code=$?
         - |
            if [ -z "$exit_code" ]; then
               echo "Version $VERSION already published on packages-registry"
               exit 1
            fi

You can also add a ``rules`` section to run this test only on Merge Requests:

.. code-block:: yaml

   - rules:
      - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'

This way, the test will be run only when a Merge Request is created or updated.
And the pipeline will fail if the version number is already published,
hence enforcing the version number bump before merging the Merge Request.



