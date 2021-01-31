let config = {
    dbUrl: process.env.DBURL || "mongodb://localhost:27017/nodeStream",
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
    logDir: process.env.LOGDIR || "logs",
   // viewEngine: process.env.VIEW_ENGINE || "html"
  };
  
  module.exports = config;
  