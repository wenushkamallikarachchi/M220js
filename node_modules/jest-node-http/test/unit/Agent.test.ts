import * as Chance from 'chance';

import { Agent, globalAgent } from '../../src/Agent';

const chance = new Chance();
let agent: Agent;

describe('Agent', () => {
  beforeEach(() => {
    agent = new Agent();
  });

  afterEach(() => {
    agent.resetMocked();
  });

  test('globalAgent is a instance of Agent class', () => {
    expect(globalAgent()).toBeInstanceOf(Agent);
  });

  describe('Test createConnection', () => {
    test('createConnection should have no calls by default', () => {
      expect(agent.createConnection).not.toHaveBeenCalled();
    });

    test('createConnection should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.createConnection({ objectKey: objectValue });

      expect(agent.createConnection).toHaveBeenCalled();
      expect(agent.createConnection).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('createConnection should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.createConnection({ objectKey: objectValue });

      agent.resetMocked();

      expect(agent.createConnection).not.toHaveBeenCalled();
    });
  });

  describe('Test keepSocketAlive', () => {
    test('keepSocketAlive should have no calls by default', () => {
      expect(agent.keepSocketAlive).not.toHaveBeenCalled();
    });

    test('keepSocketAlive should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.keepSocketAlive({ objectKey: objectValue });

      expect(agent.keepSocketAlive).toHaveBeenCalled();
      expect(agent.keepSocketAlive).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('keepSocketAlive should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.keepSocketAlive({ objectKey: objectValue });

      agent.resetMocked();

      expect(agent.keepSocketAlive).not.toHaveBeenCalled();
    });
  });

  describe('Test reuseSocket', () => {
    test('reuseSocket should have no calls by default', () => {
      expect(agent.reuseSocket).not.toHaveBeenCalled();
    });

    test('reuseSocket should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.reuseSocket({ objectKey: objectValue });

      expect(agent.reuseSocket).toHaveBeenCalled();
      expect(agent.reuseSocket).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('reuseSocket should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.reuseSocket({ objectKey: objectValue });

      agent.resetMocked();

      expect(agent.reuseSocket).not.toHaveBeenCalled();
    });
  });

  describe('Test destroy', () => {
    test('destroy should have no calls by default', () => {
      expect(agent.destroy).not.toHaveBeenCalled();
    });

    test('destroy should be called and match called with', () => {
      agent.destroy();

      expect(agent.destroy).toHaveBeenCalled();
    });

    test('destroy should have no call after reset', () => {
      agent.destroy();

      agent.resetMocked();

      expect(agent.destroy).not.toHaveBeenCalled();
    });
  });

  describe('Test getName', () => {
    test('getName should have no calls by default', () => {
      expect(agent.getName).not.toHaveBeenCalled();
    });

    test('getName should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.getName({ objectKey: objectValue });

      expect(agent.getName).toHaveBeenCalled();
      expect(agent.getName).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('getName should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.getName({ objectKey: objectValue });

      agent.resetMocked();

      expect(agent.getName).not.toHaveBeenCalled();
    });
  });

  describe('Test freeSockets', () => {
    test('freeSockets should have no calls by default', () => {
      expect(agent.freeSockets).not.toHaveBeenCalled();
    });

    test('freeSockets should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.freeSockets({ objectKey: objectValue });

      expect(agent.freeSockets).toHaveBeenCalled();
      expect(agent.freeSockets).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('freeSockets should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.freeSockets({ objectKey: objectValue });

      agent.resetMocked();

      expect(agent.freeSockets).not.toHaveBeenCalled();
    });
  });

  describe('Test requests', () => {
    test('requests should have no calls by default', () => {
      expect(agent.requests).not.toHaveBeenCalled();
    });

    test('requests should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.requests({ objectKey: objectValue });

      expect(agent.requests).toHaveBeenCalled();
      expect(agent.requests).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('requests should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.requests({ objectKey: objectValue });

      agent.resetMocked();

      expect(agent.requests).not.toHaveBeenCalled();
    });
  });

  describe('Test sockets', () => {
    test('sockets should have no calls by default', () => {
      expect(agent.sockets).not.toHaveBeenCalled();
    });

    test('sockets should be called and match called with', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.sockets({ objectKey: objectValue });

      expect(agent.sockets).toHaveBeenCalled();
      expect(agent.sockets).toHaveBeenCalledWith({ objectKey: objectValue });
    });

    test('sockets should have no call after reset', () => {
      const objectKey = chance.string({ pool: 'abcdefghijklmnopqrstuvwxyz' });
      const objectValue = chance.string();

      agent.sockets({ objectKey: objectValue });

      agent.resetMocked();

      expect(agent.sockets).not.toHaveBeenCalled();
    });
  });
});
