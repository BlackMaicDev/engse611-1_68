const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    if (pathname === '/') {
        res.end('<h1>หน้าแรก</h1><a href="/about">เกี่ยวกับเรา</a>');
    } else if (pathname === '/about') {
        res.end('<h1>เกี่ยวกับเรา</h1><a href="/">กลับหน้าแรก</a>');
    }else if (pathname === '/contact') {
        res.end('<h1>ติดต่อฉัน</h1><a href="/">กลับหน้าแรก</a>');
    } else {
        res.writeHead(404);
        res.end('<h1>ไม่พบหน้าที่ค้นหา 😢</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});