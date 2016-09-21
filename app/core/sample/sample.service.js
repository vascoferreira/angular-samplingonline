'use strict';

angular.
  module('core.sample').
  factory('Sample', ['$resource',
    function($resource) {
      return $resource('samples/:sampleId.json', {}, {
        query: {
          method: 'GET',
          params: {sampleId: 'samples'},
          isArray: true
        }
      });
    }
  ]);
