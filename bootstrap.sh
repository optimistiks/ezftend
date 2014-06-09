#!/usr/bin/env bash

#install all we need from apt
apt-get update
apt-get install -y vim git
apt-get install -y build-essential python g++ make checkinstall fakeroot libfontconfig
apt-get install -y ruby

#install ruby gem
gem install compass

#install nodejs
mkdir ~/nodejs && cd $_
wget -N http://nodejs.org/dist/node-latest.tar.gz
tar xzvf node-latest.tar.gz && cd `ls -rd node-v*`
./configure
make install

#install npm
curl https://www.npmjs.org/install.sh | clean=no sh

#install yeoman
sudo npm install -g yo generator-cg-angular phantomjs

#install project
mkdir /home/vagrant/ezdict_frontend
cp /vagrant/package.json /home/vagrant/ezdict_frontend/package.json
cd /home/vagrant/ezdict_frontend
npm install
ln -s /home/vagrant/ezdict_frontend/node_modules /vagrant/node_modules
cd /vagrant
bower install
grunt test
