
# Prisma, PostgreSQL (SQL), and NoSQL Common Interview Questions & Answers

## Prisma (ORM for Node.js/TypeScript)
1. **What is Prisma and why would you use it?**
	- Prisma is an open-source ORM for Node.js and TypeScript. It provides type-safe database access and simplifies database operations by generating a client based on your schema. Use it for easier, safer, and more maintainable database code.
2. **How do you define a model in Prisma schema?**
	- In `schema.prisma`, you define models using the `model` keyword. Example:
	  ```prisma
	  model User {
		 id    Int     @id @default(autoincrement())
		 name  String
		 email String  @unique
	  }
	  ```
3. **How do you perform a database migration with Prisma?**
	- Use `npx prisma migrate dev --name migration_name` to create and apply migrations based on schema changes.
4. **How does Prisma handle relations between tables?**
	- Relations are defined using relation fields and attributes. Example:
	  ```prisma
	  model Post {
		 id     Int   @id @default(autoincrement())
		 user   User  @relation(fields: [userId], references: [id])
		 userId Int
	  }
	  ```
5. **What is Prisma Client and how do you use it in your code?**
	- Prisma Client is an auto-generated query builder. Import and instantiate it in your code:
	  ```js
	  const { PrismaClient } = require('@prisma/client');
	  const prisma = new PrismaClient();
	  ```
6. **How do you seed a database using Prisma?**
	- Add a `prisma/seed.js` or `seed.ts` file and run `npx prisma db seed`.
7. **How do you handle transactions in Prisma?**
	- Use `prisma.$transaction([op1, op2])` to run multiple operations atomically.
8. **How do you query for related data (e.g., include, select)?**
	- Use `include` or `select` in your query:
	  ```js
	  prisma.user.findMany({ include: { posts: true } });
	  ```
9. **What is the difference between Prisma Migrate and Prisma Client?**
	- Prisma Migrate manages schema changes and migrations. Prisma Client is used for querying and manipulating data.
10. **How do you update your Prisma schema when your database changes?**
	 - Update `schema.prisma` and run `npx prisma migrate dev` to apply changes.

## PostgreSQL (SQL)
1. **What is PostgreSQL and what are its main features?**
	- PostgreSQL is an advanced open-source relational database. Features: ACID compliance, extensibility, support for complex queries, JSON, indexing, and more.
2. **How do you create a table in PostgreSQL?**
	- Example:
	  ```sql
	  CREATE TABLE users (
		 id SERIAL PRIMARY KEY,
		 name VARCHAR(100),
		 age INT
	  );
	  ```
3. **What is a primary key? What is a foreign key?**
	- Primary key: Uniquely identifies each row. Foreign key: References a primary key in another table to create relationships.
4. **How do you perform a JOIN operation? Give an example.**
	- Example:
	  ```sql
	  SELECT users.name, orders.order_id
	  FROM users
	  JOIN orders ON users.id = orders.user_id;
	  ```
5. **What is an index and why is it important?**
	- An index speeds up data retrieval on columns. It improves query performance but can slow down writes.
6. **How do you write a query to find duplicate records?**
	- Example:
	  ```sql
	  SELECT name, COUNT(*)
	  FROM users
	  GROUP BY name
	  HAVING COUNT(*) > 1;
	  ```
7. **What are transactions and how are they managed in PostgreSQL?**
	- Transactions are sequences of operations performed as a single unit. Use `BEGIN`, `COMMIT`, and `ROLLBACK` to manage them.
8. **What is normalization? Explain 1NF, 2NF, 3NF.**
	- Normalization organizes data to reduce redundancy. 1NF: Atomic columns. 2NF: No partial dependency. 3NF: No transitive dependency.
9. **How do you backup and restore a PostgreSQL database?**
	- Use `pg_dump` to backup and `psql` or `pg_restore` to restore.
10. **What are some common data types in PostgreSQL?**
	 - INT, SERIAL, VARCHAR, TEXT, DATE, TIMESTAMP, BOOLEAN, JSON, ARRAY.

## NoSQL (e.g., MongoDB, Redis)
1. **What is NoSQL? How is it different from SQL databases?**
	- NoSQL databases store unstructured or semi-structured data, are schema-less, and scale horizontally. SQL databases use structured tables and schemas.
2. **Name and describe the main types of NoSQL databases.**
	- Document (MongoDB), Key-Value (Redis), Wide-Column (Cassandra), Graph (Neo4j).
3. **What is a document store? Give an example.**
	- Stores data as documents (usually JSON/BSON). Example: MongoDB.
4. **How do you insert and query data in MongoDB?**
	- Insert: `db.users.insertOne({ name: "Alice", age: 25 })`
	- Query: `db.users.find({ age: { $gt: 20 } })`
5. **What is eventual consistency?**
	- Data updates may not be immediately visible to all nodes, but will become consistent over time.
6. **How do you model relationships in NoSQL databases?**
	- Embed documents (denormalization) or reference by ID (manual joins).
7. **What are the advantages and disadvantages of NoSQL?**
	- Advantages: Flexible schema, horizontal scaling, high performance. Disadvantages: Weaker consistency, complex queries can be harder.
8. **How does indexing work in NoSQL databases?**
	- Indexes speed up queries on specific fields, similar to SQL, but implementation varies by database.
9. **What is sharding and why is it used?**
	- Sharding splits data across multiple servers to handle large datasets and high throughput.
10. **When would you choose NoSQL over SQL?**
	 - When you need flexible schema, high scalability, or are working with unstructured/varied data.
