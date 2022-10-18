var age = 50
var aprovado = true


if (age >= 18)
  console.log("pode beber");
else
console.log(" não pode beber");


// se tiver mais de uma linha de código a baixo do if
// é necessário usar a condicional dentro de uma estrutura de bloco

if (age >= 18 && aprovado === false) {
console.log("parabéns habilitado ");
console.log("Dirija com responsabilidade");
} else {
  console.log("tentar de novo");
}


// condicionais aninhadas

if (age >= 18 && age <=29) {
  console.log("idade é ", age);
  console.log("Curta o show");
} else if (age >= 16 && age <= 17) {
  console.log("idade é ", age);
  console.log(" Veja programação de adolescentes na seão by teens")
} else if (age >= 30) {
  console.log(" Veterno")
  console.log(" pegue seu copo e curta o show")
} else
      console.log("não cumpre os requisitos de de entrada ")
