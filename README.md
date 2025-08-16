# Personal Finance Tracker

A full-stack mobile application designed to help users track their income and expenses effortlessly. This project features a React Native (Expo) frontend for a smooth user experience and a robust Node.js (Express) backend for handling data and business logic.

![photo_5821435163496795187_y](https://github.com/user-attachments/assets/3388d39e-47db-4647-ab7c-f91735c4f10d)


## \#\# Tech Stack

### **Backend**

  * **Runtime**: Node.js
  * **Framework**: Express.js
  * **Database**: Neon (Serverless PostgreSQL)
  * **Rate Limiting**: Upstash (Redis)
  * **Environment Variables**: dotenv

### **Frontend**

  * **Framework**: React Native with Expo
  * **Routing**: Expo Router
  * **Authentication**: Clerk
  * **Styling**: Custom StyleSheet with a theming system
  * **Icons**: `@expo/vector-icons`

-----

## \#\# Key Features

  * **User Authentication**: Secure sign-up and sign-in functionality powered by Clerk.
  * **Transaction Management**: Users can create, view, and delete their income and expense transactions.
  * **Financial Summary**: The dashboard provides a clear overview of the total balance, total income, and total expenses.
  * **RESTful API**: A well-defined backend API to handle all data operations.
  * **API Rate Limiting**: Protects the API from excessive requests using a sliding window algorithm.
  * **Themed Interface**: A clean, coffee-themed user interface for a pleasant user experience.

-----

## \#\# Setup and Installation

### **Prerequisites**

  * Node.js and npm (or yarn)
  * Expo CLI (`npm install -g expo-cli`)
  * Accounts for:
      * [Neon](https://neon.tech/) (for the database)
      * [Upstash](https://upstash.com/) (for Redis)
      * [Clerk](https://clerk.com/) (for authentication)

### **Backend Setup**

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root of the `backend` directory and add your credentials:
    ```env
    DATABASE_URL="your_neon_database_connection_string"
    UPSTASH_REDIS_REST_URL="your_upstash_redis_url"
    UPSTASH_REDIS_REST_TOKEN="your_upstash_redis_token"
    PORT=5001
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
    The server will start on the port specified in your `.env` file (e.g., 5001) and automatically initialize the database table.

### **Frontend (Mobile App) Setup**

1.  Navigate to the `mobile` directory:
    ```bash
    cd mobile
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root of the `mobile` directory and add your Clerk publishable key:
    ```env
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_clerk_key"
    ```
4.  **Important**: In your frontend code, make sure to replace any placeholder API URLs with your backend server address (e.g., `http://localhost:5001`).
5.  Start the Expo development server:
    ```bash
    npm start
    ```
    Scan the QR code with the Expo Go app on your mobile device to run the application.

-----

## \#\# API Endpoints

All endpoints are prefixed with `/api/transactions`.

| Method | Route                  | Description                                            |
| :----- | :--------------------- | :----------------------------------------------------- |
| `POST` | `/`                    | Creates a new transaction.                             |
| `GET`  | `/:userId`             | Retrieves all transactions for a specific user.        |
| `GET`  | `/summary/:userId`     | Retrieves a financial summary for a specific user.     |
| `DELETE`| `/:id`                 | Deletes a transaction by its unique ID.                |
