const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');

// สร้างโฟลเดอร์ data ถ้าไม่มี
const ensureDataDir = async () => {
    try {
        await fs.access(DATA_DIR);
    } catch (error) {
        await fs.mkdir(DATA_DIR, { recursive: true });
    }
};

// อ่านข้อมูลจากไฟล์
const readJsonFile = async (filename) => {
    try {
        await ensureDataDir();
        const filePath = path.join(DATA_DIR, filename);
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // TODO: ถ้าไฟล์ไม่มี ให้ return array ว่าง []
        return [];
    }
};

// เขียนข้อมูลลงไฟล์
const writeJsonFile = async (filename, data) => {
    try {
        await ensureDataDir();
        const filePath = path.join(DATA_DIR, filename);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing file:', error);
        return false;
    }
};

// เพิ่มข้อมูลใหม่ลงไฟล์
const appendToJsonFile = async (filename, newData) => {
    try {
        const existingData = await readJsonFile(filename);
        
        // Add ID and timestamp to new data
        const dataWithId = {
            id: Date.now() + Math.random(), // Ensure unique ID
            ...newData,
            createdAt: new Date().toISOString()
        };
        
        existingData.push(dataWithId);
        await writeJsonFile(filename, existingData);
        return dataWithId;
    } catch (error) {
        console.error('Error appending to file:', error);
        return null;
    }
};

// Get file statistics
const getFileStats = async () => {
    try {
        const contacts = await readJsonFile('contacts.json');
        const feedbacks = await readJsonFile('feedback.json');
        
        return {
            contacts: {
                total: contacts.length,
                recent: contacts.filter(c => {
                    const dayAgo = new Date();
                    dayAgo.setDate(dayAgo.getDate() - 1);
                    return new Date(c.createdAt) > dayAgo;
                }).length
            },
            feedbacks: {
                total: feedbacks.length,
                recent: feedbacks.filter(f => {
                    const dayAgo = new Date();
                    dayAgo.setDate(dayAgo.getDate() - 1);
                    return new Date(f.createdAt) > dayAgo;
                }).length,
                averageRating: feedbacks.length > 0 
                    ? (feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length).toFixed(2)
                    : 0
            }
        };
    } catch (error) {
        console.error('Error getting file stats:', error);
        return {
            contacts: { total: 0, recent: 0 },
            feedbacks: { total: 0, recent: 0, averageRating: 0 }
        };
    }
};

module.exports = {
    readJsonFile,
    writeJsonFile,
    appendToJsonFile,
    getFileStats
};