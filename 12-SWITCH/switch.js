let nota1 = 7;
let nota2 = 7;
let media = (nota1 + nota2) / 2
let conceito = ""

if (media >= 8) {
  conceito = "otimo"
}
else if (media >= 6.5) {
  conceito = "bom"
}else {
  conceito = "regular"
}
// console.log(media)
// console.log(conceito)


 switch (conceito) {
  case "otimo":
    console.log("parabéns aluno exemplar")
    break;

    case "bom":
      console.log("parabéns")
      break;

      case "regular":
        console.log("precisa se esforçar mais")
        break;

  default:
    console.log("ERRO")
    break;

 }
