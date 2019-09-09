export interface IMockInstance {
    mockReset(): void;
}
export declare type Mock = (...args: any[]) => any;
export interface IMock extends IMockInstance, Mock {
}
export declare type NextFunction = IMock;
export declare const next: NextFunction;
