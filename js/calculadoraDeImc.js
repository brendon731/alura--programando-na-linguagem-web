function calculadoraImc(peso, altura){
    peso = Number(peso)
    altura = Number(altura)

    return (peso / (altura * altura)).toFixed(2)
}