import { provide } from 'inversify-binding-decorators';

@provide(CarRepository)
export class CarRepository {
    reserve(carId: string) {
        console.log('reserving car ', carId);
    }
}