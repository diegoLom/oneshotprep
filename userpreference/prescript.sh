#!/bin/bash
sudo yum update -y
sudo rpm --import https://apt.corretto.aws/corretto.key
sudo curl -L -o /etc/yum.repos.d/corretto.repo https://apt.corretto.aws/corretto.repo
sudo yum install -y java-21-amazon-corretto-devel