const mockWinston: any = jest.genMockFromModule('winston');
const format = {
  combine: jest.fn(),
  simple: jest.fn(),
  splat: jest.fn()
};
const transports = {
  Console: jest.fn(),
  File: jest.fn()
};

const createLogger = () => {
  return {
    warn: jest.fn()
  };
};

export { format, transports, createLogger };
export default mockWinston;
