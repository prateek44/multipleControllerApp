(function()
{
  //'use strict';
  angular.module("MultipleControllerApp",[])
  .controller("MultipleControllerAppParentController",MultipleControllerAppParentController)
  .controller("MultipleControllerAppChildController",MultipleControllerAppChildController)
  .controller("MultipleControllerAppParentController2",MultipleControllerAppParentController2)
  .controller("MultipleControllerAppChildController2",MultipleControllerAppChildController2);
  MultipleControllerAppParentController.$inject=['$scope'];
  function MultipleControllerAppParentController($scope)
  {
    $scope.parentValue=1;
    $scope.pc=this;
    $scope.pc.parentValue=1;
    console.log("##### ",$scope.parentValue);
    console.log("parent controller");
    console.log("##### ",$scope.parentValue);

  }


  MultipleControllerAppParentController2.$inject=['$scope'];
  function MultipleControllerAppParentController2($scope)
  {
    var parent=this;
    parent.parentVal=12;
  }


  MultipleControllerAppParentController2.$inject=['$scope'];
  function MultipleControllerAppChildController2($scope)
  {
    var child=this;
    child.parentVal=122;
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
