// Carne - 400 g por pessoa + 6 horas - 650
//Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
//Refrigerante/água - 1000 ml por pessoa + 6 horas 1500ml

//crianças valem por 0,5

let inputCriancas = document.getElementById('criancas');
let inputAdultos = document.getElementById('adultos');
let inputHoras = document.getElementById('horas');
let inputResultado = document.getElementById('resultado');
let carne = 0;
let cerveja = 0;
let refrigerante = 0;

function quantidades(tempo){
    if (tempo < 6){
        carne = 400;
        cerveja = 1200;
        refrigerante = 1000;
    }else{
        carne = 650;
        cerveja = 2000;
        refrigerante = 1500;
    }
}

function calcular(){
    let criancas = inputCriancas.value;
    let adultos = inputAdultos.value;
    let tempo = inputHoras.value;
    quantidades(tempo)
    let resulto = inputResultado;
    inputResultado.innerHTML = 'Quantidade de carne para o churrasco é: ' + qtCarne(adultos, criancas) + ' Kg ';
    inputResultado.innerHTML += 'Quantidade de cerveja para o churrasco é: ' + Math.ceil(qtCerveja(adultos, criancas)) + ' latinhas de cerveja. ';
    inputResultado.innerHTML += 'Quantidade de carne para o refrigerante é: ' + Math.ceil(qtRefrigerante(adultos, criancas)) + ' garrafas de Refrigerante de 2L. ';
}

function qtCarne(adultos, criancas){
    return (adultos*carne + criancas*carne)/1000;
}

function qtCerveja(adultos, criancas){
    return (adultos*cerveja + criancas*cerveja)/355;
}

function qtRefrigerante(adultos, criancas){
    return (adultos*refrigerante + criancas*refrigerante)/2000;
}