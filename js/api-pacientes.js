var botaoApi = document.querySelector("#buscar-paciente-api");
 // url da api -> https://api-pacientes.herokuapp.com/pacientes

botaoApi.addEventListener('click',function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abre a conexão

    var spanErro = document.querySelector("#erro-api");
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            spanErro.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            spanErro.classList.remove("invisivel");
        }
    });

    xhr.send();
});