# Basic Authentication API

This is a basic authentication API using Node.js, Express, and JSON Web Tokens (JWT). The API supports user registration, login, and access to protected routes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your local machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/coderooz/auth-api.git
   cd auth-api
   ```

2. Install the dependencies:
   ```bash
   npm install express bcryptjs jsonwebtoken body-parser
   ```

3. Start the server:
   ```bash
   node index.js
   ```

### API Endpoints

- **Register a new user**
  - `POST /register`
  - Request body: `{ "username": "john_doe", "password": "your_password" }`

- **Login a user**
  - `POST /login`
  - Request body: `{ "username": "john_doe", "password": "your_password" }`

- **Access protected route**
  - `GET /me`
  - Headers: `{ "x-access-token": "your_jwt_token" }`

### Usage

Use a tool like Postman or cURL to interact with the API endpoints.

### Built With

- [Express](https://expressjs.com/) - The web framework used
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - To hash passwords
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For JWT authentication

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/coderooz/auth-api/tags).

### Authors

- **Ranit Saha** - *Initial work* - [Coderooz](https://github.com/coderooz)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
