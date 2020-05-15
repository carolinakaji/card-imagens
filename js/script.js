// Atribuindo o JSON para a array ficha:
const FICHA = JSON.parse(dados);
// console.log(ficha);

// Criando cores aleatórias:
const ARRAY_HEXADECIMAL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
function randomColor() {
  let color = '';
  for (let i = 0; i < 6; i++) {
    let numero = Math.round((Math.random() * 16));
    color += ARRAY_HEXADECIMAL[numero];
  }
  return `#${color}`;
}

window.addEventListener('load', () => {
  for (let i = 0; i < FICHA.length; i++) {
    container.innerHTML +=
      `<div class="card">
    <img src="${FICHA[i].download_url}">
    <div class="card-description">
    <ul>
    <li><b>ID:</b> ${FICHA[i].id}</li>
    <li><b>Nome:</b> ${FICHA[i].author}</li>
    <li><b>URL:</b> ${FICHA[i].url}</li>
    <ul>
    </div>
    </div>`
  }

  // Lembrar que getElementsByClassName, gera uma array. Para acessar cada card e alterar o css, deve-se rodar um loop acessando cada card:
  let card = document.getElementsByClassName('card');
  for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = randomColor();
  }
});