# Guia de Tratamento de Erros e Status Codes no NestJS

Este documento explica como o tratamento de erros, o gerenciamento de códigos de status HTTP e o registro de logs (logging) foram implementados no controlador de produtos (`ProdutosController`) utilizando o framework **NestJS**.

---

## 📋 Visão Geral do Código

O trecho de código abaixo demonstra um controlador (`ProdutosController`) configurado para gerenciar rotas de produtos, realizando validações de entrada, lançando exceções HTTP apropriadas e registrando avisos (`logs`) quando ocorrem comportamentos inesperados.

```typescript
import { Controller, Get, Param, BadRequestException, NotFoundException, Logger } from "@nestjs/common";
import { ProdutosService } from "./produtos.service.js";

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) {}

    produtos() {
        return this.produtosService.listarProdutos();
    }

    private readonly logger = new Logger(ProdutosController.name);

    @Get(':id')
    idProduto(@Param('id') idProd: string) {
        const id = Number(idProd);

        // Validação de tipo (ID não numérico)
        if (isNaN(id)) {
            this.logger.warn(`Tentativa de busca com ID não numérico: ${idProd}`);
            throw new BadRequestException('ID inválido. Deve ser um número inteiro!');
        }

        // Busca do produto na lista
        const produto = this.produtos().find((produto) => produto.id === id);
        
        // Validação de existência do recurso
        if (!produto) {
            this.logger.warn(`Produto com ID ${id} não localizado.`);
            throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
        }

        return produto;
    }
}
```

---

## 🔍 Conceitos Chave Aplicados

### 1. Status Codes HTTP e Exceções do NestJS
O NestJS fornece exceções embutidas que herdam de `HttpException`. Quando lançadas dentro de um controlador, o framework intercepta automaticamente a exceção e retorna a resposta formatada em JSON contendo o código de status HTTP correspondente.

* **`BadRequestException` (Status Code: `400 Bad Request`)**
  * **Quando ocorre:** Acionado quando o dado fornecido pelo cliente é inválido ou malformado.
  * **No código:** É utilizado quando o parâmetro de rota `id` passado na URL não pode ser convertido para um número (`isNaN(id)`).

* **`NotFoundException` (Status Code: `404 Not Found`)**
  * **Quando ocorre:** Acionado quando o recurso solicitado pelo cliente não existe no servidor.
  * **No código:** É utilizado quando o ID é perfeitamente válido (numérico), mas nenhum produto correspondente é encontrado na base/lista de dados.

---

### 2. O Papel do Logger (`Logger`)
O uso da classe `Logger` do NestJS permite registrar eventos importantes, avisos ou erros no console de forma estruturada.

* No código, criamos uma instância vinculada ao contexto da classe:
  ```typescript
  private readonly logger = new Logger(ProdutosController.name);
  ```
* **Uso de `this.logger.warn(...)`:** Em vez de registrar um erro crítico (`error`), utilizamos avisos (`warn`) para entradas inválidas do usuário ou tentativas de acesso a recursos inexistentes, facilitando o monitoramento sem poluir os logs de falhas graves do servidor.

---

## 🚀 Como Testar as Respostas da API

1. **Busca bem-sucedida (`200 OK`):**
   * **Requisição:** `GET /produtos/1` (assumindo que o produto com ID `1` exista).
   * **Resposta:** Retorna o objeto JSON do produto.

2. **ID Inválido (`400 Bad Request`):**
   * **Requisição:** `GET /produtos/abc`
   * **Resposta:** 
     ```json
     {
       "statusCode": 400,
       "message": "ID inválido. Deve ser um número inteiro!",
       "error": "Bad Request"
     }
     ```

3. **Produto não encontrado (`404 Not Found`):**
   * **Requisição:** `GET /produtos/999` (assumindo que o ID `999` não exista).
   * **Resposta:**
     ```json
     {
       "statusCode": 404,
       "message": "Produto com ID 999 não encontrado.",
       "error": "Not Found"
     }