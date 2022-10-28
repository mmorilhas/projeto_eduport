let campoBuscar = document.querySelector('#buscador');

campoBuscar.addEventListener("input", function(){

  if(this.value.length > 0 ){
    let input = this.value.toLowerCase();

    let inputPalavra = /(^\D)/g.test(input);

    let inputNumero = /(\d)/g.test(input);
  
    let usuariosFiltrados;

    if(inputPalavra){
      usuariosFiltrados = usuarios.filter((usuario) => 
      usuario.nome.toLowerCase().startsWith(input));
     
      criarTabela(usuariosFiltrados);
      
    }
    if(inputNumero){
      usuariosFiltrados = usuarios.filter((usuario) => 
      usuario.telefone.toString().includes(input));
        
      criarTabela(usuariosFiltrados);
        
    }

  }  
  else {
    criarTabela(usuarios);  
  }

})