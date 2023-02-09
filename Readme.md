# Natours

Natours app is an project for learning Node.JS, Express and MongoDB

# Getting Started

## Pre-require and local development

Actually, you can run the app locally by following this steps. After cloning this project, please make sure you are inside the project directory. Then, install all dependencies with this command in your terminal:

```
npm install
npm start // development mode
```

## Import/Delete dummy data

Before running this commande, please make sure you are inside the project directory.
Please comment `line 55 - line 73` in user model in order to disable a new encryption password, then
you can uncomment it after.

```
All users passwords are "test1234" in dev-data
```

- Import data to database, we can follow this command:

```
node dev-data/data/import-dev-data.js --import
```

- Delete data on database:

```
node dev-data/data/import-dev-data.js --delete
```

# API reference

During API development, I use `Postman` for handling/testing all endpoints.

- Base URL endpoints: `http://127.0.0.1:8000/api/V1/` or `http://localhost:8000/api/v1/`

## Request limit

100 request per hour.

## Query operators

Natours API use four (04) operators:

- $gt: greater than to a value specified
- $gte: greater than or equal to a value specified
- $lt: less than to a value specified
- $lte: less than or equal to a value specified

example:

`http://localhost:8000/api/v1/tours?duration[gte]=5&difficulty=easy&price[gt]=1000`

## Sorting data

- Ascending:

  example:

  `http://localhost:8000/api/v1/tours?sort=price`

- Descending, by adding "`-`" sign:

  example:

  `http://localhost:8000/api/v1/tours?sort=-price`

## Get a specific fields

You could get a specific fields from data by using `fields` on our query string url.

example: we would only like to have the fields name and duration

`http://localhost:8000/api/v1/tours?fields=name,duration`

# Deployement N/A

# Author

Nirinasoa Herilanto

# Acknowledgement

Jonas teams
