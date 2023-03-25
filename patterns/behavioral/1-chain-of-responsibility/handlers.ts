import { Handler, BaseHandler, Request } from './base-handler';

export class LogHandler extends BaseHandler {
    public handle(request: Request) {
        console.log(request);

        if (this.next) {
            return this.next.handle(request);
        }
    }
}

export class AuthenticationHandler extends BaseHandler {
    public handle(request: Request) {
        if (request.headers?.token !== '123') {
            throw new Error('Wrong token');
        }

        if (this.next) {
            return this.next.handle(request);
        }
    }
}