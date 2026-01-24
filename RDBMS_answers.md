Database Relationships
1. What is a Database Relationship?

A database relationship defines how data in one table is connected to data in another table.
Instead of storing everything in one table, databases split data into multiple tables and link them using keys (primary key & foreign key).

Why relationships are important

Avoid data duplication

Maintain data consistency

Make databases scalable and efficient

Represent real-world connections between data

Example (E-commerce):
A customer can place many orders → this connection must be represented in the database.

2. Types of Database Relationships

There are three main types of database relationships:

One-to-One (1:1)

One-to-Many (1:M)

Many-to-Many (M:N)

3. One-to-One (1:1) Relationship
Definition

In a one-to-one relationship, one record in Table A is linked to exactly one record in Table B.

E-commerce Example

User ↔ UserProfile

Each user has only one profile

Each profile belongs to one user

Tables Example
Users
- user_id (PK)
- name
- email

UserProfiles
- profile_id (PK)
- address
- phone
- user_id (FK)

Real-world use

User ↔ Profile

Order ↔ Invoice

Product ↔ ProductSpecification

4. One-to-Many (1:M) Relationship
Definition

In a one-to-many relationship, one record in Table A can be related to many records in Table B, but each record in Table B relates to only one record in Table A.

E-commerce Example

Customer → Orders

One customer can place many orders

Each order belongs to one customer

Tables Example
Customers
- customer_id (PK)
- name
- email

Orders
- order_id (PK)
- order_date
- customer_id (FK)

Real-world use

Customer → Orders

Category → Products

Seller → Products

This is the most common relationship in web applications.

5. Many-to-Many (M:N) Relationship
Definition

In a many-to-many relationship, multiple records in Table A relate to multiple records in Table B.

This relationship requires a junction (join) table.

E-commerce Example

Products ↔ Orders

One order can contain many products

One product can appear in many orders

Tables Example
Products
- product_id (PK)
- name
- price

Orders
- order_id (PK)
- order_date

OrderItems (Junction Table)
- order_id (FK)
- product_id (FK)
- quantity

Real-world use

Orders ↔ Products

Students ↔ Courses

Users ↔ Roles

The junction table breaks the many-to-many relationship into two one-to-many relationships.