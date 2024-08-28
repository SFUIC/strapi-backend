"use strict";

const casLogin = require("../utils/cas-auth.js"); // Adjust the path as necessary

module.exports = {
  async validateTicket(ctx) {
    try {
      const serviceUrl = ctx.query.serviceUrl; // Get the serviceUrl from query parameters
      const ticket = ctx.query.ticket;
      // @ts-ignore
      const result = await casLogin(serviceUrl, ticket);

      ctx.status = result.status || 200; // Set status code based on result
      ctx.body = result;
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message || "Internal Server Error";
    }
  },
};
