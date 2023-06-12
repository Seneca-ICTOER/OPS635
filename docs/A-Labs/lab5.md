---
id: lab5
title: Lab 5
sidebar_position: 6
description: Lab 5 For Students to Complete and Submit
---

# OPS635 Docker Lab 5: Cluster Management Using Docker

## Overview

Deploying services as containers in a swarm can make it easy to rapidly deploy it across your network, and to scale it up and down as needed.

**Pre-Requisites**

  - You must have an installed host, with at least three virtual machines.
  - Each machine must be running an up-to-date version of CentOS.

**Materials**

  - One Solid State Drive (SSD), minimum capacity 240GB, in a USB3 Enclosure.

## Investigation 1: Running Docker Containers

  - Install Docker on one of your virtual machines.

       - **Note**: Do not use Docker on your host, as it may interfere with other services covered in this course.
       - **Note2**: Do not install Docker from the default CentOS repository! Refer to the wiki for the current correct method (<- ADD LINK).

  - Run the 'hello-world' image to ensure your installation is working.
 
       - Feel free to remove the container and image afterwards.

## Investigation 2: Deploying a Container From a Custom Image

  - Run a container using the existing image for httpd.

       - Make some changes to the index.html file by using docker exec (The exact content is not important just include some text that says ‘version 1’, I just want to see that you can modify it).
       - Make some changes to the httpd.conf file (e.g. replace the ServerName parameter, so it stops throwing error messages).

  - Commit these changes and push your image to docker hub with the tag v1.
  - Create a dockerfile to create a new image from your v1, with the following changes:

       - At least one label identifying yourself as the maintainer for the image.
       - Identify port 80 as accessible for machines that run containers based on this image.
       - Identify the DocumentRoot as a place that directories can be mounted into.

  - Build the image based on your dockerfile, tagging it as v2.
  - Run a container based on your v2 image. Access it to make sure it works.
  - Once you are sure it works, upload your v2 image to docker hub.

## Investigation 3: Creating a Docker Swarm

  - Install docker on two more VMs.
  - Pick one of your machines to be the swarm manager, start a swarm on it, and make the other two join the swarm as nodes.
  - Write a compose file that will deploy one copy of your container onto each of your machines.

## Investigation 4: Managing how images are deployed

  - Modify your compose file so that four copies of your v2 image will be run on your worker machines, with none on the swarm manager.

## Submission

  1. Upload your dockerfile and docker Compose file to Blackboard.
