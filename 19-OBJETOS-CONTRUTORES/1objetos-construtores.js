

function criarAluno(nome, n1, n2) {
  return {
      nome: nome,
      nota1: n1,
      nota2: n2,
      media: function(){
        return(this.nota1 + this.nota2) / 2
      }
  }
}

let turma = [criarAluno("Piter", 10, 7),
            criarAluno("tyler", 8, 7),
            criarAluno("Catarina", 8, 7)];




let aluno = turma[1];


turma.forEach(function(objeto){
  console.log(objeto)
})
