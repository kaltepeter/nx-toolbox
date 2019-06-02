const NodeEnvironment = require('jest-environment-node');

/**
 * This is to handle proper process.env for validating that appd is enabled.
 */
class JestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this._oldEnv = this.context.process.env;
    this.context.process.env.SPLUNK_TOKEN = '123token';
    this.context.process.env.SPLUNK_HOST = 'myhost.example.com'
  }

  async teardown() {
    this.context.process.env = this._oldEnv;
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = JestEnvironment;
