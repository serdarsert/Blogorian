module Blogorian.Core.Controller {
    export class ControllerBase {
        static register(moduleName: string, controllerName: string, requires?: string[]): void {
            var module = requires == null ? angular.module(moduleName) : angular.module(moduleName, requires);
            module.controller(controllerName, this);
        }
    }
}