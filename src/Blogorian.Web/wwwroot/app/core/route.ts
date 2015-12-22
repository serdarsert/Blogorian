module Blogorian.Core.Route {
    import ngRoute = angular.route;
    export class BlogorianRoute implements angular.route.IRoute {
        path: string;
        templateUrl: string;
        controller: string | Function;
        controllerAs: string;
        constructor(path: string, templateUrl: string, controller: string | Function, controllerAs?: string) {
            this.path = path;
            this.templateUrl = templateUrl;
            this.controller = controller;
            if (controllerAs)
                this.controllerAs = controllerAs;
        }
    }
}