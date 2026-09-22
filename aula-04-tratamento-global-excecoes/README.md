# Tratamento de Erros com Express.js

## 📌 Sobre o Projeto

Este projeto demonstra a implementação de um servidor web utilizando **Node.js** e **Express.js**, com foco no tratamento de erros síncronos, assíncronos e erros de processo.

A aplicação possui rotas para testar operações bem-sucedidas e situações de falha, além de um middleware responsável por capturar e registrar os erros internos do servidor.

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript
- HTTP
- Middleware de tratamento de erros

## 📂 Estrutura do Projeto

projeto/
├── servidor.js
├── package.json
└── README.md

## ⚙️ Funcionamento

### 1. Configuração do servidor

O projeto utiliza o framework Express.js para criar um servidor HTTP que escuta na porta 3000.

O middleware `express.json()` permite que a aplicação processe requisições com dados no formato JSON.

### 2. Tratamento de erros de processo

O código utiliza os eventos `uncaughtException` e `unhandledRejection` para registrar erros não tratados no processo Node.js.

- **uncaughtException:** captura exceções que não foram tratadas.
- **unhandledRejection:** registra rejeições de Promises que não foram tratadas.

### 3. Rota de sucesso

A rota `/sucesso` retorna uma resposta JSON informando que a operação foi realizada com sucesso.

**Endpoint:**

GET http://localhost:3000/sucesso

**Resposta esperada:**

{
  "success": true,
  "message": "Operação Realizada com Sucesso!"
}

### 4. Tratamento de erro síncrono

A rota `/erro-sincrono` simula uma falha durante a execução de uma regra de negócio.

O erro é capturado por um bloco `try...catch` e encaminhado ao middleware de tratamento de erros utilizando `next(erro)`.

**Endpoint:**

GET http://localhost:3000/erro-sincrono

### 5. Tratamento de erro assíncrono

A rota `/erro-assincrono` simula uma falha em uma operação assíncrona, como uma consulta a um banco de dados externo.

O erro ocorre por meio de uma Promise rejeitada e é encaminhado ao middleware através do `catch`.

**Endpoint:**

GET http://localhost:3000/erro-assincrono

### 6. Middleware global de tratamento de erros

O middleware de erro é responsável por capturar os erros encaminhados pelas rotas e registrar suas informações no console.

Ele também retorna uma resposta JSON ao cliente, contendo:

- **success:** indica que a operação falhou.
- **message:** apresenta a mensagem do erro.
- **status:** define o código HTTP da resposta, utilizando 500 como padrão.

## ▶️ Como Executar

### Pré-requisitos

- Node.js instalado na máquina.
- Visual Studio Code (VS Code).

### Passo 1: Instalar as dependências

No terminal do VS Code, execute:

npm init -y
npm install express

### Passo 2: Configurar o ES Modules

No arquivo `package.json`, adicione:

{
  "type": "module"
}

### Passo 3: Iniciar o servidor

Execute o arquivo JavaScript:

node servidor.js

O servidor será iniciado na porta 3000.

## 🧪 Testando as Rotas

Você pode testar as rotas utilizando o navegador, Postman ou Insomnia.

| Rota | Descrição |
|---|---|
| `/sucesso` | Retorna uma operação bem-sucedida. |
| `/erro-sincrono` | Simula um erro síncrono. |
| `/erro-assincrono` | Simula um erro assíncrono. |

## 📊 Resultado Esperado

Ao iniciar o servidor, será exibida uma mensagem semelhante a:

Servidor Imortal rodando na porta 3000
teste 1: localhost:3000/sucesso
teste 2: localhost:3000/erro-sincrono
teste 3: localhost:3000/erro-assincrono

Ao acessar as rotas de erro, o servidor registrará as informações no console e retornará uma resposta JSON informando a falha.

## 🎯 Conclusão

O projeto demonstra a importância do tratamento de erros em aplicações web desenvolvidas com Node.js e Express.js.

A utilização de middlewares, blocos `try...catch` e mecanismos de monitoramento de erros permite criar aplicações mais organizadas, confiáveis e fáceis de diagnosticar.

## 👨‍💻 Autor

Projeto desenvolvido para fins educacionais, com foco no aprendizado de tratamento de erros em servidores Express.js.