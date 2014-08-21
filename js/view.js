kerbalModMaker.view = [];
kerbalModMaker.view.parts = new Array();
kerbalModMaker.module = angular.module('kerbalModMaker', []);
kerbalModMaker.module.controller('PartListController', ['$scope', function($scope) {
    $scope.parts = kerbalModMaker.view.parts;
    $scope.addPart = function(partName){
      $scope.parts.push(partName);
    }
  }]);
