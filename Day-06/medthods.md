📄 Method Definitions (Short & To the Point)
1. GET
Purpose: Requests data from a specified resource.

Key Concept: Used solely for reading data. It should not have any side effects on the server (it's Safe).

Body: Should not contain a request body.

Example: Get a list of all users: /api/users

2. POST
Purpose: Submits data to a specified resource to create a new resource.

Key Concept: The server decides the resource's new URI. Repeated calls will create multiple, different resources (it's not Idempotent).

Body: The data for the new resource is sent in the request body.

Example: Create a new user: /api/users (Data sent in body)

3. PUT
Purpose: Replaces the entire representation of a target resource with the new data provided.

Key Concept: The client specifies the exact URI of the resource being replaced. Repeated calls will result in the same resource state (it's Idempotent).

Body: The complete, new representation of the resource is sent in the request body.

Example: Update user 10's full profile: /api/users/10 (All fields must be sent)

4. PATCH
Purpose: Applies partial modifications to a resource.

Key Concept: Used for small, targeted updates without replacing the entire resource.

Body: Only the fields to be changed are sent in the request body.

Example: Update only user 10's email: /api/users/10 (Only the email field is sent)

5. DELETE
Purpose: Removes the specified resource.

Key Concept: Repeatedly calling it will delete the resource once, and then subsequent calls will result in the same outcome (the resource being gone), so it is considered Idempotent.

Body: Should not contain a request body.

Example: Delete user 10: /api/users/10