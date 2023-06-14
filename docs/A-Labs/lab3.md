---
id: lab3
title: Lab 3
sidebar_position: 4
description: Lab 3 For Students to Complete and Submit
---

# Lab 3: Distributed FileSystems with GlusterFS

## Overview

In addition to traditional methods of remotely sharing files (e.g. NFS, samba), modern operating systems have the ability to access cloud-based distributed filesystems like GlusterFS. These can integrate the kinds of advantages you are used to seeing in RAID based fileystems (i.e. redundancy, self-healing, faster access) while removing the single-point-of-failure issue inherent in hosting a service on a single machine. While this lab does not explore the full functionality of this service (notably the use of arbiters, or combining the different types of GlusterFS volumes to gain the advantages of both), it will introduce you to be basics of creating a GlusterFS volume and accessing it from a client.

## Investigation 1: Creating a Distributed Filesystem in GlusterFS

  1. Install glusterfs on three virtual machines (either newly installed, or already configured from earlier labs). You will need a fourth machine (which can be your host, or another VM) to act as the client.
  2. Configure each server with two 1GiB xfs filesystems to be used in the distributed filesystem.
  3. Combine one brick from two VMs into a 2GiB distributed filesystem and mount it on your client. Use df -hT to view the size of the filesystem from the client’s perspective.
  4. On your client, copy or create 10 files in the remote mount.

        1. On each server, use ls to view which files are stored on each brick. Observe that only half the files appear on either server, but the client can view a complete list.
        2. Disable one of the bricks (e.g. by blocking the ports on the firewall), and observe which files remain visible on the client.
        3. Re-activate the brick, and observe that the client regains the ability to view all files.

## Investigation 2: Adding Bricks to a Distributed Filesystem in GlusterFS

  1. On the third server, create a 1GiB brick and add it to the volume.

        1. Remember to stop the volume before you add the brick to it. Then restart it.

  2. Use ls to observe even after it is added, no files are immediately stored on it.

        1. On the client create more files. Note that this may require re-mounting the filesystem in order to access the extended space.

## Investigation 3: Creating a Replicated Filesystem in GlusterFS

  1. Combine the remaining brick from each VM into a 1GiB replicated filesystem and mount it on your client. Use df -hT to view the size of the filesystem from the client’s perspective.

        1. On each server, use ls to view which files are stored on each brick. Observe that each brick has a duplicate set of files.
        2. Disable one of the bricks (e.g. by blocking the ports on the firewall), and observe that all files remain visible on the client.
        3. Re-activate the brick.
        4. On the third server, create a 1GiB brick and add it to the volume. Use ls to observe that it immediately obtains a copy of the files.
        5. Note that from the client perspective, this is still a 1GiB filesystem. It now simply has another duplicate copy of the files.

## Submission

upload the output of the following commands to blackboard:

  - gluster pool list
  - gluster volume info
  - gluster volume status
