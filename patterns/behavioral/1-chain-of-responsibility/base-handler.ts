export interface Request {
    headers: {
        token?: string;
    }
}

export interface Handler {
    handle(request: Request): Request;
    setNext(handler: Handler): Handler;
}

export abstract class BaseHandler implements Handler {
    protected next: Handler = null;

    public setNext(handler: Handler): Handler {
        this.next = handler;
        return handler;
    }

    public abstract handle(request: Request): Request;
}