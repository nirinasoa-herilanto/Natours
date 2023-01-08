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

- Postman collection/documentation is available on this link [click here](https://documenter.getpostman.com/view/17022828/2s935soMcg)
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

- request: `http://localhost:8000/api/v1/tours?duration[gte]=5&difficulty=easy&price[gt]=1000`
- response:

```
{
    "status": "success",
    "requestAt": "2023-02-10T06:33:10.615Z",
    "results": 2,
    "data": [
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -73.985141,
                    40.75894
                ],
                "address": "Manhattan, NY 10036, USA",
                "description": "NYC, USA"
            },
            "_id": "5c88fa8cf4afda39709c295d",
            "name": "The City Wanderer",
            "duration": 9,
            "maxGroupSize": 20,
            "difficulty": "easy",
            "ratingsAverage": 4.6,
            "ratingsQuantity": 5,
            "price": 1197,
            "summary": "Living the life of Wanderlust in the US' most beatiful cities",
            "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!",
            "imageCover": "tour-4-cover.jpg",
            "images": [
                "tour-4-1.jpg",
                "tour-4-2.jpg",
                "tour-4-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-03-11T10:00:00.000Z",
                "2021-05-02T09:00:00.000Z",
                "2021-06-09T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -73.967696,
                        40.781821
                    ],
                    "description": "New York",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2960"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.324396,
                        34.097984
                    ],
                    "description": "Los Angeles",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c295f"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -122.408865,
                        37.787825
                    ],
                    "description": "San Francisco",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c295e"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a22c62f8fb814b56fa18b",
                    "name": "Miyah Myles",
                    "email": "miyah@example.com",
                    "photo": "user-12.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a201e2f8fb814b56fa186",
                    "name": "Kate Morrison",
                    "email": "kate@example.com",
                    "photo": "user-7.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-city-wanderer",
            "durationWeeks": 1.2857142857142858,
            "id": "5c88fa8cf4afda39709c295d"
        },
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -122.29286,
                    38.294065
                ],
                "address": "560 Jefferson St, Napa, CA 94559, USA",
                "description": "California, USA"
            },
            "_id": "5c88fa8cf4afda39709c296c",
            "name": "The Wine Taster",
            "duration": 5,
            "maxGroupSize": 8,
            "difficulty": "easy",
            "ratingsAverage": 4.4,
            "ratingsQuantity": 7,
            "price": 1997,
            "summary": "Exquisite wines, scenic views, exclusive barrel tastings,  and much more",
            "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "imageCover": "tour-7-cover.jpg",
            "images": [
                "tour-7-1.jpg",
                "tour-7-2.jpg",
                "tour-7-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-02-12T10:00:00.000Z",
                "2021-04-14T09:00:00.000Z",
                "2021-09-01T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -122.479887,
                        38.510312
                    ],
                    "description": "Beringer Vineyards",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c296f"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -122.582948,
                        38.585707
                    ],
                    "description": "Clos Pegase Winery & Tasting Room",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c296e"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -122.434697,
                        38.482181
                    ],
                    "description": "Raymond Vineyard and Cellar",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c296d"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a22c62f8fb814b56fa18b",
                    "name": "Miyah Myles",
                    "email": "miyah@example.com",
                    "photo": "user-12.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a23412f8fb814b56fa18c",
                    "name": "Ben Hadley",
                    "email": "ben@example.com",
                    "photo": "user-13.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-wine-taster",
            "durationWeeks": 0.7142857142857143,
            "id": "5c88fa8cf4afda39709c296c"
        }
    ]
}

```

## Sorting data

- Ascending:

  - request: `http://localhost:8000/api/v1/tours?sort=price`
  - response:

  ```
  {
    "status": "success",
    "requestAt": "2023-02-10T06:35:47.899Z",
    "results": 9,
    "data": [
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -115.570154,
                    51.178456
                ],
                "address": "224 Banff Ave, Banff, AB, Canada",
                "description": "Banff, CAN"
            },
            "_id": "5c88fa8cf4afda39709c2951",
            "name": "The Forest Hiker",
            "duration": 5,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "ratingsAverage": 5,
            "ratingsQuantity": 9,
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "images": [
                "tour-1-1.jpg",
                "tour-1-2.jpg",
                "tour-1-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-04-25T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-10-05T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -116.214531,
                        51.417611
                    ],
                    "description": "Banff National Park",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2954"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.076152,
                        52.875223
                    ],
                    "description": "Jasper National Park",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2953"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -117.490309,
                        51.261937
                    ],
                    "description": "Glacier National Park of Canada",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c2952"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a201e2f8fb814b56fa186",
                    "name": "Kate Morrison",
                    "email": "kate@example.com",
                    "photo": "user-7.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-forest-hiker",
            "durationWeeks": 0.7142857142857143,
            "id": "5c88fa8cf4afda39709c2951"
        },
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -80.185942,
                    25.774772
                ],
                "address": "301 Biscayne Blvd, Miami, FL 33132, USA",
                "description": "Miami, USA"
            },
            "_id": "5c88fa8cf4afda39709c2955",
            "name": "The Sea Explorer",
            "duration": 7,
            "maxGroupSize": 15,
            "difficulty": "medium",
            "ratingsAverage": 4.8,
            "ratingsQuantity": 6,
            "price": 497,
            "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
            "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "imageCover": "tour-2-cover.jpg",
            "images": [
                "tour-2-1.jpg",
                "tour-2-2.jpg",
                "tour-2-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-06-19T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-08-18T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -80.128473,
                        25.781842
                    ],
                    "description": "Lummus Park Beach",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2959"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -80.647885,
                        24.909047
                    ],
                    "description": "Islamorada",
                    "day": 2,
                    "_id": "5c88fa8cf4afda39709c2958"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -81.0784,
                        24.707496
                    ],
                    "description": "Sombrero Beach",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2957"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -81.768719,
                        24.552242
                    ],
                    "description": "West Key",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c2956"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a22c62f8fb814b56fa18b",
                    "name": "Miyah Myles",
                    "email": "miyah@example.com",
                    "photo": "user-12.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-sea-explorer",
            "durationWeeks": 1,
            "id": "5c88fa8cf4afda39709c2955"
        },
        ...
    ]
  }
  ```

- Descending, by adding "`-`" sign:

  - request: `http://localhost:8000/api/v1/tours?sort=-price`
  - response:

  ```
  {
    "status": "success",
    "requestAt": "2023-02-10T06:37:16.952Z",
    "results": 9,
    "data": [
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -109.55099,
                    37.283469
                ],
                "address": "Bluff, UT 84512, USA",
                "description": "Utah, USA"
            },
            "_id": "5c88fa8cf4afda39709c2970",
            "name": "The Star Gazer",
            "duration": 9,
            "maxGroupSize": 8,
            "difficulty": "medium",
            "ratingsAverage": 4.8,
            "ratingsQuantity": 6,
            "price": 2997,
            "summary": "The most remote and stunningly beautiful places for seeing the night sky",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-8-cover.jpg",
            "images": [
                "tour-8-1.jpg",
                "tour-8-2.jpg",
                "tour-8-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-03-23T10:00:00.000Z",
                "2021-10-25T09:00:00.000Z",
                "2022-01-30T10:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -109.99953,
                        37.629017
                    ],
                    "description": "Natural Bridges National Monument",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2973"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -111.50954,
                        36.883269
                    ],
                    "description": "Horseshoe Bend",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2972"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -117.07399,
                        36.501435
                    ],
                    "description": "Death Valley National Park",
                    "day": 6,
                    "_id": "5c88fa8cf4afda39709c2971"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-star-gazer",
            "durationWeeks": 1.2857142857142858,
            "id": "5c88fa8cf4afda39709c2970"
        },
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -118.803461,
                    34.006072
                ],
                "address": "29130 Cliffside Dr, Malibu, CA 90265, USA",
                "description": "California, USA"
            },
            "_id": "5c88fa8cf4afda39709c2966",
            "name": "The Sports Lover",
            "duration": 14,
            "maxGroupSize": 8,
            "difficulty": "difficult",
            "ratingsAverage": 3.9,
            "ratingsQuantity": 8,
            "price": 2997,
            "summary": "Surfing, skating, parajumping, rock climbing and more, all in one tour",
            "description": "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nVoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!",
            "imageCover": "tour-6-cover.jpg",
            "images": [
                "tour-6-1.jpg",
                "tour-6-2.jpg",
                "tour-6-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-07-19T09:00:00.000Z",
                "2021-09-06T09:00:00.000Z",
                "2022-03-18T10:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -118.809361,
                        34.003098
                    ],
                    "description": "Point Dume Beach",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c296b"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.47549,
                        33.987367
                    ],
                    "description": "Venice Skate Park",
                    "day": 4,
                    "_id": "5c88fa8cf4afda39709c296a"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -116.830104,
                        33.022843
                    ],
                    "description": "San Diego Skydive",
                    "day": 6,
                    "_id": "5c88fa8cf4afda39709c2969"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.4547,
                        35.710359
                    ],
                    "description": "Kern River Rafting",
                    "day": 7,
                    "_id": "5c88fa8cf4afda39709c2968"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -119.600492,
                        37.742371
                    ],
                    "description": "Yosemite National Park",
                    "day": 10,
                    "_id": "5c88fa8cf4afda39709c2967"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21f22f8fb814b56fa18a",
                    "name": "Aarav Lynn",
                    "email": "aarav@example.com",
                    "photo": "user-11.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-sports-lover",
            "durationWeeks": 2,
            "id": "5c88fa8cf4afda39709c2966"
        },
        ...
    ]
  }
  ```

## Get a specific fields

You could get a specific fields from data by using `fields` on our query string url.

example: we would only like to have the fields name and duration

- request: `http://localhost:8000/api/v1/tours?fields=name,duration`
- response:

```
{
    "status": "success",
    "requestAt": "2023-02-10T06:39:09.052Z",
    "results": 9,
    "data": [
        {
            "_id": "5c88fa8cf4afda39709c2955",
            "name": "The Sea Explorer",
            "duration": 7,
            "guides": [
                {
                    "_id": "5c8a22c62f8fb814b56fa18b",
                    "name": "Miyah Myles",
                    "email": "miyah@example.com",
                    "photo": "user-12.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "durationWeeks": 1,
            "id": "5c88fa8cf4afda39709c2955"
        },
        {
            "_id": "5c88fa8cf4afda39709c295a",
            "name": "The Snow Adventurer",
            "duration": 4,
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a23412f8fb814b56fa18c",
                    "name": "Ben Hadley",
                    "email": "ben@example.com",
                    "photo": "user-13.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "durationWeeks": 0.5714285714285714,
            "id": "5c88fa8cf4afda39709c295a"
        },
        ...
    ]
}
```

## Authentication & permission

Natours Api, have many routes that needs a authentication & permission in order to perfom certains operations. i.e users must logged in before doing some request on the server.

- All permissions:
  - user
  - guide
  - lead-guide
  - admin

## Error handling

All errors are return as JSON object with the following format:

- Development mode:

```
{
  "status": 'fail',
  "message": "error message",
  "error": error details,
  "stackTrace": stack trace
}

```

- Production mode:

```
{
  "status": 'fail',
  "message": "error message",
}

```

The API will return two(02) errors types when request fails:

- All status code start with 4xx, is marked as "fail"
- All status code start with 5xx, is marked as "error"

## Auth (users)

All about user API.

### Signup (POST)

Use to signup on the app.

- request: `/api/v1/users/signup`
- body:

```
{
  "name": "user",
  "email": "user@example.com",
  "password": "test1234",
  "passwordConfirm": "test1234"
}
```

- response:

```
{
    "status": "success",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTVlOTNkOWQyNzgzMjFjYzQ4NWUwMSIsImlhdCI6MTY3NjAxMTgzOCwiZXhwIjoxNjc2MDk4MjM4fQ.vtLeWsiYJfmq3o8UWX2xaxmp8E0ogZ0be0xXvsKKyGI",
    "data": {
        "user": {
            "name": "user",
            "email": "user@example.com",
            "role": "user",
            "createdAt": "2023-02-10T06:31:59.760Z",
            "_id": "63e5e93d9d278321cc485e01",
        }
    }
}
```

### Log in (POST)

Use to connect on the app.

- request: `/api/v1/users/login`
- body:

```
{
    "email": "users@example.com",
    "password": "test1234"
}
```

- response:

```
{
    "status": "success",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTVlOTNkOWQyNzgzMjFjYzQ4NWUwMSIsImlhdCI6MTY3NjAxMjAwMCwiZXhwIjoxNjc2MDk4NDAwfQ.mkLwB4u9w73QL164lvA34FyfWYX5cn8MJueezrbUDXo"
}
```

### View profile (GET)

Use to view your profile

- request: `/api/v1/users/profile`
- auth required: `true`
- response:

```
{
    "status": "success",
    "data": {
        "data": {
            "_id": "63e5e93d9d278321cc485e01",
            "name": "user",
            "email": "user@example.com",
            "role": "user",
            "createdAt": "2023-02-10T06:31:59.760Z",
        }
    }
}
```

### Update profile (PATCH)

Use to update user profile

- request: `/api/v1/users/update-profile`
- auth required: `true`
- body:

```
{
    "name": "Nirinasoa Herilanto"
}
```

- response:

```
{
    "status": "success",
    "data": {
        "user": {
            "_id": "63e5e93d9d278321cc485e01",
            "name": "Nirinasoa Herilanto",
            "email": "user@example.com",
            "role": "user",
            "createdAt": "2023-02-10T06:31:59.760Z",
        }
    }
}
```

### Forgot password (POST)

- request: `/api/v1/users/forgot-password`
- body:

```
{
    "email": "user@example.com"
}
```

- response:

```
{
    "status": "success",
    "message": "Token send to the email!"
}
```

### Reset password (PATCH)

- request: `/api/v1/users/reset-password/11874c995473e36ed1a37eff9db91da69554da8ca6491a7e47ab52b1bedd633b`
- body:

```
{
    "password":"new_password",
    "passwordConfirm":"new_password_confirm"
}
```

- response:

```
{
    "status": "success",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTVlOTNkOWQyNzgzMjFjYzQ4NWUwMSIsImlhdCI6MTY3NjAxMjY1MCwiZXhwIjoxNjc2MDk5MDUwfQ.Vvjv2f0VRi2zc97Tnpk-xWu3jlkdcZ_HWuP0OYdrAoQ"
}
```

## Tours

All about Tour API

### Get all tours (GET)

Use to view all tours available on the Natours App. The results are paginated by default 10;

- request: `/api/v1/tours` or `/api/v1/tours?page=2`
- response:

```
{
    "status": "success",
    "requestAt": "2023-02-10T07:30:36.648Z",
    "results": 9,
    "data": [
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -80.185942,
                    25.774772
                ],
                "address": "301 Biscayne Blvd, Miami, FL 33132, USA",
                "description": "Miami, USA"
            },
            "_id": "5c88fa8cf4afda39709c2955",
            "name": "The Sea Explorer",
            "duration": 7,
            "maxGroupSize": 15,
            "difficulty": "medium",
            "ratingsAverage": 4.8,
            "ratingsQuantity": 6,
            "price": 497,
            "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
            "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "imageCover": "tour-2-cover.jpg",
            "images": [
                "tour-2-1.jpg",
                "tour-2-2.jpg",
                "tour-2-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-06-19T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-08-18T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -80.128473,
                        25.781842
                    ],
                    "description": "Lummus Park Beach",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2959"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -80.647885,
                        24.909047
                    ],
                    "description": "Islamorada",
                    "day": 2,
                    "_id": "5c88fa8cf4afda39709c2958"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -81.0784,
                        24.707496
                    ],
                    "description": "Sombrero Beach",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2957"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -81.768719,
                        24.552242
                    ],
                    "description": "West Key",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c2956"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a22c62f8fb814b56fa18b",
                    "name": "Miyah Myles",
                    "email": "miyah@example.com",
                    "photo": "user-12.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-sea-explorer",
            "durationWeeks": 1,
            "id": "5c88fa8cf4afda39709c2955"
        },
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -106.822318,
                    39.190872
                ],
                "address": "419 S Mill St, Aspen, CO 81611, USA",
                "description": "Aspen, USA"
            },
            "_id": "5c88fa8cf4afda39709c295a",
            "name": "The Snow Adventurer",
            "duration": 4,
            "maxGroupSize": 10,
            "difficulty": "difficult",
            "ratingsAverage": 4.5,
            "ratingsQuantity": 6,
            "price": 997,
            "summary": "Exciting adventure in the snow with snowboarding and skiing",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
            "imageCover": "tour-3-cover.jpg",
            "images": [
                "tour-3-1.jpg",
                "tour-3-2.jpg",
                "tour-3-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2022-01-05T10:00:00.000Z",
                "2022-02-12T10:00:00.000Z",
                "2023-01-06T10:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -106.855385,
                        39.182677
                    ],
                    "description": "Aspen Highlands",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c295c"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -106.516623,
                        39.60499
                    ],
                    "description": "Beaver Creek",
                    "day": 2,
                    "_id": "5c88fa8cf4afda39709c295b"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a23412f8fb814b56fa18c",
                    "name": "Ben Hadley",
                    "email": "ben@example.com",
                    "photo": "user-13.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-snow-adventurer",
            "durationWeeks": 0.5714285714285714,
            "id": "5c88fa8cf4afda39709c295a"
        },
        ...
    ]
}
```

### Get a specific tour (GET)

Use to view a specific tour by providing id of the tour.

- request: `/api/v1/tours/5c88fa8cf4afda39709c2951`
- response:

```
{
    "status": "success",
    "data": {
        "data": {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -115.570154,
                    51.178456
                ],
                "address": "224 Banff Ave, Banff, AB, Canada",
                "description": "Banff, CAN"
            },
            "_id": "5c88fa8cf4afda39709c2951",
            "name": "The Forest Hiker",
            "duration": 5,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "ratingsAverage": 5,
            "ratingsQuantity": 9,
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "images": [
                "tour-1-1.jpg",
                "tour-1-2.jpg",
                "tour-1-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-04-25T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-10-05T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -116.214531,
                        51.417611
                    ],
                    "description": "Banff National Park",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2954"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.076152,
                        52.875223
                    ],
                    "description": "Jasper National Park",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2953"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -117.490309,
                        51.261937
                    ],
                    "description": "Glacier National Park of Canada",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c2952"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a201e2f8fb814b56fa186",
                    "name": "Kate Morrison",
                    "email": "kate@example.com",
                    "photo": "user-7.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-forest-hiker",
            "__v": 0,
            "durationWeeks": 0.7142857142857143,
            "reviews": [
                {
                    "_id": "5c8a381714eb5c17645c9115",
                    "review": "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
                    "rating": 5,
                    "tour": "5c88fa8cf4afda39709c2951",
                    "user": {
                        "_id": "5c8a1ec62f8fb814b56fa183",
                        "name": "Ayla Cornell",
                        "photo": "user-4.jpg"
                    },
                    "createdAt": "2023-02-08T11:27:03.329Z",
                    "__v": 0,
                    "id": "5c8a381714eb5c17645c9115"
                },
               ...
            ],
            "id": "5c88fa8cf4afda39709c2951"
        }
    }
}

```

### Add new tour (POST)

Use to add new tour on the app.

- request: `/api/v1/tours`
- auth required: `true`
- permission: `admin`, `lead-guide`
- body:

```
  {
    "name": "Beauty landing park",
    "duration": 5,
    "maxGroupSize": 25,
    "difficulty": "easy",
    "ratingsAverage": 4.7,
    "ratingsQuantity": 37,
    "price": 397,
    "summary": "Breathtaking hike through the Canadian Banff National Park",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imageCover": "tour-1-cover.jpg",
    "images": ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
    "startDates": ["2021-04-25,10:00", "2021-07-20,10:00", "2021-10-05,10:00"],
    "startLocation": {
                "type": "Point",
                "coordinates": [
                    -73.985141,
                    40.75894
                ],
                "address": "Manhattan, NY 10036, USA",
                "description": "NYC, USA"
            },
    "guides": [
        "5c8a1f292f8fb814b56fa184"
    ]
  }
```

- response:

```
{
    "success": "success",
    "data": {
        "data": {
            "name": "Beauty landing park",
            "duration": 5,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "ratingsAverage": 4.7,
            "ratingsQuantity": 37,
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "images": [
                "tour-1-1.jpg",
                "tour-1-2.jpg",
                "tour-1-3.jpg"
            ],
            "createdAt": "2023-02-10T06:31:57.296Z",
            "startDates": [
                "2021-04-25T07:00:00.000Z",
                "2021-07-20T07:00:00.000Z",
                "2021-10-05T07:00:00.000Z"
            ],
            "secretTour": false,
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -73.985141,
                    40.75894
                ],
                "address": "Manhattan, NY 10036, USA",
                "description": "NYC, USA"
            },
            "guides": [
                "5c8a1f292f8fb814b56fa184"
            ],
            "_id": "63e5f70e9d278321cc485e44",
            "locations": [],
            "slug": "beauty-landing-park",
            "__v": 0,
            "durationWeeks": 0.7142857142857143,
            "id": "63e5f70e9d278321cc485e44"
        }
    }
}
```

### Update tour (PATCH)

Use to update a specific tour.

- request: `/api/v1/tours/63e5f70e9d278321cc485e44`
- auth required: `true`
- permission: `admin`, `lead-guide`
- body:

```
{
    "duration": 10
}
```

- response:

```
{
    "status": "success",
    "data": {
        "data": {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -73.985141,
                    40.75894
                ],
                "address": "Manhattan, NY 10036, USA",
                "description": "NYC, USA"
            },
            "_id": "63e5f70e9d278321cc485e44",
            "name": "Beauty landing park",
            "duration": 10,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "ratingsAverage": 4.7,
            "ratingsQuantity": 37,
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "images": [
                "tour-1-1.jpg",
                "tour-1-2.jpg",
                "tour-1-3.jpg"
            ],
            "createdAt": "2023-02-10T06:31:57.296Z",
            "startDates": [
                "2021-04-25T07:00:00.000Z",
                "2021-07-20T07:00:00.000Z",
                "2021-10-05T07:00:00.000Z"
            ],
            "secretTour": false,
            "guides": [
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                }
            ],
            "locations": [],
            "slug": "beauty-landing-park",
            "__v": 0,
            "durationWeeks": 1.4285714285714286,
            "id": "63e5f70e9d278321cc485e44"
        }
    }
}
```

### Delete tour (DELETE)

Use to delete a specfic tour.

- request: `/api/v1/tours/63e5f70e9d278321cc485e44`
- auth required: `true`
- permission: `admin`, `lead-guide`
- response:

```
No content with status code 204
```

## Reviews

All about Review API. Only the simple user and the admin can perform the operation.

### Get all reviews (GET)

Use to get all reviews on the app. The results are paginated by default 10;

- request: `/api/v1/reviews` or `/api/v1/reviews?page=2`
- response:

```
{
    "status": "success",
    "requestAt": "2023-02-10T08:05:22.032Z",
    "results": 10,
    "data": [
        {
            "_id": "63e5fa109d278321cc485e55",
            "review": "Amazing tour :)",
            "rating": 5,
            "tour": "5c88fa8cf4afda39709c2951",
            "user": {
                "_id": "63e5e93d9d278321cc485e01",
                "name": "Nirinasoa Herilanto"
            },
            "createdAt": "2023-02-10T06:32:02.553Z",
            "id": "63e5fa109d278321cc485e55"
        },
        ...
    ]
}
```

### Add new review on tour (POST)

Use to post a new review on specific tour.

- request: `/api/v1/reviews` or `/api/v1/tours/5c88fa8cf4afda39709c2951/reviews`
- auth required: `true`
- permission: `user`
- body:

```
{
    "review": "Amazing tour :)",
    "rating": 5,
    "tour": "5c88fa8cf4afda39709c2951" // required on `/api/v1/reviews` endpoints
}
```

### Update review (PATCH)

Use to update review. Only the user who posted this review perform the action or admin.

- request: `/api/v1/reviews/5c88fa8cf4afda39709c2951`
- auth required: `true`
- permission: `admin`, `user`
- body:

```
{
    "rating": 3.9
}
```

- response:

```
{
    "status": "success",
    "data": {
        "data": {
            "_id": "63e5fa109d278321cc485e55",
            "review": "Amazing tour :)",
            "rating": 3.9,
            "tour": "5c88fa8cf4afda39709c2951",
            "user": {
                "_id": "63e5e93d9d278321cc485e01",
                "name": "Nirinasoa Herilanto"
            },
            "createdAt": "2023-02-10T06:32:02.553Z",
            "__v": 0,
            "id": "63e5fa109d278321cc485e55"
        }
    }
}
```

### Delete review (DELETE)

Use to delete review. Only the user who posted this review perform the action or admin.

- request: `/api/v1/reviews/63e5fa109d278321cc485e55`
- auth required: `true`
- permission: `admin`, `user`
- response:

```
No content with status code 204
```

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

  - request: `http://localhost:8000/api/v1/tours?sort=price`
  - response:

  ```
  {
    "status": "success",
    "requestAt": "2023-02-10T06:35:47.899Z",
    "results": 9,
    "data": [
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -115.570154,
                    51.178456
                ],
                "address": "224 Banff Ave, Banff, AB, Canada",
                "description": "Banff, CAN"
            },
            "_id": "5c88fa8cf4afda39709c2951",
            "name": "The Forest Hiker",
            "duration": 5,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "ratingsAverage": 5,
            "ratingsQuantity": 9,
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "images": [
                "tour-1-1.jpg",
                "tour-1-2.jpg",
                "tour-1-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-04-25T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-10-05T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -116.214531,
                        51.417611
                    ],
                    "description": "Banff National Park",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2954"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.076152,
                        52.875223
                    ],
                    "description": "Jasper National Park",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2953"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -117.490309,
                        51.261937
                    ],
                    "description": "Glacier National Park of Canada",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c2952"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a201e2f8fb814b56fa186",
                    "name": "Kate Morrison",
                    "email": "kate@example.com",
                    "photo": "user-7.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-forest-hiker",
            "durationWeeks": 0.7142857142857143,
            "id": "5c88fa8cf4afda39709c2951"
        },
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -80.185942,
                    25.774772
                ],
                "address": "301 Biscayne Blvd, Miami, FL 33132, USA",
                "description": "Miami, USA"
            },
            "_id": "5c88fa8cf4afda39709c2955",
            "name": "The Sea Explorer",
            "duration": 7,
            "maxGroupSize": 15,
            "difficulty": "medium",
            "ratingsAverage": 4.8,
            "ratingsQuantity": 6,
            "price": 497,
            "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
            "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "imageCover": "tour-2-cover.jpg",
            "images": [
                "tour-2-1.jpg",
                "tour-2-2.jpg",
                "tour-2-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-06-19T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-08-18T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -80.128473,
                        25.781842
                    ],
                    "description": "Lummus Park Beach",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2959"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -80.647885,
                        24.909047
                    ],
                    "description": "Islamorada",
                    "day": 2,
                    "_id": "5c88fa8cf4afda39709c2958"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -81.0784,
                        24.707496
                    ],
                    "description": "Sombrero Beach",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2957"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -81.768719,
                        24.552242
                    ],
                    "description": "West Key",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c2956"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a22c62f8fb814b56fa18b",
                    "name": "Miyah Myles",
                    "email": "miyah@example.com",
                    "photo": "user-12.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-sea-explorer",
            "durationWeeks": 1,
            "id": "5c88fa8cf4afda39709c2955"
        },
        ...
    ]
  }
  ```

- Descending, by adding "`-`" sign:

  - request: `http://localhost:8000/api/v1/tours?sort=-price`
  - response:

  ```
  {
    "status": "success",
    "requestAt": "2023-02-10T06:37:16.952Z",
    "results": 9,
    "data": [
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -109.55099,
                    37.283469
                ],
                "address": "Bluff, UT 84512, USA",
                "description": "Utah, USA"
            },
            "_id": "5c88fa8cf4afda39709c2970",
            "name": "The Star Gazer",
            "duration": 9,
            "maxGroupSize": 8,
            "difficulty": "medium",
            "ratingsAverage": 4.8,
            "ratingsQuantity": 6,
            "price": 2997,
            "summary": "The most remote and stunningly beautiful places for seeing the night sky",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-8-cover.jpg",
            "images": [
                "tour-8-1.jpg",
                "tour-8-2.jpg",
                "tour-8-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-03-23T10:00:00.000Z",
                "2021-10-25T09:00:00.000Z",
                "2022-01-30T10:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -109.99953,
                        37.629017
                    ],
                    "description": "Natural Bridges National Monument",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2973"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -111.50954,
                        36.883269
                    ],
                    "description": "Horseshoe Bend",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2972"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -117.07399,
                        36.501435
                    ],
                    "description": "Death Valley National Park",
                    "day": 6,
                    "_id": "5c88fa8cf4afda39709c2971"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-star-gazer",
            "durationWeeks": 1.2857142857142858,
            "id": "5c88fa8cf4afda39709c2970"
        },
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -118.803461,
                    34.006072
                ],
                "address": "29130 Cliffside Dr, Malibu, CA 90265, USA",
                "description": "California, USA"
            },
            "_id": "5c88fa8cf4afda39709c2966",
            "name": "The Sports Lover",
            "duration": 14,
            "maxGroupSize": 8,
            "difficulty": "difficult",
            "ratingsAverage": 3.9,
            "ratingsQuantity": 8,
            "price": 2997,
            "summary": "Surfing, skating, parajumping, rock climbing and more, all in one tour",
            "description": "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nVoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!",
            "imageCover": "tour-6-cover.jpg",
            "images": [
                "tour-6-1.jpg",
                "tour-6-2.jpg",
                "tour-6-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-07-19T09:00:00.000Z",
                "2021-09-06T09:00:00.000Z",
                "2022-03-18T10:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -118.809361,
                        34.003098
                    ],
                    "description": "Point Dume Beach",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c296b"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.47549,
                        33.987367
                    ],
                    "description": "Venice Skate Park",
                    "day": 4,
                    "_id": "5c88fa8cf4afda39709c296a"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -116.830104,
                        33.022843
                    ],
                    "description": "San Diego Skydive",
                    "day": 6,
                    "_id": "5c88fa8cf4afda39709c2969"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.4547,
                        35.710359
                    ],
                    "description": "Kern River Rafting",
                    "day": 7,
                    "_id": "5c88fa8cf4afda39709c2968"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -119.600492,
                        37.742371
                    ],
                    "description": "Yosemite National Park",
                    "day": 10,
                    "_id": "5c88fa8cf4afda39709c2967"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21f22f8fb814b56fa18a",
                    "name": "Aarav Lynn",
                    "email": "aarav@example.com",
                    "photo": "user-11.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-sports-lover",
            "durationWeeks": 2,
            "id": "5c88fa8cf4afda39709c2966"
        },
        ...
    ]
  }
  ```

## Get a specific fields

You could get a specific fields from data by using `fields` on our query string url.

example: we would only like to have the fields name and duration

- request: `http://localhost:8000/api/v1/tours?fields=name,duration`
- response:

```
{
    "status": "success",
    "requestAt": "2023-02-10T06:39:09.052Z",
    "results": 9,
    "data": [
        {
            "_id": "5c88fa8cf4afda39709c2955",
            "name": "The Sea Explorer",
            "duration": 7,
            "guides": [
                {
                    "_id": "5c8a22c62f8fb814b56fa18b",
                    "name": "Miyah Myles",
                    "email": "miyah@example.com",
                    "photo": "user-12.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "durationWeeks": 1,
            "id": "5c88fa8cf4afda39709c2955"
        },
        {
            "_id": "5c88fa8cf4afda39709c295a",
            "name": "The Snow Adventurer",
            "duration": 4,
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a23412f8fb814b56fa18c",
                    "name": "Ben Hadley",
                    "email": "ben@example.com",
                    "photo": "user-13.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "durationWeeks": 0.5714285714285714,
            "id": "5c88fa8cf4afda39709c295a"
        },
        ...
    ]
}
```

## Authentication & permission

Natours Api, have many routes that needs a authentication & permission in order to perfom certains operations. i.e users must logged in before doing some request on the server.

- All permissions:
  - user
  - guide
  - lead-guide
  - admin

## Error handling

All errors are return as JSON object with the following format:

- Development mode:

```
{
  "status": 'fail',
  "message": "error message",
  "error": error details,
  "stackTrace": stack trace
}

```

- Production mode:

```
{
  "status": 'fail',
  "message": "error message",
}

```

The API will return two(02) errors types when request fails:

- All status code start with 4xx, is marked as "fail"
- All status code start with 5xx, is marked as "error"

## Auth (users)

All about user API.

### Signup (POST)

Use to signup on the app.

- request: `/api/v1/users/signup`
- body:

```
{
  "name": "user",
  "email": "user@example.com",
  "password": "test1234",
  "passwordConfirm": "test1234"
}
```

- response:

```
{
    "status": "success",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTVlOTNkOWQyNzgzMjFjYzQ4NWUwMSIsImlhdCI6MTY3NjAxMTgzOCwiZXhwIjoxNjc2MDk4MjM4fQ.vtLeWsiYJfmq3o8UWX2xaxmp8E0ogZ0be0xXvsKKyGI",
    "data": {
        "user": {
            "name": "user",
            "email": "user@example.com",
            "role": "user",
            "createdAt": "2023-02-10T06:31:59.760Z",
            "_id": "63e5e93d9d278321cc485e01",
        }
    }
}
```

### Log in (POST)

Use to connect on the app.

- request: `/api/v1/users/login`
- body:

```
{
    "email": "users@example.com",
    "password": "test1234"
}
```

- response:

```
{
    "status": "success",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTVlOTNkOWQyNzgzMjFjYzQ4NWUwMSIsImlhdCI6MTY3NjAxMjAwMCwiZXhwIjoxNjc2MDk4NDAwfQ.mkLwB4u9w73QL164lvA34FyfWYX5cn8MJueezrbUDXo"
}
```

### View profile (GET)

Use to view your profile

- request: `/api/v1/users/profile`
- auth required: `true`
- response:

```
{
    "status": "success",
    "data": {
        "data": {
            "_id": "63e5e93d9d278321cc485e01",
            "name": "user",
            "email": "user@example.com",
            "role": "user",
            "createdAt": "2023-02-10T06:31:59.760Z",
        }
    }
}
```

### Update profile (PATCH)

Use to update user profile

- request: `/api/v1/users/update-profile`
- auth required: `true`
- body:

```
{
    "name": "Nirinasoa Herilanto"
}
```

- response:

```
{
    "status": "success",
    "data": {
        "user": {
            "_id": "63e5e93d9d278321cc485e01",
            "name": "Nirinasoa Herilanto",
            "email": "user@example.com",
            "role": "user",
            "createdAt": "2023-02-10T06:31:59.760Z",
        }
    }
}
```

### Forgot password (POST)

- request: `/api/v1/users/forgot-password`
- body:

```
{
    "email": "user@example.com"
}
```

- response:

```
{
    "status": "success",
    "message": "Token send to the email!"
}
```

### Reset password (PATCH)

- request: `/api/v1/users/reset-password/11874c995473e36ed1a37eff9db91da69554da8ca6491a7e47ab52b1bedd633b`
- body:

```
{
    "password":"new_password",
    "passwordConfirm":"new_password_confirm"
}
```

- response:

```
{
    "status": "success",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTVlOTNkOWQyNzgzMjFjYzQ4NWUwMSIsImlhdCI6MTY3NjAxMjY1MCwiZXhwIjoxNjc2MDk5MDUwfQ.Vvjv2f0VRi2zc97Tnpk-xWu3jlkdcZ_HWuP0OYdrAoQ"
}
```

## Tours

All about Tour API

### Get all tours (GET)

Use to view all tours available on the Natours App. The results are paginated by default 10;

- request: `/api/v1/tours` or `/api/v1/tours?page=2`
- response:

```
{
    "status": "success",
    "requestAt": "2023-02-10T07:30:36.648Z",
    "results": 9,
    "data": [
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -80.185942,
                    25.774772
                ],
                "address": "301 Biscayne Blvd, Miami, FL 33132, USA",
                "description": "Miami, USA"
            },
            "_id": "5c88fa8cf4afda39709c2955",
            "name": "The Sea Explorer",
            "duration": 7,
            "maxGroupSize": 15,
            "difficulty": "medium",
            "ratingsAverage": 4.8,
            "ratingsQuantity": 6,
            "price": 497,
            "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
            "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "imageCover": "tour-2-cover.jpg",
            "images": [
                "tour-2-1.jpg",
                "tour-2-2.jpg",
                "tour-2-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-06-19T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-08-18T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -80.128473,
                        25.781842
                    ],
                    "description": "Lummus Park Beach",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2959"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -80.647885,
                        24.909047
                    ],
                    "description": "Islamorada",
                    "day": 2,
                    "_id": "5c88fa8cf4afda39709c2958"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -81.0784,
                        24.707496
                    ],
                    "description": "Sombrero Beach",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2957"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -81.768719,
                        24.552242
                    ],
                    "description": "West Key",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c2956"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a22c62f8fb814b56fa18b",
                    "name": "Miyah Myles",
                    "email": "miyah@example.com",
                    "photo": "user-12.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-sea-explorer",
            "durationWeeks": 1,
            "id": "5c88fa8cf4afda39709c2955"
        },
        {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -106.822318,
                    39.190872
                ],
                "address": "419 S Mill St, Aspen, CO 81611, USA",
                "description": "Aspen, USA"
            },
            "_id": "5c88fa8cf4afda39709c295a",
            "name": "The Snow Adventurer",
            "duration": 4,
            "maxGroupSize": 10,
            "difficulty": "difficult",
            "ratingsAverage": 4.5,
            "ratingsQuantity": 6,
            "price": 997,
            "summary": "Exciting adventure in the snow with snowboarding and skiing",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
            "imageCover": "tour-3-cover.jpg",
            "images": [
                "tour-3-1.jpg",
                "tour-3-2.jpg",
                "tour-3-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2022-01-05T10:00:00.000Z",
                "2022-02-12T10:00:00.000Z",
                "2023-01-06T10:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -106.855385,
                        39.182677
                    ],
                    "description": "Aspen Highlands",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c295c"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -106.516623,
                        39.60499
                    ],
                    "description": "Beaver Creek",
                    "day": 2,
                    "_id": "5c88fa8cf4afda39709c295b"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a23412f8fb814b56fa18c",
                    "name": "Ben Hadley",
                    "email": "ben@example.com",
                    "photo": "user-13.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f4e2f8fb814b56fa185",
                    "name": "Jennifer Hardy",
                    "email": "jennifer@example.com",
                    "photo": "user-6.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-snow-adventurer",
            "durationWeeks": 0.5714285714285714,
            "id": "5c88fa8cf4afda39709c295a"
        },
        ...
    ]
}
```

### Get a specific tour (GET)

Use to view a specific tour by providing id of the tour.

- request: `/api/v1/tours/5c88fa8cf4afda39709c2951`
- response:

```
{
    "status": "success",
    "data": {
        "data": {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -115.570154,
                    51.178456
                ],
                "address": "224 Banff Ave, Banff, AB, Canada",
                "description": "Banff, CAN"
            },
            "_id": "5c88fa8cf4afda39709c2951",
            "name": "The Forest Hiker",
            "duration": 5,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "ratingsAverage": 5,
            "ratingsQuantity": 9,
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "images": [
                "tour-1-1.jpg",
                "tour-1-2.jpg",
                "tour-1-3.jpg"
            ],
            "createdAt": "2023-02-08T11:27:03.153Z",
            "startDates": [
                "2021-04-25T09:00:00.000Z",
                "2021-07-20T09:00:00.000Z",
                "2021-10-05T09:00:00.000Z"
            ],
            "secretTour": false,
            "locations": [
                {
                    "type": "Point",
                    "coordinates": [
                        -116.214531,
                        51.417611
                    ],
                    "description": "Banff National Park",
                    "day": 1,
                    "_id": "5c88fa8cf4afda39709c2954"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -118.076152,
                        52.875223
                    ],
                    "description": "Jasper National Park",
                    "day": 3,
                    "_id": "5c88fa8cf4afda39709c2953"
                },
                {
                    "type": "Point",
                    "coordinates": [
                        -117.490309,
                        51.261937
                    ],
                    "description": "Glacier National Park of Canada",
                    "day": 5,
                    "_id": "5c88fa8cf4afda39709c2952"
                }
            ],
            "guides": [
                {
                    "_id": "5c8a21d02f8fb814b56fa189",
                    "name": "Steve T. Scaife",
                    "email": "steve@example.com",
                    "photo": "user-10.jpg",
                    "role": "lead-guide"
                },
                {
                    "_id": "5c8a201e2f8fb814b56fa186",
                    "name": "Kate Morrison",
                    "email": "kate@example.com",
                    "photo": "user-7.jpg",
                    "role": "guide"
                },
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                }
            ],
            "slug": "the-forest-hiker",
            "__v": 0,
            "durationWeeks": 0.7142857142857143,
            "reviews": [
                {
                    "_id": "5c8a381714eb5c17645c9115",
                    "review": "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
                    "rating": 5,
                    "tour": "5c88fa8cf4afda39709c2951",
                    "user": {
                        "_id": "5c8a1ec62f8fb814b56fa183",
                        "name": "Ayla Cornell",
                        "photo": "user-4.jpg"
                    },
                    "createdAt": "2023-02-08T11:27:03.329Z",
                    "__v": 0,
                    "id": "5c8a381714eb5c17645c9115"
                },
               ...
            ],
            "id": "5c88fa8cf4afda39709c2951"
        }
    }
}

```

### Add new tour (POST)

Use to add new tour on the app.

- request: `/api/v1/tours`
- auth required: `true`
- permission: `admin`, `lead-guide`
- body:

```
  {
    "name": "Beauty landing park",
    "duration": 5,
    "maxGroupSize": 25,
    "difficulty": "easy",
    "ratingsAverage": 4.7,
    "ratingsQuantity": 37,
    "price": 397,
    "summary": "Breathtaking hike through the Canadian Banff National Park",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imageCover": "tour-1-cover.jpg",
    "images": ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
    "startDates": ["2021-04-25,10:00", "2021-07-20,10:00", "2021-10-05,10:00"],
    "startLocation": {
                "type": "Point",
                "coordinates": [
                    -73.985141,
                    40.75894
                ],
                "address": "Manhattan, NY 10036, USA",
                "description": "NYC, USA"
            },
    "guides": [
        "5c8a1f292f8fb814b56fa184"
    ]
  }
```

- response:

```
{
    "success": "success",
    "data": {
        "data": {
            "name": "Beauty landing park",
            "duration": 5,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "ratingsAverage": 4.7,
            "ratingsQuantity": 37,
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "images": [
                "tour-1-1.jpg",
                "tour-1-2.jpg",
                "tour-1-3.jpg"
            ],
            "createdAt": "2023-02-10T06:31:57.296Z",
            "startDates": [
                "2021-04-25T07:00:00.000Z",
                "2021-07-20T07:00:00.000Z",
                "2021-10-05T07:00:00.000Z"
            ],
            "secretTour": false,
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -73.985141,
                    40.75894
                ],
                "address": "Manhattan, NY 10036, USA",
                "description": "NYC, USA"
            },
            "guides": [
                "5c8a1f292f8fb814b56fa184"
            ],
            "_id": "63e5f70e9d278321cc485e44",
            "locations": [],
            "slug": "beauty-landing-park",
            "__v": 0,
            "durationWeeks": 0.7142857142857143,
            "id": "63e5f70e9d278321cc485e44"
        }
    }
}
```

### Update tour (PATCH)

Use to update a specific tour.

- request: `/api/v1/tours/63e5f70e9d278321cc485e44`
- auth required: `true`
- permission: `admin`, `lead-guide`
- body:

```
{
    "duration": 10
}
```

- response:

```
{
    "status": "success",
    "data": {
        "data": {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    -73.985141,
                    40.75894
                ],
                "address": "Manhattan, NY 10036, USA",
                "description": "NYC, USA"
            },
            "_id": "63e5f70e9d278321cc485e44",
            "name": "Beauty landing park",
            "duration": 10,
            "maxGroupSize": 25,
            "difficulty": "easy",
            "ratingsAverage": 4.7,
            "ratingsQuantity": 37,
            "price": 397,
            "summary": "Breathtaking hike through the Canadian Banff National Park",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imageCover": "tour-1-cover.jpg",
            "images": [
                "tour-1-1.jpg",
                "tour-1-2.jpg",
                "tour-1-3.jpg"
            ],
            "createdAt": "2023-02-10T06:31:57.296Z",
            "startDates": [
                "2021-04-25T07:00:00.000Z",
                "2021-07-20T07:00:00.000Z",
                "2021-10-05T07:00:00.000Z"
            ],
            "secretTour": false,
            "guides": [
                {
                    "_id": "5c8a1f292f8fb814b56fa184",
                    "name": "Leo Gillespie",
                    "email": "leo@example.com",
                    "photo": "user-5.jpg",
                    "role": "guide"
                }
            ],
            "locations": [],
            "slug": "beauty-landing-park",
            "__v": 0,
            "durationWeeks": 1.4285714285714286,
            "id": "63e5f70e9d278321cc485e44"
        }
    }
}
```

### Delete tour (DELETE)

Use to delete a specfic tour.

- request: `/api/v1/tours/63e5f70e9d278321cc485e44`
- auth required: `true`
- permission: `admin`, `lead-guide`
- response:

```
No content with status code 204
```

## Reviews

All about Review API. Only the simple user and the admin can perform the operation.

### Get all reviews (GET)

Use to get all reviews on the app. The results are paginated by default 10;

- request: `/api/v1/reviews` or `/api/v1/reviews?page=2`
- response:

```
{
    "status": "success",
    "requestAt": "2023-02-10T08:05:22.032Z",
    "results": 10,
    "data": [
        {
            "_id": "63e5fa109d278321cc485e55",
            "review": "Amazing tour :)",
            "rating": 5,
            "tour": "5c88fa8cf4afda39709c2951",
            "user": {
                "_id": "63e5e93d9d278321cc485e01",
                "name": "Nirinasoa Herilanto"
            },
            "createdAt": "2023-02-10T06:32:02.553Z",
            "id": "63e5fa109d278321cc485e55"
        },
        ...
    ]
}
```

### Add new review on tour (POST)

Use to post a new review on specific tour.

- request: `/api/v1/reviews` or `/api/v1/tours/5c88fa8cf4afda39709c2951/reviews`
- auth required: `true`
- permission: `user`
- body:

```
{
    "review": "Amazing tour :)",
    "rating": 5,
    "tour": "5c88fa8cf4afda39709c2951" // required on `/api/v1/reviews` endpoints
}
```

### Update review (PATCH)

Use to update review. Only the user who posted this review perform the action or admin.

- request: `/api/v1/reviews/5c88fa8cf4afda39709c2951`
- auth required: `true`
- permission: `admin`, `user`
- body:

```
{
    "rating": 3.9
}
```

- response:

```
{
    "status": "success",
    "data": {
        "data": {
            "_id": "63e5fa109d278321cc485e55",
            "review": "Amazing tour :)",
            "rating": 3.9,
            "tour": "5c88fa8cf4afda39709c2951",
            "user": {
                "_id": "63e5e93d9d278321cc485e01",
                "name": "Nirinasoa Herilanto"
            },
            "createdAt": "2023-02-10T06:32:02.553Z",
            "__v": 0,
            "id": "63e5fa109d278321cc485e55"
        }
    }
}
```

### Delete review (DELETE)

Use to delete review. Only the user who posted this review perform the action or admin.

- request: `/api/v1/reviews/63e5fa109d278321cc485e55`
- auth required: `true`
- permission: `admin`, `user`
- response:

```
No content with status code 204
```

# Deployement N/A

# Author

Nirinasoa Herilanto

# Acknowledgement

Jonas teams
