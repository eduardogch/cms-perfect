#CMS Perfect - Platform to build a perfect CMS in Node.js
`Version: 1.5.0 Stable`

-----

## Requirements

* Windows, Linux, Mac, 
* NodeJS, NPM, Angular, ActionHero, Bower
* MongoDB, Redis
* WebStorm, Nodepad++

## Project base on:

	https://github.com/sahat/hackathon-starter
	https://github.com/evantahler/actionhero

## Front-End Templates:

	http://startbootstrap.com/template-overviews/sb-admin-2/
	http://blacktie.co/2013/12/flatty-app-landing-page/

-----

# Quick Install
Just run in the console this commands:

	cd ~/Apps
	git clone https://eduardogch@bitbucket.org/eduardogch/cms-perfect.git
	cd cms-perfect
	npm install -g npm node-gyp nodemon mocha karma-cli bower gulp jshint
	npm install && bower install
	nodemon app.js

-----

## Run, debug and test In Webstorm

Run and Debug the project:
	
	C:\Users\Eduardo\AppData\Roaming\npm\nodemon.cmd
	DEBUG=test:*
	
![alt tag](http://i.imgur.com/DfOZhVl.png)

For Mocha server testing 

    C:\Apps\cms-perfect\test\server
	
![alt tag](http://i.imgur.com/AHy3zZU.png)

For Karma client testing 

![alt tag](http://i.imgur.com/lfuds5M.png)

For Gulp 
	
![alt tag](http://i.imgur.com/glK5QPC.png)

-----

## Guide to install software needed in Ubuntu 14.04

### Install NodeJS and NPM 
	curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
	sudo apt-get -y update sudo apt-get -y install nodejs node-gyp npm
	sudo ln -s /usr/bin/nodejs /usr/bin/node
	sudo npm install -g npm
	sudo npm install -g node-gyp nodemon mocha karma-cli bower gulp

### Install MongoDB
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
    echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
    sudo apt-get -y update && sudo apt-get -y install mongodb-org

### Install Redis
    sudo apt-get -y update && sudo apt-get -y install redis-server 
    sudo update-rc.d redis-server defaults 
    sudo /etc/init.d/redis-server start

### References
    https://nodejs.org/en/download/
    https://docs.mongodb.org/manual/installation/
    http://redis.io/download

-----

## Additional Information

Email [Email](mailto:eduardo.gch@gmail.com)

Twitter [Twitter](https://twitter.com/eduardochavira_)

Bitbucket [Bitbucket](https://bitbucket.org/eduardogch/cms-perfect)

Issues [Bitbucket](https://bitbucket.org/eduardogch/cms-perfect/issues)
