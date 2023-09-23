const assert = require('assert');
const app = require('../../src/app');

describe('\'sheet12\' service', () => {
  it('registered the service', () => {
    const service = app.service('sheet12');

    assert.ok(service, 'Registered the service (sheet12)');
  });
});
