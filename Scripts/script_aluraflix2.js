function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;

    if(filmeFavorito.endsWith(".jpg")){
        listarFilmesNaTela(filmeFavorito);        
    } else {
        console.error("Endereço de URL inválida");
    }

    document.getElementById("filme").value = "";//limpa o campo de digitação
}

function listarFilmesNaTela(filme){
    var elementoFilmeFav = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFav;

}

