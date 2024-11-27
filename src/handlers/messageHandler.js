const { searchFAQ } = require('../services/elasticSearch');
const { generateAnswer } = require('../services/llm');
const { logger } = require('../utils/logger');

async function handleMessage({ message, say }) {
  try {
    logger.debug('Processing message:', message.text);
    
    const retrievedAnswers = await searchFAQ(message.text);
    const context = retrievedAnswers.join(' ');

    const answer = await generateAnswer(message.text, context);
    
    await say(answer);
  } catch (error) {
    logger.error('Message handling error:', error);
    await say('申し訳ありませんが、質問に回答できませんでした。');
  }
}

module.exports = { handleMessage };