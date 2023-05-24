const process = require("process");

const calculadora = require("./calculadora");

const operaciones = ["sumar","restar","multiplicar","dividir"];

//estos datos los cargo por consola
const operacion = process.argv[2];
//estas constantes se las debe parsear porque siempre vienen por defecto como string, por ende se la debe convertir a number con el +
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];
let resultado = 0;

//el metodo includes devuelve un booleano, va a realizar la operacion si lo que se solicita es correcto, de lo contrario arroja un false
if(operaciones.includes(operacion)){
    if(operacion === "sumar"){
        resultado = calculadora.sumar(numeroA,numeroB)
    }else if(operacion === "restar"){
        resultado = calculadora.restar(numeroA,numeroB)
    }else if(operacion === "multiplicar"){
        resultado = calculadora.multiplicar(numeroA,numeroB)
    }else if(operacion === "dividir"){
        resultado = calculadora.dividir(numeroA,numeroB)
    }
    console.log(resultado);
}else{
    console.log("ERROR: la operacion no es valida");
}

//console.log(resultado);
//si a las constantes numeroA y numeroB no los parseo, hace una concatenacion de los numeros que se coloquen en consola

//console.log(resultado);
//de el resultado de la suma

//console.log(resultado);
//arroja el array de calculadora

//longitud del array o cantidad de elementos
//console.log(operaciones.length);
//da como resultado por consola 4

//cantida de elementos menos uno
//console.log(operaciones.length - 1);
//da como resultado por consola 3