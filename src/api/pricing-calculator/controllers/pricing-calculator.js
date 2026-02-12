'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pricing-calculator.pricing-calculator');
