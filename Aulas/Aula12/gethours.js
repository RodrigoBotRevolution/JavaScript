var agora = new Date()
var hora = agora.getHours()
console.log(`A Hora atual é ${hora} hs`)
if (hora >= 4 && hora < 12) {
  console.log('Bom Dia!')
} else if (hora > 0 && hora < 4) {
  console.log('Boa Madrugada')
} else if (hora <= 18) {
  console.log('Boa Tarde')
} else if (hora <= 24) {
  console.log('Boa Noite!')
} else {
  console.log('Hora Inválida!')
}
