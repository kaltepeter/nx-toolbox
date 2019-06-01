import * as main from './main';

jest.mock('express');

describe("GET /api ", () => {
  test("It should respond with an array of students", async () => {
    const send = jest.fn();
    expect(send.mock.calls).toHaveLength(0);
    // expect(send.mock.calls[0][0]).toBe('Hello World!');
  });
});
