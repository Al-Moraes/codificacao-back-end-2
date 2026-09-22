# 📚 Testes da API de Livros com Insomnia

Este documento apresenta os testes realizados utilizando o **Insomnia** para verificar o funcionamento do `LivrosController` e do `LivrosService`.

Os arquivos responsáveis pela implementação são:

- `livros.controller.ts`
- `livros.service.ts`

A API permite buscar um livro pelo seu ID.

# 🎯 LivrosController
O LivrosController é responsável por receber as requisições HTTP relacionadas aos livros.

O endpoint implementado é:
GET /livros/:id
O parâmetro id é recebido pela URL e validado utilizando o ParseIntPipe.

Código utilizado
@Get(':id')
buscarPorId(@Param('id', ParseIntPipe) id:string) {
    const numeroId = +id
    return this.livroService.encontrarPorId(numeroId);
}
O controller recebe o ID, transforma o valor em número e encaminha a busca para o método encontrarPorId() do LivrosService.

# ⚙️ LivrosService
O LivrosService possui uma lista de livros armazenada em memória:

### private livros = [
    {id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R Tolkien'},
    {id: 2, titulo: '1984', autor: 'George Orwell'},
    {id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis'},
    {id: 4, titulo: 'O Homem Duplicado', autor: 'José Saramago'},
    {id: 5, titulo: 'Memórias do Subsolo', autor: 'Fiódor Dostoiévski'},
];
A busca é realizada pelo ID:


encontrarPorId(id: number){


    const livro = this.livros.find((livro) => livro.id === id);

    if(!livro) {
        throw new NotFoundException(
            `Livro com ID ${id} não localizado em nosso acervo ;(`
        );
    }

    return livro;
}
Caso o livro seja encontrado, seus dados são retornados.

Caso o ID não exista no acervo, a aplicação retorna uma exceção NotFoundException, resultando em um erro HTTP 404 Not Found.

# 📝 Conclusão
Os testes realizados no Insomnia permitem verificar o comportamento do endpoint de busca de livros.

Foram testados:

Busca de um livro existente;

Busca de diferentes livros pelo ID;

Busca de um ID que não existe;

Envio de um ID inválido.

Dessa forma, é possível verificar tanto o fluxo de sucesso da aplicação quanto o tratamento de erros implementado no LivrosController e no LivrosService.
