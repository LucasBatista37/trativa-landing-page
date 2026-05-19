import LegalPage from '../LegalPage';

export default function ReembolsoPage() {
  return (
    <LegalPage title="Política de Reembolso" lastUpdated="[INSERIR DATA DE PUBLICAÇÃO]">
      <div className="legal-content">

        <blockquote>
          <strong>Aviso:</strong> Este documento contém marcações <span className="placeholder">[DEFINIR...]</span> que representam decisões comerciais pendentes. Preencha antes da publicação definitiva e consulte advogado especializado.
        </blockquote>

        <h2>1. Período de Avaliação Gratuita</h2>
        <p>
          O Trativa oferece <strong>14 dias de avaliação gratuita</strong> sem necessidade de cartão de crédito.
        </p>
        <ul>
          <li>Nenhum valor é cobrado durante o trial</li>
          <li>Não há necessidade de reembolso para o período de avaliação</li>
          <li>O trial pode ser encerrado a qualquer momento sem custo</li>
          <li>Não há cobrança automática ao término do trial</li>
        </ul>

        <h2>2. Planos Mensais</h2>
        <p>
          O Trativa opera com cobrança mensal recorrente via Stripe:
        </p>
        <table>
          <thead>
            <tr><th>Plano</th><th>Preço mensal</th></tr>
          </thead>
          <tbody>
            <tr><td>Starter</td><td>R$ 49,00</td></tr>
            <tr><td>Básico</td><td>R$ 97,00</td></tr>
            <tr><td>Pro</td><td>R$ 197,00</td></tr>
            <tr><td>Business</td><td>R$ 397,00</td></tr>
          </tbody>
        </table>
        <p>
          <span className="placeholder">[DEFINIR SE PLANO MENSAL TEM REEMBOLSO PROPORCIONAL EM CANCELAMENTOS ANTECIPADOS]</span>
        </p>

        <h2>3. Plano Anual</h2>
        <p>
          Plano anual: <strong>não disponível no momento</strong>. Caso seja implementado futuramente, esta política será atualizada.
        </p>

        <h2>4. Diferença entre Cancelamento e Reembolso</h2>
        <table>
          <thead>
            <tr><th>Ação</th><th>O que significa</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Cancelamento</td>
              <td>Encerra a renovação automática; acesso mantido até o fim do ciclo pago</td>
            </tr>
            <tr>
              <td>Reembolso</td>
              <td>Devolução de valores já cobrados, sujeito às condições desta Política</td>
            </tr>
          </tbody>
        </table>
        <p>O cancelamento <strong>não implica automaticamente</strong> em reembolso.</p>

        <h2>5. Quando o Reembolso Pode Ser Analisado</h2>
        <p>Não existe reembolso automático. O Trativa analisa solicitações nos seguintes casos:</p>

        <h3>5.1 Cobrança duplicada</h3>
        <p>
          Se o usuário for cobrado mais de uma vez pelo mesmo ciclo por erro técnico, o valor excedente será devolvido após confirmação.
        </p>

        <h3>5.2 Erro técnico de cobrança</h3>
        <p>
          Se uma cobrança for realizada em valor diferente do contratado por erro do sistema, será analisada e corrigida se confirmado.
        </p>

        <h3>5.3 Período de arrependimento</h3>
        <p>
          <span className="placeholder">[DEFINIR POLÍTICA DE ARREPENDIMENTO]</span>
        </p>
        <p>
          <em>Nota: O Código de Defesa do Consumidor (Art. 49) pode assegurar direito de arrependimento em até 7 dias corridos para contratos online. Consulte advogado para verificar aplicabilidade.</em>
        </p>

        <h2>6. Quando o Reembolso Não Será Concedido</h2>
        <ul>
          <li>Cancelamento voluntário no curso de ciclo vigente (acesso permanece até o vencimento)</li>
          <li>Não utilização da plataforma durante o período pago</li>
          <li>Insatisfação com funcionalidades disponíveis e comunicadas</li>
          <li>Suspensão ou encerramento por violação dos Termos de Uso</li>
          <li>Solicitação após o prazo de <span className="placeholder">[DEFINIR PRAZO PARA SOLICITAÇÃO DE REEMBOLSO]</span></li>
        </ul>

        <h2>7. Como Solicitar Reembolso</h2>
        <p>Envie e-mail para <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span> com:</p>
        <ol>
          <li>Nome e e-mail da conta</li>
          <li>Data da cobrança</li>
          <li>Valor cobrado</li>
          <li>Motivo da solicitação</li>
          <li>Documentação de suporte (se disponível)</li>
        </ol>

        <h2>8. Análise e Prazo de Processamento</h2>
        <p>
          Após o recebimento, responderemos em até <span className="placeholder">[DEFINIR PRAZO DE RESPOSTA À SOLICITAÇÃO]</span> dias úteis. Em caso de aprovação, o estorno é realizado pelo mesmo meio de pagamento (cartão via Stripe) em aproximadamente <span className="placeholder">[DEFINIR PRAZO DE PROCESSAMENTO]</span> dias úteis, sujeito a prazos adicionais da instituição financeira.
        </p>

        <h2>9. Falha de Pagamento</h2>
        <p>
          Em caso de falha no pagamento de renovação, o usuário é notificado por e-mail e o Stripe tenta o reprocessamento automaticamente. Cobranças com falha (tentativas não processadas) não geram direito a reembolso.
        </p>

        <h2>10. Uso Indevido</h2>
        <p>
          Em caso de encerramento por violação dos <a href="/termos">Termos de Uso</a>, não haverá reembolso de valores pagos.
        </p>

        <h2>11. Contato</h2>
        <p>
          <strong>E-mail:</strong> <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span>
        </p>

      </div>
    </LegalPage>
  );
}
