let usuarios = [
  {nome: "Marcos", telefone: 11987652345},
  {nome: "Camila", telefone: 11987652345},
  {nome: "Rodrigo", telefone: 11987652345},
  {nome: "Helena", telefone: 11987652345},
  {nome: "Mariana", telefone: 11987652345},
  {nome: "Carolina", telefone: 11987652345}
]


let tabela = document.querySelector("#tabela-usuarios");

window.onload = function() {

  usuarios.forEach((usuario) => {
    let trow = document.createElement('tr');
    trow.classList.add('usuario');

    let tdNome = document.createElement('td');
    tdNome.classList.add('info-nome');

    let tdTelefone = document.createElement('td');
    tdTelefone.classList.add('info-telefone');

    tdNome.textContent = usuario.nome;
    tdTelefone.textContent = usuario.telefone;

    trow.appendChild(tdNome);
    trow.appendChild(tdTelefone);

    tabela.appendChild(trow);
  })
}  
