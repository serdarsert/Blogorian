var Blogorian;
(function (Blogorian) {
    var Posts;
    (function (Posts) {
        var cn = Blogorian.Common.Constants.ControllerNames;
        var br = Blogorian.Core.Route;
        var Config = (function () {
            function Config($routeProvider) {
                var routes = new Array();
                routes.push(new br.BlogorianRoute("/", "/app/posts/list.html", cn.PostsController, "vm"));
                routes.push(new br.BlogorianRoute("/post/:url-:id", "/app/posts/detail.html", cn.PostDetailController, "vm"));
                routes.forEach(function (route) {
                    $routeProvider.when(route.path, route);
                });
                $routeProvider
                    .otherwise({ redirectTo: '/' });
            }
            return Config;
        })();
        Config.$inject = ["$routeProvider"];
        var blogorianApp = angular.module(Blogorian.Common.Constants.ModuleNames.BlogorianApp);
        blogorianApp.config(Config);
    })(Posts = Blogorian.Posts || (Blogorian.Posts = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=posts.route.js.map