import { provide } from "inversify-binding-decorators";
import { CarRepository } from "./CarRepository";
import { Logger } from "./Logger";

@provide(RentalService)
export class RentalService {
    constructor(
        private readonly carRepository: CarRepository,
        private readonly logger: Logger,
    ) { }

    rent() {
        this.carRepository.reserve(Math.floor((Math.random() * 10)).toString())
        this.logger.log('did rent')
    }
}