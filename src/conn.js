// const mysql = require('mysql');
// const util = require('util')
require('dotenv').config({ path: './config/.env' });
const nome_database_principal = process.env.nome_database_principal;
const user_banco = process.env.user_banco;
const senha_banco = process.env.senha_banco;
const hostname_banco = process.env.hostname_banco;
const porta_banco = process.env.porta_banco;

console.log(nome_database_principal,user_banco,senha_banco,hostname_banco,porta_banco)
import Sequelize from 'sequelize';

function wrapper() 
    {
        
        try {
                const sequelize = new Sequelize
                    (nome_database_principal,user_banco,senha_banco,
                        {
                            host: hostname_banco,
                            dialect: 'mysql',
                            port:porta_banco
                        }
                    )
                return sequelize
            } catch (err) 
                    {
                        
                        console.error('Erro ao se conectar com o banco de dados : '+err);
                    }
    }
    
export default wrapper();




