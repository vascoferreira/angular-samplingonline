'use strict';

// Register `sampleDetail` component, along with its associated controller and template
angular.
  module('sampleDetail').
  component('sampleDetail', {
    templateUrl: 'sample-detail/sample-detail.template.html',
    controller: ['$routeParams', 'Sample',
      function SampleDetailController($routeParams, Phone) {
        var self = this;
        self.sample = Sample.get({sampleId: $routeParams.sampleId}, function(sample) {
          self.setImage(sample.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
