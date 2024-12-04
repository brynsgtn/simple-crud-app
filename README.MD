# Product Management API with Express and MongoDB

This project is a practice API for managing products. The API provides endpoints to create, read, update, and delete products using Express.js and MongoDB.

---

## Features
- Fetch all products
- Fetch a product by ID
- Add a new product
- Update an existing product
- Delete a product

---

## Technologies Used
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

---

## Requirements
- **Node.js** (v16 or later)
- **MongoDB** (connection string required)
- **Postman** or any API testing tool

---

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_directory>

2. Install dependencies::
   ```bash
   npm install

3. Set up the environment variables: Create a .env file and add the following:
   ```makefile
    MONGO_URI=<your_mongodb_connection_string>
    PORT=8000

4. Start the server:
   ```bash
   node server.js

The server will run at http://localhost:8000.
---

## API Endpoints

| Method  | Endpoint             | Description                |
|---------|-----------------------|----------------------------|
| GET     | `/api/products`       | Fetch all products         |
| GET     | `/api/products/:id`   | Fetch a single product     |
| POST    | `/api/products`       | Create a new product       |
| PUT     | `/api/products/:id`   | Update an existing product |
| DELETE  | `/api/products/:id`   | Delete a product           |


## Testing with Postman

### Base URL: http://localhost:8000/api/products


---

### Examples:

#### 1. Get all products:
- **Method**: `GET`  
- **URL**: `http://localhost:8000/api/products`

---

#### 2. Get a product by ID:
- **Method**: `GET`  
- **URL**: `http://localhost:8000/api/products/<product_id>`

---

#### 3. Create a product:
- **Method**: `POST`  
- **URL**: `http://localhost:8000/api/products`  
- **Body (JSON)**:  
  ```json
  {
    "name": "Product Name",
    "price": 99.99,
    "description": "Product description"
  }

#### 4. Update a product:
- **Method**: `PUT`  
- **URL**: `http://localhost:8000/api/products/<product_id>`  
- **Body (JSON)**:  
  ```json
    {
    "name": "Updated Product Name",
    "price": 129.99,
    "description": "Updated product description"
    }

#### 5. Delete a product:
- **Method**: `DELETE`  
- **URL**: `http://localhost:8000/api/products/<product_id>`  
- Replace <product_id> with the actual ID of the product you are working with.