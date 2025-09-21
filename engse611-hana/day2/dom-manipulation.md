# JavaScript พื้นฐานและ DOM Manipulation
## ENGSE611 - การพัฒนาเว็บด้วยเทคโนโลยีสมัยใหม่
### วันที่ 2 - หัวข้อที่ 1 (4 ชั่วโมง: JS พื้นฐาน 2.5 ชม. + DOM 1.5 ชม.)

---

## Slide 1: ยินดีต้อนรับสู่โลกของ JavaScript! 🚀

### สิ่งที่เราจะเรียนรู้วันนี้
- **JavaScript พื้นฐาน (2.5 ชม.):** Variables, Functions, Conditions, Loops
- **DOM Manipulation (1.5 ชม.):** การควบคุมหน้าเว็บด้วย JavaScript
- การสร้างเว็บไซต์ที่มีปฏิสัมพันธ์
- การแก้ไขปัญหาและ Debug

**เป้าหมาย:** เข้าใจ JavaScript และสามารถทำให้เว็บไซต์มีชีวิตชีวาได้!

---

## Slide 2: JavaScript คืออะไร? 🤔

**JavaScript = ภาษาโปรแกรมสำหรับเว็บ**

### เปรียบเทียบกับสิ่งที่เรียนมา:
- **HTML** = โครงสร้างบ้าน 🏗️ (ผนัง, หลังคา, ประตู)
- **CSS** = การตกแต่งบ้าน 🎨 (สี, เฟอร์นิเจอร์, แสงไฟ)
- **JavaScript** = ระบบไฟฟ้าและเครื่องใช้ ⚡ (สวิตช์, ลิฟต์, เตาไมโครเวฟ)

### JavaScript ทำอะไรได้บ้าง?
- เปลี่ยนข้อความและรูปภาพ
- ตอบสนองการคลิกและการพิมพ์
- คำนวณและประมวลผลข้อมูล
- สร้างเกม แอนิเมชัน และเอฟเฟกต์

**JavaScript ทำให้เว็บไซต์ "มีชีวิต" และ "ฉลาด"!**

---

## Slide 3: ทำไมต้องเรียน JavaScript? ✨

### สถิติที่น่าสนใจ:
- **97%** ของเว็บไซต์ใช้ JavaScript
- **ภาษาโปรแกรมยอดนิยม #1** ในโลก 7 ปีซ้อน
- **ค่าจ้างสูง** - JavaScript Developer เฉลี่ย 50,000-100,000 บาท/เดือน
- ใช้ได้ทั้ง **Frontend, Backend, Mobile App**

### ตัวอย่างเว็บไซต์ที่ใช้ JavaScript:
- **Facebook** - Like, Comment, Infinite Scroll
- **Google Maps** - ซูม, ลาก, ค้นหา Real-time
- **Netflix** - แนะนำหนัง, เล่นวิดีโอ, User Interface
- **Shopee/Lazada** - ตะกร้าสินค้า, Chat, Payment

**JavaScript = ทักษะที่หางานง่ายที่สุดใน IT!**

---

## Slide 4: การเขียน JavaScript ครั้งแรก 📝

### 3 วิธีการเขียน JavaScript:

#### 1. Inline JavaScript (ใน HTML Tag)
```html
<button onclick="alert('สวัสดี!')">คลิกฉัน</button>
<img src="pic.jpg" onmouseover="this.src='pic2.jpg'">
```

#### 2. Internal JavaScript (ใน Head/Body)
```html
<script>
    console.log('สวัสดีจาก JavaScript!');
    alert('ยินดีต้อนรับ!');
</script>
```

#### 3. External JavaScript (ไฟล์แยก) ⭐ แนะนำ
```html
<script src="script.js"></script>
```

**เหมือนกับ CSS - External ดีที่สุด!**

---

## Slide 5: Hello World ใน JavaScript 👋

### โค้ดแรกของเรา:
```javascript
// นี่คือ comment - บรรทัดนี้ไม่ทำงาน
console.log('สวัสดีชาวโลก!');
alert('ยินดีต้อนรับสู่ JavaScript!');

/* 
   Comment หลายบรรทัด
   เขียนได้แบบนี้
*/
```

### วิธีดูผลลัพธ์:
1. **console.log()** - ดูใน Developer Tools (F12 → Console)
2. **alert()** - แสดง popup บนหน้าจอ
3. **document.write()** - เขียนลงหน้าเว็บ (ไม่แนะนำ)

### ลองเขียนกัน! (5 นาที)
สร้างไฟล์ `script.js` และเขียนข้อความแสดงชื่อของคุณ

---

## Slide 6: ตัวแปร (Variables) - ที่เก็บข้อมูล 📦

### การประกาศตัวแปร:
```javascript
let studentName = 'สมชาย';
let age = 20;
let isStudent = true;
const university = 'มหาวิทยาลัยเทคโนโลยี';

console.log(studentName);  // แสดง: สมชาย
console.log(age);          // แสดง: 20
```

### ความแตกต่างของการประกาศ:
- **let** - ใช้ได้แค่ในขอบเขต, เปลี่ยนค่าได้ (แนะนำ)
- **const** - ค่าคงที่, เปลี่ยนไม่ได้
- **var** - แบบเก่า, ใช้ได้ทุกที่ (หลีกเลี่ยง)

### กฎการตั้งชื่อตัวแปร:
✅ เริ่มด้วย a-z, A-Z, _, $  
✅ ใช้ camelCase: `firstName`, `studentAge`  
❌ ไม่เว้นวรรค, ไม่เริ่มด้วยตัวเลข  
❌ ห้ามใช้คำสงวน: `let`, `if`, `for`  

---

## Slide 7: ชนิดของข้อมูล (Data Types) 🏷️

### ชนิดข้อมูลหลัก:

#### 1. String (ข้อความ):
```javascript
let firstName = 'สมชาย';
let lastName = "ใจดี";
let quote = 'He said "Hello World"';
let template = `สวัสดี ${firstName} ${lastName}`;
```

#### 2. Number (ตัวเลข):
```javascript
let score = 85;
let price = 29.99;
let negative = -10;
let total = score + price;  // 114.99
```

#### 3. Boolean (จริง/เท็จ):
```javascript
let isPass = true;
let isRaining = false;
let canVote = age >= 18;  // true ถ้า age >= 18
```

#### 4. undefined และ null:
```javascript
let notDefined;        // undefined
let empty = null;      // null (ค่าว่างโดยเจตนา)
```

---

## Slide 8: การทำงานกับ String ขั้นสูง 📝

### การต่อ String:
```javascript
let firstName = 'สม';
let lastName = 'ชาย';

// วิธีที่ 1: ใช้ +
let fullName1 = firstName + ' ' + lastName;

// วิธีที่ 2: Template Literal (แนะนำ)
let fullName2 = `${firstName} ${lastName}`;
let greeting = `สวัสดี ${fullName2}, อายุ ${age} ปี`;
```

### String Methods ที่ใช้บ่อย:
```javascript
let text = 'JavaScript เจ๋งมาก';

console.log(text.length);               // 15 (ความยาว)
console.log(text.toUpperCase());        // JAVASCRIPT เจ๋งมาก
console.log(text.toLowerCase());        // javascript เจ๋งมาก
console.log(text.includes('Java'));     // true
console.log(text.indexOf('Script'));    // 4 (ตำแหน่ง)
console.log(text.slice(0, 4));         // Java
console.log(text.replace('เจ๋ง', 'สุดยอด')); // JavaScript สุดยอดมาก
```

---

## Slide 9: การทำงานกับ Number และ Math 🔢

### การคำนวณพื้นฐาน:
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (บวก)
console.log(a - b);  // 7  (ลบ)
console.log(a * b);  // 30 (คูณ)
console.log(a / b);  // 3.333... (หาร)
console.log(a % b);  // 1  (เศษจากการหาร - Modulo)
console.log(a ** b); // 1000 (ยกกำลัง)
```

### Math Object:
```javascript
console.log(Math.round(3.7));      // 4 (ปัดเศษ)
console.log(Math.floor(3.7));      // 3 (ปัดลง)
console.log(Math.ceil(3.2));       // 4 (ปัดขึ้น)
console.log(Math.random());        // 0.xxx (สุ่ม 0-1)
console.log(Math.max(5,10,3));     // 10 (หาค่าสูงสุด)
console.log(Math.min(5,10,3));     // 3 (หาค่าต่ำสุด)
console.log(Math.abs(-5));         // 5 (ค่าสัมบูรณ์)

// สุ่มเลข 1-6 (ลูกเต๋า)
let dice = Math.floor(Math.random() * 6) + 1;
```

---

## Slide 10: Scope ของตัวแปร 🏠

### Global Scope vs Local Scope:
```javascript
let globalName = 'สมชาย';  // ใช้ได้ทุกที่

function showInfo() {
    let localAge = 20;      // ใช้ได้เฉพาะใน function นี้
    console.log(globalName); // ✅ ใช้ได้
    console.log(localAge);   // ✅ ใช้ได้
}

console.log(globalName);  // ✅ ใช้ได้
console.log(localAge);    // ❌ Error! ไม่มีตัวแปรนี้
```

### Block Scope (let vs var):
```javascript
if (true) {
    let blockLet = 'ใช้ได้แค่ใน block นี้';
    var blockVar = 'ใช้ได้ทุกที่';
}

console.log(blockLet);  // ❌ Error!
console.log(blockVar);  // ✅ ทำงานได้ (แต่ไม่แนะนำ)
```

**หลักการ: ใช้ let และ const แทน var เสมอ!**

---

## Slide 11: Arrays - รายการข้อมูล 📋

### การสร้างและใช้งาน Array:
```javascript
let fruits = ['แอปเปิล', 'กล้วย', 'ส้ม'];
let numbers = [1, 2, 3, 4, 5];
let mixed = ['ข้อความ', 123, true, null];

console.log(fruits[0]);     // แอปเปิล (index เริ่มจาก 0)
console.log(fruits.length); // 3 (จำนวนสมาชิก)
console.log(fruits[fruits.length - 1]); // ส้ม (ตัวสุดท้าย)
```

### การจัดการ Array:
```javascript
let colors = ['แดง', 'เขียว'];

// เพิ่มข้อมูล
colors.push('น้ำเงิน');       // เพิ่มท้าย: ['แดง', 'เขียว', 'น้ำเงิน']
colors.unshift('เหลือง');    // เพิ่มหน้า: ['เหลือง', 'แดง', 'เขียว', 'น้ำเงิน']

// ลบข้อมูล
let lastColor = colors.pop();      // ลบท้าย, return 'น้ำเงิน'
let firstColor = colors.shift();   // ลบหน้า, return 'เหลือง'

// หาข้อมูล
console.log(colors.indexOf('แดง')); // 0 (ตำแหน่ง)
console.log(colors.includes('ม่วง')); // false
```

---

## Slide 12: Objects - กลุ่มข้อมูลที่มีความหมาย 🏷️

### การสร้าง Object:
```javascript
let student = {
    name: 'สมชาย ใจดี',
    age: 20,
    university: 'มหาวิทยาลัยเทคโนโลยี',
    major: 'วิศวกรรมซอฟต์แวร์',
    isGraduated: false,
    subjects: ['คณิตศาสตร์', 'ฟิสิกส์', 'เขียนโปรแกรม']
};

// การเข้าถึงข้อมูล
console.log(student.name);          // สมชาย ใจดี
console.log(student['age']);        // 20
console.log(student.subjects[0]);   // คณิตศาสตร์
```

### การเปลี่ยนแปลงข้อมูล:
```javascript
// เปลี่ยนค่า
student.age = 21;
student['university'] = 'มหาวิทยาลัยใหม่';

// เพิ่ม property ใหม่
student.gpa = 3.50;
student.hobbies = ['อ่านหนังสือ', 'เล่นเกม'];

// ลบ property
delete student.isGraduated;
```

---

## Slide 13: Functions - ชุดคำสั่งที่ใช้ซ้ำได้ 🔧

### Function Declaration:
```javascript
function sayHello() {
    console.log('สวัสดีครับ!');
}

function greetPerson(name) {
    console.log(`สวัสดี ${name}!`);
}

function calculateArea(width, height) {
    return width * height;
}

// การเรียกใช้
sayHello();                    // สวัสดีครับ!
greetPerson('สมชาย');          // สวัสดี สมชาย!
let area = calculateArea(5, 4); // 20
```

### Function Expression และ Arrow Function:
```javascript
// Function Expression
let multiply = function(a, b) {
    return a * b;
};

// Arrow Function (ES6+)
let add = (a, b) => {
    return a + b;
};

// Arrow Function แบบสั้น
let subtract = (a, b) => a - b;
let square = x => x * x;
```

---

## Slide 14: คำถาม 🤔

### ถ้าคุณต้องการสร้างฟังก์ชันคำนวณคะแนนเฉลี่ย
### จาก Array ของคะแนน คุณจะเขียนอย่างไร?

A) 
```javascript
function average(scores) {
    return scores.sum() / scores.length;
}
```

B)
```javascript
function average(scores) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
```

**คิด 30 วินาที...**

---

## Slide 15: เฉลย 🎯

### คำตอบ: B) 

```javascript
function average(scores) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// ทดสอบ
let myScores = [85, 92, 78, 96, 88];
console.log(average(myScores)); // 87.8
```

### เหตุผล:
- **Array ไม่มี .sum() method** ต้องคำนวณเอง
- ใช้ **for loop** วนซ้ำเพื่อบวกค่าทั้งหมด
- **return** ผลบวกหารด้วยจำนวน

---

## Slide 16: Conditional Statements - การตัดสินใจ 🤔

### if, else if, else:
```javascript
let score = 85;

if (score >= 90) {
    console.log('เกรด A');
} else if (score >= 80) {
    console.log('เกรด B');
} else if (score >= 70) {
    console.log('เกรด C');
} else if (score >= 60) {
    console.log('เกรด D');
} else {
    console.log('เกรด F');
}
```

### Comparison Operators:
```javascript
let age = 20;

console.log(age == 20);   // true (เท่ากับ)
console.log(age === 20);  // true (เท่ากับและชนิดเดียวกัน)
console.log(age != 18);   // true (ไม่เท่ากับ)
console.log(age !== '20'); // true (ไม่เท่ากับหรือชนิดต่าง)
console.log(age > 18);    // true (มากกว่า)
console.log(age >= 20);   // true (มากกว่าหรือเท่ากับ)
console.log(age < 25);    // true (น้อยกว่า)
console.log(age <= 20);   // true (น้อยกว่าหรือเท่ากับ)
```

---

## Slide 17: Logical Operators และ Switch Statement 🔀

### Logical Operators:
```javascript
let age = 20;
let hasLicense = true;
let hasExperience = false;

// AND (&&) - ต้องเป็นจริงทั้งหมด
if (age >= 18 && hasLicense) {
    console.log('ขับรถได้');
}

// OR (||) - อย่างน้อยหนึ่งเงื่อนไขเป็นจริง
if (hasLicense || hasExperience) {
    console.log('สามารถสมัครงานได้');
}

// NOT (!) - กลับค่า
if (!hasExperience) {
    console.log('ต้องฝึกงานก่อน');
}
```

### Switch Statement:
```javascript
let day = 'จันทร์';

switch (day) {
    case 'จันทร์':
        console.log('เริ่มต้นสัปดาห์ใหม่');
        break;
    case 'ศุกร์':
        console.log('เกือบหมดสัปดาห์แล้ว');
        break;
    case 'เสาร์':
    case 'อาทิตย์':
        console.log('วันหยุด!');
        break;
    default:
        console.log('วันธรรมดา');
}
```

---

## Slide 18: Loops - การทำซ้ำ 🔄

### for Loop:
```javascript
// วนซ้ำ 5 รอบ
for (let i = 0; i < 5; i++) {
    console.log(`รอบที่ ${i + 1}`);
}

// วนซ้ำใน Array
let fruits = ['แอปเปิล', 'กล้วย', 'ส้ม'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`ผลไม้ที่ ${i + 1}: ${fruits[i]}`);
}

// for...of (วนซ้ำค่าใน Array)
for (let fruit of fruits) {
    console.log(fruit);
}

// for...in (วนซ้ำ property ใน Object)
let student = {name: 'สมชาย', age: 20, major: 'CS'};
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
```

### while และ do...while:
```javascript
// while Loop
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// do...while Loop (ทำอย่างน้อย 1 รอบ)
let num = 5;
do {
    console.log(`Number: ${num}`);
    num--;
} while (num > 0);
```

---

## Slide 19: Array Methods ขั้นสูง 🔧

### การวนซ้ำและประมวลผล:
```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach - วนซ้ำทุกตัว
numbers.forEach(function(num, index) {
    console.log(`Index ${index}: ${num}`);
});

// map - สร้าง Array ใหม่
let doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter - กรองข้อมูล
let evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4]

// find - หาตัวแรกที่ตรงเงื่อนไข
let firstEven = numbers.find(num => num % 2 === 0);
// 2

// reduce - รวมค่าทั้งหมด
let sum = numbers.reduce((total, num) => total + num, 0);
// 15
```

### ตัวอย่างการใช้งานจริง:
```javascript
let students = [
    {name: 'สมชาย', score: 85},
    {name: 'สมหญิง', score: 92},
    {name: 'สมศักดิ์', score: 78}
];

let passedStudents = students.filter(student => student.score >= 80);
let averageScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;
```

---

## Slide 20: Error Handling พื้นฐาน 🐛

### try...catch:
```javascript
try {
    let result = riskyFunction();
    console.log('ผลลัพธ์:', result);
} catch (error) {
    console.log('เกิดข้อผิดพลาด:', error.message);
} finally {
    console.log('ทำงานจบแล้ว (ไม่ว่าจะ error หรือไม่)');
}

function riskyFunction() {
    let random = Math.random();
    if (random < 0.5) {
        throw new Error('เลขน้อยเกินไป!');
    }
    return random;
}
```

### การตรวจสอบข้อมูล:
```javascript
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('ต้องเป็นตัวเลขเท่านั้น');
    }
    if (b === 0) {
        throw new Error('ไม่สามารถหารด้วย 0 ได้');
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Error!
} catch (error) {
    console.log('Error:', error.message);
}
```

---

## Slide 21: Demo Time - JavaScript Calculator! 💻

### สร้าง Calculator ใช้งานได้จริง:

```javascript
// ตัวแปรเก็บค่า
let calculator = {
    result: 0,
    
    add: function(num) {
        this.result += num;
        return this;
    },
    
    subtract: function(num) {
        this.result -= num;
        return this;
    },
    
    multiply: function(num) {
        this.result *= num;
        return this;
    },
    
    divide: function(num) {
        if (num === 0) {
            throw new Error('ไม่สามารถหารด้วย 0 ได้');
        }
        this.result /= num;
        return this;
    },
    
    clear: function() {
        this.result = 0;
        return this;
    },
    
    getResult: function() {
        return this.result;
    }
};

// ทดสอบ (Method Chaining)
try {
    let answer = calculator.clear()
        .add(10)
        .multiply(5)
        .subtract(20)
        .divide(2)
        .getResult();
    
    console.log('ผลลัพธ์:', answer); // 15
} catch (error) {
    console.log('Error:', error.message);
}
```

**หยุด 15 นาที - ทำไปด้วยกัน!**

---

## Slide 22: การ Debug JavaScript 🔍

### เครื่องมือ Debug:
```javascript
// console methods ต่างๆ
console.log('ข้อความปกติ');
console.error('ข้อผิดพลาด');
console.warn('คำเตือน');
console.info('ข้อมูล');

// ดูค่าตัวแปร
let student = {name: 'สมชาย', age: 20};
console.log('Student:', student);
console.table(student);  // แสดงเป็นตาราง

// วัดเวลา
console.time('การคำนวณ');
for(let i = 0; i < 1000000; i++) {
    // โค้ดที่ต้องการวัดเวลา
}
console.timeEnd('การคำนวณ');

// ตรวจสอบเงื่อนไข
console.assert(5 > 3, '5 ไม่ได้มากกว่า 3'); // ไม่แสดงอะไร
console.assert(5 < 3, '5 ไม่ได้น้อยกว่า 3'); // แสดง error
```

### ข้อผิดพลาดบ่อย:
```javascript
// 1. Typo ในชื่อตัวแปร
let userName = 'สมชาย';
console.log(username); // ❌ ReferenceError

// 2. การเปรียบเทียบ
if (age = 20) { } // ❌ ใช้ = แทน ==
if (age == 20) { } // ✅ ถูกต้อง

// 3. Array index เกิน
let arr = [1, 2, 3];
console.log(arr[5]); // undefined (ไม่ error แต่ไม่ได้ค่าที่ต้องการ)

// 4. ลืม return ใน function
function add(a, b) {
    a + b; // ❌ ลืม return
}
console.log(add(2, 3)); // undefined

function add(a, b) {
    return a + b; // ✅ ถูกต้อง
}
```

---

## Slide 23: คำถาม 🤔

### ผลลัพธ์ของโค้ดนี้คืออะไร?

```javascript
let numbers = [1, 2, 3, 4, 5];
let result = numbers
    .filter(num => num > 2)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num, 0);

console.log(result);
```

A) 30  
B) 18  
C) 24  
D) 12  

**คิด 30 วินาที...**

---

## Slide 24: เฉลย 🎯

### คำตอบ: B) 18

```javascript
let numbers = [1, 2, 3, 4, 5];

// ขั้นตอนที่ 1: filter (num > 2)
// [3, 4, 5]

// ขั้นตอนที่ 2: map (num * 2) 
// [6, 8, 10]

// ขั้นตอนที่ 3: reduce (sum + num)
// 0 + 6 + 8 + 10 = 24

console.log(result); // 24
```

### เดี๋ยว! คำตอบผิด 😅
**คำตอบที่ถูก: C) 24**

### วิธีคิด:
1. **filter:** เลือกแค่ 3, 4, 5
2. **map:** คูณ 2 ได้ 6, 8, 10  
3. **reduce:** บวกทั้งหมด = 24

---

## Slide 25: สรุป JavaScript พื้นฐาน (2.5 ชม.) 📚

### สิ่งที่เราเรียนรู้:
✅ **Variables & Data Types:** let, const, String, Number, Boolean  
✅ **Functions:** การสร้างและเรียกใช้ฟังก์ชัน  
✅ **Arrays & Objects:** การจัดเก็บและจัดการข้อมูล  
✅ **Conditions:** if/else, switch, logical operators  
✅ **Loops:** for, while, Array methods  
✅ **Error Handling:** try/catch พื้นฐาน  
✅ **Debugging:** console methods และการแก้ปัญหา  

### ตอนนี้คุณสามารถ:
- เขียน JavaScript พื้นฐานได้
- จัดการข้อมูลด้วย Array และ Object
- ใช้ Conditions และ Loops
- แก้ไขปัญหาเบื้องต้นได้

---

## Slide 26: ก้าวสู่ DOM Manipulation! 🌳

**DOM = Document Object Model**

### ทำไม DOM สำคัญ?
- **JavaScript พื้นฐาน** = เครื่องมือ 🔧
- **DOM** = วิธีใช้เครื่องมือกับหน้าเว็บ 🎯

### เปรียบเทียบ DOM กับต้นไม้:
```
document (รากของต้นไม้)
    └── html
        ├── head
        │   ├── title
        │   └── meta
        └── body
            ├── header
            │   └── h1
            ├── main
            │   ├── p
            │   └── div
            └── footer
```

**DOM ทำให้ JavaScript "คุยกับ HTML" ได้!**

---

## Slide 27: การเลือก Elements - เป้าหมายแรก 🎯

### HTML ตัวอย่าง:
```html
<div id="container">
    <h1 class="title">หัวข้อหลัก</h1>
    <p class="description">คำอธิบาย</p>
    <button id="click-me" class="btn">คลิกฉัน</button>
    <ul class="list">
        <li>รายการ 1</li>
        <li>รายการ 2</li>
    </ul>
</div>
```

### การเลือกด้วยวิธีต่างๆ:
```javascript
// เลือกด้วย ID (เลือกได้ 1 ตัว)
let button = document.getElementById('click-me');

// เลือกด้วย Class (เลือกตัวแรกที่เจอ)
let title = document.querySelector('.title');

// เลือกหลายตัว
let allButtons = document.querySelectorAll('.btn');
let allListItems = document.querySelectorAll('li');

// เลือกด้วย Tag
let firstParagraph = document.querySelector('p');
let allParagraphs = document.querySelectorAll('p');
```

---

## Slide 28: การเปลี่ยนแปลงเนื้อหา 📝

### textContent vs innerHTML:
```html
<div id="content">
    <p>ข้อความเดิม</p>
</div>
```

```javascript
let div = document.getElementById('content');

// textContent - ข้อความธรรมดาเท่านั้น
div.textContent = 'ข้อความใหม่';
// ผลลัพธ์: ข้อความใหม่ (ไม่มี HTML tags)

// innerHTML - รวม HTML tags ได้
div.innerHTML = '<h2>หัวข้อใหม่</h2><p>ย่อหน้าใหม่</p>';
// ผลลัพธ์: หัวข้อใหม่และย่อหน้าใหม่ (มี HTML tags)

// ⚠️ ระวัง innerHTML กับข้อมูลจาก user (XSS Attack)
```

### การเปลี่ยน Attributes:
```javascript
let img = document.querySelector('img');
img.src = 'new-image.jpg';
img.alt = 'รูปภาพใหม่';
img.setAttribute('title', 'Tooltip ใหม่');

let link = document.querySelector('a');
link.href = 'https://www.google.com';
link.target = '_blank';

// ตรวจสอบ attribute
if (img.hasAttribute('alt')) {
    console.log('มี alt text');
}
```

---

## Slide 29: การจัดการ CSS ด้วย JavaScript 🎨

### เปลี่ยน Inline Styles:
```javascript
let element = document.getElementById('myDiv');

// เปลี่ยนสี
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.border = '2px solid blue';

// เปลี่ยนขนาดและตำแหน่ง
element.style.width = '200px';
element.style.height = '100px';
element.style.margin = '20px auto';

// เปลี่ยนฟอนต์
element.style.fontSize = '20px';
element.style.fontWeight = 'bold';
element.style.fontFamily = 'Arial, sans-serif';

// CSS Properties ที่เป็น camelCase
element.style.borderRadius = '10px';
element.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
```

### การจัดการ CSS Classes (แนะนำ):
```javascript
let button = document.querySelector('.btn');

// เพิ่ม class
button.classList.add('active', 'highlight');

// ลบ class
button.classList.remove('hidden');

// สลับ class (มี = ลบ, ไม่มี = เพิ่ม)
button.classList.toggle('selected');

// ตรวจสอบว่ามี class หรือไม่
if (button.classList.contains('active')) {
    console.log('Button is active!');
}

// แทนที่ class
button.classList.replace('old-class', 'new-class');
```

---

## Slide 30: DOM Navigation - การเดินทางใน Tree 🚶‍♂️

### Parent และ Child Elements:
```html
<div id="parent">
    <h2>หัวข้อ</h2>
    <p>ย่อหน้าแรก</p>
    <p>ย่อหน้าที่สอง</p>
</div>
```

```javascript
let parent = document.getElementById('parent');
let firstP = document.querySelector('p');

// หา Parent
console.log(firstP.parentNode);        // <div id="parent">
console.log(firstP.parentElement);     // เหมือนกัน

// หา Children
console.log(parent.children);          // HTMLCollection ของ children
console.log(parent.firstElementChild); // <h2>หัวข้อ</h2>
console.log(parent.lastElementChild);  // <p>ย่อหน้าที่สอง</p>
console.log(parent.childElementCount); // 3

// หา Siblings
let h2 = document.querySelector('h2');
console.log(h2.nextElementSibling);    // <p>ย่อหน้าแรก</p>
console.log(firstP.previousElementSibling); // <h2>หัวข้อ</h2>
```

### การวนซ้ำ Children:
```javascript
let parent = document.getElementById('parent');

// วิธีที่ 1: for loop
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].tagName);
}

// วิธีที่ 2: for...of
for (let child of parent.children) {
    child.style.color = 'blue';
}
```

---

## Slide 31: การสร้างและลบ Elements ➕➖

### สร้าง Elements ใหม่:
```javascript
// สร้าง Element
let newDiv = document.createElement('div');
newDiv.textContent = 'Div ใหม่';
newDiv.className = 'new-element';
newDiv.id = 'dynamic-div';

// สร้าง Element ที่ซับซ้อน
let card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
    <h3>หัวข้อการ์ด</h3>
    <p>เนื้อหาการ์ด</p>
    <button>ปุ่มในการ์ด</button>
`;

// เพิ่มเข้าไปในหน้าเว็บ
let container = document.getElementById('container');
container.appendChild(newDiv);      // เพิ่มท้าย
container.prepend(card);           // เพิ่มหน้า

// แทรกในตำแหน่งที่กำหนด
let reference = document.querySelector('.existing-element');
container.insertBefore(newDiv, reference);
```

### สร้าง List อัตโนมัติ:
```javascript
let fruits = ['แอปเปิล', 'กล้วย', 'ส้ม', 'มะม่วง'];
let ul = document.createElement('ul');
ul.className = 'fruit-list';

fruits.forEach((fruit, index) => {
    let li = document.createElement('li');
    li.textContent = `${index + 1}. ${fruit}`;
    li.dataset.fruit = fruit.toLowerCase(); // data attribute
    ul.appendChild(li);
});

document.body.appendChild(ul);
```

---

## Slide 32: การลบ Elements และ Event Delegation 🗑️

### การลบ Elements:
```javascript
// วิธีที่ 1: ลบตัวเอง (ใหม่)
let elementToRemove = document.getElementById('old-content');
if (elementToRemove) {
    elementToRemove.remove();
}

// วิธีที่ 2: ให้ parent ลบ (เก่า)
let parent = document.getElementById('container');
let child = document.getElementById('old-child');
if (parent && child) {
    parent.removeChild(child);
}

// ลบทุก element ในกลุ่ม
let tempElements = document.querySelectorAll('.temp');
tempElements.forEach(element => element.remove());

// ล้างทุกอย่างใน container
let container = document.getElementById('container');
container.innerHTML = '';  // ล้างหมด
// หรือ
while (container.firstChild) {
    container.removeChild(container.firstChild);
}
```

### การจัดการ Memory:
```javascript
// ก่อนลบ element ที่มี event listener
let button = document.getElementById('temp-button');
button.addEventListener('click', handleClick);

// ลบ event listener ก่อน (ป้องกัน memory leak)
button.removeEventListener('click', handleClick);
button.remove();
```

---

## Slide 33: Demo Time ใหญ่ - Dynamic Content! 💻

### สร้าง Student List Manager:

#### HTML:
```html
<div id="student-app">
    <h2>รายชื่อนักเรียน</h2>
    <div class="input-group">
        <input type="text" id="student-name" placeholder="ชื่อนักเรียน">
        <input type="number" id="student-score" placeholder="คะแนน">
        <button onclick="addStudent()">เพิ่มนักเรียน</button>
    </div>
    <div id="student-list"></div>
    <div id="statistics"></div>
</div>
```

#### JavaScript:
```javascript
let students = [];

function addStudent() {
    let nameInput = document.getElementById('student-name');
    let scoreInput = document.getElementById('student-score');
    
    let name = nameInput.value.trim();
    let score = parseInt(scoreInput.value);
    
    if (name && !isNaN(score) && score >= 0 && score <= 100) {
        students.push({
            id: Date.now(),
            name: name,
            score: score
        });
        
        nameInput.value = '';
        scoreInput.value = '';
        
        displayStudents();
        updateStatistics();
    } else {
        alert('กรุณาใส่ข้อมูลให้ถูกต้อง');
    }
}

function displayStudents() {
    let listContainer = document.getElementById('student-list');
    listContainer.innerHTML = '';
    
    students.forEach(student => {
        let studentDiv = document.createElement('div');
        studentDiv.className = 'student-item';
        studentDiv.innerHTML = `
            <span>${student.name}</span>
            <span>คะแนน: ${student.score}</span>
            <button onclick="removeStudent(${student.id})">ลบ</button>
        `;
        listContainer.appendChild(studentDiv);
    });
}

function removeStudent(id) {
    students = students.filter(student => student.id !== id);
    displayStudents();
    updateStatistics();
}

function updateStatistics() {
    let statsContainer = document.getElementById('statistics');
    
    if (students.length === 0) {
        statsContainer.innerHTML = '<p>ยังไม่มีข้อมูลนักเรียน</p>';
        return;
    }
    
    let totalScore = students.reduce((sum, student) => sum + student.score, 0);
    let average = (totalScore / students.length).toFixed(2);
    let highest = Math.max(...students.map(s => s.score));
    let lowest = Math.min(...students.map(s => s.score));
    
    statsContainer.innerHTML = `
        <h3>สถิติ</h3>
        <p>จำนวนนักเรียน: ${students.length} คน</p>
        <p>คะแนนเฉลี่ย: ${average}</p>
        <p>คะแนนสูงสุด: ${highest}</p>
        <p>คะแนนต่ำสุด: ${lowest}</p>
    `;
}
```

**หยุด 20 นาที - ทำไปด้วยกัน!**

---

## Slide 34: Element Properties และ Methods รวม 📋

### Element Properties ที่ใช้บ่อย:
```javascript
let element = document.querySelector('.example');

// เนื้อหา
console.log(element.textContent);   // ข้อความธรรมดา
console.log(element.innerHTML);     // HTML รวมด้วย
console.log(element.outerHTML);     // HTML รวม element เอง

// ข้อมูล Element
console.log(element.tagName);       // 'DIV'
console.log(element.id);            // id attribute
console.log(element.className);     // class attribute (string)
console.log(element.classList);     // class list (object)

// ขนาดและตำแหน่ง
console.log(element.offsetWidth);   // ความกว้างรวม border, padding
console.log(element.offsetHeight);  // ความสูงรวม border, padding
console.log(element.clientWidth);   // ความกว้างไม่รวม border
console.log(element.clientHeight);  // ความสูงไม่รวม border
console.log(element.offsetTop);     // ตำแหน่งจากด้านบน
console.log(element.offsetLeft);    // ตำแหน่งจากด้านซ้าย
```

### Data Attributes:
```html
<div data-user-id="123" data-role="admin" data-active="true">User Info</div>
```

```javascript
let userDiv = document.querySelector('div');

// อ่าน data attributes
console.log(userDiv.dataset.userId);    // "123"
console.log(userDiv.dataset.role);      // "admin"
console.log(userDiv.dataset.active);    // "true"

// เขียน data attributes
userDiv.dataset.lastLogin = '2024-01-15';
userDiv.dataset.verified = 'false';
```

---

## Slide 35: Performance และ Best Practices 🚀

### การเลือก Elements อย่างมีประสิทธิภาพ:
```javascript
// ❌ ไม่ดี - เลือกซ้ำๆ
function updateButtons() {
    document.getElementById('btn1').style.color = 'red';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn1').textContent = 'Loading...';
}

// ✅ ดี - เลือกครั้งเดียว
function updateButtons() {
    let btn = document.getElementById('btn1');
    btn.style.color = 'red';
    btn.disabled = true;
    btn.textContent = 'Loading...';
}

// ✅ ดีกว่า - cache elements
let cachedElements = {
    btn1: document.getElementById('btn1'),
    btn2: document.getElementById('btn2'),
    container: document.getElementById('container')
};

function updateButtons() {
    let btn = cachedElements.btn1;
    btn.style.color = 'red';
    btn.disabled = true;
    btn.textContent = 'Loading...';
}
```

### การจัดการหลาย Elements:
```javascript
// ❌ ไม่ดี - เปลี่ยนทีละตัว (DOM Reflow หลายครั้ง)
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.style.display = 'block';
    item.style.color = 'blue';
    item.style.padding = '10px';
});

// ✅ ดี - ใช้ CSS Class
/* CSS */
.item-styled {
    display: block;
    color: blue;
    padding: 10px;
}

// JavaScript
items.forEach(item => {
    item.classList.add('item-styled');
});

// ✅ ดีกว่า - แก้ไขครั้งเดียว
let container = document.getElementById('container');
container.style.display = 'none'; // ซ่อนก่อน
items.forEach(item => {
    item.style.color = 'blue';
    item.style.padding = '10px';
});
container.style.display = 'block'; // แสดงอีกครั้ง
```

---

## Slide 36: การทำงานกับ Forms 📝

### การอ่านข้อมูลจาก Form:
```html
<form id="user-form">
    <input type="text" name="username" id="username" required>
    <input type="email" name="email" id="email" required>
    <select name="country" id="country">
        <option value="th">ไทย</option>
        <option value="us">สหรัฐอเมริกา</option>
    </select>
    <input type="checkbox" name="newsletter" id="newsletter">
    <input type="radio" name="gender" value="male" id="male">
    <input type="radio" name="gender" value="female" id="female">
    <textarea name="bio" id="bio"></textarea>
    <button type="submit">ส่งข้อมูล</button>
</form>
```

```javascript
// อ่านข้อมูลแต่ละ field
function getFormData() {
    let form = document.getElementById('user-form');
    
    let data = {
        username: form.username.value,
        email: form.email.value,
        country: form.country.value,
        newsletter: form.newsletter.checked,
        gender: form.querySelector('input[name="gender"]:checked')?.value,
        bio: form.bio.value
    };
    
    return data;
}

// อ่านข้อมูลด้วย FormData (ใหม่)
function getFormDataModern() {
    let form = document.getElementById('user-form');
    let formData = new FormData(form);
    
    let data = {};
    for (let [key, value] of formData) {
        data[key] = value;
    }
    
    return data;
}
```

---

## Slide 37: Animation ด้วย JavaScript 🎬

### การสร้าง Animation พื้นฐาน:
```javascript
// Fade In Animation
function fadeIn(element, duration = 1000) {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    let start = performance.now();
    
    function animate(currentTime) {
        let elapsed = currentTime - start;
        let progress = elapsed / duration;
        
        if (progress < 1) {
            element.style.opacity = progress;
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 1;
        }
    }
    
    requestAnimationFrame(animate);
}

// Slide Down Animation
function slideDown(element, duration = 500) {
    element.style.height = '0px';
    element.style.overflow = 'hidden';
    element.style.display = 'block';
    
    let targetHeight = element.scrollHeight;
    let start = performance.now();
    
    function animate(currentTime) {
        let elapsed = currentTime - start;
        let progress = Math.min(elapsed / duration, 1);
        
        element.style.height = (targetHeight * progress) + 'px';
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.height = 'auto';
        }
    }
    
    requestAnimationFrame(animate);
}

// การใช้งาน
let box = document.getElementById('animated-box');
fadeIn(box);
// slideDown(box);
```

---

## Slide 38: ความปลอดภัยใน DOM Manipulation 🔒

### XSS (Cross-site Scripting) Prevention:
```javascript
// ❌ อันตราย - ใช้ innerHTML กับข้อมูลจาก user
function displayUserComment(comment) {
    let div = document.getElementById('comments');
    div.innerHTML += `<p>${comment}</p>`;
    // ถ้า comment = '<script>alert("Hacked!")</script>' 
    // จะทำงานและอันตราย!
}

// ✅ ปลอดภัย - ใช้ textContent
function displayUserComment(comment) {
    let div = document.getElementById('comments');
    let p = document.createElement('p');
    p.textContent = comment; // ข้อความธรรมดาเท่านั้น
    div.appendChild(p);
}

// ✅ ปลอดภัย - Sanitize HTML
function sanitizeHTML(str) {
    let temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function displayUserComment(comment) {
    let div = document.getElementById('comments');
    let sanitized = sanitizeHTML(comment);
    div.innerHTML += `<p>${sanitized}</p>`;
}
```

### การตรวจสอบข้อมูล:
```javascript
function safeGetElement(id) {
    let element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id "${id}" not found`);
        return null;
    }
    return element;
}

function safeUpdateContent(elementId, content) {
    let element = safeGetElement(elementId);
    if (element && typeof content === 'string') {
        element.textContent = content;
        return true;
    }
    return false;
}

// การใช้งาน
if (safeUpdateContent('title', 'หัวข้อใหม่')) {
    console.log('อัปเดตสำเร็จ');
} else {
    console.log('อัปเดตไม่สำเร็จ');
}
```

---

## Slide 39: คำถาม 🤔

### ถ้าคุณต้องการสร้างรายการ Todo ที่ผู้ใช้สามารถเพิ่ม-ลบได้
### วิธีไหนปลอดภัยที่สุด?

A) ใช้ innerHTML เพื่อเพิ่ม HTML โดยตรง
B) ใช้ createElement และ appendChild
C) ใช้ document.write เพื่อเขียนลงหน้าเว็บ
D) ใช้ eval() เพื่อรัน JavaScript code

**คิด 30 วินาที...**

---

## Slide 40: เฉลย 🎯

### คำตอบ: B) ใช้ createElement และ appendChild

```javascript
// ✅ วิธีที่ปลอดภัยที่สุด
function addTodoItem(todoText) {
    // สร้าง elements
    let li = document.createElement('li');
    let span = document.createElement('span');
    let deleteBtn = document.createElement('button');
    
    // ตั้งค่าเนื้อหา (ปลอดภัยจาก XSS)
    span.textContent = todoText;
    deleteBtn.textContent = 'ลบ';
    
    // เพิ่ม event listener
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    // ประกอบ elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    // เพิ่มเข้าไปใน list
    document.getElementById('todo-list').appendChild(li);
}
```

### เหตุผล:
- **ปลอดภัยจาก XSS** - ไม่รัน HTML/JavaScript
- **มีการควบคุม** - สร้าง element ทีละตัว
- **Performance ดี** - ไม่ต้อง parse HTML

---

## Slide 41: Modern DOM APIs 🌟

### Intersection Observer - ตรวจจับการเลื่อนหน้าจอ:
```javascript
// สำหรับ Lazy Loading หรือ Animation เมื่อ scroll
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element เข้ามาในหน้าจอแล้ว
            entry.target.classList.add('animate-in');
            
            // หยุดสังเกต element นี้
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // เมื่อ element แสดง 10%
});

// เริ่มสังเกต elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});
```

### Mutation Observer - ตรวจจับการเปลี่ยนแปลง DOM:
```javascript
// สำหรับตรวจจับเมื่อมีการเปลี่ยนแปลง DOM
let mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log('มีการเพิ่ม/ลบ element');
        } else if (mutation.type === 'attributes') {
            console.log('มีการเปลี่ยน attribute');
        }
    });
});

// เริ่มสังเกต
let container = document.getElementById('dynamic-container');
mutationObserver.observe(container, {
    childList: true,      // สังเกตการเพิ่ม/ลบ child
    attributes: true,     // สังเกตการเปลี่ยน attributes
    subtree: true        // สังเกต children ของ children ด้วย
});
```

### ResizeObserver - ตรวจจับการเปลี่ยนขนาด:
```javascript
// สำหรับตรวจจับเมื่อ element เปลี่ยนขนาด
let resizeObserver = new ResizeObserver((entries) => {
    entries.forEach(entry => {
        console.log('ขนาดใหม่:', entry.contentRect.width, 'x', entry.contentRect.height);
        
        // ปรับ layout ตามขนาดใหม่
        if (entry.contentRect.width < 600) {
            entry.target.classList.add('mobile-layout');
        } else {
            entry.target.classList.remove('mobile-layout');
        }
    });
});

resizeObserver.observe(document.getElementById('responsive-container'));
```

---

## Slide 42: Web APIs ที่ใช้กับ DOM 🌐

### Geolocation API:
```javascript
function getLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                
                document.getElementById('location').textContent = 
                    `ละติจูด: ${lat.toFixed(4)}, ลองติจูด: ${lng.toFixed(4)}`;
            },
            function(error) {
                document.getElementById('location').textContent = 
                    'ไม่สามารถหาตำแหน่งได้: ' + error.message;
            }
        );
    } else {
        document.getElementById('location').textContent = 
            'เบราว์เซอร์ไม่รองรับ Geolocation';
    }
}
```

### Clipboard API:
```javascript
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        
        // แสดงข้อความแจ้งเตือน
        let notification = document.createElement('div');
        notification.textContent = 'คัดลอกแล้ว!';
        notification.className = 'copy-notification';
        document.body.appendChild(notification);
        
        // ลบข้อความหลัง 2 วินาที
        setTimeout(() => {
            notification.remove();
        }, 2000);
        
    } catch (error) {
        console.error('ไม่สามารถคัดลอกได้:', error);
    }
}

async function pasteFromClipboard() {
    try {
        let text = await navigator.clipboard.readText();
        document.getElementById('paste-area').value = text;
    } catch (error) {
        console.error('ไม่สามารถวางได้:', error);
    }
}
```

### Notification API:
```javascript
function showNotification(title, message) {
    // ขอ permission ก่อน
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            createNotification(title, message);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    createNotification(title, message);
                }
            });
        }
    }
}

function createNotification(title, message) {
    let notification = new Notification(title, {
        body: message,
        icon: '/path/to/icon.png',
        badge: '/path/to/badge.png'
    });
    
    // ปิดอัตโนมัติหลัง 5 วินาที
    setTimeout(() => {
        notification.close();
    }, 5000);
    
    // จัดการ click event
    notification.onclick = function() {
        window.focus();
        notification.close();
    };
}
```

---

## Slide 43: Advanced Techniques 🎯

### Virtual DOM Concept (เบื้องต้น):
```javascript
// จำลองการทำงานของ Virtual DOM แบบง่ายๆ
class SimpleVirtualDOM {
    constructor(container) {
        this.container = container;
        this.virtualTree = [];
        this.realTree = [];
    }
    
    createElement(tag, props = {}, children = []) {
        return {
            tag,
            props,
            children: Array.isArray(children) ? children : [children]
        };
    }
    
    render(virtualElement) {
        // สร้าง real DOM element
        let realElement = document.createElement(virtualElement.tag);
        
        // ตั้งค่า attributes
        for (let prop in virtualElement.props) {
            if (prop === 'className') {
                realElement.className = virtualElement.props[prop];
            } else {
                realElement.setAttribute(prop, virtualElement.props[prop]);
            }
        }
        
        // เพิ่ม children
        virtualElement.children.forEach(child => {
            if (typeof child === 'string') {
                realElement.appendChild(document.createTextNode(child));
            } else {
                realElement.appendChild(this.render(child));
            }
        });
        
        return realElement;
    }
    
    update(newVirtualTree) {
        // ลบของเก่า
        this.container.innerHTML = '';
        
        // เพิ่มของใหม่
        let newRealTree = this.render(newVirtualTree);
        this.container.appendChild(newRealTree);
        
        this.virtualTree = newVirtualTree;
    }
}

// การใช้งาน
let vdom = new SimpleVirtualDOM(document.getElementById('app'));

let todoApp = vdom.createElement('div', {className: 'todo-app'}, [
    vdom.createElement('h1', {}, 'Todo List'),
    vdom.createElement('ul', {}, [
        vdom.createElement('li', {}, 'งานที่ 1'),
        vdom.createElement('li', {}, 'งานที่ 2')
    ])
]);

vdom.update(todoApp);
```

### Template System:
```javascript
// Simple Template Engine
class SimpleTemplate {
    static render(template, data) {
        return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return data[key] || '';
        });
    }
    
    static renderList(template, items) {
        return items.map(item => this.render(template, item)).join('');
    }
}

// การใช้งาน
let userTemplate = `
    <div class="user-card">
        <h3>{{name}}</h3>
        <p>อายุ: {{age}} ปี</p>
        <p>อีเมล: {{email}}</p>
    </div>
`;

let users = [
    {name: 'สมชาย', age: 25, email: 'somchai@email.com'},
    {name: 'สมหญิง', age: 23, email: 'somying@email.com'}
];

let html = SimpleTemplate.renderList(userTemplate, users);
document.getElementById('user-list').innerHTML = html;
```

---

## Slide 44: Performance Monitoring 📊

### การวัดประสิทธิภาพ:
```javascript
// วัดเวลาในการ render
function measureRenderTime(label, renderFunction) {
    console.time(label);
    
    // ใช้ requestAnimationFrame เพื่อวัดเวลาที่แท้จริง
    requestAnimationFrame(() => {
        renderFunction();
        
        requestAnimationFrame(() => {
            console.timeEnd(label);
        });
    });
}

// ตัวอย่างการใช้งาน
measureRenderTime('Render 1000 items', () => {
    let container = document.getElementById('container');
    let fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 1000; i++) {
        let div = document.createElement('div');
        div.textContent = `Item ${i}`;
        fragment.appendChild(div);
    }
    
    container.appendChild(fragment);
});

// การใช้ Performance API
function trackPagePerformance() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            let perfData = performance.timing;
            let loadTime = perfData.loadEventEnd - perfData.navigationStart;
            let domReady = perfData.domContentLoadedEventEnd - perfData.navigationStart;
            
            console.log(`หน้าเว็บโหลดเสร็จใน: ${loadTime}ms`);
            console.log(`DOM พร้อมใน: ${domReady}ms`);
            
            // ส่งข้อมูลไปยัง analytics
            // analytics.track('page_load_time', loadTime);
        }, 0);
    });
}

trackPagePerformance();
```

### Memory Management:
```javascript
// ตรวจสอบ Memory Usage
function checkMemoryUsage() {
    if ('memory' in performance) {
        let memory = performance.memory;
        console.log({
            usedJSHeapSize: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
            totalJSHeapSize: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
            jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
        });
    }
}

// ทำความสะอาด Event Listeners
class ElementManager {
    constructor() {
        this.elements = new Map();
        this.listeners = new WeakMap();
    }
    
    createElement(tag, id) {
        let element = document.createElement(tag);
        element.id = id;
        this.elements.set(id, element);
        this.listeners.set(element, []);
        return element;
    }
    
    addEventListener(elementId, event, handler) {
        let element = this.elements.get(elementId);
        if (element) {
            element.addEventListener(event, handler);
            this.listeners.get(element).push({event, handler});
        }
    }
    
    removeElement(elementId) {
        let element = this.elements.get(elementId);
        if (element) {
            // ลบ event listeners ทั้งหมด
            let listeners = this.listeners.get(element) || [];
            listeners.forEach(({event, handler}) => {
                element.removeEventListener(event, handler);
            });
            
            // ลบจาก DOM
            element.remove();
            
            // ล้าง references
            this.elements.delete(elementId);
            this.listeners.delete(element);
        }
    }
}
```

---

## Slide 45: Debugging Advanced Techniques 🔧

### DOM Debugging:
```javascript
// DOM Watcher - ตรวจสอบการเปลี่ยนแปลง
class DOMWatcher {
    static watchElement(element, callback) {
        let observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                callback({
                    type: mutation.type,
                    target: mutation.target,
                    addedNodes: [...mutation.addedNodes],
                    removedNodes: [...mutation.removedNodes],
                    attributeName: mutation.attributeName,
                    oldValue: mutation.oldValue
                });
            });
        });
        
        observer.observe(element, {
            childList: true,
            attributes: true,
            attributeOldValue: true,
            subtree: true
        });
        
        return observer;
    }
    
    static logChanges(element) {
        return this.watchElement(element, (change) => {
            console.group('DOM Change Detected');
            console.log('Type:', change.type);
            console.log('Target:', change.target);
            if (change.addedNodes.length) {
                console.log('Added:', change.addedNodes);
            }
            if (change.removedNodes.length) {
                console.log('Removed:', change.removedNodes);
            }
            if (change.attributeName) {
                console.log('Attribute:', change.attributeName);
                console.log('Old Value:', change.oldValue);
            }
            console.groupEnd();
        });
    }
}

// การใช้งาน
DOMWatcher.logChanges(document.body);

// Element Inspector
function inspectElement(selector) {
    let element = document.querySelector(selector);
    if (!element) {
        console.error(`Element "${selector}" not found`);
        return;
    }
    
    console.group(`Inspecting: ${selector}`);
    console.log('Element:', element);
    console.log('Tag:', element.tagName);
    console.log('ID:', element.id);
    console.log('Classes:', [...element.classList]);
    console.log('Attributes:', [...element.attributes].map(attr => `${attr.name}="${attr.value}"`));
    console.log('Computed Style:', window.getComputedStyle(element));
    console.log('Dimensions:', {
        width: element.offsetWidth,
        height: element.offsetHeight,
        top: element.offsetTop,
        left: element.offsetLeft
    });
    console.log('Parent:', element.parentElement);
    console.log('Children:', [...element.children]);
    console.groupEnd();
}

// การใช้งาน
inspectElement('#main-container');
```

---

## Slide 46: Project Structure และ Organization 📁

### Module Pattern:
```javascript
// DOM Utility Module
const DOMUtils = (function() {
    'use strict';
    
    // Private methods
    function validateElement(element) {
        if (!element || !(element instanceof Element)) {
            throw new Error('Invalid element provided');
        }
    }
    
    function sanitizeHTML(str) {
        let temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }
    
    // Public API
    return {
        // Element Selection
        get: function(selector) {
            return document.querySelector(selector);
        },
        
        getAll: function(selector) {
            return [...document.querySelectorAll(selector)];
        },
        
        // Content Management
        setText: function(element, text) {
            validateElement(element);
            element.textContent = text;
        },
        
        setHTML: function(element, html) {
            validateElement(element);
            element.innerHTML = sanitizeHTML(html);
        },
        
        // Class Management
        addClass: function(element, className) {
            validateElement(element);
            element.classList.add(className);
        },
        
        removeClass: function(element, className) {
            validateElement(element);
            element.classList.remove(className);
        },
        
        toggleClass: function(element, className) {
            validateElement(element);
            element.classList.toggle(className);
        },
        
        // Animation
        fadeIn: function(element, duration = 300) {
            validateElement(element);
            element.style.opacity = '0';
            element.style.display = 'block';
            
            let start = performance.now();
            
            function animate(currentTime) {
                let elapsed = currentTime - start;
                let progress = Math.min(elapsed / duration, 1);
                
                element.style.opacity = progress.toString();
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            
            requestAnimationFrame(animate);
        },
        
        fadeOut: function(element, duration = 300) {
            validateElement(element);
            
            let start = performance.now();
            let startOpacity = parseFloat(window.getComputedStyle(element).opacity);
            
            function animate(currentTime) {
                let elapsed = currentTime - start;
                let progress = Math.min(elapsed / duration, 1);
                
                element.style.opacity = (startOpacity * (1 - progress)).toString();
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    element.style.display = 'none';
                }
            }
            
            requestAnimationFrame(animate);
        }
    };
})();

// การใช้งาน
let title = DOMUtils.get('#title');
DOMUtils.setText(title, 'หัวข้อใหม่');
DOMUtils.addClass(title, 'highlight');
DOMUtils.fadeIn(title);
```

---

## Slide 47: Final Project - Complete Web App! 🌟

### สร้าง Task Management App ที่สมบูรณ์:

#### HTML Structure:
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager Pro</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <header>
            <h1>Task Manager Pro</h1>
            <div class="stats" id="stats"></div>
        </header>
        
        <main>
            <section class="task-input">
                <input type="text" id="task-title" placeholder="ชื่องาน">
                <select id="task-priority">
                    <option value="low">ปกติ</option>
                    <option value="medium">ปานกลาง</option>
                    <option value="high">สำคัญ</option>
                </select>
                <input type="date" id="task-date">
                <button onclick="TaskManager.addTask()">เพิ่มงาน</button>
            </section>
            
            <section class="filters">
                <button onclick="TaskManager.filterTasks('all')" class="filter-btn active">ทั้งหมด</button>
                <button onclick="TaskManager.filterTasks('pending')" class="filter-btn">รอดำเนินการ</button>
                <button onclick="TaskManager.filterTasks('completed')" class="filter-btn">เสร็จแล้ว</button>
            </section>
            
            <section class="task-list" id="task-list"></section>
        </main>
    </div>
    
    <script src="task-manager.js"></script>
</body>
</html>
```

#### JavaScript Implementation:
```javascript
// Task Manager Application
const TaskManager = (function() {
    'use strict';
    
    let tasks = [];
    let currentFilter = 'all';
    let taskIdCounter = 1;
    
    // Task Class
    class Task {
        constructor(title, priority = 'low', dueDate = null) {
            this.id = taskIdCounter++;
            this.title = title;
            this.priority = priority;
            this.dueDate = dueDate;
            this.completed = false;
            this.createdAt = new Date();
        }
        
        toggle() {
            this.completed = !this.completed;
        }
        
        isOverdue() {
            if (!this.dueDate || this.completed) return false;
            return new Date(this.dueDate) < new Date();
        }
        
        getPriorityClass() {
            return `priority-${this.priority}`;
        }
    }
    
    // DOM Elements
    const elements = {
        taskTitle: document.getElementById('task-title'),
        taskPriority: document.getElementById('task-priority'),
        taskDate: document.getElementById('task-date'),
        taskList: document.getElementById('task-list'),
        stats: document.getElementById('stats'),
        filterBtns: document.querySelectorAll('.filter-btn')
    };
    
    // Private Methods
    function renderTask(task) {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.getPriorityClass()} ${task.completed ? 'completed' : ''}`;
        taskElement.dataset.taskId = task.id;
        
        if (task.isOverdue()) {
            taskElement.classList.add('overdue');
        }
        
        taskElement.innerHTML = `
            <div class="task-content">
                <input type="checkbox" ${task.completed ? 'checked' : ''} 
                       onchange="TaskManager.toggleTask(${task.id})">
                <span class="task-title">${escapeHtml(task.title)}</span>
                <span class="task-priority">${getPriorityText(task.priority)}</span>
                ${task.dueDate ? `<span class="task-date">${formatDate(task.dueDate)}</span>` : ''}
            </div>
            <div class="task-actions">
                <button onclick="TaskManager.editTask(${task.id})" class="edit-btn">แก้ไข</button>
                <button onclick="TaskManager.deleteTask(${task.id})" class="delete-btn">ลบ</button>
            </div>
        `;
        
        return taskElement;
    }
    
    function renderTasks() {
        const filteredTasks = getFilteredTasks();
        elements.taskList.innerHTML = '';
        
        if (filteredTasks.length === 0) {
            elements.taskList.innerHTML = '<p class="no-tasks">ไม่มีงานในรายการนี้</p>';
            return;
        }
        
        filteredTasks.forEach(task => {
            elements.taskList.appendChild(renderTask(task));
        });
    }
    
    function getFilteredTasks() {
        switch (currentFilter) {
            case 'pending':
                return tasks.filter(task => !task.completed);
            case 'completed':
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    }
    
    function updateStats() {
        const total = tasks.length;
        const completed = tasks.filter(task => task.completed).length;
        const pending = total - completed;
        const overdue = tasks.filter(task => task.isOverdue()).length;
        
        elements.stats.innerHTML = `
            <span>ทั้งหมด: ${total}</span>
            <span>เสร็จแล้ว: ${completed}</span>
            <span>รอทำ: ${pending}</span>
            ${overdue > 0 ? `<span class="overdue-count">เกินกำหนด: ${overdue}</span>` : ''}
        `;
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    function getPriorityText(priority) {
        const priorities = {
            low: 'ปกติ',
            medium: 'ปานกลาง',
            high: 'สำคัญ'
        };
        return priorities[priority] || 'ปกติ';
    }
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('th-TH');
    }
    
    function clearForm() {
        elements.taskTitle.value = '';
        elements.taskPriority.value = 'low';
        elements.taskDate.value = '';
    }
    
    function validateTaskInput(title) {
        if (!title.trim()) {
            alert('กรุณาใส่ชื่องาน');
            return false;
        }
        return true;
    }
    
    function saveToStorage() {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('ไม่สามารถบันทึกข้อมูลได้:', error);
        }
    }
    
    function loadFromStorage() {
        try {
            const saved = localStorage.getItem('tasks');
            if (saved) {
                const taskData = JSON.parse(saved);
                tasks = taskData.map(data => {
                    const task = new Task(data.title, data.priority, data.dueDate);
                    task.id = data.id;
                    task.completed = data.completed;
                    task.createdAt = new Date(data.createdAt);
                    return task;
                });
                taskIdCounter = Math.max(...tasks.map(t => t.id), 0) + 1;
            }
        } catch (error) {
            console.error('ไม่สามารถโหลดข้อมูลได้:', error);
        }
    }
    
    // Public API
    return {
        init() {
            loadFromStorage();
            this.render();
            
            // Set default date to today
            elements.taskDate.value = new Date().toISOString().split('T')[0];
            
            // Add enter key listener
            elements.taskTitle.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.addTask();
                }
            });
        },
        
        addTask() {
            const title = elements.taskTitle.value.trim();
            const priority = elements.taskPriority.value;
            const dueDate = elements.taskDate.value || null;
            
            if (!validateTaskInput(title)) return;
            
            const task = new Task(title, priority, dueDate);
            tasks.push(task);
            
            clearForm();
            saveToStorage();
            this.render();
            
            // Show success message
            this.showMessage('เพิ่มงานสำเร็จ!', 'success');
        },
        
        deleteTask(id) {
            if (confirm('ต้องการลบงานนี้หรือไม่?')) {
                tasks = tasks.filter(task => task.id !== id);
                saveToStorage();
                this.render();
                this.showMessage('ลบงานสำเร็จ!', 'success');
            }
        },
        
        toggleTask(id) {
            const task = tasks.find(task => task.id === id);
            if (task) {
                task.toggle();
                saveToStorage();
                this.render();
            }
        },
        
        editTask(id) {
            const task = tasks.find(task => task.id === id);
            if (task) {
                const newTitle = prompt('แก้ไขชื่องาน:', task.title);
                if (newTitle && newTitle.trim()) {
                    task.title = newTitle.trim();
                    saveToStorage();
                    this.render();
                    this.showMessage('แก้ไขงานสำเร็จ!', 'success');
                }
            }
        },
        
        filterTasks(filter) {
            currentFilter = filter;
            
            // Update filter buttons
            elements.filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderTasks();
        },
        
        render() {
            renderTasks();
            updateStats();
        },
        
        showMessage(message, type = 'info') {
            const messageEl = document.createElement('div');
            messageEl.className = `message ${type}`;
            messageEl.textContent = message;
            
            document.body.appendChild(messageEl);
            
            setTimeout(() => {
                messageEl.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                messageEl.classList.remove('show');
                setTimeout(() => {
                    messageEl.remove();
                }, 300);
            }, 2000);
        },
        
        // Debug methods
        getTasks() {
            return tasks;
        },
        
        clearAllTasks() {
            if (confirm('ต้องการลบงานทั้งหมดหรือไม่?')) {
                tasks = [];
                saveToStorage();
                this.render();
            }
        }
    };
})();

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    TaskManager.init();
});

// Add some sample data for demo
setTimeout(() => {
    if (TaskManager.getTasks().length === 0) {
        // Add sample tasks
        TaskManager.addTask = TaskManager.addTask.bind(TaskManager);
        
        document.getElementById('task-title').value = 'ทำการบ้านคณิตศาสตร์';
        document.getElementById('task-priority').value = 'high';
        TaskManager.addTask();
        
        document.getElementById('task-title').value = 'ซื้อของใช้ในบ้าน';
        document.getElementById('task-priority').value = 'medium';
        TaskManager.addTask();
        
        document.getElementById('task-title').value = 'อ่านหนังสือ JavaScript';
        document.getElementById('task-priority').value = 'low';
        TaskManager.addTask();
    }
}, 1000);
```

**หยุด 30 นาที - ทำโปรเจคสำเร็จรูป!**

---

## Slide 48: สรุปและทบทวน 🎯

### สิ่งที่เราเรียนรู้ครบ 4 ชั่วโมง:

#### **JavaScript พื้นฐาน (2.5 ชม.):**
✅ **Variables & Data Types:** let, const, String, Number, Boolean, Arrays, Objects  
✅ **Functions:** Declaration, Expression, Arrow Functions  
✅ **Control Flow:** if/else, switch, for/while loops  
✅ **Array Methods:** forEach, map, filter, reduce  
✅ **Error Handling:** try/catch, debugging techniques  
✅ **Modern JavaScript:** Template literals, destructuring  

#### **DOM Manipulation (1.5 ชม.):**
✅ **Element Selection:** getElementById, querySelector, querySelectorAll  
✅ **Content Management:** textContent, innerHTML, attributes  
✅ **CSS Control:** style properties, classList methods  
✅ **Element Creation:** createElement, appendChild, remove  
✅ **DOM Navigation:** parent, children, siblings  
✅ **Advanced APIs:** Intersection Observer, Mutation Observer  
✅ **Security:** XSS prevention, input sanitization  

### ทักษะที่ได้รับ:
- เขียน JavaScript เพื่อควบคุมหน้าเว็บได้
- สร้างเว็บไซต์ที่มีปฏิสัมพันธ์
- จัดการข้อมูลและแสดงผลแบบ Dynamic
- Debug และแก้ไขปัญหาได้
- เข้าใจหลักการทำงานของ Modern Web Apps
- 