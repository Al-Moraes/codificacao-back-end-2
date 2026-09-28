# NestJS — Autenticação e Validação de Headers (`/secreto`)

Este projeto demonstra a criação de um endpoint protegido no NestJS utilizando validação de cabeçalhos HTTP (`Headers`) customizados e manipulação direta da resposta com o decorator `@Res()`.

---

## 🎯 Objetivo

Aprender a interceptar e validar cabeçalhos de requisição (`x-api-key`) em um controller NestJS, retornando diferentes códigos de status HTTP (200 OK e 403 Forbidden) e definindo cabeçalhos de resposta customizados (`x-auth-status`).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Express** (Tipagem da resposta HTTP)
- **Insomnia** (Testes de requisições HTTP e manipulação de Headers)

---

## 💻 Código da Aplicação

O controller `SegurancaController` gerencia a rota `/secreto` e valida o acesso com base na chave informada no header `x-api-key`.

```typescript
import { Controller, Get, Headers, Res } from "@nestjs/common";
import type { Response } from "express";

@Controller('secreto')
export class SegurancaController {
    @Get()
    acessarAreaSecreta(@Headers('x-api-key') apiKey: string, @Res() res: Response) {
        if (apiKey === 'SENAI-2026') {
            res.setHeader('x-auth-status', 'verificado');
            return res.status(200).json({
                mensagem: 'Acesso concedido ao conteúdo secreto!',
                timestamp: new Date(),
            });
        }

        return res.status(403).json({
            erro: 'Forbidden',
            mensagem: 'Chave de API inválida ou ausente',
        });
    }
}
```

---

## 🧪 Testes no Insomnia (Advanced Request)

Para validar a API, configure uma requisição no **Insomnia** para a URL `http://localhost:3000/secreto`.

### 1. Acesso Concedido (Sucesso)

* **Método:** `GET`
* **URL:** `http://localhost:3000/secreto`
* **Header da Requisição:**
  * `x-api-key`: `SENAI-2026`

**Resposta HTTP:** `200 OK`
```json
{
  "mensagem": "Acesso concedido ao conteúdo secreto!",
  "timestamp": "2026-09-28T15:00:00.000Z"
}
```

**Header de Resposta Recebido:**
* `x-auth-status`: `verificado`

---

### 2. Acesso Negado (Chave Inválida ou Ausente)

* **Método:** `GET`
* **URL:** `http://localhost:3000/secreto`
* **Header da Requisição:** *(Chave incorreta ou sem enviar o header)*
  * `x-api-key`: `CHAVE-ERRADA`

**Resposta HTTP:** `403 Forbidden`
```json
{
  "erro": "Forbidden",
  "mensagem": "Chave de API inválida ou ausente"
}
```

---

## 📋 Resumo do Fluxo de Validação

| Condição | Header `x-api-key` | Status HTTP | Header de Resposta | Mensagem Retornada |
| :--- | :--- | :--- | :--- | :--- |
| **Válido** | `SENAI-2026` | `200 OK` | `x-auth-status: verificado` | "Acesso concedido ao conteúdo secreto!" |
| **Inválido** | Outro valor ou ausente | `403 Forbidden` | *Nenhum* | "Chave de API inválida ou ausente" |

---

## 🚀 Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie a aplicação NestJS em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```

3. Acesse `http://localhost:3000/secreto` realizando as requisições via Insomnia.