require('dotenv').config();
const { app } = require('./config/slack');
const { handleMessage } = require('./handlers/messageHandler');
const { logger } = require('./utils/logger');

app.message(handleMessage);

(async () => {
  try {
    const port = process.env.PORT || 3000;
    await app.start(port);
    logger.info(`⚡️ FAQ Bot is running on port ${port}!`);
  } catch (error) {
    logger.error('Unable to start FAQ Bot:', error);
    process.exit(1);
  }
})();