## GoIT Node.js Course Homework

This is an educational project from the course Node.js for GoIT-school.

A web-app is created with Node.js application using MVC. The next modules are created:

**Server** : contains main app file with base configurations - contains configuration of PORT and connection to DB;

**Models**: contains models of DB entities in MongoDB - contact, includes movieschema and joiSchema (validation schemes for validate the data from front);

**Controllers**: functions of interaction with the DB entities (CRUD);

**Routes**: build REST API architecture using CRUD-methods;

### Commands:

---

```bash
npm start
```

- start the server in mode production;

```bash
npm run dev
```

- start the server in mode development;

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

| bcryptjs | cors | cross-env | dotenv | express | gravatar | jimp | joi | jsonwebtoken | mongoose | morgan | multer |
| -------- | ---- | --------- | ------ | ------- | -------- | ---- | --- | ------------ | -------- | ------ | ------ |

---

### API:

---

**Use api on routes: /api/movies**

- get/api/movies
- get/api/movies/movieId
- put/api/movies/movieId/favorite

some action with data:

| action             | method mongoose  | route                              |     |
| ------------------ | :--------------: | ---------------------------------- | --: |
| getAll             |       find       | /api/movies                        |  00 |
| geMovietById       |     findOne      | /api/movies/movieId                |  01 |
| addMovie           |      create      | /api/movies                        |  02 |
| updateMovieById    | findOneAndUpdate | /api/movies/movieId                |  03 |
| updateFavoriteById | findOneAndUpdate | patch//api/movies/movieId/favorite |  04 |
| deleteMovieById    | findOneAndDelete | delete//api/movies/movieId         |  05 |
|                    |                  |                                    |     |
| register           |      create      | post/api/users/register            |  06 |
| login              | findOneAndUpdate | post/api/users/login               |  07 |
| logout             | findOneAndUpdate | post/api/users/logout              |     |
| current            |       find       | get/api/users/current              |     |

**Use api on routes: /api/users **

- post/api/users/register
- post/api/users/login
- post/api/users/logout
- get/api/users/current

| route | response | action |
| ----- | -------- | ------ |

| get/api/users/current | status:200; body={"status":"success","code":"200","data":{"email":"max2@company.com","userName":"student"}} | get current user |
| post/api/users/logout | status:204; empty body | remove the authorization |
| post/api/users/register | status:201; body = {"status":"success","code":201,"user":{"email":"max7@company.com","userName":"student"}} | create a new user |
| post/api/users/login | {"status":"success","code":200,"response":{"token":"x...x","user":{"email":"user@user.com","userName":"student"}}} | send the token for valid user; the token is valid for one day |

---

- pagination, you have to add two parameters (page=2&limit=2) page=Number (number of page wich could be choosen with amount=limit movies on each pages), limit=Number [by default (GET /movies?page=1&limit=20)]
