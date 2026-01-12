Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users see and interact with directly. It runs in the browser and focuses on user experience.

1. User Interface

Responsible for designing and displaying the visual layout of the application.

Includes buttons, forms, text, images, navigation bars, etc.

Ensures the application looks attractive and responsive on different devices.

2. User Interaction

Handles user actions such as clicks, typing, scrolling, and form submissions.

Validates user input before sending data to the backend.

Updates the UI dynamically without reloading the page (using JavaScript).

3. Communication with Backend

Sends requests (API calls) to the backend using HTTP/HTTPS.

Receives data from the backend and displays it to users.

Common tools: Fetch API, Axios.

Q2. Role of Backend (BE)

The Backend (BE) is the server-side part of a web application that handles logic, data, and security. It runs on a server, not in the browser.

1. Server-Side Processing

Processes requests received from the frontend.

Applies business rules and logic.

Generates responses (JSON, HTML, etc.) to send back to the frontend.

2. Database Handling

Stores, retrieves, updates, and deletes data.

Interacts with databases such as MySQL, MongoDB, PostgreSQL.

Ensures data consistency and integrity.

3. Security and Authentication

Manages user authentication (login, signup).

Authorizes users based on roles and permissions.

Protects data using encryption, tokens, and secure APIs.

Q3. Business Logic
What is Business Logic?

Business Logic refers to the rules and decision-making processes that define how a business operates within an application. It determines what actions are allowed and how data is processed.

It usually resides in the backend or application layer.

Real-World Examples

E-commerce Website

Apply discounts only if the cart value exceeds ₹1000.

Prevent checkout if stock is unavailable.

Banking Application

Allow money transfer only if the account has sufficient balance.

Limit daily withdrawal amount.

Online Examination System

Submit exam automatically when time expires.

Prevent multiple submissions by the same user.

Q4. Client–Server Model

The Client–Server Model is a network architecture where tasks are divided between clients and servers.

1. Client

The client is the user’s device or application.

Examples: web browser, mobile app.

Sends requests to the server and displays responses.

2. Server

The server is a powerful system that processes requests.

Stores data, applies logic, and returns results to clients.

3. Communication Between Client and Server

Communication happens using HTTP/HTTPS protocols.

The client sends a request (GET, POST, etc.).

The server processes it and sends a response.

Q5. Three-Tier Architecture
What is 3-Tier Architecture?

3-Tier Architecture divides a web application into three separate layers, improving scalability, maintainability, and security.

1. Presentation Layer

User interface layer.

Built using HTML, CSS, JavaScript, React, etc.

Interacts directly with the user.

2. Application (Business) Layer

Contains business logic.

Processes requests and applies rules.

Usually implemented using backend frameworks.

3. Data Layer

Handles data storage.

Includes databases and data access logic.

Responsible for CRUD operations.

Why This Architecture is Used

Easy to maintain and scale.

Better separation of concerns.

Improves security by isolating data access.

Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language due to its efficiency and ecosystem.

1. Performance

Uses non-blocking, event-driven architecture.

Handles multiple requests efficiently.

Powered by fast engines like Google V8.

2. Ecosystem

Huge package ecosystem through npm.

Thousands of libraries and tools available.

Same language for frontend and backend reduces complexity.

3. Popular Backend Frameworks

Node.js – Runtime environment for server-side JavaScript.

Express.js – Lightweight backend framework.

NestJS – Structured, scalable backend framework.