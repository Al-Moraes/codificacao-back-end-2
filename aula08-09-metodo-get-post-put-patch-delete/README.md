# Aula: Route Handlers — Métodos GET, POST, PATCH e DELETE

## Objetivo

Aprender a criar e utilizar **Route Handlers** no Next.js (App Router), trabalhando com os principais métodos HTTP: **GET**, **POST**, **PATCH** e **DELETE**.

---

## O que são Route Handlers?

Os **Route Handlers** permitem criar endpoints de API personalizados dentro do Next.js utilizando as Web Request e Response APIs nativas. Eles são definidos dentro de arquivos `route.js` ou `route.ts` no diretório `app`.

Eles podem ser utilizados para:
- **Buscar informações** (consultas e listagens);
- **Enviar dados** e criar novos recursos;
- **Atualizar dados** existentes (total ou parcialmente);
- **Remover recursos** do banco de dados ou serviço;
- **Processar requisições** e integrar com APIs externas.

---

## Estrutura dos Métodos HTTP

### 1. Método GET
O método **GET** é utilizado para buscar ou consultar dados do servidor. Ele não deve alterar o estado do sistema.

```typescript
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mensagem: "Lista de usuários recuperada com sucesso!",
    usuarios: [
      { id: 1, nome: "João" },
      { id: 2, nome: "Maria" }
    ]
  });
}
## Método GET

O método **GET** é utilizado para buscar ou consultar dados.

### Exemplo

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
```

---

## Método POST

O método **POST** é utilizado para enviar dados e criar novos recursos no servidor.

### Exemplo

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { nome, email } = body;

  return NextResponse.json(
    {
      mensagem: "Usuário criado com sucesso!",
      usuario: { id: Date.now(), nome, email }
    },
    { status: 201 }
  );
}
```

---

## Método PATCH

O método **PATCH** é utilizado para atualizar parcialmente os dados de um recurso já existente.

### Exemplo

```typescript
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const body = await request.json();
  const { id, nome } = body;

  return NextResponse.json({
    mensagem: `Usuário com ID ${id} atualizado com sucesso!`,
    dadosAtualizados: { nome }
  });
}
```

---

## Método DELETE

O método **DELETE** é utilizado para remover/deletar um recurso do servidor.

### Exemplo

```typescript
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return NextResponse.json({
    mensagem: `Usuário com ID ${id} removido com sucesso!`
  });
}
```
