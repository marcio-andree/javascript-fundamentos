let nota1 = 10;
let nota2 = 10;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3
 conceito = ""

 if (media >= 8) {
  conceito = "otimo"
 }
 else if (media >= 7) {
  conceito = "bom"
 }
 else if (media >= 6) {
  conceito = "regular"
 }
 else {
  conceito = "ruim"
 }

console.log("A media do Aluno foi " + media)
conceito = "outro conceito"

switch (conceito) {
  case "otimo":
    console.log("Aluno destaque")
    break;

    case "bom":
      console.log("Aluno bom")
      break;

    case "regular":
      console.log(" Precisa se esforçar")
      break;

    case "ruim":
      console.log("Aluno precisa de acompanhmento")
      break;

  default:
    console.log("ERRO")
    break;
}
