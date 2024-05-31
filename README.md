# StarWars Project

This project is a web application that provides detailed information about characters, planets, and starships from the Star Wars universe. It is built with a React frontend and a Node.js backend.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project is structured as follows:

```
.
├── client
│   └── my-app
│       ├── package.json
│       ├── package-lock.json
│       ├── public
│       │   └── index.html
│       ├── README.md
│       └── src
│           ├── App.css
│           ├── App.js
│           ├── components
│           │   ├── Pagination.css
│           │   ├── Pagination.js
│           │   ├── PersonDetail.css
│           │   ├── PersonDetail.js
│           │   ├── PersonList.css
│           │   ├── PersonList.js
│           │   ├── PlanetDetail.css
│           │   ├── PlanetDetail.js
│           │   ├── PlanetList.css
│           │   ├── PlanetList.js
│           │   ├── SearchComponent.css
│           │   ├── SearchComponent.js
│           │   ├── StarshipDetail.css
│           │   ├── StarshipDetail.js
│           │   ├── StarshipList.js
│           │   └── StarshipsList.css
│           ├── index.css
│           └── index.js
├── package.json
├── package-lock.json
├── project_structure.txt
├── README.md
└── server
    ├── models
    │   ├── Person.js
    │   ├── Planet.js
    │   └── Starships.js
    ├── routes
    │   ├── person.js
    │   ├── planets.js
    │   ├── search.js
    │   └── starships.js
    └── server.js

```



## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/temirlan-k/star-wars-catalog
    cd star-wars-catalog
    ```

2. Install dependencies for both client and server:
    ```bash
    cd client/my-app
    npm install
    cd ../../server
    npm install
    ```

3. Create a `.env` file in the server directory and add your environment variables (e.g., for MONGODB connection).

## Usage

To start the application, run the following commands in separate terminals:

1. Start the server:
    ```bash
    cd server
    npm start
    ```

2. Start the client:
    ```bash
    cd client/my-app
    npm start
    ```

The application will be available at `http://localhost:3000`.

## API Endpoints

The backend API provides the following endpoints:

- `GET /api/person`: Get a list of all characters.
- `GET /api/person/:id`: Get details of a specific character.
- `GET /api/planets`: Get a list of all planets.
- `GET /api/planets/:id`: Get details of a specific planet.
- `GET /api/starships`: Get a list of all starships.
- `GET /api/starships/:id`: Get details of a specific starship.
- `GET /api/search`: Search for characters, planets, and starships.

## Components

The frontend React application includes the following components:

- `App.js`: The main component that sets up routing.
- `PersonList.js`: Displays a list of characters.
- `PersonDetail.js`: Displays details of a specific character.
- `PlanetList.js`: Displays a list of planets.
- `PlanetDetail.js`: Displays details of a specific planet.
- `StarshipList.js`: Displays a list of starships.
- `StarshipDetail.js`: Displays details of a specific starship.
- `SearchComponent.js`: Provides search functionality.
- `Pagination.js`: Handles pagination for lists.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
