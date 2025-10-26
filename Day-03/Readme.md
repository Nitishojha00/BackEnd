✅ Node.js = V8 Engine + libuv

Node.js is built on top of two major components:

V8 Engine → executes JavaScript code (developed by Google)

libuv → handles asynchronous I/O operations and event-driven architecture

✅ About libuv

libuv is a multi-platform support library focused on asynchronous I/O.

Around 97% of libuv’s code is written in C, because:

C is a low-level language, closer to the system hardware

It provides faster performance and better control over memory and system resources

✅ Role of libuv in Node.js

libuv handles all async tasks such as:

Timers (e.g., setTimeout, setInterval)

File System operations (e.g., fs.readFile)

Network calls (HTTP, TCP connections)

DNS requests

Thread-pool operations

It communicates directly with the Operating System (OS) to access system-level features.

✅ How it works (Simple Flow)
JavaScript Code
     ↓
 V8 Engine (executes JS)
     ↓
 libuv (handles async tasks + event loop)
     ↓
 Operating System (timers, file access, network calls)

✅ Key Point

Thanks to libuv, Node.js becomes non-blocking and asynchronous, allowing it to handle multiple tasks efficiently without waiting for each task to complete.