var ano = 68
console.log(`Sua idade é ${ano} anos!`)
if (ano < 16) {
  console.log('Não Vota!')
} else if (ano < 18 || ano > 65) {
  console.log('Voto Opcional!')
} else {
  console.log('Voto Obrigatório!')
}
