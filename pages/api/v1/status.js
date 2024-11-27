function status(request,response){
    response.status(200).json({chave:"Você conseguiu localizar a mensagem, parabéns!!!"});
}

export default status;