/*
DATA
*/
console.log('Informe a data do evento')

const dataAtual = new Date('2021-09-28');
const dataEvento = new Date('2021-09-29');

if (dataAtual > dataEvento) {
    console.log('Cadastro inválido por data incompatível.');
} else {
    console.log('Data compatível')
}

/*
IDADE
*/

console.log('Informe a idade do participante.')

const idadeParticipante = 18;

if (idadeParticipante < 18) {
    console.log('Cadastro inválido por idade incompatível.');
} else {
    console.log('Idade compatível')
}

/*
QTT PARTICIPANTES
*/

console.log('Verificar quantidade de participantes')
let listaDeEstudante = ['1','2','3']
let quantidadeDeEstudantes = listaDeEstudante.length;

if (quantidadeDeEstudantes < 100) {
    listaDeEstudante.push('4');
    console.log('Quantidade de participantes compatível')
} else {
    console.log('Quantidade de participantes excedida.')
}