import { Express } from './express';
interface IRequestOptions {
    method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD' | 'OPTIONS' | 'CONNECT';
    headers?: any;
    app?: Express;
}
export declare class Request {
    baseUrl: string;
    body: string;
    cookies: any;
    fresh: boolean;
    headers: any;
    hostname: string;
    ip: string;
    ips: string[];
    method: string;
    originalUrl: string;
    params: any;
    path: string;
    protocol: string;
    query: any;
    route: any;
    secure: boolean;
    signedCookies: any;
    stale: boolean;
    subdomains: string[];
    xhr: boolean;
    accepts: any;
    acceptsCharsets: any;
    acceptsEncodings: any;
    acceptsLanguages: any;
    get: any;
    is: any;
    range: any;
    app: Express;
    private defaultUrl;
    private defaultOptions;
    constructor(url?: string | null, options?: IRequestOptions);
    setUrl(url: string, options?: IRequestOptions): void;
    resetMocked(): void;
    setBaseUrl(value: string): void;
    setBody(value: string): void;
    setCookies(key: string | {
        [key: string]: string;
    }, value?: string): void;
    setFresh(value: boolean): void;
    setHeaders(key: string | {
        [key: string]: string;
    }, value?: string): void;
    setHostname(value: string): void;
    setIp(value: string): void;
    setIps(value: string): void;
    setMethod(value: string): void;
    setOriginalUrl(value: string): void;
    setParams(key: string | {
        [key: string]: string;
    }, value?: string): void;
    setPath(value: string): void;
    setProtocol(value: string): void;
    setQuery(key: string | {
        [key: string]: string;
    }, value?: string): void;
    setRoute(key: string | {
        [key: string]: string;
    }, value?: string): void;
    setSecure(value: boolean): void;
    setSignedCookies(key: string | {
        [key: string]: string;
    }, value?: string): void;
    setStale(value: boolean): void;
    setSubdomains(value: string): void;
    setXhr(value: boolean): void;
}
export {};
