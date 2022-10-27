let usuarios = [
  {nome: "Marcos", telefone: 11479506601},
  {nome: "Camila", telefone: 11987632354},
  {nome: "Rodrigo", telefone: 12987652345},
  {nome: "Helena", telefone: 21362698797},
  {nome: "Mariana", telefone: 65803826984},
  {nome: "Carolina", telefone: 12239850113}
]


let tabela = document.querySelector("#tabela-usuarios");

window.onload = criarTabela(usuarios);

function criarTabela(user) {
  user.forEach((usuario) => {
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