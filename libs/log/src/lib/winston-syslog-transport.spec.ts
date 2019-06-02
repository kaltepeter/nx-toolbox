jest.mock('net');
import {SyslogTransport} from './winston-syslog-transport';
import { Socket } from 'net';
import { Z_FIXED } from 'zlib';

let transport;
beforeEach(() => {
  transport = new SyslogTransport({port: 1234, host: 'localhost'});
});

it('should connect', () => {
  const client: Socket = transport.client;
  expect(client).toBeTruthy();
  expect(client.connect).toHaveBeenCalledWith(1234, 'localhost', expect.any(Function));
  // TODO: test callback
});

it('should destroy connection on data', async () => {
  const client: Socket = transport.client;
  client.emit = jest.fn().mockReturnValue(true);
  const fired = await client.emit('data', Buffer.from('{"a": 1}'));
  expect(fired).toBe(true);
  // TODO: fix
  // expect(client.destroy).toHaveBeenCalled();
});
