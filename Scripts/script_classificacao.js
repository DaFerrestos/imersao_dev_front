/*
A definição dos objetos é possível de ser descrita da seguinte maneira neste contexto:
Uma classe/objeto recebe quantidade 'n' de atributos variáveis. 
-São referenciados entre chaves {}
-Os valores dos atributos podem ser acessados individualmente, não é necessário chamar o objeto todo para exibir apenas 
uma informação.
-

*/

var j1 = { nome: "Jogador 1", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var j2 = { nome: "Jogador 2", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var j3 = { nome: "Jogador 3", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

/*
Métodos
*/

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;   
  return pontos;
}

j1.pontos = calculaPontos(j1);
j2.pontos = calculaPontos(j2);
j3.pontos = calculaPontos(j3);

var jogadores = [j1, j2, j3];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

/*
Funções de iteração:
*/

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}