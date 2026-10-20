# Aula 17: Documentação de DTOs com Swagger no NestJS

Nesta aula, abordamos como documentar e descrever os campos de um **Data Transfer Object (DTO)** utilizando o pacote `@nestjs/swagger`. 

A documentação detalhada de DTOs facilita a integração da API por parte dos desenvolvedores front-end e consumidores externos, pois permite que o Swagger UI exiba exemplos e descrições claras para cada parâmetro aceito na requisição.

---

## 📌 Conteúdo Abordado

- Uso do decorador `@ApiProperty` para enriquecimento do schema OpenAPI.
- Definição de exemplos práticos (`example`) para os campos do payload.
- Inclusão de descrições detalhadas (`description`) sobre o propósito de cada atributo.

---

## 💻 Código da Aula

Abaixo está o DTO `CreateProdutoDto` estruturado para a criação de um novo produto:

```typescript
import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutoDto {
    @ApiProperty({
        example: 'Arroz 5kg',
        description: 'Nome Comercial do produto cadastrado',
    })
    nome: string;

    @ApiProperty({
        example: '25.90',
        description: 'Preço unitário de venda',
    })
    preco: number;

    @ApiProperty({
        example: 'Alimentos',
        description: 'Categoria à qual o produto pertence',
    })
    categoria: string;
}
```

---

## 🔍 Entendendo o Decorador `@ApiProperty`

O decorador `@ApiProperty` é responsável por mapear as propriedades da classe DTO para a especificação OpenAPI (Swagger).

### Opções utilizadas:

| Propriedade | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `example` | `string \| number \| boolean \| object` | Define um valor de exemplo exibido no corpo da requisição no Swagger UI. | `'Arroz 5kg'` |
| `description` | `string` | Explicação sucinta sobre o significado ou regra do campo. | `'Nome Comercial do produto cadastrado'` |

---

## 💡 Como Visualizar no Swagger UI

1. Certifique-se de que o Swagger foi configurado no arquivo `main.ts` da sua aplicação NestJS.
2. Inicie o servidor com `npm run start:dev`.
3. Acesse a rota configurada do Swagger (geralmente `http://localhost:3000/api`).
4. Ao abrir a seção de **Schemas** ou ao testar a rota `POST` de criação de produtos, você verá o modelo `CreateProdutoDto` pré-preenchido com os valores definidos nos `examples`.

---

## 🚀 Boas Práticas Adicionais

- **Integração com Validation:** Combine o `@ApiProperty` com decoradores da biblioteca `class-validator` (como `@IsString()`, `@IsNumber()`, `@IsNotEmpty()`) para garantir tanto a validação do runtime quanto a documentação correta.
- **Propriedades Opcionais:** Para campos que não são obrigatórios, utilize o decorador `@ApiPropertyOptional()` ou defina `{ required: false }` nas opções do `@ApiProperty`.