module.exports = {
  port: process.env.PORT || 8000,
  dbUrl: process.env.DATABASE, // Mongo Atlas
  dbLocal: process.env.DATABASE_LOCAL,
  jwtSecretKey: process.env.JWT_SECRET,
  jwtExpireToken: process.env.JWT_EXPIRES_IN,
  jwtCookieExpire: process.env.JWT_COOKIE_EXPIRES,
  userEmail: process.env.EMAIL_USERNAME,
  userPassword: process.env.EMAIL_PASSWORD,
  emailHost: process.env.EMAIL_HOST,
  emailPort: process.env.EMAIL_PORT,
  emailFrom: process.env.EMAIL_FROM,
  sendingBlueApiKey: process.env.SENDINGBLUE_APIKEY,
  stripeApiKey: process.env.STRIPE_API_KEY,
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
};
