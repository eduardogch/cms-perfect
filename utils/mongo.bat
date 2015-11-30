@echo off

:: Create a data folder only if it doesn't already exist
if not exist "C:\data\db" mkdir "C:\data\db"

:: Start mongod
"%ProgramFiles%\MongoDB\Server\3.0\bin\mongod.exe" --dbpath "C:\data\db" --nojournal --logpath "C:\data\logs.txt" --install --serviceName "MongoDB"