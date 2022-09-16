const tPacientes = document.querySelector("#tabela-pacientes")

tPacientes.addEventListener("dblclick", (e)=>{
    e.target.parentElement.classList.add("fadeOut")
    setTimeout(() => {
        
        e.target.parentNode.remove()
    }, 500);

})