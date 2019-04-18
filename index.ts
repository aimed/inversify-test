import 'reflect-metadata'

import { Container } from "inversify";
import { RentalService } from "./RentalService";
import { buildProviderModule } from 'inversify-binding-decorators';

function run() {
    const container = new Container()
    container.load(buildProviderModule())

    const rentalService = container.get(RentalService)
    rentalService.rent()
}

run()