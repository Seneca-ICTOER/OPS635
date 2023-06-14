---
id: openshift-installation-instructions
title: Openshift Installation Instructions
sidebar_position: 3
description: Openshift Installation Instructions
---

# Openshift Installation Instruction

## Overview

  - The next generation application hosting platform developed by Red Hat, also known as "Platform as a Service"
  - [OpenShift Origin](https://www.openshift.org/)
  - [OpenShift User Guide](https://access.redhat.com/site/documentation/en-US/OpenShift_Online/2.0/html/User_Guide/index.html)
  - [OpenShift Origin Comprehensive Deployment Guide](https://docs.openshift.org/origin-m4/oo_deployment_guide_comprehensive.html)

## Tasks

  1. Try OpenShift Online
  2. Get OpenShift Origin

## Procedure

### Try OpenShift Online

You can try out OpenShift for free with OpenShift Online. Just [sign up for an OpenShift Online account](https://openshift.redhat.com/app/account/new) and create your first application in minutes. You need to provide a valid email address when signing up for an OpenShift online account.

Create a WordPress App on your free gear with your first name as part of the site title. e.g. "Raymond's Blog".

Show the URL of your WordPress App URL to your professor.

**Collect the following information after creating your first App on OpenShift**

  - Procedure to make code changes to your app. (need a git client)
  - Information about installing and using rhc (RedHat Client tool) - [Try this link](https://www.openshift.com/developers/install-the-client-tools)
  - Manage your application from the command line [Guide](https://www.openshift.com/user-guide)
  - Command to ssh to your application container - e.g. "`ssh 570694eb2d527172d400012e@python-ictseneca.rhcloud.com`"

### Get OpenShift Origin

There are two ways to implement OpenShift on your own hardware:

  - The easiest way to run OpenShift locally is to [download an image](http://openshift.github.io/documentation/oo_deployment_guide_vm.html) suitable for running on a VM. The image will work on KVM,VirtualBox or VMWare.
  - You can also deploy OpenShift Origin manually.

       - Note that this must be done on your host. Using these instructions on a VM results in an installation that works, but will not allow access to the GUI.

       1. yum update -y
       2. yum install yum-utils
       3. yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
       4. yum install docker-ce
       5. mkdir /etc/docker /etc/containers
       6. vi /etc/containers/registries.conf

```bash
[registries.insecure]
registries = ['172.30.0.0/16']
```

   7. vi /etc/docker/daemon.json

```json
{
  "insecure-registries": [
    "172.30.0.0/16"
  ]
}
```

   8. systemctl daemon-reload
   9. systemctl restart docker
   10. systemctl enable docker
   11. firewall-cmd --permanent --new-zone dockerc
   12. docker network inspect bridge \#(look for the subnet address)
   13. firewall-cmd --permanent --zone dockerc --add-source 172.17.0.0/16 #use the address range from the previous step.
   14. firewall-cmd --permanent --zone dockerc --add-port={80,443,8443}/tcp
   15. firewall-cmd --permanent --zone dockerc --add-port={53,8053}/udp
   16. firewall-cmd --reload
   17. wget https://github.com/openshift/origin/releases/download/v3.11.0/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit.tar.gz
   18. tar xvf openshift-origin-client-tools*.tar.gz
   19. cd openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit/
   20. mv oc kubectl /usr/local/bin
   21. oc cluster up
   22. oc login -u system:admin

## OpenShift Resource on the web

  - [OpenShift for Developers: Set Up a Full Cluster in Under 30 Minutes](https://blog.openshift.com/openshift-developers-set-full-cluster-30-minutes/?utm_source=OpenShift+Online&utm_campaign=f9a98c42f0-blog_email_updates&utm_medium=email&utm_term=0_c528e5e48e-f9a98c42f0-107725973)
  - [OpenShift Deployment Guide](https://github.com/openshift/origin-server/blob/master/documentation/oo_deployment_guide_vm.adoc)
  - [OpenShift picked Ansible](https://blog.openshift.com/why-openshift-picked-ansible/?utm_source=OpenShift+Online&utm_campaign=7200f2798b-blog_email_updates&utm_medium=email&utm_term=0_c528e5e48e-7200f2798b-107725973)
