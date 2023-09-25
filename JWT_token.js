
const jwt = require('jsonwebtoken');


// Secret key for JWT (keep this secret)
const secretKey = 'your-secret-key';

// In-memory user database (replace with a real database in a production app)
const users ={
    id:1,
    usernmae:"nishu",
    role:"user",
};

const token=jwt.sign(users,secretKey,{expiresIn:'4h'});
console.log(token);



