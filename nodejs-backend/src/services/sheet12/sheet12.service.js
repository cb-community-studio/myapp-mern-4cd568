const { Sheet12 } = require('./sheet12.class');
const createModel = require('../../models/sheet12.model');
const hooks = require('./sheet12.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/sheet12', new Sheet12(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sheet12');

  service.hooks(hooks);
};