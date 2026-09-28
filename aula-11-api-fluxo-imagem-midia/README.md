# 🖼️ Testes de Upload de Imagens com Insomnia

> Documentação dos testes realizados utilizando o **Insomnia** para validar o envio de imagens através do método **HTTP POST**.

---

## 📌 Sobre

Este documento apresenta como realizar testes de **upload de imagens** utilizando o Insomnia.

O objetivo é validar uma API responsável por receber uma imagem enviada pelo cliente através de uma requisição `POST`.

**Método utilizado:**

`POST`

**Endpoint:**

`/images`

**Tipo de conteúdo:**

`multipart/form-data`

---

## 🛠️ Ferramentas utilizadas

- 🧪 **Insomnia** — Ferramenta utilizada para realizar os testes da API.
- 🌐 **HTTP** — Protocolo utilizado na comunicação com a API.
- 📤 **POST** — Método HTTP utilizado para enviar a imagem.
- 🖼️ **Multipart Form Data** — Formato utilizado para realizar o upload do arquivo.
- 💻 **API Backend** — Responsável por receber, validar e armazenar a imagem.

---

## 🚀 Testando o método POST

### 1. Criando uma nova requisição

No **Insomnia**, crie uma nova requisição utilizando o método:

`POST`

Informe a URL da API:

`http://localhost:3000/images`

A configuração deverá ficar:

| Configuração | Valor |
|---|---|
| Método | `POST` |
| URL | `http://localhost:3000/images` |
| Body | `Multipart Form` |

---

### 2. Configurando o Body

Na aba **Body** do Insomnia, selecione:

`Multipart Form`

Depois, adicione um campo chamado:

`image`

Configure o campo como:

| Campo | Tipo | Valor |
|---|---|---|
| `image` | `File` | `minha-imagem.png` |

A estrutura ficará semelhante a:

`Body → Multipart Form → image → minha-imagem.png`

> 💡 **Importante:** o nome do campo `image` deve ser exatamente igual ao nome esperado pela API.

---

## 📤 Enviando a imagem

Após selecionar a imagem, clique no botão **Send** no Insomnia.

A requisição será enviada para:

`POST http://localhost:3000/images`

Utilizando:

`multipart/form-data`

O Insomnia será responsável por gerar automaticamente as informações necessárias para o envio do arquivo.

---

## 📥 Resposta esperada

Caso o upload seja realizado com sucesso, a API poderá retornar uma resposta semelhante a:

`201 Created`

E um JSON contendo as informações da imagem:

`{
  "success": true,
  "message": "Imagem enviada com sucesso!",
  "image": {
    "id": 1,
    "filename": "minha-imagem.png",
    "url": "/uploads/minha-imagem.png"
  }
}`

---

## 🧪 Cenários de teste

| Nº | Cenário | Resultado esperado |
|---|---|---|
| 01 | Enviar imagem `.jpg` | ✅ Upload realizado |
| 02 | Enviar imagem `.jpeg` | ✅ Upload realizado |
| 03 | Enviar imagem `.png` | ✅ Upload realizado |
| 04 | Enviar imagem `.webp` | ✅ Upload realizado |
| 05 | Não enviar imagem | ❌ Erro `400 Bad Request` |
| 06 | Enviar arquivo inválido | ❌ Erro `415 Unsupported Media Type` |
| 07 | Enviar arquivo muito grande | ❌ Erro `413 Payload Too Large` |
| 08 | Enviar campo incorreto | ❌ Erro de validação |
| 09 | Enviar imagem com autenticação | ✅ Upload realizado |

---

## ❌ Testando erros

### 🚫 Imagem não enviada

Caso nenhuma imagem seja selecionada no Insomnia, a API deverá informar que o arquivo é obrigatório.

**Resposta esperada:**

`400 Bad Request`

**Mensagem:**

`Imagem não enviada.`

---

### 🚫 Formato inválido

Caso seja enviado um arquivo que não seja uma imagem, a API deverá rejeitar o arquivo.

**Exemplo:**

`arquivo.pdf`

**Resposta esperada:**

`415 Unsupported Media Type`

**Mensagem:**

`Formato de imagem não permitido.`

---

### 🚫 Arquivo muito grande

Caso o tamanho da imagem ultrapasse o limite definido pela API, o upload deverá ser rejeitado.

**Resposta esperada:**

`413 Payload Too Large`

**Mensagem:**

`O arquivo excede o tamanho máximo permitido.`

---

## 🔐 Teste com autenticação

Caso a API utilize autenticação, será necessário informar o token no Header da requisição.

**Header:**

`Authorization: Bearer SEU_TOKEN`

A requisição ficará:

`POST http://localhost:3000/images`

Com o Header:

`Authorization: Bearer SEU_TOKEN`

E o Body configurado como:

`Multipart Form`

Com o campo:

`image = minha-imagem.png`

---

## 🌐 Endpoint utilizado

**Método:**

`POST`

**Endpoint:**

`/images`

**URL completa:**

`http://localhost:3000/images`

---

## 📋 Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `image` | File | ✅ Sim | Arquivo de imagem enviado para a API |

---

## 🖼️ Formatos permitidos

A API poderá aceitar os seguintes formatos:

- `.jpg`
- `.jpeg`
- `.png`
- `.webp`

---

## 📦 Tamanho máximo

O tamanho máximo permitido para o arquivo pode ser definido pela API.

**Exemplo:**

`5 MB`

---

## 🔄 Fluxo do upload

`Insomnia`

↓

`POST /images`

↓

`Multipart Form Data`

↓

`API`

↓

`Validação da imagem`

↓

`Upload`

↓

`Imagem armazenada`

---

## 📁 Estrutura do projeto

`projeto/`

`├── src/`

`│   ├── controllers/`

`│   ├── routes/`

`│   ├── services/`

`│   └── middlewares/`

`│`

`├── uploads/`

`│`

`├── package.json`

`└── README.md`

---

## ✅ Checklist dos testes

- [x] Criar requisição `POST`
- [x] Configurar a URL da API
- [x] Selecionar `Multipart Form`
- [x] Adicionar o campo `image`
- [x] Selecionar uma imagem
- [x] Enviar a requisição
- [x] Validar o status HTTP
- [x] Validar a resposta da API
- [x] Testar imagem `.jpg`
- [x] Testar imagem `.jpeg`
- [x] Testar imagem `.png`
- [x] Testar imagem `.webp`
- [x] Testar arquivo inválido
- [x] Testar arquivo muito grande
- [x] Testar requisição sem imagem
- [x] Testar autenticação

---

## 🎯 Resultado

Os testes realizados utilizando o **Insomnia** permitem verificar se a API está preparada para receber imagens através do método `POST`.

O processo consiste em:

1. Criar uma requisição `POST`.
2. Informar o endpoint da API.
3. Selecionar `Multipart Form`.
4. Adicionar o campo `image`.
5. Selecionar o arquivo de imagem.
6. Enviar a requisição.
7. Verificar o status da resposta.
8. Validar os dados retornados pela API.

---

## 💡 Observação

Os endpoints, nomes dos campos, formatos permitidos, tamanho máximo dos arquivos e estrutura das respostas devem ser adaptados de acordo com a implementação da API.

---

<div align="center">

# 🖼️ Upload de Imagens

**🧪 Testes com Insomnia • 📤 Método POST • 🚀 API REST**

</div>
