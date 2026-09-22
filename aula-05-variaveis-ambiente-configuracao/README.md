## ⚙️ Funcionamento da Aplicação

Essa configuração permite acessar variáveis externas ao código-fonte.

### 2️⃣ Definição das configurações

A função `iniciarAplicacao()` obtém as variáveis necessárias para o funcionamento do serviço.

| Variável | Função |
|---|---|
| `PORT` | Define a porta de execução do servidor. |
| `API_KEY_PAGAMENTO` | Representa a chave da API de pagamento. |
| `DATABASE_URL` | Representa a URL do banco de dados. |

Caso a variável `PORT` não esteja definida, a aplicação utiliza a porta padrão `8080`.

### 3️⃣ Validação da chave de API

O programa verifica se a variável `API_KEY_PAGAMENTO` foi definida.

    if (!apiKey) {
        console.error(
            'ERRO CRÍTICO: A chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente!'
        );

        process.exit(1);
    }

Se a chave não estiver configurada, a aplicação exibe uma mensagem de erro e encerra o processo.

### 4️⃣ Exibição das configurações

Após validar a chave de API, a aplicação exibe no console:

- 🚀 Porta em que o servidor está configurado.
- 🗄️ URL do banco de dados.
- 🔑 Tamanho da chave de API.

> O código exibe apenas o tamanho da chave, e não seu valor completo.

## 🔒 Configuração do arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto:

    PORT=8080
    API_KEY_PAGAMENTO=minha-chave-de-pagamento
    DATABASE_URL=postgresql://localhost:5432/meubanco

> ⚠️ **Atenção:** os valores acima são exemplos. Em projetos reais, utilize chaves e credenciais verdadeiras, mantendo os dados sensíveis protegidos.

## ▶️ Como Executar

### 📋 Pré-requisitos

- Node.js instalado.
- Visual Studio Code (VS Code).

### 1. Inicializar o projeto

No terminal do VS Code:

    npm init -y

### 2. Instalar o Dotenv

    npm install dotenv

### 3. Configurar o ES Modules

No arquivo `package.json`, adicione:

    {
      "type": "module"
    }

### 4. Criar o arquivo `.env`

Adicione as variáveis de ambiente conforme o exemplo apresentado anteriormente.

### 5. Executar a aplicação

    node servidor.js

## 📊 Resultado Esperado

Com as variáveis configuradas corretamente, o terminal exibirá uma saída semelhante a:

    === SERVIÇO DE CONFIGURAÇÃO CARREGADO ===
    Servidor Rodando na Porta: 8080
    Conexão Banco de Dados: postgresql://localhost:5432/meubanco
    Status da API de Pagamento: Chave de Tamanho 24 Autenticada.