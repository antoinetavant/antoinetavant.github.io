
.. antoinetavant.github.io post example, created by `ablog start` on Apr 28, 2024.

.. post:: Apr 28, 2024
   :tags: blog, sphinx
   :author: Antoine Tavant

New Blog with Sphinx
====================

Following the stepts of `errbufferoverfl  <https://www.errbufferoverfl.me/posts/2020/sphinx-blog-part-one/>`_ and `Chris Holdgraf <https://chrisholdgraf.com/blog/2020/sphinx-blogging/>`_ I'm also changing my blog to use Sphinx.my blog using Hugo to Sphinx.
I'm using the `ablog <https://ablog.readthedocs.io/en/latest/>`_ extension to create the blog posts.

Updates
-------
Compared to the blog mentioned above, I made some changes to the configuration and the installation process.

Using Sphinx design instead of sphinx pannel
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Since some time ago, sphinx-panel is not maintained anymore. I decided to use the `sphinx_design <https://github.com/executablebooks/sphinx-design>`_ as suggested by the maintainer of sphinx-panel.

Deployment with GitHub Pages and GitHub Actions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

I decided to use GitHub Actions to deploy the blog to GitHub Pages. The configuration is in the `.github/workflows/deploy.yml` file.
The blog is deployed to the `gh-pages` branch.

You can see the action on `github <https://github.com/antoinetavant/antoinetavant.github.io/blob/main/.github/workflows/build.yml>`_.
In includes the following steps:
- installation of dependencies
- build the blog
- push the changes to the `gh-pages` branch of the repository

Tips and Tricks
---------------

Using Sphinx-autobuild
^^^^^^^^^^^^^^^^^^^^^^

The usual ``ablog build && ablog serve`` can be replaced by ``sphinx-autobuild . _website``.
This will automatically rebuild the blog when a change is detected.