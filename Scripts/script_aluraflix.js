var filmes = [
    "https://cdn.ome.lt/s2PQhSgQPuGjVCj2IRWqcL8H3F4=/fit-in/837x500/smart/uploads/conteudo/fotos/new_hope_12.jpg", 
    "https://images-na.ssl-images-amazon.com/images/I/815YPxabSCL.jpg", 
    "https://ingresso-a.akamaihd.net/img/cinema/cartaz/20395-cartaz.jpg"
]

filmes.push("exemplo");//inclusão de elementos no array
filmes.pop("exemplo");//exclusão de elementos no array

for(var i = 0; i < filmes.length ; i++){ //incremento de item (laço de repetição/loop)
    document.write("<img src=" + filmes[i] +">");//forma de imprimir elementos na tela
}






