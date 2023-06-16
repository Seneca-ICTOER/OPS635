---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: Assignment 1
---

# Assignment 1

**Weight**: 17.5% of the overall grade

**Due Date**: Week 7

## Introduction and Purpose

In this assignment you will use Docker Swarm on three virtual machines to provide assistance to the domain’s email server by hosting a containerized Postfix installation.

## Mail Server on Host

Install and configure a full mail server on your host. It must accept and store e-mail for your domain and any users with accounts on the host. At least one standard, non-root account should be present.

## Virtual Machines

Create three new virtual machines from your blank template VM, install Docker on all three, and configure them as a Docker Swarm. Use the first VM as your manager. (Do NOT use your host!)

## DNS Services

Modify your existing DNS services to identify each of your Docker machines as mail servers for your domain, in addition to your host. Note the priority settings must be ordered so that the host is the last machine clients will attempt to contact. Configure the DNS records so that each of your mail machines (the three Docker VMs, and your host) are identified as the only machines that should be sending mail from your domain.

## Postfix Container

Your three Docker machines will act as a single swarm, each running a container configured to perform SPF checks on incoming mail. They will also use Postfix’s built in restrictions to filter out malformed mail, or mail which does not properly follow SMTP protocols (e.g. not starting a connection with HELO). Any mail that passes these checks will be **relayed** on to the actual mail server running on your host (which must be configured to accept mail addressed to users in your domain).

**Note**: Do NOT run use your host as the Docker Swarm manager, as that would interfere with its own Postfix service.

How you create the image(s) required is up to you. You may build on existing images if you wish. (tozd/postfix is relatively easy to use).

## Submission

On the due date, you will boot your network and demonstrate that the machines and services described are working. Your professor will open a terminal connection to the mail servers and attempt to send several e-mail messages; some properly formed, some malformed, some in violation of SPF.

**Bonus Marks**

- 10%: Write an Ansible playbook that will handle the Docker installation.
- 10%: Create a replicated GlusterFS volume using all three VMs and direct Postfix (and/or any other mail service you're using) to store received messages inside.
