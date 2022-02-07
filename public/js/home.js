
function revelar(id) {
  var selecao = area.getElementsByClassName('oculto')
  var array = Object.keys(selecao)
    .map(function(key) {
        return selecao[key];
    });
  
  console.log(id, array[id - 1]);
  if(this.certos.includes(id)) {
    array[id-1].innerHTML = `<div class="certo"></div>`
  } else {
    let stop = document.querySelector("#stop")
    stop.style.display = 'flex'
    stop.innerHTML = `<h1>Você perdeu</h1>
    <button class="reiniciar" style="height: 50px;" onclick="reiniciar()">Reiniciar</button>`
    gameOver()
  }
}

function gameOver() {
  var selecao = area.getElementsByClassName('oculto')
  var array = Object.keys(selecao)
    .map(function(key) {
        return selecao[key];
    });
    array.forEach((div, i) => div.innerHTML = `<div class="errado"></div>`)
  this.certos.forEach((id, i) => {
    revelar(id)
  })
}

function reiniciar(dificuldade) {
  if(dificuldade) {
  dificuldade !== 'facil' ? null : carregar('facil')
  dificuldade !== 'normal' ? null : carregar('normal')
  dificuldade !== 'dificil' ? null : carregar('dificil')
  return
  }
  carregar(this.tipo)
}
