document.querySelector("#burcar-pacientes").onclick = e =>{
    fetch("http://api-pacientes.herokuapp.com/pacientes")
    .then(res=>res.json())
    .then(pacientes=>{
        pacientes.forEach(paciente=>{
            let novoPaciente = criarNovoPaciente(paciente)
            adicionarPacienteNaTabela(novoPaciente)
        })
        e.target.remove()
    })   
    .catch(erro=>{
        document.querySelector(".maisPacientes").classList.add("error-message")
        setTimeout(() => {
        document.querySelector(".maisPacientes").classList.remove("error-message")
            
        }, 5000);
    })
}