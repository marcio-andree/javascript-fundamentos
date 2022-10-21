function carroNovo(nome, modelo, ano, placa){
  this.nome = nome;
  this.modelo = modelo;
  this.ano = ano;
  this.placa = placa;
}


let car1 = new carroNovo("Corsa", "Sedam", 2000, "MQX4050");
let car2 = new carroNovo("Gol", "Hatch", 2002, "MMS4120");
let car3 = new carroNovo("fox", "Hatch", 2003, "MMS6620");
let listaCar = [car1, car2, car3]

console.log(listaCar)
