const config = {
    app: {
        port: process.env.PORT || 3000, //PORT
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project_fashion_watch" //connection string
    }
};

module.exports = config;