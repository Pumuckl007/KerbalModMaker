kerbalModMaker.controler = [];
eventManager.on('changeToPart', function(partName){
  console.log(partName);
});
kerbalModMaker.module = angular.module('kerbalModMaker',['ngRoute']);
kerbalModMaker.module.controller('PartListController', ['$scope', function($scope) {
    $scope.parts = kerbalModMaker.modModel.parts;
    eventManager.on("newPartButtonPressed", function(button){
      $scope.$apply(function($scope){
        if(kerbalModMaker.modModel.partExists("Untitled")){
          var i = 2;
          while(kerbalModMaker.modModel.partExists("Untitled" + i)){
            i++;
          }
          kerbalModMaker.modModel.addPart(new kerbalModMaker.part("Untitled" + i));
          eventManager.emit('changeToPart', "Untitled" + i)
        } else{
          kerbalModMaker.modModel.addPart(new kerbalModMaker.part("Untitled"));
          eventManager.emit('changeToPart', "Untitled")
        }
      });
    });
  }]);
kerbalModMaker.module.controller('addPartController', ['$scope', function($scope) {
    $scope.parts = kerbalModMaker.modModel.parts;
    eventManager.on('changeToPart', function(partName){
      $scope.activePart = kerbalModMaker.modModel.getPartByName(partName);
      console.log($scope.activePart);
    })
    $scope.change = function(){
      console.log($scope);
    }

  }]);
kerbalModMaker.part = function(name){
  this.name = name;
  this.model = "";
  this.author = "";
  this.resources = new Array();
  return this;
}
kerbalModMaker.module.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addPart', {
        templateUrl: 'partials/addPart.html',
        controller: 'addPartController'
      }).
      // when('/partEditor', {
      //   templateUrl: 'partials/partEditor.html',
      //   controller: 'PartListController'
      // }).
      otherwise({
        redirectTo: '/addPart'
      });
  }]);
