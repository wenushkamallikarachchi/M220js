import { NextFunction } from './next';
import { Request } from './request';
import { Response } from './response';
export declare class Router {
    request: Request;
    response: Response;
    next: NextFunction;
    all: any;
    get: any;
    param: any;
    route: any;
    use: any;
    post: any;
    put: any;
    patch: any;
    delete: any;
    constructor();
    resetMocked(): void;
}
