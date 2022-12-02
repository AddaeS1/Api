let { convidados } = require('../dados/bancodedados');

const listarConvidados = (req, res) => {
    return res.status(200).json(convidados);
}

const obterConvidado = (req, res) => {
    

    const convidado = convidados.find((convidado) => {
        return convidado ;
    });

    if (!convidado){
        return res.status(404).json({ mensagem: 'Convidado não está na lista.'});
    }

    return res.status(200).json({ mensagem: 'Convidado está na lista.'});
}

const cadastrarConvidado = (req, res) => {
    let { convidado } = nomeConvidado; 

    if(!convidado){
      return res.status(400).json({ mensagem: 'Favor preencher um nome !'})
    }

    let nomeConvidado = '';    

    convidados.push(nomeConvidado);

    return res.status(201).json(nomeConvidado);

}

const excluirConvidado = (req, res) => {

    const convidado = convidados.find((convidado) => {
        return convidado ;
    });

    if(!convidado) {
        return res.send(404).json({message: 'O convidado não está na lista !'});
    }

    convidados = convidados.filter((convidado) => {
        return convidados != convidado;
    });

    return res.status(204).send();
}

module.exports = {
    listarConvidados,
    obterConvidado,
    cadastrarConvidado,
    excluirConvidado
}