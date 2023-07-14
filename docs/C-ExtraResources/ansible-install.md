---
id: installation-ansible
title: Installation Ansible
sidebar_position: 6
description: Installation Ansible
---

# Installation Ansible

## Centos 9

- Install the package:
    + dnf install ansible-core

## Centos 8

- Add the ansible rpm:
    + yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
- Enable that repo and install the package:
    + yum install --enablerepo epel-playground ansible

[External Tutorial](https://computingforgeeks.com/how-to-install-and-configure-ansible-on-rhel-8-centos-8/)

## Centos 7

- Ensure you have the epel-release repo
    + yum install epel-release
- Add the ansible package:
    + yum install ansible

[External Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-ansible-on-centos-7)

