import { getLogger } from "./log.service";

test('should return singleton logger', () => {
  const logRef = getLogger();
  expect(logRef).toBeTruthy();
  expect(logRef.warn).toHaveBeenCalledWith('logger configured.');
});
