/** @format */

export const initialProjectGuideMkdr = `# Getting Started

## Prerequisites
================

Before installing the project, make sure you have the following software and tools installed:

* Node.js (LTS version) - [Download](https://nodejs.org/en/download/)
* yarn (package manager) - [Install with npm](https://yarnpkg.com/en/docs/install)
* Docker (for testing purposes) - [Download](https://www.docker.com/get-started)
* MongoDB (database) - [Download](https://www.mongodb.com/try/download/community)

## Setup Instructions
=====================

**Step 1: Clone the Repository**

Clone the Daraz Scraper repository from GitHub using the following command:
\`\`\`bash
git clone https://github.com/Eemayas/Daraz_Scraper.git
\`\`\`
**Step 2: Install Dependencies**

Navigate to the project directory and install dependencies using yarn:
\`\`\`bash
cd Daraz_Scraper
yarn install
\`\`\`
This will take a few minutes to complete.

**Step 3: Configure Environment Variables**

Create a new file called \`.env\` in the root directory of the project. Add the following environment variables:
\`\`\`makefile
MONGO_URI=mongodb://localhost:27017/
API_KEY=your_api_key_here
\`\`\`
Replace \`your_api_key_here\` with your actual API key.

**Step 4: Build and Start the Project**

Run the following command to build and start the project:
\`\`\`bash
yarn dev
\`\`\`
This will start the development server, which you can access at [http://localhost:3000](http://localhost:3000).

## Running the Project
=====================
To run the project in production mode, use the following command:
\`\`\`bash
yarn build
yarn start
\`\`\`
This will create a static HTML file and serve it using \`next.js\`.

## Tests
========

The project uses Jest for testing. To run tests, navigate to the root directory of the project and run the following command:
\`\`\`bash
yarn test
\`\`\`

## Troubleshooting
==================

### Common Issues

* **Error: Cannot find module 'node_modules'**: Make sure you have installed dependencies using yarn.
* **Error: MongoDB connection failed**: Check your MongoDB installation and ensure that it is running on the correct port (27017).
* **Error: API key not found**: Verify that you have added the API key to the \`.env\` file.

### Resolving Issues

If you encounter any issues during installation or while running the project, refer to the following troubleshooting steps:

* Run \`yarn install\` again to re-install dependencies.
* Restart MongoDB and ensure it is running on the correct port (27017).
* Verify that you have added the API key to the \`.env\` file.

`;
