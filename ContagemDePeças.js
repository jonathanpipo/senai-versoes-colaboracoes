const listaDePecas = ['Peca de teste', 'AB', 'Peca B']
console.log('quantidade de caracteres')
if (listaDePecas.length <= 10) {
  console.log('As pecas podem ser cadastradas')
}

console.log('quantidade de caracteres')

for (let index = 0; index < listaDePecas.length; index++) {
  const pecaAtual = listaDePecas[index]
  if (pecaAtual.length < 3) {
    console.log(
      pecaAtual +
        ' a peca possui nome inferior a 3 caracteres e nao pode ser cadastrada'
    )
  } else {
    console.log(pecaAtual + ' a peca pode ser cadastrada')
  }
}

console.log('peso da peca')

const pesoEmGramas = 50

if (pesoEmGramas >= 100) {
  console.log('peso suficiente')
} else {
  console.log('valor insuficiente')
}
