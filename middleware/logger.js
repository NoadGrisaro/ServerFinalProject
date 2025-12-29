const logger = (req, res, next) => {
    console.log(`[new request] method: ${req.method} | URL: ${req.url}`);
    next(); 
};

module.exports = logger;