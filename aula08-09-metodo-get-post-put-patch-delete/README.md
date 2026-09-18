# Aula: Route Handlers — Métodos GET e POST

## Objetivo

Aprender a criar e utilizar **Route Handlers** no Next.js, trabalhando com os métodos HTTP **GET** e **POST**.

## O que são Route Handlers?

Os **Route Handlers** são funções responsáveis por lidar com requisições HTTP em determinadas rotas da aplicação.

Eles podem ser utilizados para:

- Buscar informações;
- Enviar dados;
- Criar recursos;
- Processar requisições.

## Método GET

O método `GET` é utilizado para **buscar ou consultar dados**.

### Exemplo

```ts
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