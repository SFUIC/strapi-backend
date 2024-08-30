module.exports = {
  routes: [
    {
      method: "GET",
      path: "/proxy/validateTicket",
      handler: "proxy.validateTicket",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/proxy/feedback",
      handler: "proxy.feedback",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
