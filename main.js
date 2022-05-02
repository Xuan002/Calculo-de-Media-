var input1 = document.querySelector("#inp1")
var input2 = document.querySelector("#inp2")
var resultado = document.querySelector("#resultado")
const btn = document.querySelector('#btnCalcular')

btn.addEventListener("click", function(event){
    event.preventDefault();
    media1 = input1.value
    media2 = input2.value
    
    var resu = MediaCalc(media1, media2)
    resultado.textContent = `sua Média é: ${resu}`
})

function MediaCalc(valor, valor2){
  return (parseInt(valor) + parseInt(valor2)) 
}


