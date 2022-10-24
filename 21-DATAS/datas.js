// Quando passamos o mês em formato de número esse númeri vai
// corresponder ao index de um arry de MessageEvent, de 12 posições , onde
//  0 = janeiro e 11 = dezembro

let data = new Date();
console.log(data)

// criando data a partir de string é precisa respeitar o formato dos EUA

let data2 = new Date("05-10-1988")
console.log(data2.getTime())




