import { METHODS } from '../../src/Methods';

describe('Methods', () => {
  test('Expect METHODS to match the snapshot', () => {
    expect(METHODS).toMatchSnapshot();
  });
});
