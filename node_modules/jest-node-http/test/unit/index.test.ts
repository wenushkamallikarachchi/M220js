import { Agent as RealAgent } from '../../src/Agent';
import { ClientRequest as RealClientRequest } from '../../src/ClientRequest';
import { IncomingMessage as RealIncomingMessage } from '../../src/IncomingMessage';
import * as http from '../../src/index';
import { METHODS as RealMethods } from '../../src/Methods';
import { Server as RealServer } from '../../src/Server';
import { ServerResponse as RealServerResponse } from '../../src/ServerResponse';
import { STATUS_CODES as RealStatusCodes } from '../../src/StatusCodes';

describe('Index', () => {
  test('Agent is a instance of Agent class', () => {
    expect(new http.Agent()).toBeInstanceOf(RealAgent);
  });

  test('ClientRequest is a instance of ClientRequest class', () => {
    expect(new http.ClientRequest()).toBeInstanceOf(RealClientRequest);
  });

  test('IncomingMessage is a instance of IncomingMessage class', () => {
    expect(new http.IncomingMessage()).toBeInstanceOf(RealIncomingMessage);
  });

  test('METHODS is a instance of METHODS class', () => {
    expect(http.METHODS).toEqual(RealMethods);
  });

  test('Server is a instance of Server class', () => {
    expect(new http.Server()).toBeInstanceOf(RealServer);
  });

  test('ServerResponse is a instance of ServerResponse class', () => {
    expect(new http.ServerResponse()).toBeInstanceOf(RealServerResponse);
  });

  test('STATUS_CODES is a instance of STATUS_CODES function', () => {
    expect(http.STATUS_CODES).toEqual(RealStatusCodes);
  });

  test('createServer is a instance of createServer class', () => {
    expect(http.createServer()).toBeInstanceOf(RealServer);
  });

  test('request is a instance of request class', () => {
    expect(http.request()).toBeInstanceOf(RealClientRequest);
  });

  test('get is a instance of get class', () => {
    // TODO: Test that req.end() has been called

    expect(http.get()).toBeInstanceOf(RealClientRequest);
  });
});
