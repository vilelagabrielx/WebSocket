const Sequelize = require('sequelize');
const database = require('./conn').default;
const Mensagem = database.define
    ('t_mensagen',
        {
            id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            user: {
                type: Sequelize.STRING,
                allowNull: false,
                },
            mensagem: {
                type: Sequelize.TEXT,
                allowNull: false
                    },
            data: {
                type: Sequelize.STRING,
                allowNull: true
                }

        },
        {
            charset: 'utf8mb4',
            timestamps: false
        }
    )



module.exports = Mensagem