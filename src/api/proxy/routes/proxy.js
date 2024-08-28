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
  ],
};
