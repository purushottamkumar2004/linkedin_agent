# LinkedIn Agent

This project is a LinkedIn agent application built using React for the frontend and Express for the backend. It aims to provide a seamless integration with LinkedIn's API to perform various tasks.

## Project Structure

```
linkedin_agent
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── index.ts
│   │   ├── routes
│   │   │   └── index.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   └── index.tsx
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/linkedin_agent.git
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd linkedin_agent/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

### Usage

Once both the backend and frontend are running, you can access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.