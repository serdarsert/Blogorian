module Blogorian.Posts {
    class PostDetailController extends Core.Controller.ControllerBase {

        post: Domain.Post;
        private postId: number;

        static $inject = ["$routeParams", "$location", "constantService", "dataService", "$sce"];
        constructor(private $routeParams: Core.Interface.IPostParams,
            private $location: ng.ILocationService,
            private constantService: Common.Services.ConstantService,
            private dataService: Common.Services.DataService,
            private $sce: ng.sanitize.ISanitizeService) {
            super();
            this.postId = $routeParams.id;

            dataService.getSingle(this.constantService.apiPostURI + this.postId)
                .then((result: Domain.Post) => {
                    this.post = result;
                });
        }
    }
    angular.module(Common.Constants.ModuleNames.BlogorianApp)
        .controller(Common.Constants.ControllerNames.PostDetailController, PostDetailController);
}