import * as Chance from 'chance';

import { Server } from '../../src/Server';

const chance = new Chance();
let server: Server;

describe('Server', () => {
  beforeEach(() => {
    server = new Server();
  });

  afterEach(() => {
    server.resetMocked();
  });

  describe('Test close', () => {
    test('close should have no calls by default', () => {
      expect(server.close).not.toHaveBeenCalled();
    });

    test('close should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.close({ objectKey: objectValue });

      expect(server.close).toHaveBeenCalled();
      expect(server.close).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('close should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.close({ objectKey: objectValue });

      server.resetMocked();

      expect(server.close).not.toHaveBeenCalled();
    });
  });

  describe('Test listen', () => {
    test('listen should have no calls by default', () => {
      expect(server.listen).not.toHaveBeenCalled();
    });

    test('listen should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.listen({ objectKey: objectValue });

      expect(server.listen).toHaveBeenCalled();
      expect(server.listen).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('listen should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.listen({ objectKey: objectValue });

      server.resetMocked();

      expect(server.listen).not.toHaveBeenCalled();
    });
  });

  describe('Test listening', () => {
    test('listening should have no calls by default', () => {
      expect(server.listening).not.toHaveBeenCalled();
    });

    test('listening should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.listening({ objectKey: objectValue });

      expect(server.listening).toHaveBeenCalled();
      expect(server.listening).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('listening should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.listening({ objectKey: objectValue });

      server.resetMocked();

      expect(server.listening).not.toHaveBeenCalled();
    });
  });

  describe('Test maxHeadersCount', () => {
    test('maxHeadersCount should have no calls by default', () => {
      expect(server.maxHeadersCount).not.toHaveBeenCalled();
    });

    test('maxHeadersCount should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.maxHeadersCount({ objectKey: objectValue });

      expect(server.maxHeadersCount).toHaveBeenCalled();
      expect(server.maxHeadersCount).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('maxHeadersCount should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.maxHeadersCount({ objectKey: objectValue });

      server.resetMocked();

      expect(server.maxHeadersCount).not.toHaveBeenCalled();
    });
  });

  describe('Test setTimeout', () => {
    test('setTimeout should have no calls by default', () => {
      expect(server.setTimeout).not.toHaveBeenCalled();
    });

    test('setTimeout should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.setTimeout({ objectKey: objectValue });

      expect(server.setTimeout).toHaveBeenCalled();
      expect(server.setTimeout).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('setTimeout should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.setTimeout({ objectKey: objectValue });

      server.resetMocked();

      expect(server.setTimeout).not.toHaveBeenCalled();
    });
  });

  describe('Test timeout', () => {
    test('timeout should have no calls by default', () => {
      expect(server.timeout).not.toHaveBeenCalled();
    });

    test('timeout should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.timeout({ objectKey: objectValue });

      expect(server.timeout).toHaveBeenCalled();
      expect(server.timeout).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('timeout should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.timeout({ objectKey: objectValue });

      server.resetMocked();

      expect(server.timeout).not.toHaveBeenCalled();
    });
  });

  describe('Test keepAliveTimeout', () => {
    test('keepAliveTimeout should have no calls by default', () => {
      expect(server.keepAliveTimeout).not.toHaveBeenCalled();
    });

    test('keepAliveTimeout should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.keepAliveTimeout({ objectKey: objectValue });

      expect(server.keepAliveTimeout).toHaveBeenCalled();
      expect(server.keepAliveTimeout).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('keepAliveTimeout should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      server.keepAliveTimeout({ objectKey: objectValue });

      server.resetMocked();

      expect(server.keepAliveTimeout).not.toHaveBeenCalled();
    });
  });
});
