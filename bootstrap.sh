#!/usr/bin/env bash

apt-get update
apt-get install -y vim git
apt-get install -y build-essential python g++ make checkinstall fakeroot

mkdir ~/nodejs && cd $_
wget -N http://nodejs.org/dist/node-latest.tar.gz
tar xzvf node-latest.tar.gz && cd `ls -rd node-v*`
./configure
make install

curl https://www.npmjs.org/install.sh | clean=no sh

#sudo npm install -g yo generator-cg-angular
