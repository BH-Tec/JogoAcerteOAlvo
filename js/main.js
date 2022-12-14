var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')

var widthTela = 1200
var heightTela = 500

pincel.fillStyle = 'lightgrey'
pincel.fillRect(0,0, widthTela, heightTela)

var raio = 10
var xAleatorio
var yAleatorio

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor
    pincel.beginPath()
    pincel.arc(x, y, raio, 0, 2 * Math.PI)
    pincel.fill()
}

function limpaTela() {
    pincel.clearRect(0, 0, widthTela, heightTela)
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, 'red')
    desenhaCirculo(x, y, raio + 10, 'white')
    desenhaCirculo(x, y, raio, 'red')
}

function sorteiaPosicao(maximo){
    return Math.floor(Math.random() * maximo)
}

function atualizaTela() {
    limpaTela()
    xAleatorio = sorteiaPosicao(widthTela)
    yAleatorio = sorteiaPosicao(heightTela)
    desenhaAlvo(xAleatorio, yAleatorio)
}

setInterval(atualizaTela, 1000)

function dipara(evento) {
    var x = evento.pageX - tela.offsetLeft
    var y = evento.pageY - tela.offsetTop

    if ( (x > xAleatorio - raio) && 
         (x < xAleatorio + raio) && 
         (y > yAleatorio - raio) &&
         (y < yAleatorio + raio)) {
            alert('acertou o alvo')
    }
}

tela.onclick = dipara