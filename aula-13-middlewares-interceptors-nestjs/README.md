# Guia de Testes no Insomnia: Middlewares e Interceptors no NestJS

Este guia demonstra como configurar e testar rotas do NestJS utilizando **Middlewares** e **Interceptors**, utilizando o código fornecido e testando-os através do **Insomnia**.

---

## 💻 1. Código da Aplicação (NestJS)

O controlador base utilizado neste exemplo (`app.controller.ts`):

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getPublic() {
   return {
     message: 'Rota Pública acessada com sucesso!',
     data: new Date(),
   }
  }

  @Get('admin')
  getAdmin() {
    return {
      message: 'Bem-vindo ao Painel Administrativo!',
      data: new Date(),
    }
  }
}