
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var imcResult = paciente.querySelector('.info-imc');
    var validacao = true;

    if (peso < 1.00 || peso > 200) {
        console.log("Peso invalido");
        validacao = false;
        imcResult.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido');
    }

    if (altura < 1.00 || altura > 2.99){
        console.log("Altura invalida");
        validacao = false;
        imcResult.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido');
    }

    if (validacao){
        let imc = calculaImc(peso,altura);
        imcResult.textContent = imc;
    }
}

function calculaImc (peso,altura) {
    var imc = 0;
    imc = peso / (altura **2);
    return imc.toFixed(2);
}
























