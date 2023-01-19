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

- Import data to database, we can follow this command:

```
node dev-data/data/import-dev-data.js --import
```

- Delete data on database:

```
node dev-data/data/import-dev-data.js --delete
```

# API reference N/A

## Query operators

Natours API use four (04) operators:

- $gt: greater than to a value specified
- $gte: greater than or equal to a value specified
- $lt: less than to a value specified
- $lte: less than or equal to a value specified

example:

`curl http://localhost:8000/api/v1/tours?duration[gte]=5&difficulty=easy&price[gt]=1000`

## Sorting data

- Ascending:

  example:

  `curl http://localhost:8000/api/v1/tours?sort=price`

- Descending, by adding "`-`" sign:

  example:

  `curl http://localhost:8000/api/v1/tours?sort=-price`

## Get a specific fields

You could get a specific fields from data by using `fields` on our query string url.

example: we would only like to have the fields name and duration

`curl http://localhost:8000/api/v1/tours?fields=name,duration`

# Deployement N/A

# Author

Nirinasoa Herilanto

# Acknowledgement

Jonas teams
