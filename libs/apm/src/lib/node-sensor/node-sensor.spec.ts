jest.mock('@instana/collector');
import {instana} from './node-sensor'

test('should initialize instana for local', () => {
  expect(instana).toHaveBeenCalled();
});
