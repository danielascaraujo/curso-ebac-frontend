// Criando o array de objetos
const alunos = [
    {nome: 'Manuela', nota: 8},
    {nome: 'Carolina', nota: 5},
    {nome: 'Antonio', nota: 7},
    {nome: 'Davi', nota: 5.5 },
    {nome: 'Poliana', nota: 10 },
    {nome: 'Marcos', nota: 9.5},
];

// Filtrando os alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Obtendo os alunos aprovados
const aprovados = alunosAprovados(alunos);

console.log(aprovados);