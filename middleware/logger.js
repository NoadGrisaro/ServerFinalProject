const logger = (req, res, next) => {
    console.log(`[new request] method: ${req.method} | URL: ${req.url}`);
    next(); //the next func will pass the req to the next node in the chain.
};

module.exports = logger;