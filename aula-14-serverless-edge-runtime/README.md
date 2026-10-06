# 🚀 Serverless Edge Runtime com Vercel

Este repositório demonstra o uso de **Serverless Edge Functions** executadas no Edge Runtime (ex: Vercel Edge). Essa arquitetura executa o código mais próximo do usuário final (na borda da rede de distribuição), reduzindo drasticamente a latência e oferecendo tempos de resposta extremamente rápidos.

---

## 💻 Código da Função

Abaixo está a implementação da função serverless utilizando a API padrão Web (`Request` e `Response`), configurada especificamente para rodar no ambiente de borda (**Edge**):

```javascript
export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    const inicio = Date.now();
    const vercelId = req.headers.get('x-vercel-id') || '';
    const regiao = vercelId ? vercelId.split('::')[0] : 'local-dev';

    return new Response(
        JSON.stringify({
            mensagem: 'Função Executada com Sucesso!', 
            horarioServidor: new Date().toLocaleString('pt-br'),
            regiao: regiao,
            tempoExecucao: `${Date.now() - inicio} ms `,
        }),
        {
            status: 200,
            headers: {'content-type': 'application/json'},
        }
    );
}
```

---

## 🔍 O que o código faz?

1. **Configuração de Runtime (`config`)**: 
   - Define explicitamente que a função deve utilizar o `runtime: 'edge'`. Isso a desvincula do ambiente tradicional Node.js completo e a coloca em uma sandbox baseada em V8 (otimizada para inicialização instantânea e sem *cold starts* pesados).
2. **Uso de APIs Web Nativas**:
   - Utiliza diretamente o objeto `Request` e a classe `Response`, tornando o código compatível com padrões web modernos (WinterCG).
3. **Identificação da Região de Execução**:
   - Lê o cabeçalho `x-vercel-id` injetado pela infraestrutura da Vercel para extrair o código do data center onde a requisição foi processada (por exemplo, `gru1` para São Paulo). Se executado localmente, assume o valor `local-dev`.
4. **Métrica de Desempenho**:
   - Calcula o tempo exato de execução (`tempoExecucao`) em milissegundos utilizando `Date.now()`.

---

## ⚡ Vantagens do Edge Runtime

* **Baixa Latência (Global Reach):** O código roda em centrais de distribuição globais próximas de onde o cliente está fazendo a requisição.
* **Sem Cold Starts demorados:** Ao contrário de containers tradicionais ou lambdas pesadas, os runtimes de borda iniciam quase instantaneamente.
* **Padrões Web:** Utiliza `fetch`, `Request` e `Response` nativos sem precisar importar pacotes complexos do Node.js.

---

## 🛠️ Como Executar Localmente

Certifique-se de ter a CLI da Vercel instalada para testar funções de borda no seu ambiente local:

```bash
# Instalar a CLI da Vercel globalmente
npm i -g vercel

# Executar o projeto em modo de desenvolvimento
vercel dev