
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var imcResult = paciente.querySelector('.info-imc');
    var validaPeso = validarPeso(peso);
    var validaAltura = validarAltura(altura);

    if (!validaPeso) {
        console.log("Peso invalido");
        validaPeso = false;
        imcResult.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido');
    }

    if (!validaAltura){
        console.log("Altura invalida");
        validaAltura = false;
        imcResult.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido');
    }

    if (validaPeso && validaAltura) {
        let imc = calculaImc(peso,altura);
        imcResult.textContent = imc;
    }
}

function calculaImc (peso,altura) {
    var imc = 0;
    imc = peso / (altura **2);
    return imc.toFixed(2);
}

function validarPeso(peso) {
    if (peso > 35 && peso < 200) {
        return true;
    }else{
        return false;
    }
}
function validarAltura(altura) {
    if (altura > 1.00 && altura < 3) {
        return true;
    }else{
        return false;
    }
}





















