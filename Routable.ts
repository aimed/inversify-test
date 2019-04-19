export interface Routable {
    getRoutes(): { path: string }[]
}

export const Routable = Symbol('Routable')