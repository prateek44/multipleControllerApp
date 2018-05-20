(function()
{
  'use strict';
  angular.module("MultipleControllerApp",[])
  .controller("MultipleControllerAppParentController",['$scope',MultipleControllerAppParentController])
  .controller("MultipleControllerAppChildController",['$scope',MultipleControllerAppChildController]);
  function MultipleControllerAppParentController($scope)
  {
    $scope.parentValue=1;
    $scope.pc=this;
    $scope.pc.parentValue=1;

  }
  function MultipleControllerAppChildController($scope)
  {
   console.log("$scope.parentValue",$scope.parentValue);
   console.log("child $scope",$scope);
  }
})();
