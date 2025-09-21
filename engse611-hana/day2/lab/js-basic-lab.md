# JavaScript พื้นฐาน
## ENGSE611 - การพัฒนาเว็บด้วยเทคโนโลยีสมัยใหม่
### วันที่ 2 - หัวข้อที่ 1: JavaScript พื้นฐาน (4 ชั่วโมง)

---

## 🎯 **จุดประสงค์การเรียน**

หลังจากเรียนจบหัวข้อนี้ นักศึกษาจะสามารถ:
- เขียน JavaScript เบื้องต้นได้
- ประกาศและใช้งานตัวแปรได้ถูกต้อง
- สร้างและเรียกใช้ Functions ได้
- จัดการข้อมูลด้วย Arrays และ Objects
- ใช้ Control Structures (if-else, loops) ได้
- Debug และแก้ไขปัญหาเบื้องต้นได้

---

## 📚 **LAB 1: Variables และ Data Types**

### **ทฤษฎี: ตัวแปรใน JavaScript**

JavaScript มี 3 วิธีในการประกาศตัวแปร:
- `let` - ตัวแปรที่เปลี่ยนค่าได้ (แนะนำ)
- `const` - ตัวแปรที่ไม่เปลี่ยนค่า (ค่าคงที่)
- `var` - วิธีเก่า (ไม่แนะนำ)

### **💻 Exercise 1.1: ประกาศตัวแปรพื้นฐาน**

**สร้างไฟล์:** `exercise1.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 1: Variables</title>
</head>
<body>
    <h1>JavaScript Variables</h1>
    <p>เปิด Console (F12) เพื่อดูผลลัพธ์</p>

    <script>
        // ประกาศตัวแปรแต่ละประเภท
        let studentName = "นายสมชาย";          // String (ข้อความ)
        const university = "มหาวิทยาลัยเทคโนโลยี"; // String (ค่าคงที่)
        var age = 20;                         // Number (ตัวเลข)
        let gpa = 3.25;                       // Number (ทศนิยม)
        let isStudent = true;                 // Boolean (จริง/เท็จ)
        let address = null;                   // Null (ค่าว่าง)
        let phoneNumber;                      // Undefined (ไม่กำหนดค่า)

        // แสดงผลลัพธ์ใน Console
        console.log("=== ข้อมูลนักศึกษา ===");
        console.log("ชื่อ:", studentName);
        console.log("มหาวิทยาลัย:", university);
        console.log("อายุ:", age);
        console.log("เกรดเฉลี่ย:", gpa);
        console.log("เป็นนักศึกษา:", isStudent);
        console.log("ที่อยู่:", address);
        console.log("เบอร์โทร:", phoneNumber);
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. Copy code ข้างต้นใส่ไฟล์ `exercise1.html`
2. เปิดไฟล์ในเบราว์เซอร์
3. กด F12 เปิด Console
4. ดูผลลัพธ์ใน Console
5. ลองเปลี่ยนค่าตัวแปรและ Refresh หน้าเว็บ

**🔍 สังเกต:**
- ข้อความต้องใส่ใน `"..."` หรือ `'...'`
- ตัวเลขไม่ต้องใส่เครื่องหมายใดๆ
- Boolean มีแค่ `true` และ `false`

---

### **💻 Exercise 1.2: Data Types และ typeof**

**สร้างไฟล์:** `exercise2.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 2: Data Types</title>
</head>
<body>
    <h1>JavaScript Data Types</h1>
    <div id="output"></div>

    <script>
        // ตัวอย่าง Data Types ต่างๆ
        let text = "Hello JavaScript";
        let number = 42;
        let decimal = 3.14159;
        let isActive = true;
        let emptyValue = null;
        let notDefined;
        let studentData = {
            name: "สมหญิง",
            age: 19,
            major: "วิศวกรรมคอมพิวเตอร์"
        };
        let subjects = ["Math", "Physics", "Programming"];

        // ตรวจสอบ Data Type ด้วย typeof
        console.log("=== Data Types ===");
        console.log("typeof text:", typeof text);           // string
        console.log("typeof number:", typeof number);       // number
        console.log("typeof decimal:", typeof decimal);     // number
        console.log("typeof isActive:", typeof isActive);   // boolean
        console.log("typeof emptyValue:", typeof emptyValue); // object (!)
        console.log("typeof notDefined:", typeof notDefined); // undefined
        console.log("typeof studentData:", typeof studentData); // object
        console.log("typeof subjects:", typeof subjects);   // object

        // แสดงผลบนหน้าเว็บ
        let output = document.getElementById('output');
        output.innerHTML = `
            <h3>ผลลัพธ์:</h3>
            <p><strong>ข้อความ:</strong> ${text} (${typeof text})</p>
            <p><strong>ตัวเลข:</strong> ${number} (${typeof number})</p>
            <p><strong>ทศนิยม:</strong> ${decimal} (${typeof decimal})</p>
            <p><strong>Boolean:</strong> ${isActive} (${typeof isActive})</p>
            <p><strong>Object:</strong> ${JSON.stringify(studentData)} (${typeof studentData})</p>
            <p><strong>Array:</strong> ${JSON.stringify(subjects)} (${typeof subjects})</p>
        `;

        // ✨ พิเศษ: typeof null เป็น "object" นี่คือ JavaScript bug ที่มีชื่อเสียง!
        console.log("⚠️ JavaScript Bug: typeof null =", typeof null);
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. รันโค้ดและดูผลลัพธ์
2. ลองสร้างตัวแปรใหม่ด้วย Data Types ต่างๆ
3. ใช้ `typeof` ตรวจสอบ Data Type
4. สังเกตว่า `typeof null` ได้ผลลัพธ์เป็น "object" (นี่คือ bug ของ JavaScript!)

**💡 เคล็ดลับ:**
- `JSON.stringify()` ใช้แปลง Object/Array เป็น String เพื่อแสดงผล
- Array ใน JavaScript เป็น Object ชนิดพิเศษ

---

## 📚 **LAB 2: Functions**

### **ทฤษฎี: Functions ใน JavaScript**

Function คือชุดคำสั่งที่เรียกใช้ซ้ำได้ มี 3 วิธีในการสร้าง:
1. **Function Declaration** - ประกาศ function
2. **Function Expression** - กำหนด function ให้ตัวแปร
3. **Arrow Function** - รูปแบบใหม่ (ES6)

### **💻 Exercise 2.1: Function Declaration**

**สร้างไฟล์:** `exercise3.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 3: Functions</title>
</head>
<body>
    <h1>JavaScript Functions</h1>
    
    <div>
        <input type="text" id="studentName" placeholder="ชื่อนักศึกษา" value="สมชาย">
        <input type="number" id="score" placeholder="คะแนน" value="85" min="0" max="100">
        <button onclick="testFunctions()">ทดสอบ Functions</button>
    </div>
    
    <div id="result"></div>

    <script>
        // Function Declaration - ประกาศ Function
        function greetStudent(name) {
            return "สวัสดี " + name + "!";
        }

        // Function สำหรับคำนวณเกรด
        function calculateGrade(score) {
            if (score >= 80) {
                return "A";
            } else if (score >= 70) {
                return "B";
            } else if (score >= 60) {
                return "C";
            } else if (score >= 50) {
                return "D";
            } else {
                return "F";
            }
        }

        // Function สำหรับคำนวณค่าใช้จ่าย
        function calculateExpenses(tuition, dorm, food, transport) {
            let total = tuition + dorm + food + transport;
            return {
                monthly: total,
                yearly: total * 12,
                breakdown: {
                    tuition: tuition,
                    dorm: dorm,
                    food: food,
                    transport: transport
                }
            };
        }

        // Function ที่เรียกใช้ Functions อื่น
        function testFunctions() {
            // ดึงค่าจาก input
            let name = document.getElementById('studentName').value;
            let score = parseInt(document.getElementById('score').value);
            
            // เรียกใช้ Functions
            let greeting = greetStudent(name);
            let grade = calculateGrade(score);
            let expenses = calculateExpenses(15000, 3000, 6000, 1500);
            
            // แสดงผล
            document.getElementById('result').innerHTML = `
                <h3>ผลลัพธ์:</h3>
                <p><strong>คำทักทาย:</strong> ${greeting}</p>
                <p><strong>คะแนน ${score} ได้เกรด:</strong> ${grade}</p>
                <h4>ค่าใช้จ่ายประมาณ:</h4>
                <ul>
                    <li>รายเดือน: ${expenses.monthly.toLocaleString()} บาท</li>
                    <li>รายปี: ${expenses.yearly.toLocaleString()} บาท</li>
                    <li>ค่าเทอม: ${expenses.breakdown.tuition.toLocaleString()} บาท</li>
                    <li>ค่าหอพัก: ${expenses.breakdown.dorm.toLocaleString()} บาท</li>
                </ul>
            `;
            
            // แสดงใน Console ด้วย
            console.log("=== Function Results ===");
            console.log("Greeting:", greeting);
            console.log("Grade:", grade);
            console.log("Expenses:", expenses);
        }

        // ทดสอบ Functions เบื้องต้น
        console.log("=== Testing Functions ===");
        console.log(greetStudent("นักศึกษา"));
        console.log("Score 95 =", calculateGrade(95));
        console.log("Score 45 =", calculateGrade(45));
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. รันโค้ดและทดสอบ input ต่างๆ
2. ลองเปลี่ยนคะแนนและดูผลลัพธ์
3. สร้าง Function ใหม่สำหรับคำนวณ BMI
4. ลองสร้าง Function ที่รับ parameter หลายตัว

---

### **💻 Exercise 2.2: Function Expression และ Arrow Function**

**สร้างไฟล์:** `exercise4.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 4: Function Types</title>
</head>
<body>
    <h1>Function Expression & Arrow Function</h1>
    
    <div>
        <input type="number" id="num1" placeholder="เลขที่ 1" value="10">
        <input type="number" id="num2" placeholder="เลขที่ 2" value="5">
        <button onclick="calculateAll()">คำนวณทั้งหมด</button>
    </div>
    
    <div id="mathResult"></div>

    <script>
        // 1. Function Declaration (รูปแบบปกติ)
        function add(a, b) {
            return a + b;
        }

        // 2. Function Expression (กำหนดให้ตัวแปร)
        const subtract = function(a, b) {
            return a - b;
        };

        // 3. Arrow Function (รูปแบบใหม่ ES6)
        const multiply = (a, b) => {
            return a * b;
        };

        // 4. Arrow Function แบบสั้น (สำหรับ 1 บรรทัด)
        const divide = (a, b) => a / b;

        // 5. Arrow Function ไม่มี parameter
        const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

        // 6. Arrow Function มี parameter เดียว (ไม่ต้องใส่วงเล็บ)
        const square = x => x * x;

        // Array ของ Functions สำหรับคำนวณซับซ้อน
        const mathOperations = [
            { name: "บวก", func: add, symbol: "+" },
            { name: "ลบ", func: subtract, symbol: "-" },
            { name: "คูณ", func: multiply, symbol: "×" },
            { name: "หาร", func: divide, symbol: "÷" }
        ];

        function calculateAll() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            
            let result = "<h3>ผลการคำนวณ:</h3>";
            
            // ใช้ forEach loop กับ Array ของ Functions
            mathOperations.forEach(operation => {
                const answer = operation.func(num1, num2);
                result += `<p>${num1} ${operation.symbol} ${num2} = ${answer}</p>`;
            });
            
            // เพิ่มการคำนวณพิเศษ
            result += `<h4>การคำนวณพิเศษ:</h4>`;
            result += `<p>กำลังสองของ ${num1} = ${square(num1)}</p>`;
            result += `<p>กำลังสองของ ${num2} = ${square(num2)}</p>`;
            result += `<p>เลขสุ่ม = ${getRandomNumber()}</p>`;
            
            document.getElementById('mathResult').innerHTML = result;
            
            // แสดงใน Console
            console.log("=== Calculator Results ===");
            console.log(`${num1} + ${num2} =`, add(num1, num2));
            console.log(`${num1} - ${num2} =`, subtract(num1, num2));
            console.log(`${num1} × ${num2} =`, multiply(num1, num2));
            console.log(`${num1} ÷ ${num2} =`, divide(num1, num2));
        }

        // ทดสอบ Functions
        console.log("=== Function Types Demo ===");
        console.log("Function Declaration:", add(5, 3));
        console.log("Function Expression:", subtract(5, 3));
        console.log("Arrow Function:", multiply(5, 3));
        console.log("Arrow Function (short):", divide(5, 3));
        console.log("Random Number:", getRandomNumber());
        console.log("Square of 7:", square(7));
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. เปรียบเทียบ Function แต่ละแบบ
2. ทดสอบการคำนวณต่างๆ
3. ลองสร้าง Arrow Function ของตัวเอง
4. สังเกตความแตกต่างของ syntax

**💡 เคล็ดลับ:**
- Arrow Function สั้นกว่า แต่ Function Declaration อ่านง่ายกว่า
- ใช้ Arrow Function สำหรับ Function สั้นๆ
- `parseFloat()` แปลง String เป็น Number ทศนิยม
- `parseInt()` แปลง String เป็น Number เต็ม

---

## 📚 **LAB 3: Arrays**

### **ทฤษฎี: Arrays ใน JavaScript**

Array คือตัวแปรที่เก็บข้อมูลหลายค่าในตัวแปรเดียว โดยเรียงลำดับด้วย index (0, 1, 2, ...)

### **💻 Exercise 3.1: Array พื้นฐาน**

**สร้างไฟล์:** `exercise5.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 5: Arrays</title>
</head>
<body>
    <h1>JavaScript Arrays</h1>
    
    <div>
        <input type="text" id="newStudent" placeholder="ชื่อนักศึกษาใหม่">
        <button onclick="addStudent()">เพิ่มนักศึกษา</button>
        <button onclick="removeLastStudent()">ลบคนสุดท้าย</button>
        <button onclick="searchStudent()">ค้นหา "สม"</button>
        <button onclick="showStatistics()">แสดงสถิติ</button>
    </div>
    
    <div id="arrayResult"></div>

    <script>
        // สร้าง Array นักศึกษา
        let students = ["สมชาย", "สมหญิง", "สมศักดิ์", "สมใจ", "วิภา", "นิพนธ์"];
        
        // Array คะแนนสอบ (ตรงกับลำดับนักศึกษา)
        let scores = [85, 92, 78, 88, 96, 82];
        
        // Array subjects
        let subjects = ["คณิตศาสตร์", "ฟิสิกส์", "เคมี", "โปรแกรมมิ่ง", "ภาษาอังกฤษ"];

        function displayStudents() {
            let result = `<h3>รายชื่อนักศึกษา (${students.length} คน):</h3><ol>`;
            
            for (let i = 0; i < students.length; i++) {
                result += `<li>${students[i]} - คะแนน: ${scores[i] || 'ไม่มีข้อมูล'}</li>`;
            }
            
            result += "</ol>";
            return result;
        }

        function addStudent() {
            const newName = document.getElementById('newStudent').value.trim();
            
            if (newName === "") {
                alert("กรุณาใส่ชื่อนักศึกษา");
                return;
            }
            
            // เพิ่มนักศึกษาใหม่
            students.push(newName);
            
            // เพิ่มคะแนนสุ่ม
            const randomScore = Math.floor(Math.random() * 40) + 60; // 60-100
            scores.push(randomScore);
            
            // เคลียร์ input
            document.getElementById('newStudent').value = "";
            
            updateDisplay();
            console.log("เพิ่มนักศึกษา:", newName, "คะแนน:", randomScore);
        }

        function removeLastStudent() {
            if (students.length === 0) {
                alert("ไม่มีนักศึกษาในรายชื่อ");
                return;
            }
            
            // ลบคนสุดท้าย
            const removedStudent = students.pop();
            const removedScore = scores.pop();
            
            updateDisplay();
            console.log("ลบนักศึกษา:", removedStudent, "คะแนน:", removedScore);
        }

        function searchStudent() {
            // ค้นหานักศึกษาที่ชื่อมี "สม"
            const foundStudents = students.filter(name => name.includes("สม"));
            
            let result = displayStudents();
            result += `<h4>นักศึกษาที่มี "สม" ในชื่อ (${foundStudents.length} คน):</h4>`;
            result += `<p style="color: blue;">${foundStudents.join(", ")}</p>`;
            
            document.getElementById('arrayResult').innerHTML = result;
            console.log("ผลการค้นหา:", foundStudents);
        }

        function showStatistics() {
            // คำนวณสถิติ
            const totalStudents = students.length;
            const totalScore = scores.reduce((sum, score) => sum + score, 0);
            const averageScore = totalScore / totalStudents;
            const maxScore = Math.max(...scores);
            const minScore = Math.min(...scores);
            
            // หาผู้ที่ได้คะแนนสูงสุด
            const topStudentIndex = scores.indexOf(maxScore);
            const topStudent = students[topStudentIndex];
            
            let result = displayStudents();
            result += `
                <h4>สถิติคะแนน:</h4>
                <ul>
                    <li>จำนวนนักศึกษา: ${totalStudents} คน</li>
                    <li>คะแนนเฉลี่ย: ${averageScore.toFixed(2)} คะแนน</li>
                    <li>คะแนนสูงสุด: ${maxScore} คะแนน (${topStudent})</li>
                    <li>คะแนนต่ำสุด: ${minScore} คะแนน</li>
                </ul>
            `;
            
            document.getElementById('arrayResult').innerHTML = result;
            
            console.log("=== สถิติ ===");
            console.log("คะแนนเฉลี่ย:", averageScore.toFixed(2));
            console.log("นักศึกษาเก่ง:", topStudent, "คะแนน:", maxScore);
        }

        function updateDisplay() {
            document.getElementById('arrayResult').innerHTML = displayStudents();
        }

        // แสดงผลเริ่มต้น
        updateDisplay();

        // ทดสอบ Array Methods
        console.log("=== Array Methods Demo ===");
        console.log("students.length:", students.length);
        console.log("students[0]:", students[0]);
        console.log("students.join(', '):", students.join(", "));
        console.log("subjects.slice(0, 3):", subjects.slice(0, 3));
        console.log("students.indexOf('สมชาย'):", students.indexOf("สมชาย"));
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. ทดสอบการเพิ่ม/ลบนักศึกษา
2. ดูวิธีการค้นหาใน Array
3. เรียนรู้ Array Methods: `push()`, `pop()`, `filter()`, `reduce()`
4. ลองสร้าง Array ของตัวเองและทดสอบ

**💡 Array Methods ที่สำคัญ:**
- `push()` - เพิ่มข้อมูลท้าย Array
- `pop()` - ลบข้อมูลท้าย Array
- `filter()` - กรองข้อมูลตามเงื่อนไข
- `reduce()` - รวมค่าใน Array
- `join()` - รวม Array เป็น String

---

## 📚 **LAB 4: Objects**

### **ทฤษฎี: Objects ใน JavaScript**

Object คือตัวแปรที่เก็บข้อมูลแบบ key-value pairs เหมาะสำหรับข้อมูลที่ซับซ้อน

### **💻 Exercise 4.1: Objects พื้นฐาน**

**สร้างไฟล์:** `exercise6.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 6: Objects</title>
</head>
<body>
    <h1>JavaScript Objects</h1>
    
    <div>
        <h3>สร้างข้อมูลนักศึกษา:</h3>
        <input type="text" id="objName" placeholder="ชื่อ" value="สมชาย">
        <input type="number" id="objAge" placeholder="อายุ" value="20">
        <input type="text" id="objMajor" placeholder="สาขา" value="วิศวกรรมคอมพิวเตอร์">
        <input type="number" id="objGPA" placeholder="GPA" value="3.25" step="0.01" min="0" max="4">
        <br><br>
        <button onclick="createStudent()">สร้างข้อมูลนักศึกษา</button>
        <button onclick="showAllStudents()">แสดงนักศึกษาทั้งหมด</button>
        <button onclick="findTopStudent()">หานักศึกษาเก่ง</button>
    </div>
    
    <div id="objectResult"></div>

    <script>
        // Object ตัวอย่าง
        let student1 = {
            name: "สมหญิง",
            age: 19,
            major: "วิศวกรรมคอมพิวเตอร์",
            gpa: 3.75,
            subjects: ["โปรแกรมมิ่ง", "คณิตศาสตร์", "ฟิสิกส์"],
            address: {
                province: "กรุงเทพ",
                district: "บางกะปิ",
                zipcode: "10240"
            },
            // Method ใน Object
            getFullInfo: function() {
                return `${this.name} อายุ ${this.age} ปี สาขา${this.major} GPA ${this.gpa}`;
            },
            getGradeStatus: function() {
                if (this.gpa >= 3.5) return "เก่งมาก";
                if (this.gpa >= 3.0) return "ดี";
                if (this.gpa >= 2.5) return "ปานกลาง";
                return "ต้องพยายาม";
            },
            addSubject: function(subject) {
                this.subjects.push(subject);
            }
        };

        // Array ของ Objects
        let allStudents = [
            student1,
            {
                name: "สมชาย",
                age: 20,
                major: "วิศวกรรมโยธา",
                gpa: 3.20,
                subjects: ["สถิติ", "ฟิสิกส์", "คณิตศาสตร์"],
                address: { province: "เชียงใหม่", district: "เมือง", zipcode: "50000" },
                getFullInfo: function() {
                    return `${this.name} อายุ ${this.age} ปี สาขา${this.major} GPA ${this.gpa}`;
                },
                getGradeStatus: function() {
                    if (this.gpa >= 3.5) return "เก่งมาก";
                    if (this.gpa >= 3.0) return "ดี";
                    if (this.gpa >= 2.5) return "ปานกลาง";
                    return "ต้องพยายาม";
                },
                addSubject: function(subject) {
                    this.subjects.push(subject);
                }
            }
        ];

        function createStudent() {
            const name = document.getElementById('objName').value;
            const age = parseInt(document.getElementById('objAge').value);
            const major = document.getElementById('objMajor').value;
            const gpa = parseFloat(document.getElementById('objGPA').value);
            
            // สร้าง Object ใหม่
            const newStudent = {
                name: name,
                age: age,
                major: major,
                gpa: gpa,
                subjects: ["วิชาพื้นฐาน"],
                address: { province: "ไม่ระบุ", district: "ไม่ระบุ", zipcode: "00000" },
                getFullInfo: function() {
                    return `${this.name} อายุ ${this.age} ปี สาขา${this.major} GPA ${this.gpa}`;
                },
                getGradeStatus: function() {
                    if (this.gpa >= 3.5) return "เก่งมาก";
                    if (this.gpa >= 3.0) return "ดี";
                    if (this.gpa >= 2.5) return "ปานกลาง";
                    return "ต้องพยายาม";
                },
                addSubject: function(subject) {
                    this.subjects.push(subject);
                }
            };
            
            // เพิ่มใน Array
            allStudents.push(newStudent);
            
            // แสดงผล
            let result = `
                <h3>สร้างนักศึกษาใหม่เรียบร้อย!</h3>
                <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4>${newStudent.name}</h4>
                    <p><strong>ข้อมูลเต็ม:</strong> ${newStudent.getFullInfo()}</p>
                    <p><strong>สถานะ:</strong> ${newStudent.getGradeStatus()}</p>
                    <p><strong>วิชาที่เรียน:</strong> ${newStudent.subjects.join(", ")}</p>
                </div>
            `;
            
            document.getElementById('objectResult').innerHTML = result;
            
            console.log("สร้างนักศึกษาใหม่:", newStudent);
            console.log("จำนวนนักศึกษาทั้งหมด:", allStudents.length);
        }

        function showAllStudents() {
            let result = `<h3>นักศึกษาทั้งหมด (${allStudents.length} คน):</h3>`;
            
            allStudents.forEach((student, index) => {
                result += `
                    <div style="background: #f9f9f9; padding: 10px; margin: 5px 0; border-radius: 5px;">
                        <strong>${index + 1}. ${student.getFullInfo()}</strong><br>
                        สถานะ: <span style="color: ${student.gpa >= 3.5 ? 'green' : student.gpa >= 3.0 ? 'blue' : 'orange'};">
                            ${student.getGradeStatus()}
                        </span><br>
                        ที่อยู่: ${student.address.district}, ${student.address.province}<br>
                        วิชา: ${student.subjects.join(", ")}
                    </div>
                `;
            });
            
            document.getElementById('objectResult').innerHTML = result;
        }

        function findTopStudent() {
            // หานักศึกษาที่มี GPA สูงสุด
            let topStudent = allStudents.reduce((prev, current) => {
                return (prev.gpa > current.gpa) ? prev : current;
            });
            
            // สถิติทั่วไป
            let totalGPA = allStudents.reduce((sum, student) => sum + student.gpa, 0);
            let averageGPA = totalGPA / allStudents.length;
            
            let result = `
                <h3>สถิติและนักศึกษาเก่ง:</h3>
                <div style="background: #fffacd; padding: 15px; border-radius: 8px;">
                    <h4>🏆 นักศึกษาเก่งที่สุด:</h4>
                    <p><strong>${topStudent.name}</strong> - GPA: ${topStudent.gpa} (${topStudent.getGradeStatus()})</p>
                    <p>สาขา: ${topStudent.major}</p>
                    
                    <h4>📊 สถิติทั่วไป:</h4>
                    <ul>
                        <li>จำนวนนักศึกษา: ${allStudents.length} คน</li>
                        <li>GPA เฉลี่ย: ${averageGPA.toFixed(2)}</li>
                        <li>นักศึกษาเก่งมาก (GPA ≥ 3.5): ${allStudents.filter(s => s.gpa >= 3.5).length} คน</li>
                        <li>นักศึกษาระดับดี (GPA ≥ 3.0): ${allStudents.filter(s => s.gpa >= 3.0).length} คน</li>
                    </ul>
                </div>
            `;
            
            document.getElementById('objectResult').innerHTML = result;
            
            console.log("นักศึกษาเก่งที่สุด:", topStudent);
            console.log("GPA เฉลี่ย:", averageGPA.toFixed(2));
        }

        // ทดสอบ Object Properties และ Methods
        console.log("=== Object Demo ===");
        console.log("student1.name:", student1.name);
        console.log("student1.getFullInfo():", student1.getFullInfo());
        console.log("student1.address.province:", student1.address.province);
        
        // เพิ่มวิชาใหม่
        student1.addSubject("ภาษาอังกฤษ");
        console.log("หลังเพิ่มวิชา:", student1.subjects);
        
        // Object.keys(), Object.values()
        console.log("Object keys:", Object.keys(student1));
        console.log("Object values:", Object.values(student1.address));
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. ทดสอบการสร้าง Object ใหม่
2. เรียนรู้การเข้าถึง Properties ด้วย dot notation
3. ทดสอบ Methods ใน Object
4. ลองสร้าง Object ซับซ้อนที่มี Object ซ้อน Object

**💡 Object Concepts ที่สำคัญ:**
- Properties: ข้อมูลใน Object
- Methods: Function ใน Object
- `this` keyword: อ้างอิงถึง Object ปัจจุบัน
- Nested Objects: Object ซ้อน Object

---

## 📚 **LAB 5: Control Structures**

### **ทฤษฎี: การควบคุมการทำงาน**

Control Structures ใช้ควบคุมการทำงานของโปรแกรม:
- **if-else**: เลือกทำงานตามเงื่อนไข
- **switch**: เลือกทำงานแบบหลายทาง
- **for loop**: วนซ้ำจำนวนที่แน่นอน
- **while loop**: วนซ้ำตามเงื่อนไข

### **💻 Exercise 5.1: if-else และ Conditionals**

**สร้างไฟล์:** `exercise7.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 7: Control Structures</title>
</head>
<body>
    <h1>Control Structures</h1>
    
    <div style="background: #f0f0f0; padding: 20px; margin: 10px 0; border-radius: 10px;">
        <h3>🎯 เกมทายเลข (1-100)</h3>
        <input type="number" id="guessInput" placeholder="ทายเลข 1-100" min="1" max="100">
        <button onclick="makeGuess()">ทาย!</button>
        <button onclick="resetGame()">เกมใหม่</button>
        <div id="gameResult" style="margin-top: 10px; font-weight: bold;"></div>
        <div id="gameStats" style="margin-top: 5px; color: #666;"></div>
    </div>

    <div style="background: #f8f8f8; padding: 20px; margin: 10px 0; border-radius: 10px;">
        <h3>📊 ระบบคำนวณเกรด</h3>
        <input type="number" id="scoreInput" placeholder="คะแนน 0-100" min="0" max="100">
        <button onclick="calculateGrade()">คำนวณเกรด</button>
        <div id="gradeResult" style="margin-top: 10px;"></div>
    </div>

    <script>
        // ตัวแปรสำหรับเกมทายเลข
        let secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let maxAttempts = 7;
        let gameOver = false;

        function makeGuess() {
            if (gameOver) {
                alert("เกมจบแล้ว กดเกมใหม่เพื่อเล่นอีกครั้ง");
                return;
            }

            const guess = parseInt(document.getElementById('guessInput').value);
            const resultDiv = document.getElementById('gameResult');
            const statsDiv = document.getElementById('gameStats');

            // ตรวจสอบ input
            if (!guess || guess < 1 || guess > 100) {
                resultDiv.innerHTML = '<span style="color: red;">❌ กรุณาใส่เลข 1-100</span>';
                return;
            }

            attempts++;
            
            // ตรวจสอบคำตอบ
            if (guess === secretNumber) {
                // ถูก!
                resultDiv.innerHTML = `<span style="color: green;">🎉 ยินดีด้วย! คำตอบคือ ${secretNumber}</span>`;
                statsDiv.innerHTML = `🏆 คุณทายถูกใน ${attempts} ครั้ง!`;
                gameOver = true;
            } else if (attempts >= maxAttempts) {
                // หมดโอกาส
                resultDiv.innerHTML = `<span style="color: red;">😞 หมดโอกาสแล้ว! คำตอบคือ ${secretNumber}</span>`;
                statsDiv.innerHTML = `ใช้โอกาสครบ ${maxAttempts} ครั้งแล้ว`;
                gameOver = true;
            } else {
                // ยังไม่ถูก
                if (guess < secretNumber) {
                    resultDiv.innerHTML = `<span style="color: orange;">📈 เลขที่คิดไว้มากกว่า ${guess}</span>`;
                } else {
                    resultDiv.innerHTML = `<span style="color: orange;">📉 เลขที่คิดไว้น้อยกว่า ${guess}</span>`;
                }
                
                let remaining = maxAttempts - attempts;
                statsDiv.innerHTML = `ครั้งที่ ${attempts}/${maxAttempts} - เหลือโอกาส ${remaining} ครั้ง`;
            }

            // เคลียร์ input
            document.getElementById('guessInput').value = '';
        }

        function resetGame() {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            gameOver = false;
            
            document.getElementById('gameResult').innerHTML = 'ฉันคิดเลขใหม่แล้ว มาทายดู!';
            document.getElementById('gameStats').innerHTML = `เดาได้ ${maxAttempts} ครั้ง`;
            document.getElementById('guessInput').value = '';
            
            console.log("เกมใหม่ เลขลับ:", secretNumber); // สำหรับ debug
        }

        function calculateGrade() {
            const score = parseFloat(document.getElementById('scoreInput').value);
            const resultDiv = document.getElementById('gradeResult');
            
            // ตรวจสอบ input
            if (isNaN(score) || score < 0 || score > 100) {
                resultDiv.innerHTML = '<span style="color: red;">❌ กรุณาใส่คะแนน 0-100</span>';
                return;
            }
            
            let grade, gpa, status, color;
            
            // คำนวณเกรดด้วย if-else if-else
            if (score >= 80) {
                grade = "A";
                gpa = 4.0;
                status = "เก่งมาก";
                color = "green";
            } else if (score >= 75) {
                grade = "B+";
                gpa = 3.5;
                status = "ดีมาก";
                color = "lightgreen";
            } else if (score >= 70) {
                grade = "B";
                gpa = 3.0;
                status = "ดี";
                color = "blue";
            } else if (score >= 65) {
                grade = "C+";
                gpa = 2.5;
                status = "ค่อนข้างดี";
                color = "orange";
            } else if (score >= 60) {
                grade = "C";
                gpa = 2.0;
                status = "ปานกลาง";
                color = "orange";
            } else if (score >= 55) {
                grade = "D+";
                gpa = 1.5;
                status = "อ่อน";
                color = "red";
            } else if (score >= 50) {
                grade = "D";
                gpa = 1.0;
                status = "อ่อนมาก";
                color = "red";
            } else {
                grade = "F";
                gpa = 0.0;
                status = "ตก";
                color = "darkred";
            }
            
            // แสดงผล
            resultDiv.innerHTML = `
                <div style="background: white; padding: 15px; border-radius: 8px; border-left: 5px solid ${color};">
                    <h4>ผลการประเมิน:</h4>
                    <p><strong>คะแนน:</strong> ${score}/100</p>
                    <p><strong>เกรด:</strong> <span style="color: ${color}; font-size: 1.2em;">${grade}</span></p>
                    <p><strong>GPA:</strong> ${gpa}/4.0</p>
                    <p><strong>สถานะ:</strong> <span style="color: ${color};">${status}</span></p>
                </div>
            `;
            
            console.log(`คะแนน ${score} = เกรด ${grade} (GPA ${gpa})`);
        }

        // เริ่มต้นเกม
        resetGame();
        
        // ทดสอบ Conditional Operators
        console.log("=== Conditional Operators ===");
        let x = 10, y = 5;
        console.log("x > y:", x > y);
        console.log("x < y:", x < y);
        console.log("x >= y:", x >= y);
        console.log("x <= y:", x <= y);
        console.log("x === y:", x === y);
        console.log("x !== y:", x !== y);
        
        // ทดสอบ Logical Operators
        console.log("=== Logical Operators ===");
        console.log("true && false:", true && false);
        console.log("true || false:", true || false);
        console.log("!true:", !true);
        
        // ทดสอบ Ternary Operator
        let age = 18;
        let canVote = age >= 18 ? "ได้" : "ไม่ได้";
        console.log(`อายุ ${age} ลงคะแนนเสียง${canVote}`);
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. เล่นเกมทายเลขและสังเกตการทำงานของ if-else
2. ทดสอบระบบคำนวณเกรดด้วยคะแนนต่างๆ
3. ลองแก้ไขเงื่อนไขเกรดตามต้องการ
4. ทดสอบ Logical Operators ใน Console

---

### **💻 Exercise 5.2: Loops**

**สร้างไฟล์:** `exercise8.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 8: Loops</title>
</head>
<body>
    <h1>JavaScript Loops</h1>
    
    <div style="background: #f0f8ff; padding: 20px; margin: 10px 0; border-radius: 10px;">
        <h3>📊 ตารางสูตรคูณ</h3>
        <select id="tableNumber">
            <option value="2">สูตรคูณ 2</option>
            <option value="3">สูตรคูณ 3</option>
            <option value="5">สูตรคูณ 5</option>
            <option value="7">สูตรคูณ 7</option>
            <option value="9">สูตรคูณ 9</option>
            <option value="12">สูตรคูณ 12</option>
        </select>
        <button onclick="showMultiplicationTable()">แสดงตาราง</button>
        <div id="tableResult"></div>
    </div>

    <div style="background: #fff8dc; padding: 20px; margin: 10px 0; border-radius: 10px;">
        <h3>🔢 ตัวเลขและรูปแบบ</h3>
        <input type="number" id="patternNumber" placeholder="จำนวน (1-20)" min="1" max="20" value="5">
        <button onclick="showNumberPatterns()">แสดงรูปแบบ</button>
        <div id="patternResult"></div>
    </div>

    <div style="background: #f0fff0; padding: 20px; margin: 10px 0; border-radius: 10px;">
        <h3>📈 สถิติและการคำนวณ</h3>
        <button onclick="calculateStatistics()">คำนวณสถิติ 1-100</button>
        <button onclick="findPrimeNumbers()">หาจำนวนเฉพาะ 1-50</button>
        <div id="statsResult"></div>
    </div>

    <script>
        function showMultiplicationTable() {
            const number = parseInt(document.getElementById('tableNumber').value);
            const resultDiv = document.getElementById('tableResult');
            
            let table = `<h4>ตารางสูตรคูณ ${number}:</h4>`;
            table += '<div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px;">';
            
            // for loop พื้นฐาน
            for (let i = 1; i <= 12; i++) {
                let result = number * i;
                table += `<p style="font-family: monospace;">${i} × ${number} = ${result}</p>`;
            }
            
            table += '</div>';
            resultDiv.innerHTML = table;
            
            console.log(`=== สูตรคูณ ${number} ===`);
            for (let i = 1; i <= 12; i++) {
                console.log(`${i} × ${number} = ${number * i}`);
            }
        }

        function showNumberPatterns() {
            const n = parseInt(document.getElementById('patternNumber').value);
            const resultDiv = document.getElementById('patternResult');
            
            if (!n || n < 1 || n > 20) {
                resultDiv.innerHTML = '<span style="color: red;">กรุณาใส่จำนวน 1-20</span>';
                return;
            }
            
            let output = '<div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px;">';
            
            // รูปแบบ 1: ตัวเลขเรียงกัน
            output += '<h4>รูปแบบที่ 1: ตัวเลขเรียงกัน</h4>';
            let pattern1 = '';
            for (let i = 1; i <= n; i++) {
                pattern1 += i + ' ';
            }
            output += `<p style="font-family: monospace;">${pattern1}</p>`;
            
            // รูปแบบ 2: สามเหลี่ยมดาว
            output += '<h4>รูปแบบที่ 2: สามเหลี่ยมดาว</h4>';
            for (let i = 1; i <= n; i++) {
                let stars = '';
                for (let j = 1; j <= i; j++) {
                    stars += '⭐ ';
                }
                output += `<p style="font-family: monospace;">${stars}</p>`;
            }
            
            // รูปแบบ 3: ตัวเลขสามเหลี่ยม
            output += '<h4>รูปแบบที่ 3: ตัวเลขสามเหลี่ยม</h4>';
            for (let i = 1; i <= n; i++) {
                let numbers = '';
                for (let j = 1; j <= i; j++) {
                    numbers += j + ' ';
                }
                output += `<p style="font-family: monospace;">${numbers}</p>`;
            }
            
            // รูปแบบ 4: ตัวเลขย้อนกลับ
            output += '<h4>รูปแบบที่ 4: ตัวเลขย้อนกลับ</h4>';
            let pattern4 = '';
            for (let i = n; i >= 1; i--) {
                pattern4 += i + ' ';
            }
            output += `<p style="font-family: monospace;">${pattern4}</p>`;
            
            output += '</div>';
            resultDiv.innerHTML = output;
        }

        function calculateStatistics() {
            const resultDiv = document.getElementById('statsResult');
            
            // คำนวณสถิติของเลข 1-100
            let sum = 0;
            let evenCount = 0;
            let oddCount = 0;
            let evenSum = 0;
            let oddSum = 0;
            
            // for loop สำหรับคำนวณ
            for (let i = 1; i <= 100; i++) {
                sum += i;
                
                if (i % 2 === 0) {
                    evenCount++;
                    evenSum += i;
                } else {
                    oddCount++;
                    oddSum += i;
                }
            }
            
            let average = sum / 100;
            
            let output = `
                <h4>สถิติของตัวเลข 1-100:</h4>
                <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px;">
                    <p><strong>ผลรวมทั้งหมด:</strong> ${sum.toLocaleString()}</p>
                    <p><strong>ค่าเฉลี่ย:</strong> ${average}</p>
                    <p><strong>เลขคู่:</strong> ${evenCount} ตัว, ผลรวม ${evenSum.toLocaleString()}</p>
                    <p><strong>เลขคี่:</strong> ${oddCount} ตัว, ผลรวม ${oddSum.toLocaleString()}</p>
                    <p><strong>เลขหารด้วย 5 ลงตัว:</strong> ${Math.floor(100/5)} ตัว</p>
                    <p><strong>เลขหารด้วย 10 ลงตัว:</strong> ${Math.floor(100/10)} ตัว</p>
                </div>
            `;
            
            resultDiv.innerHTML = output;
            
            console.log("=== สถิติ 1-100 ===");
            console.log("ผลรวม:", sum);
            console.log("ค่าเฉลี่ย:", average);
            console.log("เลขคู่:", evenCount, "ตัว");
            console.log("เลขคี่:", oddCount, "ตัว");
        }

        function findPrimeNumbers() {
            const resultDiv = document.getElementById('statsResult');
            
            let primes = [];
            
            // หาจำนวนเฉพาะ 1-50
            for (let num = 2; num <= 50; num++) {
                let isPrime = true;
                
                // ตรวจสอบว่า num เป็นจำนวนเฉพาะหรือไม่
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        isPrime = false;
                        break; // ออกจาก loop ทันที
                    }
                }
                
                if (isPrime) {
                    primes.push(num);
                }
            }
            
            let output = `
                <h4>จำนวนเฉพาะ 1-50:</h4>
                <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px;">
                    <p><strong>จำนวนเฉพาะ (${primes.length} ตัว):</strong></p>
                    <p style="font-family: monospace; line-height: 1.8;">${primes.join(', ')}</p>
                    
                    <h5>การวิเคราะห์:</h5>
                    <ul>
                        <li>จำนวนเฉพาะน้อยที่สุด: ${Math.min(...primes)}</li>
                        <li>จำนวนเฉพาะมากที่สุด: ${Math.max(...primes)}</li>
                        <li>ผลรวมจำนวนเฉพาะ: ${primes.reduce((sum, prime) => sum + prime, 0)}</li>
                        <li>จำนวนเฉพาะที่เป็นเลขคี่: ${primes.filter(p => p % 2 === 1).length} ตัว</li>
                    </ul>
                </div>
            `;
            
            resultDiv.innerHTML = output;
            
            console.log("=== จำนวนเฉพาะ 1-50 ===");
            console.log("จำนวนเฉพาะ:", primes);
            console.log("จำนวน:", primes.length, "ตัว");
        }

        // ทดสอบ Loop ต่างๆ
        console.log("=== Loop Examples ===");
        
        // for loop
        console.log("For loop 1-5:");
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }
        
        // while loop
        console.log("While loop countdown:");
        let countdown = 5;
        while (countdown > 0) {
            console.log(countdown);
            countdown--;
        }
        
        // do-while loop
        console.log("Do-while loop:");
        let x = 1;
        do {
            console.log("x =", x);
            x++;
        } while (x <= 3);
        
        // for...of loop (สำหรับ Array)
        console.log("For...of with array:");
        let fruits = ["apple", "banana", "orange"];
        for (let fruit of fruits) {
            console.log(fruit);
        }
        
        // for...in loop (สำหรับ Object)
        console.log("For...in with object:");
        let student = { name: "สมชาย", age: 20, major: "CS" };
        for (let key in student) {
            console.log(key + ":", student[key]);
        }
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. ทดสอบตารางสูตรคูณต่างๆ
2. สร้างรูปแบบตัวเลขและดาว
3. ทำความเข้าใจ nested loops (loop ซ้อน loop)
4. ลองแก้ไข loop เพื่อสร้างรูปแบบใหม่

**💡 Loop Types ที่สำคัญ:**
- `for` - วนซ้ำจำนวนที่แน่นอน
- `while` - วนซ้ำตามเงื่อนไข
- `for...of` - วนซ้ำใน Array
- `for...in` - วนซ้ำใน Object

---

## 📚 **LAB 6: โปรเจครวม - ระบบจัดการนักศึกษา**

### **💻 Final Exercise: Student Management System**

**สร้างไฟล์:** `final-project.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจัดการนักศึกษา</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input, .form-group select {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }
        .btn {
            background: #4CAF50;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin: 5px;
        }
        .btn:hover {
            background: #45a049;
        }
        .btn-danger {
            background: #f44336;
        }
        .btn-danger:hover {
            background: #da190b;
        }
        .btn-info {
            background: #2196F3;
        }
        .btn-info:hover {
            background: #0b7dda;
        }
        .student-card {
            background: #f9f9f9;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 5px solid #4CAF50;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        .stat-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎓 ระบบจัดการนักศึกษา</h1>
        <p>โปรเจคสรุป JavaScript พื้นฐาน - ใช้ Variables, Functions, Arrays, Objects, และ Control Structures</p>
    </div>

    <div class="container">
        <h2>📝 เพิ่มนักศึกษาใหม่</h2>
        <form id="studentForm">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="form-group">
                    <label for="studentName">ชื่อ-นามสกุล:</label>
                    <input type="text" id="studentName" required>
                </div>
                <div class="form-group">
                    <label for="studentAge">อายุ:</label>
                    <input type="number" id="studentAge" min="15" max="30" required>
                </div>
                <div class="form-group">
                    <label for="studentMajor">สาขาวิชา:</label>
                    <select id="studentMajor" required>
                        <option value="">เลือกสาขา</option>
                        <option value="วิศวกรรมคอมพิวเตอร์">วิศวกรรมคอมพิวเตอร์</option>
                        <option value="วิศวกรรมโยธา">วิศวกรรมโยธา</option>
                        <option value="วิศวกรรมไฟฟ้า">วิศวกรรมไฟฟ้า</option>
                        <option value="วิศวกรรมเครื่องกล">วิศวกรรมเครื่องกล</option>
                        <option value="วิศวกรรมอุตสาหการ">วิศวกรรมอุตสาหการ</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="studentGPA">เกรดเฉลี่ย (GPA):</label>
                    <input type="number" id="studentGPA" min="0" max="4" step="0.01" required>
                </div>
            </div>
            <button type="submit" class="btn">➕ เพิ่มนักศึกษา</button>
            <button type="button" class="btn btn-info" onclick="generateSampleData()">🎲 สร้างข้อมูลตัวอย่าง</button>
        </form>
    </div>

    <div class="container">
        <h2>📊 สถิติภาพรวม</h2>
        <div class="stats-grid" id="statsContainer">
            <!-- สถิติจะถูกสร้างที่นี่ -->
        </div>
    </div>

    <div class="container">
        <h2>🔍 ค้นหาและกรองข้อมูล</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <input type="text" id="searchName" placeholder="ค้นหาชื่อ">
            <select id="filterMajor">
                <option value="">ทุกสาขา</option>
                <option value="วิศวกรรมคอมพิวเตอร์">วิศวกรรมคอมพิวเตอร์</option>
                <option value="วิศวกรรมโยธา">วิศวกรรมโยธา</option>
                <option value="วิศวกรรมไฟฟ้า">วิศวกรรมไฟฟ้า</option>
                <option value="วิศวกรรมเครื่องกล">วิศวกรรมเครื่องกล</option>
                <option value="วิศวกรรมอุตสาหการ">วิศวกรรมอุตสาหการ</option>
            </select>
            <select id="sortBy">
                <option value="name">เรียงตามชื่อ</option>
                <option value="age">เรียงตามอายุ</option>
                <option value="gpa">เรียงตาม GPA</option>
            </select>
        </div>
        <button class="btn btn-info" onclick="searchAndFilter()">🔍 ค้นหา</button>
        <button class="btn btn-info" onclick="showTopStudents()">🏆 นักศึกษาเก่ง</button>
        <button class="btn btn-danger" onclick="clearAllData()">🗑️ ลบข้อมูลทั้งหมด</button>
    </div>

    <div class="container">
        <h2>👥 รายชื่อนักศึกษา</h2>
        <div id="studentsList">
            <!-- รายชื่อนักศึกษาจะแสดงที่นี่ -->
        </div>
    </div>

    <script>
        // Array สำหรับเก็บข้อมูลนักศึกษาทั้งหมด
        let students = [];
        let nextId = 1;

        // Object สำหรับเก็บการตั้งค่าระบบ
        const systemConfig = {
            maxStudents: 100,
            minGPA: 0,
            maxGPA: 4,
            gradeScale: {
                A: { min: 3.5, max: 4.0, status: "เก่งมาก", color: "#4CAF50" },
                B: { min: 3.0, max: 3.49, status: "ดี", color: "#2196F3" },
                C: { min: 2.5, max: 2.99, status: "ปานกลาง", color: "#FF9800" },
                D: { min: 2.0, max: 2.49, status: "อ่อน", color: "#FF5722" },
                F: { min: 0, max: 1.99, status: "ตก", color: "#f44336" }
            }
        };

        // Function สำหรับสร้าง Student Object
        function createStudent(name, age, major, gpa) {
            return {
                id: nextId++,
                name: name,
                age: parseInt(age),
                major: major,
                gpa: parseFloat(gpa),
                registeredDate: new Date().toLocaleDateString('th-TH'),
                getGradeInfo: function() {
                    for (let grade in systemConfig.gradeScale) {
                        let scale = systemConfig.gradeScale[grade];
                        if (this.gpa >= scale.min && this.gpa <= scale.max) {
                            return {
                                grade: grade,
                                status: scale.status,
                                color: scale.color
                            };
                        }
                    }
                    return { grade: "N/A", status: "ไม่ระบุ", color: "#666" };
                },
                getDisplayInfo: function() {
                    return `${this.name} (อายุ ${this.age} ปี) - ${this.major} - GPA ${this.gpa}`;
                }
            };
        }

        // Function สำหรับเพิ่มนักศึกษา
        function addStudent(name, age, major, gpa) {
            // ตรวจสอบข้อมูล
            if (!name || !age || !major || !gpa) {
                alert("กรุณากรอกข้อมูลให้ครบถ้วน");
                return false;
            }

            if (students.length >= systemConfig.maxStudents) {
                alert(`ไม่สามารถเพิ่มนักศึกษาได้ เกินจำนวนสูงสุด ${systemConfig.maxStudents} คน`);
                return false;
            }

            // ตรวจสอบชื่อซ้ำ
            if (students.some(student => student.name.toLowerCase() === name.toLowerCase())) {
                alert("มีนักศึกษาชื่อนี้อยู่แล้ว");
                return false;
            }

            // สร้างและเพิ่มนักศึกษาใหม่
            let newStudent = createStudent(name, age, major, gpa);
            students.push(newStudent);
            
            console.log("เพิ่มนักศึกษาใหม่:", newStudent);
            return true;
        }

        // Function สำหรับลบนักศึกษา
        function removeStudent(id) {
            if (confirm("คุณแน่ใจหรือไม่ที่จะลบนักศึกษาคนนี้?")) {
                let index = students.findIndex(student => student.id === id);
                if (index !== -1) {
                    let removed = students.splice(index, 1)[0];
                    console.log("ลบนักศึกษา:", removed.name);
                    updateDisplay();
                }
            }
        }

        // Function สำหรับคำนวณสถิติ
        function calculateStatistics() {
            if (students.length === 0) {
                return {
                    total: 0,
                    averageAge: 0,
                    averageGPA: 0,
                    topGPA: 0,
                    majorCount: {},
                    gradeDistribution: {}
                };
            }

            let totalAge = students.reduce((sum, student) => sum + student.age, 0);
            let totalGPA = students.reduce((sum, student) => sum + student.gpa, 0);
            let topGPA = Math.max(...students.map(student => student.gpa));

            // นับจำนวนตามสาขา
            let majorCount = {};
            students.forEach(student => {
                majorCount[student.major] = (majorCount[student.major] || 0) + 1;
            });

            // นับจำนวนตามเกรด
            let gradeDistribution = {};
            students.forEach(student => {
                let gradeInfo = student.getGradeInfo();
                gradeDistribution[gradeInfo.grade] = (gradeDistribution[gradeInfo.grade] || 0) + 1;
            });

            return {
                total: students.length,
                averageAge: (totalAge / students.length).toFixed(1),
                averageGPA: (totalGPA / students.length).toFixed(2),
                topGPA: topGPA,
                majorCount: majorCount,
                gradeDistribution: gradeDistribution
            };
        }

        // Function สำหรับแสดงสถิติ
        function displayStatistics() {
            let stats = calculateStatistics();
            let container = document.getElementById('statsContainer');
            
            let html = `
                <div class="stat-card">
                    <div class="stat-number">${stats.total}</div>
                    <div>นักศึกษาทั้งหมด</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.averageAge}</div>
                    <div>อายุเฉลี่ย (ปี)</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.averageGPA}</div>
                    <div>GPA เฉลี่ย</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.topGPA}</div>
                    <div>GPA สูงสุด</div>
                </div>
            `;
            
            container.innerHTML = html;
        }

        // Function สำหรับแสดงรายชื่อนักศึกษา
        function displayStudents(studentsToShow = students) {
            let container = document.getElementById('studentsList');
            
            if (studentsToShow.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: #666;">ไม่มีข้อมูลนักศึกษา</p>';
                return;
            }

            let html = '';
            studentsToShow.forEach(student => {
                let gradeInfo = student.getGradeInfo();
                html += `
                    <div class="student-card" style="border-left-color: ${gradeInfo.color};">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 style="margin: 0; color: #333;">${student.name}</h4>
                                <p style="margin: 5px 0; color: #666;">
                                    อายุ ${student.age} ปี | ${student.major} | 
                                    GPA ${student.gpa} (<span style="color: ${gradeInfo.color};">${gradeInfo.status}</span>)
                                </p>
                                <small style="color: #999;">ลงทะเบียน: ${student.registeredDate}</small>
                            </div>
                            <button class="btn btn-danger" onclick="removeStudent(${student.id})">ลบ</button>
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        }

        // Function สำหรับอัพเดทการแสดงผล
        function updateDisplay() {
            displayStatistics();
            displayStudents();
        }

        // Event Handlers
        document.getElementById('studentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            let name = document.getElementById('studentName').value;
            let age = document.getElementById('studentAge').value;
            let major = document.getElementById('studentMajor').value;
            let gpa = document.getElementById('studentGPA').value;
            
            if (addStudent(name, age, major, gpa)) {
                this.reset(); // เคลียร์ form
                updateDisplay();
                alert("เพิ่มนักศึกษาเรียบร้อยแล้ว!");
            }
        });

        // Function สำหรับค้นหาและกรองข้อมูล
        function searchAndFilter() {
            let nameQuery = document.getElementById('searchName').value.toLowerCase();
            let majorFilter = document.getElementById('filterMajor').value;
            let sortBy = document.getElementById('sortBy').value;
            
            let filtered = students.filter(student => {
                let nameMatch = student.name.toLowerCase().includes(nameQuery);
                let majorMatch = !majorFilter || student.major === majorFilter;
                return nameMatch && majorMatch;
            });
            
            // เรียงลำดับ
            filtered.sort((a, b) => {
                switch (sortBy) {
                    case 'age':
                        return a.age - b.age;
                    case 'gpa':
                        return b.gpa - a.gpa; // เรียงจากมากไปน้อย
                    default:
                        return a.name.localeCompare(b.name, 'th');
                }
            });
            
            displayStudents(filtered);
            console.log(`ค้นหาผล: ${filtered.length} คน จาก ${students.length} คน`);
        }

        // Function สำหรับแสดงนักศึกษาเก่ง
        function showTopStudents() {
            let topStudents = students
                .filter(student => student.gpa >= 3.5)
                .sort((a, b) => b.gpa - a.gpa);
                
            displayStudents(topStudents);
            console.log(`นักศึกษาเก่ง (GPA ≥ 3.5): ${topStudents.length} คน`);
        }

        // Function สำหรับสร้างข้อมูลตัวอย่าง
        function generateSampleData() {
            if (confirm("จะสร้างข้อมูลตัวอย่าง 10 คน หรือไม่?")) {
                let sampleStudents = [
                    ["นายสมชาย ใจดี", 20, "วิศวกรรมคอมพิวเตอร์", 3.75],
                    ["นางสาวสมหญิง รักเรียน", 19, "วิศวกรรมไฟฟ้า", 3.85],
                    ["นายสมศักดิ์ มั่นคง", 21, "วิศวกรรมโยธา", 3.25],
                    ["นางสาวสมใจ เก่งงาม", 20, "วิศวกรรมเครื่องกล", 3.95],
                    ["นายวิภา ชาญฉลาด", 22, "วิศวกรรมอุตสาหการ", 3.15],
                    ["นางสาวนิพนธ์ เรียนดี", 19, "วิศวกรรมคอมพิวเตอร์", 3.65],
                    ["นายกิตติ สุขสม", 21, "วิศวกรรมไฟฟ้า", 2.85],
                    ["นางสาวมาลี รักษ์สุข", 20, "วิศวกรรมโยธา", 3.45],
                    ["นายพิชัย ฝันดี", 22, "วิศวกรรมเครื่องกล", 2.95],
                    ["นางสาวสุดา เก่งมาก", 19, "วิศวกรรมอุตสาหการ", 4.00]
                ];
                
                sampleStudents.forEach(studentData => {
                    if (students.length < systemConfig.maxStudents) {
                        addStudent(...studentData);
                    }
                });
                
                updateDisplay();
                alert("สร้างข้อมูลตัวอย่างเรียบร้อยแล้ว!");
            }
        }

        // Function สำหรับลบข้อมูลทั้งหมด
        function clearAllData() {
            if (confirm("คุณแน่ใจหรือไม่ที่จะลบข้อมูลทั้งหมด?")) {
                students = [];
                nextId = 1;
                updateDisplay();
                
                // เคลียร์ฟิลเตอร์
                document.getElementById('searchName').value = '';
                document.getElementById('filterMajor').value = '';
                document.getElementById('sortBy').value = 'name';
                
                alert("ลบข้อมูลทั้งหมดเรียบร้อยแล้ว!");
            }
        }

        // เริ่มต้นระบบ
        updateDisplay();
        
        // แสดงข้อมูลใน Console
        console.log("=== ระบบจัดการนักศึกษา ===");
        console.log("ระบบพร้อมใช้งาน!");
        console.log("การตั้งค่า:", systemConfig);
        console.log("ลองใช้คำสั่ง: generateSampleData() เพื่อสร้างข้อมูลตัวอย่าง");
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. ทดสอบการเพิ่ม/ลบนักศึกษา
2. ทดลองค้นหาและกรองข้อมูล
3. ดูสถิติต่างๆ ที่คำนวณได้
4. ลองสร้างข้อมูลตัวอย่างและทดสอบฟีเจอร์ต่างๆ
5. ศึกษาโค้ดและเข้าใจการทำงานของแต่ละ Function

**💡 สิ่งที่เรียนรู้จากโปรเจคนี้:**
- การใช้ Arrays และ Objects ร่วมกัน
- Function ซับซ้อนที่เรียก Function อื่น
- การจัดการ Event ของ Form
- การคำนวณสถิติด้วย Loop และ Array Methods
- การกรองและเรียงข้อมูล

---

## 🎉 **สรุปการเรียน JavaScript พื้นฐาน**

### **🏆 ความสำเร็จที่ได้รับ:**

✅ **Variables & Data Types** - ประกาศและใช้ตัวแปรได้ถูกต้อง  
✅ **Functions** - สร้างและเรียกใช้ฟังก์ชันได้  
✅ **Arrays** - จัดการข้อมูลหลายค่าได้  
✅ **Objects** - จัดการข้อมูลซับซ้อนได้  
✅ **Control Structures** - ใช้ if-else และ loops ได้  
✅ **Integration** - รวมทุกอย่างเป็นโปรเจคได้  

### **🚀 ขั้นตอนต่อไป:**

**LAB ต่อไป:** DOM Manipulation - การเปลี่ยนแปลงหน้าเว็บด้วย JavaScript  

**หัวข้อที่จะเรียน:**
- การเลือก HTML Elements
- การเปลี่ยนแปลงเนื้อหาและสไตล์
- Event Handling
- การสร้าง Interactive Web Applications

### **💡 เคล็ดลับสำหรับการพัฒนาต่อ:**

1. **ฝึกหัด** - ลองเขียนโค้ดเองทุกวัน
2. **Debug** - เรียนรู้การใช้ Console และ Developer Tools
3. **อ่านโค้ด** - ดูโค้ดคนอื่นและทำความเข้าใจ
4. **สร้างโปรเจค** - ทำโปรเจคเล็กๆ ของตัวเอง

### **📚 แหล่งเรียนรู้เพิ่มเติม:**

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - เอกสารอ้างอิงที่สมบูรณ์ที่สุด
- [JavaScript.info](https://javascript.info/) - บทเรียนที่เข้าใจง่าย
- [FreeCodeCamp](https://www.freecodecamp.org/) - โค้ดฟรีพร้อมใบประกาศนียบัตร

**หวังว่าบทเรียนนี้จะเป็นประโยชน์และสนุกกับการเรียน JavaScript! 🎓**

---

## 📝 **การบ้าน (Optional)**

ลองปรับปรุงระบบจัดการนักศึกษาโดยเพิ่มฟีเจอร์:
1. **การบันทึกข้อมูล** - ใช้ localStorage เพื่อเก็บข้อมูลถาวร
2. **การ Export** - ส่งออกข้อมูลเป็น CSV หรือ JSON
3. **การ Import** - นำเข้าข้อมูลจากไฟล์
4. **กราฟและชาร์ต** - แสดงสถิติแบบกราฟ
5. **ระบบประเมินผล** - คำนวณผลการเรียนและจัดอันดับ

**เป้าหมาย:** นำความรู้ทั้งหมดมาประยุกต์ใช้งานจริง! 💪