let prato = "";
let bebida = "";
let sobremesa = "";
let valor = "";

function verificaSelecao() {
  if (prato !== "") {
    if (bebida !== "") {
      if (sobremesa !== "") {
        const botaoContinuar = document.querySelector(".botao-espera");
        botaoContinuar.classList.remove(".botao-espera");
        botaoContinuar.classList.add(".botao-final");
        botaoContinuar.innerHTML = `finalizar pedido`;
      }
    }
  }
}

function selecionarprato(botao) {
  prato = botao.innerHTML;
  const botaoSelecionadoAnteriormente = document.querySelector(
    ".menu-prato .selecionado"
  );
  console.log(botaoSelecionadoAnteriormente);
  if (botaoSelecionadoAnteriormente !== null) {
    botaoSelecionadoAnteriormente.classList.remove("selecionado");
    console.log(1);
    console.log(botaoSelecionadoAnteriormente);
  }
  console.log(2);
  console.log(botaoSelecionadoAnteriormente);
  botao.classList.add("selecionado");
  verificaSelecao();
}

function selecionarbebida(botao) {
  bebida = botao.innerHTML;
  const botaoSelecionadoAnteriormente = document.querySelector(
    ".menu-bebida .selecionado"
  );
  if (botaoSelecionadoAnteriormente !== null) {
    botaoSelecionadoAnteriormente.classList.remove("selecionado");
  }
  botao.classList.add("selecionado");
  verificaSelecao();
}

function selecionarsobremesa(botao) {
  sobremesa = botao.innerHTML;
  const botaoSelecionadoAnteriormente = document.querySelector(
    ".menu-sobremesa .selecionado"
  );
  if (botaoSelecionadoAnteriormente !== null) {
    botaoSelecionadoAnteriormente.classList.remove("selecionado");
  }
  botao.classList.add("selecionado");
  verificaSelecao();
}

