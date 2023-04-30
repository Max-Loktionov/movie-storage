## movie-storage

app allows you to create user and [create, read, update, delete] entries to the movie collection at the DB Mongo.

Deploy: https://movie-storage.onrender.com

**Server** : contains main app file with base configurations - contains configuration of PORT and connection to DB;

**Models**: contains models of DB entities in MongoDB - contact, includes movieschema and joiSchema (validation schemes for validate the data from front);

**Controllers**: functions of interaction with the DB entities (CRUD);

**Routes**: build REST API architecture using CRUD-methods;

## Installation

Make sure you have an LTS version of Node.js installed on your computer. Download and install if it is necessary.

Clone this repo.

```
git clone https://github.com/Max-Loktionov/movie-storage.git
```

Install the basic project dependencies with the command

```
npm install
```

### Commands:

---

```bash
npm start
```

- start the server in mode production;

```bash
npm run dev
```

- start the server in mode development => Server running. API port: 3000. Database connection successful

```bash
npm run lint
```

- run code validation from eslint. It is necessary to perform before each PR and correct all errors of the linter;

```bash
npm lint:fix
```

- run code validation from eslint, but with automatic fixes of simple errors.

### Dependencies:

---

| bcryptjs | cors | cross-env | dotenv | express | joi | jsonwebtoken | mongoose | morgan |
| -------- | ---- | --------- | ------ | ------- | --- | ------------ | -------- | ------ |

---

### API:

---

https://movie-storage.onrender.com

**Use api on routes: /api/movies**

- get /api/movies
- get /api/movies/movieId
- post /api/movies
- put /api/movies/movieId
- delete /api/movies/movieId

some action with data:

| action          | method mongoose  | route                      |     |
| --------------- | :--------------: | -------------------------- | --: |
| getAll          |       find       | get//api/movies            |  00 |
| getMovietById   |     findOne      | get/api/movies/movieId     |  01 |
| addMovie        |      create      | post//api/movies           |  02 |
| updateMovieById | findOneAndUpdate | put//api/movies/movieId    |  03 |
| deleteMovieById | findOneAndDelete | delete//api/movies/movieId |  04 |
|                 |                  |                            |     |
| register        |      create      | post//api/users/register   |  05 |
| login           | findOneAndUpdate | post//api/users/login      |  06 |
| logout          | findOneAndUpdate | post//api/users/logout     |  07 |
| current         |       find       | get//api/users/current     |  08 |

**Use api on routes: /api/users **

- post/api/users/register
- post/api/users/login
- post/api/users/logout
- get/api/users/current

| route                   | response                                                                                                           | action                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| get/api/users/current   | status:200; body={"status":"success","code":"200","data":{"email":"max2@company.com","userName":"student"}}        | get current user                                              |
| post/api/users/logout   | status:204; empty body                                                                                             | remove the authorization                                      |
| post/api/users/register | status:201; body = {"status":"success","code":201,"user":{"email":"max7@company.com","userName":"student"}}        | create a new user                                             |
| post/api/users/login    | {"status":"success","code":200,"response":{"token":"x...x","user":{"email":"user@user.com","userName":"student"}}} | send the token for valid user; the token is valid for one day |

---

- pagination, you have to add two parameters (page=2&limit=2) page=Number (number of page wich could be choosen with amount=limit movies on each pages), limit=Number [by default (GET /movies?page=1&limit=20)]
  and we need to transfer in {req.query}
- search by the fields: [title,director,releaseDate]. For Example (GET /api/movies?title=The Godfather ==>
  data:{ movies:[{"title": "The Godfather","director": "Francis Ford Coppola","releaseDate": "01-01-1972",}]} )

---

this user has some movies in the collection

{
"email":"gallo@mal.com",
"password":"123456Ab"
}

like this object for create
{
"title":"Fight Club",
"director":"David Fincher",
"releaseDate": "01-02-1999"
}
