FROM node:0.10
RUN apt-get update
RUN apt-get install -y build-essential python g++ make checkinstall fakeroot libfontconfig ruby ruby-dev && gem install compass
RUN npm install -g yo generator-cg-angular phantomjs grunt-cli bower
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 80 9000 35729
CMD ["/bin/bash"]
