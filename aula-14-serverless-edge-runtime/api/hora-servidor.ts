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