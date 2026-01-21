# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

Using a simple file like `db.json` may work for learning or very small demos, but it is not suitable for real-world applications due to several limitations.

### Limitations of file-based storage

**Performance**
File-based storage requires reading and writing the entire file for many operations. As data grows, this becomes slow and inefficient compared to optimized database query engines.

**Scalability**
`db.json` does not scale well. Handling large datasets, multiple tables/relations, or increasing numbers of users becomes impractical because files are not designed for complex or high-volume operations.

**Concurrency**
Multiple users or processes accessing and modifying the same file can cause data corruption or conflicts. File locking mechanisms are limited and unreliable for concurrent access.

**Reliability**
If the application crashes while writing to the file, data can be lost or corrupted. There is no built-in recovery, rollback, or transaction support.

**Lack of advanced features**
File-based storage does not support indexing, transactions, access control, backups, or query optimization, all of which are essential in production systems.

## 2. What are the ideal characteristics of a database system (apart from just storage)?

A good database system provides much more than simple data storage. Key characteristics include:

**Performance**
Databases are optimized for fast data retrieval and updates using indexes, caching, and efficient query execution.

**Concurrency**
A database allows multiple users and applications to access and modify data at the same time without conflicts, using locking and isolation mechanisms.

**Reliability**
Databases ensure data is not lost during crashes or failures through backups, logging, and recovery mechanisms.

**Data Integrity**
Rules such as constraints, keys, and validations ensure that stored data remains accurate, consistent, and meaningful.

**Scalability**
A database can handle growing amounts of data and increasing user load, either by scaling vertically (better hardware) or horizontally (distributed systems).

**Fault Tolerance**
Modern databases can continue working even if part of the system fails, using replication and failover techniques.

---

## 3. How many types of databases are there? What are their use cases or applications?

Databases are broadly categorized into two main types:

### Relational Databases (SQL)

Relational databases store data in structured tables with rows and columns and use SQL for querying.

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Use cases:**

* Banking and financial systems
* E-commerce platforms
* Enterprise applications
* Applications requiring complex queries and strong data consistency

**Why used:**
They enforce strict schemas, support relationships between tables, and ensure high data integrity.



### Non-Relational Databases (NoSQL)

NoSQL databases store data in flexible formats such as documents, key-value pairs, graphs, or wide columns.

**Examples:** MongoDB, Redis, Cassandra, Neo4j

**Use cases:**

* Real-time applications
* Social media platforms
* Big data and analytics
* Content management systems

**Why used:**
They are highly scalable, flexible with schema design, and perform well with large volumes of unstructured or semi-structured data.