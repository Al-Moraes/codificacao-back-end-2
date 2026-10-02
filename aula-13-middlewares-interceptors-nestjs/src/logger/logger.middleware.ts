import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request } from 'express';
import type { Response } from 'express';
import type { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const rota = req.originalUrl || req.url
    console.log(`[LOG] Método: ${req.method} | Rota: ${rota}`);

    if(rota.startsWith('/admin')) {
      const role = req.headers['api-key-admin'];
      if(role !== 'administrador') {
        return res.status(403).json ({
          statusCode: 403,
          mensagem: 'Acesso Negado: Privilégio de Administrador Necessário.'
        });
      }
    }

    if(rota.startsWith('/secret')) {
      const role = req.headers['abracadabra'];
      if(role !== 'supervisor') {
        return res.status(403).json ({
          statusCode: 403,
          mensagem: 'Acesso Negado: A Página Secreta Não é Real!'
        });
      }   
    next();
   }
  }
}

