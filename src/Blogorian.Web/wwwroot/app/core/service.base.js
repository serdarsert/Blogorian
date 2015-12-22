var Blogorian;
(function (Blogorian) {
    var Core;
    (function (Core) {
        var Service;
        (function (Service) {
            var ServiceBase = (function () {
                function ServiceBase() {
                }
                ServiceBase.register = function (moduleName, controllerName, requires) {
                    var module = requires == null ? angular.module(moduleName) : angular.module(moduleName, requires);
                    module.service(controllerName, this);
                };
                return ServiceBase;
            })();
            Service.ServiceBase = ServiceBase;
        })(Service = Core.Service || (Core.Service = {}));
    })(Core = Blogorian.Core || (Blogorian.Core = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=service.base.js.map