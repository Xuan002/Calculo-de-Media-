var input1 = document.querySelector("#inp1")
var input2 = document.querySelector("#inp2")
var resultado = document.querySelector("#resultado")
const btn = document.querySelector('#btnCalcular')

btn.addEventListener("click", function(event){
    event.preventDefault();
    media1 = input1.value
    media2 = input2.value

    if(media1.length == 0){
      resultado.textContent = "Digite um Valor"
      resultado.classList.add('erro')
    }
    if(media2.length == 0){
      resultado.textContent = "Digite um Valor"
      resultado.classList.add('erro')
    }else{
      var resu = MediaCalc(media1, media2)
      resultado.textContent = `Média do Semestre: ${resu}`
    }
    
    if(media1 == 666){
      resultado.textContent = "Arthur?"
    }

    if(media1 == 010319){
      resultado.textContent = "amor da minha vida?"
    }
    
    
})

function MediaCalc(valor, valor2){
  return (parseInt(valor) + parseInt(valor2)) / 2
}


