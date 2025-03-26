# TodoAppClickHere

This app was created using Node version 16.20.2 and NPM version: 8.19.4. If you have trouble
getting the app to run I would suggest using these version of node and NPM.

First CD into the server folder and create a file called: ".env"

You will need to create a mongoDB cluster and get the URL for it and place this URL 
inside of this .env file (MONGOURI). Also put the rest of these inside of your .env file:
  
    MONGOURI=....
    JWT_SECRET=your_personal_secret
    PORT=8080
    SALT=10

To run app open 2 separate terminals. 

CD into server folder:
    run the commands:
        npm i  
        npm start

CD into client folder
    run the commands:
        npm i  
        npm start

App should now be running. Open browser to: localhost:3000
