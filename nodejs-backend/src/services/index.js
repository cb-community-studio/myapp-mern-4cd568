const users = require("./users/users.service.js");
const sheet12 = require("./sheet12/sheet12.service.js");
const sheet1 = require("./sheet1/sheet1.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(sheet12);
  app.configure(sheet1);
  // ~cb-add-configure-service-name~
};
