const logger = {
  info: (message, ...args) => console.log(`[INFO] ${message}`, ...args),
  error: (message, error) => console.error(`[ERROR] ${message}`, error),
  debug: (message, ...args) => console.debug(`[DEBUG] ${message}`, ...args)
};

module.exports = { logger };