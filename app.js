(function()
{
  //'use strict';
  angular.module("MultipleControllerApp",[])
  .controller("MultipleControllerAppParentController",MultipleControllerAppParentController)
  .controller("MultipleControllerAppChildController",MultipleControllerAppChildController);
  MultipleControllerAppParentController.$inject=['$scope'];
  function MultipleControllerAppParentController($scope)
  {
    $scope.parentValue=1;
    $scope.pc=this;
    $scope.pc.parentValue=1;
    console.log("##### ",$scope.parentValue);
    console.log("parent controller");

  }
    MultipleControllerAppChildController.$inject=['$scope'];
  function MultipleControllerAppChildController($scope)
  {
    console.log("child controller");
   console.log("$scope.parentValue",$scope.parentValue);
   $scope.parentValue=33;
   console.log("$scope.parentValue is masked and now child scope has it's own  $scope.parentValue property ",$scope.parentValue);
   console.log("child $scopes",$scope);
  }
})();
