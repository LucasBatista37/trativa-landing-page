import LegalPage from '../LegalPage';

export default function TermosPage() {
  return (
    <LegalPage title="Termos de Uso" lastUpdated="[INSERIR DATA DE PUBLICAÇÃO]">
      <div className="legal-content">

        <blockquote>
          <strong>Aviso:</strong> Este documento contém marcações <span className="placeholder">[INSERIR...]</span> que devem ser preenchidas antes da publicação definitiva. Recomenda-se revisão por advogado especializado.
        </blockquote>

        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao criar uma conta, acessar ou utilizar qualquer funcionalidade da plataforma Trativa, você declara que leu, compreendeu e concorda com estes Termos de Uso e com nossa <a href="/privacidade">Política de Privacidade</a>.
        </p>

        <h2>2. Definições</h2>
        <ul>
          <li><strong>Trativa:</strong> plataforma SaaS de gestão de leads operada por <span className="placeholder">[INSERIR RAZÃO SOCIAL]</span></li>
          <li><strong>Plataforma:</strong> sistema web acessível em <code>app.trativa.com.br</code></li>
          <li><strong>Usuário:</strong> qualquer pessoa que possua ou utilize uma conta na plataforma</li>
          <li><strong>Proprietário (owner):</strong> titular da conta e responsável pela organização</li>
          <li><strong>Administrador:</strong> usuário com permissões ampliadas, convidado pelo proprietário</li>
          <li><strong>Colaborador:</strong> usuário com acesso operacional, convidado pelo proprietário ou administrador</li>
          <li><strong>Lead:</strong> contato comercial cadastrado pelo usuário na plataforma</li>
          <li><strong>Trial:</strong> período de avaliação gratuita de 14 dias</li>
        </ul>

        <h2>3. Descrição do Serviço</h2>
        <p>O Trativa é um CRM de gestão de leads que oferece:</p>
        <ul>
          <li>Pipeline de vendas com 9 etapas: Novo, Em atendimento, Contatado, Interessado, Sem resposta, Reunião marcada, Proposta enviada, Convertido, Perdido</li>
          <li>3 modos de visualização: Kanban (drag-and-drop), Tabela e Cards</li>
          <li>Integração oficial com WhatsApp Cloud API da Meta</li>
          <li>Campos personalizados para leads</li>
          <li>Importação e exportação de leads em CSV</li>
          <li>Gestão de equipe com 3 níveis de acesso</li>
          <li>Metas de vendas, relatórios e notificações em tempo real</li>
          <li>Log de auditoria e templates de mensagens WhatsApp</li>
        </ul>

        <h2>4. Elegibilidade</h2>
        <p>
          Para usar o Trativa, o usuário deve ter capacidade civil plena (18 anos ou mais), utilizar a plataforma exclusivamente para fins comerciais e profissionais legítimos, e fornecer informações verdadeiras no cadastro.
        </p>

        <h2>5. Cadastro e Conta</h2>
        <p>
          O usuário é inteiramente responsável pela guarda de suas credenciais. Qualquer ação realizada com suas credenciais será de sua responsabilidade. Em caso de uso não autorizado, notifique imediatamente <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span>.
        </p>

        <h2>6. Uso Permitido</h2>
        <ul>
          <li>Cadastrar e gerenciar leads de sua atividade comercial legítima</li>
          <li>Utilizar a integração WhatsApp para contatos que consentiram em receber mensagens</li>
          <li>Convidar colaboradores para trabalhar na mesma organização</li>
          <li>Importar listas de leads obtidas legalmente</li>
          <li>Exportar seus próprios dados</li>
        </ul>

        <h2>7. Uso Proibido</h2>
        <ul>
          <li><strong>Spam:</strong> envio em massa de mensagens não solicitadas, incluindo abuso da integração WhatsApp</li>
          <li><strong>Atividades ilícitas:</strong> uso fraudulento, enganoso ou que viole qualquer lei aplicável</li>
          <li><strong>Dados sem autorização:</strong> cadastrar dados de terceiros sem base legal ou consentimento</li>
          <li><strong>Engenharia reversa:</strong> descompilar ou tentar obter o código-fonte da plataforma</li>
          <li><strong>Tentativas de invasão:</strong> explorar vulnerabilidades ou acessar áreas restritas</li>
          <li><strong>Compartilhamento de conta:</strong> compartilhar credenciais com pessoas não cadastradas</li>
          <li><strong>Abuso de infraestrutura:</strong> requisições automatizadas em volume excessivo</li>
          <li><strong>Revenda não autorizada:</strong> sublicenciar o acesso sem autorização expressa</li>
          <li><strong>Violação das políticas do WhatsApp:</strong> uso da integração em desacordo com os Termos do WhatsApp Business da Meta</li>
        </ul>

        <h2>8. WhatsApp Business: Responsabilidades</h2>
        <p>
          A integração opera via API oficial do WhatsApp Business da Meta. O usuário é o titular da conta WhatsApp Business conectada e responsável pelo seu uso. O usuário deve respeitar as Políticas da Meta, obter consentimento dos contatos e garantir o uso correto dos templates. O Trativa não se responsabiliza por bloqueios ou penalidades impostas pela Meta por uso indevido.
        </p>

        <h2>9. Responsabilidade sobre Dados de Leads</h2>
        <p>
          Ao cadastrar leads, o usuário (cliente do Trativa) atua como controlador dos dados de seus contatos comerciais. O usuário é inteiramente responsável por possuir base legal adequada, informar os titulares e atender solicitações de direitos.
        </p>

        <h2>10. Planos e Assinaturas</h2>
        <table>
          <thead>
            <tr><th>Plano</th><th>Preço/mês</th><th>Usuários</th><th>Leads</th></tr>
          </thead>
          <tbody>
            <tr><td>Starter</td><td>R$ 49,00</td><td>2</td><td>200</td></tr>
            <tr><td>Básico</td><td>R$ 97,00</td><td>3</td><td>500</td></tr>
            <tr><td>Pro</td><td>R$ 197,00</td><td>5</td><td>2.000</td></tr>
            <tr><td>Business</td><td>R$ 397,00</td><td>20</td><td>Ilimitado</td></tr>
          </tbody>
        </table>
        <p>
          Os pagamentos são processados pela plataforma Stripe. O Trativa não armazena dados de cartão de crédito. A assinatura é cobrada mensalmente de forma recorrente.
        </p>

        <h2>11. Período de Avaliação Gratuita (Trial)</h2>
        <p>
          Novos usuários têm 14 dias de acesso gratuito sem cartão de crédito. Ao término, sem contratação de plano pago, o acesso é suspenso. Não há cobrança automática ao término do trial.
        </p>

        <h2>12. Cancelamento</h2>
        <p>
          O cancelamento é realizado pelo proprietário via portal de gerenciamento de assinatura (Stripe Customer Portal) nas configurações de cobrança. Consulte nossa <a href="/cancelamento">Política de Cancelamento</a> para detalhes.
        </p>

        <h2>13. Suspensão ou Encerramento de Conta</h2>
        <p>
          O Trativa pode suspender ou encerrar uma conta por violação destes Termos, uso fraudulento, falha persistente no pagamento ou solicitação do próprio usuário. Em casos de violação grave, o encerramento pode ser imediato sem direito a reembolso.
        </p>

        <h2>14. Disponibilidade do Serviço</h2>
        <p>
          O Trativa envidará esforços razoáveis para manter a plataforma disponível. <strong>Não garantimos disponibilidade ininterrupta nem SLA específico</strong>, salvo contrato distinto formalizado por escrito.
        </p>

        <h2>15. Propriedade Intelectual</h2>
        <p>
          Todos os direitos relativos à plataforma Trativa — código, design, marcas, funcionalidades — são de titularidade exclusiva de <span className="placeholder">[INSERIR RAZÃO SOCIAL]</span>. Os dados inseridos pelo usuário permanecem de sua propriedade.
        </p>

        <h2>16. Limitação de Responsabilidade</h2>
        <p>
          O Trativa não se responsabiliza por danos indiretos ou consequentes. Nossa responsabilidade total está limitada ao valor pago nos 12 meses anteriores ao evento que originou a reclamação.
        </p>

        <h2>17. Privacidade e Dados</h2>
        <p>
          O tratamento de dados pessoais é descrito em nossa <a href="/privacidade">Política de Privacidade</a>, que faz parte integrante destes Termos.
        </p>

        <h2>18. Alterações nos Termos</h2>
        <p>
          Podemos alterar estes Termos a qualquer momento com aviso prévio. O uso continuado após as alterações implica aceitação.
        </p>

        <h2>19. Lei Aplicável e Foro</h2>
        <p>
          Estes Termos são regidos pelas leis brasileiras (Código Civil, CDC, Marco Civil da Internet e LGPD). As partes elegem o foro da comarca de <span className="placeholder">[INSERIR CIDADE/ESTADO]</span> para dirimir controvérsias.
        </p>

        <h2>20. Contato</h2>
        <p>
          <strong>E-mail:</strong> <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span>
        </p>

      </div>
    </LegalPage>
  );
}
