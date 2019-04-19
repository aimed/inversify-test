import { Logger } from "./Logger";
import { injectable } from "inversify";

@injectable()
export class ConsoleLogger implements Logger {
    log(message: string) {
        console.log(message);
    }
}