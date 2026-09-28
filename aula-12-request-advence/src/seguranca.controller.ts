import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Headers } from "@nestjs/common";
import { Res } from "@nestjs/common";
import type { Response } from "express";

@Controller('secreto')
export class SegurancaController {
    @Get()
    acessarAreaSecreta(@Headers('x-api-key')apiKey: string, @Res() res: Response) {
        if(apiKey === 'SENAI-2026') {
            res.setHeader('x-auth-status', 'verificado');
            return res.status(200).json({
                mensagem:'Acesso concedido ao conteúdo secreto!',
                timestamp: new Date(),
            });
        }
        return res.status(403).json({
            erro: 'Forbidden',
            mensagem: 'Chave de API inválida ou ausente',
        })
    }
}