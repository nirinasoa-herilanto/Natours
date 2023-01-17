module.exports = {
  port: process.env.PORT || 8000,
  dbUrl: process.env.DATABASE, // Mongo Atlas
  dbLocal: process.env.DATABASE_LOCAL,
};
