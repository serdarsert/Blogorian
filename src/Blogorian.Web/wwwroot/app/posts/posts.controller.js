var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Blogorian;
(function (Blogorian) {
    var Posts;
    (function (Posts) {
        var consts = Blogorian.Common.Constants;
        var PostsController = (function (_super) {
            __extends(PostsController, _super);
            function PostsController(constantService, dataService) {
                _super.call(this);
                this.constantService = constantService;
                this.dataService = dataService;
                this.getPosts();
            }
            PostsController.prototype.remove = function (id) {
                var self = this;
                this.dataService.remove(this.constantService.apiPostURI + id)
                    .then(function (result) {
                    self.getPosts();
                });
            };
            PostsController.prototype.getPosts = function () {
                var _this = this;
                this.dataService.get(this.constantService.apiPostURI).then(function (result) {
                    _this.posts = result;
                });
            };
            PostsController.$inject = [consts.ServiceNames.ConstantService, consts.ServiceNames.DataService];
            return PostsController;
        })(Blogorian.Core.Controller.ControllerBase);
        PostsController.register(consts.ModuleNames.BlogorianApp, consts.ControllerNames.PostsController);
    })(Posts = Blogorian.Posts || (Blogorian.Posts = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=posts.controller.js.map