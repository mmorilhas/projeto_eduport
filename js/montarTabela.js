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

  usuarios.forEach(usuario => {
    let trow = document.createElement('tr');
    trow.classList.add('usuario');
    
    Object.values(usuario).forEach(user => {
      let tdata = document.createElement('td');
      let textNode = document.createTextNode(user);
      console.log(user);
      tdata.appendChild(textNode);
      trow.appendChild(tdata);
    })
    
    tabela.appendChild(trow);
  })
}

