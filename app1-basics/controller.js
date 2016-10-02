angular.module('app').controller("mainCtrl", function($scope, mainSvc){
  $scope.testing = mainSvc.testing;
  $scope.simpleArray = mainSvc.simpleArray;
  $scope.getCharacters = function() {
    mainSvc.starWars().then(function(parsedResponse) {
      $scope.starWarsCharacters = parsedResponse;
    })
  }
  // $scope.getCharacters();
  $scope.getChuck = function() {
    mainSvc.chuckNorris().then(function(chuckResponseFinal) {
      $scope.chuckNorrisFact = chuckResponseFinal;
    })
  }

})
