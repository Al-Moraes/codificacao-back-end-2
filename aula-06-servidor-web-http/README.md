# 🛡️ Sentinela HTTP com Node.js

## 📌 Sobre o Projeto

O **Sentinela HTTP** é um servidor web simples desenvolvido com Node.js utilizando o módulo nativo `http`.

A aplicação recebe requisições HTTP, registra os métodos e as URLs acessadas e disponibiliza uma rota para verificar o status do servidor.

Além disso, o servidor utiliza cabeçalhos de segurança para ajudar a proteger as respostas HTTP.

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Módulo nativo `http`**
- **JavaScript**
- **HTTP**
- **JSON**

## ⚙️ Funcionamento da Aplicação

O servidor é criado utilizando o método `http.createServer()`, que recebe uma função executada sempre que uma requisição é recebida.

### 📝 Registro das requisições

A aplicação exibe no terminal o método HTTP e a URL acessada:

    console.log(`[LOG] Método Recebido: ${req.method} | ${req.url}`);

Exemplo de saída:

    [LOG] Método Recebido: GET | /status

### 🔐 Cabeçalhos de segurança

O código define cabeçalhos padrão de segurança:

    const cabecalhoPadrao = {
        'X-Content-Type-Options': 'nosniff',
        'X-frame-Options': 'DENY',
    };

| Cabeçalho | Função |
|---|---|
| `X-Content-Type-Options: nosniff` | Impede que o navegador tente interpretar o conteúdo com um tipo diferente do informado. |
| `X-frame-Options: DENY` | Impede que a página seja carregada dentro de um `frame` ou `iframe`. |

## 🌐 Rotas Disponíveis

### `GET /status`

Essa rota verifica se o servidor está online.

**Resposta HTTP:**

- Status: `200 OK`
- Tipo de conteúdo: `application/json`

**Resposta JSON:**

    {
        "servidor": "Online"
    }

### Outras rotas

Qualquer URL diferente de `/status` retorna uma resposta de erro.

**Resposta HTTP:**

- Status: `404 Not Found`
- Tipo de conteúdo: `application/json`

**Resposta JSON:**

    {
        "erro": "Página Não Encontrada!"
    }

## 📂 Estrutura do Projeto

    projeto/
    ├── servidor.js
    ├── package.json
    └── README.md

## ▶️ Como Executar

### 📋 Pré-requisitos

- Node.js instalado.
- Visual Studio Code ou outro editor de código.
- Terminal disponível.

### 1. Criar o projeto

No terminal, execute:

    npm init -y

### 2. Criar o arquivo do servidor

Crie um arquivo chamado `servidor.js` e adicione o código da aplicação.

### 3. Executar o servidor

    node servidor.js

Após iniciar, o terminal exibirá:

    Sentinela Ativo na Porta 3000

## 🧪 Como Testar

Com o servidor em execução, acesse a seguinte URL no navegador ou em uma ferramenta como Postman:

    http://localhost:3000/status

A resposta esperada será:

    {
        "servidor": "Online"
    }

Também é possível testar uma rota inexistente:

    http://localhost:3000/teste

Nesse caso, a resposta será:

    {
        "erro": "Página Não Encontrada!"
    }

## 📊 Resumo dos Status HTTP

| Rota | Status | Resposta |
|---|---|---|
| `/status` | `200 OK` | Servidor online |
| Qualquer outra rota | `404 Not Found` | Página não encontrada |

## 🎯 Objetivos de Aprendizagem

- Criar um servidor HTTP utilizando Node.js.
- Entender o funcionamento do módulo nativo `http`.
- Trabalhar com requisições e respostas HTTP.
- Utilizar códigos de status HTTP.
- Retornar dados no formato JSON.
- Registrar requisições no terminal.
- Aplicar cabeçalhos básicos de segurança.

## 🏁 Conclusão

O projeto **Sentinela HTTP** demonstra como criar um servidor web básico com Node.js sem a necessidade de frameworks externos.

A aplicação possui uma rota de monitoramento, tratamento de rotas inexistentes, registro de requisições e cabeçalhos de segurança, servindo como base para projetos web mais completos.

## 👨‍💻 Autor

Desenvolvido para fins de estudo e prática com Node.js, servidores HTTP e conceitos básicos de segurança web.