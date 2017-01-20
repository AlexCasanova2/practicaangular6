$(document).ready(iniciar);

var lista_numeros =[ 
    Math.floor(Math.random()*(1+9)+1),
        Math.floor(Math.random()*(1+9)+1),
        Math.floor(Math.random()*(1+9)+1),
        Math.floor(Math.random()*(1+9)+1),
        Math.floor(Math.random()*(1+9)+1)
];

function iniciar(){
    //$("#arrayNum").css({"width":"15%","height":"10%","display":"inline-block"});
    $("#res").css({"display":"block"});
    //$(".numeros").css({"width":"50px","height":"100%","text-align":"center","display":"inline-block"});
    
    $("#arrayNum").html("");
    for(var cont = 0; cont<  lista_numeros.length;cont++){
         $("#arrayNum").append('<div class="numeros"><h1>' +lista_numeros[cont] + '</h1></div>');
    }
    
    $("#primerUlt").click(primer_ultimo);
    $("#enviarfinal").click(añadir_final);
    $("#enviarinicio").click(añadir_inicio);
    $("#borrarUlt").click(borrar_ultimo);
    $("#borrarPri").click(borrar_primero);
    $("#calcular").click(calcular_operacion);
}
 
console.log(lista_numeros);

function primer_ultimo(){
    $("#res").append("<div>"+ lista_numeros[0] + ", " +  lista_numeros[lista_numeros.length-1] + "</div>");
}

function añadir_final(){
    lista_numeros[lista_numeros.length+1]=$("#final").val();
    $("#arrayNum").append('<div class="numeros" ><h1>' + lista_numeros[lista_numeros.length-1] + '</h1></div>');
}

function añadir_inicio(){
    lista_numeros.unshift($("#inicio").val());
    
       $("#arrayNum").html("");
      for(var cont = 0; cont< lista_numeros.length;cont++){
        $("#arrayNum").append('<div class="numeros"><h1>' +lista_numeros[cont] + '</h1></div>');
   }
}

function borrar_ultimo(){
    lista_numeros.pop();
    $("#arrayNum").html("");
    for(var cont = 0; cont< lista_numeros.length;cont++){
        var n=lista_numeros[cont];
        console.log(n);
        $("#arrayNum").append('<div class="numeros"><h1>' + n+ '</h1></div>');
   }
}

function borrar_primero(){
    lista_numeros.shift();
    $("#arrayNum").html("");
    for(var cont = 0; cont< lista_numeros.length;cont++){
        var n=lista_numeros[cont];
        console.log(n);
        $("#arrayNum").append('<div class="numeros"><h1>' + n+ '</h1></div>');
     }
   }
    
function calcular_operacion(){
        var suma ="+";
        var resta="-";
        var multi="*";
        var divi="/";
        var funciona="funciona";
        if ($("#opera")==suma){
            $("#res6").append(funciona);
            console.log(funciona);
        }
    }
    
    
    
     

