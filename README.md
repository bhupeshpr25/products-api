# PRODUCT API

## Introduction

This is a RESTful API built using Node.js, TypeScript, Express and PostgreSQL that provides functionality for managing users, products and categories.

## Tech Stack

The tech stack for this API includes:

- Node.js
- TypeScript
- Express
- PostgreSQL

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the server.

## Routes

This API supports the following routes:

### Users

- POST /user - create a new user
- POST /signin - signin user

### Products

- GET /api/products - get all products
- GET /api/product/:id - get a product by id
- POST /api/product - create a new product
- PUT /api/product/:id - update a product by id
- DELETE /api/product/:id - delete a product by id

### Categories

- GET /api/category - get all categories
- GET /api/category/:id - get a category by id
- POST /api/category - create a new category
- PUT /api/category/:id - update a category by id
- DELETE /api/category/:id - delete a category by id

## Schema

The schema for this API includes the following models:

- User
- Product
- Category

## Additional Features

This API has the following features:

- JWT authentication
- Deployment on render.com
- [live](https://products-api-render.onrender.com/)
