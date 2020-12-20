var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click',function (event) {
    event.preventDefault();

    var form = document.querySelector('#formulario');
    var paciente = pegaDadosDoForm(form);

    //valida peso e altura
    var erros = validaPaciente(paciente);
    if (erros.length > 0 ) {
        exibeMensagensErro(erros);
        return;
    }
    adicionaPacienteNaTabela(paciente);

    form.reset();
    var msgErro = document.querySelector('#mensagem-error');
    msgErro.innerHTML = '';

});

function adicionaPacienteNaTabela (paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function pegaDadosDoForm (form) {
    // pegando informações do formulario
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    };
    return paciente;
}

function montaTr (paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));

    return pacienteTr;
}

function montaTd (dado,classe) {

    var td =  document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente (paciente) {
    var erros = [];

    if (paciente.nome.length < 3) erros.push('Nome deve ter mais de 2 caracteres!!');
    if (!validarPeso(paciente.peso)) erros.push('Peso é inválido!!');
    if (!validarAltura(paciente.altura)) erros.push('Altura é inválida!!');
    if (paciente.gordura.length > 41 || paciente.gordura.length < 2 ) erros.push('Gordura é inválida!!');

    return erros;
}

function exibeMensagensErro (erros) {
    var ul = document.querySelector('#mensagem-error');
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });

}
















