// Atribuindo o JSON para a array ficha:
const ficha = JSON.parse(dados);
// console.log(ficha);

window.addEventListener('load', () =>{
  for(let i = 0; i < ficha.length; i++) {
    container.innerHTML += 
    `<div class="card">
      <img src="${ficha[i].download_url}">
      <div class="card-description">
        <ul>
          <li><b>ID:</b> ${ficha[i].id}</li>
          <li><b>Nome:</b> ${ficha[i].author}</li>
          <li><b>URL:</b> ${ficha[i].url}</li>
        <ul>
      </div>
    </div>`
  }
});