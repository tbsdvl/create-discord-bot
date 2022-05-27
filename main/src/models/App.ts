import "express";
import createApplication from "express/lib/express";

interface Application {
    app: typeof createApplication,
    PORT: number,
    // listen: Function,
    // middleware: Array<Object>
};

class App {
    app: typeof createApplication;
    PORT: number;

    constructor(app: typeof createApplication, PORT: number) {
        this.app = app;
        this.PORT = PORT;
    }
}

export { Application, App }