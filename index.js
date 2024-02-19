class novoHeroi {
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

}

let heroiNinja = new novoHeroi("Valyn", 13, "ninja");
let heroiMago = new novoHeroi("Melser", 588, "mago");

function atacouCom(heroi) {
  let ataque;

  if (heroi.tipo == "mago") {
    ataque = "magia";
  } else if (heroi.tipo == "guerreiro") {
    ataque = "espada";
  } else if (heroi.tipo == "monge") {
    ataque = "artes marciais";
  } else if (heroi.tipo == "ninja") {
    ataque = "shuriken";
  }

  return ataque
}

console.log(`O ${heroiNinja.tipo} atacou usando ${atacouCom(heroiNinja)}`);
console.log(`O ${heroiMago.tipo} atacou usando ${atacouCom(heroiMago)}`);