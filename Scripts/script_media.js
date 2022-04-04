const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep, nextStep){
    let dNone, dBlock;
    if(currentStep == 1){
        dNone = firstDiv;
    } else if(currentStep == 2){
        dNone = secondDiv
    } else {
        dNone = finalDiv
    }

    dNone.style.display = 'none';

    if(nextStep == 1){
        dBlock = firstDiv;
    } else if(nextStep == 2){
        dBlock = secondDiv
    } else {
        dBlock = finalDiv
    }

    dBlock.style.display = 'block';
}

function CalcularMedia() {
      
    var notaPrimeiroBimestre = document.getElementById("n1").value;
    var notaSegundoBimestre = document.getElementById("n2").value;
    var notaTerceiroBimestre = document.getElementById("n3").value;
    var notaQuartoBimestre = document.getElementById("n4").value;
  
    var notaCalculada =
      (parseInt(notaPrimeiroBimestre) +
        parseInt(notaSegundoBimestre) +
        parseInt(notaTerceiroBimestre) +
        parseInt(notaQuartoBimestre)) /
      4;
  
    var notaFinal = notaCalculada.toFixed(1);
  
    document.getElementById("result").innerHTML = notaFinal;

  

    go(2, 3);

}
