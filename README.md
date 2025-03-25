# Node.js Express API with MongoDB

## Assignment
📌 Take-Home Technical Challenge – Node.js API + MongoDB

### Objective
Build a simple Node.js Express API that connects to a MongoDB database and retrieves user data.

## Requirements
- Create a GET endpoint at `/users/:id` that:
  - Accepts a user ID as a route parameter
  - Queries a MongoDB collection named `users` for a document with a matching `_id`
  - Returns the user’s details in JSON format
  - Returns a `404 Not Found` response if the user is not found
- **Bonus**: Gracefully handle invalid `ObjectId` errors
- **Unique Twist**: Only return users where the age is greater than 21

## Sample MongoDB Schema
```json
{
  "_id": ObjectId,
  "name": "John Doe",
  "email": "johndoe@email.com",
  "age": 30
}
```

## Setup Instructions
### 1. Clone the Repository
```sh
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root and set your MongoDB Atlas URI:
```
MONGO_URI=<your_mongoDB_atlas_uri>
PORT=5000
```

### 4. Add a Demo User
To insert a test user into the database, run:
```sh
node createTestUser.js
```

### 5. Run the Application
Start the server in development mode:
```sh
npm run dev
```

### 6. Test the API
Use the following API endpoint to retrieve user data:
```sh
GET http://localhost:5000/api/users/<user_id>
```
- Replace `<user_id>` with a valid MongoDB ObjectId.
- If the user is found and their age is greater than 21, their details will be returned.
- If the user does not exist or their age is 21 or below, a `404 Not Found` response will be returned.
- If an invalid `ObjectId` is provided, an error message will be displayed.

## Approach
- Used **Express.js** to create the API server.
- Utilized **MongoDB Atlas** as the database.
- Implemented route validation to ensure only valid `ObjectId`s are processed.
- Ensured robust error handling to improve API reliability.
- Applied filtering logic to only return users older than 21 years.

## Submission Instructions
- Upload your solution to a **public GitHub repository**.
- Include this `README.md` file for setup instructions.
- Share your GitHub repository link as part of the submission.
- Complete your submission within **48 hours**.

We look forward to reviewing your work! 🚀

