import * as Chance from 'chance';

import { ClientRequest } from '../../src/ClientRequest';

const chance = new Chance();
let clientRequest: ClientRequest;

describe('Client Request', () => {
  beforeEach(() => {
    clientRequest = new ClientRequest();
  });

  afterEach(() => {
    clientRequest.resetMocked();
  });

  describe('Test abort', () => {
    test('abort should have no calls by default', () => {
      expect(clientRequest.abort).not.toHaveBeenCalled();
    });

    test('abort should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.abort({ objectKey: objectValue });

      expect(clientRequest.abort).toHaveBeenCalled();
      expect(clientRequest.abort).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('abort should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.abort({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.abort).not.toHaveBeenCalled();
    });
  });

  describe('Test aborted', () => {
    test('aborted should have no calls by default', () => {
      expect(clientRequest.aborted).not.toHaveBeenCalled();
    });

    test('aborted should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.aborted({ objectKey: objectValue });

      expect(clientRequest.aborted).toHaveBeenCalled();
      expect(clientRequest.aborted).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('aborted should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.aborted({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.aborted).not.toHaveBeenCalled();
    });
  });

  describe('Test connection', () => {
    test('connection should have no calls by default', () => {
      expect(clientRequest.connection).not.toHaveBeenCalled();
    });

    test('connection should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.connection({ objectKey: objectValue });

      expect(clientRequest.connection).toHaveBeenCalled();
      expect(clientRequest.connection).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('connection should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.connection({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.connection).not.toHaveBeenCalled();
    });
  });

  describe('Test end', () => {
    test('end should have no calls by default', () => {
      expect(clientRequest.end).not.toHaveBeenCalled();
    });

    test('end should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.end({ objectKey: objectValue });

      expect(clientRequest.end).toHaveBeenCalled();
      expect(clientRequest.end).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('end should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.end({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.end).not.toHaveBeenCalled();
    });
  });

  describe('Test flushHeaders', () => {
    test('flushHeaders should have no calls by default', () => {
      expect(clientRequest.flushHeaders).not.toHaveBeenCalled();
    });

    test('flushHeaders should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.flushHeaders({ objectKey: objectValue });

      expect(clientRequest.flushHeaders).toHaveBeenCalled();
      expect(clientRequest.flushHeaders).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('flushHeaders should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.flushHeaders({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.flushHeaders).not.toHaveBeenCalled();
    });
  });

  describe('Test getHeader', () => {
    test('getHeader should have no calls by default', () => {
      expect(clientRequest.getHeader).not.toHaveBeenCalled();
    });

    test('getHeader should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.getHeader({ objectKey: objectValue });

      expect(clientRequest.getHeader).toHaveBeenCalled();
      expect(clientRequest.getHeader).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('getHeader should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.getHeader({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.getHeader).not.toHaveBeenCalled();
    });
  });

  describe('Test removeHeader', () => {
    test('removeHeader should have no calls by default', () => {
      expect(clientRequest.removeHeader).not.toHaveBeenCalled();
    });

    test('removeHeader should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.removeHeader({ objectKey: objectValue });

      expect(clientRequest.removeHeader).toHaveBeenCalled();
      expect(clientRequest.removeHeader).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('removeHeader should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.removeHeader({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.removeHeader).not.toHaveBeenCalled();
    });
  });

  describe('Test setHeader', () => {
    test('setHeader should have no calls by default', () => {
      expect(clientRequest.setHeader).not.toHaveBeenCalled();
    });

    test('setHeader should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.setHeader({ objectKey: objectValue });

      expect(clientRequest.setHeader).toHaveBeenCalled();
      expect(clientRequest.setHeader).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('setHeader should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.setHeader({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.setHeader).not.toHaveBeenCalled();
    });
  });

  describe('Test setNoDelay', () => {
    test('setNoDelay should have no calls by default', () => {
      expect(clientRequest.setNoDelay).not.toHaveBeenCalled();
    });

    test('setNoDelay should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.setNoDelay({ objectKey: objectValue });

      expect(clientRequest.setNoDelay).toHaveBeenCalled();
      expect(clientRequest.setNoDelay).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('setNoDelay should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.setNoDelay({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.setNoDelay).not.toHaveBeenCalled();
    });
  });

  describe('Test setSocketKeepAlive', () => {
    test('setSocketKeepAlive should have no calls by default', () => {
      expect(clientRequest.setSocketKeepAlive).not.toHaveBeenCalled();
    });

    test('setSocketKeepAlive should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.setSocketKeepAlive({ objectKey: objectValue });

      expect(clientRequest.setSocketKeepAlive).toHaveBeenCalled();
      expect(clientRequest.setSocketKeepAlive).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('setSocketKeepAlive should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.setSocketKeepAlive({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.setSocketKeepAlive).not.toHaveBeenCalled();
    });
  });

  describe('Test setTimeout', () => {
    test('setTimeout should have no calls by default', () => {
      expect(clientRequest.setTimeout).not.toHaveBeenCalled();
    });

    test('setTimeout should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.setTimeout({ objectKey: objectValue });

      expect(clientRequest.setTimeout).toHaveBeenCalled();
      expect(clientRequest.setTimeout).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('setTimeout should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.setTimeout({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.setTimeout).not.toHaveBeenCalled();
    });
  });

  describe('Test socket', () => {
    test('socket should have no calls by default', () => {
      expect(clientRequest.socket).not.toHaveBeenCalled();
    });

    test('socket should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.socket({ objectKey: objectValue });

      expect(clientRequest.socket).toHaveBeenCalled();
      expect(clientRequest.socket).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('socket should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.socket({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.socket).not.toHaveBeenCalled();
    });
  });

  describe('Test write', () => {
    test('write should have no calls by default', () => {
      expect(clientRequest.write).not.toHaveBeenCalled();
    });

    test('write should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.write({ objectKey: objectValue });

      expect(clientRequest.write).toHaveBeenCalled();
      expect(clientRequest.write).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('write should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      clientRequest.write({ objectKey: objectValue });

      clientRequest.resetMocked();

      expect(clientRequest.write).not.toHaveBeenCalled();
    });
  });
});
