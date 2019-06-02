// import { Produce } from 'glossy';
import * as TransportStream from 'winston-transport';
import { Socket } from 'net';
import * as os from 'os';
const { MESSAGE, LEVEL } = require('triple-beam');

//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
class SyslogTransport extends TransportStream {
  client: Socket;
  opts: any = {};
  messages: String[] = [];

  constructor(opts) {
    super(opts);
    this.setMaxListeners(30);
    this.opts = { ...this.opts, ...opts };
    console.log(this.opts);
    this.client = new Socket();
    // Perform the writing to the remote service
    this.client.connect(
      this.opts.port,
      this.opts.host,
      () => {
        console.log('Connected');
        this.client.write('Hello, server! Love, Client.\n', () => {
          setInterval(() => {
            const toSend = [...this.messages];
            this.messages = [];
            this.batchMessages(toSend);
          }, 2000);
        });
      }
    );

    this.client.on('data', data => {
      console.log('Received: ' + data);
      this.client.destroy(); // kill client after server's response
    });

    this.client.on('error', err => {
      console.error(err);
    });

    this.client.on('close', () => {
      console.log('Connection closed');
    });

    //
    // Consume any custom options here. e.g.:
    // - Connection information for databases
    // - Authentication information for APIs (e.g. loggly, papertrail,
    //   logentries, etc.).
    //
    // this.opts = opts;
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    // console.log(info);

    // const msg = Produce.produce({
    //   facility: 'Local4', // these can either be a valid integer,
    //   severity: info[LEVEL], // or a relevant string
    //   host: this.opts.host,
    //   // appName: this.opts.appName,
    //   pid: this.opts.pid || process.pid,
    //   date: info.timestamp,
    //   message: info[MESSAGE]
    // });

    // console.log(`mymsg : ${msg}`);

    // this.client.write(msg + '\r\n');
    this.messages.push(info[MESSAGE]);

    if (callback) {
      callback();
    }
  }
  close() {
    console.log('closing stream');
  }

  batchMessages(messagesToSend) {
    this.client.write(messagesToSend.join(os.EOL), () => {
      console.log(`batch sent.`);
    });
  }
}

export { SyslogTransport };
