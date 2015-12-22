var Blogorian;
(function (Blogorian) {
    var Core;
    (function (Core) {
        var Route;
        (function (Route) {
            var BlogorianRoute = (function () {
                function BlogorianRoute(path, templateUrl, controller, controllerAs) {
                    this.path = path;
                    this.templateUrl = templateUrl;
                    this.controller = controller;
                    if (controllerAs)
                        this.controllerAs = controllerAs;
                }
                return BlogorianRoute;
            })();
            Route.BlogorianRoute = BlogorianRoute;
        })(Route = Core.Route || (Core.Route = {}));
    })(Core = Blogorian.Core || (Blogorian.Core = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=route.js.map