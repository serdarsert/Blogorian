'use strict';
var Blogorian;
(function (Blogorian) {
    var Common;
    (function (Common) {
        var Constants;
        (function (Constants) {
            var ModuleNames = (function () {
                function ModuleNames() {
                }
                ModuleNames.BlogorianApp = "blogorianApp";
                return ModuleNames;
            })();
            Constants.ModuleNames = ModuleNames;
            var ControllerNames = (function () {
                function ControllerNames() {
                }
                ControllerNames.PostsController = "postsController";
                ControllerNames.PostEditController = "postEditController";
                ControllerNames.PostAddController = "postAddController";
                ControllerNames.PostDetailController = "postDetailController";
                return ControllerNames;
            })();
            Constants.ControllerNames = ControllerNames;
            var ServiceNames = (function () {
                function ServiceNames() {
                }
                ServiceNames.DataService = "dataService";
                ServiceNames.ConstantService = "constantService";
                return ServiceNames;
            })();
            Constants.ServiceNames = ServiceNames;
        })(Constants = Common.Constants || (Common.Constants = {}));
    })(Common = Blogorian.Common || (Blogorian.Common = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=constants.js.map