# Aula: Route Handlers — Métodos GET, POST, PATCH e DELETE

## Objetivo

Aprender a criar e utilizar **Route Handlers** no Next.js (App Router), trabalhando com os principais métodos HTTP: **GET**, **POST**, **PATCH** e **DELETE**, utilizando o **Insomnia** para realizar e testar requisições.

---

## O que são Route Handlers?

Os **Route Handlers** permitem criar endpoints de API personalizados dentro do Next.js utilizando as APIs nativas de **Request** e **Response**. Eles são definidos em arquivos `route.js` ou `route.ts` dentro do diretório `app`.

Eles podem ser utilizados para:

- **Buscar informações**;
- **Enviar dados** e criar novos recursos;
- **Atualizar dados** existentes;
- **Remover recursos**;
- **Processar requisições**;
- **Integrar com APIs externas**.

---

## Insomnia

O **Insomnia** é uma ferramenta utilizada para testar e enviar requisições HTTP para APIs.

Durante a aula, ele será utilizado para testar os métodos **GET, POST, PATCH e DELETE**, permitindo visualizar as requisições e as respostas da API.

### Minha preferência pelo Insomnia

Eu prefiro utilizar o **Insomnia** para testar APIs porque considero a ferramenta mais prática e organizada para realizar requisições HTTP. Ele facilita o envio de dados, a visualização das respostas e os testes dos diferentes métodos.

---

# Métodos HTTP no Insomnia

## 1. Método GET

O método **GET** é utilizado para **buscar ou consultar dados** do servidor. Ele não deve alterar os dados existentes.

### Exemplo no Route Handler

```typescript
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mensagem: "Lista de usuários",
    usuarios: [
      { id: 1, nome: "João" },
      { id: 2, nome: "Maria" }
    ]
  });
}

## 2. Métodos POST

O método **POST** é utilizado para **enviar dados ao servidor e criar um novo recurso**.

No **Insomnia**, selecionamos o método **POST**, informamos a URL da API e, em **Body → JSON**, adicionamos os dados que serão enviados.

### Exemplo

```json
{
  "nome": "João",
  "email": "joao@email.com"
}

## 3. Métodos PATCH

O método **PATCH** é utilizado para **atualizar parcialmente um recurso existente**. Ele permite modificar apenas as informações necessárias, sem precisar alterar todos os dados.

No **Insomnia**, selecionamos o método **PATCH**, informamos a URL da API e, em **Body → JSON**, adicionamos os dados que queremos atualizar.

### Exemplo

```json
{
  "id": 1,
  "nome": "João Silva"
}
## 4. Método DELETE

O método **DELETE** é utilizado para **remover um recurso existente** do servidor.

### Exemplo no Route Handler

```typescript
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return NextResponse.json({
    mensagem: `Usuário com ID ${id} removido com sucesso!`
  });
}
