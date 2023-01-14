const mysql = require('mysql');
const util = require('util')
const conectionString = 'mysql://gabrielvilela:93216430meu@129.148.45.165:3306/bd_websocket'
const db = {};
db.addMensagem = async(user,mensagem,dataAtual) => {
    const conn = mysql.createConnection(conectionString);
    const query = util.promisify(conn.query).bind(conn);
    let novaMensagem = {'user': user,'mensagem' : mensagem,'data': dataAtual}
    try{
       conn.query('insert into t_mensagens SET ?',novaMensagem,(err,res) =>{
        if(err) throw err
        console.log(`New book added with ID: ${res.insertId}`)
       })
    }
    catch(e){
        console.log('deu ruim'+e)
    }
    finally {
        conn.end;
    }
};

  db.getMensagem = () => {
    var datahoje = new Date();
    var dia = String(datahoje.getDate()).padStart(2, '0');
    var mes = String(datahoje.getMonth() + 1).padStart(2, '0');
    var ano = datahoje.getFullYear();
    var horas = datahoje.getHours();
    var minutos = datahoje.getMinutes();
    var dataAtual = dia + '-' + mes + '-' + ano + ' ' + horas + ':' + minutos;
    let search_list = [];
    const conn = mysql.createConnection(conectionString);
    try{
         conn.query(`select user,mensagem from t_mensagens where DATEDIFF(STR_TO_DATE( "${dataAtual}", "%d-%m-%Y %H:%i" ),STR_TO_DATE( data, "%d-%m-%Y %H:%i" )) <=1`,async(err,rows) =>{
        if(err) {throw err}
        // console.log(rows)
        rows.forEach(function(value){
           search_list.push({"user" : value.user,"mensagem":value.mensagem})
          });
        //   console.log(search_list)
        return  search_list
       })
    }
    catch(e){
        console.log('deu ruim'+e)
        return search_list
    }
    finally {
        conn.end;
    }
};





module.exports = db