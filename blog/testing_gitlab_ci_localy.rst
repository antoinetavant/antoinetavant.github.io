.. post::
   :tags: how-to, gitlab
   :author: Antoine Tavant
   :language: en


Testing Gitlab CI Locally
==========================

Developing a Gitlab CI pipeline can be a bit cumbersome as you have to push your code to a remote repository to test it.
In this article, we will see how to test a Gitlab CI pipeline locally.

Instead of defining a local runner, we will use `gitlab-ci-local <https://github.com/firecow/gitlab-ci-local>`_

What is Gitlab CI Local?
-------------------------

Gitlab CI Local is a tool that allows you to test your Gitlab CI pipeline locally.
It is a simple command line tool that will parse your `.gitlab-ci.yml` file and execute the pipeline locally.


Installation
------------
The installation depends on your operating system, there is the installation for linux based on Debian.
See `the installation documentation <https://github.com/firecow/gitlab-ci-local/tree/master?tab=readme-ov-file#installation>`_ for other operating systems.
.. code-block:: bash

   sudo wget -O /etc/apt/sources.list.d/gitlab-ci-local.sources https://gitlab-ci-local-ppa.firecow.dk/gitlab-ci-local.sources
   sudo apt-get update
   sudo apt-get install gitlab-ci-local

Usage
-----

Once installed, you can just run the following command in the root of your project, where the `.gitlab-ci.yml` file is located.

.. code-block:: bash

   gitlab-ci-local

That is as simple as that! You can now test your Gitlab CI pipeline locally.
This includes both the yaml parsing and the execution of the pipeline.

You can also:

- List the jobs in the pipeline with the `--list` option : ``gitlab-ci-local --list``
- Run a specific job with the `--job` option : ``gitlab-ci-local --job my_job``

Next Steps
----------

You can define the variables that you would define in the Gitlab CI/CD settings in a `.gitlab-ci-local.yml` file.

You can also change  ``.gitlab-ci.yml`` as the default git ci/cd file.

Tab completion is also available is needed.

