import database from "../../../infra/database.js"

async function status(request,response){
    var result = await database.query("SELECT 1 + 1 as sum;")
    console.log(result.rows);
    response.status(200).json({chave:"Você conseguiu localizar a mensagem, parabéns!!!"});
}

export default status;