var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Blogorian;
(function (Blogorian) {
    var Common;
    (function (Common) {
        var Services;
        (function (Services) {
            var ConstantService = (function (_super) {
                __extends(ConstantService, _super);
                function ConstantService() {
                    _super.call(this);
                    this.apiPostURI = '/api/posts/';
                }
                return ConstantService;
            })(Blogorian.Core.Service.ServiceBase);
            Services.ConstantService = ConstantService;
            ConstantService.register(Common.Constants.ModuleNames.BlogorianApp, Common.Constants.ServiceNames.ConstantService);
        })(Services = Common.Services || (Common.Services = {}));
    })(Common = Blogorian.Common || (Blogorian.Common = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=constantService.js.map