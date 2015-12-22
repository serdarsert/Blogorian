var Blogorian;
(function (Blogorian) {
    var Core;
    (function (Core) {
        var Controller;
        (function (Controller) {
            var ControllerBase = (function () {
                function ControllerBase() {
                }
                ControllerBase.register = function (moduleName, controllerName, requires) {
                    var module = requires == null ? angular.module(moduleName) : angular.module(moduleName, requires);
                    module.controller(controllerName, this);
                };
                return ControllerBase;
            })();
            Controller.ControllerBase = ControllerBase;
        })(Controller = Core.Controller || (Core.Controller = {}));
    })(Core = Blogorian.Core || (Blogorian.Core = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=controller.base.js.map