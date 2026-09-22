# Processamento de Logs com Streams em Node.js

## 📌 Sobre o Projeto

Este projeto demonstra o uso de Streams em Node.js para gerar e processar arquivos de log de forma eficiente, sem a necessidade de carregar todo o conteúdo do arquivo na memória.

A aplicação é dividida em duas etapas principais:

1. Geração de um arquivo de log simulado contendo 200.000 linhas.
2. Filtragem das linhas que possuem a mensagem `ERROR`, salvando os resultados em um novo arquivo.

## 🛠️ Tecnologias Utilizadas

- Node.js
- JavaScript
- Módulo `fs`
- Módulo `readline`
- Streams de leitura e escrita

## 📂 Estrutura do Projeto

```text
projeto/
├── gerar_logs.js
├── filtrar_erros.js
├── servidor.log
├── apenas_erros.log
└── README.md