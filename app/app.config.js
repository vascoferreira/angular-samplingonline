'use strict';

angular.
  module('samplingOnlineApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/samples', {
          template: '<sample-list></sample-list>'
        }).
        when('/samples/:sampleId', {
          template: '<sample-detail></sample-detail>'
        }).
        otherwise('/samples');
    }
  ]);
