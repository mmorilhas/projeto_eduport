let campoBuscar = document.querySelector('#buscador');

campoBuscar.addEventListener("input", function(){

  if(this.value.length > 0 ){
    let input = this.value.toLowerCase();

    let inputPalavra = /(^\D)/g.test(input);

    let inputNumero = /(\d)/g.test(input);
  
    let usuariosFiltrados;

    if(inputPalavra == true){
      usuariosFiltrados = usuarios.filter((usuario) => 
      usuario.nome.toLowerCase().startsWith(input));
     
      while(tabela.hasChildNodes()){
        tabela.removeChild(tabela.firstChild)
      }
      
      criarTabela(usuariosFiltrados);
      
    }
    if(inputNumero == true){
      usuariosFiltrados = usuarios.filter((usuario) => 
      usuario.telefone.toString().includes(input));
       
      while(tabela.hasChildNodes()){
        tabela.removeChild(tabela.firstChild)
      }
        
        
      criarTabela(usuariosFiltrados);
        
    }

  }  

  else {
    while(tabela.hasChildNodes()){
      tabela.removeChild(tabela.firstChild)
    }
    criarTabela(usuarios);  
  }

})