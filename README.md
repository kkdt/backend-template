# backend-template

> This has been tested on a Mac and UNIX host. If you are using a Windows host, please let me know if you run into any problems.

# Overview

The goal of this project is to demonstrate the use of [Vagrant](https://www.vagrantup.com/) to stand up a development environment to run one or more backend services. The focus will be to provide a quick way for developers to run code such that frontend developers will have a backend to hit, and backend developers will have an infrastructure to run and deploy code.

A hypothetical scenario would involve a team who is starting out a development project and are given the following requirements for backend services:

1. All services shall be Node modules
2. Service interfaces shall be REST
3. Inter-service interfaces shall be AMQP
4. Service persistence layer shall be CouchDB

The first step would be to do the leg work to build out a virtual machine with all the necessary backend COTs necessary to run services. For the scenario above, the actual work to do this is provided by [vagrant-sandbox](https://github.com/kkdt/vagrant-sandbox) and the box was published to [kkdt/g7dev](https://app.vagrantup.com/kkdt/boxes/g7dev) with the following specifications.

- CentOS 7.7.1908
- Node v13.7.0
- NPM 6.13.6
- Apache CouchDB 2.3.1
- RabbitMQ 3.3.5
- NGINX 1.16.1

# Quick Start

1. Install VirtualBox and Vagrant (i.e. Steps 1-4 in this [README](https://github.com/kkdt/vagrant-sandbox#quick-start))

2. Execute: `vagrant up`

3. On your host machine, open Firefox: `http://localhost:8000/rabbitmq/` to confirm that RabbitMQ is running on the virtual machine. Use `guest/guest` to log into the Management Console.

4. On your host machine, open Firefox: `http://localhost:8000/couchdb/` to confirm that CouchDB is running on the virtual machine.

5. On your host machine, access 'time' service: `http://localhost:8000/time`

6. On your host machine, access 'random' service: `http://localhost:8000/random`

7. Execute: `vagrant destroy -f` to remove all guest artifacts

# Frontend Development

Frontend developers can clone or start developing their respective baseline locally - i.e. on the host machine. Once they do a `vagrant up`, they will have endpoints rooted at the NGINX proxy to resolve any CORS issues.

# Backend Development

Backend developers can update the baseline with new services or update existing ones and the updates will be sync'd to the guest machine. To restart the service after updates, log into the virtual machine by doing `vagrant ssh` and kill/restart the process.

# References

1. https://tecadmin.net/install-apache-couchdb-on-centos/

2. https://www.tecmint.com/nginx-as-reverse-proxy-for-nodejs-app/

3. https://nodejs.org/en/docs/guides/getting-started-guide/

4. https://docs.bit.dev/docs/bit-server

5. https://github.com/moby/moby/blob/master/contrib/mkimage-yum.sh

6. https://stackoverflow.com/questions/26153686/how-do-i-run-a-command-on-an-already-existing-docker-container

7. https://github.com/docker/for-linux/issues/561
