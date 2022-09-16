
const input = document.querySelectorAll("#form-adiciona input")

input.forEach(field => {
    field.onblur = e =>{
        let message = ""

        if(!field.validity.valid){
            message = checkError(field)
            field.classList.add("input-invalido")

        }else{
            field.classList.remove("input-invalido")

        }
       
        field.parentElement.querySelector(".error-message").innerHTML = message

    }
})
function checkError(input){
    let message = ""
    errorTypes.forEach(error=>{
        
        if(input.validity[error]){
            message = errorMessages[input.name][error]
        }
    })
    return message
}
const errorMessages = {
    nome:{
        valueMissing:"preencha esse campo",
    },
    peso:{
        valueMissing:"preencha esse campo",
        rangeUnderflow:"muito leve", 
        rangeOverflow:"muito Pesado"
    },
    altura:{
        valueMissing:"preencha esse campo",
        rangeUnderflow:"muito baixo", 
        rangeOverflow:"muito alto"
    },
    gordura:{
        valueMissing:"preencha esse campo",
        rangeUnderflow:"muito baixo"

    }
}
const errorTypes = [
    "valueMissing",
    "rangeUnderflow",
    "rangeOverflow"
]