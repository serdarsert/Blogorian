module Blogorian.Posts {
    import consts = Common.Constants;
    class PostsController extends Core.Controller.ControllerBase {
        posts: Domain.Post[];

        static $inject = [consts.ServiceNames.ConstantService, consts.ServiceNames.DataService];
        constructor(private constantService: Common.Services.ConstantService,
            private dataService: Common.Services.DataService) {
            super();
            this.getPosts();
        }

        remove(id: number): void {
            var self = this;

            this.dataService.remove(this.constantService.apiPostURI + id)
                .then(function (result) {
                    self.getPosts();
                });
        }

        getPosts(): void {
            this.dataService.get(this.constantService.apiPostURI).then((result: Domain.Post[]) => {
                this.posts = result;
            });
        }
    }
    PostsController.register(consts.ModuleNames.BlogorianApp, consts.ControllerNames.PostsController);
}