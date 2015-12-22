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
            var consts = Common.Constants;
            var DataService = (function (_super) {
                __extends(DataService, _super);
                function DataService($http, $q) {
                    _super.call(this);
                    this.httpService = $http;
                    this.qService = $q;
                }
                DataService.prototype.get = function (resource) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.get(resource).then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.prototype.getSingle = function (resource) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.get(resource).then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.prototype.add = function (resource, entity) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.post(resource, entity)
                        .then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.prototype.update = function (resource, entity) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.put(resource, entity)
                        .then(function (data) {
                        deferred.resolve(data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.prototype.remove = function (resource) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.delete(resource)
                        .then(function (data) {
                        deferred.resolve(data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.$inject = ['$http', '$q'];
                return DataService;
            })(Blogorian.Core.Service.ServiceBase);
            Services.DataService = DataService;
            DataService.register(consts.ModuleNames.BlogorianApp, consts.ServiceNames.DataService);
        })(Services = Common.Services || (Common.Services = {}));
    })(Common = Blogorian.Common || (Blogorian.Common = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=dataService.js.map