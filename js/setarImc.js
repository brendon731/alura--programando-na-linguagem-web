
const pacientes = document.querySelectorAll(".paciente")

function validarAlturaEPeso(altura, peso){
    let isPesoValido = peso > 0 && peso < 1000
    let isAlturaValida = altura > 0 && altura <= 3
    return isAlturaValida && isPesoValido
}

pacientes.forEach(paciente =>{
    let peso = paciente.querySelector(".info-peso").textContent
    let altura = paciente.querySelector(".info-altura").textContent
    let imc = ""
 
    if(validarAlturaEPeso(altura, peso)){
        imc = calculadoraImc(peso, altura)
    }else{
        imc = "campo invalido"
        paciente.classList.add("campo-invalido")
    }
    paciente.querySelector(".info-imc").textContent = imc

})



