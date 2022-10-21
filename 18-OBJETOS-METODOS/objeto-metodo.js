// quanto se tem uma função dentro de um objeto é chamado de método

let calcMedia = function (n1, n2) {

  return (this.nota[0] * 2 + this.nota[1]) / 2;
};

let aluno1 = { nome: "Jonas", nota: [10, 5], media: calcMedia };

let aluno2 = { nome: "Marta", nota: [10, 4], media: calcMedia };






console.log(aluno1.nome);
console.log(aluno1.media());

console.log(aluno2.nome);
console.log(aluno2.media());
