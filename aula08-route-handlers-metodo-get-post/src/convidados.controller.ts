import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { CriarConvidadoDto } from "./dto/criar-convidado.dto.js";

@Controller('convidados')
export class ConvidadosController {
    
    @Get()
    listarConvidados() {
        return['Amanda', 'Davi', 'Adam', 'Gabrielly', 'Yuri'];
    }

    @Post()
    criar(@Body() CriarConvidadoDto: CriarConvidadoDto) {
        console.log(`[PORTEIRO DIGITAL] Novo Convidado Recebido: ${CriarConvidadoDto.nome}`);

        return {
            mensagem: `Convidado ${CriarConvidadoDto.nome} Adicionado Com Sucesso!`,
            dados: CriarConvidadoDto,
        };
    }
}