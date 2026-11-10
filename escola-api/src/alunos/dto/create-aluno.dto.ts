import { IsString, IsInt, IsNotEmpty, IsArray, Min, ArrayMinSize } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {

    @ApiProperty({
        example: 'João da Silva',
        description: 'Nome Completo do Aluno'
    })

    @IsString()
    @IsNotEmpty({
        message: 'O nome é obrigatório e não pode ser vazio!'
    })
    nome: string;
    

    @ApiProperty({
        example: '25',
        description: 'Idade do Aluno'
    })
    @IsInt({
        message: 'A idade deve ser um número inteir!'
    })
    @Min(0,{
        message: 'A idade não pode ser negativa!'
    })
    idade: number;


    @ApiProperty({
        example: '1234',
        description: 'Matrícula do Aluno'
    })
    @IsString()
    @IsNotEmpty({
        message: 'A matrícula é obrigatória e não pode ser vazia!'
    })
    matricula: string;
    

    @ApiProperty({
        example: ['Ciência da Computação', 'Recursos Humanos'],
        description: 'Cursos em que o aluno está matriculado'
    })
    @IsArray()
    @IsString({
        each:true,
        message: 'Cada curso deve ser um texto!'
    })
    @ArrayMinSize(1,{
        message: 'O aluno deve esta matriculado em pelo menos um curso!'
    })
    cursos: string[];
}