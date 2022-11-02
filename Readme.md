# Megaventory Backend Project

## General Info
This project has been created using NestJS with typescript.
Using Nest JS I have also created other projects such as:
https://github.com/vmarkop/dibid in which I have worked full stack 
but mainly backend with a colleague of mine from my univercity.

## Impimentation
In the Components folder we have a folder for every required Megaventory Entity.

In each folder there is a controller that has a custom post request for inserting every entity according to the Megaventory API Docs.
I am using also one service file for every entity to execute the post requests to MV API.
I have also created a script in the app.controller that creates the entities and using the posts I created inserts them into the MV API.
I insert every entity needed and if it already exists I take the one that exists and the I create the Sales Order in the same way I created 
and inserted the other entities.
