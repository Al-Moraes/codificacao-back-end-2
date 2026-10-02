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
      mensagem: 'Bem-vindo ao Painel Administrativo!',
      data: new Date(),
    }
  }

  @Get('secret')
  getSecret(){
    return {
      mensagem: 'Bem-vindo a rota secreta!',
      data: new Date(),
    }
  }
}
