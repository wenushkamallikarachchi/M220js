import * as Chance from 'chance';

import { IncomingMessage } from '../../src/IncomingMessage';

const chance = new Chance();
let incomingMessage: IncomingMessage;

describe('Incoming Message', () => {
  beforeEach(() => {
    incomingMessage = new IncomingMessage();
  });

  afterEach(() => {
    incomingMessage.resetMocked();
  });

  describe('Test destroy', () => {
    test('destroy should have no calls by default', () => {
      expect(incomingMessage.destroy).not.toHaveBeenCalled();
    });

    test('destroy should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.destroy({ objectKey: objectValue });

      expect(incomingMessage.destroy).toHaveBeenCalled();
      expect(incomingMessage.destroy).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('destroy should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.destroy({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.destroy).not.toHaveBeenCalled();
    });
  });

  describe('Test headers', () => {
    test('headers should have no calls by default', () => {
      expect(incomingMessage.headers).not.toHaveBeenCalled();
    });

    test('headers should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.headers({ objectKey: objectValue });

      expect(incomingMessage.headers).toHaveBeenCalled();
      expect(incomingMessage.headers).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('headers should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.headers({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.headers).not.toHaveBeenCalled();
    });
  });

  describe('Test httpVersion', () => {
    test('httpVersion should have no calls by default', () => {
      expect(incomingMessage.httpVersion).not.toHaveBeenCalled();
    });

    test('httpVersion should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.httpVersion({ objectKey: objectValue });

      expect(incomingMessage.httpVersion).toHaveBeenCalled();
      expect(incomingMessage.httpVersion).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('httpVersion should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.httpVersion({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.httpVersion).not.toHaveBeenCalled();
    });
  });

  describe('Test method', () => {
    test('method should have no calls by default', () => {
      expect(incomingMessage.method).not.toHaveBeenCalled();
    });

    test('method should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.method({ objectKey: objectValue });

      expect(incomingMessage.method).toHaveBeenCalled();
      expect(incomingMessage.method).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('method should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.method({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.method).not.toHaveBeenCalled();
    });
  });

  describe('Test rawHeaders', () => {
    test('rawHeaders should have no calls by default', () => {
      expect(incomingMessage.rawHeaders).not.toHaveBeenCalled();
    });

    test('rawHeaders should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.rawHeaders({ objectKey: objectValue });

      expect(incomingMessage.rawHeaders).toHaveBeenCalled();
      expect(incomingMessage.rawHeaders).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('rawHeaders should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.rawHeaders({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.rawHeaders).not.toHaveBeenCalled();
    });
  });

  describe('Test rawTrailers', () => {
    test('rawTrailers should have no calls by default', () => {
      expect(incomingMessage.rawTrailers).not.toHaveBeenCalled();
    });

    test('rawTrailers should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.rawTrailers({ objectKey: objectValue });

      expect(incomingMessage.rawTrailers).toHaveBeenCalled();
      expect(incomingMessage.rawTrailers).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('rawTrailers should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.rawTrailers({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.rawTrailers).not.toHaveBeenCalled();
    });
  });

  describe('Test setTimeout', () => {
    test('setTimeout should have no calls by default', () => {
      expect(incomingMessage.setTimeout).not.toHaveBeenCalled();
    });

    test('setTimeout should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.setTimeout({ objectKey: objectValue });

      expect(incomingMessage.setTimeout).toHaveBeenCalled();
      expect(incomingMessage.setTimeout).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('setTimeout should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.setTimeout({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.setTimeout).not.toHaveBeenCalled();
    });
  });

  describe('Test socket', () => {
    test('socket should have no calls by default', () => {
      expect(incomingMessage.socket).not.toHaveBeenCalled();
    });

    test('socket should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.socket({ objectKey: objectValue });

      expect(incomingMessage.socket).toHaveBeenCalled();
      expect(incomingMessage.socket).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('socket should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.socket({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.socket).not.toHaveBeenCalled();
    });
  });

  describe('Test statusCode', () => {
    test('statusCode should have no calls by default', () => {
      expect(incomingMessage.statusCode).not.toHaveBeenCalled();
    });

    test('statusCode should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.statusCode({ objectKey: objectValue });

      expect(incomingMessage.statusCode).toHaveBeenCalled();
      expect(incomingMessage.statusCode).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('statusCode should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.statusCode({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.statusCode).not.toHaveBeenCalled();
    });
  });

  describe('Test statusMessage', () => {
    test('statusMessage should have no calls by default', () => {
      expect(incomingMessage.statusMessage).not.toHaveBeenCalled();
    });

    test('statusMessage should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.statusMessage({ objectKey: objectValue });

      expect(incomingMessage.statusMessage).toHaveBeenCalled();
      expect(incomingMessage.statusMessage).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('statusMessage should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.statusMessage({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.statusMessage).not.toHaveBeenCalled();
    });
  });

  describe('Test trailers', () => {
    test('trailers should have no calls by default', () => {
      expect(incomingMessage.trailers).not.toHaveBeenCalled();
    });

    test('trailers should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.trailers({ objectKey: objectValue });

      expect(incomingMessage.trailers).toHaveBeenCalled();
      expect(incomingMessage.trailers).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('trailers should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.trailers({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.trailers).not.toHaveBeenCalled();
    });
  });

  describe('Test url', () => {
    test('url should have no calls by default', () => {
      expect(incomingMessage.url).not.toHaveBeenCalled();
    });

    test('url should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.url({ objectKey: objectValue });

      expect(incomingMessage.url).toHaveBeenCalled();
      expect(incomingMessage.url).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('url should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      incomingMessage.url({ objectKey: objectValue });

      incomingMessage.resetMocked();

      expect(incomingMessage.url).not.toHaveBeenCalled();
    });
  });
});
