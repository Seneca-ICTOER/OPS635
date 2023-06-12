---
id: lab2
title: Lab 2
sidebar_position: 3
description: Lab 2 For Students to Complete and Submit
---

# OPS635 Lab 2: Nagios Installation and Configuration

## Overview

In an enterprise environment, a production server must be staged before deployment. Any upgrade to the production servers must be tested in a testing environment and signed off by the change manager(s) before deploying to the production environment. In this lab, you will install and configure the Nagios monitoring framework on a VM running on your testing environment before deploying it to the production environment. You will use many of the common definitions encountered in a typical nagios installation.

## Investigation 1: Minimal Nagios Resources

Clone your existing VM. Call the new VM nagios.<yourdomain\>.ops, and provide it a static address of your choice.

  - Add the necessary records for this machine to your DNS server.
  - Install and configure Nagios (<- ADD LINK) on this machine.
  - Configure your Nagios to also use any definitions you include in a file called lab.cfg.
  - Using the lab.cfg file, create definitions to get your nagios installation to monitor the following hosts/services:

       - Create a host definition to make the nagios machine monitor itself (using a non-loopback address). It should use the check\_ping command every ten minutes to make sure it is active.
       - Create a service definition to make the nagios machine monitor whether it can connect to it's own ssh service (using the non-loopback address). It should use the pre-written check_ssh command every 30 minutes, re-checking every 10 minutes if the initial check fails.
       - Create a timeperiod definition, and set it to only include the days and times you are in OPS635. Modify the definitions in lab.cfg to only run during this time.

  - Make sure the webservice running on your nagios machine is accessible from your host machine.
  - Access the nagios web console and confirm that these checks are working before continuing.

## Investigation 2: Nagios Notifications

  - Turn flap detection off for the checks you created in investigation 1.
  - Modify the lab.cfg file to include a contact named after yourself, using your email address in your domain. Set its notification periods to use the same timeperiod you created in investigation 1.
  - Create a second contact called senioradmin, using the email account for root@<yourdomain\>.ops.
  - Set the notification interval for the host and service you created in investigation 1 to five minutes. This is unreasonably short for most installations, but in this lab we want to get multiple notifications in a very short time line so that we can be sure they are working.
  - If either of these services go into a hard-fail state, nagios should now send you an email. Note that you should already have configured the email server on your host to accept email for your domain.
  - Manipulate you machine to cause these checks to fail (e.g. set your firewall to block ssh traffic), and make sure you receive the email before continuing.
  - Fix your machine so the checks are passing again.
  - Add a hostescalation and a serviceescalation so that if you don't fix the issue before you are notified three times, the notification will instead be sent to the senior admin.
  - Cause the checks to fail again, and wait for the notification to be sent to root.

## Investigation 3: Nagios Custom Commands

  - Create a script plugin called check_sshd that will use systemctl to check the state of your sshd service. If the service is running, return 0. If it is inactive, return 1. If it is failed, return 2. For any other result return 3.
  - Create a command definition called check_sshd_status that will call the check_sshd plugin.
  - Create a new service definition that will use the new command to check the status of your sshd service every two minutes, going into a hard-fail state on the third failed check.
  - Create an event handler script to restart sshd if it is inactive. Use the nagios macros to make sure it only tries to restart the service on the second failed check (that is, before it goes into a hard-fail state).
  - Add notifications similar to those for your other checks (you should be notified if the service goes into a hard-fail state, and the senior admin should be notified if you don't fix it).

## Investigation 4: Nagios Remote Commands

  - Clone your existing VM again. Call the new VM nagiosnrpe.<yourdomain\>.ops, provide it a static address of your choice, and add it to your DNS server.
  - Install NRPE on nagiosnrpe.
  - Make sure to modify the NRPE configuration on nagiosnrpe to allow your nagios server to contact it.
  - Copy your check_sshd plugin to nagiosnrpe, making sure the user account for nrpe can run it. Note you will have to negotiate this with sudo and selinux.
  - Add a command to your nrpe configuration to allow remote execution of check\_sshd.
  - Start and enable the service, and allow traffic to it through your firewall.
  - Back on your nagios server, add a new host definition for nagiosnrpe, and add a service that uses nrpe to run the check_sshd plugin on nagiosnrpe.
  - Ensure that the check runs correctly, then do something to intentionally make it fail (e.g. stop the sshd service), and ensure that that gets recorded too.

## Submission

Upload your lab.cfg, the nagios configuration from nagiosnrpe, your check\_sshd plugin, and your event handler to blackboard.

## Completing The Lab

You have now gained experience using common elements of nagios to monitor machines in your network. You have configured hosts that should be monitored, identified services to monitor on them, created contacts and notifications so that administrators will be notified when things to wrong (and senior admins can be notified if they don't get fixed), and used nrpe to allow checks to be performed remotely. You have also written simple checks to customize what you want monitored, and event handlers so that nagios can try to repair simple issues for you. There is still more to learn (host and service groups and dependencies will make your configuration much more efficient), but there is only so much room in the course. With what we have covered you have the basic building blocks to monitor your network.
