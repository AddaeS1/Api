let { biblioteca } = require('../dados/bancodedados');

const listarLivros = (req, res) => {
    return res.status(200).json(biblioteca);
}

const obterLivro = (req, res) => {
    const { id } = req.params;

    const livro = biblioteca.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro){
        return res.status(404).json({ mensagem: 'Livro não encontrado'});
    }

    return res.status(200).json(livro);
}

const cadastrarLivro = (req, res) => {
    let { titulo, autor, ano, numPaginas } = req.body; 

    if(!titulo){
      return res.status(400).json({ mensagem: 'Título é obrigatório !'})
    }

    
    if(!autor){
        return res.status(400).json({ mensagem: 'O nome do autor é obrigatório !'})
    }

    
     if(!ano){
        return res.status(400).json({ mensagem: 'O ano de publicação é obrigatório !'})
    }
     
    if(!numPaginas){
        return res.status(400).json({ mensagem: 'O número de páginas é obrigatório é obrigatório !'})
    } 

    const livro = {
        id: identificadorLivro++,
        titulo,
        autor,
        ano,
        numPaginas

    }
      

    biblioteca.push(livro);

    return res.status(201).json(livro);

}

const atualizarLivro = (req, res) => {
    const { id } = req.params;
    let { titulo, autor, ano, numPaginas } = req.body;

    if(!titulo){
        return res.status(400).json({ mensagem: 'Título é obrigatório !'})
      }
  
      
      if(!autor){
          return res.status(400).json({ mensagem: 'O nome do autor é obrigatório !'})
      }
  
      
       if(!ano){
          return res.status(400).json({ mensagem: 'O ano de publicação é obrigatório !'})
      }
       
      if(!numPaginas){
          return res.status(400).json({ mensagem: 'O número de páginas é obrigatório é obrigatório !'})
      } 
  
    const livro = biblioteca.find((livro) => {
        return livro.id === Number(id);
    });

    if(!livro) {
        return res.send(404).json({message: 'O livro não existe na biblioteca!'});
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    return res.status(204).send();

}


const excluirLivro = (req, res) => {

    const { id } = req.params;

    const livro = biblioteca.find((livro) => {
        return livro.id === Number(id);
    });

    if(!livro) {
        return res.send(404).json({message: 'O livro não existe na biblioteca!'});
    }

    biblioteca = biblioteca.filter((livro) => {
        return livro.id != Number(id);
    });

    return res.status(204).send();
}

module.exports = {
    listarLivros,
    obterLivro,
    cadastrarLivro,
    atualizarLivro,
    excluirLivro
}