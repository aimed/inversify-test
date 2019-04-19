import { Routable } from "../Routable";

export class DomainAEndpoint implements Routable {
    getRoutes(): { path: string; }[] {
        return [{ path: '/a' }]
    }
}