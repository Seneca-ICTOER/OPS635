---
id: lab4
title: Lab 4
sidebar_position: 5
description: Lab 4 For Students to Complete and Submit
---

# Lab 4: System Configuration Management using Ansible

## Overview

In an enterprise environment, the existence of different hardware and operating systems running on production servers is very common. You may find the same software running on different OSes and even different hardware platforms. To manage the software configuration on different platforms by using a script, your script would have to be aware of and account for their differences. Your scripts would need to be written in way that they know how to query the operating environment and execute the appropriate installation and configuration actions based on the operating environment it is running on.

There are commercial and open source configuration management systems which aware of and know how to handle such difference in operating platforms. **Ansible** is one such CMS (Content Management System). In this lab you will gain experience using the basic features of ansible to remotely configure other machines.

## Investigation 1: Installing Ansible

  - Install Ansible on one of your VMs (we will refer to that as the server).

       - Current installation instructions can be found here (<- ADD LINK).

  - If you have not already done so, create an SSH key-pair for a **non-root user on your server** and transfer the public portion of it to another VM (we will refer to it as the client). Ensure that you can use it to ssh to a non-root account on the client by entering a passphrase.
  - Modify the inventory file on your server to include the fully qualified domain names of client VM.
  - Use the **setup module** to verify that your Ansible server can run plays on your client VM.

## Investigation 2: Running Single Ansible Commands

  - Use the ansible command on your server to make sure the client meets the following conditions:

       - The bind-utils package is fully up-to-date.
       - The firewall-cmd service is running and enabled.
       - Firewalld is not allowing the mdns or cockpit services. Remember to also make this permanent.

  - Use the terminal on the client to confirm these changes worked.
  - While these changes are not important to the service you will configure using a playbook in the next investigation, they give you some experience using one-off commands in ansible.

## Investigation 3: Creating an Ansible Playbook

  - Create an ansible playbook to make your client machine meet the following conditions:

       - The httpd package must be installed
       - The httpd service must be enabled and running
       - A simple webpage of your creation must be the DocumentRoot.
       - Provide a copy of the configuration file with some minor changes (e.g. ServerAdmin)
       - The firewall must be allowing traffic to your webservers.

  - Run your play and ensure it makes the required changes.
  - Break your machine (e.g. modify the configuration file), then re-run your play and ensure it fixes your machine.

## Investigation 4: Advanced Playbook Options

  - Add a handler to your playbook to re-start the httpd service when changes to the configuration file are discovered.
  - Replace the configuration file with a template and provide at least one variable to it.
  - Re-run your play and ensure it makes the required changes to your machine.

## Submission

Upload your playbook and template file to blaockboard.

## Completing the Lab

In completing this lab you have learned how to use common elements of ansible to provision services on machines under your control. With ansible in place you can automatically configure and repair services under your control, making configuration and maintenance of your machines much more efficient.
