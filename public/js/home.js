
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
    document.querySelector("#stop").style.zIndex = '90'
    array[id-1].innerHTML = `<div class="errado"></div>`
    
    //https://s3-us-west-2.amazonaws.com/s.cdpn.io/29431/explosion@3x.gif
  }
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