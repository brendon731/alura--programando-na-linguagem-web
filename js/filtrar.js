const filtro = document.querySelector("#filtrar-tabela")

filtro.oninput = e =>{
    let pacientes = document.querySelectorAll(".paciente")
    pacientes.forEach(e=>{
        e.querySelector(".info-nome").textContent.toLowerCase().includes(filtro.value.toLowerCase())?
        e.removeAttribute("hidden"):
        e.setAttribute("hidden", true)


    })


}