        angular.module('ejArrays',[]).controller('contrArrays',
        ['$scope',function($scope){
                $scope.usuarios = [{nombre: "Speedy",
                apellido:"Gonsales",
                edad:12,
                estudios:"andele2!"
            }];
        }]);

var usuarios = new Array();
var usu = new Array();

usu["nombre"]="Juan";
usu["apellido"]="Sense por";
usu.edad=33;
usu["estudios"]=[];
usuarios[1]=usu;

var usuarios =[{nombre: "Speedy",
        apellido:"Gonsales",
    edad:12,
estudios:"andele!"
}];


var usuario=usuarios[0];
document.write('<br />Edad: ' +usuario.edad);
document.write('<br />Nombre: ');
document.write(usuario.nombre);
document.write('<br />Apellido: ');
document.write(usuario.apellido);
usuario.estudios.push("mecaninca");

var estudio1 = usuario.estudios[0];
document.write('<br />Estudio1: ');
document.write(estudio1); 
