---
id: lab1
title: Lab 1
sidebar_position: 2
description: Lab 1 For Students to Complete and Submit
---

# Lab 1: System Configuration Management using Puppet

## Overview

In an enterprise environment, the existence of different hardware and Operating Systems running on production servers is very common. You may find the same software running on different OS and even different hardware platforms. To manage the software configuration on different platforms by using a script, your script must aware and account for their differences. Your scripts must be written in way that it knows how to query the operating environment and execute the appropriate installation and configuration actions based on the operating environment it is running on. There are commercial and open source configuration management systems which aware and know how to handle such difference in operating platforms. "Puppet" is one of those CMS that we are going to study for this lab. In this lab, we will start by trying to port the script that you have written for configuring Nagios on Centos7 to Debain/Ubuntu (or any other Linux distributions of you choice except RHEL and Fedora). Secondly, we will convert your originally Nagios installation and configuration script into a Puppet manifest, test it in your testing environment and then deploy it to your production environment (i.e. your Seneca VM).

## Investigation 1: Basic Puppet Installation

  - Clone your Centos blank Vm to create three new Vms (puppet-master, puppet-client1, and puppet-client2).

       - Set the hostnames of each, provide them with static addresses, and add them to your DNS service.
       - Use [current installation instructions](/C-ExtraResources/puppet-install.md) to configure your puppet-master as the puppet master, and configure puppet-client1 and puppet-client2 as puppet agents.
       - Write a puppet manifest on puppet-master to make a simple change (e.g. installing bind-utils) on both clients. Ensure it works before continuing.
       - Manually undo the simple change (e.g. remove the package), and ensure that puppet re-applies the change.

## Investigation 2: Using a Puppet Manifest

  - Create a puppet manifest that will configure both puppet agents as web-servers.
  - Your manifest should ensure that both machines meet the following conditions:

       - The httpd package must be installed
       - The httpd service must be enabled and running
       - A simple webpage of your creation must be the DocumentRoot on both machines.
       - The firewall must be allowing traffic to your webservers.
       - Do not worry about providing the configuration file yet.

  - Ensure that even if you manually break your machines (e.g. remove a required package, alter the webpage), they will automatically be fixed by the puppet-master.
  - Add metaparameters to your manifest (if you didn't already have them) to ensure the resources are checked in a sensible order (e.g. the package is installed before puppet tries to start the service).

## Investigation 3: Using a Puppet Module

  - Create a new directory in your modulepath called webserver.
  - Add a manifest file to your module and place your resources from investigation 2 inside it in a class called webserver.
  - Add the apache configuration file to the files subdirectory of your module and make a minor change to it (e.g the ServerAdmin parameter).

       - Add the configuration file to your class manifest, making sure you include appropriate metaparameters to restart apache if the configuration changes.

  - Modify your main manifest to make both machines implement your webserver class instead of listing every resource in both machines.
  - Ensure that even if you manually break your machines (e.g. remove a required package, alter the webpage), they will automatically be fixed by the puppet-master.

## Investigation 4: Using a Puppet Template

  - Convert your apache configuration file to a template:

       - Move it from the files subdirectory to the templates subdirectory
       - Modify it to allow whoever implements your class to provide it with their desired values for two parameters (e.g. Listen and ServerAdmin)
       - Modify your class's manifest file to provide default values for the parameters you chose, and to pass them to the configuration file using epp

  - Ensure that even if you manually break your machines (e.g. remove a required package, alter the webpage), they will automatically be fixed by the puppet-master.
  - Modify your main manifest file to provide a different value for at least one of your chosen parameters.
  - Ensure that even if you manually break your machines (e.g. remove a required package, alter the webpage), they will automatically be fixed by the puppet-master.

## Submission

Upload the main manifest and your module to Blackboard.

## Completing the Lab

In completing this lab you have learned how to use common elements of puppet to provision services on machines under your control. With puppet in place you can automatically configure and repair services under your control, making configuration and maintenance of your machines much more efficient.
