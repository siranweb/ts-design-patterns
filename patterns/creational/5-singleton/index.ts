// https://refactoring.guru/design-patterns/singleton

class Connection {
    private static instance: Connection;

    constructor() {
        if (Connection.instance) {
            return Connection.instance;
        } else {
            Connection.instance = this;
        }
    }
}

const connection = new Connection();
const sameConnection = new Connection();

console.log(connection === sameConnection); // true