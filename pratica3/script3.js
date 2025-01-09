const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor= document.querySelector("#operacao");
let resposta = document.querySelector("#resposta");
//evento chance muda o campo de seletor para fazer as somas de forma automatica
seletor.addEventListener("change", calcular);

campo1.addEventListener("keyup", calcular);
campo2.addEventListener("keyup", calcular);

function calcular() {
//resolvendo problema de Nan(not a number) quando os campos estão vazio, adicionando uma mensagem de erro e removendo depois de uns segundos
   if(campo1.value === '' || campo2.value === ''){
   //classList adiciona uma classe caso seja necessario ser usada
   //neste caso adicionamos a class problema para aviso de eero em campo vazio
    resposta.classList.add("problema");
    resposta.innerHTML="Campo Vazio";
    setTimeout(()=>{
        resposta.classList.remove("problema");
        resposta.innerHTML='';
   },3000);
   }

   //a lógica if foi alterada usando somente o if com a comparação dos 2 campos usando o && no lugar ||
   else{
            const valor1 = parseInt(campo1.value);
            const valor2 = parseInt(campo2.value);
    
            const operacao = seletor.value;
    
          
            if (operacao === "somar")
           
                resposta.innerHTML = valor1 + valor2;
    
            if (operacao === "subtrair")
                resposta.innerHTML = valor1 - valor2;
    
            if (operacao === "multiplicar")
                resposta.innerHTML = valor1 * valor2;
    
            if (operacao === "dividir")
                resposta.innerHTML = valor1 / valor2;
   }
    
}
    
