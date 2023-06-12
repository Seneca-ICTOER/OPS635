---
id: prelab
title: Prelab 0 - Host installation and virtual network setup
sidebar_position: 1
description: Prelab for Students to Learn Host Installation and Virtual Network Setup
---

# OPS635 Pre-Lab: Host installation and virtual network setup

## Overview

In this lab you will configure the host with basic services and a virtual network that you will build on for the rest of the course.

**Pre-Requisites**

None.

This will start with a brand-new installation of CentOS on your drive. You may not re-use an installation from previous semesters.

**Materials**

  - One Solid State Drive (SSD), minimum capacity 240GB, in a USB3 Enclosure.
  - One installation medium. Either a DVD or USB flash drive configured as an installation disc.


## Investigation 1: Host Installation

Install CentOS directly on your drive following the guidelines below:

  - Networking should be on.
  - Set the hostname of the machine to be _host.<domainname\>.ops_. Check blackboard for your assigned domain name.
  - Set the timezone to **Americas/Toronto**
  - Select **Server with GUI** as the installation type.
  - The partition setup will be similar to what you had in previous OPS courses.

       - Delete any old partitions on the drive.
       - Provide a separate mount point for _'/var/lib/libvirt/images_ with at least 100GB.

  - Set a good root password. No, not ‘P@ssw0rd’.
  - Create a non-privileged user account using your MySeneca ID.

       - If your MySeneca ID is long enough that typing it would be irritating to do on a regular basis you may use an alternate name, but you must clear it with me first.


**On First Boot**

Make sure your machine meets the following conditions:

  - Your NIC is set to automatically turn on when the machine does.
  - SELinux is set to **enforcing**.
  - The machine must be fully updated.
  - Use _firewalld_ as your firewall.
  - Install _libvirt_ and _virt-manager_. Set the virtualization service to start automatically when the machine boots.
  - Reboot your machine


## Investigation 2: Basic Service Installation

  - Configure the postfix service on your host to send and receive email for your domain.
  - Install bind and configure your host as the master DNS server for your domain.

       - It must provide forward and reverse lookups of the machines in your domain.
       - As the course goes on, you will add entries to your zone for the machines you create.
       - Create an MX record to direct all mail sent to users @<yourdomain\>.ops to your host.
       - It must allow machines in your virtual network to access the outside world (e.g. to get updates).

  - Ensure both services (postfix and named) start automatically when the machine boots, and allow the traffic for both through your firewall.


## Investigation 3: Virtual Network & Machine Installation

  - Remove the default virtual network.
  - Create a new virtual network called opsnet.

       - Address: 192.168.\[x\].0/24, where x is the network number on blackboard. E.g. if your network number is 29, your opsnet network will be 192.168.29.0/24.

  - Disable DHCP, and allow forwarding to any physical device using NAT.
  - Install a new vm using the same CentOS release as the host machine.

       - You may wish to provide the VM access to more than 1 CPU and 1 GiB of RAM so it installs and updates faster.

  - During the installation process:

       - Set the hostname to blank.<yourdomain\>.ops, using the same domain name as the host machine.
       - Provide your machine with a static address of your choice, using the host’s address for the primary DNS server and the gateway.
       - Set the timezone to Americas/Toronto.
       - Use a minimal installation (no GUI).
       - Set your root password, and create a non-privileged user account using your MySeneca ID.

  - If your MySeneca ID is long enough that typing it would be irritating to do on a regular basis you may use an alternate name, but you must clear it with me first.
  - Once the machine is installed, ensure it is fully updated.
  - Shut down your VM, make sure the resource settings are reduced back to 1 CPU and 1 GiB of RAM.
  - When you need a new VM, clone this one.


## Submission

It is not necessary to submit this lab. If you wish to confirm that it has been completed correctly, you may ask me to review it in class.
