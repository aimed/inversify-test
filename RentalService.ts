import { provide } from "inversify-binding-decorators";
import { CarRepository } from "./CarRepository";

@provide(RentalService)
export class RentalService {
    constructor(private readonly carRepository: CarRepository) { }

    rent() {
        this.carRepository.reserve(Math.floor((Math.random() * 10)).toString())
    }
}