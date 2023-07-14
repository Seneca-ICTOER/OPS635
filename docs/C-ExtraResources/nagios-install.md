---
id: installation-nagios
title: Installation Nagios
sidebar_position: 5
description: Installation Nagios
---

# Installation Nagios

## Centos 8

- Ensure you have the epel-release repo
    + yum install epel-release
- Install the main nagios package
    + yum install nagios
- Install plugins if necessary (for us it is)
    + yum install nagios-plugins nagios-plugins-* --skip-broken
    + Note that several of the plugins covered by nagios-plugins-* require packages that do not seem to be easily available in Centos 8 yet. You could search for ways to install the dependencies manually, but we don't need those particular plugins so we can safely --skip-broken.
- Note that this also installs httpd for you, as the main user interface for this service is a web-page.

## Centos 7

- Ensure you have the epel-release repo
    + yum install epel-release
- Install the main nagios package
    + yum install nagios
- Install plugins if necessary (for us it is)
    + yum install nagios-plugins nagios-plugins-*
- Note that this also installs httpd for you, as the main user interface for this service is a web-page.
