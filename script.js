let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function addNum() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));

    let item = document.createElement("option");

    item.text = `Valor ${num.value} adicionado`;

    item.value = `//item${num.value}`;
    lista.appendChild(item);

    res.innerHTML = ``;
  } else {
    alert("Valor inválido ou já encontrado na lista!");
  }
  num.value = "";
  num.focus();
}
function finalizaContagem() {
    if (valores.length === 0) {
        alert("Adicione algum valor antes de finalizar a contagem!");
        return;
    }

    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let i = 0; i < tot; i++) {
        soma += valores[i];
        if (valores[i] > maior) {
            maior = valores[i];
        }
        if (valores[i] < menor) {
            menor = valores[i];
        }
    }

    media = soma / tot;

    let resultadoHTML = "";
    resultadoHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`;
    resultadoHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    resultadoHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    resultadoHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    resultadoHTML += `<p>A média dos valores é ${media}</p>`;

    // Atualiza o conteúdo da div #res com os resultados
    res.innerHTML = resultadoHTML;
}
function limparLista() {
    // Limpa a lista de números
    valores = [];

    // Limpa a lista exibida na página
    lista.innerHTML = '';

    // Limpa a div de resultados
    res.innerHTML = '';

    // Exibe uma mensagem informando que a lista foi limpa
    alert("Lista limpa com sucesso!");
}
