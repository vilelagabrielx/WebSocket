import express from  'express';
import http from 'http';
import socketio from 'socket.io';
require('dotenv').config({ path: './config/.env' });
const db = require("./conn").default
const app = express();
const server = http.Server(app);
const io = socketio(server);

let porta_Backend = process.env.porta_Backend
try
    {
                app.use
            (
                express.static(__dirname + '/public')
            )

        io.on
            (
                    'connect',(socket) =>
                        {
                            io.to(socket.id).emit
                                (
                                    {
                                        status : true,
                                        message: 'Conexão estabelecida com o servidor'
                                    }

                                );
                                
                            
                            const addMensagem = async (user,mensagem) => 
                                {
                                    try
                                        {
                                            const Msg = require('./mensagem');
                                            await db.sync();
                                            var datahoje = new Date();
                                            var dia = String(datahoje.getDate()).padStart(2, '0');
                                            var mes = String(datahoje.getMonth() + 1).padStart(2, '0');
                                            var ano = datahoje.getFullYear();
                                            var horas = datahoje.getHours();
                                            var minutos = datahoje.getMinutes();
                                            var dataAtual = dia + '-' + mes + '-' + ano + ' ' + horas + ':' + minutos;
                                            await Msg.create
                                                (
                                                        {
                                                            user : user,
                                                            mensagem : mensagem,
                                                            data : dataAtual
                                                        
                                                        }
                                                )
                                        }
                                    catch(err)
                                        {
                                            console.log('Erro no tratamento das mensages. index.js ' + err)
                                        }
                                    
                                    
                                }
                            const getMensagem = async () => 
                                {
                                    try
                                        {
                                            const Msg = require('./mensagem');
                                            db.sync();
                                            let mensagens = await Msg.findAll
                                            (
                                                {
                                                    order :  [['id', 'ASC']]
                                                }
                                            )
                                            return mensagens
                                        }
                                    catch(err)
                                        {
                                            console.log('Erro ao buscar mensagens index.js ' + err)
                                        }
                                    
                                }
                            (
                                async() =>
                                    {
                                        let teste = await getMensagem()
                                        let resp = {"user":'',"mensagem":'' }
                                        teste.forEach
                                        (element => 
                                            {
                                                resp['user'] = element['dataValues']['user']
                                                resp['mensagem'] = element['dataValues']['mensagem']
                                                // console.log('oioi')
                                                // console.log(resp)
                                                socket.emit('teste',resp)
                                            }
                                        );
                                    }
                            )();
                            
                            socket.on
                                ('teste', async (res) =>
                                    {
                                        
                                        addMensagem(res.user,res.mensagem)
                    
                                        socket.broadcast.emit('teste',res);
                                            
                                    }
                                )
                    }
            )

        app.get
            ('/',(req,res) => 
                {
                    res.render('index.html');
                }
            )

        server.listen
            (
                porta_Backend,() => 
                    {
                        console.log('SERVIDOR INICIADO PORTA',porta_Backend);
                    }
            )
    }
catch(err)
    {
        console.log(err)
    }