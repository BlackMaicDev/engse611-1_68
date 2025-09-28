// ไฟล์: app.js - ใช้ module
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.multiply(4, 2)); // 8

// หรือ destructuring
const { add, multiply } = require('./math');
console.log(add(10, 5));          // 15