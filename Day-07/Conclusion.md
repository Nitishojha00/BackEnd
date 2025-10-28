 // Finding book with that id
 let book = bookstore.find(info=>info.id===id);


// For Deleteing
 let index = bookstore.findIndex(info=>info.id===id);
      bookstore.splice(index,1);


// Js object vs JSON

✅ JavaScript Object

     A JavaScript Object is a data structure used to store data in key–value pair format.

     It is mainly used inside JavaScript programs for data handling, logic and manipulation.

     Keys may be written with or without quotes, and values can be of any data type, including functions, arrays, or other objects.

     Objects can contain methods (functions inside objects), support comments, and allow dynamic changes during execution.

     Because of its flexibility, JavaScript objects are widely used to structure and manage complex data in web applications.

✅ JSON (JavaScript Object Notation)

     JSON is a lightweight text-based format used for data storage and data exchange between client and server.

     It looks similar to an object but follows strict syntax rules.

     Keys and string values must be in double quotes, and JSON does not allow functions, undefined, or comments.

     JSON supports only limited data types like string, number, boolean, null, object, and array.

     It is widely used in APIs, configuration files, and databases because it is simple, readable, and language-independent.

✅ Difference Between Object and JSON

     A JavaScript Object is a programming structure, but JSON is a data format.

     Objects allow functions, comments, and dynamic behavior, whereas JSON strictly forbids them.

     In objects, quotes are optional for keys, but in JSON double quotes are mandatory.

     Objects are used inside code, while JSON is used for sharing data between systems or over the internet.

     Thus, objects are flexible for development, and JSON is ideal for storing and transferring structured data.

✅ Conversion

     JavaScript provides built-in methods to convert between Object and JSON.

     JSON.stringify(object) → converts an object to a JSON string.

     JSON.parse(jsonString) → converts a JSON string back to a JavaScript object.

     These conversions are useful in API communication and file storage.

✅ app.use(express.json()) (Express Middleware level)

     Used in Node.js + Express

     Automatically parses incoming JSON request body and gives you a ready object in req.body

     You don't write JSON.parse() again for API requests