import LegalPage from '../LegalPage';

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" lastUpdated="[INSERIR DATA DE PUBLICAÇÃO]">
      <div className="legal-content">

        <blockquote>
          <strong>Aviso:</strong> Este documento contém marcações <span className="placeholder">[INSERIR...]</span> que devem ser preenchidas com as informações reais da empresa antes da publicação definitiva. Recomenda-se revisão por advogado especializado.
        </blockquote>

        <h2>1. Quem Somos</h2>
        <p>
          <span className="placeholder">[INSERIR RAZÃO SOCIAL]</span>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº <span className="placeholder">[INSERIR CNPJ]</span>, com sede em <span className="placeholder">[INSERIR ENDEREÇO COMPLETO]</span>, operadora da plataforma denominada comercialmente <strong>Trativa</strong>, acessível em <code>app.trativa.com.br</code>.
        </p>
        <p>
          O Trativa é uma plataforma de gestão de leads desenvolvida para equipes comerciais brasileiras.
        </p>

        <h2>2. Escopo desta Política</h2>
        <p>
          Esta Política descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos os dados pessoais dos usuários da plataforma e dos leads cadastrados por esses usuários.
        </p>
        <p>
          Ao criar uma conta ou utilizar qualquer funcionalidade do Trativa, você declara ter lido e concordado com esta Política.
        </p>

        <h2>3. Dados que Coletamos</h2>

        <h3>3.1 Dados fornecidos no cadastro</h3>
        <ul>
          <li>Nome completo do usuário</li>
          <li>Endereço de e-mail (identificador único; não pode ser alterado após o cadastro)</li>
          <li>Senha (armazenada exclusivamente como hash criptográfico — nunca em texto simples)</li>
          <li>Nome da empresa ou organização</li>
          <li>Telefone, cidade, estado e segmento de mercado (campos opcionais)</li>
        </ul>

        <h3>3.2 Dados inseridos pelos usuários sobre seus leads</h3>
        <p>
          Os usuários podem cadastrar informações sobre seus contatos comerciais. Esses dados são inseridos e controlados pelo próprio usuário e podem incluir: nome, telefone, e-mail, Instagram, website, cidade, estado, segmento, origem, status no pipeline, notas e campos personalizados.
        </p>
        <p>
          <strong>O usuário (cliente do Trativa) é o responsável pela legalidade dos dados que insere sobre seus leads.</strong>
        </p>

        <h3>3.3 Dados de mensagens WhatsApp</h3>
        <p>
          Ao usar a integração WhatsApp Cloud API da Meta, o sistema armazena: números de telefone do remetente e destinatário, conteúdo de mensagens, templates utilizados, status de entrega e o payload completo recebido do webhook da Meta.
        </p>

        <h3>3.4 Dados técnicos coletados automaticamente</h3>
        <ul>
          <li>Endereço IP de origem de cada ação registrada no log de auditoria</li>
          <li>User-agent (navegador e sistema operacional)</li>
          <li>Timestamps das ações realizadas na plataforma</li>
          <li>Logs de erros coletados por ferramenta de monitoramento (Sentry)</li>
        </ul>

        <h2>4. Cookies e Tecnologias Semelhantes</h2>
        <table>
          <thead>
            <tr>
              <th>Tecnologia</th>
              <th>Nome</th>
              <th>Finalidade</th>
              <th>Validade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cookie HTTP</td>
              <td><code>refreshToken</code></td>
              <td>Manter sessão autenticada (JWT)</td>
              <td>7 dias</td>
            </tr>
            <tr>
              <td>sessionStorage</td>
              <td><code>leads_access_token</code></td>
              <td>Token de acesso de curta duração</td>
              <td>~15 minutos</td>
            </tr>
            <tr>
              <td>localStorage</td>
              <td>Preferências de UI</td>
              <td>Tema, layout, modo de visualização</td>
              <td>Indefinida</td>
            </tr>
          </tbody>
        </table>
        <p>
          O cookie <code>refreshToken</code> é estritamente necessário para a funcionalidade de autenticação. Ele é definido com atributo <code>httpOnly</code> (não acessível por JavaScript) e não é utilizado para rastreamento ou fins publicitários.
        </p>

        <h2>5. Finalidades do Tratamento</h2>
        <ul>
          <li>Criar e autenticar sua conta</li>
          <li>Enviar e-mails de verificação, recuperação de senha e convites</li>
          <li>Gerenciar assinatura e cobranças via Stripe</li>
          <li>Enviar notificações sobre o plano (trial expirando, falha de pagamento)</li>
          <li>Processar operações de leads e mensagens WhatsApp</li>
          <li>Registrar ações para fins de auditoria e segurança</li>
          <li>Monitorar erros técnicos da plataforma</li>
          <li>Cumprir obrigações legais e regulatórias</li>
        </ul>

        <h2>6. Bases Legais (LGPD)</h2>
        <ul>
          <li><strong>Execução de contrato</strong> (Art. 7º, V): autenticação, gestão de leads, WhatsApp, cobrança</li>
          <li><strong>Legítimo interesse</strong> (Art. 7º, IX): logs de auditoria, segurança, monitoramento de erros</li>
          <li><strong>Consentimento</strong> (Art. 7º, I): aceite dos Termos e desta Política no cadastro</li>
          <li><strong>Cumprimento de obrigação legal</strong> (Art. 7º, II): quando exigido por lei</li>
        </ul>

        <h2>7. Compartilhamento com Terceiros</h2>
        <p>Não vendemos seus dados. Compartilhamos com os seguintes provedores:</p>

        <h3>Stripe (Pagamentos)</h3>
        <p>E-mail e nome da organização para processamento de cobranças. Dados de cartão gerenciados diretamente pelo Stripe. Localização: EUA.</p>

        <h3>Meta / WhatsApp Cloud API (Mensagens)</h3>
        <p>Números de telefone, conteúdo de mensagens e templates para envio/recebimento via WhatsApp Business. Localização: EUA.</p>

        <h3>Resend (E-mail Transacional)</h3>
        <p>E-mail e nome do destinatário para envio de e-mails transacionais. Remetente: <code>noreply@mail.trativa.app</code>. Localização: EUA (inferido).</p>

        <h3>MongoDB (Banco de Dados)</h3>
        <p>Armazenamento de todos os dados do sistema. Localização: conforme configuração do MongoDB Atlas.</p>

        <h3>Sentry (Monitoramento de Erros)</h3>
        <p>Logs de erros JavaScript, podendo incluir informações técnicas como IP e dados de sessão (<code>sendDefaultPii</code> habilitado). Localização: EUA.</p>

        <h2>8. Transferência Internacional de Dados</h2>
        <p>
          Os provedores Stripe, Meta, Resend e Sentry operam nos EUA. Ao usar o Trativa, seus dados poderão ser transferidos e processados fora do Brasil. Adotamos medidas contratuais razoáveis para assegurar proteção adequada.
        </p>

        <h2>9. Segurança da Informação</h2>
        <p>Adotamos medidas técnicas e organizacionais razoáveis, incluindo:</p>
        <ul>
          <li>Senhas armazenadas como hash bcrypt (custo 12)</li>
          <li>Token Meta (WhatsApp) criptografado com AES-256-GCM</li>
          <li>Comunicações via HTTPS (TLS)</li>
          <li>Cookie de sessão com atributos <code>httpOnly</code> e <code>secure</code> em produção</li>
          <li>Controle de acesso por papéis (owner, admin, collaborator)</li>
          <li>Log de auditoria de ações críticas</li>
        </ul>
        <p>
          Nenhum sistema é absolutamente seguro. Em caso de incidente, tomaremos as medidas cabíveis e, quando aplicável, comunicaremos a ANPD e os titulares afetados.
        </p>

        <h2>10. Retenção dos Dados</h2>
        <p>
          Mantemos seus dados enquanto a conta estiver ativa. Após cancelamento, os dados são mantidos por <span className="placeholder">[DEFINIR PRAZO DE RETENÇÃO APÓS CANCELAMENTO]</span> antes da exclusão definitiva. Alguns dados podem ser mantidos pelo prazo necessário ao cumprimento de obrigações legais.
        </p>

        <h2>11. Exclusão dos Dados</h2>
        <p>
          O proprietário da conta pode excluí-la permanentemente em <strong>Configurações → Minha conta → Excluir minha conta</strong>. A exclusão pelo proprietário remove todos os dados da organização (leads, histórico, usuários) de forma irreversível.
        </p>
        <p>
          Para solicitações de exclusão fora da plataforma, entre em contato: <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span>.
        </p>

        <h2>12. Direitos dos Titulares (LGPD)</h2>
        <p>Você tem direito a: acesso, correção, portabilidade, eliminação, informação sobre compartilhamento, revogação de consentimento e oposição ao tratamento.</p>
        <p>
          Para exercer seus direitos, entre em contato: <span className="placeholder">[INSERIR E-MAIL DO ENCARREGADO/DPO]</span>.
        </p>

        <h2>13. Responsabilidade dos Clientes sobre Dados de Leads</h2>
        <p>
          O cliente do Trativa é responsável por garantir base legal para cadastrar e tratar os dados dos seus leads, informar os titulares sobre o tratamento quando necessário, e atender a eventuais solicitações de direitos desses titulares.
        </p>
        <p>
          O Trativa pode atuar como operadora dos dados de leads em relação ao cliente (que é o controlador). Este enquadramento requer confirmação jurídica especializada.
        </p>

        <h2>14. Crianças e Adolescentes</h2>
        <p>
          O Trativa é destinado exclusivamente ao uso empresarial e profissional. Não coletamos conscientemente dados de menores de 18 anos.
        </p>

        <h2>15. Alterações nesta Política</h2>
        <p>
          Notificaremos sobre alterações relevantes por e-mail ou aviso na plataforma. O uso continuado implica aceitação da versão atualizada.
        </p>

        <h2>16. Contato</h2>
        <p>
          <strong>E-mail de suporte:</strong> <span className="placeholder">[INSERIR E-MAIL DE SUPORTE]</span><br />
          <strong>Encarregado/DPO:</strong> <span className="placeholder">[INSERIR E-MAIL DO ENCARREGADO/DPO]</span><br />
          <strong>Endereço:</strong> <span className="placeholder">[INSERIR ENDEREÇO COMPLETO]</span>
        </p>

      </div>
    </LegalPage>
  );
}
