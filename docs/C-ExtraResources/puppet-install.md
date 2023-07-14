---
id: installation-puppet
title: Installation Puppet
sidebar_position: 4
description: Installation Puppet
---

# Installation Puppet

Note: Whichever release you are using, the memory requirements of this service are significant. Provide at least 4GiB of RAM to the machine you expect to run this service.

## Centos 8

- Add the puppet rpm:
    + yum install https://yum.puppetlabs.com/puppet-release-el-8.noarch.rpm
- Add the puppet package. Note that the server and client require different packages:
    + For Server:yum install puppetserver
    + For Client:yum install puppet
- Note that before you start the puppetserver service on the server, it must exist in DNS. There must also be an entry for 'puppet' that provides the address of the server.

## Centos 7

- Ensure you have the epel-release repo
    + yum install epel-release
- Add the puppet package. Note that the server and client require different packages:
    + For Server:yum install puppet-server
    + For Client:yum install puppet-server puppetagent
