function Converter(){
    var elementoInput = document.getElementById("valor");
    var valor = elementoInput.value;
    var valorDolarNumerico = parseFloat(valor);

    var valorReal = valorDolarNumerico * 4.74;

    var valorFinal = valorReal.toFixed(2);


    
    var elementoConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$: " + valorFinal

    elementoConvertido.innerHTML = valorConvertido;

    console.log(valorFinal);
}