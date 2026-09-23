import { Controller, ParseIntPipe } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Param } from "@nestjs/common";
import { LivrosService } from "./livros.service.js";

@Controller('livros')
export class LivrosController {
    constructor(private readonly livroService: LivrosService) {}

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id:string) {
        const numeroId = +id
        return this.livroService.encontrarPorId(numeroId);
    }
}