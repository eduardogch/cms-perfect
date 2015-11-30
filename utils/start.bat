@echo off
cd..

:: Install NPM Packages
if not exist "%cd%\node_modules" npm install

:: Open project in the browser
start chrome http://localhost:3000/

:: Start Node
node app.js

pause