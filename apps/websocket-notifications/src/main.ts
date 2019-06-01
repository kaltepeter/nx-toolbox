/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import {instana} from '@ka/apm';
import {getLogger} from '@ka/log';

const logger = getLogger();
instana.setLogger(logger);

import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  logger.debug('/api called with: ', req);
  const randomNum = Math.floor(Math.random() * 100);
  logger.warn(`Random number is: ${randomNum}`);
  if (randomNum % 2 === 0) {
    logger.error('should fail');
    throw new Error(`Random failure: ${randomNum}`);
  }
  res.send({message: `Welcome to websocket-notifications! ${randomNum}`});
});

const port = process.env.port || 3333;
app.listen(port, (err) => {
  if (err) {
    logger.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});

export default app;
