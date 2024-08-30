"use strict";

const { casLogin } = require("../services/validateTicket.js");
const { mailFeedback } = require("../services/mailFeedback.js");

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

  async feedback(ctx) {
    try {
      const feedbackData = ctx.request.body; // Get data from POST request body

      await mailFeedback(
        process.env.SVCMAIL,
        process.env.SVCMAIL,
        "SFUIC Feedback Message",
        feedbackData
      );

      ctx.status = 201; // Created status code
      ctx.body = {
        message: "Feedback received successfully",
        data: feedbackData,
      };
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message || "Internal Server Error";
    }
  },
};
