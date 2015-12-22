
/// <reference path="../../domain/ientity.ts" />
module Blogorian.Common.Services {
    import consts = Common.Constants;
    export class DataService extends Core.Service.ServiceBase implements Core.Service.IDataService {
        private httpService: ng.IHttpService;
        private qService: ng.IQService;

        static $inject = ['$http', '$q'];
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            super();
            this.httpService = $http;
            this.qService = $q;
        }

        get(resource: string): ng.IPromise<Domain.EntityBase[]> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(resource).then(function (result: any) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        getSingle(resource: string): ng.IPromise<Domain.EntityBase> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(resource).then(function (result: any) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        add(resource: string, entity: Domain.IEntity): ng.IPromise<Domain.EntityBase> {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.post(resource, entity)
                .then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        update(resource: string, entity: Domain.IEntity): ng.IPromise<Domain.EntityBase> {
            var self = this;
            var deferred = self.qService.defer();

            self.httpService.put(resource, entity)
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }

        remove(resource: string): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.delete(resource)
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
    DataService.register(consts.ModuleNames.BlogorianApp, consts.ServiceNames.DataService);
} 