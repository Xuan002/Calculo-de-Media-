var input1 = document.querySelector("#inp1")
var input2 = document.querySelector("#inp2")
var resultado = document.querySelector("#resultado")
const btn = document.querySelector('#btnCalcular')

btn.addEventListener("click", function(event){
    event.preventDefault();
    media1 = input1.value
    media2 = input2.value

    if(media1.length && media2.length == 0){
      validar()
    }
    else{
      var resu = MediaCalc(media1, media2)
      resultado.textContent = `Média do Semestre: ${resu}`
    }
    
    if(media1 == 0111001001101001011101100110010101101110 ){
      resultado.textContent = "Uma espada quebrada??"
    }

    if(media1 == 1319){
      resultado.textContent = "amor da minha vida? \n quer casar cmg?"
    }
    
    
})

function MediaCalc(valor, valor2){
  return (parseInt(valor) + parseInt(valor2)) / 2
}

function validar(){
  resultado.textContent = "Digite um Valor"
  resultado.classList.add('erro')
  return
}
