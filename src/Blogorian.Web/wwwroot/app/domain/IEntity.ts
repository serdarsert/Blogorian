module Blogorian.Domain {
    export interface IEntity {
        id: number;
    }

    export class EntityBase implements IEntity {
        constructor() { }
        id: number;
    }
} 