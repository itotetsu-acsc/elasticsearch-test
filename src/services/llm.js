const axios = require('axios');
const { logger } = require('../utils/logger');

async function generateAnswer(userInput, context) {
  try {
    const response = await axios.post('http://localhost:5000/generate', {
      user_input: userInput,
      context
    });
    return response.data;
  } catch (error) {
    logger.error('LLM API call error:', error);
    throw error;
  }
}

module.exports = { generateAnswer };