angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/validarCodigo.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.validarCodigo = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('NovaPromocaoCtrl', function($scope, $ionicModal, $http) {

  $ionicModal.fromTemplateUrl('templates/novaPromocao.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.novaPromocaoModal = modal;
  });

  $scope.novaPromocao = function() {
    $scope.novaPromocaoModal.show();
  }

  // Triggered in the login modal to close it
  $scope.closeModal = function() {
    $scope.novaPromocaoModal.hide();
  };

  $scope.promocoes = [
    { titulo: 'Suco de laranja gratis!', descricao: 'lalalalalalalala' }
  ];

  $scope.promocaoNova = {};

  $scope.criarPromocao = function() {
    $scope.promocoes.push({
      titulo : $scope.promocaoNova.titulo,
      descricao : $scope.promocaoNova.descricao,
      data : $scope.promocaoNova.data,
      hora : $scope.promocaoNova.hora
    });
    $scope.closeModal();
    $scope.promocaoNova.titulo = "";
    $scope.promocaoNova.descricao = "";
    $scope.promocaoNova.data = "";
    $scope.promocaoNova.hora = "";

  }


  $scope.enviarPromocao = function (promocao) {

    $http.post('http://achoubarreiro.goldarkapi.com/push/devices/all/messages', {
      "message": promocao.titulo
    }, {
      headers: {
          "Accept": "application/json",
          "X-Api-Token": "4WZ1sleJLR1krSXzx5JmHAgF4h52o2/3jMfoSEjEwnBbmPNg6zbTpOdDm5dJmoaQ/BE2IR7eLrqsDa8fW+ZOuA==",
          "Content-Type": "application/json;charset=utf-8"
      }
    });
  };



})

