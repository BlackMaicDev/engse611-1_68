// middleware/logger.js

module.exports = (req, res, next) => {
    const start = Date.now();

    // ฟัง event "finish" ของ response
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(
            `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ` +
            `Status: ${res.statusCode} - ${duration}ms`
        );
    });

    next();
};
