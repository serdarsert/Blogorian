var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Blogorian;
(function (Blogorian) {
    var Posts;
    (function (Posts) {
        var PostDetailController = (function (_super) {
            __extends(PostDetailController, _super);
            function PostDetailController($routeParams, $location, constantService, dataService, $sce) {
                var _this = this;
                _super.call(this);
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.constantService = constantService;
                this.dataService = dataService;
                this.$sce = $sce;
                this.postId = $routeParams.id;
                dataService.getSingle(this.constantService.apiPostURI + this.postId)
                    .then(function (result) {
                    _this.post = result;
                });
            }
            PostDetailController.$inject = ["$routeParams", "$location", "constantService", "dataService", "$sce"];
            return PostDetailController;
        })(Blogorian.Core.Controller.ControllerBase);
        angular.module(Blogorian.Common.Constants.ModuleNames.BlogorianApp)
            .controller(Blogorian.Common.Constants.ControllerNames.PostDetailController, PostDetailController);
    })(Posts = Blogorian.Posts || (Blogorian.Posts = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=posts.detail.controller.js.map