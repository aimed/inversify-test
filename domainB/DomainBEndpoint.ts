import { Routable } from "../Routable";

export class DomainBEndpoint implements Routable {
    getRoutes(): { path: string; }[] {
        return [{ path: '/b' }]
    }
}
