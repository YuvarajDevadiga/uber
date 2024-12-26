# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It validates the input data and creates a new user in the database.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required, minimum 3 characters)
  - `lastname` (string, optional, minimum 3 characters)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum 6 characters)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

# User Login Endpoint

## POST /users/login

### Description
This endpoint is used to authenticate a user. It validates the input data and returns a JWT token if the credentials are correct.

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required, must be a valid email)
- `password` (string, required, minimum 6 characters)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Invalid credentials"
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint is used to log out the authenticated user. It clears the authentication token.

### Responses

#### Success
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain. It validates the input data and creates a new captain in the database.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required, minimum 3 characters)
  - `lastname` (string, optional, minimum 3 characters)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum 6 characters)
- `vehicle`: An object containing:
  - `color` (string, required, minimum 3 characters)
  - `plate` (string, required, minimum 3 characters)
  - `capacity` (number, required, minimum 1)
  - `vehicleType` (string, required, must be one of `car`, `motorcycle`, `auto`)

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```
