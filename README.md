The document you've provided outlines the requirements for the **Bajaj Finserv Health Challenge (Qualifier 1)**, which involves building and deploying both backend and frontend components. Here's a concise README file based on the challenge details:

---

# Bajaj Finserv Health Challenge - Qualifier 1

## Overview

This project is part of the Bajaj Finserv Health Challenge (Qualifier 1) and involves building and deploying a full-stack application with a REST API and a frontend interface.

### Backend

The backend is a REST API with the following features:

- **Endpoint:** `/bfhl`
- **Methods:**
  - **POST**: Accepts a JSON object and returns a structured response containing user information and arrays of numbers and alphabets from the input.
  - **GET**: Returns a hardcoded operation code.

### Frontend

The frontend is a React-based application that interacts with the backend API. The application features a text input field for JSON input, a multi-select dropdown, and a display area that shows filtered results based on the dropdown selection.

## Features

### Backend Features

- **POST /bfhl**
  - Accepts a JSON payload containing an array of data.
  - Returns:
    - `is_success`: Status of the operation.
    - `user_id`: A unique identifier generated from the user's full name and date of birth.
    - `email`: User's college email.
    - `roll_number`: User's college roll number.
    - `numbers`: An array of numbers extracted from the input data.
    - `alphabets`: An array of alphabets extracted from the input data.
    - `highest_lowercase_alphabet`: The last alphabet in the a-z series from the input data.

- **GET /bfhl**
  - Returns:
    - `operation_code`: A hardcoded value of `1`.

### Frontend Features

- **JSON Input Field:**
  - Accepts JSON format only.
  - Validates the input on submission and displays errors for invalid JSON.
- **Multi-Select Dropdown:**
  - Options: `Alphabets`, `Numbers`, `Highest lowercase alphabet`.
  - Filters the displayed data based on the selected options.
- **Dynamic Title:**
  - The title of the web page will be the user's roll number.

## Deployment

### Backend
- Deploy the REST API using Heroku, Netlify, Vercel, or Firebase.

### Frontend
- Deploy the React application and ensure it communicates with the backend API.

## Submission

1. **Host your backend and frontend applications.**
2. **Share the API endpoint and frontend URL** using the following form: [Submission Form](https://forms.office.com/r/6Mi0pgtPkw).

## Example Requests and Responses

- **POST /bfhl**
  - **Request:**
    ```json
    {
      "data": ["A", "1", "z"]
    }
    ```
  - **Response:**
    ```json
    {
      "is_success": true,
      "user_id": "john_doe_17091999",
      "email": "john@xyz.com",
      "roll_number": "ABCD123",
      "numbers": ["1"],
      "alphabets": ["A", "z"],
      "highest_lowercase_alphabet": ["z"]
    }
    ```

- **GET /bfhl**
  - **Response:**
    ```json
    {
      "operation_code": 1
    }
    ```

## Important Notes

- Ensure proper exception handling and input validation.
- Fastest valid submissions will be considered.
- Do not duplicate submissions or assist others to avoid disqualification.

---

This README should give you a solid foundation for your project documentation. Adjust as necessary based on your specific implementation details.
