---
id: docker-installation-instructions
title: Docker Installation Instructions
sidebar_position: 1
description: Docker Installation Instructions
---

# Docker Installation Instructions

## Centos 9

  - Add the docker repo:

       - dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

  - Add the docker community edition package:

       - dnf install docker-ce

## Centos 8

  - Add the docker repo:

       - yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

  - Add the docker community edition package:

       - yum install docker-ce

  - Update:

       - yum update -y

## Centos 7

  - Add yum configuration manager:

       - yum install yum-utils

  - Add the docker repo:

       - yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

  - Add the docker community edition package:

       - yum install docker-ce
