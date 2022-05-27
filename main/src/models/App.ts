import { Express } from "express";

interface Application {
    app: Express,
    PORT: string | number,
    // middleware: Array<Object>
};

class App implements Application {
    app: Express;
    PORT: number | string;

    constructor(app: Express, PORT: number | string) {
        this.app = app;
        this.PORT = PORT;
    }

    protected setPort(PORT: number | string) {
        this.PORT = PORT;
    }

    // Method to listen for app on instance's port
    startApp() {
        this.app.listen(this.PORT);
    }
}

export { Application, App }