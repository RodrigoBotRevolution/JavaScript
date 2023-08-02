function carregar() {}
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!`
if (hora >= 0 && hora <= 4) {
  img.src = '../html/imagens/madrugada.png'
  document.body.style.backgroundColor = '#2E474A'
} else if (hora > 4 && hora <= 12) {
  img.src = '../html/imagens/manha.png'
  document.body.style.backgroundColor = '#D6954F'
} else if (hora > 12 && hora < 17) {
  img.src = '../html/imagens/tarde.png'
  document.body.style.backgroundColor = '#C1E2C7'
} else if (hora >= 17 && hora < 19) {
  img.src = '../html/imagens/entardecer.png'
  document.body.style.backgroundColor = '#E8A83F'
} else {
  img.src = '../html/imagens/noite.png'
  document.body.style.backgroundColor = '#6C553E'
}
