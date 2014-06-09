#!/usr/bin/env bash

apt-get update
apt-get install -y vim git
apt-get install -y build-essential python g++ make checkinstall fakeroot libfontconfig

mkdir ~/nodejs && cd $_
wget -N http://nodejs.org/dist/node-latest.tar.gz
tar xzvf node-latest.tar.gz && cd `ls -rd node-v*`
./configure
make install

curl https://www.npmjs.org/install.sh | clean=no sh

sudo npm install -g yo generator-cg-angular phantomjs

mkdir /home/vagrant/ezdict_frontend
cp /vagrant/package.json /home/vagrant/ezdict_frontend/package.json
cd /home/vagrant/ezdict_frontend
npm install
ln -s /home/vagrant/ezdict_frontend/node_modules /vagrant/node_modules
cd /vagrant
bower install
grunt test
