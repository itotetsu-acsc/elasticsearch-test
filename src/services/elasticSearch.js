const { esClient } = require('../config/elasticsearch');
const { logger } = require('../utils/logger');

async function searchFAQ(question) {
  try {
    const response = await esClient.search({
      index: 'faq_index',
      body: {
        query: {
          match: { question }
        }
      }
    });
    
    return response.hits.hits.map(hit => hit._source.answer);
  } catch (error) {
    logger.error('Elasticsearch search error:', error);
    throw error;
  }
}

module.exports = { searchFAQ };