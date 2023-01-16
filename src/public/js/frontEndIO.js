const config = 
        {
            'hostname_servidor':'localhost',
            'porta_Backend':'3000'
        };

const socket = io
    (
        `http://${config['hostname_servidor']}:${config['porta_Backend']}`,
        {
            transports: ['websocket']
        }
    );

socket.on
    (
        'teste',(res) =>
            {
                escMensagem(res.user,res.mensagem)
            }
    )

function enviar()
    {
        event.preventDefault();
        
        const user = document.querySelector('#usuario').value; 
        const mensagem = document.querySelector('#Mensagem').value;
        // console.log(document.body.scrollHeight)
        socket.emit
            (
                'teste',
                {
                    user,mensagem
                }
            )
        escMensagem('EU', mensagem)
    
    }
function escMensagem(usuario,mensagem)
    {
            var datahoje = new Date();
            let bg = usuario === 'EU' ? 'alert-success' : 'alert-light'
            let mensagemHtml = document.querySelector('#mensagens').innerHTML;
            mensagemHtml += `<div class="alert ${bg}">
                                <h4 class ="m-0">${usuario}</h4> - 
                                <p class ="m-0" >${mensagem}<p/>
                            </div>`;
            document.querySelector('#mensagens').innerHTML = mensagemHtml;
            // console.log('scrollTo ' + document.body.scrollHeight)
            document.querySelector('#mensagens').scrollTo(0,document.querySelector('#mensagens').scrollHeight);



    }
