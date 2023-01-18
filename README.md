# Chat de texto utilizando WebSockets
Um chat simples que utiliza a tecnologia dos websockets com nodeJS e Socket.IO no BackEnd e um FrontEnd com Bootstrap.

# Descrição
O chat em questão foi feito com objetivo de aprimorar meus conhecimentos em websockets e tem como funcionadade principal o envio de mensagens em um único grupo.

# Instalação

- Passo 1: Certifique-se que o NodeJS e o npm estão instalados. A versão do NodeJS utilizada neste projeto foi a v19.2.0 e a do npm 8.19.3.

- Passo 2: Clone este repositório.

- Passo 3: Instale as dependencias através do terminal usando o comando a seguir, no mesmo diretório do arquivo "package.json":
```  
npm install
```  
- passo 4: Renomeie o arquivo ".env_exemplo",que se encontra na pasta "config", para ".env".

- passo 5: Coloque, no arquivo ".env" que está na pasta "config", as informações necessárias. A aplicação aceita qualquer banco relacional aceito pela biblioteca Sequelize.
- passe 6: No terminal, no mesmo diretório em que a aplicação foi instalada, execute o comando à seguir: 
```  
npm run dev
```  
Após a finalização da instalação e execução do aplicativo, o chat estará sendo executado no ip do servidor passado( Chamado "hostname_servidor" no arquivo ".env") e na porta passada( Chamado "porta_Backend" no arquivo .env). 
