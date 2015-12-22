module Blogorian.Common.Services {
    export class ConstantService extends Core.Service.ServiceBase {
        apiPostURI: string;
        constructor() {
            super();
            this.apiPostURI = '/api/posts/';
        }
    }

    ConstantService.register(Constants.ModuleNames.BlogorianApp, Constants.ServiceNames.ConstantService);
}