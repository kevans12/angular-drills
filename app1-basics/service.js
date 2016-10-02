angular.module('app').service('mainSvc', function($http, $q) {
  this.testing = "testing";
  this.simpleArray = ['Kyle', 'Kelli', 'McCoy', 'McKinley'];
  this.starWars = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    }).then(function(response){
      var rawData = response.data.results;
      var parsedResponse = [];
      for (var i = 0; i < rawData.length; i++) {
        var obj = {
          Name: rawData[i].name,
          Height: rawData[i].height
        }
        parsedResponse.push(obj);
      }
      // console.log(response);
      // console.log(parsedResponse);
      deferred.resolve(parsedResponse);

     })
     return deferred.promise;
  } //star wars end

  this.chuckNorris = function() {
    var deferredChuck = $q.defer();
    $http({
      method: 'GET',
      url: 'http:api.icndb.com/jokes/random?limitTo=[nerdy]?escape=javascript'
    }).then(function(chuckResponse){
      var chuckResponseFinal = chuckResponse.data.value.joke;
      // console.log(chuckResponse)
      deferredChuck.resolve(chuckResponseFinal);
    })
    return deferredChuck.promise;
  }

}) //the end
