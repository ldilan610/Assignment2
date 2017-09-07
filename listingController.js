angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function () {
        $scope.listings.push({
            "code": $scope.newListings.newCode,
            "name": $scope.newListings.newName,
            "coordinates": {
                "latitude": $scope.newListings.newLat,
                "longitude": $scope.newListings.newLong,
            }, 
            "address": $scope.newListings.newAddress
        })
        $scope.newListings.newCode = "";
        $scope.newListings.newName = "";
        $scope.newListings.newLat = "";
        $scope.newListings.newLong = "";
        $scope.newListings.newAddress = "";
    };
    $scope.deleteListing = function (index) {
        var removeListing = $scope.listings.indexOf(index)
        $scope.listings.splice(removeListing, 1)
    };
    $scope.showDetails = function (index) {
        var showDeets = $scope.listings.indexOf(index)
        $scope.detailedInfo = $scope.listings[showDeets]
    };
  }
]);