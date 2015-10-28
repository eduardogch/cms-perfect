#CMS Perfect - Platform to build a perfect CMS in Node.js
`Version: 1.5.0 Stable`

-----

## Requirements

* Ubuntu, Mac, Windows
* JavaScript, NodeJS, NPM, Angular, ActionHero, Bower
* RethinkDB, Redis, MongoDB
* WebStorm, Visual Studio Code, Gedit

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
	sudo npm install -g npm node-gyp nodemon mocha bower
	rm -rf node_modules && npm install && npm dedupe
	bower install
	nodemon app.js

-----

## Guide to install software needed in Ubuntu 14.04

### Install NodeJS, NPM and Mongo
	curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
	sudo apt-get update && sudo apt-get install nodejs node-gyp npm mongodb
	sudo ln -s /usr/bin/nodejs /usr/bin/node
	sudo npm install -g npm

### Install RethinkDB
    source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
    wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
    sudo apt-get update && sudo apt-get install rethinkdb 
    
### Config RethinkDB
    sudo cp /etc/rethinkdb/default.conf.sample /etc/rethinkdb/instances.d/instance1.conf
    sudo /etc/init.d/rethinkdb restart
    
    #Find and uncomment in .conf file http-port var
    sudo nano /etc/rethinkdb/instances.d/instance1.conf
        http-port=8081

### Install Redis
    sudo apt-get update && sudo apt-get install redis-server 
    sudo update-rc.d redis-server defaults 
    sudo /etc/init.d/redis-server start  

### References
    https://nodejs.org/en/download/
    https://rethinkdb.com/docs/install/
    https://docs.mongodb.org/manual/installation/
    http://redis.io/download

-----

## Run, debug and test In Webstorm

Set this values to Run and Debug the project:
	
	/usr/local/bin/nodemon
	DEBUG=test:*
	
![alt tag](http://i.imgur.com/KUBvW44.png)
	
	http://localhost:3000/
	
![alt tag](http://i.imgur.com/ciB0es1.png)


For testing use Mocha

	~/Apps/cms-perfect/test
	
![alt tag](http://i.imgur.com/JEcewFl.png)

-----

## Additional Information

Email [Email](mailto:eduardo.gch@gmail.com)

Twitter [Twitter](https://twitter.com/eduardochavira_)

Bitbucket [Bitbucket](https://bitbucket.org/eduardogch/cms-perfect)

Issues [Bitbucket](https://bitbucket.org/eduardogch/cms-perfect/issues)