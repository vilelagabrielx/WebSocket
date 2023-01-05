// const mysql = require('mysql');
// const util = require('util')
import config from './conn.json';
import Sequelize from 'Sequelize';

const sequelize = new Sequelize(config['nome_database_principal'],config['user_banco'],config['senha_banco'],{
    host: config['hostname_banco'],
    dialect: 'mysql',
    port:config['porta_banco']
})


export default sequelize;