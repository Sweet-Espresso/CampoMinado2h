let area = document.querySelector("#area")
let dificuldade = document.querySelector("#dificuldade")
let quantiaGreen = document.querySelector("#quantia-green")
function carregar(tipo) {
  if(tipo === "facil") {
    dificuldade.innerHTML = "Fácil"
    quantiaGreen.innerHTML = "4 Quadrados verdes"
    this.quant = 4
    this.ocultos = 9
    this.tipo = tipo
    area.innerHTML = `
    <div id="stop">
    <div id="facil"> 
      <div class="oculto" onclick="revelar(1)"></div>
      <div class="oculto" onclick="revelar(2)"></div>
      <div class="oculto" onclick="revelar(3)"></div>
      <div class="oculto" onclick="revelar(4)"></div>
      <div class="oculto" onclick="revelar(5)"></div>
      <div class="oculto" onclick="revelar(6)"></div>
      <div class="oculto" onclick="revelar(7)"></div>
      <div class="oculto" onclick="revelar(8)"></div>
      <div class="oculto" onclick="revelar(9)"></div>
    </div>
    </div>`
  }
  if(tipo === 'normal') {
    dificuldade.innerHTML = "Normal"
    quantiaGreen.innerHTML = "8 Quadrados verdes"
    this.quant = 8
    this.ocultos = 16
    this.tipo = tipo
    area.innerHTML = `
    <div id="stop">
    <div id="normal"> 
      <div class="oculto" onclick="revelar(1)"></div>
      <div class="oculto" onclick="revelar(2)"></div>
      <div class="oculto" onclick="revelar(3)"></div>
      <div class="oculto" onclick="revelar(4)"></div>
      <div class="oculto" onclick="revelar(5)"></div>
      <div class="oculto" onclick="revelar(6)"></div>
      <div class="oculto" onclick="revelar(7)"></div>
      <div class="oculto" onclick="revelar(8)"></div>
      <div class="oculto" onclick="revelar(9)"></div>
      <div class="oculto" onclick="revelar(10)"></div>
      <div class="oculto" onclick="revelar(11)"></div>
      <div class="oculto" onclick="revelar(12)"></div>
      <div class="oculto" onclick="revelar(13)"></div>
      <div class="oculto" onclick="revelar(14)"></div>
      <div class="oculto" onclick="revelar(15)"></div>
      <div class="oculto" onclick="revelar(16)"></div>
    </div>
    </div>`
  }
  if(tipo === 'dificil') {
    dificuldade.innerHTML = "Difícil"
    quantiaGreen.innerHTML = "12 Quadrados verdes"
    this.quant = 12
    this.ocultos = 25
    this.tipo = tipo
    area.innerHTML = `
    <div id="stop">
    <div id="dificil"> 
      <div class="oculto" onclick="revelar(1)"></div>
      <div class="oculto" onclick="revelar(2)"></div>
      <div class="oculto" onclick="revelar(3)"></div>
      <div class="oculto" onclick="revelar(4)"></div>
      <div class="oculto" onclick="revelar(5)"></div>
      <div class="oculto" onclick="revelar(6)"></div>
      <div class="oculto" onclick="revelar(7)"></div>
      <div class="oculto" onclick="revelar(8)"></div>
      <div class="oculto" onclick="revelar(9)"></div>
      <div class="oculto" onclick="revelar(10)"></div>
      <div class="oculto" onclick="revelar(11)"></div>
      <div class="oculto" onclick="revelar(12)"></div>
      <div class="oculto" onclick="revelar(13)"></div>
      <div class="oculto" onclick="revelar(14)"></div>
      <div class="oculto" onclick="revelar(15)"></div>
      <div class="oculto" onclick="revelar(16)"></div>
      <div class="oculto" onclick="revelar(17)"></div>
      <div class="oculto" onclick="revelar(18)"></div>
      <div class="oculto" onclick="revelar(19)"></div>
      <div class="oculto" onclick="revelar(20)"></div>
      <div class="oculto" onclick="revelar(21)"></div>
      <div class="oculto" onclick="revelar(22)"></div>
      <div class="oculto" onclick="revelar(23)"></div>
      <div class="oculto" onclick="revelar(24)"></div>
      <div class="oculto" onclick="revelar(25)"></div>
    </div>
    </div>`
  }
  sorteio()
}
function sorteio() {
  var array = []
  var i = 0
  while(array.length !== Number(this.quant)) {
    var aleatorio = Math.floor(Math.random() * (this.ocultos - 1 + 1) + 1)

    while(array.includes(Number(aleatorio))) {
      aleatorio = Math.floor(Math.random() * (this.ocultos - 1 + 1) + 1)
    }

    array.splice(array.length, 0, aleatorio);
  }
  this.certos = array
}
carregar('normal')