import { STATUS_CODES } from '../../src/StatusCodes';

describe('Status Codes', () => {
  test('Expect STATUS_CODES to match the snapshot', () => {
    expect(STATUS_CODES).toMatchSnapshot();
  });
});
