# Event Handling และ Interactive Elements
## ENGSE611 - การพัฒนาเว็บด้วยเทคโนโลยีสมัยใหม่
### วันที่ 2 - หัวข้อที่ 3: Event Handling และ Interactive Elements (2 ชั่วโมง)

---

## 🎯 **จุดประสงค์การเรียน**

หลังจากเรียนจบหัวข้อนี้ นักศึกษาจะสามารถ:
- เข้าใจ Events และการทำงานของ Event System
- ใช้ Event Listeners กับ elements ต่างๆ ได้
- จัดการ Mouse, Keyboard และ Form Events ได้
- สร้าง Interactive Web Applications ได้
- ป้องกันและจัดการ Event Bubbling ได้

---

## 📚 **ทฤษฎี: Events คืออะไร?**

**Event = เหตุการณ์ที่เกิดขึ้นบนเว็บไซต์**
- User คลิกปุ่ม = `click` event
- User พิมพ์ใน input = `input` event  
- หน้าเว็บโหลดเสร็จ = `load` event

**Event Listener = ตัวฟัง Event**
```javascript
element.addEventListener('click', function() {
    // ทำอะไรเมื่อมีการคลิก
});
```

---

## 📚 **LAB 1: Mouse Events**

### **💻 Exercise 1.1: Click Events พื้นฐาน**

**สร้างไฟล์:** `event-lab1.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 1: Mouse Events</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f0f2f5; }
        .demo-section { background: white; padding: 20px; margin: 15px 0; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .demo-btn { background: #4267B2; color: white; padding: 12px 20px; border: none; border-radius: 6px; cursor: pointer; margin: 5px; font-size: 16px; }
        .demo-btn:hover { background: #365899; transform: translateY(-1px); }
        .demo-btn:active { transform: translateY(0); }
        .click-target { width: 200px; height: 150px; background: #e3f2fd; border: 3px dashed #2196f3; margin: 20px auto; display: flex; align-items: center; justify-content: center; border-radius: 10px; cursor: pointer; transition: all 0.3s ease; }
        .click-target:hover { background: #bbdefb; border-color: #1976d2; }
        .event-log { background: #263238; color: #4caf50; padding: 15px; border-radius: 8px; font-family: monospace; height: 200px; overflow-y: auto; margin: 10px 0; }
        .counter { font-size: 2em; font-weight: bold; text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>🎯 LAB 1: Mouse Events</h1>

    <!-- Section 1: Basic Click Events -->
    <div class="demo-section">
        <h3>🖱️ Click Events พื้นฐาน</h3>
        
        <div class="click-target" id="click-target">
            <div>คลิกที่นี่!</div>
        </div>
        
        <div class="counter" id="click-counter">คลิก: 0 ครั้ง</div>
        
        <div style="text-align: center;">
            <button class="demo-btn" onclick="resetCounter()">รีเซ็ตการนับ</button>
            <button class="demo-btn" onclick="changeTargetColor()">เปลี่ยนสี</button>
            <button class="demo-btn" onclick="toggleTargetSize()">เปลี่ยนขนาด</button>
        </div>
        
        <div id="event-log" class="event-log">
            <div>📋 Event Log - เหตุการณ์จะแสดงที่นี่</div>
        </div>
    </div>

    <!-- Section 2: Mouse Event Types -->
    <div class="demo-section">
        <h3>🐭 Mouse Event Types ต่างๆ</h3>
        
        <div id="mouse-area" style="background: #fff3e0; border: 2px solid #ff9800; padding: 30px; border-radius: 10px; text-align: center; margin: 20px 0; cursor: crosshair;">
            <h4>Mouse Playground</h4>
            <p>ลองใช้เมาส์ในพื้นที่นี้และดู Events ที่เกิดขึ้น</p>
            <p id="mouse-info" style="font-family: monospace; color: #666; margin-top: 15px;">
                พิกัดเมาส์จะแสดงที่นี่
            </p>
        </div>
        
        <div style="text-align: center;">
            <button class="demo-btn" onclick="clearEventLog()">ล้าง Log</button>
            <button class="demo-btn" onclick="toggleMouseTracking()">เปิด/ปิด Mouse Tracking</button>
        </div>
    </div>

    <!-- Section 3: Double Click และ Context Menu -->
    <div class="demo-section">
        <h3>⚡ Double Click และ Right Click</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div id="double-click-area" style="background: #e8f5e8; border: 2px solid #4caf50; padding: 30px; border-radius: 10px; text-align: center; cursor: pointer;">
                <h4>Double Click Zone</h4>
                <p>ดับเบิลคลิกที่นี่</p>
                <div id="double-click-count" style="font-size: 1.5em; font-weight: bold; color: #2e7d32; margin-top: 10px;">0 ครั้ง</div>
            </div>
            
            <div id="context-menu-area" style="background: #fce4ec; border: 2px solid #e91e63; padding: 30px; border-radius: 10px; text-align: center; cursor: pointer;">
                <h4>Right Click Zone</h4>
                <p>คลิกขวาที่นี่</p>
                <div id="context-menu-count" style="font-size: 1.5em; font-weight: bold; color: #c2185b; margin-top: 10px;">0 ครั้ง</div>
            </div>
        </div>
    </div>

    <script>
        // Global variables
        let clickCount = 0;
        let doubleClickCount = 0;
        let contextMenuCount = 0;
        let mouseTrackingEnabled = true;
        let colors = ['#e3f2fd', '#f3e5f5', '#e8f5e8', '#fff3e0', '#ffebee'];
        let currentColorIndex = 0;

        // Event logging function
        function logEvent(eventType, details = '') {
            const log = document.getElementById('event-log');
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = document.createElement('div');
            logEntry.innerHTML = `[${timestamp}] 🔥 ${eventType} ${details}`;
            log.appendChild(logEntry);
            log.scrollTop = log.scrollHeight;
            
            console.log(`Event: ${eventType}`, details);
        }

        // LAB 1.1: Basic Click Events
        function setupClickTarget() {
            const target = document.getElementById('click-target');
            
            target.addEventListener('click', function(event) {
                clickCount++;
                document.getElementById('click-counter').textContent = `คลิก: ${clickCount} ครั้ง`;
                
                // เอฟเฟกต์การคลิก
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                logEvent('CLICK', `ครั้งที่ ${clickCount} - พิกัด (${event.clientX}, ${event.clientY})`);
            });
            
            // Mouse enter/leave effects
            target.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 8px 25px rgba(33, 150, 243, 0.3)';
                logEvent('MOUSE ENTER', 'เมาส์เข้าพื้นที่');
            });
            
            target.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
                logEvent('MOUSE LEAVE', 'เมาส์ออกจากพื้นที่');
            });
        }

        function resetCounter() {
            clickCount = 0;
            document.getElementById('click-counter').textContent = 'คลิก: 0 ครั้ง';
            logEvent('RESET', 'รีเซ็ตตัวนับแล้ว');
        }

        function changeTargetColor() {
            const target = document.getElementById('click-target');
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            target.style.backgroundColor = colors[currentColorIndex];
            logEvent('COLOR CHANGE', `เปลี่ยนเป็น ${colors[currentColorIndex]}`);
        }

        function toggleTargetSize() {
            const target = document.getElementById('click-target');
            const isLarge = target.style.width === '300px';
            
            if (isLarge) {
                target.style.width = '200px';
                target.style.height = '150px';
                logEvent('SIZE CHANGE', 'เปลี่ยนเป็นขนาดเล็ก');
            } else {
                target.style.width = '300px';
                target.style.height = '200px';
                logEvent('SIZE CHANGE', 'เปลี่ยนเป็นขนาดใหญ่');
            }
        }

        // LAB 1.2: Mouse Event Types
        function setupMouseArea() {
            const mouseArea = document.getElementById('mouse-area');
            const mouseInfo = document.getElementById('mouse-info');
            
            // Mouse move tracking
            mouseArea.addEventListener('mousemove', function(event) {
                if (mouseTrackingEnabled) {
                    const rect = this.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    
                    mouseInfo.textContent = `พิกัดเมาส์: (${Math.round(x)}, ${Math.round(y)}) | Screen: (${event.clientX}, ${event.clientY})`;
                }
            });
            
            // Mouse down/up
            mouseArea.addEventListener('mousedown', function(event) {
                this.style.background = '#ffcc80';
                logEvent('MOUSE DOWN', `ปุ่ม ${event.button === 0 ? 'ซ้าย' : event.button === 1 ? 'กลาง' : 'ขวา'}`);
            });
            
            mouseArea.addEventListener('mouseup', function(event) {
                this.style.background = '#fff3e0';
                logEvent('MOUSE UP', `ปล่อยปุ่ม ${event.button === 0 ? 'ซ้าย' : event.button === 1 ? 'กลาง' : 'ขวา'}`);
            });
            
            // Mouse enter/leave
            mouseArea.addEventListener('mouseenter', function() {
                this.style.borderColor = '#f57c00';
                this.style.borderWidth = '3px';
                logEvent('MOUSE ENTER', 'เข้าสู่ Mouse Area');
            });
            
            mouseArea.addEventListener('mouseleave', function() {
                this.style.borderColor = '#ff9800';
                this.style.borderWidth = '2px';
                mouseInfo.textContent = 'เมาส์ออกจากพื้นที่แล้ว';
                logEvent('MOUSE LEAVE', 'ออกจาก Mouse Area');
            });
        }

        function clearEventLog() {
            const log = document.getElementById('event-log');
            log.innerHTML = '<div>📋 Event Log - เหตุการณ์จะแสดงที่นี่</div>';
        }

        function toggleMouseTracking() {
            mouseTrackingEnabled = !mouseTrackingEnabled;
            const status = mouseTrackingEnabled ? 'เปิด' : 'ปิด';
            logEvent('TRACKING', `${status} Mouse Tracking`);
            
            if (!mouseTrackingEnabled) {
                document.getElementById('mouse-info').textContent = 'Mouse Tracking ปิดอยู่';
            }
        }

        // LAB 1.3: Double Click และ Context Menu
        function setupDoubleClick() {
            const area = document.getElementById('double-click-area');
            
            area.addEventListener('dblclick', function(event) {
                doubleClickCount++;
                document.getElementById('double-click-count').textContent = `${doubleClickCount} ครั้ง`;
                
                // เอฟเฟกต์ animation
                this.style.transform = 'scale(1.1) rotate(5deg)';
                this.style.background = '#c8e6c9';
                
                setTimeout(() => {
                    this.style.transform = 'scale(1) rotate(0deg)';
                    this.style.background = '#e8f5e8';
                }, 300);
                
                logEvent('DOUBLE CLICK', `ครั้งที่ ${doubleClickCount} - เวลาห่าง ${event.timeStamp}`);
            });
            
            // Single click สำหรับ feedback
            area.addEventListener('click', function() {
                this.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
                setTimeout(() => {
                    this.style.boxShadow = 'none';
                }, 200);
            });
        }

        function setupContextMenu() {
            const area = document.getElementById('context-menu-area');
            
            area.addEventListener('contextmenu', function(event) {
                event.preventDefault(); // ป้องกัน context menu ปกติ
                
                contextMenuCount++;
                document.getElementById('context-menu-count').textContent = `${contextMenuCount} ครั้ง`;
                
                // เอฟเฟกต์ animation
                this.style.transform = 'scale(1.05)';
                this.style.background = '#f8bbd9';
                
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    this.style.background = '#fce4ec';
                }, 300);
                
                logEvent('RIGHT CLICK', `ครั้งที่ ${contextMenuCount} - ป้องกัน context menu`);
                
                // แสดงการแจ้งเตือน
                this.innerHTML = `
                    <h4>Right Click Zone</h4>
                    <p>คลิกขวาที่นี่</p>
                    <div style="font-size: 1.5em; font-weight: bold; color: #c2185b; margin-top: 10px;">${contextMenuCount} ครั้ง</div>
                    <div style="font-size: 0.9em; color: #ad1457; margin-top: 5px;">Context Menu ถูกป้องกัน!</div>
                `;
                
                setTimeout(() => {
                    this.innerHTML = `
                        <h4>Right Click Zone</h4>
                        <p>คลิกขวาที่นี่</p>
                        <div style="font-size: 1.5em; font-weight: bold; color: #c2185b; margin-top: 10px;">${contextMenuCount} ครั้ง</div>
                    `;
                }, 2000);
            });
        }

        // Initialize all mouse events
        function initializeMouseEvents() {
            setupClickTarget();
            setupMouseArea();
            setupDoubleClick();
            setupContextMenu();
            
            logEvent('INIT', 'Mouse Events ติดตั้งเรียบร้อย');
        }

        // Start when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initializeMouseEvents();
            console.log('=== Mouse Events LAB 1 เริ่มต้น ===');
        });
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. คลิกและสังเกต click events
2. ลองใช้เมาส์ในพื้นที่ต่างๆ และดู event log
3. ทดสอบ double click และ right click
4. สังเกต event object properties

---

## 📚 **LAB 2: Keyboard Events**

### **💻 Exercise 2.1: Keyboard Input และ Shortcuts**

**สร้างไฟล์:** `event-lab2.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 2: Keyboard Events</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
        .demo-section { background: white; padding: 20px; margin: 15px 0; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .demo-btn { background: #9c27b0; color: white; padding: 10px 16px; border: none; border-radius: 6px; cursor: pointer; margin: 5px; }
        .demo-btn:hover { background: #7b1fa2; }
        .input-area { padding: 15px; border: 2px solid #e0e0e0; border-radius: 8px; margin: 10px 0; background: #fafafa; }
        .input-area:focus-within { border-color: #9c27b0; background: white; }
        .key-display { background: #263238; color: #00e676; padding: 20px; border-radius: 8px; font-family: monospace; min-height: 150px; overflow-y: auto; margin: 10px 0; }
        .typing-game { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; }
        .shortcut-hint { background: #e1f5fe; border-left: 4px solid #03a9f4; padding: 10px; margin: 10px 0; border-radius: 4px; }
        .key-combo { background: #333; color: white; padding: 3px 8px; border-radius: 4px; font-family: monospace; margin: 0 2px; }
    </style>
</head>
<body>
    <h1>⌨️ LAB 2: Keyboard Events</h1>

    <!-- Section 1: Basic Keyboard Input -->
    <div class="demo-section">
        <h3>⌨️ Keyboard Input Events</h3>
        
        <div class="input-area">
            <label for="text-input" style="display: block; margin-bottom: 10px; font-weight: bold;">พิมพ์ข้อความและดู Events:</label>
            <input type="text" id="text-input" placeholder="พิมพ์อะไรก็ได้..." 
                   style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;">
        </div>
        
        <div class="key-display" id="key-display">
            <div>🎹 Keyboard Event Monitor - พิมพ์ในช่องข้างบนเพื่อดู events</div>
        </div>
        
        <div style="text-align: center;">
            <button class="demo-btn" onclick="clearKeyDisplay()">ล้าง Monitor</button>
            <button class="demo-btn" onclick="toggleKeyLogger()">เปิด/ปิด Logger</button>
            <button class="demo-btn" onclick="showKeyboardInfo()">ข้อมูล Keyboard</button>
        </div>

        <div class="shortcut-hint">
            <strong>💡 ลองกดปุ่มพิเศษ:</strong>
            <span class="key-combo">Enter</span>
            <span class="key-combo">Tab</span>
            <span class="key-combo">Escape</span>
            <span class="key-combo">Arrow Keys</span>
            <span class="key-combo">Shift</span>
            <span class="key-combo">Ctrl</span>
        </div>
    </div>

    <!-- Section 2: Keyboard Shortcuts -->
    <div class="demo-section">
        <h3>🚀 Keyboard Shortcuts</h3>
        
        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h4>ลองกด Shortcuts เหล่านี้:</h4>
            <ul style="margin: 10px 0;">
                <li><span class="key-combo">Ctrl + S</span> - บันทึกข้อมูล (จำลอง)</li>
                <li><span class="key-combo">Ctrl + Z</span> - Undo (จำลอง)</li>
                <li><span class="key-combo">Ctrl + Enter</span> - ส่งข้อความ</li>
                <li><span class="key-combo">Alt + H</span> - แสดงความช่วยเหลือ</li>
                <li><span class="key-combo">F1</span> - About</li>
                <li><span class="key-combo">Escape</span> - ปิดทุกอย่าง</li>
            </ul>
        </div>

        <div id="shortcut-feedback" style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 10px 0; min-height: 50px;">
            <strong>📢 Shortcut Feedback:</strong> กด shortcuts ข้างบนเพื่อดูผลลัพธ์
        </div>

        <div style="text-align: center;">
            <button class="demo-btn" onclick="showShortcutHelp()">แสดง Shortcuts ทั้งหมด</button>
            <button class="demo-btn" onclick="testShortcuts()">ทดสอบ Shortcuts</button>
        </div>
    </div>

    <!-- Section 3: Typing Game -->
    <div class="demo-section">
        <h3>🎮 Mini Typing Game</h3>
        
        <div class="typing-game">
            <h4>⚡ Speed Typing Challenge</h4>
            <div id="typing-text" style="font-size: 1.2em; margin: 20px 0; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px;">
                พิมพ์ประโยคนี้ให้ถูกต้อง: "JavaScript เป็นภาษาโปรแกรมที่ทรงพลัง"
            </div>
            
            <input type="text" id="typing-input" placeholder="พิมพ์ประโยคข้างบน..." 
                   style="width: 80%; padding: 12px; border: none; border-radius: 6px; font-size: 16px; text-align: center;">
            
            <div id="typing-stats" style="margin-top: 15px; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px;">
                <div style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 6px;">
                    <div style="font-size: 1.5em; font-weight: bold;" id="typing-speed">0</div>
                    <div>WPM</div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 6px;">
                    <div style="font-size: 1.5em; font-weight: bold;" id="typing-accuracy">100%</div>
                    <div>Accuracy</div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 6px;">
                    <div style="font-size: 1.5em; font-weight: bold;" id="typing-time">0</div>
                    <div>วินาที</div>
                </div>
            </div>
            
            <div style="margin-top: 15px;">
                <button class="demo-btn" onclick="startTypingGame()" style="background: rgba(255,255,255,0.2); border: 2px solid white;">เริ่มเกมใหม่</button>
                <button class="demo-btn" onclick="changeTypingText()" style="background: rgba(255,255,255,0.2); border: 2px solid white;">เปลี่ยนประโยค</button>
            </div>
        </div>
    </div>

    <script>
        // Global variables
        let keyLoggerEnabled = true;
        let shortcuts = {};
        let typingStartTime = null;
        let typingTexts = [
            "JavaScript เป็นภาษาโปรแกรมที่ทรงพลัง",
            "DOM Manipulation ช่วยให้เว็บไซต์มีปฏิสัมพันธ์",
            "Event Handling เป็นหัวใจของการโต้ตอบ",
            "Programming ต้องอาศัยการฝึกฝนอย่างสม่ำเสมอ",
            "Web Development เป็นทักษะที่มีค่า"
        ];
        let currentTypingText = typingTexts[0];

        // Key display logging
        function logKey(eventType, event) {
            if (!keyLoggerEnabled) return;
            
            const display = document.getElementById('key-display');
            const timestamp = new Date().toLocaleTimeString();
            const keyInfo = `[${timestamp}] ${eventType}: "${event.key}" (Code: ${event.code}) ${event.ctrlKey ? '+ Ctrl' : ''} ${event.shiftKey ? '+ Shift' : ''} ${event.altKey ? '+ Alt' : ''}`;
            
            const logEntry = document.createElement('div');
            logEntry.textContent = keyInfo;
            display.appendChild(logEntry);
            display.scrollTop = display.scrollHeight;
            
            console.log('Key Event:', eventType, event);
        }

        // LAB 2.1: Basic Keyboard Input
        function setupKeyboardInput() {
            const textInput = document.getElementById('text-input');
            
            // Key down event
            textInput.addEventListener('keydown', function(event) {
                logKey('KEYDOWN', event);
                
                // Special key handling
                if (event.key === 'Enter') {
                    event.preventDefault();
                    alert(`คุณกด Enter! ข้อความ: "${this.value}"`);
                    logKey('SPECIAL', { ...event, message: 'Enter pressed - form submission prevented' });
                }
                
                if (event.key === 'Tab') {
                    logKey('SPECIAL', { ...event, message: 'Tab pressed - focus management' });
                }
                
                if (event.key === 'Escape') {
                    this.value = '';
                    this.blur();
                    logKey('SPECIAL', { ...event, message: 'Escape pressed - input cleared' });
                }
            });
            
            // Key up event
            textInput.addEventListener('keyup', function(event) {
                logKey('KEYUP', event);
                
                // Update character count
                if (this.value.length > 0) {
                    this.style.backgroundColor = '#e8f5e8';
                } else {
                    this.style.backgroundColor = 'white';
                }
            });
            
            // Input event (การเปลี่ยนแปลงค่า)
            textInput.addEventListener('input', function(event) {
                logKey('INPUT', { ...event, value: this.value, length: this.value.length });
            });
            
            // Focus events
            textInput.addEventListener('focus', function() {
                logKey('FOCUS', { key: 'focus', message: 'Input focused' });
                this.style.borderColor = '#9c27b0';
            });
            
            textInput.addEventListener('blur', function() {
                logKey('BLUR', { key: 'blur', message: 'Input blurred' });
                this.style.borderColor = '#ddd';
            });
        }

        function clearKeyDisplay() {
            const display = document.getElementById('key-display');
            display.innerHTML = '<div>🎹 Keyboard Event Monitor - พิมพ์ในช่องข้างบนเพื่อดู events</div>';
        }

        function toggleKeyLogger() {
            keyLoggerEnabled = !keyLoggerEnabled;
            const status = keyLoggerEnabled ? 'เปิด' : 'ปิด';
            logKey('LOGGER', { key: 'toggle', message: `Key Logger ${status}` });
        }

        function showKeyboardInfo() {
            const info = `
                🎹 ข้อมูล Keyboard API:
                - event.key: ค่าของปุ่มที่กด
                - event.code: รหัสทางกายภาพของปุ่ม
                - event.ctrlKey: กด Ctrl หรือไม่
                - event.shiftKey: กด Shift หรือไม่
                - event.altKey: กด Alt หรือไม่
                - event.metaKey: กด Meta (Cmd/Win) หรือไม่
            `;
            alert(info);
        }

        // LAB 2.2: Keyboard Shortcuts
        function setupShortcuts() {
            // Global shortcut listener
            document.addEventListener('keydown', function(event) {
                const combo = [];
                
                if (event.ctrlKey) combo.push('Ctrl');
                if (event.altKey) combo.push('Alt');
                if (event.shiftKey) combo.push('Shift');
                combo.push(event.key);
                
                const shortcutKey = combo.join('+');
                
                // Handle specific shortcuts
                switch (shortcutKey) {
                    case 'Ctrl+s':
                        event.preventDefault();
                        showShortcutFeedback('💾 บันทึกข้อมูลแล้ว (จำลอง)', 'success');
                        break;
                        
                    case 'Ctrl+z':
                        event.preventDefault();
                        showShortcutFeedback('↶ Undo การดำเนินการล่าสุด (จำลอง)', 'info');
                        break;
                        
                    case 'Ctrl+Enter':
                        event.preventDefault();
                        showShortcutFeedback('📤 ส่งข้อความแล้ว!', 'success');
                        break;
                        
                    case 'Alt+h':
                        event.preventDefault();
                        showShortcutFeedback('❓ แสดงหน้าความช่วยเหลือ', 'info');
                        break;
                        
                    case 'F1':
                        event.preventDefault();
                        showShortcutFeedback('ℹ️ Event Handling LAB - สร้างโดย JavaScript', 'info');
                        break;
                        
                    case 'Escape':
                        showShortcutFeedback('🚫 ปิดทุกอย่างและรีเซ็ต', 'warning');
                        document.getElementById('text-input').value = '';
                        document.getElementById('typing-input').value = '';
                        break;
                        
                    default:
                        // Log other combinations
                        if (combo.length > 1) {
                            console.log('Unhandled shortcut:', shortcutKey);
                        }
                }
            });
        }

        function showShortcutFeedback(message, type = 'info') {
            const feedback = document.getElementById('shortcut-feedback');
            const colors = {
                success: '#e8f5e8',
                info: '#e3f2fd',
                warning: '#fff3e0',
                error: '#ffebee'
            };
            
            feedback.style.backgroundColor = colors[type];
            feedback.innerHTML = `<strong>📢 Shortcut Feedback:</strong> ${message}`;
            
            setTimeout(() => {
                feedback.style.backgroundColor = '#e8f5e8';
                feedback.innerHTML = '<strong>📢 Shortcut Feedback:</strong> กด shortcuts ข้างบนเพื่อดูผลลัพธ์';
            }, 3000);
        }

        function showShortcutHelp() {
            const help = `
🚀 Keyboard Shortcuts ทั้งหมด:

💾 Ctrl + S - บันทึกข้อมูล
↶ Ctrl + Z - Undo
📤 Ctrl + Enter - ส่งข้อความ
❓ Alt + H - ความช่วยเหลือ
ℹ️ F1 - About
🚫 Escape - ปิด/รีเซ็ต

💡 เคล็ดลับ: Shortcuts เหล่านี้ทำงานทุกที่ในหน้าเว็บ
            `;
            alert(help);
        }

        function testShortcuts() {
            const shortcuts = ['Ctrl+S', 'Ctrl+Z', 'Ctrl+Enter', 'Alt+H', 'F1'];
            let message = '🧪 ทดสอบ Shortcuts:\n\n';
            
            shortcuts.forEach(shortcut => {
                message += `✅ ${shortcut} - พร้อมใช้งาน\n`;
            });
            
            message += '\n💡 ลองกด shortcuts เหล่านี้เพื่อดูการทำงาน';
            alert(message);
        }

        // LAB 2.3: Typing Game
        function setupTypingGame() {
            const typingInput = document.getElementById('typing-input');
            let startTime = null;
            
            typingInput.addEventListener('input', function() {
                if (!startTime) {
                    startTime = Date.now();
                    typingStartTime = startTime;
                }
                
                updateTypingStats();
            });
            
            typingInput.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    checkTypingComplete();
                }
            });
        }

        function updateTypingStats() {
            const input = document.getElementById('typing-input').value;
            const targetText = currentTypingText;
            
            if (!typingStartTime) return;
            
            // คำนวณเวลา
            const elapsedTime = (Date.now() - typingStartTime) / 1000;
            document.getElementById('typing-time').textContent = Math.round(elapsedTime);
            
            // คำนวณ WPM (Words Per Minute)
            const words = input.trim().split(' ').length;
            const wpm = Math.round((words / elapsedTime) * 60) || 0;
            document.getElementById('typing-speed').textContent = wpm;
            
            // คำนวณ Accuracy
            let correct = 0;
            for (let i = 0; i < input.length; i++) {
                if (input[i] === targetText[i]) {
                    correct++;
                }
            }
            const accuracy = input.length > 0 ? Math.round((correct / input.length) * 100) : 100;
            document.getElementById('typing-accuracy').textContent = accuracy + '%';
            
            // เปลี่ยนสีตาม accuracy
            const typingInput = document.getElementById('typing-input');
            if (accuracy >= 90) {
                typingInput.style.backgroundColor = '#c8e6c9';
            } else if (accuracy >= 70) {
                typingInput.style.backgroundColor = '#fff9c4';
            } else {
                typingInput.style.backgroundColor = '#ffcdd2';
            }
        }

        function checkTypingComplete() {
            const input = document.getElementById('typing-input').value;
            const targetText = currentTypingText;
            
            if (input === targetText) {
                const elapsedTime = (Date.now() - typingStartTime) / 1000;
                const wpm = Math.round((targetText.split(' ').length / elapsedTime) * 60);
                
                alert(`🎉 เก่งมาก! เสร็จใน ${elapsedTime.toFixed(1)} วินาที\nความเร็ว: ${wpm} WPM`);
                startTypingGame();
            } else {
                alert('⚠️ ยังไม่ถูกต้อง ลองอีกครั้ง');
            }
        }

        function startTypingGame() {
            document.getElementById('typing-input').value = '';
            document.getElementById('typing-input').style.backgroundColor = 'white';
            document.getElementById('typing-speed').textContent = '0';
            document.getElementById('typing-accuracy').textContent = '100%';
            document.getElementById('typing-time').textContent = '0';
            typingStartTime = null;
            
            document.getElementById('typing-input').focus();
        }

        function changeTypingText() {
            const randomIndex = Math.floor(Math.random() * typingTexts.length);
            currentTypingText = typingTexts[randomIndex];
            document.getElementById('typing-text').innerHTML = 
                `พิมพ์ประโยคนี้ให้ถูกต้อง: "${currentTypingText}"`;
            startTypingGame();
        }

        // Initialize all keyboard events
        function initializeKeyboardEvents() {
            setupKeyboardInput();
            setupShortcuts();
            setupTypingGame();
            
            console.log('=== Keyboard Events LAB 2 เริ่มต้น ===');
        }

        // Start when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initializeKeyboardEvents();
        });
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. พิมพ์ในช่องและดู keyboard events
2. ลองกด shortcuts ต่างๆ และดูผลลัพธ์
3. เล่นเกมพิมพ์เร็วและดูสถิติ
4. สังเกต event properties และการจัดการ

---

## 📚 **LAB 3: Form Events**

### **💻 Exercise 3.1: Form Validation แบบ Real-time**

**สร้างไฟล์:** `event-lab3.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 3: Form Events</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; }
        .demo-section { background: white; padding: 25px; margin: 15px 0; border-radius: 12px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: bold; color: #495057; }
        .form-control { width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 16px; transition: all 0.3s ease; }
        .form-control:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25); }
        .form-control.valid { border-color: #28a745; background: #f8fff8; }
        .form-control.invalid { border-color: #dc3545; background: #fff8f8; }
        .feedback { font-size: 14px; margin-top: 5px; padding: 8px; border-radius: 4px; }
        .feedback.valid { color: #155724; background: #d4edda; border: 1px solid #c3e6cb; }
        .feedback.invalid { color: #721c24; background: #f8d7da; border: 1px solid #f5c6cb; }
        .form-btn { background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; }
        .form-btn:hover { background: #0056b3; }
        .form-btn:disabled { background: #6c757d; cursor: not-allowed; }
        .progress-bar { height: 8px; background: #e9ecef; border-radius: 4px; overflow: hidden; margin: 10px 0; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #ff6b6b, #ffa500, #28a745); transition: width 0.3s ease; }
        .event-monitor { background: #2c3e50; color: #2ecc71; padding: 15px; border-radius: 8px; font-family: monospace; height: 200px; overflow-y: auto; margin: 15px 0; }
    </style>
</head>
<body>
    <h1>📝 LAB 3: Form Events</h1>

    <!-- Section 1: Registration Form -->
    <div class="demo-section">
        <h3>📋 Registration Form with Real-time Validation</h3>
        
        <form id="registration-form" novalidate>
            <div class="form-group">
                <label for="username">ชื่อผู้ใช้:</label>
                <input type="text" id="username" class="form-control" name="username" 
                       placeholder="3-20 ตัวอักษร, a-z, 0-9 เท่านั้น" autocomplete="username">
                <div id="username-feedback" class="feedback"></div>
            </div>

            <div class="form-group">
                <label for="email">อีเมล:</label>
                <input type="email" id="email" class="form-control" name="email" 
                       placeholder="example@domain.com" autocomplete="email">
                <div id="email-feedback" class="feedback"></div>
            </div>

            <div class="form-group">
                <label for="password">รหัสผ่าน:</label>
                <input type="password" id="password" class="form-control" name="password" 
                       placeholder="อย่างน้อย 8 ตัวอักษร" autocomplete="new-password">
                <div id="password-feedback" class="feedback"></div>
                <div class="progress-bar">
                    <div id="password-strength" class="progress-fill" style="width: 0%"></div>
                </div>
            </div>

            <div class="form-group">
                <label for="confirm-password">ยืนยันรหัสผ่าน:</label>
                <input type="password" id="confirm-password" class="form-control" name="confirmPassword" 
                       placeholder="พิมพ์รหัสผ่านอีกครั้ง" autocomplete="new-password">
                <div id="confirm-password-feedback" class="feedback"></div>
            </div>

            <div class="form-group">
                <label for="birthdate">วันเกิด:</label>
                <input type="date" id="birthdate" class="form-control" name="birthdate">
                <div id="birthdate-feedback" class="feedback"></div>
            </div>

            <div class="form-group">
                <label for="phone">เบอร์โทรศัพท์:</label>
                <input type="tel" id="phone" class="form-control" name="phone" 
                       placeholder="08X-XXX-XXXX" autocomplete="tel">
                <div id="phone-feedback" class="feedback"></div>
            </div>

            <div class="form-group">
                <label>
                    <input type="checkbox" id="terms" name="terms" style="margin-right: 8px;">
                    ยอมรับข้อตกลงและเงื่อนไข
                </label>
                <div id="terms-feedback" class="feedback"></div>
            </div>

            <button type="submit" id="submit-btn" class="form-btn" disabled>สมัครสมาชิก</button>
            <button type="button" class="form-btn" onclick="resetForm()" style="background: #6c757d; margin-left: 10px;">รีเซ็ต</button>
        </form>

        <div id="form-status" style="margin-top: 20px; padding: 15px; border-radius: 8px; background: #e2e3e5;">
            <strong>📊 สถานะฟอร์ม:</strong> <span id="status-text">รอการกรอกข้อมูล</span>
        </div>
    </div>

    <!-- Section 2: Event Monitor -->
    <div class="demo-section">
        <h3>🔍 Form Event Monitor</h3>
        
        <div style="text-align: center; margin-bottom: 15px;">
            <button class="form-btn" onclick="clearEventMonitor()">ล้าง Monitor</button>
            <button class="form-btn" onclick="toggleEventLogging()" style="background: #17a2b8;">เปิด/ปิด Logging</button>
            <button class="form-btn" onclick="exportFormData()" style="background: #28a745;">Export ข้อมูล</button>
        </div>

        <div id="event-monitor" class="event-monitor">
            <div>🔥 Form Event Monitor - Events จะแสดงที่นี่</div>
        </div>
    </div>

    <!-- Section 3: Advanced Form Features -->
    <div class="demo-section">
        <h3>🚀 Advanced Form Features</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            <div>
                <h4>📁 File Upload</h4>
                <input type="file" id="file-upload" class="form-control" accept=".jpg,.png,.pdf" multiple>
                <div id="file-feedback" class="feedback"></div>
                <div id="file-list" style="margin-top: 10px;"></div>
            </div>
            
            <div>
                <h4>🎚️ Range Input</h4>
                <label for="skill-level">ระดับทักษะ JavaScript:</label>
                <input type="range" id="skill-level" min="1" max="10" value="5" 
                       style="width: 100%; margin: 10px 0;">
                <div style="display: flex; justify-content: space-between; font-size: 12px;">
                    <span>เริ่มต้น</span>
                    <span id="skill-value">5</span>
                    <span>ผู้เชี่ยวชาญ</span>
                </div>
            </div>
            
            <div>
                <h4>🎨 Color Picker</h4>
                <label for="favorite-color">สีที่ชอบ:</label>
                <input type="color" id="favorite-color" value="#007bff" 
                       style="width: 100%; height: 50px; border: none; border-radius: 8px; cursor: pointer;">
                <div id="color-value" style="text-align: center; margin-top: 5px; font-family: monospace;">#007bff</div>
            </div>
        </div>
    </div>

    <script>
        // Global variables
        let eventLoggingEnabled = true;
        let validationRules = {};
        let formData = {};

        // Form validation rules
        validationRules = {
            username: {
                required: true,
                minLength: 3,
                maxLength: 20,
                pattern: /^[a-z0-9]+$/,
                message: {
                    required: 'ชื่อผู้ใช้เป็นข้อมูลบังคับ',
                    minLength: 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร',
                    maxLength: 'ชื่อผู้ใช้ต้องไม่เกิน 20 ตัวอักษร',
                    pattern: 'ใช้ได้เฉพาะ a-z และ 0-9 เท่านั้น'
                }
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: {
                    required: 'อีเมลเป็นข้อมูลบังคับ',
                    pattern: 'รูปแบบอีเมลไม่ถูกต้อง'
                }
            },
            password: {
                required: true,
                minLength: 8,
                strength: true,
                message: {
                    required: 'รหัสผ่านเป็นข้อมูลบังคับ',
                    minLength: 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร',
                    strength: 'รหัสผ่านต้องมีตัวอักษรพิมพ์ใหญ่ พิมพ์เล็ก และตัวเลข'
                }
            },
            phone: {
                required: false,
                pattern: /^0[689][0-9]{8}$/,
                message: {
                    pattern: 'รูปแบบเบอร์โทรไม่ถูกต้อง (08X-XXX-XXXX)'
                }
            }
        };

        // Event logging function
        function logFormEvent(eventType, target, details = '') {
            if (!eventLoggingEnabled) return;
            
            const monitor = document.getElementById('event-monitor');
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = document.createElement('div');
            
            logEntry.innerHTML = `[${timestamp}] 📝 ${eventType} - ${target.name || target.id} ${details}`;
            monitor.appendChild(logEntry);
            monitor.scrollTop = monitor.scrollHeight;
            
            console.log(`Form Event: ${eventType}`, target, details);
        }

        // Validation functions
        function validateField(fieldName, value) {
            const rules = validationRules[fieldName];
            if (!rules) return { valid: true, message: '' };
            
            // Required check
            if (rules.required && (!value || value.trim() === '')) {
                return { valid: false, message: rules.message.required };
            }
            
            // Skip other checks if field is empty and not required
            if (!rules.required && (!value || value.trim() === '')) {
                return { valid: true, message: '' };
            }
            
            // Length checks
            if (rules.minLength && value.length < rules.minLength) {
                return { valid: false, message: rules.message.minLength };
            }
            
            if (rules.maxLength && value.length > rules.maxLength) {
                return { valid: false, message: rules.message.maxLength };
            }
            
            // Pattern check
            if (rules.pattern && !rules.pattern.test(value)) {
                return { valid: false, message: rules.message.pattern };
            }
            
            // Special validation for password strength
            if (rules.strength && fieldName === 'password') {
                const hasUpper = /[A-Z]/.test(value);
                const hasLower = /[a-z]/.test(value);
                const hasNumber = /[0-9]/.test(value);
                
                if (!hasUpper || !hasLower || !hasNumber) {
                    return { valid: false, message: rules.message.strength };
                }
            }
            
            return { valid: true, message: 'ถูกต้อง!' };
        }

        function updateFieldFeedback(fieldName, validation) {
            const field = document.getElementById(fieldName);
            const feedback = document.getElementById(fieldName + '-feedback');
            
            if (validation.valid) {
                field.classList.add('valid');
                field.classList.remove('invalid');
                feedback.textContent = validation.message;
                feedback.classList.add('valid');
                feedback.classList.remove('invalid');
            } else {
                field.classList.add('invalid');
                field.classList.remove('valid');
                feedback.textContent = validation.message;
                feedback.classList.add('invalid');
                feedback.classList.remove('valid');
            }
        }

        function calculatePasswordStrength(password) {
            let score = 0;
            
            if (password.length >= 8) score += 25;
            if (/[a-z]/.test(password)) score += 25;
            if (/[A-Z]/.test(password)) score += 25;
            if (/[0-9]/.test(password)) score += 25;
            
            return score;
        }

        // Form setup
        function setupFormValidation() {
            const form = document.getElementById('registration-form');
            const submitBtn = document.getElementById('submit-btn');
            
            // Setup individual field listeners
            Object.keys(validationRules).forEach(fieldName => {
                const field = document.getElementById(fieldName);
                if (!field) return;
                
                // Input event for real-time validation
                field.addEventListener('input', function() {
                    const validation = validateField(fieldName, this.value);
                    updateFieldFeedback(fieldName, validation);
                    
                    // Special handling for password strength
                    if (fieldName === 'password') {
                        const strength = calculatePasswordStrength(this.value);
                        document.getElementById('password-strength').style.width = strength + '%';
                    }
                    
                    // Check confirm password
                    if (fieldName === 'password') {
                        const confirmField = document.getElementById('confirm-password');
                        if (confirmField.value) {
                            validateConfirmPassword();
                        }
                    }
                    
                    logFormEvent('INPUT', this, `value: "${this.value}"`);
                    updateFormStatus();
                });
                
                // Focus events
                field.addEventListener('focus', function() {
                    logFormEvent('FOCUS', this);
                });
                
                field.addEventListener('blur', function() {
                    const validation = validateField(fieldName, this.value);
                    updateFieldFeedback(fieldName, validation);
                    logFormEvent('BLUR', this, `validation: ${validation.valid ? 'PASS' : 'FAIL'}`);
                });
            });
            
            // Confirm password validation
            document.getElementById('confirm-password').addEventListener('input', validateConfirmPassword);
            
            // Terms checkbox
            document.getElementById('terms').addEventListener('change', function() {
                const feedback = document.getElementById('terms-feedback');
                if (this.checked) {
                    feedback.textContent = 'ยอมรับข้อตกลงแล้ว';
                    feedback.classList.add('valid');
                    feedback.classList.remove('invalid');
                } else {
                    feedback.textContent = 'จำเป็นต้องยอมรับข้อตกลง';
                    feedback.classList.add('invalid');
                    feedback.classList.remove('valid');
                }
                logFormEvent('CHANGE', this, `checked: ${this.checked}`);
                updateFormStatus();
            });
            
            // Birthdate validation
            document.getElementById('birthdate').addEventListener('input', function() {
                const birthDate = new Date(this.value);
                const today = new Date();
                const age = today.getFullYear() - birthDate.getFullYear();
                
                const feedback = document.getElementById('birthdate-feedback');
                if (age >= 13 && age <= 100) {
                    feedback.textContent = `อายุ ${age} ปี`;
                    feedback.classList.add('valid');
                    feedback.classList.remove('invalid');
                    this.classList.add('valid');
                    this.classList.remove('invalid');
                } else {
                    feedback.textContent = 'อายุต้องอยู่ระหว่าง 13-100 ปี';
                    feedback.classList.add('invalid');
                    feedback.classList.remove('valid');
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                }
                
                logFormEvent('DATE_CHANGE', this, `age: ${age}`);
            });
            
            // Form submit
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                logFormEvent('SUBMIT', this, 'form submission prevented');
                
                if (validateForm()) {
                    simulateFormSubmission();
                } else {
                    alert('⚠️ กรุณาตรวจสอบข้อมูลที่กรอกให้ถูกต้อง');
                }
            });
        }

        function validateConfirmPassword() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const feedback = document.getElementById('confirm-password-feedback');
            const field = document.getElementById('confirm-password');
            
            if (confirmPassword === '') {
                feedback.textContent = '';
                field.classList.remove('valid', 'invalid');
            } else if (password === confirmPassword) {
                feedback.textContent = 'รหัสผ่านตรงกัน';
                feedback.classList.add('valid');
                feedback.classList.remove('invalid');
                field.classList.add('valid');
                field.classList.remove('invalid');
            } else {
                feedback.textContent = 'รหัสผ่านไม่ตรงกัน';
                feedback.classList.add('invalid');
                feedback.classList.remove('valid');
                field.classList.add('invalid');
                field.classList.remove('valid');
            }
            
            logFormEvent('CONFIRM_PASSWORD', field, `match: ${password === confirmPassword}`);
        }

        function validateForm() {
            let isValid = true;
            
            // Validate all fields
            Object.keys(validationRules).forEach(fieldName => {
                const field = document.getElementById(fieldName);
                if (field) {
                    const validation = validateField(fieldName, field.value);
                    updateFieldFeedback(fieldName, validation);
                    if (!validation.valid) isValid = false;
                }
            });
            
            // Check confirm password
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) isValid = false;
            
            // Check terms
            const terms = document.getElementById('terms').checked;
            if (!terms) isValid = false;
            
            // Check birthdate
            const birthdate = document.getElementById('birthdate').value;
            if (birthdate) {
                const age = new Date().getFullYear() - new Date(birthdate).getFullYear();
                if (age < 13 || age > 100) isValid = false;
            }
            
            return isValid;
        }

        function updateFormStatus() {
            const isValid = validateForm();
            const submitBtn = document.getElementById('submit-btn');
            const statusText = document.getElementById('status-text');
            const formStatus = document.getElementById('form-status');
            
            if (isValid) {
                submitBtn.disabled = false;
                statusText.textContent = 'พร้อมส่งข้อมูล ✅';
                formStatus.style.background = '#d4edda';
                formStatus.style.color = '#155724';
            } else {
                submitBtn.disabled = true;
                statusText.textContent = 'ข้อมูลยังไม่ครบถ้วนหรือไม่ถูกต้อง ⚠️';
                formStatus.style.background = '#f8d7da';
                formStatus.style.color = '#721c24';
            }
        }

        function simulateFormSubmission() {
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.textContent = 'กำลังส่งข้อมูล...';
            submitBtn.disabled = true;
            
            logFormEvent('SUBMIT_START', document.getElementById('registration-form'));
            
            setTimeout(() => {
                alert('✅ สมัครสมาชิกสำเร็จ!\n\nข้อมูลถูกส่งไปยังเซิร์ฟเวอร์แล้ว (จำลอง)');
                submitBtn.textContent = 'สมัครสมาชิก';
                logFormEvent('SUBMIT_SUCCESS', document.getElementById('registration-form'));
                resetForm();
            }, 2000);
        }

        function resetForm() {
            document.getElementById('registration-form').reset();
            
            // Clear all validation states
            document.querySelectorAll('.form-control').forEach(field => {
                field.classList.remove('valid', 'invalid');
            });
            
            document.querySelectorAll('.feedback').forEach(feedback => {
                feedback.textContent = '';
                feedback.classList.remove('valid', 'invalid');
            });
            
            // Reset password strength
            document.getElementById('password-strength').style.width = '0%';
            
            // Reset form status
            updateFormStatus();
            
            logFormEvent('RESET', document.getElementById('registration-form'));
        }

        // Advanced form features
        function setupAdvancedFeatures() {
            // File upload
            document.getElementById('file-upload').addEventListener('change', function(event) {
                const files = Array.from(this.files);
                const feedback = document.getElementById('file-feedback');
                const fileList = document.getElementById('file-list');
                
                if (files.length === 0) {
                    feedback.textContent = '';
                    fileList.innerHTML = '';
                    return;
                }
                
                // Validate file types and sizes
                let validFiles = [];
                let errors = [];
                
                files.forEach(file => {
                    if (file.size > 5 * 1024 * 1024) { // 5MB limit
                        errors.push(`${file.name}: ไฟล์ใหญ่เกิน 5MB`);
                    } else if (!['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)) {
                        errors.push(`${file.name}: ประเภทไฟล์ไม่รองรับ`);
                    } else {
                        validFiles.push(file);
                    }
                });
                
                if (errors.length > 0) {
                    feedback.textContent = errors.join(', ');
                    feedback.classList.add('invalid');
                    feedback.classList.remove('valid');
                } else {
                    feedback.textContent = `อัพโหลด ${validFiles.length} ไฟล์สำเร็จ`;
                    feedback.classList.add('valid');
                    feedback.classList.remove('invalid');
                }
                
                // Display file list
                fileList.innerHTML = validFiles.map(file => 
                    `<div style="font-size: 12px; color: #666; margin: 2px 0;">
                        📎 ${file.name} (${(file.size / 1024).toFixed(1)} KB)
                    </div>`
                ).join('');
                
                logFormEvent('FILE_UPLOAD', this, `files: ${files.length}, valid: ${validFiles.length}`);
            });
            
            // Range input
            document.getElementById('skill-level').addEventListener('input', function() {
                document.getElementById('skill-value').textContent = this.value;
                logFormEvent('RANGE_CHANGE', this, `value: ${this.value}`);
            });
            
            // Color picker
            document.getElementById('favorite-color').addEventListener('input', function() {
                document.getElementById('color-value').textContent = this.value;
                document.getElementById('color-value').style.color = this.value;
                logFormEvent('COLOR_CHANGE', this, `color: ${this.value}`);
            });
        }

        // Event monitor functions
        function clearEventMonitor() {
            const monitor = document.getElementById('event-monitor');
            monitor.innerHTML = '<div>🔥 Form Event Monitor - Events จะแสดงที่นี่</div>';
        }

        function toggleEventLogging() {
            eventLoggingEnabled = !eventLoggingEnabled;
            const status = eventLoggingEnabled ? 'เปิด' : 'ปิด';
            logFormEvent('LOGGING', { name: 'system' }, `logging ${status}`);
        }

        function exportFormData() {
            const form = document.getElementById('registration-form');
            const formData = new FormData(form);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Add additional data
            data.skillLevel = document.getElementById('skill-level').value;
            data.favoriteColor = document.getElementById('favorite-color').value;
            data.exportTime = new Date().toISOString();
            
            const jsonData = JSON.stringify(data, null, 2);
            
            // Create and download file
            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'form-data.json';
            a.click();
            URL.revokeObjectURL(url);
            
            logFormEvent('EXPORT', form, `data exported: ${Object.keys(data).length} fields`);
        }

        // Initialize all form events
        function initializeFormEvents() {
            setupFormValidation();
            setupAdvancedFeatures();
            updateFormStatus();
            
            console.log('=== Form Events LAB 3 เริ่มต้น ===');
            logFormEvent('INIT', { name: 'system' }, 'Form validation system ready');
        }

        // Start when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initializeFormEvents();
        });
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. กรอกข้อมูลในฟอร์มและดู real-time validation
2. ทดสอบการอัพโหลดไฟล์และ advanced inputs
3. สังเกต event monitor และการทำงานของ events
4. ลองส่งฟอร์มและดูการจำลอง submission

---

## 📚 **LAB 4: Event Bubbling และ Delegation**

### **💻 Exercise 4.1: Event Propagation**

**สร้างไฟล์:** `event-lab4.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB 4: Event Bubbling และ Delegation</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f0f2f5; }
        .demo-section { background: white; padding: 20px; margin: 15px 0; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .nested-demo { background: #ffe0e6; border: 3px solid #ff69b4; padding: 20px; border-radius: 10px; margin: 20px; cursor: pointer; }
        .nested-demo .level2 { background: #e0f0ff; border: 3px solid #4169e1; padding: 15px; border-radius: 8px; margin: 15px; }
        .nested-demo .level3 { background: #e0ffe0; border: 3px solid #32cd32; padding: 10px; border-radius: 6px; margin: 10px; }
        .nested-demo .level4 { background: #fff0e0; border: 3px solid #ffa500; padding: 8px; border-radius: 4px; margin: 8px; }
        .event-log { background: #1e1e1e; color: #00ff00; padding: 15px; border-radius: 8px; font-family: monospace; height: 200px; overflow-y: auto; margin: 15px 0; }
        .control-btn { background: #007bff; color: white; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; margin: 5px; }
        .control-btn:hover { background: #0056b3; }
        .todo-container { background: #f8f9fa; border: 2px dashed #6c757d; padding: 20px; border-radius: 10px; min-height: 200px; }
        .todo-item { background: white; border: 1px solid #dee2e6; padding: 10px; margin: 5px 0; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; }
        .todo-item.completed { background: #d4edda; text-decoration: line-through; opacity: 0.7; }
        .btn-small { padding: 4px 8px; font-size: 12px; margin: 0 2px; }
    </style>
</head>
<body>
    <h1>🔄 LAB 4: Event Bubbling และ Delegation</h1>

    <!-- Section 1: Event Bubbling Demo -->
    <div class="demo-section">
        <h3>🔥 Event Bubbling Demonstration</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4>📦 Nested Elements:</h4>
                <div class="nested-demo" id="level1" data-level="1">
                    Level 1 - Grandparent (ชมพู)
                    <div class="level2" id="level2" data-level="2">
                        Level 2 - Parent (น้ำเงิน)
                        <div class="level3" id="level3" data-level="3">
                            Level 3 - Child (เขียว)
                            <div class="level4" id="level4" data-level="4">
                                Level 4 - Target (ส้ม)
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 15px;">
                    <button class="control-btn" onclick="clearBubbleLog()">ล้าง Log</button>
                    <button class="control-btn" onclick="toggleCapturing()">เปิด/ปิด Capturing</button>
                    <button class="control-btn" onclick="demonstratePropagation()">Demo อัตโนมัติ</button>
                </div>
            </div>
            
            <div>
                <h4>📋 Event Propagation Log:</h4>
                <div id="bubble-log" class="event-log">
                    <div>🔥 คลิกที่ elements ด้านซ้ายเพื่อดู event bubbling</div>
                </div>
                
                <div style="background: #fff3cd; padding: 10px; border-radius: 5px; margin-top: 10px; font-size: 14px;">
                    <strong>💡 ทำความเข้าใจ:</strong><br>
                    • Event เริ่มจาก Target → Bubble ขึ้นไปหา Parent<br>
                    • ลำดับ: Target → Child → Parent → Grandparent<br>
                    • ใช้ stopPropagation() เพื่อหยุด bubbling
                </div>
            </div>
        </div>
    </div>

    <!-- Section 2: Event Delegation -->
    <div class="demo-section">
        <h3>🎯 Event Delegation - Dynamic Todo List</h3>
        
        <div style="margin-bottom: 15px;">
            <input type="text" id="todo-input" placeholder="เพิ่ม todo ใหม่..." 
                   style="padding: 8px; border: 1px solid #ddd; border-radius: 4px; width: 300px;">
            <button class="control-btn" onclick="addTodo()">เพิ่ม Todo</button>
            <button class="control-btn" onclick="addMultipleTodos()">เพิ่มหลายรายการ</button>
            <button class="control-btn" onclick="clearAllTodos()">ล้างทั้งหมด</button>
        </div>
        
        <div id="todo-container" class="todo-container">
            <p style="text-align: center; color: #6c757d;">Todo items จะแสดงที่นี่</p>
            <p style="text-align: center; color: #6c757d; font-size: 14px;">ใช้ Event Delegation - ไม่ต้องเพิ่ม listener ให้แต่ละ item</p>
        </div>
        
        <div id="delegation-stats" style="background: #e9ecef; padding: 10px; border-radius: 5px; margin-top: 10px;">
            <strong>📊 สถิติ:</strong> <span id="todo-count">0</span> รายการ | 
            <span id="completed-count">0</span> เสร็จแล้ว | 
            Event Listeners: <span id="listener-count">1</span> ตัว (Event Delegation)
        </div>
    </div>

    <!-- Section 3: Custom Events -->
    <div class="demo-section">
        <h3>✨ Custom Events</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4>🚀 Event Dispatcher:</h4>
                <button class="control-btn" onclick="dispatchCustomEvent('userLogin')">Dispatch: User Login</button>
                <button class="control-btn" onclick="dispatchCustomEvent('dataLoaded')">Dispatch: Data Loaded</button>
                <button class="control-btn" onclick="dispatchCustomEvent('errorOccurred')">Dispatch: Error</button>
                <button class="control-btn" onclick="dispatchCustomEvent('gameScore')">Dispatch: Game Score</button>
                
                <div style="margin-top: 15px;">
                    <input type="text" id="custom-event-name" placeholder="Custom event name" 
                           style="padding: 8px; border: 1px solid #ddd; border-radius: 4px; width: 200px;">
                    <button class="control-btn" onclick="dispatchUserEvent()">Dispatch Custom</button>
                </div>
            </div>
            
            <div>
                <h4>🎧 Event Listeners:</h4>
                <div id="custom-event-log" class="event-log" style="height: 150px;">
                    <div>🎪 Custom Events จะแสดงที่นี่</div>
                </div>
                
                <div style="margin-top: 10px;">
                    <button class="control-btn" onclick="clearCustomLog()">ล้าง Log</button>
                    <button class="control-btn" onclick="showEventListeners()">แสดง Listeners</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Global variables
        let capturingEnabled = false;
        let todoCounter = 1;
        let customEventListeners = {};

        // LAB 4.1: Event Bubbling
        function setupEventBubbling() {
            const levels = ['level1', 'level2', 'level3', 'level4'];
            
            levels.forEach(levelId => {
                const element = document.getElementById(levelId);
                
                // Bubbling phase (default)
                element.addEventListener('click', function(event) {
                    logBubbleEvent('BUBBLE', this, event);
                    
                    // Visual feedback
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                }, false);
                
                // Capturing phase (optional)
                element.addEventListener('click', function(event) {
                    if (capturingEnabled) {
                        logBubbleEvent('CAPTURE', this, event);
                    }
                }, true);
            });
        }

        function logBubbleEvent(phase, element, event) {
            const log = document.getElementById('bubble-log');
            const level = element.dataset.level;
            const levelNames = {
                '1': 'Grandparent',
                '2': 'Parent', 
                '3': 'Child',
                '4': 'Target'
            };
            
            const timestamp = new Date().toLocaleTimeString();
            const entry = document.createElement('div');
            entry.innerHTML = `[${timestamp}] ${phase}: Level ${level} (${levelNames[level]})`;
            
            if (phase === 'CAPTURE') {
                entry.style.color = '#ffff00';
            } else {
                entry.style.color = level === '4' ? '#ff6b6b' : '#00ff00';
            }
            
            log.appendChild(entry);
            log.scrollTop = log.scrollHeight;
            
            console.log(`${phase} - Level ${level}:`, element);
        }

        function clearBubbleLog() {
            const log = document.getElementById('bubble-log');
            log.innerHTML = '<div>🔥 คลิกที่ elements ด้านซ้ายเพื่อดู event bubbling</div>';
        }

        function toggleCapturing() {
            capturingEnabled = !capturingEnabled;
            const status = capturingEnabled ? 'เปิด' : 'ปิด';
            logBubbleEvent('SYSTEM', { dataset: { level: 'system' } }, { 
                type: 'toggle',
                message: `Capturing phase ${status}`
            });
        }

        function demonstratePropagation() {
            clearBubbleLog();
            
            const log = document.getElementById('bubble-log');
            const steps = [
                'เริ่มต้น Event Propagation Demo...',
                'Phase 1: Capturing (จากบนลงล่าง)',
                'Phase 2: Target (ที่ element ที่ถูกคลิก)', 
                'Phase 3: Bubbling (จากล่างขึ้นบน)',
                'Demo เสร็จสิ้น - ลองคลิกเอง!'
            ];
            
            let delay = 0;
            steps.forEach((step, index) => {
                setTimeout(() => {
                    const entry = document.createElement('div');
                    entry.textContent = step;
                    entry.style.color = '#ffa500';
                    log.appendChild(entry);
                    log.scrollTop = log.scrollHeight;
                }, delay);
                delay += 1000;
            });
        }

        // LAB 4.2: Event Delegation
        function setupEventDelegation() {
            const container = document.getElementById('todo-container');
            
            // Single event listener for all todos (Event Delegation)
            container.addEventListener('click', function(event) {
                const target = event.target;
                
                // Handle complete button
                if (target.classList.contains('complete-btn')) {
                    const todoItem = target.closest('.todo-item');
                    todoItem.classList.toggle('completed');
                    target.textContent = todoItem.classList.contains('completed') ? '↺' : '✓';
                    updateTodoStats();
                    
                    console.log('Todo completed via delegation:', todoItem);
                }
                
                // Handle delete button
                if (target.classList.contains('delete-btn')) {
                    const todoItem = target.closest('.todo-item');
                    todoItem.remove();
                    updateTodoStats();
                    
                    console.log('Todo deleted via delegation:', todoItem);
                }
                
                // Handle edit button
                if (target.classList.contains('edit-btn')) {
                    const todoItem = target.closest('.todo-item');
                    const textSpan = todoItem.querySelector('.todo-text');
                    const newText = prompt('แก้ไขข้อความ:', textSpan.textContent);
                    
                    if (newText && newText.trim()) {
                        textSpan.textContent = newText.trim();
                    }
                    
                    console.log('Todo edited via delegation:', todoItem);
                }
            });
            
            // Double click to edit (Event Delegation)
            container.addEventListener('dblclick', function(event) {
                const todoItem = event.target.closest('.todo-item');
                if (todoItem) {
                    const textSpan = todoItem.querySelector('.todo-text');
                    const newText = prompt('แก้ไขข้อความ (Double Click):', textSpan.textContent);
                    
                    if (newText && newText.trim()) {
                        textSpan.textContent = newText.trim();
                    }
                }
            });
        }

        function addTodo() {
            const input = document.getElementById('todo-input');
            const text = input.value.trim();
            
            if (!text) {
                alert('กรุณาใส่ข้อความ todo');
                return;
            }
            
            createTodoElement(text);
            input.value = '';
            updateTodoStats();
        }

        function createTodoElement(text) {
            const container = document.getElementById('todo-container');
            
            // Remove placeholder text
            if (container.children.length === 2) {
                container.innerHTML = '';
            }
            
            const todoItem = document.createElement('div');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <span class="todo-text">${text}</span>
                <div>
                    <button class="control-btn btn-small complete-btn">✓</button>
                    <button class="control-btn btn-small edit-btn" style="background: #ffc107;">✏️</button>
                    <button class="control-btn btn-small delete-btn" style="background: #dc3545;">🗑️</button>
                </div>
            `;
            
            container.appendChild(todoItem);
            
            // Animation
            todoItem.style.opacity = '0';
            todoItem.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                todoItem.style.transition = 'all 0.3s ease';
                todoItem.style.opacity = '1';
                todoItem.style.transform = 'translateX(0)';
            }, 10);
        }

        function addMultipleTodos() {
            const sampleTodos = [
                'เรียน JavaScript Event Handling',
                'ทำแบบฝึกหัด DOM Manipulation', 
                'อ่านเอกสาร Web APIs',
                'สร้างโปรเจค Interactive Website',
                'ฝึกใช้ Event Delegation'
            ];
            
            sampleTodos.forEach((todo, index) => {
                setTimeout(() => {
                    createTodoElement(todo);
                    updateTodoStats();
                }, index * 200);
            });
        }

        function clearAllTodos() {
            const container = document.getElementById('todo-container');
            container.innerHTML = `
                <p style="text-align: center; color: #6c757d;">Todo items จะแสดงที่นี่</p>
                <p style="text-align: center; color: #6c757d; font-size: 14px;">ใช้ Event Delegation - ไม่ต้องเพิ่ม listener ให้แต่ละ item</p>
            `;
            updateTodoStats();
        }

        function updateTodoStats() {
            const todos = document.querySelectorAll('.todo-item');
            const completed = document.querySelectorAll('.todo-item.completed');
            
            document.getElementById('todo-count').textContent = todos.length;
            document.getElementById('completed-count').textContent = completed.length;
            document.getElementById('listener-count').textContent = '1';
        }

        // LAB 4.3: Custom Events
        function setupCustomEvents() {
            // Register custom event listeners
            const eventTypes = ['userLogin', 'dataLoaded', 'errorOccurred', 'gameScore'];
            
            eventTypes.forEach(eventType => {
                document.addEventListener(eventType, function(event) {
                    logCustomEvent(eventType, event.detail);
                });
                
                customEventListeners[eventType] = true;
            });
            
            // Generic custom event listener
            document.addEventListener('customUserEvent', function(event) {
                logCustomEvent('customUserEvent', event.detail);
            });
        }

        function dispatchCustomEvent(eventType) {
            let detail = {};
            
            switch (eventType) {
                case 'userLogin':
                    detail = { 
                        username: 'student123', 
                        timestamp: Date.now(),
                        sessionId: Math.random().toString(36).substr(2, 9)
                    };
                    break;
                case 'dataLoaded':
                    detail = { 
                        dataSize: Math.floor(Math.random() * 1000) + 100,
                        loadTime: Math.floor(Math.random() * 500) + 50,
                        status: 'success'
                    };
                    break;
                case 'errorOccurred':
                    detail = { 
                        errorCode: 'JS_' + Math.floor(Math.random() * 999),
                        message: 'Simulated error for demo',
                        severity: 'warning'
                    };
                    break;
                case 'gameScore':
                    detail = { 
                        score: Math.floor(Math.random() * 10000),
                        level: Math.floor(Math.random() * 10) + 1,
                        player: 'Player1'
                    };
                    break;
            }
            
            const customEvent = new CustomEvent(eventType, { detail });
            document.dispatchEvent(customEvent);
            
            console.log('Dispatched custom event:', eventType, detail);
        }

        function dispatchUserEvent() {
            const eventName = document.getElementById('custom-event-name').value.trim();
            
            if (!eventName) {
                alert('กรุณาใส่ชื่อ event');
                return;
            }
            
            const detail = {
                eventName: eventName,
                timestamp: Date.now(),
                userData: { message: 'Custom event from user input' }
            };
            
            const customEvent = new CustomEvent('customUserEvent', { detail });
            document.dispatchEvent(customEvent);
            
            document.getElementById('custom-event-name').value = '';
        }

        function logCustomEvent(eventType, detail) {
            const log = document.getElementById('custom-event-log');
            const timestamp = new Date().toLocaleTimeString();
            
            const entry = document.createElement('div');
            entry.innerHTML = `[${timestamp}] 🎪 ${eventType}`;
            
            if (detail) {
                const detailDiv = document.createElement('div');
                detailDiv.innerHTML = `   📋 ${JSON.stringify(detail)}`;
                detailDiv.style.color = '#ffff00';
                detailDiv.style.fontSize = '12px';
                detailDiv.style.marginLeft = '20px';
                log.appendChild(entry);
                log.appendChild(detailDiv);
            } else {
                log.appendChild(entry);
            }
            
            log.scrollTop = log.scrollHeight;
        }

        function clearCustomLog() {
            const log = document.getElementById('custom-event-log');
            log.innerHTML = '<div>🎪 Custom Events จะแสดงที่นี่</div>';
        }

        function showEventListeners() {
            const listeners = Object.keys(customEventListeners);
            alert(`🎧 Custom Event Listeners:\n\n${listeners.join('\n')}\n\nรวม ${listeners.length + 1} listeners (+ 1 สำหรับ customUserEvent)`);
        }

        // Initialize all events
        function initializeAdvancedEvents() {
            setupEventBubbling();
            setupEventDelegation();
            setupCustomEvents();
            updateTodoStats();
            
            console.log('=== Advanced Events LAB 4 เริ่มต้น ===');
        }

        // Add Enter key support for inputs
        document.addEventListener('DOMContentLoaded', function() {
            initializeAdvancedEvents();
            
            // Enter key for todo input
            document.getElementById('todo-input').addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTodo();
                }
            });
            
            // Enter key for custom event input
            document.getElementById('custom-event-name').addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    dispatchUserEvent();
                }
            });
        });
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. คลิกที่ nested elements และสังเกต event bubbling
2. เพิ่ม/ลบ/แก้ไข todos และดู event delegation ทำงาน
3. ทดสอบ custom events และดู event listeners
4. เข้าใจความแตกต่างระหว่าง bubbling และ capturing

---

## 📚 **LAB 5: โปรเจครวม - Interactive Game**

### **💻 Final Project: Memory Card Game**

**สร้างไฟล์:** `game-project.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Card Game - Event Handling Final Project</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
        .game-container { max-width: 1000px; margin: 0 auto; }
        .header { background: white; border-radius: 15px; padding: 20px; margin-bottom: 20px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .game-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px; }
        .stat-card { background: white; padding: 15px; border-radius: 10px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .stat-number { font-size: 2em; font-weight: bold; color: #667eea; }
        .game-board { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 20px 0; padding: 20px; background: white; border-radius: 15px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .card { aspect-ratio: 1; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 2em; color: white; cursor: pointer; transition: all 0.3s ease; position: relative; overflow: hidden; }
        .card:hover { transform: scale(1.05); }
        .card.flipped { background: white; color: #333; border: 3px solid #667eea; }
        .card.matched { background: #4CAF50; animation: bounce 0.6s ease; }
        .card.wrong { background: #f44336; animation: shake 0.6s ease; }
        .controls { background: white; padding: 20px; border-radius: 15px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .game-btn { background: #667eea; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; margin: 5px; font-size: 16px; }
        .game-btn:hover { background: #5a67d8; transform: translateY(-2px); }
        .game-btn:disabled { background: #a0aec0; cursor: not-allowed; transform: none; }
        .difficulty-select { padding: 8px; border: 1px solid #ddd; border-radius: 6px; margin: 0 10px; }
        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; }
        .modal-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 30px; border-radius: 15px; text-align: center; min-width: 300px; }
        .event-indicator { position: fixed; top: 20px; right: 20px; background: #333; color: #00ff00; padding: 10px; border-radius: 8px; font-family: monospace; font-size: 12px; max-width: 200px; opacity: 0.8; }
        @keyframes bounce { 0%, 20%, 60%, 100% { transform: translateY(0); } 40% { transform: translateY(-20px); } 80% { transform: translateY(-10px); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); } 20%, 40%, 60%, 80% { transform: translateX(5px); } }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
        .pulse { animation: pulse 2s infinite; }
    </style>
</head>
<body>
    <div class="game-container">
        <!-- Header -->
        <div class="header">
            <h1>🧠 Memory Card Game</h1>
            <p>Event Handling Final Project - จับคู่การ์ดให้ครบทุกคู่!</p>
        </div>

        <!-- Game Stats -->
        <div class="game-stats">
            <div class="stat-card">
                <div class="stat-number" id="moves-count">0</div>
                <div>Moves</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="matches-count">0</div>
                <div>Matches</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="timer">00:00</div>
                <div>Time</div>
            </div>
            <div class="stat-card">
                <div class="stat-number" id="score">0</div>
                <div>Score</div>
            </div>
        </div>

        <!-- Game Board -->
        <div id="game-board" class="game-board">
            <!-- Cards will be generated here -->
        </div>

        <!-- Controls -->
        <div class="controls">
            <select id="difficulty" class="difficulty-select">
                <option value="easy">ง่าย (4x4)</option>
                <option value="medium">ปานกลาง (4x6)</option>
                <option value="hard">ยาก (6x6)</option>
            </select>
            
            <button id="new-game-btn" class="game-btn">🎮 เกมใหม่</button>
            <button id="pause-btn" class="game-btn">⏸️ พัก</button>
            <button id="hint-btn" class="game-btn">💡 คำใบ้</button>
            <button id="reset-btn" class="game-btn" style="background: #f44336;">🔄 รีเซ็ต</button>
            
            <div style="margin-top: 15px;">
                <button id="mute-btn" class="game-btn" style="background: #ff9800;">🔊 เสียง</button>
                <button id="fullscreen-btn" class="game-btn" style="background: #9c27b0;">📺 เต็มจอ</button>
                <button id="leaderboard-btn" class="game-btn" style="background: #4caf50;">🏆 คะแนน</button>
            </div>
        </div>
    </div>

    <!-- Event Indicator -->
    <div id="event-indicator" class="event-indicator">
        Event Monitor: Ready
    </div>

    <!-- Game Over Modal -->
    <div id="game-over-modal" class="modal">
        <div class="modal-content">
            <h2>🎉 ยินดีด้วย!</h2>
            <div id="final-stats"></div>
            <div style="margin-top: 20px;">
                <button class="game-btn" onclick="closeModal()">ปิด</button>
                <button class="game-btn" onclick="startNewGame()">เล่นอีกครั้ง</button>
            </div>
        </div>
    </div>

    <!-- Pause Modal -->
    <div id="pause-modal" class="modal">
        <div class="modal-content">
            <h2>⏸️ เกมหยุดชั่วคราว</h2>
            <p>กดปุ่มเพื่อดำเนินการต่อ</p>
            <button class="game-btn" onclick="resumeGame()">▶️ เล่นต่อ</button>
        </div>
    </div>

    <script>
        // Game state
        class MemoryGame {
            constructor() {
                this.cards = [];
                this.flippedCards = [];
                this.matches = 0;
                this.moves = 0;
                this.score = 0;
                this.timer = 0;
                this.timerInterval = null;
                this.gameStarted = false;
                this.gamePaused = false;
                this.gameOver = false;
                this.difficulty = 'easy';
                this.soundEnabled = true;
                this.hintsUsed = 0;
                
                this.cardSymbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦'];
                
                this.init();
            }
            
            init() {
                this.setupEventListeners();
                this.setupKeyboardControls();
                this.createBoard();
                this.updateDisplay();
                this.logEvent('GAME_INIT', 'Memory Game initialized');
            }
            
            setupEventListeners() {
                // Game board events (Event Delegation)
                document.getElementById('game-board').addEventListener('click', (e) => {
                    if (e.target.classList.contains('card') && !this.gamePaused) {
                        this.handleCardClick(e.target);
                    }
                });
                
                // Control buttons
                document.getElementById('new-game-btn').addEventListener('click', () => this.startNewGame());
                document.getElementById('pause-btn').addEventListener('click', () => this.togglePause());
                document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
                document.getElementById('reset-btn').addEventListener('click', () => this.resetGame());
                document.getElementById('mute-btn').addEventListener('click', () => this.toggleSound());
                document.getElementById('fullscreen-btn').addEventListener('click', () => this.toggleFullscreen());
                document.getElementById('leaderboard-btn').addEventListener('click', () => this.showLeaderboard());
                
                // Difficulty change
                document.getElementById('difficulty').addEventListener('change', (e) => {
                    this.difficulty = e.target.value;
                    this.createBoard();
                    this.logEvent('DIFFICULTY_CHANGE', this.difficulty);
                });
                
                // Modal events
                document.addEventListener('click', (e) => {
                    if (e.target.classList.contains('modal')) {
                        this.closeModal();
                    }
                });
                
                // Window events
                window.addEventListener('beforeunload', () => {
                    this.saveGameState();
                });
                
                window.addEventListener('blur', () => {
                    if (this.gameStarted && !this.gamePaused) {
                        this.pauseGame();
                    }
                });
                
                // Visibility change (for tab switching)
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden && this.gameStarted && !this.gamePaused) {
                        this.pauseGame();
                    }
                });
            }
            
            setupKeyboardControls() {
                document.addEventListener('keydown', (e) => {
                    if (this.gamePaused) return;
                    
                    switch (e.key) {
                        case ' ':
                        case 'Escape':
                            e.preventDefault();
                            this.togglePause();
                            break;
                        case 'n':
                        case 'N':
                            if (e.ctrlKey) {
                                e.preventDefault();
                                this.startNewGame();
                            }
                            break;
                        case 'h':
                        case 'H':
                            this.showHint();
                            break;
                        case 'r':
                        case 'R':
                            if (e.ctrlKey) {
                                e.preventDefault();
                                this.resetGame();
                            }
                            break;
                        case 'm':
                        case 'M':
                            this.toggleSound();
                            break;
                        case 'F11':
                            e.preventDefault();
                            this.toggleFullscreen();
                            break;
                    }
                    
                    this.logEvent('KEYBOARD', `Key: ${e.key}, Ctrl: ${e.ctrlKey}`);
                });
            }
            
            createBoard() {
                const board = document.getElementById('game-board');
                const difficulties = {
                    easy: { rows: 4, cols: 4 },
                    medium: { rows: 4, cols: 6 },
                    hard: { rows: 6, cols: 6 }
                };
                
                const { rows, cols } = difficulties[this.difficulty];
                const totalCards = rows * cols;
                const pairs = totalCards / 2;
                
                // Reset game state
                this.cards = [];
                this.flippedCards = [];
                this.matches = 0;
                this.moves = 0;
                this.score = 0;
                this.timer = 0;
                this.gameStarted = false;
                this.gameOver = false;
                
                // Clear timer
                if (this.timerInterval) {
                    clearInterval(this.timerInterval);
                }
                
                // Create card pairs
                const symbols = this.cardSymbols.slice(0, pairs);
                const cardData = [...symbols, ...symbols];
                
                // Shuffle cards
                for (let i = cardData.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
                }
                
                // Set grid layout
                board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
                board.innerHTML = '';
                
                // Create card elements
                cardData.forEach((symbol, index) => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.dataset.symbol = symbol;
                    card.dataset.index = index;
                    card.innerHTML = '?';
                    board.appendChild(card);
                    
                    this.cards.push({
                        element: card,
                        symbol: symbol,
                        index: index,
                        flipped: false,
                        matched: false
                    });
                });
                
                this.updateDisplay();
                this.logEvent('BOARD_CREATED', `${this.difficulty}: ${rows}x${cols}`);
            }
            
            handleCardClick(cardElement) {
                const cardIndex = parseInt(cardElement.dataset.index);
                const card = this.cards[cardIndex];
                
                // Ignore if card is already flipped or matched
                if (card.flipped || card.matched) return;
                
                // Start timer on first move
                if (!this.gameStarted) {
                    this.startTimer();
                    this.gameStarted = true;
                }
                
                // Flip card
                this.flipCard(card);
                this.logEvent('CARD_CLICK', `Card ${cardIndex}: ${card.symbol}`);
                
                // Check for match
                if (this.flippedCards.length === 2) {
                    this.moves++;
                    this.checkMatch();
                }
                
                this.updateDisplay();
            }
            
            flipCard(card) {
                card.flipped = true;
                card.element.classList.add('flipped');
                card.element.innerHTML = card.symbol;
                this.flippedCards.push(card);
                
                if (this.soundEnabled) {
                    this.playSound('flip');
                }
            }
            
            checkMatch() {
                const [card1, card2] = this.flippedCards;
                
                setTimeout(() => {
                    if (card1.symbol === card2.symbol) {
                        // Match found
                        this.handleMatch(card1, card2);
                    } else {
                        // No match
                        this.handleMismatch(card1, card2);
                    }
                    
                    this.flippedCards = [];
                    this.updateDisplay();
                    
                    // Check for game over
                    if (this.matches === this.cards.length / 2) {
                        this.endGame();
                    }
                }, 1000);
            }
            
            handleMatch(card1, card2) {
                card1.matched = card2.matched = true;
                card1.element.classList.add('matched');
                card2.element.classList.add('matched');
                card1.element.classList.remove('flipped');
                card2.element.classList.remove('flipped');
                
                this.matches++;
                this.score += this.calculateMatchScore();
                
                if (this.soundEnabled) {
                    this.playSound('match');
                }
                
                this.logEvent('MATCH_FOUND', `Match ${this.matches}: ${card1.symbol}`);
            }
            
            handleMismatch(card1, card2) {
                card1.element.classList.add('wrong');
                card2.element.classList.add('wrong');
                
                setTimeout(() => {
                    card1.flipped = card2.flipped = false;
                    card1.element.classList.remove('flipped', 'wrong');
                    card2.element.classList.remove('flipped', 'wrong');
                    card1.element.innerHTML = '?';
                    card2.element.innerHTML = '?';
                }, 500);
                
                if (this.soundEnabled) {
                    this.playSound('wrong');
                }
                
                this.logEvent('MISMATCH', `${card1.symbol} ≠ ${card2.symbol}`);
            }
            
            calculateMatchScore() {
                const baseScore = 100;
                const timeBonus = Math.max(0, 50 - Math.floor(this.timer / 10));
                const movePenalty = Math.max(0, this.moves * 2);
                return baseScore + timeBonus - movePenalty;
            }
            
            startTimer() {
                this.timerInterval = setInterval(() => {
                    if (!this.gamePaused) {
                        this.timer++;
                        this.updateDisplay();
                    }
                }, 1000);
            }
            
            updateDisplay() {
                document.getElementById('moves-count').textContent = this.moves;
                document.getElementById('matches-count').textContent = this.matches;
                document.getElementById('score').textContent = this.score;
                
                const minutes = Math.floor(this.timer / 60);
                const seconds = this.timer % 60;
                document.getElementById('timer').textContent = 
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            startNewGame() {
                this.createBoard();
                this.logEvent('NEW_GAME', `Difficulty: ${this.difficulty}`);
            }
            
            togglePause() {
                if (!this.gameStarted) return;
                
                this.gamePaused = !this.gamePaused;
                
                if (this.gamePaused) {
                    this.pauseGame();
                } else {
                    this.resumeGame();
                }
            }
            
            pauseGame() {
                this.gamePaused = true;
                document.getElementById('pause-modal').style.display = 'block';
                document.getElementById('pause-btn').innerHTML = '▶️ เล่นต่อ';
                this.logEvent('GAME_PAUSED', 'Game paused');
            }
            
            resumeGame() {
                this.gamePaused = false;
                document.getElementById('pause-modal').style.display = 'none';
                document.getElementById('pause-btn').innerHTML = '⏸️ พัก';
                this.logEvent('GAME_RESUMED', 'Game resumed');
            }
            
            showHint() {
                if (this.hintsUsed >= 3) {
                    alert('🚫 คำใบ้หมดแล้ว! (สูงสุด 3 ครั้งต่อเกม)');
                    return;
                }
                
                const unmatched = this.cards.filter(card => !card.matched && !card.flipped);
                if (unmatched.length < 2) return;
                
                // Find a matching pair
                for (let i = 0; i < unmatched.length; i++) {
                    for (let j = i + 1; j < unmatched.length; j++) {
                        if (unmatched[i].symbol === unmatched[j].symbol) {
                            // Highlight the pair
                            unmatched[i].element.classList.add('pulse');
                            unmatched[j].element.classList.add('pulse');
                            
                            setTimeout(() => {
                                unmatched[i].element.classList.remove('pulse');
                                unmatched[j].element.classList.remove('pulse');
                            }, 3000);
                            
                            this.hintsUsed++;
                            this.score -= 20; // Penalty for using hint
                            this.updateDisplay();
                            
                            this.logEvent('HINT_USED', `Hint ${this.hintsUsed}/3`);
                            return;
                        }
                    }
                }
            }
            
            resetGame() {
                if (confirm('🔄 รีเซ็ตเกมและเริ่มใหม่?')) {
                    this.createBoard();
                    this.hintsUsed = 0;
                    this.logEvent('GAME_RESET', 'Game reset by user');
                }
            }
            
            toggleSound() {
                this.soundEnabled = !this.soundEnabled;
                const btn = document.getElementById('mute-btn');
                btn.innerHTML = this.soundEnabled ? '🔊 เสียง' : '🔇 เงียบ';
                this.logEvent('SOUND_TOGGLE', this.soundEnabled ? 'enabled' : 'disabled');
            }
            
            toggleFullscreen() {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
                this.logEvent('FULLSCREEN_TOGGLE', 'Fullscreen toggled');
            }
            
            showLeaderboard() {
                const scores = this.getStoredScores();
                let leaderboard = '🏆 คะแนนสูงสุด:\n\n';
                
                if (scores.length === 0) {
                    leaderboard += 'ยังไม่มีคะแนน\nเล่นเกมจนจบเพื่อบันทึกคะแนน!';
                } else {
                    scores.forEach((score, index) => {
                        leaderboard += `${index + 1}. ${score.score} คะแนน (${score.difficulty}) - ${score.date}\n`;
                    });
                }
                
                alert(leaderboard);
                this.logEvent('LEADERBOARD_VIEWED', `${scores.length} scores`);
            }
            
            endGame() {
                this.gameOver = true;
                clearInterval(this.timerInterval);
                
                const finalScore = this.calculateFinalScore();
                this.saveScore(finalScore);
                
                document.getElementById('final-stats').innerHTML = `
                    <p><strong>🎯 Final Score:</strong> ${finalScore}</p>
                    <p><strong>⏱️ Time:</strong> ${document.getElementById('timer').textContent}</p>
                    <p><strong>🔄 Moves:</strong> ${this.moves}</p>
                    <p><strong>💡 Hints Used:</strong> ${this.hintsUsed}/3</p>
                    <p><strong>🎮 Difficulty:</strong> ${this.difficulty}</p>
                `;
                
                document.getElementById('game-over-modal').style.display = 'block';
                
                if (this.soundEnabled) {
                    this.playSound('victory');
                }
                
                this.logEvent('GAME_COMPLETED', `Score: ${finalScore}, Time: ${this.timer}s`);
            }
            
            calculateFinalScore() {
                let bonus = 0;
                
                // Time bonus
                if (this.timer < 60) bonus += 200;
                else if (this.timer < 120) bonus += 100;
                
                // Move efficiency bonus
                const optimalMoves = this.cards.length / 2;
                if (this.moves <= optimalMoves * 1.5) bonus += 150;
                
                // Difficulty multiplier
                const multipliers = { easy: 1, medium: 1.5, hard: 2 };
                
                return Math.round((this.score + bonus) * multipliers[this.difficulty]);
            }
            
            saveScore(score) {
                const scores = this.getStoredScores();
                scores.push({
                    score: score,
                    difficulty: this.difficulty,
                    time: this.timer,
                    moves: this.moves,
                    date: new Date().toLocaleDateString('th-TH')
                });
                
                scores.sort((a, b) => b.score - a.score);
                scores.splice(10); // Keep top 10 only
                
                localStorage.setItem('memoryGameScores', JSON.stringify(scores));
            }
            
            getStoredScores() {
                const scores = localStorage.getItem('memoryGameScores');
                return scores ? JSON.parse(scores) : [];
            }
            
            saveGameState() {
                const gameState = {
                    cards: this.cards,
                    timer: this.timer,
                    moves: this.moves,
                    score: this.score,
                    matches: this.matches,
                    difficulty: this.difficulty,
                    gameStarted: this.gameStarted
                };
                
                localStorage.setItem('memoryGameState', JSON.stringify(gameState));
            }
            
            closeModal() {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
            }
            
            playSound(type) {
                // Simulate sound effects with visual feedback
                const indicator = document.getElementById('event-indicator');
                const sounds = {
                    flip: 'Sound: Flip 🔄',
                    match: 'Sound: Match ✅',
                    wrong: 'Sound: Wrong ❌',
                    victory: 'Sound: Victory 🎉'
                };
                
                indicator.textContent = sounds[type] || 'Sound: ' + type;
                setTimeout(() => {
                    indicator.textContent = 'Event Monitor: Ready';
                }, 1000);
            }
            
            logEvent(eventType, details) {
                const indicator = document.getElementById('event-indicator');
                indicator.textContent = `${eventType}: ${details}`;
                
                setTimeout(() => {
                    indicator.textContent = 'Event Monitor: Ready';
                }, 2000);
                
                console.log(`Game Event: ${eventType}`, details);
            }
        }

        // Global functions for modal buttons
        function closeModal() {
            game.closeModal();
        }

        function startNewGame() {
            game.closeModal();
            game.startNewGame();
        }

        function resumeGame() {
            game.resumeGame();
        }

        // Initialize game
        let game;
        document.addEventListener('DOMContentLoaded', function() {
            game = new MemoryGame();
            console.log('=== Memory Card Game Loaded ===');
        });
    </script>
</body>
</html>
```

**🎯 สิ่งที่ต้องทำ:**
1. เล่นเกม Memory Card และสังเกต event handling
2. ทดสอบ keyboard shortcuts และ event delegation
3. ลองฟีเจอร์ต่างๆ เช่น pause, hint, fullscreen
4. ดู event indicator และการทำงานของ events
5. เรียนรู้การจัดการ game state และ local storage

---

## 🎉 **สรุปการเรียน Event Handling และ Interactive Elements**

### **🏆 ความสำเร็จที่ได้รับ:**

✅ **Mouse Events** - click, hover, drag, right-click ได้  
✅ **Keyboard Events** - keypress, shortcuts, typing game ได้  
✅ **Form Events** - validation, submission, file upload ได้  
✅ **Event Bubbling** - เข้าใจ propagation และ delegation ได้  
✅ **Custom Events** - สร้างและจัดการ events เองได้  
✅ **Interactive Game** - ใช้ events สร้างเกมครบวงจรได้     

### **💡 แนวคิดสำคัญที่ได้เรียน:**

**1. Event-Driven Programming**
- เว็บไซต์ทำงานตาม Events ที่เกิดขึ้น
- User Interactions → Events → JavaScript Responses
- การออกแบบ UX ที่ดีต้องคำนึงถึง Events

**2. Event Types และการใช้งาน**
- **Mouse Events**: click, dblclick, mousedown, mouseup, mouseover, mouseleave
- **Keyboard Events**: keydown, keyup, keypress + keyboard shortcuts
- **Form Events**: submit, input, change, focus, blur
- **Window Events**: load, resize, scroll, beforeunload

**3. Event Object Properties**
- `event.target` - element ที่เกิด event
- `event.currentTarget` - element ที่มี event listener
- `event.preventDefault()` - ป้องกันการทำงานปกติ
- `event.stopPropagation()` - หยุด event bubbling

**4. Event Delegation**
- ใช้ event listener 1 ตัวจัดการ elements หลายตัว
- เหมาะสำหรับ dynamic content
- ประหยัด memory และเพิ่มประสิทธิภาพ

**5. Best Practices**
- ใช้ `addEventListener()` แทน `onclick`
- ใช้ Event Delegation สำหรับ dynamic elements
- จัดการ memory leaks ด้วยการลบ listeners
- ใช้ `passive: true` สำหรับ scroll events

### **🚀 ขั้นตอนต่อไป:**

**หัวข้อถัดไป:** Form Validation และ Local Storage (LAB สุดท้าย)

**สิ่งที่จะเรียน:**
- Advanced Form Validation Techniques
- Regular Expressions สำหรับ validation
- Local Storage และ Session Storage
- การสร้าง Progressive Web Apps (PWA)

### **📝 การบ้าน (Optional):**

ปรับปรุง Memory Card Game โดยเพิ่ม:
1. **Multiplayer Mode** - เล่น 2 คน
2. **Custom Card Sets** - เพิ่มชุดการ์ดใหม่
3. **Sound Effects** - เสียงจริงแทน visual feedback
4. **Mobile Gestures** - swipe, pinch สำหรับมือถือ
5. **Online Leaderboard** - แข่งขันคะแนนกับคนอื่น

### **🎯 Project Ideas สำหรับฝึกฝน:**

**1. เกมง่ายๆ:**
- **Snake Game** - ใช้ keyboard events
- **Tic Tac Toe** - ใช้ click events และ game logic
- **Quiz Application** - ใช้ form events และ validation

**2. แอปพลิเคชัน:**
- **Todo List แบบขั้นสูง** - drag & drop, categories
- **Image Gallery** - keyboard navigation, slideshow
- **Chat Interface** - real-time typing indicators

**3. เครื่องมือ:**
- **Color Picker** - mouse events และ color manipulation
- **Drawing App** - mouse/touch events สำหรับวาดรูป
- **Music Player** - keyboard shortcuts และ media events

### **🔧 เทคนิคขั้นสูงที่น่าเรียน:**

**1. Performance Optimization:**
```javascript
// Throttling สำหรับ scroll events
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        }
    };
}

// Debouncing สำหรับ search input
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
```

**2. Touch Events สำหรับ Mobile:**
```javascript
element.addEventListener('touchstart', handleTouchStart);
element.addEventListener('touchmove', handleTouchMove);
element.addEventListener('touchend', handleTouchEnd);
```

**3. Intersection Observer สำหรับ Lazy Loading:**
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Load content when element comes into view
        }
    });
});
```

### **🌟 สิ่งที่ทำได้แล้วหลังเรียนครบ:**

✅ **Interactive Websites** - สร้างเว็บไซต์ที่ตอบสนองผู้ใช้ได้  
✅ **Web Games** - สร้างเกมบนเว็บได้  
✅ **Dynamic Forms** - ฟอร์มที่ validate แบบ real-time  
✅ **Event-Driven Apps** - แอปที่ทำงานตาม user interactions  
✅ **Responsive UI** - interface ที่ใช้งานง่ายและสวยงาม  

### **📚 แหล่งเรียนรู้เพิ่มเติม:**

- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) - รายชื่อ events ทั้งหมด
- [JavaScript Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) - ทำความเข้าใจ async behavior
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) - APIs ต่างๆ ที่ใช้ได้ในเบราว์เซอร์
- [Can I Use](https://caniuse.com/) - เช็ค browser compatibility

---

## 💬 **ข้อความสุดท้าย**

**Event Handling เป็นหัวใจของการสร้าง Interactive Web Applications!** 

การเรียนรู้ในหัวข้อนี้จะช่วยให้คุณ:
- **เข้าใจ** วิธีการทำงานของเว็บไซต์ interactive
- **สร้าง** user experiences ที่ดี
- **แก้ปัญหา** bugs ที่เกี่ยวกับ user interactions
- **พัฒนา** web applications ที่ทันสมัย

**คำแนะนำสำหรับการพัฒนาต่อ:**
1. **ฝึกหัดสม่ำเสมอ** - สร้างโปรเจคเล็กๆ ทุกวัน
2. **ศึกษา Libraries** - jQuery, React, Vue.js
3. **เรียนรู้ Testing** - วิธีการ test event handling
4. **Performance** - วิธีการเพิ่มประสิทธิภาพ

**หวังว่าบทเรียนนี้จะเป็นประโยชน์และสนุกกับการสร้าง Interactive Web! 🎓**

---

## 🎪 **Fun Facts เกี่ยวกับ Events:**

- **คลิกเมาส์ 1 ครั้ง** สร้าง events มากถึง 6-8 events (mousedown, mouseup, click, etc.)
- **Event ที่เก่าแก่ที่สุด** คือ `load` event ที่มีมาตั้งแต่ JavaScript เกิด
- **Mobile touch events** ซับซ้อนกว่า mouse events เพราะรองรับ multi-touch
- **Keyboard events** บางตัวทำงานต่างกันในแต่ละเบราว์เซอร์
- **Custom events** สามารถส่งข้อมูลได้ไม่จำกัดผ่าน `detail` property

**สนุกกับการเป็น Frontend Developer! 🚀👨‍💻👩‍💻**
