
# Express EJS Boilerplate with DB Models/Users

This is a boilerplate for a Node.js application following the MVC pattern with Express, EJS, Express Validator, PostgreSQL and dotenv.

This version has the database code and models/users code.

## Installation

1. Clone the repository:
```sh
git clone https://github.com/yourusername/express-ejs-boilerplate.git
cd my-node-app
```

2. Remove what you dont want from package.json

3. Install dependencies:
```sh
npm install
```

4. Set up environment variables

Create a '.env' file in the root of your project and add your PostgreSQL connection string and port
```sh
DATABASE_URL=postgres://username:password@localhost:5432/db_name
DATABASE_USER=username
DATABASE_PASSWORD=password
DATABASE_NAME=db_name
DATABASE_SERVER=localhost
PORT=3000
```

5. Run the application
```sh
npm start
```
or
```sh
npm run dev
```

6. Navigate to the location of the website

