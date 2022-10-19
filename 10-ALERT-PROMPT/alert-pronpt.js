// function Alerta() {
//   let nome = prompt('Qual é o seu nome?');
//   alert("Bem vindo " + nome);
// }




function Alerta() {
 var nota1 = parseFloat(prompt("Digite a nota 1"));
 var nota2 = parseFloat(prompt("Digite a nota 2"));
 var nota3 = parseFloat(prompt("Digite a nota 3"));
 var media = (nota1 + nota2 + nota3) / 3
 alert("A media é " + media);
}


function Aprovado() {

  if (media > 7)
  alert("Aprovado");
  else
    alert("Reprovado");
}
