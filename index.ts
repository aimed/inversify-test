import 'reflect-metadata'

import { Container } from "inversify";
import { RentalService } from "./RentalService";
import { buildProviderModule, autoProvide } from 'inversify-binding-decorators';
import { Logger } from './Logger';
import { ConsoleLogger } from './ConsoleLogger';
import * as DomainA from './domainA'
import * as DomainB from './domainB'
import { Routable } from './Routable'

function run() {
    const container = new Container()
    // You don't need to bind() things if you use @provide()! (see inversify-binding-decorators)
    // When you .get() an injectable, it will automatically bind all of it's dependencies!
    container.load(buildProviderModule())

    // You don't event need @injectable(), but can make everything inside of a module injectable!
    autoProvide(container, DomainA)
    autoProvide(container, DomainB)
    container.bind(Routable).to(DomainA.DomainAEndpoint)
    container.bind(Routable).to(DomainB.DomainBEndpoint)

    // You can still/have to manually bind interfaces.
    container.bind(Logger).to(ConsoleLogger)

    // You can create separate domains and bring them together in a single server by creating abstractions!
    const routables = container.getAll<Routable>(Routable)
    routables.map(routable => routable.getRoutes().map(route => console.log(route)))

    const rentalService = container.get(RentalService)
    rentalService.rent()
}

run()