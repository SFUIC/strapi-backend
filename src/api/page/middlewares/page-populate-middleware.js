"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  chunks: {
    populate: "*",
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    // console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
