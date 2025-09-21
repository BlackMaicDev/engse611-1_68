# DOM Manipulation
## ENGSE611 - การพัฒนาเว็บด้วยเทคโนโลยีสมัยใหม่
### วันที่ 2 - หัวข้อที่ 2: DOM Manipulation (3 ชั่วโมง)

---

## 🎯 **จุดประสงค์การเรียน**

หลังจากเรียนจบหัวข้อนี้ นักศึกษาจะสามารถ:
- เข้าใจ DOM (Document Object Model) และการทำงาน
- เลือก HTML Elements ด้วย JavaScript ได้
- เปลี่ยนแปลงเนื้อหา สี และรูปแบบของหน้าเว็บได้
- สร้าง/ลบ Elements ใหม่ได้
- ทำเว็บไซต์ที่โต้ตอบกับผู้ใช้ได้

---

## 📚 **ทฤษฎี: DOM คืออะไร?**

**DOM = Document Object Model**
- HTML → แปลงเป็น → Object Tree ที่ JavaScript เข้าถึงได้
- ทุก HTML Tag กลายเป็น Element ที่ควบคุมได้
- เปลี่ยน HTML แบบ Real-time ได้

```
HTML:  <div><p>สวัสดี</p></div>
DOM:   document → html → body → div → p → "สวัสดี"
```

---

## 📚 **LAB 1: การเลือก Elements**

### **💻 Exercise 1.1: Selectors พื้นฐาน**

**สร้างไฟล์:** `dom-lab1.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 1: DOM Selectors</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .highlight { background: yellow; padding: 10px; }
        .box { border: 2px solid #333; padding: 15px; margin: 10px 0; }
        #special { color: red; font-weight: bold; }
        .demo-btn { background: #4CAF50; color: white; padding: 10px 20px; 
                   border: none; border-radius: 5px; margin: 5px; cursor: pointer; }
        .demo-btn:hover { background: #45a049; }
    </style>
</head>
<body>
    <h1>🎯 LAB 1: DOM Selectors</h1>
    
    <!-- Elements สำหรับทดสอบ -->
    <div class="box">
        <h2 id="special">หัวข้อพิเศษ</h2>
        <p class="highlight">ย่อหน้าที่ 1 - มี class highlight</p>
        <p>ย่อหน้าที่ 2 - ธรรมดา</p>
        <p class="highlight">ย่อหน้าที่ 3 - มี class highlight</p>
    </div>

    <div class="box">
        <ul id="fruits">
            <li>แอปเปิ้ล</li>
            <li>กล้วย</li>
            <li>ส้ม</li>
        </ul>
    </div>

    <!-- ปุ่มทดสอบ -->
    <div>
        <button class="demo-btn" onclick="testById()">เลือกด้วย ID</button>
        <button class="demo-btn" onclick="testByClass()">เลือกด้วย Class</button>
        <button class="demo-btn" onclick="testByTag()">เลือกด้วย Tag</button>
        <button class="demo-btn" onclick="testQuerySelector()">querySelector</button>
        <button class="demo-btn" onclick="showAllMethods()">แสดงทุกวิธี</button>
    </div>

    <div id="result" style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 5px;">
        <strong>ผลลัพธ์จะแสดงที่นี่</strong>
    </div>

    <script>
        // 1. getElementById - เลือกด้วย ID (เลือกได้ 1 ตัว)
        function testById() {
            let element = document.getElementById('special');
            
            document.getElementById('result').innerHTML = `
                <h3>getElementById('special'):</h3>
                <p><strong>Element:</strong> ${element.tagName}</p>
                <p><strong>เนื้อหา:</strong> "${element.textContent}"</p>
                <p><strong>ID:</strong> ${element.id}</p>
                <p><strong>Class:</strong> ${element.className || 'ไม่มี'}</p>
            `;
            
            // เปลี่ยนสีชั่วคราว
            element.style.background = 'lightblue';
            setTimeout(() => { element.style.background = ''; }, 2000);
            
            console.log('getElementById:', element);
        }

        // 2. getElementsByClassName - เลือกด้วย Class (เลือกได้หลายตัว)
        function testByClass() {
            let elements = document.getElementsByClassName('highlight');
            
            let result = `
                <h3>getElementsByClassName('highlight'):</h3>
                <p><strong>จำนวน Elements:</strong> ${elements.length} ตัว</p>
                <p><strong>รายการ:</strong></p>
                <ul>
            `;
            
            // วนลูปแสดงทุก element
            for (let i = 0; i < elements.length; i++) {
                result += `<li>Element ${i}: "${elements[i].textContent}"</li>`;
                
                // เปลี่ยนสีทีละตัว
                elements[i].style.background = 'lightgreen';
                setTimeout((el) => { el.style.background = 'yellow'; }, 2000, elements[i]);
            }
            
            result += '</ul>';
            document.getElementById('result').innerHTML = result;
            
            console.log('getElementsByClassName:', elements);
        }

        // 3. getElementsByTagName - เลือกด้วย Tag (เลือกได้หลายตัว)
        function testByTag() {
            let paragraphs = document.getElementsByTagName('p');
            let listItems = document.getElementsByTagName('li');
            
            document.getElementById('result').innerHTML = `
                <h3>getElementsByTagName:</h3>
                <p><strong>Paragraphs (p):</strong> ${paragraphs.length} ตัว</p>
                <p><strong>List Items (li):</strong> ${listItems.length} ตัว</p>
                <h4>เนื้อหา Paragraphs:</h4>
                <ol>
                    ${Array.from(paragraphs).map(p => `<li>"${p.textContent}"</li>`).join('')}
                </ol>
                <h4>เนื้อหา List Items:</h4>
                <ol>
                    ${Array.from(listItems).map(li => `<li>"${li.textContent}"</li>`).join('')}
                </ol>
            `;
            
            // เปลี่ยนสี paragraphs
            Array.from(paragraphs).forEach((p, index) => {
                setTimeout(() => {
                    p.style.background = 'lightcoral';
                    setTimeout(() => { p.style.background = ''; }, 1000);
                }, index * 500);
            });
            
            console.log('Paragraphs:', paragraphs);
            console.log('List Items:', listItems);
        }

        // 4. querySelector & querySelectorAll - เลือกด้วย CSS Selector (ทันสมัย)
        function testQuerySelector() {
            // querySelector - เลือกตัวแรกที่เจอ
            let firstHighlight = document.querySelector('.highlight');
            
            // querySelectorAll - เลือกทุกตัว
            let allHighlights = document.querySelectorAll('.highlight');
            let boxParagraphs = document.querySelectorAll('.box p');
            
            document.getElementById('result').innerHTML = `
                <h3>querySelector & querySelectorAll:</h3>
                <p><strong>querySelector('.highlight'):</strong> "${firstHighlight.textContent}"</p>
                <p><strong>querySelectorAll('.highlight'):</strong> ${allHighlights.length} ตัว</p>
                <p><strong>querySelectorAll('.box p'):</strong> ${boxParagraphs.length} ตัว</p>
                
                <h4>CSS Selectors ที่ใช้ได้:</h4>
                <ul>
                    <li><code>.class</code> - เลือกด้วย class</li>
                    <li><code>#id</code> - เลือกด้วย id</li>
                    <li><code>tag</code> - เลือกด้วย tag name</li>
                    <li><code>.class p</code> - เลือก p ที่อยู่ใน .class</li>
                    <li><code>p:first-child</code> - เลือก p ลูกคนแรก</li>
                </ul>
            `;
            
            // เปลี่ยนสีด้วย forEach
            allHighlights.forEach((el, index) => {
                setTimeout(() => {
                    el.style.background = 'orange';
                    setTimeout(() => { el.style.background = 'yellow'; }, 1000);
                }, index * 300);
            });
            
            console.log('querySelector:', firstHighlight);
            console.log('querySelectorAll:', allHighlights);
        }

        // แสดงสรุปทุกวิธี
        function showAllMethods() {
            document.getElementById('result').innerHTML = `
                <h3>🎯 สรุป DOM Selection Methods:</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f0f0f0;">
                        <th style="border: 1px solid #ddd; padding: 10px;">Method</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">การใช้งาน</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">ผลลัพธ์</th>
                        <th style="border: 1px solid #ddd; padding: 10px;">แนะนำ</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><code>getElementById()</code></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">เลือกด้วย ID</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">1 Element</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><code>getElementsByClassName()</code></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">เลือกด้วย Class</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">HTMLCollection</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">⭐⭐</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><code>getElementsByTagName()</code></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">เลือกด้วย Tag</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">HTMLCollection</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">⭐</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><code>querySelector()</code></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">CSS Selector (ตัวแรก)</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">1 Element</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><code>querySelectorAll()</code></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">CSS Selector (ทุกตัว)</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">NodeList</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">⭐⭐⭐⭐⭐</td>
                    </tr>
                </table>
                
                <div style="margin-top: 15px; padding: 10px; background: #e8f5e8; border-radius: 5px;">
                    <strong>💡 แนะนำ:</strong> ใช้ <code>querySelector()</code> และ <code>querySelectorAll()</code> 
                    เพราะยืดหยุ่นที่สุดและใช้ CSS Selector ได้
                </div>
            `;
            
            console.log('=== DOM Selection Summary ===');
            console.log('1. getElementById - เลือก 1 ตัวด้วย ID');
            console.log('2. getElementsByClassName - เลือกหลายตัวด้วย Class');
            console.log('3. getElementsByTagName - เลือกหลายตัวด้วย Tag');
            console.log('4. querySelector - เลือก 1 ตัวด้วย CSS Selector');
            console.log('5. querySelectorAll - เลือกหลายตัวด้วย CSS Selector');
        }

        // ทดสอบเบื้องต้น
        console.log('=== DOM LAB 1 เริ่มต้น ===');
        console.log('Document:', document);
        console.log('Body:', document.body);
        console.log('Title:', document.title);
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. ทดสอบปุ่มทีละตัวและสังเกตผลลัพธ์
2. เปิด Console ดู log messages
3. สังเกตการเปลี่ยนสีของ elements
4. ทำความเข้าใจความแตกต่างของแต่ละ method

---

## 📚 **LAB 2: การเปลี่ยนแปลงเนื้อหา**

### **💻 Exercise 2.1: เปลี่ยนข้อความและ HTML**

**สร้างไฟล์:** `dom-lab2.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 2: เปลี่ยนแปลงเนื้อหา</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo-section { background: #f9f9f9; padding: 20px; margin: 15px 0; border-radius: 8px; }
        .demo-btn { background: #2196F3; color: white; padding: 8px 15px; 
                   border: none; border-radius: 4px; margin: 3px; cursor: pointer; }
        .demo-btn:hover { background: #1976D2; }
        .input-group { margin: 10px 0; }
        .input-group input { padding: 8px; margin: 5px; border: 1px solid #ddd; border-radius: 4px; }
        #dynamic-content { border: 2px dashed #666; padding: 15px; min-height: 100px; }
    </style>
</head>
<body>
    <h1>🎯 LAB 2: เปลี่ยนแปลงเนื้อหา DOM</h1>

    <!-- Section 1: textContent vs innerHTML -->
    <div class="demo-section">
        <h3>📝 textContent vs innerHTML</h3>
        <div id="content-demo">เนื้อหาเริ่มต้น</div>
        <br>
        <button class="demo-btn" onclick="changeTextContent()">textContent</button>
        <button class="demo-btn" onclick="changeInnerHTML()">innerHTML</button>
        <button class="demo-btn" onclick="showDifference()">ดูความแตกต่าง</button>
        <button class="demo-btn" onclick="resetContent()">รีเซ็ต</button>
    </div>

    <!-- Section 2: การเปลี่ยนแปลงแบบ Interactive -->
    <div class="demo-section">
        <h3>🎮 การเปลี่ยนแปลงแบบ Interactive</h3>
        <div class="input-group">
            <input type="text" id="nameInput" placeholder="ใส่ชื่อของคุณ" value="สมชาย">
            <input type="number" id="ageInput" placeholder="อายุ" value="20" min="1" max="100">
            <input type="text" id="hobbyInput" placeholder="งานอดิเรก" value="อ่านหนังสือ">
        </div>
        <button class="demo-btn" onclick="updateProfile()">อัพเดทโปรไฟล์</button>
        <button class="demo-btn" onclick="generateCard()">สร้างการ์ด</button>
        
        <div id="profile-display" style="margin-top: 15px; padding: 15px; background: white; border-radius: 8px;">
            โปรไฟล์จะแสดงที่นี่
        </div>
    </div>

    <!-- Section 3: Dynamic Content Creation -->
    <div class="demo-section">
        <h3>🏗️ สร้างเนื้อหาแบบ Dynamic</h3>
        <div class="input-group">
            <select id="contentType">
                <option value="list">รายการ (List)</option>
                <option value="table">ตาราง (Table)</option>
                <option value="cards">การ์ด (Cards)</option>
                <option value="form">ฟอร์ม (Form)</option>
            </select>
            <input type="number" id="itemCount" placeholder="จำนวน" value="3" min="1" max="10">
            <button class="demo-btn" onclick="generateContent()">สร้างเนื้อหา</button>
            <button class="demo-btn" onclick="clearContent()">ล้างเนื้อหา</button>
        </div>
        
        <div id="dynamic-content">
            เนื้อหาที่สร้างจะแสดงที่นี่
        </div>
    </div>

    <script>
        // LAB 2.1: textContent vs innerHTML
        function changeTextContent() {
            let element = document.getElementById('content-demo');
            element.textContent = 'ข้อความที่เปลี่ยนด้วย textContent - <strong>HTML จะไม่ทำงาน</strong>';
            
            console.log('textContent:', element.textContent);
        }

        function changeInnerHTML() {
            let element = document.getElementById('content-demo');
            element.innerHTML = 'ข้อความที่เปลี่ยนด้วย innerHTML - <strong>HTML จะทำงาน</strong>';
            
            console.log('innerHTML:', element.innerHTML);
        }

        function showDifference() {
            let element = document.getElementById('content-demo');
            element.innerHTML = `
                <div style="background: #ffffcc; padding: 10px; border-radius: 5px;">
                    <h4>ความแตกต่าง:</h4>
                    <ul>
                        <li><strong>textContent:</strong> ใส่ข้อความล้วนๆ (HTML จะแสดงเป็นข้อความ)</li>
                        <li><strong>innerHTML:</strong> ใส่ HTML ได้ (HTML จะทำงาน)</li>
                        <li><strong>ความปลอดภัย:</strong> textContent ปลอดภัยกว่า (ป้องกัน XSS)</li>
                    </ul>
                    <p style="color: red;">⚠️ ระวัง: innerHTML อาจเสี่ยงต่อ XSS attacks</p>
                </div>
            `;
        }

        function resetContent() {
            document.getElementById('content-demo').textContent = 'เนื้อหาเริ่มต้น';
        }

        // LAB 2.2: Interactive Profile Update
        function updateProfile() {
            let name = document.getElementById('nameInput').value;
            let age = document.getElementById('ageInput').value;
            let hobby = document.getElementById('hobbyInput').value;
            
            let profileDiv = document.getElementById('profile-display');
            
            // ใช้ textContent สำหรับความปลอดภัย
            profileDiv.innerHTML = `
                <h4>โปรไฟล์ของคุณ:</h4>
                <p><strong>ชื่อ:</strong> ${name}</p>
                <p><strong>อายุ:</strong> ${age} ปี</p>
                <p><strong>งานอดิเรก:</strong> ${hobby}</p>
                <p><strong>อัพเดทเมื่อ:</strong> ${new Date().toLocaleString('th-TH')}</p>
            `;
            
            console.log('Profile updated:', { name, age, hobby });
        }

        function generateCard() {
            let name = document.getElementById('nameInput').value;
            let age = document.getElementById('ageInput').value;
            let hobby = document.getElementById('hobbyInput').value;
            
            let profileDiv = document.getElementById('profile-display');
            
            profileDiv.innerHTML = `
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                           color: white; padding: 20px; border-radius: 15px; text-align: center;">
                    <h3 style="margin: 0;">🎓 ${name}</h3>
                    <p style="margin: 10px 0;">อายุ ${age} ปี</p>
                    <p style="margin: 10px 0;">💡 ${hobby}</p>
                    <div style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 8px; margin-top: 15px;">
                        <small>บัตรประจำตัวนักศึกษา</small><br>
                        <small>เลขที่: ${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</small>
                    </div>
                </div>
            `;
        }

        // LAB 2.3: Dynamic Content Generation
        function generateContent() {
            let type = document.getElementById('contentType').value;
            let count = parseInt(document.getElementById('itemCount').value);
            let container = document.getElementById('dynamic-content');
            
            let html = '';
            
            switch (type) {
                case 'list':
                    html = '<h4>📋 รายการสิ่งของ:</h4><ul>';
                    for (let i = 1; i <= count; i++) {
                        html += `<li>รายการที่ ${i} - สิ่งของชิ้นที่ ${i}</li>`;
                    }
                    html += '</ul>';
                    break;
                    
                case 'table':
                    html = '<h4>📊 ตารางข้อมูล:</h4>';
                    html += '<table style="width: 100%; border-collapse: collapse;">';
                    html += '<tr style="background: #f0f0f0;"><th style="border: 1px solid #ddd; padding: 8px;">ลำดับ</th><th style="border: 1px solid #ddd; padding: 8px;">ชื่อ</th><th style="border: 1px solid #ddd; padding: 8px;">คะแนน</th></tr>';
                    for (let i = 1; i <= count; i++) {
                        let score = Math.floor(Math.random() * 40) + 60;
                        html += `<tr><td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${i}</td>`;
                        html += `<td style="border: 1px solid #ddd; padding: 8px;">นักศึกษา ${i}</td>`;
                        html += `<td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${score}</td></tr>`;
                    }
                    html += '</table>';
                    break;
                    
                case 'cards':
                    html = '<h4>🎴 การ์ดนักศึกษา:</h4>';
                    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">';
                    for (let i = 1; i <= count; i++) {
                        let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
                        let color = colors[i % colors.length];
                        html += `
                            <div style="background: ${color}; color: white; padding: 15px; border-radius: 10px; text-align: center;">
                                <h4 style="margin: 0;">นักศึกษา ${i}</h4>
                                <p style="margin: 5px 0;">รหัส: 650${i.toString().padStart(3, '0')}</p>
                                <p style="margin: 5px 0;">GPA: ${(Math.random() * 2 + 2).toFixed(2)}</p>
                            </div>
                        `;
                    }
                    html += '</div>';
                    break;
                    
                case 'form':
                    html = '<h4>📝 ฟอร์มแบบ Dynamic:</h4>';
                    html += '<div style="background: white; padding: 15px; border-radius: 8px;">';
                    for (let i = 1; i <= count; i++) {
                        html += `
                            <div style="margin: 10px 0;">
                                <label style="display: block; margin-bottom: 5px;">ฟิลด์ ${i}:</label>
                                <input type="text" placeholder="ใส่ข้อมูลฟิลด์ ${i}" 
                                       style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                            </div>
                        `;
                    }
                    html += '<button style="background: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; margin-top: 10px;">ส่งข้อมูล</button>';
                    html += '</div>';
                    break;
            }
            
            container.innerHTML = html;
            
            console.log(`Generated ${type} with ${count} items`);
        }

        function clearContent() {
            document.getElementById('dynamic-content').innerHTML = 'เนื้อหาที่สร้างจะแสดงที่นี่';
            console.log('Content cleared');
        }

        // เริ่มต้น
        console.log('=== DOM LAB 2 เริ่มต้น ===');
        console.log('💡 ทดลองเปลี่ยนแปลงเนื้อหาด้วยวิธีต่างๆ');
        
        // แสดงตัวอย่างเริ่มต้น
        updateProfile();
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. ทดสอบความแตกต่าง textContent vs innerHTML
2. เปลี่ยนข้อมูลในฟอร์มและดูการอัพเดท
3. สร้างเนื้อหาแบบ Dynamic ทุกประเภท
4. สังเกตการใช้ Template Strings (`${}`)

---

## 📚 **LAB 3: การเปลี่ยนแปลง Style และ Attributes**

### **💻 Exercise 3.1: CSS Styling และ Attributes**

**สร้างไฟล์:** `dom-lab3.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 3: Style และ Attributes</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo-section { background: #f5f5f5; padding: 20px; margin: 15px 0; border-radius: 8px; }
        .demo-btn { background: #FF9800; color: white; padding: 8px 15px; 
                   border: none; border-radius: 4px; margin: 3px; cursor: pointer; }
        .demo-btn:hover { background: #F57C00; }
        .style-demo { background: white; border: 2px solid #ddd; padding: 20px; 
                     margin: 10px 0; border-radius: 8px; text-align: center; }
        .control-panel { background: white; padding: 15px; border-radius: 8px; margin: 10px 0; }
        .slider { width: 100%; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>🎯 LAB 3: Style และ Attributes</h1>

    <!-- Section 1: Style Properties -->
    <div class="demo-section">
        <h3>🎨 การเปลี่ยน CSS Properties</h3>
        <div id="style-target" class="style-demo">
            <h4>ข้อความทดสอบ</h4>
            <p>กล่องนี้จะเปลี่ยนสไตล์ตามปุ่มที่กด</p>
        </div>
        
        <div class="control-panel">
            <button class="demo-btn" onclick="changeColors()">เปลี่ยนสี</button>
            <button class="demo-btn" onclick="changeSize()">เปลี่ยนขนาด</button>
            <button class="demo-btn" onclick="changeBorder()">เปลี่ยนขอบ</button>
            <button class="demo-btn" onclick="animateBox()">Animation</button>
            <button class="demo-btn" onclick="resetStyles()">รีเซ็ต</button>
        </div>

        <div class="control-panel">
            <h4>🎛️ ควบคุมแบบ Interactive:</h4>
            <label>สี Background: <input type="color" id="bgColor" value="#ffffff" onchange="updateBackground()"></label><br>
            <label>สี Text: <input type="color" id="textColor" value="#000000" onchange="updateTextColor()"></label><br>
            <label>ขนาดตัวอักษร: <input type="range" id="fontSize" min="12" max="48" value="16" class="slider" onchange="updateFontSize()"> 
                   <span id="fontSizeValue">16px</span></label><br>
            <label>ความโปร่งใส: <input type="range" id="opacity" min="0" max="100" value="100" class="slider" onchange="updateOpacity()"> 
                   <span id="opacityValue">100%</span></label>
        </div>
    </div>

    <!-- Section 2: Attributes -->
    <div class="demo-section">
        <h3>🏷️ การจัดการ Attributes</h3>
        <div class="control-panel">
            <img id="demo-image" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150'%3E%3Crect width='200' height='150' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em'%3EDemo Image%3C/text%3E%3C/svg%3E" 
                 alt="รูปภาพตัวอย่าง" style="border: 2px solid #ddd; border-radius: 8px; display: block; margin: 10px auto;">
            
            <div style="text-align: center; margin: 15px 0;">
                <button class="demo-btn" onclick="changeImageSize()">เปลี่ยนขนาดรูป</button>
                <button class="demo-btn" onclick="changeImageSrc()">เปลี่ยนรูป</button>
                <button class="demo-btn" onclick="toggleImageBorder()">เปิด/ปิด ขอบ</button>
                <button class="demo-btn" onclick="showImageInfo()">แสดงข้อมูลรูป</button>
            </div>
        </div>

        <div class="control-panel">
            <h4>📋 Input Attributes:</h4>
            <input type="text" id="demo-input" placeholder="ทดสอบ input" style="padding: 8px; margin: 5px; border: 1px solid #ddd; border-radius: 4px;">
            <br>
            <button class="demo-btn" onclick="disableInput()">Disable</button>
            <button class="demo-btn" onclick="enableInput()">Enable</button>
            <button class="demo-btn" onclick="changeInputType()">เปลี่ยนประเภท</button>
            <button class="demo-btn" onclick="addInputValidation()">เพิ่ม Validation</button>
        </div>

        <div id="attribute-info" style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
            ข้อมูล Attributes จะแสดงที่นี่
        </div>
    </div>

    <!-- Section 3: Classes -->
    <div class="demo-section">
        <h3>📚 การจัดการ CSS Classes</h3>
        <div id="class-target" style="background: white; padding: 20px; margin: 10px 0; border-radius: 8px; text-align: center; transition: all 0.3s ease;">
            <h4>ทดสอบ CSS Classes</h4>
            <p>กล่องนี้จะเปลี่ยน Class ตามปุ่มที่กด</p>
        </div>

        <div class="control-panel">
            <button class="demo-btn" onclick="addClass()">เพิ่ม Class</button>
            <button class="demo-btn" onclick="removeClass()">ลบ Class</button>
            <button class="demo-btn" onclick="toggleClass()">Toggle Class</button>
            <button class="demo-btn" onclick="replaceClass()">เปลี่ยน Class</button>
            <button class="demo-btn" onclick="showClasses()">แสดง Classes</button>
        </div>
    </div>

    <script>
        // LAB 3.1: Style Properties
        function changeColors() {
            let target = document.getElementById('style-target');
            let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            target.style.backgroundColor = randomColor;
            target.style.color = 'white';
            target.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';
            
            console.log('เปลี่ยนสีเป็น:', randomColor);
        }

        function changeSize() {
            let target = document.getElementById('style-target');
            let sizes = ['150%', '120%', '80%', '200%'];
            let randomSize = sizes[Math.floor(Math.random() * sizes.length)];
            
            target.style.transform = `scale(${randomSize.replace('%', '') / 100})`;
            target.style.transition = 'transform 0.3s ease';
            
            console.log('เปลี่ยนขนาดเป็น:', randomSize);
        }

        function changeBorder() {
            let target = document.getElementById('style-target');
            let borders = [
                '5px solid #ff0000',
                '3px dashed #00ff00',
                '8px dotted #0000ff',
                '10px double #ff00ff',
                '5px ridge #ffff00'
            ];
            let randomBorder = borders[Math.floor(Math.random() * borders.length)];
            
            target.style.border = randomBorder;
            target.style.borderRadius = Math.floor(Math.random() * 30) + 'px';
            
            console.log('เปลี่ยนขอบเป็น:', randomBorder);
        }

        function animateBox() {
            let target = document.getElementById('style-target');
            
            // Animation sequence
            target.style.transition = 'all 0.5s ease';
            target.style.transform = 'rotate(10deg) scale(1.1)';
            target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
            
            setTimeout(() => {
                target.style.transform = 'rotate(-10deg) scale(0.9)';
            }, 250);
            
            setTimeout(() => {
                target.style.transform = 'rotate(0deg) scale(1)';
                target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }, 500);
            
            console.log('Animation เล่นแล้ว');
        }

        function resetStyles() {
            let target = document.getElementById('style-target');
            target.style.cssText = ''; // ลบ inline styles ทั้งหมด
            target.className = 'style-demo'; // รีเซ็ต class
            
            console.log('รีเซ็ต styles แล้ว');
        }

        // Interactive Controls
        function updateBackground() {
            let color = document.getElementById('bgColor').value;
            document.getElementById('style-target').style.backgroundColor = color;
        }

        function updateTextColor() {
            let color = document.getElementById('textColor').value;
            document.getElementById('style-target').style.color = color;
        }

        function updateFontSize() {
            let size = document.getElementById('fontSize').value;
            document.getElementById('style-target').style.fontSize = size + 'px';
            document.getElementById('fontSizeValue').textContent = size + 'px';
        }

        function updateOpacity() {
            let opacity = document.getElementById('opacity').value;
            document.getElementById('style-target').style.opacity = opacity / 100;
            document.getElementById('opacityValue').textContent = opacity + '%';
        }

        // LAB 3.2: Attributes
        function changeImageSize() {
            let img = document.getElementById('demo-image');
            let sizes = ['150px', '200px', '250px', '100px'];
            let randomSize = sizes[Math.floor(Math.random() * sizes.length)];
            
            img.setAttribute('width', randomSize);
            img.style.width = randomSize;
            
            console.log('เปลี่ยนขนาดรูปเป็น:', randomSize);
        }

        function changeImageSrc() {
            let img = document.getElementById('demo-image');
            let colors = ['ff6b6b', '4ecdc4', '45b7d1', '96ceb4', 'ffeaa7'];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            let newSrc = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150'%3E%3Crect width='200' height='150' fill='%23${randomColor}'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white'%3ENew Image%3C/text%3E%3C/svg%3E`;
            
            img.setAttribute('src', newSrc);
            img.setAttribute('alt', 'รูปภาพใหม่ สี ' + randomColor);
            
            console.log('เปลี่ยนรูปภาพแล้ว');
        }

        function toggleImageBorder() {
            let img = document.getElementById('demo-image');
            
            if (img.style.border === '' || img.style.border === '2px solid rgb(221, 221, 221)') {
                img.style.border = '5px solid #ff0000';
                img.style.borderRadius = '15px';
            } else {
                img.style.border = '2px solid #ddd';
                img.style.borderRadius = '8px';
            }
            
            console.log('Toggle border รูปภาพ');
        }

        function showImageInfo() {
            let img = document.getElementById('demo-image');
            let info = document.getElementById('attribute-info');
            
            info.innerHTML = `
                <h4>ข้อมูล Image Attributes:</h4>
                <ul>
                    <li><strong>src:</strong> ${img.getAttribute('src').substring(0, 50)}...</li>
                    <li><strong>alt:</strong> ${img.getAttribute('alt')}</li>
                    <li><strong>width:</strong> ${img.getAttribute('width') || 'ไม่ได้กำหนด'}</li>
                    <li><strong>style:</strong> ${img.getAttribute('style') || 'ไม่ได้กำหนด'}</li>
                    <li><strong>id:</strong> ${img.getAttribute('id')}</li>
                </ul>
                <p><strong>hasAttribute('width'):</strong> ${img.hasAttribute('width')}</p>
                <p><strong>hasAttribute('height'):</strong> ${img.hasAttribute('height')}</p>
            `;
        }

        // Input Attributes
        function disableInput() {
            let input = document.getElementById('demo-input');
            input.setAttribute('disabled', 'true');
            input.style.backgroundColor = '#f0f0f0';
            
            console.log('Input disabled');
        }

        function enableInput() {
            let input = document.getElementById('demo-input');
            input.removeAttribute('disabled');
            input.style.backgroundColor = 'white';
            
            console.log('Input enabled');
        }

        function changeInputType() {
            let input = document.getElementById('demo-input');
            let types = ['text', 'password', 'email', 'number', 'tel'];
            let currentType = input.getAttribute('type') || 'text';
            let currentIndex = types.indexOf(currentType);
            let nextType = types[(currentIndex + 1) % types.length];
            
            input.setAttribute('type', nextType);
            input.setAttribute('placeholder', `ทดสอบ ${nextType} input`);
            
            console.log('เปลี่ยน input type เป็น:', nextType);
        }

        function addInputValidation() {
            let input = document.getElementById('demo-input');
            
            input.setAttribute('required', 'true');
            input.setAttribute('minlength', '3');
            input.setAttribute('maxlength', '20');
            input.setAttribute('pattern', '[a-zA-Zก-๙\\s]+');
            input.setAttribute('title', 'กรุณาใส่ชื่อ 3-20 ตัวอักษร (ไม่มีตัวเลข)');
            
            console.log('เพิ่ม validation แล้ว');
        }

        // LAB 3.3: CSS Classes
        // สร้าง CSS classes แบบ dynamic
        let style = document.createElement('style');
        style.textContent = `
            .highlight { background: #ffeb3b !important; color: #333 !important; }
            .shadow { box-shadow: 0 8px 16px rgba(0,0,0,0.3) !important; }
            .rounded { border-radius: 25px !important; }
            .large { font-size: 1.5em !important; }
            .rotate { transform: rotate(5deg) !important; }
            .gradient { background: linear-gradient(45deg, #667eea, #764ba2) !important; color: white !important; }
        `;
        document.head.appendChild(style);

        function addClass() {
            let target = document.getElementById('class-target');
            let classes = ['highlight', 'shadow', 'rounded', 'large', 'rotate'];
            let randomClass = classes[Math.floor(Math.random() * classes.length)];
            
            target.classList.add(randomClass);
            
            console.log('เพิ่ม class:', randomClass);
            console.log('Classes ปัจจุบัน:', target.classList.toString());
        }

        function removeClass() {
            let target = document.getElementById('class-target');
            let classes = Array.from(target.classList);
            
            if (classes.length > 0) {
                let randomClass = classes[Math.floor(Math.random() * classes.length)];
                target.classList.remove(randomClass);
                
                console.log('ลบ class:', randomClass);
                console.log('Classes ปัจจุบัน:', target.classList.toString());
            } else {
                console.log('ไม่มี class ให้ลบ');
            }
        }

        function toggleClass() {
            let target = document.getElementById('class-target');
            target.classList.toggle('gradient');
            
            console.log('Toggle class: gradient');
            console.log('Classes ปัจจุบัน:', target.classList.toString());
        }

        function replaceClass() {
            let target = document.getElementById('class-target');
            
            if (target.classList.contains('highlight')) {
                target.classList.replace('highlight', 'shadow');
                console.log('เปลี่ยน highlight เป็น shadow');
            } else if (target.classList.contains('shadow')) {
                target.classList.replace('shadow', 'rounded');
                console.log('เปลี่ยน shadow เป็น rounded');
            } else {
                target.classList.add('highlight');
                console.log('เพิ่ม highlight');
            }
            
            console.log('Classes ปัจจุบัน:', target.classList.toString());
        }

        function showClasses() {
            let target = document.getElementById('class-target');
            let info = document.getElementById('attribute-info');
            
            info.innerHTML = `
                <h4>ข้อมูล CSS Classes:</h4>
                <p><strong>classList:</strong> ${target.classList.toString() || 'ไม่มี class'}</p>
                <p><strong>จำนวน classes:</strong> ${target.classList.length}</p>
                <p><strong>className:</strong> "${target.className}"</p>
                
                <h4>Class Methods ที่ใช้ได้:</h4>
                <ul>
                    <li><code>classList.add('class')</code> - เพิ่ม class</li>
                    <li><code>classList.remove('class')</code> - ลบ class</li>
                    <li><code>classList.toggle('class')</code> - เปิด/ปิด class</li>
                    <li><code>classList.contains('class')</code> - ตรวจสอบ class</li>
                    <li><code>classList.replace('old', 'new')</code> - เปลี่ยน class</li>
                </ul>
            `;
        }

        // เริ่มต้น
        console.log('=== DOM LAB 3 เริ่มต้น ===');
        console.log('🎨 ทดลองเปลี่ยน Style, Attributes และ Classes');
        
        // แสดงข้อมูลเริ่มต้น
        showImageInfo();
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. ทดสอบการเปลี่ยน CSS properties ต่างๆ
2. ใช้ slider ควบคุมสไตล์แบบ real-time
3. เรียนรู้การจัดการ attributes ของ elements
4. ทดสอบ CSS classes methods

---

## 📚 **LAB 4: การสร้างและลบ Elements**

### **💻 Exercise 4.1: createElement และ appendChild**

**สร้างไฟล์:** `dom-lab4.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 4: สร้างและลบ Elements</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo-section { background: #f8f9fa; padding: 20px; margin: 15px 0; border-radius: 8px; }
        .demo-btn { background: #28a745; color: white; padding: 8px 15px; 
                   border: none; border-radius: 4px; margin: 3px; cursor: pointer; }
        .demo-btn:hover { background: #218838; }
        .demo-btn.danger { background: #dc3545; }
        .demo-btn.danger:hover { background: #c82333; }
        .element-container { background: white; border: 2px dashed #adb5bd; 
                           padding: 20px; margin: 10px 0; border-radius: 8px; min-height: 100px; }
        .created-element { background: #e7f3ff; border: 1px solid #4dabf7; 
                          padding: 10px; margin: 5px; border-radius: 5px; }
        .todo-item { background: white; border: 1px solid #dee2e6; padding: 10px; 
                    margin: 5px 0; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; }
        .todo-item.completed { background: #d4edda; text-decoration: line-through; opacity: 0.7; }
    </style>
</head>
<body>
    <h1>🎯 LAB 4: สร้างและลบ Elements</h1>

    <!-- Section 1: Basic createElement -->
    <div class="demo-section">
        <h3>🏗️ การสร้าง Elements พื้นฐาน</h3>
        <div class="control-panel">
            <button class="demo-btn" onclick="createParagraph()">สร้าง Paragraph</button>
            <button class="demo-btn" onclick="createButton()">สร้าง Button</button>
            <button class="demo-btn" onclick="createImage()">สร้าง Image</button>
            <button class="demo-btn" onclick="createList()">สร้าง List</button>
            <button class="demo-btn danger" onclick="clearContainer('basic-container')">ล้างทั้งหมด</button>
        </div>
        
        <div id="basic-container" class="element-container">
            <p style="text-align: center; color: #6c757d;">Elements ที่สร้างจะแสดงที่นี่</p>
        </div>
    </div>

    <!-- Section 2: Dynamic Form Creation -->
    <div class="demo-section">
        <h3>📝 สร้างฟอร์มแบบ Dynamic</h3>
        <div class="control-panel">
            <select id="form-element-type">
                <option value="text">Text Input</option>
                <option value="email">Email Input</option>
                <option value="password">Password Input</option>
                <option value="textarea">Textarea</option>
                <option value="select">Select Dropdown</option>
                <option value="checkbox">Checkbox</option>
                <option value="radio">Radio Button</option>
            </select>
            <input type="text" id="element-label" placeholder="Label" value="ชื่อฟิลด์">
            <button class="demo-btn" onclick="addFormElement()">เพิ่มฟิลด์</button>
            <button class="demo-btn danger" onclick="clearContainer('form-container')">ล้างฟอร์ม</button>
            <button class="demo-btn" onclick="validateForm()">ตรวจสอบฟอร์ม</button>
        </div>
        
        <div id="form-container" class="element-container">
            <p style="text-align: center; color: #6c757d;">ฟอร์มจะถูกสร้างที่นี่</p>
        </div>
        
        <div id="form-result" style="margin-top: 10px; padding: 10px; background: white; border-radius: 5px;"></div>
    </div>

    <!-- Section 3: Todo List Application -->
    <div class="demo-section">
        <h3>✅ Todo List Application</h3>
        <div class="control-panel">
            <input type="text" id="todo-input" placeholder="เพิ่มงานใหม่..." style="padding: 8px; margin: 5px; flex: 1; border: 1px solid #ddd; border-radius: 4px;">
            <button class="demo-btn" onclick="addTodo()">เพิ่มงาน</button>
            <button class="demo-btn" onclick="addRandomTodos()">เพิ่มงานตัวอย่าง</button>
            <button class="demo-btn danger" onclick="clearCompletedTodos()">ลบงานเสร็จแล้ว</button>
            <button class="demo-btn danger" onclick="clearAllTodos()">ลบทั้งหมด</button>
        </div>
        
        <div id="todo-stats" style="background: white; padding: 10px; border-radius: 5px; margin: 10px 0;"></div>
        <div id="todo-container" class="element-container"></div>
    </div>

    <script>
        let elementCounter = 1;
        let todoCounter = 1;

        // LAB 4.1: Basic createElement
        function createParagraph() {
            // สร้าง element ใหม่
            let p = document.createElement('p');
            p.textContent = `Paragraph ที่ ${elementCounter++} - สร้างเมื่อ ${new Date().toLocaleTimeString('th-TH')}`;
            p.className = 'created-element';
            
            // เพิ่มการ์ลงใน container
            document.getElementById('basic-container').appendChild(p);
            
            console.log('สร้าง paragraph:', p);
        }

        function createButton() {
            let button = document.createElement('button');
            button.textContent = `Button ${elementCounter++}`;
            button.className = 'demo-btn';
            
            // เพิ่ม event listener
            button.addEventListener('click', function() {
                alert(`คุณคลิก ${this.textContent}!`);
            });
            
            document.getElementById('basic-container').appendChild(button);
            
            console.log('สร้าง button:', button);
        }

        function createImage() {
            let img = document.createElement('img');
            let colors = ['ff6b6b', '4ecdc4', '45b7d1', '96ceb4', 'ffeaa7'];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100'%3E%3Crect width='150' height='100' fill='%23${randomColor}'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='white'%3EImage ${elementCounter}%3C/text%3E%3C/svg%3E`;
            img.alt = `รูปภาพที่ ${elementCounter++}`;
            img.style.display = 'block';
            img.style.margin = '10px auto';
            img.style.borderRadius = '8px';
            
            document.getElementById('basic-container').appendChild(img);
            
            console.log('สร้าง image:', img);
        }

        function createList() {
            let ul = document.createElement('ul');
            ul.className = 'created-element';
            
            let items = ['รายการที่ 1', 'รายการที่ 2', 'รายการที่ 3'];
            
            items.forEach(itemText => {
                let li = document.createElement('li');
                li.textContent = itemText;
                ul.appendChild(li);
            });
            
            document.getElementById('basic-container').appendChild(ul);
            
            console.log('สร้าง list:', ul);
        }

        function clearContainer(containerId) {
            let container = document.getElementById(containerId);
            container.innerHTML = '<p style="text-align: center; color: #6c757d;">Elements ที่สร้างจะแสดงที่นี่</p>';
            
            if (containerId === 'todo-container') {
                updateTodoStats();
            }
            
            console.log('ล้าง container:', containerId);
        }

        // LAB 4.2: Dynamic Form Creation
        function addFormElement() {
            let type = document.getElementById('form-element-type').value;
            let labelText = document.getElementById('element-label').value || 'ฟิลด์';
            let container = document.getElementById('form-container');
            
            // ลบข้อความเริ่มต้น
            if (container.children.length === 1 && container.children[0].tagName === 'P') {
                container.innerHTML = '';
            }
            
            // สร้าง wrapper div
            let wrapper = document.createElement('div');
            wrapper.style.margin = '10px 0';
            wrapper.style.padding = '10px';
            wrapper.style.background = 'white';
            wrapper.style.borderRadius = '5px';
            wrapper.style.border = '1px solid #dee2e6';
            
            // สร้าง label
            let label = document.createElement('label');
            label.textContent = labelText + ':';
            label.style.display = 'block';
            label.style.marginBottom = '5px';
            label.style.fontWeight = 'bold';
            
            // สร้าง input element ตามประเภท
            let element;
            
            switch (type) {
                case 'textarea':
                    element = document.createElement('textarea');
                    element.placeholder = `ใส่${labelText}`;
                    element.rows = 3;
                    break;
                case 'select':
                    element = document.createElement('select');
                    ['เลือกตัวเลือก', 'ตัวเลือก 1', 'ตัวเลือก 2', 'ตัวเลือก 3'].forEach(optionText => {
                        let option = document.createElement('option');
                        option.textContent = optionText;
                        option.value = optionText;
                        element.appendChild(option);
                    });
                    break;
                case 'checkbox':
                    element = document.createElement('input');
                    element.type = 'checkbox';
                    element.style.marginRight = '8px';
                    let checkboxLabel = document.createElement('span');
                    checkboxLabel.textContent = labelText;
                    wrapper.appendChild(element);
                    wrapper.appendChild(checkboxLabel);
                    break;
                case 'radio':
                    element = document.createElement('input');
                    element.type = 'radio';
                    element.name = 'radio-group';
                    element.style.marginRight = '8px';
                    let radioLabel = document.createElement('span');
                    radioLabel.textContent = labelText;
                    wrapper.appendChild(element);
                    wrapper.appendChild(radioLabel);
                    break;
                default:
                    element = document.createElement('input');
                    element.type = type;
                    element.placeholder = `ใส่${labelText}`;
            }
            
            // กำหนด style ทั่วไป
            if (element && type !== 'checkbox' && type !== 'radio') {
                element.style.width = '100%';
                element.style.padding = '8px';
                element.style.border = '1px solid #ddd';
                element.style.borderRadius = '4px';
                element.name = labelText.toLowerCase().replace(/\s+/g, '-');
            }
            
            // สร้างปุ่มลบ
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'ลบ';
            deleteBtn.className = 'demo-btn danger';
            deleteBtn.style.marginTop = '10px';
            deleteBtn.addEventListener('click', function() {
                wrapper.remove();
            });
            
            // ประกอบ elements
            if (type !== 'checkbox' && type !== 'radio') {
                wrapper.appendChild(label);
                wrapper.appendChild(element);
            }
            wrapper.appendChild(deleteBtn);
            
            container.appendChild(wrapper);
            
            console.log('เพิ่มฟิลด์:', type, labelText);
        }

        function validateForm() {
            let container = document.getElementById('form-container');
            let result = document.getElementById('form-result');
            let inputs = container.querySelectorAll('input, textarea, select');
            
            let formData = {};
            let valid = true;
            
            inputs.forEach(input => {
                if (input.type === 'checkbox') {
                    formData[input.name || 'checkbox'] = input.checked;
                } else if (input.type === 'radio') {
                    if (input.checked) {
                        formData[input.name] = input.value;
                    }
                } else {
                    formData[input.name] = input.value;
                    if (!input.value && input.type !== 'checkbox' && input.type !== 'radio') {
                        valid = false;
                    }
                }
            });
            
            result.innerHTML = `
                <h4>ผลการตรวจสอบฟอร์ม:</h4>
                <p><strong>สถานะ:</strong> ${valid ? '✅ ข้อมูลครบถ้วน' : '❌ ข้อมูลไม่ครบ'}</p>
                <p><strong>จำนวนฟิลด์:</strong> ${inputs.length}</p>
                <pre>${JSON.stringify(formData, null, 2)}</pre>
            `;
            
            console.log('Form validation:', formData);
        }

        // LAB 4.3: Todo List Application
        function addTodo() {
            let input = document.getElementById('todo-input');
            let todoText = input.value.trim();
            
            if (!todoText) {
                alert('กรุณาใส่งานที่ต้องทำ');
                return;
            }
            
            createTodoElement(todoText);
            input.value = '';
            updateTodoStats();
        }

        function createTodoElement(todoText) {
            let container = document.getElementById('todo-container');
            
            // ลบข้อความเริ่มต้น
            if (container.children.length === 0) {
                container.innerHTML = '';
            }
            
            // สร้าง todo item
            let todoItem = document.createElement('div');
            todoItem.className = 'todo-item';
            todoItem.id = `todo-${todoCounter++}`;
            
            // ข้อความงาน
            let todoSpan = document.createElement('span');
            todoSpan.textContent = todoText;
            
            // ปุ่มควบคุม
            let buttonContainer = document.createElement('div');
            
            // ปุ่มเสร็จ/ยกเลิก
            let completeBtn = document.createElement('button');
            completeBtn.textContent = '✓ เสร็จ';
            completeBtn.className = 'demo-btn';
            completeBtn.style.background = '#28a745';
            completeBtn.style.marginRight = '5px';
            
            completeBtn.addEventListener('click', function() {
                todoItem.classList.toggle('completed');
                completeBtn.textContent = todoItem.classList.contains('completed') ? '↺ ยกเลิก' : '✓ เสร็จ';
                updateTodoStats();
            });
            
            // ปุ่มลบ
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = '🗑️ ลบ';
            deleteBtn.className = 'demo-btn danger';
            
            deleteBtn.addEventListener('click', function() {
                todoItem.remove();
                updateTodoStats();
            });
            
            buttonContainer.appendChild(completeBtn);
            buttonContainer.appendChild(deleteBtn);
            
            todoItem.appendChild(todoSpan);
            todoItem.appendChild(buttonContainer);
            
            container.appendChild(todoItem);
            
            console.log('เพิ่ม todo:', todoText);
        }

        function addRandomTodos() {
            let sampleTodos = [
                'ทำการบ้าน JavaScript',
                'อ่านหนังสือ Web Development',
                'ฝึกเขียน DOM Manipulation',
                'ทบทวนบทเรียน HTML & CSS',
                'สร้างโปรเจคส่วนตัว',
                'เรียนรู้ React.js',
                'ฝึกใช้ Git และ GitHub'
            ];
            
            // เพิ่ม 3 งานแบบสุ่ม
            for (let i = 0; i < 3; i++) {
                let randomTodo = sampleTodos[Math.floor(Math.random() * sampleTodos.length)];
                createTodoElement(randomTodo);
            }
            
            updateTodoStats();
        }

        function clearCompletedTodos() {
            let completedTodos = document.querySelectorAll('.todo-item.completed');
            completedTodos.forEach(todo => todo.remove());
            updateTodoStats();
            
            console.log('ลบงานที่เสร็จแล้ว:', completedTodos.length, 'รายการ');
        }

        function clearAllTodos() {
            if (confirm('คุณแน่ใจหรือไม่ที่จะลบงานทั้งหมด?')) {
                document.getElementById('todo-container').innerHTML = '';
                updateTodoStats();
                console.log('ลบงานทั้งหมดแล้ว');
            }
        }

        function updateTodoStats() {
            let allTodos = document.querySelectorAll('.todo-item');
            let completedTodos = document.querySelectorAll('.todo-item.completed');
            let pendingTodos = allTodos.length - completedTodos.length;
            
            let statsDiv = document.getElementById('todo-stats');
            statsDiv.innerHTML = `
                <strong>📊 สถิติงาน:</strong> 
                ทั้งหมด ${allTodos.length} งาน | 
                เสร็จแล้ว ${completedTodos.length} งาน | 
                คงเหลือ ${pendingTodos} งาน
                ${allTodos.length > 0 ? `(${Math.round(completedTodos.length / allTodos.length * 100)}% เสร็จสิ้น)` : ''}
            `;
        }

        // เริ่มต้น
        console.log('=== DOM LAB 4 เริ่มต้น ===');
        console.log('🏗️ ทดลองสร้างและลบ Elements');
        
        updateTodoStats();
        
        // Event listener สำหรับ Enter key ใน todo input
        document.getElementById('todo-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. ทดสอบการสร้าง elements ประเภทต่างๆ
2. สร้างฟอร์มแบบ dynamic และทดสอบ validation
3. เล่น Todo List app - เพิ่ม/ลบ/เสร็จงาน
4. สังเกตการใช้ event listeners กับ elements ที่สร้างใหม่

---

## 📚 **LAB 5: โปรเจครวม - Interactive Dashboard**

### **💻 Final Project: Student Dashboard**

**สร้างไฟล์:** `dashboard-project.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Interactive Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
               background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
        .dashboard { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { background: white; border-radius: 15px; padding: 20px; margin-bottom: 20px; 
                 box-shadow: 0 8px 32px rgba(0,0,0,0.1); text-align: center; }
        .widget-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                      gap: 20px; }
        .widget { background: white; border-radius: 15px; padding: 20px; 
                 box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .widget h3 { color: #2d3748; border-bottom: 2px solid #e2e8f0; 
                    padding-bottom: 10px; margin-bottom: 15px; }
        .btn { background: #4299e1; color: white; border: none; padding: 8px 16px; 
              border-radius: 6px; cursor: pointer; margin: 2px; }
        .btn:hover { background: #3182ce; }
        .btn-small { padding: 4px 8px; font-size: 12px; }
        .btn-danger { background: #e53e3e; }
        .btn-danger:hover { background: #c53030; }
        .input-group { margin: 10px 0; }
        .input-group input, .input-group select { width: 100%; padding: 8px; 
                                                 border: 1px solid #e2e8f0; border-radius: 6px; }
        .subject-item { background: #f7fafc; padding: 10px; margin: 5px 0; 
                       border-radius: 6px; border-left: 4px solid #4299e1; }
        .note-item { background: #fffaf0; border: 1px solid #fed7aa; padding: 10px; 
                    margin: 5px 0; border-radius: 6px; }
        .grade-a { border-left-color: #48bb78; }
        .grade-b { border-left-color: #4299e1; }
        .grade-c { border-left-color: #ed8936; }
        .grade-f { border-left-color: #e53e3e; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); 
                     gap: 10px; margin: 15px 0; }
        .stat-card { background: #edf2f7; padding: 15px; border-radius: 8px; text-align: center; }
        .stat-number { font-size: 1.5em; font-weight: bold; color: #2d3748; }
    </style>
</head>
<body>
    <div class="dashboard">
        <!-- Header -->
        <div class="header">
            <h1>📚 Student Interactive Dashboard</h1>
            <p>DOM Manipulation Final Project - ควบคุมทุกอย่างด้วย JavaScript</p>
            <div id="datetime" style="margin-top: 10px; color: #666;"></div>
        </div>

        <div class="widget-grid">
            <!-- Widget 1: Subject Manager -->
            <div class="widget">
                <h3>📖 จัดการวิชาเรียน</h3>
                <div class="input-group">
                    <input type="text" id="subject-name" placeholder="ชื่อวิชา">
                </div>
                <div class="input-group">
                    <input type="number" id="subject-credits" placeholder="หน่วยกิต" min="1" max="4" value="3">
                </div>
                <div class="input-group">
                    <input type="number" id="subject-score" placeholder="คะแนน" min="0" max="100">
                </div>
                <button class="btn" onclick="addSubject()">เพิ่มวิชา</button>
                <button class="btn btn-danger" onclick="clearSubjects()">ล้างทั้งหมด</button>
                
                <div class="stats-grid" id="subject-stats"></div>
                <div id="subjects-list"></div>
            </div>

            <!-- Widget 2: Quick Notes -->
            <div class="widget">
                <h3>📝 บันทึกด่วน</h3>
                <div class="input-group">
                    <select id="note-type">
                        <option value="reminder">💡 เตือนความจำ</option>
                        <option value="idea">🔥 ไอเดีย</option>
                        <option value="task">✅ งานที่ต้องทำ</option>
                        <option value="important">⚠️ สำคัญ</option>
                    </select>
                </div>
                <div class="input-group">
                    <input type="text" id="note-text" placeholder="เขียนบันทึก...">
                </div>
                <button class="btn" onclick="addNote()">เพิ่มบันทึก</button>
                <button class="btn" onclick="addQuickNotes()">ตัวอย่าง</button>
                
                <div id="notes-list"></div>
            </div>

            <!-- Widget 3: Calculator -->
            <div class="widget">
                <h3>🧮 เครื่องคิดเลข GPA</h3>
                <div id="gpa-calculator">
                    <p>เพิ่มวิชาในหมวดแรกเพื่อคำนวณ GPA</p>
                </div>
                
                <div style="margin-top: 15px;">
                    <h4>🎯 เครื่องคิดเลขทั่วไป</h4>
                    <div class="input-group">
                        <input type="number" id="calc-num1" placeholder="ตัวเลขที่ 1" value="10">
                        <select id="calc-operator">
                            <option value="+">บวก (+)</option>
                            <option value="-">ลบ (-)</option>
                            <option value="*">คูณ (×)</option>
                            <option value="/">หาร (÷)</option>
                        </select>
                        <input type="number" id="calc-num2" placeholder="ตัวเลขที่ 2" value="5">
                    </div>
                    <button class="btn" onclick="calculate()">คำนวณ</button>
                    <div id="calc-result" style="margin-top: 10px; font-weight: bold;"></div>
                </div>
            </div>

            <!-- Widget 4: Theme Customizer -->
            <div class="widget">
                <h3>🎨 ปรับแต่งธีม</h3>
                <div class="input-group">
                    <label>สีพื้นหลัง:</label>
                    <select id="theme-bg" onchange="changeTheme()">
                        <option value="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">น้ำเงิน-ม่วง</option>
                        <option value="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">ชมพู-แดง</option>
                        <option value="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">ฟ้า-เขียว</option>
                        <option value="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)">เขียว-มิ้นท์</option>
                        <option value="linear-gradient(135deg, #fa709a 0%, #fee140 100%)">ชมพู-เหลือง</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>ขนาดตัวอักษร:</label>
                    <input type="range" id="font-size" min="12" max="20" value="14" onchange="changeFontSize()">
                    <span id="font-size-value">14px</span>
                </div>
                <div class="input-group">
                    <label>โหมดมืด:</label>
                    <input type="checkbox" id="dark-mode" onchange="toggleDarkMode()">
                </div>
                
                <button class="btn" onclick="resetTheme()">รีเซ็ตธีม</button>
            </div>

            <!-- Widget 5: Digital Clock -->
            <div class="widget">
                <h3>🕐 นาฬิกาดิจิทัล</h3>
                <div id="digital-clock" style="font-size: 2em; text-align: center; 
                     color: #2d3748; font-family: monospace; margin: 20px 0;"></div>
                
                <div style="text-align: center;">
                    <button class="btn" onclick="toggleClockFormat()">เปลี่ยนรูปแบบ</button>
                    <button class="btn" onclick="setAlarm()">ตั้งปลุก</button>
                </div>
                
                <div id="alarm-status" style="margin-top: 10px; text-align: center;"></div>
            </div>

            <!-- Widget 6: Quick Tools -->
            <div class="widget">
                <h3>🛠️ เครื่องมือด่วน</h3>
                
                <h4>📊 สุ่มข้อมูล:</h4>
                <button class="btn btn-small" onclick="generateRandomNumber()">เลขสุ่ม 1-100</button>
                <button class="btn btn-small" onclick="generateRandomColor()">สีสุ่ม</button>
                <button class="btn btn-small" onclick="generateRandomName()">ชื่อสุ่ม</button>
                
                <h4 style="margin-top: 15px;">🔧 ตัวช่วย:</h4>
                <button class="btn btn-small" onclick="showSystemInfo()">ข้อมูลระบบ</button>
                <button class="btn btn-small" onclick="exportData()">Export ข้อมูล</button>
                <button class="btn btn-small" onclick="clearAllData()">ล้างทุกอย่าง</button>
                
                <div id="tools-result" style="margin-top: 15px; padding: 10px; 
                     background: #f7fafc; border-radius: 6px; min-height: 50px;"></div>
            </div>
        </div>
    </div>

    <script>
        // Global variables
        let subjects = [];
        let notes = [];
        let clockFormat24 = true;
        let alarmTime = null;

        // Initialize dashboard
        function initDashboard() {
            updateDateTime();
            updateDigitalClock();
            updateSubjectStats();
            updateGPACalculator();
            
            // Update time every second
            setInterval(updateDigitalClock, 1000);
            setInterval(updateDateTime, 1000);
            
            console.log('Dashboard initialized!');
        }

        // Subject Management
        function addSubject() {
            let name = document.getElementById('subject-name').value;
            let credits = parseInt(document.getElementById('subject-credits').value);
            let score = parseFloat(document.getElementById('subject-score').value);
            
            if (!name || !credits || isNaN(score)) {
                alert('กรุณากรอกข้อมูลให้ครบถ้วน');
                return;
            }
            
            let grade = calculateGrade(score);
            let subject = { name, credits, score, grade, id: Date.now() };
            
            subjects.push(subject);
            
            // Clear inputs
            document.getElementById('subject-name').value = '';
            document.getElementById('subject-score').value = '';
            
            updateSubjectsList();
            updateSubjectStats();
            updateGPACalculator();
            
            console.log('Added subject:', subject);
        }

        function calculateGrade(score) {
            if (score >= 80) return 'A';
            if (score >= 70) return 'B';
            if (score >= 60) return 'C';
            if (score >= 50) return 'D';
            return 'F';
        }

        function removeSubject(id) {
            subjects = subjects.filter(s => s.id !== id);
            updateSubjectsList();
            updateSubjectStats();
            updateGPACalculator();
        }

        function updateSubjectsList() {
            let container = document.getElementById('subjects-list');
            
            if (subjects.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: #666;">ยังไม่มีวิชาที่เพิ่ม</p>';
                return;
            }
            
            container.innerHTML = subjects.map(subject => `
                <div class="subject-item grade-${subject.grade.toLowerCase()}">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong>${subject.name}</strong><br>
                            <small>${subject.credits} หน่วยกิต | คะแนน ${subject.score} | เกรด ${subject.grade}</small>
                        </div>
                        <button class="btn btn-danger btn-small" onclick="removeSubject(${subject.id})">ลบ</button>
                    </div>
                </div>
            `).join('');
        }

        function updateSubjectStats() {
            let container = document.getElementById('subject-stats');
            let totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
            let avgScore = subjects.length > 0 ? 
                (subjects.reduce((sum, s) => sum + s.score, 0) / subjects.length).toFixed(1) : 0;
            
            container.innerHTML = `
                <div class="stat-card">
                    <div class="stat-number">${subjects.length}</div>
                    <div>วิชา</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${totalCredits}</div>
                    <div>หน่วยกิต</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${avgScore}</div>
                    <div>คะแนนเฉลี่ย</div>
                </div>
            `;
        }

        function clearSubjects() {
            if (confirm('ลบข้อมูลวิชาทั้งหมด?')) {
                subjects = [];
                updateSubjectsList();
                updateSubjectStats();
                updateGPACalculator();
            }
        }

        // Notes Management
        function addNote() {
            let type = document.getElementById('note-type').value;
            let text = document.getElementById('note-text').value;
            
            if (!text) {
                alert('กรุณาเขียนบันทึก');
                return;
            }
            
            let note = {
                type,
                text,
                timestamp: new Date().toLocaleString('th-TH'),
                id: Date.now()
            };
            
            notes.unshift(note); // เพิ่มที่ด้านบน
            document.getElementById('note-text').value = '';
            updateNotesList();
            
            console.log('Added note:', note);
        }

        function addQuickNotes() {
            let quickNotes = [
                { type: 'reminder', text: 'ทบทวนบทเรียน DOM Manipulation' },
                { type: 'task', text: 'ทำโปรเจค JavaScript ให้เสร็จ' },
                { type: 'idea', text: 'สร้างเว็บไซต์ portfolio' }
            ];
            
            quickNotes.forEach(note => {
                notes.unshift({
                    ...note,
                    timestamp: new Date().toLocaleString('th-TH'),
                    id: Date.now() + Math.random()
                });
            });
            
            updateNotesList();
        }

        function removeNote(id) {
            notes = notes.filter(n => n.id !== id);
            updateNotesList();
        }

        function updateNotesList() {
            let container = document.getElementById('notes-list');
            
            if (notes.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: #666;">ยังไม่มีบันทึก</p>';
                return;
            }
            
            container.innerHTML = notes.slice(0, 5).map(note => `
                <div class="note-item">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <div>${note.type === 'reminder' ? '💡' : 
                                  note.type === 'idea' ? '🔥' : 
                                  note.type === 'task' ? '✅' : '⚠️'} ${note.text}</div>
                            <small style="color: #666;">${note.timestamp}</small>
                        </div>
                        <button class="btn btn-danger btn-small" onclick="removeNote(${note.id})">×</button>
                    </div>
                </div>
            `).join('');
            
            if (notes.length > 5) {
                container.innerHTML += `<p style="text-align: center; color: #666;">และอีก ${notes.length - 5} รายการ...</p>`;
            }
        }

        // GPA Calculator
        function updateGPACalculator() {
            let container = document.getElementById('gpa-calculator');
            
            if (subjects.length === 0) {
                container.innerHTML = '<p>เพิ่มวิชาในหมวดแรกเพื่อคำนวณ GPA</p>';
                return;
            }
            
            let totalPoints = 0;
            let totalCredits = 0;
            
            subjects.forEach(subject => {
                let points = { 'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0 }[subject.grade] || 0;
                totalPoints += points * subject.credits;
                totalCredits += subject.credits;
            });
            
            let gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
            let gradeColor = gpa >= 3.5 ? '#48bb78' : gpa >= 3.0 ? '#4299e1' : gpa >= 2.5 ? '#ed8936' : '#e53e3e';
            
            container.innerHTML = `
                <div style="text-align: center; padding: 20px; background: ${gradeColor}; 
                     color: white; border-radius: 10px;">
                    <div style="font-size: 2.5em; font-weight: bold;">${gpa}</div>
                    <div>เกรดเฉลี่ยสะสม (GPA)</div>
                    <div style="margin-top: 10px; font-size: 0.9em;">
                        ${totalCredits} หน่วยกิต | ${totalPoints} คะแนนรวม
                    </div>
                </div>
            `;
        }

        // Calculator
        function calculate() {
            let num1 = parseFloat(document.getElementById('calc-num1').value);
            let num2 = parseFloat(document.getElementById('calc-num2').value);
            let operator = document.getElementById('calc-operator').value;
            let result;
            
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('calc-result').innerHTML = '❌ กรุณาใส่ตัวเลขที่ถูกต้อง';
                return;
            }
            
            switch (operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': 
                    if (num2 === 0) {
                        document.getElementById('calc-result').innerHTML = '❌ ไม่สามารถหารด้วย 0 ได้';
                        return;
                    }
                    result = num1 / num2; 
                    break;
            }
            
            document.getElementById('calc-result').innerHTML = 
                `🧮 ผลลัพธ์: ${num1} ${operator} ${num2} = <span style="color: #4299e1;">${result}</span>`;
            
            console.log('Calculation:', num1, operator, num2, '=', result);
        }

        // Theme Management
        function changeTheme() {
            let bg = document.getElementById('theme-bg').value;
            document.body.style.background = bg;
        }

        function changeFontSize() {
            let size = document.getElementById('font-size').value;
            document.body.style.fontSize = size + 'px';
            document.getElementById('font-size-value').textContent = size + 'px';
        }

        function toggleDarkMode() {
            let isDark = document.getElementById('dark-mode').checked;
            
            if (isDark) {
                document.body.style.background = 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)';
                document.querySelectorAll('.widget, .header').forEach(el => {
                    el.style.background = '#2d3748';
                    el.style.color = 'white';
                });
            } else {
                changeTheme();
                document.querySelectorAll('.widget, .header').forEach(el => {
                    el.style.background = 'white';
                    el.style.color = '';
                });
            }
        }

        function resetTheme() {
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            document.body.style.fontSize = '14px';
            document.getElementById('theme-bg').value = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            document.getElementById('font-size').value = '14';
            document.getElementById('font-size-value').textContent = '14px';
            document.getElementById('dark-mode').checked = false;
            
            document.querySelectorAll('.widget, .header').forEach(el => {
                el.style.background = 'white';
                el.style.color = '';
            });
        }

        // Clock Functions
        function updateDateTime() {
            let now = new Date();
            document.getElementById('datetime').textContent = 
                now.toLocaleDateString('th-TH', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                }) + ' ' + now.toLocaleTimeString('th-TH');
        }

        function updateDigitalClock() {
            let now = new Date();
            let timeString = clockFormat24 ? 
                now.toLocaleTimeString('th-TH', { hour12: false }) :
                now.toLocaleTimeString('th-TH', { hour12: true });
                
            document.getElementById('digital-clock').textContent = timeString;
            
            // Check alarm
            if (alarmTime && now.toTimeString().substring(0, 5) === alarmTime) {
                alert('⏰ ถึงเวลาปลุกแล้ว!');
                alarmTime = null;
                updateAlarmStatus();
            }
        }

        function toggleClockFormat() {
            clockFormat24 = !clockFormat24;
            updateDigitalClock();
        }

        function setAlarm() {
            let time = prompt('ตั้งปลุก (รูปแบบ HH:MM):', '09:00');
            if (time && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
                alarmTime = time;
                updateAlarmStatus();
            } else if (time) {
                alert('รูปแบบเวลาไม่ถูกต้อง กรุณาใส่ HH:MM');
            }
        }

        function updateAlarmStatus() {
            let status = document.getElementById('alarm-status');
            status.innerHTML = alarmTime ? 
                `⏰ ตั้งปลุกไว้เวลา ${alarmTime}` : 
                'ไม่มีการตั้งปลุก';
        }

        // Quick Tools
        function generateRandomNumber() {
            let num = Math.floor(Math.random() * 100) + 1;
            document.getElementById('tools-result').innerHTML = `🎲 <strong>เลขสุ่ม:</strong> ${num}`;
        }

        function generateRandomColor() {
            let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
            let color = colors[Math.floor(Math.random() * colors.length)];
            document.getElementById('tools-result').innerHTML = 
                `🎨 <strong>สีสุ่ม:</strong> <span style="background: ${color}; padding: 5px 10px; border-radius: 4px; color: white;">${color}</span>`;
        }

        function generateRandomName() {
            let firstNames = ['สมชาย', 'สมหญิง', 'วิชัย', 'สุดา', 'นิพนธ์', 'วิภา', 'ธนา', 'สิริ'];
            let lastNames = ['ใจดี', 'เก่งงาม', 'รักเรียน', 'มั่นคง', 'ชาญฉลาด', 'สุขสม', 'เจริญ', 'พัฒนา'];
            let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            document.getElementById('tools-result').innerHTML = `👤 <strong>ชื่อสุ่ม:</strong> ${firstName} ${lastName}`;
        }

        function showSystemInfo() {
            let info = `
                <strong>📱 ข้อมูลระบบ:</strong><br>
                เบราว์เซอร์: ${navigator.userAgent.split(' ')[0]}<br>
                ภาษา: ${navigator.language}<br>
                ขนาดหน้าจอ: ${screen.width}×${screen.height}<br>
                เขตเวลา: ${Intl.DateTimeFormat().resolvedOptions().timeZone}<br>
                Online: ${navigator.onLine ? 'เชื่อมต่อ' : 'ออฟไลน์'}
            `;
            document.getElementById('tools-result').innerHTML = info;
        }

        function exportData() {
            let data = {
                subjects: subjects,
                notes: notes,
                exportTime: new Date().toISOString(),
                totalSubjects: subjects.length,
                totalNotes: notes.length
            };
            
            let dataStr = JSON.stringify(data, null, 2);
            let dataBlob = new Blob([dataStr], {type:'application/json'});
            let url = URL.createObjectURL(dataBlob);
            
            let link = document.createElement('a');
            link.href = url;
            link.download = 'dashboard-data.json';
            link.click();
            
            document.getElementById('tools-result').innerHTML = 
                '💾 <strong>Export สำเร็จ!</strong><br>ไฟล์ dashboard-data.json ถูกดาวน์โหลดแล้ว';
        }

        function clearAllData() {
            if (confirm('ลบข้อมูลทั้งหมดใน Dashboard?')) {
                subjects = [];
                notes = [];
                
                updateSubjectsList();
                updateSubjectStats();
                updateGPACalculator();
                updateNotesList();
                
                document.getElementById('tools-result').innerHTML = 
                    '🗑️ <strong>ล้างข้อมูลแล้ว!</strong><br>ข้อมูลทั้งหมดถูกลบเรียบร้อย';
                
                console.log('All data cleared');
            }
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Enter key listeners
            document.getElementById('subject-name').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') document.getElementById('subject-credits').focus();
            });
            
            document.getElementById('subject-credits').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') document.getElementById('subject-score').focus();
            });
            
            document.getElementById('subject-score').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') addSubject();
            });
            
            document.getElementById('note-text').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') addNote();
            });
            
            document.getElementById('calc-num1').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') document.getElementById('calc-num2').focus();
            });
            
            document.getElementById('calc-num2').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') calculate();
            });
            
            console.log('Event listeners registered');
        });

        // Initialize dashboard when page loads
        initDashboard();
        
        console.log('=== Student Dashboard Loaded ===');
        console.log('🚀 Welcome to Interactive Dashboard!');
        console.log('💡 Features: Subject Manager, Notes, GPA Calculator, Theme Customizer, Clock, Tools');
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. เพิ่มวิชาเรียนและดู GPA real-time
2. เขียนบันทึกด่วนประเภทต่างๆ
3. ใช้เครื่องคิดเลขและดูการคำนวณ GPA
4. ปรับแต่งธีมและโหมดมืด
5. ตั้งปลุกและดูนาฬิกา
6. ใช้เครื่องมือต่างๆ และ export ข้อมูล

---

## 🎉 **สรุปการเรียน DOM Manipulation**

### **🏆 ความสำเร็จที่ได้รับ:**

✅ **DOM Selection** - เลือก elements ด้วยวิธีต่างๆ ได้  
✅ **Content Manipulation** - เปลี่ยนข้อความและ HTML ได้  
✅ **Style & Attributes** - จัดการ CSS และ attributes ได้  
✅ **Element Creation** - สร้างและลบ elements ได้  
✅ **Event Handling** - ตอบสนอง user interactions ได้  
✅ **Real Project** - สร้าง Interactive Dashboard ได้  

### **💡 แนวคิดสำคัญที่ได้เรียน:**

**1. DOM Tree Concept**
- HTML → Object Tree ที่ JavaScript ควบคุมได้
- การเปลี่ยนแปลง DOM = การเปลี่ยนแปลงหน้าเว็บแบบ real-time

**2. Selection Methods**
- `getElementById()` - เลือก 1 ตัว
- `querySelector()` / `querySelectorAll()` - ยืดหยุ่นที่สุด
- CSS Selectors ใช้ได้ทั้งหมด

**3. Manipulation Techniques**
- `textContent` vs `innerHTML` - ความปลอดภัย
- `style` properties - เปลี่ยน CSS แบบ dynamic
- `classList` methods - จัดการ CSS classes

**4. Dynamic Creation**
- `createElement()` + `appendChild()` - สร้าง elements ใหม่
- Event listeners สำหรับ elements ที่สร้างใหม่

### **🚀 ขั้นตอนต่อไป:**

**หัวข้อถัดไป:** Event Handling และ Interactive Elements  

**สิ่งที่จะเรียน:**
- Event Types ต่างๆ (click, input, submit, etc.)
- Event Object และ Properties
- Event Delegation
- Form Validation แบบ Advanced

### **📝 การบ้าน (Optional):**

ปรับปรุง Dashboard โดยเพิ่ม:
1. **Local Storage** - บันทึกข้อมูลถาวร
2. **Drag & Drop** - จัดเรียง widgets
3. **Charts** - แสดงกราฟสถิติ
4. **Responsive Design** - ใช้งานดีบนมือถือ
5. **PWA Features** - ทำงานออฟไลน์ได้

**เป้าหมาย:** สร้าง Web Application ที่สมบูรณ์! 💪

---

**หวังว่า LAB นี้จะช่วยให้เข้าใจ DOM Manipulation และสร้างเว็บไซต์ที่โต้ตอบได้จริง! 🎓**# DOM Manipulation