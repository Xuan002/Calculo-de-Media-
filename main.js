var input1 = document.querySelector("#inp1")
var input2 = document.querySelector("#inp2")
var resultado = document.querySelector("#resultado")
const btn = document.querySelector('#btnCalcular')

btn.addEventListener("click", function(event){
    event.preventDefault();
    media1 = input1.value
    media2 = input2.value

    if(media1.length == 0 || media2.length == 0){
      validar()
    }
    /*if(media2.length == 0){
      resultado.textContent = "Digite um Valor"
      resultado.classList.add('erro')
    }*/else{
      var resu = MediaCalc(media1, media2)
      Swal.fire(
        'Bom trabalho!',
        `Sua Média do Semestre é: ${resu}!`,
        'success'
      )
      resultado.classList.remove('erro')
      resultado.textContent = `Média do Semestre: ${resu}`
    }
    if(media1 == 1319){
      resultado.textContent = "amor da minha vida? \n quer casar cmg?"
    }
    
})

function MediaCalc(valor, valor2){
  return (parseInt(valor) + parseInt(valor2)) / 2
}

function validar(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Valor Inválido!',
  })  
  return
  }

  
  

