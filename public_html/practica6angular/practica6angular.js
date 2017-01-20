
var app= angular.module('myApp',[]);

app.controller('controlador', ['$scope', function($scope){
        $scope.lista=[1,2,3,4,5];
        $scope.addnumfinal= function(){
          $scope.lista.push($scope.numero);  
        };
        $scope.addnuminici=function(){
          $scope.lista.unshift($scope.numero);  
        };
        $scope.deleteultnum=function(){
            $scope.lista.pop($scope.numero);
        };
        $scope.deleteprimnum=function(){
            $scope.lista.shift($scope.numero);
        };
        $scope.calculaoper=function(){
            var operaciones;
            for(var k=0; k < $scope.lista.length-1; k++){
                operaciones+=$scope.lista[k]+$scope.oper;
            }
            operaciones+=$scope.lista[k];
            console.log(operaciones);
            $scope.resulOper = eval(operaciones);
        };
       
    }]);