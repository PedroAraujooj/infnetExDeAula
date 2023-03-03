const palavras = ["maçã","banana","laranja","abacate","morango","uva","pera","abacaxi","melancia","kiwi","limão","melão","mamão","amora","framboesa","caqui","figo","goiaba","jaca","tangerina"
];
let correta = '';
const jogar = () => {
  let docChute = document.getElementById("chute");
  chavear(docChute);
//  docChute.style.display = "inline"

  let docValidar = document.getElementById("validar");
  chavear(docValidar);
 // docValidar.style.display = "inline"

  let docPalavra = document.getElementById("palavra");

  let palavraEscolhida = palavras[(Math.floor(Math.random() * (palavras.length)))]
  correta = palavraEscolhida;
  palavraEscolhidaArr = palavraEscolhida.split("");
  shuffle(palavraEscolhidaArr);
  console.log(palavraEscolhidaArr);
  
  let palavraEmbaralhada = palavraEscolhidaArr.join("");
  console.log(palavra + 1);
  docPalavra.innerHTML = palavraEmbaralhada;
};

const shuffle = (arr) =>{
  arr.sort(() => Math.random() - 0.5);
}

const validar = () => {
  let palavra = document.getElementById("chute").value;
  console.log(palavra);
  docPalavra = document.getElementById("palavra");
  if(correta === palavra){
    console.log("igaul");
    docPalavra.innerHTML = `O seu resultado está correto`;
  }
  else{
     docPalavra.innerHTML = `O seu resultado está errado, o correto seria ${correta}`;
  }
}

const chavear = (doc) =>{
  if(doc.style.display == "none"){
    doc.style.display = "inline"
  }
  else{
    doc.style.display = "none"
  }
}