function aluno(nome, n1, n2) {
  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = function media() {
    return (this.nota1 + this.nota2) / 2;
  };
}

let a = new aluno("Peter", 7, 8);
let b = new aluno("Barther", 8, 9);

console.log(
  "Nome: " + a.nome,
  "Nota1: " + a.nota1,
  "Nota 2: " + a.nota2,
  "Média: " + a.media()
);
console.log(
  "Nome: " + b.nome,
  "Nota1: " + b.nota1,
  "Nota 2: " + b.nota2,
  "Média: " + b.media()
);
