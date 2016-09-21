'use strict';

// Register `sampleList` component, along with its associated controller and template
angular.
  module('sampleList').
  component('sampleList', {
    templateUrl: 'sample-list/sample-list.template.html',
    controller: ['Sample',
      function SampleListController(Sample) {
        this.samples = Sample.query();
        this.orderProp = 'age';
      }
    ]
  });
