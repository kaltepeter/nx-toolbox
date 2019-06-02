import * as SplunkStreamEvent from 'winston-splunk-httplogger';

const splunkSettings = {
  token: process.env.SPLUNK_TOKEN,
  host: process.env.SPLUNK_HOST || 'localhost',
  port: '32841',
  protocol: 'https',
  // path: '/services/collector/raw',
  maxRetries: 3
};

export {splunkSettings, SplunkStreamEvent};
