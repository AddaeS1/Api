let { alunos, identificadorAluno } = require('../dados/bancodedados');

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body; 

    if(!nome){
      return res.status(400).json({ mensagem: 'O nome é obrigatório !'})
    }

    if(!sobrenome){
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatório !'})
    }

    if(!idade){
        return res.status(400).json({ mensagem: 'A idade é obrigatório !'})
    }

    if(!curso){
        return res.status(400).json({ mensagem: 'O curso é obrigatório !'})
    }

        const aluno = {
            id: identificadorAluno++,
            nome,
            sobrenome,
            idade,
            curso,
        }
            alunos.push(aluno);

            return res.status(201).json(aluno);

    }

    module.exports = { 
        cadastrarAluno,
        
    }
    