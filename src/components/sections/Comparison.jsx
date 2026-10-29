import { X, Check } from 'lucide-react';

// Cada linha liga uma dor comum a um recurso que existe no Trativa.
const rows = [
  {
    before: 'O contato chega pelo WhatsApp, Instagram ou Google Maps e ninguém faz o follow-up.',
    after: 'Todo lead entra com etapa e responsável. Quem escreve para o seu número oficial vira lead sozinho.',
  },
  {
    before: 'Para saber em que pé está cada negociação, o gestor precisa perguntar ao vendedor.',
    after: 'O pipeline mostra as 9 etapas lado a lado, com a contagem de cada uma, atualizado em tempo real.',
  },
  {
    before: 'Telefone na planilha, conversa no celular do vendedor, observação no caderno.',
    after: 'Dados, campos personalizados, conversa de WhatsApp e histórico de ações na mesma ficha.',
  },
  {
    before: 'Qual origem traz mais clientes? Qual vendedor converte mais? Ninguém sabe ao certo.',
    after: 'Funil por vendedor e por origem, com a conversão entre etapas e o gargalo destacado.',
  },
];

export default function Comparison() {
  return (
    <section className="bg-paper pb-20 pt-6 sm:pb-28" aria-labelledby="comparacao-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="comparacao-titulo" className="text-balance font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Venda não se perde por falta de esforço. Se perde por falta de processo.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-gray-600">
              O Trativa troca a memória de cada vendedor por um processo que a equipe inteira enxerga.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="hidden grid-cols-2 gap-6 border-b border-line pb-3 text-sm font-medium text-gray-500 sm:grid">
              <span>Sem processo</span>
              <span className="text-gray-900">Com o Trativa</span>
            </div>
            <ul className="divide-y divide-line">
              {rows.map((r) => (
                <li key={r.after} className="grid gap-3 py-5 sm:grid-cols-2 sm:gap-6">
                  <p className="flex gap-3 text-[15px] leading-relaxed text-gray-500">
                    <X className="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span><span className="sr-only">Sem processo: </span>{r.before}</span>
                  </p>
                  <p className="flex gap-3 text-[15px] leading-relaxed text-gray-900">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-brand-600" aria-hidden="true" />
                    <span><span className="sr-only">Com o Trativa: </span>{r.after}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
