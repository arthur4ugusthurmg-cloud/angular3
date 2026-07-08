var app = angular.module("Materialadmin", []);

app.controller("loginController", function($scope) {
    $scope.nome = {
        empresa: "N3 Grupo",
        hoje: "oi"
    };
});

app.controller("trabalhoHoje", function($scope) {
    $scope.nome = {
        trabalho: "n3bot"
    };
});

app.controller("descricao", function($scope) {
    $scope.descricao = {
        app: "A plataforma do n3bot e uma plataforma muito utilizada por muitas pessoas"
    };
});

app.controller("!controle.usuario", function($scope){

    $scope.usuario = "";
    $scope.senha = "";

});