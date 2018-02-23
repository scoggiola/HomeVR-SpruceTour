const devEnv = true;
const config = {};

devEnv
  ? config.messageOrigin = 'http://localhost:8080'
  : config.messageOrigin = 'http://digitalempireweb.com';
