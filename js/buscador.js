let campoBuscar = document.querySelector('#buscador');

campoBuscar.addEventListener("input", function(){

  if(this.value.length > 0 ){
    let filtro = new RegExp(`^${this.value}`, "i");


    let usuariosFiltrados = usuarios.filter((usuario) => 
      usuario.nome == filtro
    )
    
  
    console.log(usuariosFiltrados);
  }  

  console.log(this.value)

})

  // let usuariosFiltrados = usuarios.filter((usuario) => {
    //   if(usuario.nome.includes(filtro) || usuario.telefone.includes(filtro)){
    //     return usuario;
    //   }
    // })

/*
let campoBuscar = document.querySelector('#buscador');

campoBuscar.addEventListener("input", function(){

  let usuarios = document.querySelectorAll(".usuario");

  if(this.value.length > 0 ){
    for(const element of usuarios){
      let usuario = element;
      let tdNome = usuario.querySelector(".info-nome");
      let nome = tdNome.textContent;
    

      let exp = new RegExp(`^${this.value}`, "i")
      if(!exp.test(nome)){
        usuario.classList.add("d-none");
      }else{
        usuario.classList.remove("d-none");
      }
    }

  }else{
    for (const element of usuarios){
      let usuario = element;
      usuario.classList.remove("d-none");
  }
  }
})
*/