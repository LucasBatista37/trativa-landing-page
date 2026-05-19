import LegalPage from '../LegalPage';

export default function CancelamentoPage() {
  return (
    <LegalPage title="Política de Cancelamento" lastUpdated="[INSERIR DATA DE PUBLICAÇÃO]">
      <div className="legal-content">

        <blockquote>
          <strong>Aviso:</strong> Este documento contém marcações <span className="placeholder">[INSERIR...]</span> e <span className="placeholder">[DEFINIR...]</span> que devem ser preenchidas antes da publicação definitiva.
        </blockquote>

        <h2>1. Visão Geral</h2>
        <p>
          Esta Política descreve como o cancelamento de assinatura funciona na plataforma Trativa, os efeitos sobre o acesso e os dados armazenados.
        </p>
        <p>
          Leia em conjunto com os <a href="/termos">Termos de Uso</a> e a <a href="/privacidade">Política de Privacidade</a>.
        </p>

        <h2>2. Quem Pode Cancelar</h2>
        <p>
          Somente o <strong>proprietário (owner)</strong> da conta pode solicitar o cancelamento da assinatura. Administradores e colaboradores não têm essa permissão.
        </p>

        <h2>3. Como Solicitar o Cancelamento</h2>
        <p>
          O cancelamento é realizado pelo proprietário por meio do <strong>portal de gerenciamento de assinatura do Stripe</strong>, acessível diretamente na plataforma:
        </p>
        <blockquote>
          Configurações → Cobrança → Gerenciar assinatura
        </blockquote>
        <p>
          Para dificuldades, entre em contato: <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span>.
        </p>

        <h2>4. Quando o Cancelamento Entra em Vigor</h2>
        <p>
          O Trativa adota o modelo de <strong>cancelamento ao fim do período pago</strong>:
        </p>
        <ul>
          <li>Ao confirmar o cancelamento, o acesso é mantido até o último dia do ciclo já pago</li>
          <li>Não há bloqueio imediato — acesso completo até o vencimento</li>
          <li>Após o vencimento, o acesso é automaticamente suspenso</li>
        </ul>
        <p>
          <strong>Exemplo:</strong> se o ciclo termina no dia 15 e o usuário cancela no dia 5, o acesso permanece até o dia 15.
        </p>

        <h2>5. O Que Acontece Após o Cancelamento</h2>
        <ul>
          <li>O acesso à plataforma é <strong>suspenso</strong></li>
          <li>Os dados da organização permanecem armazenados por <span className="placeholder">[DEFINIR PRAZO DE RETENÇÃO APÓS CANCELAMENTO]</span> antes da exclusão definitiva</li>
          <li>O status da organização é alterado para <code>cancelado</code></li>
          <li>Novas mensagens WhatsApp não são processadas</li>
        </ul>

        <h2>6. Prazo de Retenção dos Dados</h2>
        <p>
          Após o encerramento do acesso, os dados são mantidos por <span className="placeholder">[DEFINIR PRAZO DE RETENÇÃO APÓS CANCELAMENTO]</span>. Durante esse período, o proprietário pode solicitar exportação de dados ou reativação da conta.
        </p>
        <p>
          Após o prazo, <strong>todos os dados são excluídos permanentemente</strong> e não podem ser recuperados.
        </p>
        <p>
          <strong>Recomendação:</strong> antes de cancelar, exporte seus dados em <em>Leads → Exportar</em>.
        </p>

        <h2>7. Cancelamento Durante o Trial Gratuito</h2>
        <ul>
          <li>O trial de 14 dias pode ser encerrado a qualquer momento <strong>sem qualquer custo</strong></li>
          <li>Não há cobrança automática ao término do trial</li>
          <li>Se nenhum plano for contratado ao término, o acesso é suspenso sem cobrança</li>
        </ul>

        <h2>8. Cancelamento Após Cobrança Realizada</h2>
        <p>
          O cancelamento após uma cobrança bem-sucedida <strong>não gera estorno automático</strong>. O acesso é mantido até o fim do período pago. Para casos de cobrança duplicada ou erro técnico, consulte nossa <a href="/reembolso">Política de Reembolso</a>.
        </p>

        <h2>9. Exclusão de Conta vs. Cancelamento de Assinatura</h2>
        <table>
          <thead>
            <tr><th>Ação</th><th>O que faz</th><th>Como acessar</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Cancelamento da assinatura</td>
              <td>Encerra a cobrança; acesso até o vencimento do ciclo</td>
              <td>Configurações → Cobrança → Gerenciar assinatura</td>
            </tr>
            <tr>
              <td>Exclusão da conta</td>
              <td>Remove permanentemente todos os dados (irreversível)</td>
              <td>Configurações → Minha conta → Excluir minha conta</td>
            </tr>
          </tbody>
        </table>
        <p>
          O cancelamento da assinatura <strong>não exclui automaticamente os dados</strong>.
        </p>

        <h2>10. Reativação</h2>
        <p>
          Após o cancelamento, é possível reativar a conta contratando um novo plano, desde que os dados ainda não tenham sido excluídos (dentro do prazo de retenção). Entre em contato: <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span>.
        </p>

        <h2>11. Contato</h2>
        <p>
          <strong>E-mail:</strong> <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span><br />
          <strong>Portal de gerenciamento:</strong> disponível em Configurações → Cobrança → Gerenciar assinatura
        </p>

      </div>
    </LegalPage>
  );
}
