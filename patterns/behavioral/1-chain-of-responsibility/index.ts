import { LogHandler, AuthenticationHandler } from './handlers';
import { Request } from './base-handler';

const request: Request = {
    headers: {
        token: '123'
    }
}

const logHandler = new LogHandler();
const authenticationHandler = new AuthenticationHandler();

logHandler.setNext(authenticationHandler);
logHandler.handle(request);