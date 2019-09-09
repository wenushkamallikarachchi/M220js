import * as Chance from 'chance';

import { ServerResponse } from '../../src/ServerResponse';

const chance = new Chance();
let serverResponse: ServerResponse;

describe('Server Response', () => {
  beforeEach(() => {
    serverResponse = new ServerResponse();
  });

  afterEach(() => {
    serverResponse.resetMocked();
  });

  describe('Test addTrailers', () => {
    test('addTrailers should have no calls by default', () => {
      expect(serverResponse.addTrailers).not.toHaveBeenCalled();
    });

    test('addTrailers should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.addTrailers({ objectKey: objectValue });

      expect(serverResponse.addTrailers).toHaveBeenCalled();
      expect(serverResponse.addTrailers).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('addTrailers should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.addTrailers({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.addTrailers).not.toHaveBeenCalled();
    });
  });

  describe('Test connection', () => {
    test('connection should have no calls by default', () => {
      expect(serverResponse.connection).not.toHaveBeenCalled();
    });

    test('connection should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.connection({ objectKey: objectValue });

      expect(serverResponse.connection).toHaveBeenCalled();
      expect(serverResponse.connection).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('connection should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.connection({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.connection).not.toHaveBeenCalled();
    });
  });

  describe('Test end', () => {
    test('end should have no calls by default', () => {
      expect(serverResponse.end).not.toHaveBeenCalled();
    });

    test('end should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.end({ objectKey: objectValue });

      expect(serverResponse.end).toHaveBeenCalled();
      expect(serverResponse.end).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('end should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.end({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.end).not.toHaveBeenCalled();
    });
  });

  describe('Test finished', () => {
    test('finished should have no calls by default', () => {
      expect(serverResponse.finished).not.toHaveBeenCalled();
    });

    test('finished should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.finished({ objectKey: objectValue });

      expect(serverResponse.finished).toHaveBeenCalled();
      expect(serverResponse.finished).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('finished should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.finished({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.finished).not.toHaveBeenCalled();
    });
  });

  describe('Test getHeader', () => {
    test('getHeader should have no calls by default', () => {
      expect(serverResponse.getHeader).not.toHaveBeenCalled();
    });

    test('getHeader should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.getHeader({ objectKey: objectValue });

      expect(serverResponse.getHeader).toHaveBeenCalled();
      expect(serverResponse.getHeader).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('getHeader should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.getHeader({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.getHeader).not.toHaveBeenCalled();
    });
  });

  describe('Test getHeaderNames', () => {
    test('getHeaderNames should have no calls by default', () => {
      expect(serverResponse.getHeaderNames).not.toHaveBeenCalled();
    });

    test('getHeaderNames should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.getHeaderNames({ objectKey: objectValue });

      expect(serverResponse.getHeaderNames).toHaveBeenCalled();
      expect(serverResponse.getHeaderNames).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('getHeaderNames should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.getHeaderNames({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.getHeaderNames).not.toHaveBeenCalled();
    });
  });

  describe('Test getHeaders', () => {
    test('getHeaders should have no calls by default', () => {
      expect(serverResponse.getHeaders).not.toHaveBeenCalled();
    });

    test('getHeaders should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.getHeaders({ objectKey: objectValue });

      expect(serverResponse.getHeaders).toHaveBeenCalled();
      expect(serverResponse.getHeaders).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('getHeaders should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.getHeaders({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.getHeaders).not.toHaveBeenCalled();
    });
  });

  describe('Test hasHeader', () => {
    test('hasHeader should have no calls by default', () => {
      expect(serverResponse.hasHeader).not.toHaveBeenCalled();
    });

    test('hasHeader should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.hasHeader({ objectKey: objectValue });

      expect(serverResponse.hasHeader).toHaveBeenCalled();
      expect(serverResponse.hasHeader).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('hasHeader should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.hasHeader({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.hasHeader).not.toHaveBeenCalled();
    });
  });

  describe('Test headersSent', () => {
    test('headersSent should have no calls by default', () => {
      expect(serverResponse.headersSent).not.toHaveBeenCalled();
    });

    test('headersSent should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.headersSent({ objectKey: objectValue });

      expect(serverResponse.headersSent).toHaveBeenCalled();
      expect(serverResponse.headersSent).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('headersSent should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.headersSent({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.headersSent).not.toHaveBeenCalled();
    });
  });

  describe('Test removeHeader', () => {
    test('removeHeader should have no calls by default', () => {
      expect(serverResponse.removeHeader).not.toHaveBeenCalled();
    });

    test('removeHeader should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.removeHeader({ objectKey: objectValue });

      expect(serverResponse.removeHeader).toHaveBeenCalled();
      expect(serverResponse.removeHeader).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('removeHeader should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.removeHeader({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.removeHeader).not.toHaveBeenCalled();
    });
  });

  describe('Test sendDate', () => {
    test('sendDate should have no calls by default', () => {
      expect(serverResponse.sendDate).not.toHaveBeenCalled();
    });

    test('sendDate should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.sendDate({ objectKey: objectValue });

      expect(serverResponse.sendDate).toHaveBeenCalled();
      expect(serverResponse.sendDate).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('sendDate should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      serverResponse.sendDate({ objectKey: objectValue });

      serverResponse.resetMocked();

      expect(serverResponse.sendDate).not.toHaveBeenCalled();
    });
  });
});
