# 🚀 Fundamentos do NestJS

## 📌 Sobre o Projeto

O **NestJS** é um framework para desenvolvimento de aplicações backend com Node.js.

Ele utiliza TypeScript como linguagem principal e oferece uma estrutura organizada para criação de APIs escaláveis, seguras e fáceis de manter.

O NestJS utiliza conceitos como:

- Módulos.
- Controladores.
- Serviços.
- Injeção de dependências.
- Decorators.
- DTOs.
- Pipes.
- Guards.
- Interceptors.
- Middleware.

## 🛠️ Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- JavaScript
- npm

## 📚 O que é NestJS?

O NestJS é um framework construído sobre o Node.js que utiliza o Express por padrão, podendo também trabalhar com o Fastify.

Seu objetivo é facilitar o desenvolvimento de aplicações backend utilizando uma arquitetura modular e organizada.

### Principais características

- Arquitetura baseada em módulos.
- Suporte nativo ao TypeScript.
- Injeção de dependências.
- Organização de código.
- Facilidade na criação de APIs REST.
- Integração com bancos de dados.
- Suporte a validações e autenticação.
- Estrutura adequada para aplicações maiores.

## 🧱 Principais Fundamentos

### 1. Módulos

Os módulos são responsáveis por organizar a aplicação em partes menores.

Cada módulo pode reunir controladores, serviços e outras dependências relacionadas a uma funcionalidade.

Exemplo:

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

## 🎯 Objetivos de Aprendizagem

Ao estudar os fundamentos do NestJS, é possível aprender a:

- Criar aplicações backend organizadas.
- Utilizar TypeScript em projetos Node.js.
- Criar módulos, controladores e serviços.
- Trabalhar com injeção de dependências.
- Criar rotas HTTP.
- Receber parâmetros, queries e dados do corpo da requisição.
- Utilizar DTOs.
- Validar informações com pipes.
- Proteger rotas com guards.
- Criar interceptors e middlewares.
- Estruturar APIs escaláveis.

## 🏁 Conclusão

O NestJS oferece uma arquitetura organizada para o desenvolvimento de aplicações backend modernas.

Seus principais fundamentos, como módulos, controladores, serviços e injeção de dependências, ajudam a separar responsabilidades e facilitam a manutenção do código.

Com o domínio desses conceitos, torna-se possível desenvolver APIs REST mais estruturadas, seguras e preparadas para crescer.