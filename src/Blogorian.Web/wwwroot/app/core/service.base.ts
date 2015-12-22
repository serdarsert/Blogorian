module Blogorian.Core.Service {
    export interface IDataService {
        get(resource: string): ng.IPromise<Domain.EntityBase[]>;
        getSingle(resource: string): ng.IPromise<Domain.EntityBase>;
        add(resource: string, entity: Domain.IEntity): ng.IPromise<Domain.EntityBase>;
        update(resource: string, entity: Domain.IEntity): ng.IPromise<Domain.EntityBase>;
        remove(resource: string): ng.IPromise<any>;
    }

    export class ServiceBase {
        static register(moduleName: string, controllerName: string, requires?: string[]): void {
            var module = requires == null ? angular.module(moduleName) : angular.module(moduleName, requires);
            module.service(controllerName, this);
        }
    }
}