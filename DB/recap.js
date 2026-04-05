// Database Recap for Interviews

// 1. What is a Database?
// A database is an organized collection of data, generally stored and accessed electronically from a computer system.

// 2. Types of Databases
// - Relational Database (SQL): Data is stored in tables (rows and columns). Example: MySQL, PostgreSQL, SQLite.
// - Non-Relational Database (NoSQL): Data is stored in formats like documents, key-value, wide-column, or graph. Example: MongoDB, Redis.

// 3. SQL vs NoSQL
// SQL databases use structured query language and have a predefined schema. NoSQL databases are more flexible and can store unstructured data.

// 4. Basic SQL Commands
// SELECT: Retrieve data from a table
// Example:
// SELECT * FROM users;
// -- Returns all rows from the 'users' table.

// INSERT: Add new data to a table
// Example:
// INSERT INTO users (name, age) VALUES ('Alice', 25);
// -- Adds a new user named Alice, age 25.

// UPDATE: Modify existing data
// Example:
// UPDATE users SET age = 26 WHERE name = 'Alice';
// -- Changes Alice's age to 26.

// DELETE: Remove data
// Example:
// DELETE FROM users WHERE name = 'Alice';
// -- Removes Alice from the table.

// 5. Table Structure
// Tables have columns (fields) and rows (records). Each column has a data type (e.g., INT, VARCHAR).
// Example:
// CREATE TABLE users (
//   id INT PRIMARY KEY,
//   name VARCHAR(100),
//   age INT
// );

// 6. Primary Key & Foreign Key
// - Primary Key: Uniquely identifies each row (e.g., id).
// - Foreign Key: Links to a primary key in another table, creating relationships.
// Example:
// CREATE TABLE orders (
//   order_id INT PRIMARY KEY,
//   user_id INT,
//   FOREIGN KEY (user_id) REFERENCES users(id)
// );

// 7. Indexes
// Indexes speed up data retrieval but can slow down writes. Use on columns you search often.
// Example:
// CREATE INDEX idx_name ON users(name);

// 8. Normalization
// Process of organizing data to reduce redundancy. Normal forms (1NF, 2NF, 3NF) guide this process.

// 9. Transactions & ACID
// Transaction: A sequence of operations performed as a single unit.
// ACID: Atomicity, Consistency, Isolation, Durability. Guarantees for reliable transactions.
// Example:
// BEGIN;
// UPDATE accounts SET balance = balance - 100 WHERE id = 1;
// UPDATE accounts SET balance = balance + 100 WHERE id = 2;
// COMMIT;
// -- Both updates succeed or both fail (atomicity).

// 10. Example Query with JOIN
// SELECT users.name, orders.order_id
// FROM users
// JOIN orders ON users.id = orders.user_id;
// -- Returns user names with their order IDs.

// Review these concepts and practice writing queries for interview success!
