var numeroSecreto = parseInt(Math.random() * 11);

/*
Com a definição da variável "numeroSecreto" fora do escopo da função, o número sorteado segue armazenado na variável
até que o programa seja compilado novamente.
Caso essa definição ocorresse dentro do escopo, o usuário teria apenas uma chance de acertar pois a cada clique/chamada
haveria um novo sorteio!
*/

function Chutar(){

    var elementoResultado = document.getElementById("resultado");
    var chute =  parseInt(document.getElementById("valor").value); //pegar numero do input já convertendo para inteiro
    

    if (chute == numeroSecreto){        
        elementoResultado.innerHTML = "Você acertou!";
        document.getElementById("resultado").style.color = "green";
        
    } else if( chute >= 10 || chute < 0) {
        alert("Número inválido! Você deve digitar um número entre 0 e 10.");
    } else {        
        elementoResultado.innerHTML = "Não foi dessa vez! O número secreto era: " + numeroSecreto;
        document.getElementById("resultado").style.color = "red";
    }

}