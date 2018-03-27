const API_KEY = "10023ddad32c6e13fbafbfacd77ae753"
const BASE_URL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=" + API_KEY + "&format=json";

angular
  .module("mainApp", [])
  .controller("mainController", [`$scope`, `$http`, ($scope, $http) => {
    $scope.currentArtist =

      $http({
        method: "GET",
        url: BASE_URL
      }).then(response => {
        console.log(response);
        console.log(response.data);
        $scope.artists = response.data.artists.artist;
      });

    $scope.loadArtists = (url) => {
      console.log("loading artists", url)
      $http({
        method: "GET",
        url: url
      }).then(response => {
        console.log("loading artists", response)
        console.log(response.data);
        $scope.artists = response.data.artists.artist;
      });
    }

  }]);