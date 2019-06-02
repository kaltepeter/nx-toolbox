jest.unmock('winston');
import { splunkSettings } from "./splunk.service";

it('should return default splunk settings', () => {
  expect(splunkSettings.token).toBe('123token');
  expect(splunkSettings.host).toBe('myhost.example.com');
  expect(splunkSettings.port).toBe('32841');
  expect(splunkSettings.protocol).toBe('https');
  expect(splunkSettings.maxRetries).toBe(3);
});
