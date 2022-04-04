var carta1 = {
    nome: "Bebê Cansada",
    imagem:
      "https://1.bp.blogspot.com/-i9hykkYGa0A/YVoWqYsoIJI/AAAAAAAAQEI/UYhBwdpanGgd9ONaaOIlyH47UnCsI2RJwCNcBGAsYHQ/s220/baby-exhausted.gif",
    atributos: {
      Fofurice: 5,
      CuteCuteNenem: 10,
      VontadeDeMorder: 7
    }
  };
  
  var carta2 = {
    nome: "Bebê fujão",
    imagem: "https://c.tenor.com/EMh3ky3GEo0AAAAC/bebe-running.gif",
    atributos: {
      Fofurice: 10,
      CuteCuteNenem: 8,
      VontadeDeMorder: 9
    }
  };
  
  var carta3 = {
    nome: "Bebê comemorando",
    imagem:
      "https://cdn.streamelements.com/uploads/907d0d9f-d94b-402f-a626-f3f94b5c2348.gif",
    atributos: {
      Fofurice: 7,
      CuteCuteNenem: 10,
      VontadeDeMorder: 6
    }
  };

  var carta4 = {
    nome: "Baby Yoda",
    imagem:
      "https://media1.giphy.com/media/Wn74RUT0vjnoU98Hnt/200w.webp?cid=ecf05e47fnlbolr8y3f0edeodrhssecjqlgmiavx03e48jpa&rid=200w.webp&ct=guploads/907d0d9f-d94b-402f-a626-f3f94b5c2348.gif",
    atributos: {
      Fofurice: 10,
      CuteCuteNenem: 10,
      VontadeDeMorder: 10
    }
  };
  
  var cartaMaquina;
  var cartaJogador;
  var cartas = [carta1, carta2, carta3, carta4];
  // 0          1           2         4
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 4);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 4);
    } //dessa forma, garantimos que não serão sorteadas cartas iguais
    cartaJogador = cartas[numeroCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    //console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;//desabilitando botão após jogar
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  