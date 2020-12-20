// var campo = document.querySelector('#filtar-tabela');
//
// campo.addEventListener("input", function () {
//     var pacientes = document.querySelectorAll('.paciente');
//
//     if (this.value.length > 0) {
//         pacientes.forEach(function (paciente) {
//             var nome = paciente.querySelector(".info-nome").textContent;
//             var expressao = new RegExp(campo.value,"i");
//             if (!expressao.test(nome)) {
//                 paciente.classList.add("invisivel");
//             }else{
//                 paciente.classList.remove("invisivel");
//             }
//         });
//     } else {
//         pacientes.forEach(function (paciente) {
//            paciente.classList.remove("invisivel");
//         });
//     }
//
// });

var campo = document.querySelector('#filtar-tabela');


campo.addEventListener("input", function(){
    // console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var nome = paciente.querySelector(".info-nome").textContent;
        var expressao = new RegExp(campo.value,'i');
        if (!expressao.test(nome) && this.value.length > 0) {
            paciente.classList.add('invisivel');
        } else {
            paciente.classList.remove('invisivel');
        }
    }
});