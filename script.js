const A_MAIUSCULO = 65;
const paises = [];
let respostaCerta = "";

const carregarPaises = () =>{
  const intl = new Intl.DisplayNames(['pt'], {type: 'region'});
  for(let i = 0; i < 26; i++){
    for(let j = 0; j < 26; j++){
      let codigo = String.fromCharCode(A_MAIUSCULO + i) + String.fromCharCode(A_MAIUSCULO + j);
      let nome = intl.of(codigo);
      if(nome != codigo){
        const local = new Object();
        local.nome = nome;
        local.codigo = codigo;
        paises.push(local);
      }
    }
  }
};

const gerarFlag = () =>{
  let opcoes = [];
  let opcaoCerta = Math.floor(Math.random()*3);
  for(let i = 0; i < 3; i++){
    let opt =  (Math.floor(Math.random()*paises.length));
    if(opcoes.includes(opt)){
      i--;
    }
    opcoes.push(opt);
  }
  let docFlag = document.getElementById("flag");
  docFlag.src = paises[opcoes[opcaoCerta]].codigo.toLowerCase() + ".png";
  respostaCerta = paises[opcoes[opcaoCerta]].nome;
  document.getElementById("op1").value = paises[opcoes[0]].nome;
  document.getElementById("op2").value = paises[opcoes[1]].nome;
  document.getElementById("op3").value = paises[opcoes[2]].nome;
};

const verificar = (doc) =>{
  let docTexto = document.getElementById("texto");
  if(respostaCerta == doc.value){
    docTexto.innerHTML = "Resposta correta!"
  }
  else{
    docTexto.innerHTML = "Resposta errada :("
  }
  gerarFlag()
}

carregarPaises();
gerarFlag();