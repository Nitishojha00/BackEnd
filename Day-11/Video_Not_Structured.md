🧾 Structured, Semi-Structured, and Unstructured Databases

why images and videos are not stored in structured DBMS

🔹 1. Introduction

In modern data systems, data can exist in different formats depending on how it is organized and stored.

Based on organization, data is categorized into:

Structured Data

Semi-Structured Data

Unstructured Data

Each category requires different types of storage systems and database management techniques.

🔹 2. Structured Data
➤ Definition:

Structured data refers to data that is organized in fixed fields and formats, usually stored in tables with rows and columns in a Relational Database Management System (RDBMS).

➤ Examples:

Student records (Roll No, Name, Marks)

Bank transactions

Employee databases

SQL tables in MySQL, Oracle, PostgreSQL

➤ Characteristics:

Fixed Schema: Every record follows the same structure.

Data Type Defined: Each column has a defined data type (e.g., INT, VARCHAR, DATE).

Easily Searchable: Can be queried using SQL (Structured Query Language).

High Consistency: Data integrity is maintained using keys and constraints.

Storage System: Stored in RDBMS like MySQL, Oracle, or SQL Server.

➤ Example Table:
Roll_No	Name	Branch	Marks
101	Nitish	CSE	85
102	Yogesh	ME	75
➤ Use Case:

Used where data is well-defined and relationships are important — e.g., banking, inventory, payroll.

🔹 3. Semi-Structured Data
➤ Definition:

Semi-structured data does not follow a fixed schema but still has some structure using tags or markers to separate data elements.

➤ Examples:

JSON (JavaScript Object Notation)

XML (Extensible Markup Language)

CSV files, NoSQL databases (like MongoDB)

➤ Characteristics:

Flexible Schema: Different records may have different fields.

Uses Tags or Key-Value Pairs: Example – JSON or XML tags identify data items.

Partially Structured: Some structure exists, but not as rigid as SQL tables.

Easily Adaptable: Schema can change without affecting other records.

Storage System: Stored in NoSQL databases (MongoDB, Cassandra, CouchDB).

➤ Example (JSON Format):
{
  "name": "Nitish",
  "age": 22,
  "skills": ["C++", "Python", "Node.js"]
}

➤ Use Case:

Used in web APIs, IoT, document storage, and big data systems where flexibility is required.

🔹 4. Unstructured Data
➤ Definition:

Unstructured data has no predefined format or structure. It cannot be stored in traditional rows and columns.

➤ Examples:

Images, Videos, Audio Files

Emails, Word Documents, PDFs

Social media posts, chats, or logs

Surveillance footage, scanned documents

➤ Characteristics:

No Fixed Schema: Data does not follow a defined model.

Difficult to Search or Query: Cannot use SQL directly to query.

Large in Size: Often involves multimedia and consumes more storage.

Requires Special Storage Systems: Stored in object storage or NoSQL systems.

Processed Using AI/ML or Big Data Tools: For example, using Hadoop, Spark, or TensorFlow.

➤ Example:

A video lecture file (lecture1.mp4) or image (student_photo.jpg) — cannot be represented in table rows/columns.

🔹 5. Why Images and Videos Are Not Stored in Structured DBMS
➤ (i) Fixed Schema Limitation

Structured DBMS like MySQL require data in numeric or textual form.

Multimedia data (images, audio, video) doesn’t fit into rows and columns.

➤ (ii) Large File Size

Images and videos are very large in size (MBs or GBs).

Storing such large binary data directly in DBMS leads to performance issues and slow retrieval.

➤ (iii) Complex Data Type

DBMS tables use data types like INT, VARCHAR, DATE, etc.

Multimedia data requires Binary Large Objects (BLOBs) — which increase storage overhead.

➤ (iv) Slower Performance

Storing and retrieving multimedia data inside DBMS reduces speed and efficiency.

File systems handle large binary files faster than relational databases.

➤ (v) Better Alternatives Exist

Instead of storing media in DBMS, developers store:

File path (URL or location) in the database

Actual image/video file in a file system or cloud storage (like AWS S3, Google Drive, etc.)

➤ Example:
ID	Name	Image_Path
1	Nitish	/uploads/nitish.jpg
2	Riya	/uploads/riya.png

→ Only the path is stored in the database, while the image itself is saved separately.

🔹 6. Summary Table
Type	Structure	Schema	Example Data	Storage Type
Structured	Tabular (Rows & Columns)	Fixed	Student table, Salary record	RDBMS (MySQL, Oracle)
Semi-Structured	Tag-based / Key-Value	Flexible	JSON, XML, CSV	NoSQL (MongoDB, Cassandra)
Unstructured	Free-form, binary	None	Images, Videos, Audio	File system, Object Storage
🔹 7. Conclusion

Structured, Semi-Structured, and Unstructured data differ in their organization, storage, and accessibility.
Structured data fits perfectly in RDBMS because of its fixed schema.
Semi-structured data fits in NoSQL databases, which provide flexibility.
Unstructured data, such as images and videos, cannot be efficiently stored in a structured DBMS because of their large size, non-tabular nature, and performance limitations.
Hence, such multimedia files are usually stored in file systems or specialized storage services, while the database stores only metadata or file paths.

✅ Final Short Summary:
| Structured → SQL tables (Fixed Schema)
| Semi-Structured → JSON/XML (Flexible Schema)
| Unstructured → Images/Videos/Text (No Schema)