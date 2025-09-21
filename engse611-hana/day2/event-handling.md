# Event Handling และ Interactive Elements
## ENGSE611 - การพัฒนาเว็บด้วยเทคโนโลยีสมัยใหม่
### วันที่ 2 - หัวข้อที่ 2 (2 ชั่วโมง)

---

## Slide 1: ยินดีต้อนรับสู่โลกของ Interactive Web! 🎮

### สิ่งที่เราจะเรียนรู้วันนี้
- **Event คืออะไร** และทำไมสำคัญ
- **Event Listeners** - การฟังการกระทำของผู้ใช้
- **Event Object** - ข้อมูลเกี่ยวกับเหตุการณ์
- **Mouse, Keyboard และ Touch Events**
- **Event Delegation** - เทคนิคขั้นสูง

**เป้าหมาย:** ทำให้เว็บไซต์ตอบสนองต่อการกระทำของผู้ใช้ได้อย่างลื่นไหล!

---

## Slide 2: Event คืออะไร? 🤔

**Event = เหตุการณ์ที่เกิดขึ้นบนหน้าเว็บ**

### เปรียบเทียบกับชีวิตจริง:
- **กดกริ่งบ้าน** = Event เกิดขึ้น 🔔
- **เสียงกริ่งดัง** = Browser ตรวจจับ Event 👂
- **คนในบ้านไปเปิดประตู** = Event Handler ทำงาน 🚪

### Events ในเว็บไซต์:
- **การคลิก** - click ปุ่ม, ลิงก์
- **การพิมพ์** - keypress, keydown, keyup
- **การเลื่อนหน้าจอ** - scroll
- **การโหลดหน้าเว็บ** - load, DOMContentLoaded
- **การขยายหน้าต่าง** - resize

**Event ทำให้เว็บไซต์ "มีชีวิต" และตอบสนองผู้ใช้!**

---

## Slide 3: วิธีการฟัง Events - Event Listeners 👂

### 3 วิธีการเพิ่ม Event Listener:

#### 1. Inline Event (ใน HTML) - ไม่แนะนำ
```html
<button onclick="alert('สวัสดี!')">คลิกฉัน</button>
```

#### 2. Element Property - ใช้ได้
```javascript
let button = document.getElementById('myButton');
button.onclick = function() {
    alert('ปุ่มถูกคลิก!');
};
```

#### 3. addEventListener() - แนะนำมากที่สุด ⭐
```javascript
let button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('ปุ่มถูกคลิก!');
});
```

**ทำไม addEventListener() ดีที่สุด?**
- เพิ่ม listener หลายตัวได้
- ควบคุมการทำงานได้มากกว่า
- ลบ listener ได้ง่าย

---

## Slide 4: Click Events - การคลิกพื้นฐาน 👆

### การจัดการ Click Events:
```html
<button id="clickBtn">คลิกฉัน</button>
<p id="output">ยังไม่ได้คลิก</p>
```

```javascript
let button = document.getElementById('clickBtn');
let output = document.getElementById('output');
let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;
    output.textContent = `คลิกไปแล้ว ${clickCount} ครั้ง`;
});
```

### ประเภทของ Click Events:
```javascript
// Single Click
element.addEventListener('click', handleClick);

// Double Click
element.addEventListener('dblclick', handleDoubleClick);

// Mouse Down (กดลง)
element.addEventListener('mousedown', handleMouseDown);

// Mouse Up (ปล่อย)
element.addEventListener('mouseup', handleMouseUp);
```

---

## Slide 5: Event Object - ข้อมูลเกี่ยวกับเหตุการณ์ 📋

### Event Object ให้ข้อมูลอะไรบ้าง:
```javascript
button.addEventListener('click', function(event) {
    console.log('Event Type:', event.type);        // 'click'
    console.log('Target Element:', event.target);  // element ที่ถูกคลิก
    console.log('Mouse X:', event.clientX);        // ตำแหน่ง X ของเมาส์
    console.log('Mouse Y:', event.clientY);        // ตำแหน่ง Y ของเมาส์
    console.log('Timestamp:', event.timeStamp);    // เวลาที่เกิด event
});
```

### การใช้งานจริง - Mouse Tracker:
```javascript
document.addEventListener('mousemove', function(event) {
    let mouseInfo = document.getElementById('mouseInfo');
    mouseInfo.textContent = `Mouse: (${event.clientX}, ${event.clientY})`;
});
```

### Properties ที่ใช้บ่อย:
- **event.target** - element ที่ถูก trigger
- **event.currentTarget** - element ที่มี event listener
- **event.type** - ชนิดของ event
- **event.clientX/clientY** - ตำแหน่งเมาส์
- **event.timeStamp** - เวลาที่เกิดขึ้น

---

## Slide 6: preventDefault() และ stopPropagation() 🛑

### preventDefault() - หยุดพฤติกรรมเริ่มต้น:
```html
<form id="myForm">
    <input type="text" placeholder="ชื่อ" required>
    <button type="submit">ส่งข้อมูล</button>
</form>
```

```javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการส่งฟอร์ม
    console.log('ฟอร์มไม่ถูกส่ง แต่เราจัดการเอง');
    
    // ทำสิ่งที่เราต้องการแทน
    alert('ข้อมูลถูกส่งแล้ว (จำลอง)');
});
```

### stopPropagation() - หยุดการส่งต่อ Event:
```html
<div id="parent">
    <button id="child">ปุ่มลูก</button>
</div>
```

```javascript
document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent ถูกคลิก');
});

document.getElementById('child').addEventListener('click', function(event) {
    event.stopPropagation(); // หยุดส่งต่อไปยัง parent
    console.log('เฉพาะ Child ถูกคลิก');
});
```

---

## Slide 7: Mouse Events - การทำงานกับเมาส์ 🖱️

### Mouse Events ทั้งหมด:
```javascript
let element = document.getElementById('mouseDemo');

// การเข้าและออกจาก element
element.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'lightblue';
    console.log('เมาส์เข้ามา');
});

element.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
    console.log('เมาส์ออกไป');
});

// การเคลื่อนไหวของเมาส์
element.addEventListener('mousemove', function(event) {
    let rect = this.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log(`เมาส์อยู่ที่: (${x}, ${y})`);
});

// การคลิกต่างๆ
element.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // หยุด context menu
    console.log('คลิกขวา');
});
```

### สร้าง Hover Effect:
```javascript
function createHoverEffect(element, hoverColor, normalColor) {
    element.addEventListener('mouseenter', function() {
        this.style.backgroundColor = hoverColor;
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'all 0.3s ease';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.backgroundColor = normalColor;
        this.style.transform = 'scale(1)';
    });
}

// การใช้งาน
let buttons = document.querySelectorAll('.hover-btn');
buttons.forEach(btn => {
    createHoverEffect(btn, '#007bff', '#6c757d');
});
```

---

## Slide 8: Keyboard Events - การทำงานกับคีย์บอร์ด ⌨️

### Keyboard Events หลัก:
```javascript
let input = document.getElementById('textInput');

// เมื่อกดปุ่มลง
input.addEventListener('keydown', function(event) {
    console.log('Key Down:', event.key);
    
    // ตรวจสอบปุ่มพิเศษ
    if (event.key === 'Enter') {
        console.log('กด Enter!');
    }
    
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // หยุด Ctrl+S ของเบราว์เซอร์
        console.log('Ctrl+S ถูกกด - บันทึกข้อมูล');
    }
});

// เมื่อปล่อยปุ่ม
input.addEventListener('keyup', function(event) {
    console.log('Key Up:', event.key);
    console.log('Current Value:', this.value);
});

// เมื่อมีการพิมพ์ (มีการเปลี่ยนแปลงข้อความ)
input.addEventListener('input', function(event) {
    console.log('Text Changed:', this.value);
    
    // Real-time validation
    if (this.value.length < 3) {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = 'green';
    }
});
```

---

## Slide 9: คำถาม 🤔

### ถ้าคุณต้องการสร้างปุ่มที่เมื่อกด Space Bar จะทำงานเหมือนกับการคลิก
### คุณจะเขียนอย่างไร?

A) 
```javascript
button.addEventListener('keypress', function(event) {
    if (event.key === ' ') button.click();
});
```

B)
```javascript
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') button.click();
});
```

C)
```javascript
button.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault();
        this.click();
    }
});
```

**คิด 30 วินาที...**

---

## Slide 10: เฉลย 🎯

### คำตอบ: C) 

```javascript
button.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault(); // หยุดการ scroll หน้าจอ
        this.click();
    }
});
```

### เหตุผล:
- **keydown** ดีกว่า keypress (keypress เลิกใช้แล้ว)
- **preventDefault()** หยุดการ scroll เมื่อกด Space
- **event.code === 'Space'** ทำงานได้ทุกภาษา
- **this.click()** จำลองการคลิกจริงๆ

### การทำให้ปุ่มรองรับ Accessibility:
```javascript
button.setAttribute('tabindex', '0'); // ให้ focus ได้
button.addEventListener('focus', function() {
    this.style.outline = '2px solid blue';
});
```

---

## Slide 11: Form Events - การทำงานกับฟอร์ม 📝

### Form Events สำคัญ:
```html
<form id="userForm">
    <input type="text" id="username" placeholder="ชื่อผู้ใช้">
    <input type="email" id="email" placeholder="อีเมล">
    <input type="password" id="password" placeholder="รหัสผ่าน">
    <button type="submit">ส่งข้อมูล</button>
</form>
```

```javascript
let form = document.getElementById('userForm');
let username = document.getElementById('username');
let email = document.getElementById('email');

// เมื่อมี focus (เลือก input)
username.addEventListener('focus', function() {
    this.style.backgroundColor = '#e3f2fd';
    console.log('Username field focused');
});

// เมื่อ focus หาย (blur)
username.addEventListener('blur', function() {
    this.style.backgroundColor = '';
    
    // Validation เมื่อออกจาก field
    if (this.value.length < 3) {
        this.style.borderColor = 'red';
        console.log('Username ต้องมีอย่างน้อย 3 ตัวอักษร');
    } else {
        this.style.borderColor = 'green';
    }
});

// เมื่อมีการเปลี่ยนแปลงข้อมูล
email.addEventListener('change', function() {
    console.log('Email changed to:', this.value);
    
    // Basic email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.value)) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
});

// เมื่อส่งฟอร์ม
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    console.log('Form submitted with data:');
    for (let [key, value] of formData) {
        console.log(key + ': ' + value);
    }
});
```

---

## Slide 12: Real-time Search ตัวอย่าง 🔍

### สร้าง Search ที่ค้นหาขณะพิมพ์:
```html
<div class="search-container">
    <input type="text" id="searchInput" placeholder="ค้นหาสินค้า...">
    <div id="searchResults"></div>
</div>
```

```javascript
// ข้อมูลสินค้าตัวอย่าง
let products = [
    'iPhone 15', 'Samsung Galaxy S24', 'MacBook Pro',
    'Dell XPS 13', 'iPad Air', 'Microsoft Surface',
    'AirPods Pro', 'Sony WH-1000XM5', 'Canon EOS R5'
];

let searchInput = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');

// Debounce function เพื่อลดการค้นหาบ่อยเกินไป
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function performSearch(query) {
    if (query.length === 0) {
        searchResults.innerHTML = '';
        return;
    }
    
    // กรองสินค้าที่ตรงกับคำค้นหา
    let filtered = products.filter(product => 
        product.toLowerCase().includes(query.toLowerCase())
    );
    
    // แสดงผลลัพธ์
    if (filtered.length === 0) {
        searchResults.innerHTML = '<p>ไม่พบสินค้าที่ค้นหา</p>';
    } else {
        let html = '<ul>';
        filtered.forEach(product => {
            // Highlight คำที่ค้นหา
            let highlighted = product.replace(
                new RegExp(query, 'gi'), 
                `<mark>$&</mark>`
            );
            html += `<li>${highlighted}</li>`;
        });
        html += '</ul>';
        searchResults.innerHTML = html;
    }
}

// ใช้ debounce เพื่อรอ 300ms หลังจากพิมพ์เสร็จ
let debouncedSearch = debounce(function(event) {
    performSearch(event.target.value);
}, 300);

searchInput.addEventListener('input', debouncedSearch);

// ซ่อนผลลัพธ์เมื่อ input หลุด focus
searchInput.addEventListener('blur', function() {
    setTimeout(() => {
        searchResults.innerHTML = '';
    }, 200); // รอหน่อยเผื่อผู้ใช้คลิกผลลัพธ์
});
```

---

## Slide 13: Demo Time - Interactive Calculator! 💻

### สร้าง Calculator ที่ใช้งานได้ทั้งเมาส์และคีย์บอร์ด:

#### HTML:
```html
<div class="calculator">
    <div class="display">
        <input type="text" id="display" readonly>
    </div>
    <div class="buttons">
        <button class="btn clear" data-action="clear">C</button>
        <button class="btn operator" data-action="operator" data-value="/">÷</button>
        <button class="btn operator" data-action="operator" data-value="*">×</button>
        <button class="btn operator" data-action="operator" data-value="-">-</button>
        
        <button class="btn number" data-action="number" data-value="7">7</button>
        <button class="btn number" data-action="number" data-value="8">8</button>
        <button class="btn number" data-action="number" data-value="9">9</button>
        <button class="btn operator" data-action="operator" data-value="+">+</button>
        
        <button class="btn number" data-action="number" data-value="4">4</button>
        <button class="btn number" data-action="number" data-value="5">5</button>
        <button class="btn number" data-action="number" data-value="6">6</button>
        <button class="btn equals" data-action="equals" rowspan="2">=</button>
        
        <button class="btn number" data-action="number" data-value="1">1</button>
        <button class="btn number" data-action="number" data-value="2">2</button>
        <button class="btn number" data-action="number" data-value="3">3</button>
        
        <button class="btn number zero" data-action="number" data-value="0">0</button>
        <button class="btn number" data-action="number" data-value=".">.</button>
    </div>
</div>
```

#### JavaScript:
```javascript
class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewNumber = false;
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        // Mouse events
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleButtonClick(e.target);
            });
        });
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            this.handleKeyPress(e);
        });
        
        // เพิ่ม visual feedback
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('mousedown', () => {
                button.classList.add('pressed');
            });
            
            button.addEventListener('mouseup', () => {
                button.classList.remove('pressed');
            });
        });
    }
    
    handleButtonClick(button) {
        const action = button.dataset.action;
        const value = button.dataset.value;
        
        switch (action) {
            case 'number':
                this.inputNumber(value);
                break;
            case 'operator':
                this.inputOperator(value);
                break;
            case 'equals':
                this.calculate();
                break;
            case 'clear':
                this.clear();
                break;
        }
        
        this.updateDisplay();
    }
    
    handleKeyPress(event) {
        const key = event.key;
        
        // ป้องกันการพิมพ์ใน input
        if (event.target === this.display) {
            event.preventDefault();
        }
        
        if ('0123456789.'.includes(key)) {
            this.inputNumber(key);
        } else if ('+-*/'.includes(key)) {
            this.inputOperator(key);
        } else if (key === 'Enter' || key === '=') {
            event.preventDefault();
            this.calculate();
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            this.clear();
        } else if (key === 'Backspace') {
            this.backspace();
        }
        
        this.updateDisplay();
        
        // Visual feedback สำหรับ keyboard
        this.highlightKey(key);
    }
    
    inputNumber(num) {
        if (this.waitingForNewNumber) {
            this.currentValue = num;
            this.waitingForNewNumber = false;
        } else {
            if (this.currentValue === '0') {
                this.currentValue = num;
            } else {
                this.currentValue += num;
            }
        }
    }
    
    inputOperator(nextOperator) {
        const inputValue = parseFloat(this.currentValue);
        
        if (this.previousValue === null) {
            this.previousValue = inputValue;
        } else if (this.operator) {
            const currentValue = this.previousValue || 0;
            const newValue = this.performCalculation(currentValue, inputValue, this.operator);
            
            this.currentValue = String(newValue);
            this.previousValue = newValue;
        }
        
        this.waitingForNewNumber = true;
        this.operator = nextOperator;
    }
    
    calculate() {
        const inputValue = parseFloat(this.currentValue);
        
        if (this.previousValue !== null && this.operator) {
            const newValue = this.performCalculation(this.previousValue, inputValue, this.operator);
            this.currentValue = String(newValue);
            this.previousValue = null;
            this.operator = null;
            this.waitingForNewNumber = true;
        }
    }
    
    performCalculation(firstValue, secondValue, operator) {
        switch (operator) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '*':
                return firstValue * secondValue;
            case '/':
                return firstValue / secondValue;
            default:
                return secondValue;
        }
    }
    
    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewNumber = false;
    }
    
    backspace() {
        if (this.currentValue.length > 1) {
            this.currentValue = this.currentValue.slice(0, -1);
        } else {
            this.currentValue = '0';
        }
    }
    
    updateDisplay() {
        this.display.value = this.currentValue;
    }
    
    highlightKey(key) {
        // หา button ที่ตรงกับ key ที่กด
        let button = null;
        
        if ('0123456789.'.includes(key)) {
            button = document.querySelector(`[data-value="${key}"]`);
        } else if (key === '+' || key === '-') {
            button = document.querySelector(`[data-value="${key}"]`);
        } else if (key === '*') {
            button = document.querySelector(`[data-value="*"]`);
        } else if (key === '/') {
            button = document.querySelector(`[data-value="/"]`);
        } else if (key === 'Enter' || key === '=') {
            button = document.querySelector(`[data-action="equals"]`);
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            button = document.querySelector(`[data-action="clear"]`);
        }
        
        if (button) {
            button.classList.add('pressed');
            setTimeout(() => {
                button.classList.remove('pressed');
            }, 150);
        }
    }
}

// เริ่มต้น Calculator
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
```

**หยุด 20 นาที - ทำไปด้วยกัน!**

---

## Slide 14: Touch Events สำหรับ Mobile 📱

### Touch Events หลัก:
```javascript
let element = document.getElementById('touchDemo');

// เมื่อเริ่มแตะ
element.addEventListener('touchstart', function(event) {
    event.preventDefault(); // ป้องกัน default behavior
    
    let touch = event.touches[0]; // แตะแรก
    console.log('Touch Start:', touch.clientX, touch.clientY);
    
    this.style.backgroundColor = 'lightblue';
});

// เมื่อแตะและลาก
element.addEventListener('touchmove', function(event) {
    event.preventDefault();
    
    let touch = event.touches[0];
    console.log('Touch Move:', touch.clientX, touch.clientY);
    
    // ย้าย element ตามการลาก
    this.style.transform = `translate(${touch.clientX - 50}px, ${touch.clientY - 50}px)`;
});

// เมื่อปล่อยการแตะ
element.addEventListener('touchend', function(event) {
    console.log('Touch End');
    this.style.backgroundColor = '';
    this.style.transform = '';
});

// Multi-touch
element.addEventListener('touchstart', function(event) {
    if (event.touches.length === 2) {
        console.log('Two fingers detected - pinch/zoom gesture');
    }
});
```

### การสร้าง Swipe Gesture:
```javascript
class SwipeDetector {
    constructor(element, callback) {
        this.element = element;
        this.callback = callback;
        this.startX = 0;
        this.startY = 0;
        this.minSwipeDistance = 50;
        
        this.initEvents();
    }
    
    initEvents() {
        this.element.addEventListener('touchstart', (e) => {
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
        });
        
        this.element.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - this.startX;
            const deltaY = endY - this.startY;
            
            // ตรวจสอบว่าเป็น swipe หรือแค่ tap
            if (Math.abs(deltaX) > this.minSwipeDistance || Math.abs(deltaY) > this.minSwipeDistance) {
                let direction;
                
                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    // Horizontal swipe
                    direction = deltaX > 0 ? 'right' : 'left';
                } else {
                    // Vertical swipe
                    direction = deltaY > 0 ? 'down' : 'up';
                }
                
                this.callback(direction, deltaX, deltaY);
            }
        });
    }
}

// การใช้งาน
let swipeArea = document.getElementById('swipeArea');
new SwipeDetector(swipeArea, (direction, deltaX, deltaY) => {
    console.log(`Swiped ${direction}`, {deltaX, deltaY});
    
    switch (direction) {
        case 'left':
            swipeArea.textContent = '← Swiped Left';
            break;
        case 'right':
            swipeArea.textContent = '→ Swiped Right';
            break;
        case 'up':
            swipeArea.textContent = '↑ Swiped Up';
            break;
        case 'down':
            swipeArea.textContent = '↓ Swiped Down';
            break;
    }
});
```

---

## Slide 15: Event Delegation - เทคนิคขั้นสูง 🎯

### ปัญหาของการเพิ่ม Event Listener ทีละตัว:
```html
<ul id="todoList">
    <li>งานที่ 1 <button class="delete">ลบ</button></li>
    <li>งานที่ 2 <button class="delete">ลบ</button></li>
    <li>งานที่ 3 <button class="delete">ลบ</button></li>
    <!-- อาจมีหลายร้อย items... -->
</ul>
```

```javascript
// ❌ วิธีที่ไม่ดี - เพิ่ม listener ทีละปุ่ม
document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});
// ปัญหา: ปุ่มใหม่ที่เพิ่มมาจะไม่มี event listener
```

### ✅ วิธีที่ดี - Event Delegation:
```javascript
document.getElementById('todoList').addEventListener('click', function(event) {
    // ตรวจสอบว่าคลิกที่ปุ่มลบหรือไม่
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});
```

### ข้อดีของ Event Delegation:
- **Performance ดี** - ใช้ listener เดียว
- **Dynamic Elements** - element ใหม่ทำงานได้ทันที
- **Memory Efficient** - ใช้ memory น้อย
- **Easy Maintenance** - จัดการง่าย

---

## Slide 16: ตัวอย่าง Event Delegation ขั้นสูง 💡

### สร้าง Dynamic Button System:
```html
<div id="buttonContainer">
    <button data-action="add" data-target="red">เพิ่มปุ่มแดง</button>
    <button data-action="add" data-target="blue">เพิ่มปุ่มน้ำเงิน</button>
    <div id="dynamicButtons"></div>
</div>
```

```javascript
class DynamicButtonManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.dynamicArea = document.getElementById('dynamicButtons');
        this.buttonCount = 0;
        
        this.initEventDelegation();
    }
    
    initEventDelegation() {
        // ใช้ event delegation สำหรับ container ทั้งหมด
        this.container.addEventListener('click', (event) => {
            const action = event.target.dataset.action;
            const target = event.target.dataset.target;
            
            switch (action) {
                case 'add':
                    this.addButton(target);
                    break;
                case 'remove':
                    this.removeButton(event.target);
                    break;
                case 'toggle':
                    this.toggleButton(event.target);
                    break;
            }
        });
        
        // Double-click event
        this.container.addEventListener('dblclick', (event) => {
            if (event.target.dataset.action === 'toggle') {
                this.animateButton(event.target);
            }
        });
    }
    
    addButton(color) {
        this.buttonCount++;
        
        const button = document.createElement('button');
        button.textContent = `${color} #${this.buttonCount}`;
        button.className = `dynamic-btn ${color}`;
        button.dataset.action = 'toggle';
        button.dataset.id = this.buttonCount;
        
        // เพิ่มปุ่มลบ
        const removeBtn = document.createElement('span');
        removeBtn.textContent = ' ×';
        removeBtn.className = 'remove-btn';
        removeBtn.dataset.action = 'remove';
        button.appendChild(removeBtn);
        
        this.dynamicArea.appendChild(button);
        
        // Animation เมื่อเพิ่ม
        button.style.opacity = '0';
        button.style.transform = 'scale(0)';
        
        requestAnimationFrame(() => {
            button.style.transition = 'all 0.3s ease';
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        });
    }
    
    removeButton(element) {
        const button = element.closest('.dynamic-btn');
        if (button) {
            button.style.transition = 'all 0.3s ease';
            button.style.opacity = '0';
            button.style.transform = 'scale(0)';
            
            setTimeout(() => {
                button.remove();
            }, 300);
        }
    }
    
    toggleButton(button) {
        button.classList.toggle('active');
        
        if (button.classList.contains('active')) {
            button.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
            console.log(`Button ${button.dataset.id} activated`);
        } else {
            button.style.boxShadow = '';
            console.log(`Button ${button.dataset.id} deactivated`);
        }
    }
    
    animateButton(button) {
        button.style.animation = 'bounce 0.5s ease';
        
        setTimeout(() => {
            button.style.animation = '';
        }, 500);
    }
}

// เริ่มต้นใช้งาน
const buttonManager = new DynamicButtonManager('buttonContainer');

// เพิ่ม CSS Animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
    }
    
    .dynamic-btn {
        margin: 5px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
    }
    
    .dynamic-btn.red { background-color: #ff6b6b; color: white; }
    .dynamic-btn.blue { background-color: #4ecdc4; color: white; }
    .dynamic-btn.active { transform: scale(1.1); }
    
    .remove-btn {
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        padding: 2px 5px;
        margin-left: 5px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);
```

---

## Slide 17: Custom Events - สร้าง Events เอง 🛠️

### การสร้างและส่ง Custom Events:
```javascript
// สร้าง Custom Event
function createCustomEvent(name, detail) {
    return new CustomEvent(name, {
        detail: detail,
        bubbles: true,
        cancelable: true
    });
}

// ตัวอย่าง: Shopping Cart Events
class ShoppingCart {
    constructor() {
        this.items = [];
        this.element = document.getElementById('cart');
    }
    
    addItem(product) {
        this.items.push(product);
        
        // ส่ง custom event
        const event = createCustomEvent('itemAdded', {
            product: product,
            totalItems: this.items.length,
            cartValue: this.calculateTotal()
        });
        
        this.element.dispatchEvent(event);
    }
    
    removeItem(productId) {
        const index = this.items.findIndex(item => item.id === productId);
        if (index > -1) {
            const removedItem = this.items.splice(index, 1)[0];
            
            const event = createCustomEvent('itemRemoved', {
                product: removedItem,
                totalItems: this.items.length,
                cartValue: this.calculateTotal()
            });
            
            this.element.dispatchEvent(event);
        }
    }
    
    calculateTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

// การฟัง Custom Events
const cart = new ShoppingCart();

cart.element.addEventListener('itemAdded', function(event) {
    console.log('สินค้าถูกเพิ่ม:', event.detail.product);
    
    // อัปเดต UI
    updateCartDisplay(event.detail);
    
    // แสดง notification
    showNotification(`เพิ่ม ${event.detail.product.name} ลงตะกร้าแล้ว`, 'success');
});

cart.element.addEventListener('itemRemoved', function(event) {
    console.log('สินค้าถูกลบ:', event.detail.product);
    
    updateCartDisplay(event.detail);
    showNotification(`ลบ ${event.detail.product.name} ออกจากตะกร้าแล้ว`, 'info');
});

function updateCartDisplay(detail) {
    document.getElementById('itemCount').textContent = detail.totalItems;
    document.getElementById('cartTotal').textContent = `฿${detail.cartValue}`;
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ทดสอบ
cart.addItem({id: 1, name: 'iPhone 15', price: 35000});
cart.addItem({id: 2, name: 'MacBook Pro', price: 65000});
```

---

## Slide 18: Window และ Document Events 🌐

### Page Lifecycle Events:
```javascript
// เมื่อ DOM โหลดเสร็จ (ไม่รอรูปภาพ)
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM พร้อมแล้ว');
    initializeApp();
});

// เมื่อทุกอย่างโหลดเสร็จ (รวมรูปภาพ)
window.addEventListener('load', function() {
    console.log('หน้าเว็บโหลดเสร็จทั้งหมด');
    hideLoadingSpinner();
});

// เมื่อจะออกจากหน้าเว็บ
window.addEventListener('beforeunload', function(event) {
    // แสดงคำเตือน (บางเบราว์เซอร์)
    event.preventDefault();
    event.returnValue = ''; // สำหรับ Chrome
    return 'คุณแน่ใจว่าต้องการออกจากหน้านี้?';
});

// เมื่อขนาดหน้าต่างเปลี่ยน
window.addEventListener('resize', function() {
    console.log('ขนาดหน้าต่าง:', window.innerWidth, 'x', window.innerHeight);
    
    // ปรับ layout สำหรับ responsive
    adjustLayoutForScreenSize();
});

// เมื่อเลื่อนหน้าจอ
window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    console.log('เลื่อนไป:', scrollPercent.toFixed(2) + '%');
    
    // แสดง scroll progress
    document.getElementById('scrollProgress').style.width = scrollPercent + '%';
    
    // แสดง/ซ่อน back-to-top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// เมื่อ focus หรือ blur หน้าเว็บ
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('ผู้ใช้เปลี่ยนไปแท็บอื่น');
        pauseAnimations();
    } else {
        console.log('ผู้ใช้กลับมาที่แท็บนี้');
        resumeAnimations();
    }
});

function initializeApp() {
    // เริ่มต้นแอป
}

function hideLoadingSpinner() {
    document.getElementById('loading').style.display = 'none';
}

function adjustLayoutForScreenSize() {
    const isMobile = window.innerWidth < 768;
    document.body.classList.toggle('mobile-layout', isMobile);
}

function pauseAnimations() {
    document.querySelectorAll('.animated').forEach(el => {
        el.style.animationPlayState = 'paused';
    });
}

function resumeAnimations() {
    document.querySelectorAll('.animated').forEach(el => {
        el.style.animationPlayState = 'running';
    });
}
```

---

## Slide 19: คำถาม 🤔

### ในการใช้ Event Delegation ถ้าคุณต้องการให้การคลิกที่ child element ไม่ส่งผลต่อ parent
### คุณควรใช้วิธีไหน?

A) `event.preventDefault()`
B) `event.stopPropagation()` 
C) `event.stopImmediatePropagation()`
D) `return false`

**สถานการณ์:**
```html
<div id="parent">
    <button id="child">ปุ่มลูก</button>
</div>
```

**คิด 30 วินาที...**

---

## Slide 20: เฉลย 🎯

### คำตอบ: B) `event.stopPropagation()`

```javascript
document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', function(event) {
    event.stopPropagation(); // หยุดการส่งต่อไปยัง parent
    console.log('เฉพาะ Child clicked');
});
```

### เหตุผล:
- **preventDefault()** หยุดพฤติกรรมเริ่มต้น (เช่น การส่งฟอร์ม)
- **stopPropagation()** หยุดการส่งต่อ event ไปยัง parent
- **stopImmediatePropagation()** หยุดทั้ง propagation และ listener อื่นๆ บน element เดียวกัน
- **return false** ทำได้เฉพาะใน jQuery

### การใช้งานจริง:
```javascript
// Modal ที่ปิดเมื่อคลิกข้างนอก แต่ไม่ปิดเมื่อคลิกใน content
document.getElementById('modal').addEventListener('click', function() {
    closeModal(); // ปิด modal เมื่อคลิก backdrop
});

document.getElementById('modalContent').addEventListener('click', function(event) {
    event.stopPropagation(); // ไม่ให้ปิด modal เมื่อคลิก content
});
```

---

## Slide 21: Keyboard Shortcuts และ Hotkeys ⌨️

### สร้างระบบ Keyboard Shortcuts:
```javascript
class KeyboardShortcuts {
    constructor() {
        this.shortcuts = new Map();
        this.init();
    }
    
    init() {
        document.addEventListener('keydown', (event) => {
            const key = this.getKeyCombo(event);
            
            if (this.shortcuts.has(key)) {
                event.preventDefault();
                const action = this.shortcuts.get(key);
                action.callback(event);
                
                // แสดง feedback
                this.showShortcutFeedback(action.description);
            }
        });
    }
    
    getKeyCombo(event) {
        const parts = [];
        
        if (event.ctrlKey) parts.push('Ctrl');
        if (event.altKey) parts.push('Alt');
        if (event.shiftKey) parts.push('Shift');
        if (event.metaKey) parts.push('Meta'); // Cmd on Mac
        
        // เพิ่ม key หลัก
        if (event.key !== 'Control' && event.key !== 'Alt' && 
            event.key !== 'Shift' && event.key !== 'Meta') {
            parts.push(event.key);
        }
        
        return parts.join('+');
    }
    
    addShortcut(keys, description, callback) {
        this.shortcuts.set(keys, {
            description: description,
            callback: callback
        });
    }
    
    removeShortcut(keys) {
        this.shortcuts.delete(keys);
    }
    
    showShortcutFeedback(description) {
        const feedback = document.createElement('div');
        feedback.className = 'shortcut-feedback';
        feedback.textContent = description;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => feedback.remove(), 300);
        }, 1500);
    }
    
    getShortcutList() {
        const list = [];
        for (let [keys, action] of this.shortcuts) {
            list.push({
                keys: keys,
                description: action.description
            });
        }
        return list;
    }
}

// การใช้งาน
const shortcuts = new KeyboardShortcuts();

// เพิ่ม shortcuts
shortcuts.addShortcut('Ctrl+s', 'บันทึก', function() {
    saveDocument();
});

shortcuts.addShortcut('Ctrl+z', 'ย้อนกลับ', function() {
    undo();
});

shortcuts.addShortcut('Ctrl+y', 'ทำซ้ำ', function() {
    redo();
});

shortcuts.addShortcut('Ctrl+n', 'สร้างใหม่', function() {
    createNewDocument();
});

shortcuts.addShortcut('F1', 'ความช่วยเหลือ', function() {
    showHelp();
});

shortcuts.addShortcut('Escape', 'ปิด Modal', function() {
    closeAnyOpenModal();
});

// Shortcuts สำหรับการนำทาง
shortcuts.addShortcut('Ctrl+1', 'ไปหน้าแรก', function() {
    navigateToSection('home');
});

shortcuts.addShortcut('Ctrl+2', 'ไปหน้าเกี่ยวกับ', function() {
    navigateToSection('about');
});

// Functions ที่ใช้กับ shortcuts
function saveDocument() {
    console.log('กำลังบันทึก...');
    // Logic สำหรับบันทึก
}

function undo() {
    console.log('ย้อนกลับ');
    // Logic สำหรับ undo
}

function redo() {
    console.log('ทำซ้ำ');
    // Logic สำหรับ redo
}

function createNewDocument() {
    console.log('สร้างเอกสารใหม่');
    // Logic สำหรับสร้างใหม่
}

function showHelp() {
    const helpModal = document.getElementById('helpModal');
    helpModal.style.display = 'block';
    
    // แสดงรายการ shortcuts
    const shortcutList = shortcuts.getShortcutList();
    const helpContent = document.getElementById('helpContent');
    
    helpContent.innerHTML = '<h3>Keyboard Shortcuts:</h3>';
    shortcutList.forEach(shortcut => {
        helpContent.innerHTML += `<p><kbd>${shortcut.keys}</kbd> - ${shortcut.description}</p>`;
    });
}

function closeAnyOpenModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function navigateToSection(section) {
    document.getElementById(section).scrollIntoView({
        behavior: 'smooth'
    });
}

// CSS สำหรับ feedback
const style = document.createElement('style');
style.textContent = `
    .shortcut-feedback {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .shortcut-feedback.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    kbd {
        background: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 2px 4px;
        font-family: monospace;
        font-size: 0.9em;
    }
`;
document.head.appendChild(style);
```

---

## Slide 22: Drag and Drop API 🎪

### สร้าง Drag and Drop Interface:
```html
<div class="drag-drop-container">
    <div class="draggable-items">
        <div class="item" draggable="true" data-id="1">รายการ 1</div>
        <div class="item" draggable="true" data-id="2">รายการ 2</div>
        <div class="item" draggable="true" data-id="3">รายการ 3</div>
    </div>
    
    <div class="drop-zones">
        <div class="drop-zone" data-zone="todo">รอทำ</div>
        <div class="drop-zone" data-zone="doing">กำลังทำ</div>
        <div class="drop-zone" data-zone="done">เสร็จแล้ว</div>
    </div>
</div>
```

```javascript
class DragDropManager {
    constructor() {
        this.draggedElement = null;
        this.init();
    }
    
    init() {
        // เพิ่ม event listeners สำหรับ draggable items
        document.querySelectorAll('.item').forEach(item => {
            item.addEventListener('dragstart', (e) => this.handleDragStart(e));
            item.addEventListener('dragend', (e) => this.handleDragEnd(e));
        });
        
        // เพิ่ม event listeners สำหรับ drop zones
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.addEventListener('dragover', (e) => this.handleDragOver(e));
            zone.addEventListener('dragenter', (e) => this.handleDragEnter(e));
            zone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            zone.addEventListener('drop', (e) => this.handleDrop(e));
        });
    }
    
    handleDragStart(event) {
        this.draggedElement = event.target;
        
        // เพิ่มข้อมูลใน dataTransfer
        event.dataTransfer.setData('text/plain', event.target.dataset.id);
        event.dataTransfer.effectAllowed = 'move';
        
        // เพิ่ม visual feedback
        event.target.classList.add('dragging');
        
        console.log('เริ่มลาก:', event.target.textContent);
    }
    
    handleDragEnd(event) {
        // ลบ visual feedback
        event.target.classList.remove('dragging');
        this.draggedElement = null;
        
        // ลบ highlight จาก drop zones ทั้งหมด
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drag-over');
        });
        
        console.log('จบการลาก');
    }
    
    handleDragOver(event) {
        event.preventDefault(); // อนุญาตให้ drop ได้
        event.dataTransfer.dropEffect = 'move';
    }
    
    handleDragEnter(event) {
        event.preventDefault();
        
        if (event.target.classList.contains('drop-zone')) {
            event.target.classList.add('drag-over');
        }
    }
    
    handleDragLeave(event) {
        if (event.target.classList.contains('drop-zone')) {
            // ตรวจสอบว่าเมาส์ออกจาก zone จริงๆ
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX;
            const y = event.clientY;
            
            if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
                event.target.classList.remove('drag-over');
            }
        }
    }
    
    handleDrop(event) {
        event.preventDefault();
        
        const dropZone = event.target.closest('.drop-zone');
        if (dropZone && this.draggedElement) {
            const itemId = event.dataTransfer.getData('text/plain');
            const zoneName = dropZone.dataset.zone;
            
            // ย้าย element ไปยัง drop zone
            this.moveItemToZone(this.draggedElement, dropZone);
            
            // ลบ highlight
            dropZone.classList.remove('drag-over');
            
            console.log(`ย้ายรายการ ${itemId} ไปยัง ${zoneName}`);
            
            // ส่ง custom event
            this.dispatchMoveEvent(itemId, zoneName);
        }
    }
    
    moveItemToZone(item, zone) {
        // สร้าง container สำหรับ items ใน zone ถ้ายังไม่มี
        let itemsContainer = zone.querySelector('.zone-items');
        if (!itemsContainer) {
            itemsContainer = document.createElement('div');
            itemsContainer.className = 'zone-items';
            zone.appendChild(itemsContainer);
        }
        
        // ย้าย item
        itemsContainer.appendChild(item);
        
        // เพิ่ม animation
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 100);
    }
    
    dispatchMoveEvent(itemId, zoneName) {
        const event = new CustomEvent('itemMoved', {
            detail: {
                itemId: itemId,
                newZone: zoneName,
                timestamp: new Date()
            }
        });
        
        document.dispatchEvent(event);
    }
}

// การใช้งาน
const dragDropManager = new DragDropManager();

// ฟัง custom event
document.addEventListener('itemMoved', function(event) {
    const { itemId, newZone, timestamp } = event.detail;
    console.log(`รายการ ${itemId} ถูกย้ายไปยัง ${newZone} เมื่อ ${timestamp}`);
    
    // อัปเดต backend หรือ local storage
    updateItemStatus(itemId, newZone);
});

function updateItemStatus(itemId, status) {
    // บันทึกลง localStorage
    let items = JSON.parse(localStorage.getItem('kanbanItems') || '{}');
    items[itemId] = {
        id: itemId,
        status: status,
        updatedAt: new Date().toISOString()
    };
    localStorage.setItem('kanbanItems', JSON.stringify(items));
}

// CSS สำหรับ Drag and Drop
const dragDropStyles = document.createElement('style');
dragDropStyles.textContent = `
    .drag-drop-container {
        display: flex;
        gap: 20px;
        padding: 20px;
    }
    
    .draggable-items, .drop-zones {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .item {
        padding: 15px;
        background: #f8f9fa;
        border: 2px solid #dee2e6;
        border-radius: 5px;
        cursor: move;
        user-select: none;
        transition: all 0.2s ease;
    }
    
    .item:hover {
        background: #e9ecef;
        border-color: #adb5bd;
    }
    
    .item.dragging {
        opacity: 0.5;
        transform: rotate(5deg);
    }
    
    .drop-zone {
        min-height: 100px;
        padding: 20px;
        border: 2px dashed #ccc;
        border-radius: 10px;
        background: #f8f9fa;
        text-align: center;
        font-weight: bold;
        color: #6c757d;
        transition: all 0.3s ease;
    }
    
    .drop-zone.drag-over {
        border-color: #007bff;
        background: #e3f2fd;
        color: #007bff;
        transform: scale(1.05);
    }
    
    .zone-items {
        margin-top: 10px;
    }
    
    .zone-items .item {
        margin-bottom: 5px;
        cursor: default;
    }
`;
document.head.appendChild(dragDropStyles);
```

---

## Slide 23: Demo Time - Image Gallery with Keyboard! 🖼️

### สร้าง Image Gallery ที่ควบคุมได้ด้วยเมาส์และคีย์บอร์ด:

#### HTML:
```html
<div class="gallery-container">
    <div class="gallery-header">
        <h2>Image Gallery</h2>
        <div class="gallery-controls">
            <button id="playBtn">▶️ เล่น</button>
            <button id="pauseBtn">⏸️ หยุด</button>
            <span class="image-counter">1 / 6</span>
        </div>
    </div>
    
    <div class="gallery-main">
        <button class="nav-btn prev" id="prevBtn">❮</button>
        
        <div class="gallery-viewport">
            <div class="gallery-track" id="galleryTrack">
                <img src="https://picsum.photos/800/600?random=1" alt="Image 1" class="gallery-image active">
                <img src="https://picsum.photos/800/600?random=2" alt="Image 2" class="gallery-image">
                <img src="https://picsum.photos/800/600?random=3" alt="Image 3" class="gallery-image">
                <img src="https://picsum.photos/800/600?random=4" alt="Image 4" class="gallery-image">
                <img src="https://picsum.photos/800/600?random=5" alt="Image 5" class="gallery-image">
                <img src="https://picsum.photos/800/600?random=6" alt="Image 6" class="gallery-image">
            </div>
        </div>
        
        <button class="nav-btn next" id="nextBtn">❯</button>
    </div>
    
    <div class="gallery-thumbnails" id="thumbnails">
        <!-- Thumbnails จะถูกสร้างด้วย JavaScript -->
    </div>
    
    <div class="gallery-info">
        <p>🎮 <strong>Controls:</strong></p>
        <p>← → : ก่อน/หลัง | Space: เล่น/หยุด | Esc: ปิด | 1-6: ไปรูปที่</p>
    </div>
</div>

<!-- Modal สำหรับดูรูปเต็มจอ -->
<div id="imageModal" class="modal">
    <div class="modal-content">
        <span class="close" id="closeModal">&times;</span>
        <img id="modalImage" src="" alt="">
        <div class="modal-nav">
            <button id="modalPrev">❮ ก่อน</button>
            <button id="modalNext">หลัง ❯</button>
        </div>
    </div>
</div>
```

#### JavaScript:
```javascript
class ImageGallery {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.images = document.querySelectorAll('.gallery-image');
        this.track = document.getElementById('galleryTrack');
        this.thumbnails = document.getElementById('thumbnails');
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        
        this.currentIndex = 0;
        this.isPlaying = false;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 3000; // 3 วินาที
        
        this.init();
    }
    
    init() {
        this.createThumbnails();
        this.bindEvents();
        this.updateDisplay();
        this.updateCounter();
    }
    
    createThumbnails() {
        this.images.forEach((img, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.dataset.index = index;
            
            const thumbImg = document.createElement('img');
            thumbImg.src = img.src;
            thumbImg.alt = `Thumbnail ${index + 1}`;
            
            thumb.appendChild(thumbImg);
            this.thumbnails.appendChild(thumb);
        });
    }
    
    bindEvents() {
        // Navigation buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.prevImage());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextImage());
        
        // Play/Pause buttons
        document.getElementById('playBtn').addEventListener('click', () => this.play());
        document.getElementById('pauseBtn').addEventListener('click', () => this.pause());
        
        // Thumbnail clicks
        this.thumbnails.addEventListener('click', (e) => {
            const thumb = e.target.closest('.thumbnail');
            if (thumb) {
                const index = parseInt(thumb.dataset.index);
                this.goToImage(index);
            }
        });
        
        // Double-click to open modal
        this.track.addEventListener('dblclick', () => {
            this.openModal();
        });
        
        // Keyboard events
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Modal events
        document.getElementById('closeModal').addEventListener('click', () => this.closeModal());
        document.getElementById('modalPrev').addEventListener('click', () => {
            this.prevImage();
            this.updateModalImage();
        });
        document.getElementById('modalNext').addEventListener('click', () => {
            this.nextImage();
            this.updateModalImage();
        });
        
        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Touch events for mobile
        this.initTouchEvents();
        
        // Mouse wheel navigation
        this.track.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                this.nextImage();
            } else {
                this.prevImage();
            }
        });
    }
    
    initTouchEvents() {
        let startX = 0;
        let startY = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        this.track.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Check if it's a horizontal swipe
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.prevImage();
                } else {
                    this.nextImage();
                }
            }
        });
    }
    
    handleKeyPress(event) {
        // ป้องกันไม่ให้ทำงานเมื่อพิมพ์ใน input
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                this.prevImage();
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.nextImage();
                break;
            case ' ':
                event.preventDefault();
                this.togglePlayPause();
                break;
            case 'Escape':
                if (this.modal.style.display === 'block') {
                    this.closeModal();
                }
                break;
            case 'Enter':
                this.openModal();
                break;
            case 'Home':
                this.goToImage(0);
                break;
            case 'End':
                this.goToImage(this.images.length - 1);
                break;
            default:
                // ตัวเลข 1-9 สำหรับไปรูปที่ต้องการ
                const num = parseInt(event.key);
                if (num >= 1 && num <= this.images.length) {
                    this.goToImage(num - 1);
                }
                break;
        }
    }
    
    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateDisplay();
        this.showNavFeedback('←');
    }
    
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateDisplay();
        this.showNavFeedback('→');
    }
    
    goToImage(index) {
        if (index >= 0 && index < this.images.length) {
            this.currentIndex = index;
            this.updateDisplay();
        }
    }
    
    updateDisplay() {
        // อัปเดตรูปภาพ
        this.images.forEach((img, index) => {
            img.classList.toggle('active', index === this.currentIndex);
        });
        
        // อัปเดต thumbnails
        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentIndex);
        });
        
        // เลื่อน track
        const translateX = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        this.updateCounter();
    }
    
    updateCounter() {
        document.querySelector('.image-counter').textContent = 
            `${this.currentIndex + 1} / ${this.images.length}`;
    }
    
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.autoPlayInterval = setInterval(() => {
                this.nextImage();
            }, this.autoPlayDelay);
            
            document.getElementById('playBtn').style.display = 'none';
            document.getElementById('pauseBtn').style.display = 'inline-block';
        }
    }
    
    pause() {
        if (this.isPlaying) {
            this.isPlaying = false;
            clearInterval(this.autoPlayInterval);
            
            document.getElementById('playBtn').style.display = 'inline-block';
            document.getElementById('pauseBtn').style.display = 'none';
        }
    }
    
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    openModal() {
        this.modal.style.display = 'block';
        this.updateModalImage();
        document.body.style.overflow = 'hidden'; // ป้องกันการ scroll
    }
    
    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    updateModalImage() {
        this.modalImage.src = this.images[this.currentIndex].src;
        this.modalImage.alt = this.images[this.currentIndex].alt;
    }
    
    showNavFeedback(direction) {
        const feedback = document.createElement('div');
        feedback.className = 'nav-feedback';
        feedback.textContent = direction;
        
        this.container.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.remove();
        }, 500);
    }
    
    // Public methods สำหรับควบคุมจากภายนอก
    getCurrentIndex() {
        return this.currentIndex;
    }
    
    setAutoPlayDelay(delay) {
        this.autoPlayDelay = delay;
        if (this.isPlaying) {
            this.pause();
            this.play();
        }
    }
}

// CSS สำหรับ Gallery
const galleryStyles = document.createElement('style');
galleryStyles.textContent = `
    .gallery-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }
    
    .gallery-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .gallery-controls {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .gallery-controls button {
        padding: 8px 12px;
        border: none;
        border-radius: 5px;
        background: #007bff;
        color: white;
        cursor: pointer;
        transition: background 0.3s ease;
    }
    
    .gallery-controls button:hover {
        background: #0056b3;
    }
    
    .gallery-main {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
    }
    
    .gallery-viewport {
        flex: 1;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        position: relative;
    }
    
    .gallery-track {
        display: flex;
        transition: transform 0.5s ease;
    }
    
    .gallery-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        flex-shrink: 0;
        cursor: pointer;
    }
    
    .nav-btn {
        padding: 15px 20px;
        background: rgba(0,0,0,0.7);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        transition: all 0.3s ease;
    }
    
    .nav-btn:hover {
        background: rgba(0,0,0,0.9);
        transform: scale(1.1);
    }
    
    .gallery-thumbnails {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-bottom: 20px;
    }
    
    .thumbnail {
        width: 80px;
        height: 60px;
        border: 3px solid transparent;
        border-radius: 5px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .thumbnail:hover {
        border-color: #007bff;
        transform: scale(1.05);
    }
    
    .thumbnail.active {
        border-color: #007bff;
        box-shadow: 0 0 10px rgba(0,123,255,0.5);
    }
    
    .thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .gallery-info {
        text-align: center;
        background: #f8f9fa;
        padding: 15px;
        border-radius: 5px;
        color: #6c757d;
    }
    
    .nav-feedback {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 20px;
        border-radius: 50%;
        font-size: 24px;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 10;
    }
    
    .nav-feedback.show {
        opacity: 1;
    }
    
    /* Modal Styles */
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
    }
    
    .modal-content {
        position: relative;
        margin: auto;
        padding: 20px;
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .close {
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        z-index: 1001;
    }
    
    .close:hover {
        color: #ccc;
    }
    
    #modalImage {
        max-width: 100%;
        max-height: 80%;
        object-fit: contain;
    }
    
    .modal-nav {
        margin-top: 20px;
        display: flex;
        gap: 20px;
    }
    
    .modal-nav button {
        padding: 10px 20px;
        background: rgba(255,255,255,0.2);
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .modal-nav button:hover {
        background: rgba(255,255,255,0.3);
    }
    
    /* Responsive */
    @media (max-width: 768px) {
        .gallery-main {
            flex-direction: column;
        }
        
        .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
        }
        
        .nav-btn.prev {
            left: 10px;
        }
        
        .nav-btn.next {
            right: 10px;
        }
        
        .gallery-thumbnails {
            overflow-x: auto;
            justify-content: flex-start;
            padding: 0 10px;
        }
    }
`;
document.head.appendChild(galleryStyles);

// เริ่มต้น Gallery
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new ImageGallery('galleryContainer');
    
    // เพิ่มฟังก์ชันพิเศษ
    window.gallery = gallery; // สำหรับ debug
});
```

**หยุด 25 นาที - ทำไปด้วยกัน!**

---

## Slide 24: Performance และ Best Practices 🚀

### การจัดการ Event Listeners อย่างมีประสิทธิภาพ:

#### 1. การลบ Event Listeners เมื่อไม่ใช้:
```javascript
class PerformantEventManager {
    constructor() {
        this.listeners = new Map();
        this.abortController = new AbortController();
    }
    
    // เพิ่ม listener พร้อม tracking
    addListener(element, event, handler, options = {}) {
        const listenerId = `${element.id || 'anonymous'}-${event}-${Date.now()}`;
        
        // ใช้ AbortController สำหรับการลบ listeners หลายตัวพร้อมกัน
        const signal = this.abortController.signal;
        element.addEventListener(event, handler, {
            ...options,
            signal: signal
        });
        
        this.listeners.set(listenerId, {
            element: element,
            event: event,
            handler: handler
        });
        
        return listenerId;
    }
    
    // ลบ listener เฉพาะ
    removeListener(listenerId) {
        const listener = this.listeners.get(listenerId);
        if (listener) {
            listener.element.removeEventListener(listener.event, listener.handler);
            this.listeners.delete(listenerId);
        }
    }
    
    // ลบ listeners ทั้งหมด
    removeAllListeners() {
        this.abortController.abort();
        this.listeners.clear();
        this.abortController = new AbortController();
    }
    
    // ดูจำนวน listeners ที่ยังใช้งานอยู่
    getActiveListenersCount() {
        return this.listeners.size;
    }
}

// การใช้งาน
const eventManager = new PerformantEventManager();

// เพิ่ม listeners
const clickListenerId = eventManager.addListener(
    document.getElementById('myButton'),
    'click',
    handleClick
);

// ลบเมื่อไม่ใช้
eventManager.removeListener(clickListenerId);
```

#### 2. Throttling และ Debouncing:
```javascript
// Throttle - จำกัดการเรียกใช้ฟังก์ชัน
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce - รอให้หยุดเรียกใช้แล้วค่อยทำงาน
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// การใช้งาน
window.addEventListener('scroll', throttle(function() {
    console.log('Scrolling...');
    updateScrollPosition();
}, 100)); // ทำงานได้มากที่สุด 10 ครั้งต่อวินาที

document.getElementById('searchInput').addEventListener('input', debounce(function() {
    performSearch(this.value);
}, 300)); // รอ 300ms หลังจากหยุดพิมพ์
```

#### 3. Passive Event Listeners:
```javascript
// สำหรับ touch และ wheel events ที่ไม่ต้องการ preventDefault
element.addEventListener('touchstart', handleTouch, { passive: true });
element.addEventListener('wheel', handleWheel, { passive: true });

// ข้อดี: Browser สามารถ optimize performance ได้ดีกว่า
// ข้อเสีย: ไม่สามารถเรียก preventDefault() ได้
```

---

## Slide 25: Accessibility กับ Events ♿

### การทำให้ Events รองรับผู้พิการ:

```javascript
class AccessibleComponent {
    constructor(element) {
        this.element = element;
        this.init();
    }
    
    init() {
        // เพิ่ม ARIA attributes
        this.element.setAttribute('role', 'button');
        this.element.setAttribute('tabindex', '0');
        this.element.setAttribute('aria-label', 'ปุ่มที่สามารถกดได้');
        
        // รองรับทั้ง mouse และ keyboard
        this.element.addEventListener('click', (e) => this.handleActivation(e));
        this.element.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Focus management
        this.element.addEventListener('focus', (e) => this.handleFocus(e));
        this.element.addEventListener('blur', (e) => this.handleBlur(e));
    }
    
    handleKeydown(event) {
        // Space และ Enter สำหรับ activation
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.handleActivation(event);
        }
    }
    
    handleActivation(event) {
        // การทำงานเมื่อ component ถูก activate
        console.log('Component activated');
        
        // แจ้ง screen reader
        this.announceToScreenReader('ปุ่มถูกกด');
        
        // Visual feedback
        this.element.classList.add('activated');
        setTimeout(() => {
            this.element.classList.remove('activated');
        }, 200);
    }
    
    handleFocus(event) {
        this.element.classList.add('focused');
        // อัปเดต ARIA state
        this.element.setAttribute('aria-pressed', 'false');
    }
    
    handleBlur(event) {
        this.element.classList.remove('focused');
    }
    
    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.position = 'absolute';
        announcement.style.left = '-9999px';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // เปิด/ปิดการทำงาน
    setEnabled(enabled) {
        if (enabled) {
            this.element.removeAttribute('aria-disabled');
            this.element.setAttribute('tabindex', '0');
        } else {
            this.element.setAttribute('aria-disabled', 'true');
            this.element.setAttribute('tabindex', '-1');
        }
    }
}

// การใช้งาน
document.querySelectorAll('.accessible-button').forEach(button => {
    new AccessibleComponent(button);
});

// Focus management สำหรับ modal
class AccessibleModal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.focusableElements = null;
        this.firstFocusable = null;
        this.lastFocusable = null;
        this.previousActiveElement = null;
        
        this.init();
    }
    
    init() {
        this.modal.addEventListener('keydown', (e) => this.handleKeydown(e));
    }
    
    open() {
        // จำ element ที่ focus อยู่ก่อนหน้า
        this.previousActiveElement = document.activeElement;
        
        // แสดง modal
        this.modal.style.display = 'block';
        this.modal.setAttribute('aria-hidden', 'false');
        
        // หา focusable elements
        this.updateFocusableElements();
        
        // Focus ไปที่ element แรก
        if (this.firstFocusable) {
            this.firstFocusable.focus();
        }
        
        // ป้องกันการ scroll
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.modal.style.display = 'none';
        this.modal.setAttribute('aria-hidden', 'true');
        
        // คืน focus ให้ element เดิม
        if (this.previousActiveElement) {
            this.previousActiveElement.focus();
        }
        
        document.body.style.overflow = 'auto';
    }
    
    updateFocusableElements() {
        const focusableSelectors = [
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            'a[href]',
            '[tabindex]:not([tabindex="-1"])'
        ];
        
        this.focusableElements = this.modal.querySelectorAll(
            focusableSelectors.join(', ')
        );
        
        this.firstFocusable = this.focusableElements[0];
        this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
    }
    
    handleKeydown(event) {
        if (event.key === 'Escape') {
            this.close();
        }
        
        if (event.key === 'Tab') {
            // Trap focus ใน modal
            if (event.shiftKey) {
                // Shift + Tab (ย้อนกลับ)
                if (document.activeElement === this.firstFocusable) {
                    event.preventDefault();
                    this.lastFocusable.focus();
                }
            } else {
                // Tab (ไปข้างหน้า)
                if (document.activeElement === this.lastFocusable) {
                    event.preventDefault();
                    this.firstFocusable.focus();
                }
            }
        }
    }
}
```

---

## Slide 26: คำถาม 🤔

### ถ้าคุณมี Search Input ที่ต้องการค้นหาขณะพิมพ์ 
### แต่ไม่อยากให้ค้นหาบ่อยเกินไป คุณจะใช้เทคนิคไหน?

A) Throttling - จำกัดการค้นหาไม่เกิน X ครั้งต่อวินาที
B) Debouncing - รอให้หยุดพิมพ์ X มิลลิวินาทีแล้วค่อยค้นหา  
C) setTimeout - ใช้ timer ธรรมดา
D) setInterval - ตั้งเวลาค้นหาเป็นระยะ

**คิด 30 วินาที...**

---

## Slide 27: เฉลย 🎯

### คำตอบ: B) Debouncing

```javascript
// ✅ วิธีที่ดีที่สุดสำหรับ Search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const searchInput = document.getElementById('search');
const debouncedSearch = debounce(function(query) {
    console.log('ค้นหา:', query);
    performSearch(query);
}, 300); // รอ 300ms หลังจากหยุดพิมพ์

searchInput.addEventListener('input', function() {
    debouncedSearch(this.value);
});
```

### เหตุผล:
- **Debouncing** เหมาะกับ Search เพราะรอให้ผู้ใช้พิมพ์เสร็จก่อน
- **Throttling** เหมาะกับ Scroll หรือ Resize events
- ลดการเรียก API และ Performance ดีขึ้น
- ประสบการณ์ผู้ใช้ดีกว่า (ไม่ค้นหาทุกตัวอักษร)

### เปรียบเทียบ:
```javascript
// Throttling - เหมาะกับ scroll
window.addEventListener('scroll', throttle(updateScrollPosition, 100));

// Debouncing - เหมาะกับ search
searchInput.addEventListener('input', debounce(performSearch, 300));
```

---

## Slide 28: Event Bubbling และ Capturing 🎈

### การไหลของ Events ใน DOM Tree:

```html
<div id="grandparent">
    <div id="parent">
        <button id="child">คลิกฉัน</button>
    </div>
</div>
```

```javascript
// Phase 1: Capturing (จากบนลงล่าง)
document.getElementById('grandparent').addEventListener('click', function() {
    console.log('1. Grandparent - Capturing');
}, true); // true = capturing phase

document.getElementById('parent').addEventListener('click', function() {
    console.log('2. Parent - Capturing');
}, true);

// Phase 2: Target (element ที่ถูกคลิกจริงๆ)
document.getElementById('child').addEventListener('click', function() {
    console.log('3. Child - Target');
});

// Phase 3: Bubbling (จากล่างขึ้นบน) - default
document.getElementById('parent').addEventListener('click', function() {
    console.log('4. Parent - Bubbling');
});

document.getElementById('grandparent').addEventListener('click', function() {
    console.log('5. Grandparent - Bubbling');
});

// ผลลัพธ์เมื่อคลิก button:
// 1. Grandparent - Capturing
// 2. Parent - Capturing  
// 3. Child - Target
// 4. Parent - Bubbling
// 5. Grandparent - Bubbling
```

### การใช้งานจริง - Modal Overlay:
```javascript
// ปิด modal เมื่อคลิกข้างนอก
document.getElementById('modalOverlay').addEventListener('click', function() {
    closeModal();
});

// ไม่ให้ปิด modal เมื่อคลิกใน content
document.getElementById('modalContent').addEventListener('click', function(event) {
    event.stopPropagation(); // หยุดการ bubble ขึ้นไปยัง overlay
});
```

---

## Slide 29: Error Handling ใน Events 🐛

### การจัดการข้อผิดพลาดใน Event Handlers:

```javascript
class SafeEventHandler {
    constructor() {
        this.errorCount = 0;
        this.init();
    }
    
    init() {
        // Global error handler สำหรับ unhandled errors
        window.addEventListener('error', (event) => {
            this.handleGlobalError(event);
        });
        
        // Unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.handleUnhandledRejection(event);
        });
    }
    
    // Wrapper สำหรับ event handlers
    safeHandler(handler, context = 'Unknown') {
        return (event) => {
            try {
                handler.call(this, event);
            } catch (error) {
                this.handleEventError(error, context, event);
            }
        };
    }
    
    handleEventError(error, context, event) {
        this.errorCount++;
        
        console.error(`Error in ${context}:`, error);
        console.error('Event:', event);
        console.error('Stack:', error.stack);
        
        // ส่งข้อมูลไปยัง error reporting service
        this.reportError(error, context, event);
        
        // แสดงข้อความแก่ผู้ใช้
        this.showUserFriendlyError(context);
    }
    
    handleGlobalError(event) {
        console.error('Global Error:', event.error);
        this.reportError(event.error, 'Global', event);
    }
    
    handleUnhandledRejection(event) {
        console.error('Unhandled Promise Rejection:', event.reason);
        this.reportError(event.reason, 'Promise Rejection', event);
        
        // ป้องกันไม่ให้แสดง error ใน console (optional)
        event.preventDefault();
    }
    
    reportError(error, context, event) {
        // ส่งไปยัง error reporting service (เช่น Sentry, LogRocket)
        const errorData = {
            message: error.message,
            stack: error.stack,
            context: context,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            errorCount: this.errorCount
        };
        
        // จำลองการส่งข้อมูล
        console.log('Error reported:', errorData);
        
        // ใช้ localStorage สำหรับ offline error logging
        this.logErrorLocally(errorData);
    }
    
    logErrorLocally(errorData) {
        try {
            let errors = JSON.parse(localStorage.getItem('errorLog') || '[]');
            errors.push(errorData);
            
            // เก็บแค่ 50 errors ล่าสุด
            if (errors.length > 50) {
                errors = errors.slice(-50);
            }
            
            localStorage.setItem('errorLog', JSON.stringify(errors));
        } catch (e) {
            console.warn('Cannot log error to localStorage:', e);
        }
    }
    
    showUserFriendlyError(context) {
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.innerHTML = `
            <div class="error-content">
                <strong>เกิดข้อผิดพลาด</strong>
                <p>ขออภัย เกิดปัญหาในการทำงาน กรุณาลองใหม่อีกครั้ง</p>
                <button onclick="this.parentElement.parentElement.remove()">ปิด</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // ลบอัตโนมัติหลัง 5 วินาที
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
    
    // สำหรับ debug - ดู error log
    getErrorLog() {
        try {
            return JSON.parse(localStorage.getItem('errorLog') || '[]');
        } catch (e) {
            return [];
        }
    }
    
    clearErrorLog() {
        localStorage.removeItem('errorLog');
        this.errorCount = 0;
    }
}

// การใช้งาน
const errorHandler = new SafeEventHandler();

// ใช้กับ event handlers
document.getElementById('riskyButton').addEventListener('click', 
    errorHandler.safeHandler(function(event) {
        // โค้ดที่อาจมี error
        if (Math.random() < 0.3) {
            throw new Error('Random error occurred!');
        }
        
        console.log('Button clicked successfully');
    }, 'Risky Button Click')
);

// ตัวอย่างการใช้กับ async functions
document.getElementById('asyncButton').addEventListener('click',
    errorHandler.safeHandler(async function(event) {
        try {
            const response = await fetch('/api/data');
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${data.message}`);
            }
            
            console.log('Data loaded:', data);
        } catch (error) {
            // Re-throw เพื่อให้ safeHandler จัดการ
            throw new Error(`Failed to load data: ${error.message}`);
        }
    }, 'Async Data Loading')
);
```

---

## Slide 30: สรุปและเทคนิคขั้นสูง 🎯

### สิ่งที่เราเรียนรู้ใน 2 ชั่วโมง:

#### **Event Fundamentals:**
✅ **Event Listeners** และวิธีการเพิ่ม/ลบ  
✅ **Event Object** และ properties สำคัญ  
✅ **preventDefault()** และ **stopPropagation()**  

#### **Event Types:**
✅ **Mouse Events** - click, hover, drag  
✅ **Keyboard Events** - keydown, keyup, shortcuts  
✅ **Form Events** - submit, input, focus/blur  
✅ **Touch Events** - swipe, pinch สำหรับ mobile  

#### **Advanced Techniques:**
✅ **Event Delegation** - จัดการ dynamic elements  
✅ **Custom Events** - สร้าง events เอง  
✅ **Performance** - throttling, debouncing  
✅ **Accessibility** - รองรับผู้พิการ  

### ทักษะที่ได้รับ:
- สร้างเว็บไซต์ที่ตอบสนองผู้ใช้ได้
- จัดการ Events อย่างมีประสิทธิภาพ
- ใช้ Keyboard Shortcuts และ Touch gestures
- Debug และแก้ไขปัญหา Events

---

## Slide 31: โปรเจคตัวอย่างที่ใช้ Events 🌟

### 1. **Interactive Calculator** ✅ (ทำแล้ว)
- Mouse clicks และ Keyboard input
- Real-time calculation
- Visual feedback

### 2. **Image Gallery** ✅ (ทำแล้ว)  
- Navigation ด้วย arrows และ thumbnails
- Keyboard shortcuts
- Touch swipe สำหรับ mobile
- Modal popup

### 3. **ตัวอย่างโปรเจคอื่นๆ ที่น่าสนใจ:**

#### **A. Drag & Drop Kanban Board**
```javascript
// ระบบจัดการงานแบบลากวาง
// ใช้: drag events, event delegation, custom events
```

#### **B. Real-time Chat Interface**
```javascript
// แชทที่พิมพ์ได้เร็ว มี emoji picker
// ใช้: input events, keyboard shortcuts, custom events
```

#### **C. Interactive Quiz Game**
```javascript
// เกมตอบคำถามพร้อม timer
// ใช้: click events, keyboard events, animations
```

#### **D. Music Player**
```javascript
// เครื่องเล่นเพลงพร้อม playlist
// ใช้: media events, keyboard shortcuts, touch events
```

### เลือกโปรเจคที่สนใจไปลองทำดู! 💪

---

## Slide 32: การเตรียมตัวสำหรับหัวข้อถัดไป 🚀

### หัวข้อที่ 3: Form Validation และ Local Storage (2 ชม.)

#### สิ่งที่จะเรียนต่อ:
- **Real-time Form Validation** 
- **Regular Expressions** สำหรับ pattern matching
- **Local Storage API** - บันทึกข้อมูลในเบราว์เซอร์
- **Session Storage** - ข้อมูลชั่วคราว
- **JSON** - การแปลงข้อมูล
- **Data Persistence** - ทำให้ข้อมูลคงอยู่

#### Events ที่จะใช้:
- **Form Events:** submit, input, change, invalid
- **Storage Events:** การฟังการเปลี่ยนแปลงข้อมูล
- **Page Events:** beforeunload, load

#### โปรเจคที่จะสร้าง:
- **Contact Form** พร้อม validation แบบ real-time
- **User Preferences** ที่จำการตั้งค่า
- **Shopping Cart** ที่เก็บสินค้าไว้ได้

### ความเชื่อมโยง:
**Events** (วันนี้) + **Form Validation** + **Storage** = เว็บแอปที่ใช้งานได้จริง! 🎯

---

## Slide 33: การบ้านและท้าทาย 📚

### การบ้านระดับพื้นฐาน (ต้องทำ):

#### **1. Interactive To-Do List Enhanced**
```javascript
// เพิ่มฟีเจอร์:
// - Keyboard shortcuts (Enter เพิ่ม, Delete ลบ)
// - Drag & Drop เปลี่ยนลำดับ
// - Double-click แก้ไข
// - คลิกขวาแสดงเมนู context
```

#### **2. Simple Image Viewer**
```javascript
// ฟีเจอร์ที่ต้องมี:
// - Arrow keys navigation
// - Mouse wheel zoom
// - Touch swipe (ถ้าเป็น mobile)
// - Keyboard shortcut ปิด (Escape)
```

### การบ้านระดับกลาง (ทำเพิ่ม):

#### **3. Event-driven Game**
```javascript
// เกมง่ายๆ เช่น:
// - Snake Game (arrow keys)
// - Memory Card Game (mouse/touch)
// - Typing Speed Test (keyboard events)
// - Simon Says (click/keyboard)
```

### การบ้านระดับยาก (สำหรับผู้เก่ง):

#### **4. Multi-modal Interface**
```javascript
// รองรับทั้ง:
// - Mouse interaction
// - Keyboard shortcuts (อย่างน้อย 5 shortcuts)
// - Touch gestures (swipe, pinch)
// - Voice commands (Web Speech API)
// - Accessibility features
```

### เกณฑ์การส่งงาน:
- **GitHub Repository** พร้อม demo
- **README** อธิบายวิธีใช้และ shortcuts
- **Video Demo** แสดงการใช้งาน
- **Clean Code** มี comments อธิบาย

---

## Slide 34: Tips สำหรับการพัฒนา Events 💡

### **1. Event Naming Convention:**
```javascript
// ใช้ชื่อที่สื่อความหมาย
function handleSubmitButtonClick(event) { }
function onUserInputChange(event) { }
function validateEmailField(event) { }

// แทนที่จะใช้
function handler1(event) { }
function func2(event) { }
```

### **2. การแยก Logic:**
```javascript
// ✅ ดี - แยก logic ออกจาก event handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        submitForm();
    } else {
        showValidationErrors();
    }
}

function validateForm() {
    // validation logic
}

function submitForm() {
    // submission logic
}
```

### **3. Memory Management:**
```javascript
// ลบ event listeners เมื่อไม่ใช้
class Component {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
    }
    
    mount() {
        document.addEventListener('click', this.handleClick);
    }
    
    unmount() {
        document.removeEventListener('click', this.handleClick);
    }
    
    handleClick(event) {
        // handle click
    }
}
```

### **4. Testing Events:**
```javascript
// การทดสอบ events
function triggerEvent(element, eventType, options = {}) {
    const event = new Event(eventType, {
        bubbles: true,
        cancelable: true,
        ...options
    });
    
    element.dispatchEvent(event);
}

// ทดสอบ
const button = document.getElementById('testButton');
triggerEvent(button, 'click');
```

---

## Slide 35: สรุปสุดท้ายและก้าวต่อไป 🎓

### **Journey ที่เราผ่านมา:**
🎯 **เริ่มต้น:** รู้จัก JavaScript และ DOM  
🎮 **ตอนนี้:** ทำให้เว็บไซต์ Interactive ได้  
📝 **ต่อไป:** Form Validation และ Data Storage  

### **สิ่งที่เปลี่ยนไป:**
- จาก **Static Web Pages** เป็น **Interactive Applications**
- จาก **ไม่ตอบสนองผู้ใช้** เป็น **User-Friendly Interfaces**
- จาก **โค้ดง่ายๆ** เป็น **Event-driven Programming**

### **Event-driven Programming Mindset:**
```javascript
// คิดในมุมของ "เมื่อ X เกิดขึ้น ให้ทำ Y"
// เมื่อผู้ใช้คลิก → แสดงข้อมูล
// เมื่อผู้ใช้พิมพ์ → ตรวจสอบข้อมูล
// เมื่อมีข้อผิดพลาด → แสดงข้อความ
```

### **เทคนิคที่ต้องจำ:**
1. **addEventListener** มากกว่า onclick
2. **Event Delegation** สำหรับ dynamic content
3. **preventDefault()** และ **stopPropagation()** เมื่อจำเป็น
4. **Debouncing/Throttling** สำหรับ performance
5. **Accessibility** ต้องคิดถึงเสมอ

### **คำถามสำคัญ:** *"เว็บไซต์ของคุณตอบสนองผู้ใช้ได้ดีแค่ไหน?"*

**ถ้าตอบได้:** คุณพร้อมที่จะเป็น Frontend Developer แล้ว! 💪

---

## พักเบรก 15 นาที ☕

### เตรียมพร้อมสำหรับ Form Validation และ Local Storage!

**Preview หัวข้อถัดไป:**  
เราจะเรียนรู้การ:
- ตรวจสอบข้อมูลฟอร์มแบบ Real-time
- บันทึกข้อมูลในเบราว์เซอร์  
- สร้างเว็บแอปที่จำข้อมูลได้
- ใช้ Regular Expressions

**ท้าทาย:** คิดดูว่าเว็บไซต์ที่คุณใช้บ่อยๆ บันทึกข้อมูลอะไรไว้บ้าง? 🤔

**Get Ready for Persistent Web Apps! 💾**### สร้าง Image Gallery ที่ควบคุมได้ด้วยเมาส์และคีย์บอร์ด: