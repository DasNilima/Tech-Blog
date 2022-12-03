# Project Title: 

TECH-BLOG

## Project Description:

TECH-BLOG is s Simple MERN stack blog application with user authentication and authorization that let users CRUD (create, read, update, delete )operations with succesful logging in. This app only requires access to your accounts to fetch your unique ID for authentication/authorization purposes and no personal details is used by the application. Inspiration for this design is from reading blogs is a important part of software development journey.


## Tech stack consisting of
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&labelColor=black&logo=mongodb&logoColor=darkgreen)](#)[![Express Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&labelColor=black&logo=express&logoColor=white)](#)[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)[![React router Badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](#)[![Nodejs Badge](https://img.shields.io/badge/-Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)](#)[![Redux Badge](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](#)[![JSON WEB TOKENS Badge](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](#)[![Material UI Badge](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](#)[![NPM Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](#)





## How to use this app locally?

**Pre-requisites**

-  Fork this repo and run the `git clone <forked repo>` command from your terminal/bash
 ```sh 
git clone https://github.com/DasNilima/ToDo-Typescript.git 
```
-  cd into the directories and `npm install`
  ```bash
  cd server
  npm install

  cd client
  npm install
```
-   Create a `.env` file in the root directory and store the following:
    -  MONGO_URI = Insert the correct connection URL for your MongoDB database.
    -  JWT_SECRET='??'
-  Start the both server on seprate terminals

```bash
  cd server
  npm start
```

```bash
  cd client
  npm start
```


You can obtain the MONGO_URI after create a collectoin on [mongodb atlas](https://www.mongodb.com/cloud/atlas).

## Chanllenges faced

 Initially, The process of implementing authentication using JSON web token (JWTs) to be a little more cumbersome while creating two endpoint - signup and login with JSON web token, however, after creating successfully authentiation part with hashed password, and then creating the authorization part that allows access to user by providing a token that cantain user IDs and a secret key that used for encode the token and with this secret key decode the information as well.

## Future Improvements
 - Create a refresh Token route and sending refresh token request 
 - Create a social login options like Google ot Twitter accounts
 - Add more features with functionality, i,e. search implementation, like, comment features



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [CSS Gradient](https://cssgradient.io/)
* [CSS Animation](https://www.w3schools.com/)
* [Markdown File](https://docs.github.com/)




<!-- [![Typescript Badge](https://img.shields.io/badge/-Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)](#) -->