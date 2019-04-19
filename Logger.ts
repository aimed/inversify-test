export interface Logger {
    log(message: string): void
}

/** 
 * This provides a runtime type using declaration overloading.
 * As an alternative you can do something like the following.
 *
 * @example
 * // Logger.ts
 * export const Logger = Symbol('Logger')
 * 
 * 
 * // Some service
 * export class SomeService {
 *  constructor(@inject(Logger) logger: Logger) {}
 * }
 */
export abstract class Logger {
}
