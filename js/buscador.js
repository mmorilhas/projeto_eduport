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
        usuario.classList.add("invisivel");
      }else{
        usuario.classList.remove("invisivel");
      }
    }

  }else{
    for (const element of usuarios){
      let usuario = element;
      usuario.classList.remove("invisivel");
  }
  }
})