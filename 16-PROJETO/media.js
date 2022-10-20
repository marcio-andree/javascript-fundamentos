let nomes = ["Pedro", "Everton Ribeiro", "Gabigol"];
let notas1 = [9, 8.8, 7];
let notas2 = [9, 9, 8];
let resultado = [];

function media(notas1, notas2) {

  return (notas1 + notas2) / 2;
}

function passou(media) {
  if (media >= 7) {
  return "Aprovado";
  }else {
    return "Reprovado";
  }

}

for (const nome in nomes) {
    alunos = nomes[nome];
    notaA = notas1[nome];
    notaB = notas2[nome];
    resultado = media(notaA, notaB);

    console.log("Nome: " + alunos + " Nota1: " + notaA + " Nota2: " + notaB + " Média " + resultado + " " + passou(resultado));
}



