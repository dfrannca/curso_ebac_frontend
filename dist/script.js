"use strict";

//Array de objetos
var alunos = [{
  nome: 'Ana',
  nota: 10.0
}, {
  nome: 'João',
  nota: 8.3
}, {
  nome: 'Maria',
  nota: 5.5
}, {
  nome: 'Pedro',
  nota: 6.0
}, {
  nome: 'Julia',
  nota: 5.0
}, {
  nome: 'Carla',
  nota: 9.1
}];

//Função para filtrar notas acima ou igual a 6
function filtrarNota(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
//Alunos aprovados
var aprovados = filtrarNota(alunos);

//Resultado
console.log('\n//Alunos aprovados//');
aprovados.forEach(function (aluno) {
  console.log("".concat(aluno.nome, " --- nota: ").concat(aluno.nota));
});