# 📚 Aula: Validação de Schema com Zod no NestJS

Bem-vindo(a) ao material de apoio da aula sobre validação de dados utilizando **Zod** em conjunto com **NestJS**! 

Nesta aula, exploramos como garantir a integridade dos dados recebidos nas requisições HTTP através de validações baseadas em schemas robustos e tipagem estática automática.

---

## 🚀 O que é o Zod?

O **Zod** é uma biblioteca de declaração e validação de schemas para TypeScript. Ele permite que você declare um schema uma única vez e o Zod se encarrega de inferir automaticamente o tipo TypeScript correspondente, eliminando duplicações de código e garantindo segurança em tempo de execução (*runtime*).

---

## 📂 Contexto do Código

O exemplo abaixo demonstra um controlador (`ColaboradoresController`) que gerencia a criação de colaboradores. Ele utiliza um *Pipe* customizado (`ZodValidationPipe`) para validar o corpo (`Body`) da requisição HTTP contra um schema Zod pré-definido.

### Código do Controller

```typescript
import { Controller, Post, Body, UsePipes } from "@nestjs/common";
import { colaboradorSchema } from "./colaborador.schema.js";
import type { Colaborador } from "./colaborador.schema.js";
import { ZodValidationPipe } from "./zod-validation.pipe.js";

@Controller('colaboradores')
export class ColaboradoresController {
    @Post()
    @UsePipes(new ZodValidationPipe(colaboradorSchema))
    async create(@Body() body: Colaborador) {
        return {
            message: 'Colaborador criado com sucesso!',
            colaborador: body,
        };
    }
}
```

---

## 🔍 Detalhamento dos Componentes

1. **`colaboradorSchema`**: É o schema definido com Zod contendo as regras de validação (como tipos de dados, campos obrigatórios, e-mails válidos, etc.).
2. **`Colaborador`**: É o tipo TypeScript inferido diretamente do schema do Zod (`z.infer<typeof colaboradorSchema>`), garantindo que a tipagem do parâmetro `body` esteja sempre sincronizada com as regras de validação.
3. **`ZodValidationPipe`**: Um pipe personalizado do NestJS que intercepta os dados de entrada da requisição, executa a validação usando o schema do Zod e lança uma exceção caso os dados sejam inválidos.
4. **`@UsePipes(...)`**: Decorator do NestJS aplicado ao método `create`, responsável por injetar o pipe de validação na rota POST `/colaboradores`.

---

## 🛠️ Como Funciona o Fluxo de Execução

1. O cliente envia uma requisição `POST` com um JSON no corpo para a rota `/colaboradores`.
2. O NestJS intercepta a requisição e aciona o `ZodValidationPipe` configurado no método `create`.
3. O Pipe valida o payload utilizando o `colaboradorSchema`.
   - Se os dados estiverem **incorretos**, o Zod rejeita e o NestJS retorna um erro HTTP `400 Bad Request`.
   - Se os dados estiverem **corretos**, o fluxo continua e os dados validados são injetados no parâmetro `body`.
4. O método `create` executa sua lógica de negócio e retorna a resposta de sucesso.