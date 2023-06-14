---
id: gluster-installation-instructions
title: Gluster Installation Instructions
sidebar_position: 2
description: Gluster Installation Instructions
---

# Glusterfs Installation Instructions

## Centos 9

  - Add the gluster repo:

       - dnf install centos-release-gluster10

  - Install the gluster service

       - dnf install glusterfs-server

Note: There is a centos-release-gluster11, but it appears to be missing a package. Until further notice, use centos-release-gluster10.

## Centos 8

  - Add the gluster repo:

       - yum install centos-release-gluster

  - Install the gluster service

       - yum install glusterfs-server
