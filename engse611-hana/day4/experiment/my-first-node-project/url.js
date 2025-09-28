const url = require('url');

const myUrl = new URL('https://example.com/users?page=1&limit=10');
console.log(myUrl.hostname);      // example.com
console.log(myUrl.pathname);      // /users
console.log(myUrl.searchParams.get('page')); // 1
console.log(myUrl.searchParams.get('limit'))