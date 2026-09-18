import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Patch } from "@nestjs/common";
import { Delete } from "@nestjs/common";
import { Param } from "@nestjs/common";
import { HttpCode } from "@nestjs/common";
import { ConvidadosService } from "./convidados.service.js";
import { CriarConvidadoDto } from "./dto/criar-convidado.dto.js";

@Controller('convidados')
export class ConvidadosController {
    constructor(private readonly convidadosService: ConvidadosService) {}
    @Get()
    listarConvidados() {
        return this.convidadosService.findAll();
    }

    @Post()
    criar(@Body() CriarConvidadoDto: CriarConvidadoDto) {
        console.log(`[OPERADOR]: Novo Convidado Recebido: ${CriarConvidadoDto.nome}`);

        return {
            mensagem: `Convidado ${CriarConvidadoDto.nome} Adicionado Com Sucesso!`,
            dados: CriarConvidadoDto,
        }
    }

    @Patch()
    atualizarIdade(@Param('id') id: number, @Body('idade') idade: number) {
        console.log(`[ADMINISTRADOR]: Atualizando a idade do ID ${id}`);
        return this.convidadosService.atualizarIdade(+id, idade);
    }

    @Delete(':id')
    @HttpCode(204)
    remover(@Param ('id') id: number) {
        console.log(`[ADMINISTRADOR]: Removendo Convidado ID: ${id}`);
        this.convidadosService.removerConvidado(+id); 
    }
}