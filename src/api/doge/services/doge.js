'use strict';

/**
 * doge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doge.doge');
