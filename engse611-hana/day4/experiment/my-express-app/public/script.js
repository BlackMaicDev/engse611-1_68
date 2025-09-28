async function callAPI() {
    try {
        const response = await fetch('/api/message');
        const data = await response.json();
        
        document.getElementById('result').innerHTML = `
            <h3>📡 ข้อมูลจาก API:</h3>
            <p>${data.message}</p>
            <small>เวลา: ${data.timestamp}</small>
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = 
            '<p>❌ เกิดข้อผิดพลาด: ' + error.message + '</p>';
    }
}

async function testCORS() {
    try {
        // เรียก API จาก port อื่น
        const response = await fetch('http://localhost:3001/api/external');
        const data = await response.json();
        console.log('CORS success:', data);

        document.getElementById('result').innerHTML = `
        <h3> ข้อมูล log </h3>
        <p>${data.message}</p>
        <p>Time : ${data.timestamp}</p>
        <p>Cors API : http://localhost:3001</p>
        `
    } catch (error) {
        console.error('CORS error:', error);
    }
}

// เรียกทดสอบ
testCORS();