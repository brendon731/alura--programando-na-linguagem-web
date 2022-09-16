document.querySelector("#burcar-pacientes").onclick = e =>{
    e.target.textContent = "carregando..."
    e.target.disabled = true
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
        e.target.textContent = "Buscar mais pacientes"
        e.target.disabled = false
        setTimeout(() => {
            document.querySelector(".maisPacientes").classList.remove("error-message")
            
        }, 5000);
    })
}