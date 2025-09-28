// ไฟล์: math.js - สร้าง module
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// ส่งออกฟังก์ชัน
module.exports = {
    add,
    multiply
};

// หรือส่งออกทีละตัว
// module.exports.add = add;
// module.exports.multiply = multiply;