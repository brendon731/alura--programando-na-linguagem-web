
const form = document.querySelector("#form-adiciona")

function obterPacienteDoFormulario(form){
    let paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculadoraImc(form.peso.value, form.altura.value)
    }
    return paciente

}

function criarNovoPaciente(paciente){
    let tr = document.createElement("tr")
    tr.classList.add("paciente")
    let novoPaciente = 
    `
        <td class="info-nome">${paciente.nome}</td>
        <td class="info-peso">${paciente.peso}</td>
        <td class="info-altura">${paciente.altura}</td>
        <td class="info-gordura">${paciente.gordura}</td>
        <td class="info-imc">${paciente.imc}</td>
    `
    tr.innerHTML = novoPaciente
    return tr

}

function adicionarPacienteNaTabela(novoPaciente){
    document.querySelector("#tabela-pacientes").appendChild(novoPaciente)

}
form.onsubmit = e =>{
    e.preventDefault()
    
    let paciente = obterPacienteDoFormulario(form)
    let novoPaciente = criarNovoPaciente(paciente)
    adicionarPacienteNaTabela(novoPaciente)
    form.reset()
}
