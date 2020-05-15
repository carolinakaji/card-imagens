// Atribuindo o JSON para a array ficha:
const ficha = JSON.parse(dados);
// console.log(ficha);

window.addEventListener('load', () =>{
  for(let i = 0; i < ficha.length; i++) {
    container.innerHTML += 
    `<div class="card">
      <img>
      <div class="card-description">
        <ul>
          <li></li>
          <li></li>
        <ul>
      </div>
    </div>`
  }
});