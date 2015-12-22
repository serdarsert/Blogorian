module Blogorian.Posts {
    import cn = Common.Constants.ControllerNames;
    import br = Core.Route;
    class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            var routes: br.BlogorianRoute[] = new Array<br.BlogorianRoute>();
            routes.push(new br.BlogorianRoute("/", "/app/posts/list.html", cn.PostsController, "vm"));
            routes.push(new br.BlogorianRoute("/post/:url-:id", "/app/posts/detail.html", cn.PostDetailController, "vm"));

            routes.forEach(route=> {
                $routeProvider.when(route.path, route);
            });
            $routeProvider
                .otherwise({ redirectTo: '/' });
        }
    }
    Config.$inject = ["$routeProvider"];
    var blogorianApp = angular.module(Common.Constants.ModuleNames.BlogorianApp);
    blogorianApp.config(Config);
}