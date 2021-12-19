# Express.js API

<h3 align="center">
	<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
	<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rogerCabral91/express-api">
	<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/rogerCabral91/express-api">
	<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rogerCabral91/express-api">
</h3>

<p align="center">A simple CRUD API using express.js.</p>

<h4 align="center"> 
	🚧  Express.js CRUD API 🚀 Under development...  🚧
</h4>

<p align="center">
	<a href="#about">About</a> •
	<a href="#features">Features</a> • 
	<a href="#preview">Preview</a> • 
	<a href="#requirements">Requirements</a> • 
	<a href="#running-the-api">Running the API</a> •
	<a href="#using-the-api">Using the API</a> •
	<a href="#technologies">Technologies</a>
</p>

## About
This API allows you to see the functioning of a CRUD working with a emulated database with the data persisting in memory, that is, once restarted the API loses the data.

## Features
- [x] Create a product
- [x] Read all products
- [x] Read a single product
- [x] Update a product
- [x] Delete a product
- [ ] Error handling

## Preview

Sample preview running the API:

![Preview](.github/preview.gif)

## Requirements

Before starting, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/).
Also it's nice to have an editor to work with code like [VS Code](https://code.visualstudio.com/) with the extension [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client), or an application like [Postman](postman.com) or [Insomnia](https://insomnia.rest/)

## Running the API

```bash
# Clone this repository
$ git clone https://github.com/rogerCabral91/express-api.git

# Access the project folder in the terminal/cmd
$ cd express-api

# Install dependencies
$ npm install

# Run the application
$ npm start

# The server will start on port:3003 - go to <http://localhost:3003>
```
## Using the API
### Create
In the API client use the POST method to insert data via form-encode passing the name and price keys with their respective values through Body Request;

### Read
To list ALL values use the GET method in '/products';
To list a specific entry use the GET method passing as parameter the desired ID, for example, 'products/2';

### Update
Use the same creation procedure but using the PUT method and passing the ID of the entry you want to update as a parameter, for example, 'products/7' changing the name to 'Updated Product' and the price to 9.99;

### Delete
Using the DELETE method, pass as a parameter the ID you want to delete, for example, delete the item ID 4;

## Technologies

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)

