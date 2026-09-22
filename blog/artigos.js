/**
 * =============================================================
 *  ARQUIVO DE ARTIGOS - Amanda Reis Advocacia
 * =============================================================
 *
 *  COMO ADICIONAR UM NOVO ARTIGO:
 *  --------------------------------
 *  1. Copie um bloco { id:... } e cole ANTES do ultimo ];
 *     Coloque uma virgula apos o } do artigo anterior.
 *
 *  2. Preencha os campos:
 *     id        -> numero unico sequencial (1, 2, 3...)
 *     titulo    -> titulo do artigo
 *     categoria -> "Previdenciario", "Trabalhista", "Familia" ou "Eleitoral"
 *     data      -> "DD/MM/AAAA"
 *     resumo    -> texto curto para o card (1-2 frases)
 *     foto      -> caminho da imagem: "blog/imagens/nome.jpg"
 *                  deixe "" se nao tiver foto
 *     conteudo  -> HTML do artigo entre aspas duplas,
 *                  cada trecho separado por + (concatenacao)
 *
 *  COMO ADICIONAR A FOTO:
 *  --------------------------------
 *  - Coloque a imagem na pasta blog/imagens/
 *  - Tamanho recomendado: 1200 x 675 px
 *  - Escreva o caminho no campo foto: "blog/imagens/arquivo.jpg"
 *
 * =============================================================
 */

window.ARTIGOS = [

  {
    id: 1,
    titulo: "Como solicitar aposentadoria por tempo de contribuicao ao INSS",
    categoria: "Previdenciario",
    data: "10/01/2025",
    resumo: "Entenda os requisitos, documentos necessarios e os principais erros que levam ao indeferimento do beneficio.",
    foto: "blog/imagens/aposentadoria-inss.jpg",
    conteudo: "<p>A aposentadoria por tempo de contribuicao e um dos beneficios mais solicitados junto ao INSS, mas tambem um dos que mais sofrem indeferimentos por falta de documentacao adequada. Entender o processo pode evitar anos de espera desnecessaria.</p>" +
      "<h3>Quem tem direito?</h3>" +
      "<p>Para trabalhadores urbanos filiados ao RGPS ate a data da Reforma da Previdencia (13/11/2019), e possivel se aposentar com as regras de transicao previstas na EC 103/2019.</p>" +
      "<h3>Documentos necessarios</h3>" +
      "<ul>" +
      "<li>Documento de identidade com foto (RG ou CNH)</li>" +
      "<li>CPF</li>" +
      "<li>Carteira de Trabalho (todas as vias)</li>" +
      "<li>Carnes do INSS para autonomos</li>" +
      "<li>Comprovante de residencia atualizado</li>" +
      "<li>CNIS atualizado (extrato de contribuicoes)</li>" +
      "</ul>" +
      "<h3>Principais erros que levam ao indeferimento</h3>" +
      "<p>O INSS frequentemente nega beneficios por periodos de trabalho nao constantes no CNIS ou documentacao incompleta. Uma analise previa com advogada especializada pode identificar e corrigir essas falhas antes do requerimento.</p>" +
      "<h3>Quando acionar a Justica?</h3>" +
      "<p>Se o beneficio for indeferido administrativamente, e possivel recorrer judicialmente. A Dra. Amanda Reis possui experiencia em acoes previdenciarias e pode orientar o melhor caminho para seu caso.</p>"
  },

  {
    id: 2,
    titulo: "Assedio moral no trabalho: o que e, como provar e quais sao seus direitos",
    categoria: "Trabalhista",
    data: "18/01/2025",
    resumo: "Saiba identificar o assedio moral no ambiente de trabalho, como documentar e quais medidas juridicas estao disponiveis.",
    foto: "blog/imagens/assedio-moral.jpg",
    conteudo: "<p>O assedio moral no ambiente de trabalho e uma realidade enfrentada por muitos trabalhadores brasileiros. Caracterizado por condutas abusivas e repetitivas, ele pode causar serios danos a saude da vitima e gera direito a indenizacao.</p>" +
      "<h3>O que configura assedio moral?</h3>" +
      "<p>Para ser configurado, o assedio moral precisa ser repetitivo, intencional e lesivo a dignidade do trabalhador. Exemplos comuns:</p>" +
      "<ul>" +
      "<li>Humilhacoes publicas e criticas constantes sem fundamento</li>" +
      "<li>Exclusao deliberada de reunioes ou projetos</li>" +
      "<li>Sobrecarga de trabalho desproporcional</li>" +
      "<li>Ameacas veladas de demissao</li>" +
      "<li>Isolamento do colaborador pela equipe a pedido do gestor</li>" +
      "</ul>" +
      "<h3>Como documentar e provar</h3>" +
      "<p>A prova pode ser feita por mensagens, e-mails, testemunhas e laudos medicos. Quanto mais registros com data e descricao dos episodios, mais solida sera a acao judicial.</p>" +
      "<h3>Quais sao seus direitos?</h3>" +
      "<p>A vitima pode buscar indenizacao por dano moral e, dependendo do caso, rescisao indireta do contrato de trabalho com todas as verbas rescisorias.</p>"
  },

  {
    id: 3,
    titulo: "Guarda compartilhada: entenda como funciona na pratica",
    categoria: "Familia",
    data: "05/02/2025",
    resumo: "A guarda compartilhada e a regra no Brasil desde 2014, mas ainda gera muitas duvidas. Veja como ela funciona no dia a dia.",
    foto: "blog/imagens/guarda-compartilhada.jpg",
    conteudo: "<p>Desde a Lei 13.058/2014, a guarda compartilhada e a regra no Brasil, aplicada sempre que ambos os pais estiverem aptos a exercer o poder familiar.</p>" +
      "<h3>Guarda compartilhada nao e moradia alternada</h3>" +
      "<p>Na guarda compartilhada, as decisoes sobre a vida da crianca sao tomadas em conjunto pelos dois pais: escola, saude, religiao e viagens. A residencia principal costuma ser fixada em um dos lares.</p>" +
      "<h3>Quando pode ser afastada?</h3>" +
      "<p>O juiz pode afastar a guarda compartilhada em casos de violencia domestica, dependencia quimica grave ou situacao em que o compartilhamento seja prejudicial a crianca.</p>" +
      "<h3>Pensao alimenticia</h3>" +
      "<p>A guarda compartilhada nao elimina automaticamente a pensao alimenticia. Se houver diferenca de renda significativa entre os pais, o alimentante continuara pagando alimentos.</p>" +
      "<h3>Como formalizar?</h3>" +
      "<p>Com acordo entre os pais, a guarda pode ser formalizada em cartorio ou em juizo. Sem consenso, o juiz decide com base no melhor interesse da crianca.</p>"
  },

  {
    id: 4,
    titulo: "Crimes eleitorais: o que sao, quais as penalidades e como se defender",
    categoria: "Eleitoral",
    data: "09/04/2025",
    resumo: "Com as eleicoes municipais cada vez mais proximas, entender o que configura crime eleitoral e essencial para candidatos, cabos eleitorais e eleitores.",
    foto: "blog/imagens/crime-eleitoral-candidatura.jpg",
    conteudo: "<p>O direito eleitoral brasileiro e repleto de regras especificas que, quando violadas, podem gerar desde multas ate a cassacao do mandato ou registro de candidatura. Conhecer essas normas e fundamental para quem atua ou pretende atuar na politica.</p>" +
      "<h3>O que e considerado crime eleitoral?</h3>" +
      "<p>Os crimes eleitorais estao previstos principalmente no Codigo Eleitoral (Lei 4.737/1965) e legislacoes complementares. Os mais comuns sao:</p>" +
      "<ul>" +
      "<li>Compra de votos (captacao ilicita de sufragio) — art. 41-A da Lei 9.504/97</li>" +
      "<li>Propaganda eleitoral antecipada ou irregular</li>" +
      "<li>Uso da maquina publica em beneficio de candidato</li>" +
      "<li>Abuso de poder economico ou politico</li>" +
      "<li>Transporte ilegal de eleitores no dia da eleicao</li>" +
      "<li>Falsidade ideologica eleitoral</li>" +
      "</ul>" +
      "<h3>Quais as penalidades?</h3>" +
      "<p>As sancoes variam conforme a gravidade da conduta. Podem incluir multa, detenção ou reclusa, inelegibilidade por ate 8 anos e cassacao do registro ou diploma do candidato. Nos casos de abuso de poder, a acao pode tramitar na Justica Eleitoral mesmo apos a posse.</p>" +
      "<h3>Como o acusado pode se defender?</h3>" +
      "<p>A defesa em processos eleitorais exige agilidade: os prazos sao muito mais curtos do que na Justica comum. E essencial contar com advogada especializada em direito eleitoral desde o primeiro momento da notificacao ou investigacao. A Dra. Amanda Reis atua na defesa de candidatos, partidos e filiados em todas as fases do processo eleitoral.</p>"
  },

  {
    id: 5,
    titulo: "Divorcio e partilha de bens: tudo o que voce precisa saber antes de decidir",
    categoria: "Familia",
    data: "23/04/2025",
    resumo: "O fim de um casamento envolve decisoes que impactam o futuro financeiro e familiar de toda a familia. Entenda seus direitos antes de assinar qualquer documento.",
    foto: "blog/imagens/divorcio-partilha-bens.jpg",
    conteudo: "<p>O divorcio e um momento delicado que envolve muito mais do que a dissolucao do vinculo conjugal. A partilha de bens, a guarda dos filhos, os alimentos e a questao do nome sao temas que precisam ser tratados com cuidado juridico e emocional.</p>" +
      "<h3>Divorcio consensual x litigioso</h3>" +
      "<p>No divorcio consensual, ambos os conjuges concordam com os termos da separacao. Sem filhos menores ou incapazes, e possivel fazer diretamente em cartorio, com mais rapidez e menos custo. Ja o divorcio litigioso ocorre quando ha conflito sobre guarda, alimentos ou partilha e precisa ser resolvido pela Justica.</p>" +
      "<h3>Como funciona a partilha de bens?</h3>" +
      "<p>O regime de bens escolhido no casamento define o que sera partilhado:</p>" +
      "<ul>" +
      "<li><strong>Comunhao parcial</strong> (regime padrao): dividem-se os bens adquiridos durante o casamento</li>" +
      "<li><strong>Comunhao universal</strong>: divide-se praticamente tudo, inclusive bens anteriores ao casamento</li>" +
      "<li><strong>Separacao de bens</strong>: cada conjuge fica com o que e seu, mas pode haver excecoes</li>" +
      "<li><strong>Participacao final nos aquestos</strong>: regime intermediario, menos comum</li>" +
      "</ul>" +
      "<h3>E os bens que estao no nome de apenas um dos conjuges?</h3>" +
      "<p>No regime de comunhao parcial, bens adquiridos durante o casamento sao de ambos, mesmo que estejam registrados apenas em um nome. Por isso, e importante fazer um levantamento completo antes de qualquer acordo.</p>" +
      "<h3>Por que ter acompanhamento juridico?</h3>" +
      "<p>Acordos feitos sem orientacao profissional frequentemente prejudicam uma das partes — especialmente quando ha imoveis, investimentos, dividas ou participacao em empresas envolvidos. A Dra. Amanda Reis orienta e representa clientes em todas as etapas do divorcio, garantindo que seus direitos sejam respeitados.</p>"
  },

  {
    id: 6,
    titulo: "Rescisao indireta: quando e possivel pedir demissao e receber como se fosse demitido",
    categoria: "Trabalhista",
    data: "30/04/2025",
    resumo: "Poucas pessoas conhecem esse direito, mas ele existe: o trabalhador pode romper o contrato por culpa do empregador e ainda receber todas as verbas rescisorias.",
    foto: "blog/imagens/rescisao-contrato-trabalho.jpg",
    conteudo: "<p>A rescisao indireta, prevista no art. 483 da CLT, e o direito do empregado de encerrar o contrato de trabalho quando o empregador descumpre suas obrigacoes legais ou contratuais — e ainda receber como se tivesse sido demitido sem justa causa.</p>" +
      "<h3>O que pode gerar rescisao indireta?</h3>" +
      "<ul>" +
      "<li>Nao pagamento de salarios ou beneficios</li>" +
      "<li>Assedio moral ou tratamento degradante</li>" +
      "<li>Exigencia de servicos superiores as forcas do empregado</li>" +
      "<li>Perigo manifesto de mal consideravel (risco a saude ou seguranca)</li>" +
      "<li>Descumprimento das obrigacoes do contrato pelo empregador</li>" +
      "<li>Reducao unilateral do salario ou mudanca das condicoes de trabalho</li>" +
      "</ul>" +
      "<h3>O que o trabalhador recebe?</h3>" +
      "<p>Na rescisao indireta, o empregado tem direito a todas as verbas rescisorias de uma demissao sem justa causa: saldo de salario, aviso previo indenizado, 13o proporcional, ferias proporcionais + 1/3, multa de 40% sobre o FGTS e saque do FGTS, alem do seguro-desemprego.</p>" +
      "<h3>Como acionar esse direito?</h3>" +
      "<p>A rescisao indireta deve ser pleiteada na Justica do Trabalho. E fundamental nao pedir demissao antes de ajuizar a acao — a ordem dos atos importa juridicamente. A orientacao de uma advogada trabalhista antes de qualquer movimento e indispensavel para nao perder direitos. Entre em contato com o escritorio da Dra. Amanda Reis para uma avaliacao do seu caso.</p>"
  },

  {
    id: 7,
    titulo: "Aposentadoria por invalidez: quem tem direito e como requerer ao INSS",
    categoria: "Previdenciario",
    data: "07/05/2025",
    resumo: "A aposentadoria por invalidez garante renda ao trabalhador que fica permanentemente incapaz de exercer qualquer atividade. Saiba como solicitar e evitar indeferimentos.",
    foto: "blog/imagens/aposentadoria-invalidez.png",
    conteudo: "<p>A aposentadoria por invalidez, atualmente denominada <strong>aposentadoria por incapacidade permanente</strong> apos a Reforma da Previdencia (EC 103/2019), e concedida ao segurado que se torna total e definitivamente incapaz para o trabalho.</p>" +
      "<h3>Quem tem direito?</h3>" +
      "<p>O trabalhador precisa estar em dia com as contribuicoes ao INSS e comprovar, por pericia medica federal, que a incapacidade e permanente e insuscetivel de reabilitacao para qualquer atividade laborativa. Em geral, exige-se 12 meses de carencia — exceto nos casos de acidente de trabalho ou doencas listadas em portaria especifica, que dispensam carencia.</p>" +
      "<h3>Qual o valor do beneficio?</h3>" +
      "<p>Pela regra atual, o beneficio corresponde a <strong>60% da media dos salarios de contribuicao</strong>, acrescido de 2% por ano de contribuicao que exceder 20 anos para homens e 15 anos para mulheres. Segurados que necessitam de assistencia permanente de terceiros recebem adicional de 25%.</p>" +
      "<h3>Documentos essenciais</h3>" +
      "<ul>" +
      "<li>Laudos, exames e historico medico atualizados</li>" +
      "<li>Carteira de Trabalho e CNIS</li>" +
      "<li>Documento de identidade e CPF</li>" +
      "<li>Relatorio do medico assistente detalhando o diagnostico e o prognostico</li>" +
      "</ul>" +
      "<h3>O que fazer em caso de indeferimento?</h3>" +
      "<p>O INSS pode negar o beneficio alegando capacidade residual ou carencia insuficiente. Nesses casos, e possivel recorrer administrativamente ou ajuizar acao na Justica Federal. A Dra. Amanda Reis atua em casos previdenciarios e pode avaliar se o indeferimento foi correto ou se ha fundamento para recurso ou acao judicial.</p>"
  },

  {
    id: 8,
    titulo: "Alienacao parental: como identificar, provar e proteger seu filho",
    categoria: "Familia",
    data: "14/05/2025",
    resumo: "A alienacao parental e uma forma de violencia psicologica contra a crianca e contra o genitor afastado. Entenda o que diz a lei e como agir juridicamente.",
    foto: "blog/imagens/alienacao-parental.png",
    conteudo: "<p>A alienacao parental ocorre quando um dos genitores — ou qualquer pessoa que tenha a guarda da crianca — interfere na relacao da crianca com o outro genitor, prejudicando o vinculo afetivo de forma deliberada. No Brasil, o tema e regulado pela <strong>Lei 12.318/2010</strong>.</p>" +
      "<h3>O que caracteriza alienacao parental?</h3>" +
      "<p>A lei lista exemplos de condutas que configuram alienacao parental:</p>" +
      "<ul>" +
      "<li>Dificultar o contato da crianca com o outro genitor sem justificativa</li>" +
      "<li>Apresentar falsa denuncia de abuso para obstar a convivencia</li>" +
      "<li>Mudar de domicilio sem comunicacao previa para dificultar o regime de visitas</li>" +
      "<li>Monitorar a comunicacao da crianca com o outro genitor</li>" +
      "<li>Fazer a crianca se sentir culpada por gostar do outro genitor</li>" +
      "</ul>" +
      "<h3>Quais as consequencias juridicas?</h3>" +
      "<p>O juiz pode, a qualquer tempo, determinar medidas como advertencia ao alienador, ampliacao do regime de convivencia do genitor prejudicado, fixacao de multa, acompanhamento psicologico obrigatorio e, em casos graves, alteracao da guarda ou suspensao da autoridade parental.</p>" +
      "<h3>Como provar?</h3>" +
      "<p>A prova pode ser feita por laudos psicologicos, depoimentos de testemunhas, prints de mensagens, registros de descumprimento de visitas e relatos da propria crianca colhidos por profissional habilitado. Quanto antes se documentar as situacoes, melhor para a defesa dos direitos da crianca e do genitor prejudicado.</p>" +
      "<h3>Como agir?</h3>" +
      "<p>Se voce suspeita de alienacao parental, procure orientacao juridica imediatamente. A Dra. Amanda Reis atua em casos de guarda, visitas e alienacao parental, oferecendo suporte tecnico e humanizado para proteger o melhor interesse da crianca.</p>"
  },

  {
    id: 9,
    titulo: "Candidatura laranja: o que e, quais os riscos e como o TSE fiscaliza",
    categoria: "Eleitoral",
    data: "21/05/2025",
    resumo: "A candidatura laranja e considerada fraude eleitoral e pode gerar cassacao, multa e inelegibilidade. Entenda como o tema e tratado pela Justica Eleitoral.",
    foto: "blog/imagens/candidatura-laranja.png",
    conteudo: "<p>A chamada <strong>candidatura laranja</strong> e uma pratica fraudulenta em que partidos lancam candidatos — geralmente mulheres — sem real intencao de campanha, apenas para cumprir a cota de genero exigida pela legislacao eleitoral. O tema ganhou destaque apos o TSE endurecer a fiscalizacao nos ultimos ciclos eleitorais.</p>" +
      "<h3>O que diz a lei?</h3>" +
      "<p>A Lei 9.504/97 determina que cada partido reserve no <strong>minimo 30% das candidaturas para mulheres</strong>. A candidatura laranja surge quando esse percentual e preenchido de forma ficticia, sem que a candidata participe efetivamente da campanha ou receba recursos do fundo partidario.</p>" +
      "<h3>Quais as consequencias?</h3>" +
      "<p>O TSE e os TREs podem:</p>" +
      "<ul>" +
      "<li>Cassar o registro de todos os candidatos do partido na circunscricao</li>" +
      "<li>Determinar a devolucao do fundo eleitoral recebido</li>" +
      "<li>Responsabilizar dirigentes partidarios por abuso de poder</li>" +
      "<li>Aplicar multas e gerar inelegibilidade futura</li>" +
      "</ul>" +
      "<h3>Como o TSE identifica?</h3>" +
      "<p>A Justica Eleitoral cruza dados de prestacao de contas, movimentacao financeira das candidatas, tempo de propaganda e presenca em eventos. Candidatas que nao receberam recursos, nao fizeram campanha e tiveram votacao zerada ou insignificante entram no radar da fiscalizacao automaticamente.</p>" +
      "<h3>E quem foi candidata sem saber que era laranja?</h3>" +
      "<p>Casos existem em que pessoas sao incluidas em chapas sem pleno conhecimento das implicacoes. Mesmo assim, o risco juridico existe. Se voce se encontra nessa situacao ou foi notificada pela Justica Eleitoral, e essencial buscar orientacao especializada com urgencia. A Dra. Amanda Reis atua na defesa em processos eleitorais em todas as instancias.</p>"
  },

  {
    id: 10,
    titulo: "Auxilio-doenca: quando o INSS e obrigado a pagar e como evitar o indeferimento",
    categoria: "Previdenciario",
    data: "28/05/2025",
    resumo: "O auxilio-doenca e um dos beneficios mais negados pelo INSS. Entenda os requisitos, como se preparar para a pericia e o que fazer se for indeferido.",
    foto: "blog/imagens/auxilio-doenca.png",
    conteudo: "<p>O auxilio-doenca — atualmente chamado de <strong>beneficio por incapacidade temporaria</strong> apos a Reforma da Previdencia — e devido ao segurado que fica temporariamente incapaz de trabalhar por motivo de doenca ou acidente. Apesar de ser um direito claro, o indeferimento e um dos mais frequentes na pratica do INSS.</p>" +
      "<h3>Quem tem direito?</h3>" +
      "<p>Para receber o beneficio, o segurado precisa cumprir tres requisitos basicos: estar em dia com as contribuicoes ao INSS, ter cumprido a carencia de 12 meses (exceto nos casos de acidente ou doencas listadas em portaria que dispensam carencia) e comprovar a incapacidade por pericia medica federal.</p>" +
      "<h3>Como e feita a pericia?</h3>" +
      "<p>A pericia e realizada por medico do proprio INSS. O segurado deve levar todos os laudos, exames e relatorios medicos atualizados, com descricao clara do diagnostico (CID), evolucao da doenca e estimativa de afastamento. Documentacao incompleta e a principal causa de indeferimento.</p>" +
      "<h3>E se o beneficio for indeferido ou cortado?</h3>" +
      "<p>E possivel recorrer administrativamente pelo portal Meu INSS ou ajuizar acao na Justica Federal. Em muitos casos, a pericia judicial reverte o resultado da pericia administrativa. A Dra. Amanda Reis atua em recursos e acoes previdenciarias para garantir o beneficio a quem tem direito.</p>"
  },

  {
    id: 11,
    titulo: "Horas extras nao pagas: como calcular, provar e cobrar na Justica do Trabalho",
    categoria: "Trabalhista",
    data: "04/06/2025",
    resumo: "Muitos trabalhadores fazem horas extras sem receber o adicional correto. Saiba como calcular o valor devido, quais provas reunir e como acionar a Justica.",
    foto: "blog/imagens/horas-extras.png",
    conteudo: "<p>A nao remuneracao de horas extras e uma das irregularidades trabalhistas mais comuns no Brasil — e tambem uma das mais cobradas na Justica do Trabalho. O trabalhador que ficou sem receber pode buscar esses valores retroativamente por ate dois anos apos o fim do contrato.</p>" +
      "<h3>O que sao horas extras?</h3>" +
      "<p>E toda hora trabalhada alem da jornada contratual ou do limite legal de 8 horas diarias e 44 horas semanais. O adicional minimo e de <strong>50% sobre o valor da hora normal</strong>, podendo ser maior se o contrato ou a convencao coletiva prever.</p>" +
      "<h3>Como calcular?</h3>" +
      "<p>Divida o salario mensal por 220 (horas mensais padrao) para obter o valor da hora normal. Multiplique por 1,5 (ou pelo percentual cabivel) para obter o valor da hora extra. Multiplique pelo numero de horas nao pagas e chegara ao total devido — acrescido de reflexos em ferias, 13o, FGTS e descanso semanal remunerado.</p>" +
      "<h3>Como provar?</h3>" +
      "<p>Cartoes de ponto, e-mails fora do horario, mensagens de WhatsApp, registros de acesso ao sistema e testemunhas sao as principais formas de prova. Se o empregador nao tiver controle de jornada (obrigatorio para empresas com mais de 20 empregados), a jornada alegada pelo trabalhador pode ser presumida verdadeira.</p>" +
      "<h3>Como cobrar?</h3>" +
      "<p>A acao deve ser ajuizada na Vara do Trabalho da cidade onde o empregado prestou servicos. O prazo e de ate 2 anos apos o fim do contrato, com direito de cobrar os ultimos 5 anos do periodo trabalhado. A Dra. Amanda Reis pode avaliar seu caso e estimar os valores a receber antes mesmo de ajuizar a acao.</p>"
  },

  {
    id: 12,
    titulo: "Uniao estavel: direitos, reconhecimento e diferencas em relacao ao casamento",
    categoria: "Familia",
    data: "11/06/2025",
    resumo: "A uniao estavel garante direitos semelhantes ao casamento, mas existem diferencas importantes. Entenda como reconhecer, comprovar e proteger essa relacao juridicamente.",
    foto: "blog/imagens/uniao-estavel.png",
    conteudo: "<p>A uniao estavel e reconhecida pela Constituicao Federal como entidade familiar e garante uma serie de direitos ao casal — mas ainda existem diferencas relevantes em relacao ao casamento civil que todo companheiro precisa conhecer.</p>" +
      "<h3>O que caracteriza uniao estavel?</h3>" +
      "<p>Segundo o Codigo Civil, a uniao estavel e a convivencia publica, continua e duradoura entre duas pessoas, com o objetivo de constituir familia. Nao ha prazo minimo definido em lei — o que importa e a intencao do casal e as circunstancias da relacao.</p>" +
      "<h3>Quais os principais direitos?</h3>" +
      "<ul>" +
      "<li>Direito a heranca (com algumas diferencas em relacao ao casamento, dependendo do regime de bens)</li>" +
      "<li>Direito a partilha dos bens adquiridos durante a uniao (regime padrao: comunhao parcial)</li>" +
      "<li>Direito a alimentos em caso de dissolucao</li>" +
      "<li>Inclusao como dependente em plano de saude e previdencia</li>" +
      "<li>Direito a pensao por morte junto ao INSS</li>" +
      "</ul>" +
      "<h3>Como comprovar a uniao estavel?</h3>" +
      "<p>A prova pode ser feita por contrato de uniao estavel lavrado em cartorio, declaracao de imposto de renda com dependente, contas conjuntas, correspondencias no mesmo endereco e testemunhas. O contrato em cartorio e a forma mais segura de formalizar a relacao e definir o regime de bens.</p>" +
      "<h3>Por que formalizar?</h3>" +
      "<p>Sem formalizacao, eventuais conflitos sobre heranca, partilha e alimentos precisam ser resolvidos na Justica, com mais custo e incerteza. A Dra. Amanda Reis orienta casais na elaboracao de contratos de uniao estavel e na defesa de direitos em caso de dissolucao.</p>"
  },

  {
    id: 13,
    titulo: "Propaganda eleitoral antecipada: o que e permitido e o que pode gerar multa ou cassacao",
    categoria: "Eleitoral",
    data: "18/06/2025",
    resumo: "Com as eleicoes de 2026 no radar, candidatos e partidos ja precisam estar atentos: propaganda antecipada e uma das infrações eleitorais mais comuns e pode custar caro.",
    foto: "blog/imagens/propaganda-eleitoral-antecipada.png",
    conteudo: "<p>A propaganda eleitoral no Brasil so pode ser feita a partir de <strong>15 de agosto do ano eleitoral</strong>, conforme o art. 36 da Lei 9.504/97. Antes disso, qualquer ato que configure pedido explicito de voto ou promova candidatura de forma vedada pode ser enquadrado como propaganda eleitoral antecipada.</p>" +
      "<h3>O que e permitido antes do periodo eleitoral?</h3>" +
      "<p>A lei permite manifestacoes de filiacao partidaria, mencao a possiveis candidaturas de forma nao ostensiva, participacao em eventos publicos com finalidade nao eleitoral e publicacao de realizacoes de mandatos em exercicio — desde que sem pedido de voto.</p>" +
      "<h3>O que e vedado?</h3>" +
      "<ul>" +
      "<li>Pedido explicito de voto antes do periodo permitido</li>" +
      "<li>Distribuicao de brindes, camisetas ou material com nome e foto do candidato</li>" +
      "<li>Uso de outdoors, carros de som ou panfletagem com fins eleitorais</li>" +
      "<li>Impulsionamento pago de publicacoes em redes sociais com cunho eleitoral</li>" +
      "<li>Eventos patrocinados por candidatos com distribuicao de beneficios</li>" +
      "</ul>" +
      "<h3>Quais as consequencias?</h3>" +
      "<p>A propaganda antecipada pode gerar multa de R$ 5.000 a R$ 25.000 por irregularidade, alem de representacao perante a Justica Eleitoral. Em casos graves envolvendo abuso de poder economico, pode resultar em inelegibilidade ou cassacao do registro de candidatura.</p>" +
      "<h3>Como se proteger?</h3>" +
      "<p>Candidatos e pre-candidatos devem submeter suas acoes de comunicacao a analise juridica antes de publicar ou distribuir qualquer material. A Dra. Amanda Reis assessora candidatos e partidos em compliance eleitoral, evitando infrações que possam comprometer a candidatura.</p>"
  },

  {
    id: 14,
    titulo: "Pensao por morte do INSS: quem tem direito e como solicitar o beneficio",
    categoria: "Previdenciario",
    data: "29/06/2026",
    resumo: "A pensao por morte garante renda aos dependentes do segurado falecido, mas as regras de calculo e duracao mudaram apos a Reforma da Previdencia. Saiba quem tem direito e como evitar o indeferimento.",
    foto: "blog/imagens/pensao-por-morte-inss.jpg",
    conteudo: "<p>A pensao por morte e o beneficio pago aos dependentes do segurado do INSS que falece, esteja ele aposentado ou em atividade. Apos a Reforma da Previdencia (EC 103/2019), o calculo do valor e o tempo de duracao do beneficio mudaram, o que ainda gera muitas duvidas entre as familias.</p>" +
      "<h3>Quem sao os dependentes?</h3>" +
      "<p>A lei divide os dependentes em classes, sendo que a existencia de dependentes de uma classe exclui as demais:</p>" +
      "<ul>" +
      "<li>Conjuge ou companheiro(a), inclusive em uniao estavel</li>" +
      "<li>Filhos menores de 21 anos ou invalidos</li>" +
      "<li>Pais, quando comprovada a dependencia economica</li>" +
      "<li>Irmaos menores de 21 anos ou invalidos, na ausencia dos anteriores</li>" +
      "</ul>" +
      "<h3>Como e calculado o valor?</h3>" +
      "<p>Desde a reforma, a pensao corresponde a <strong>50% do valor da aposentadoria do segurado, acrescido de 10% por dependente habilitado</strong>, ate o limite de 100% para cinco ou mais dependentes. Para conjuges e companheiros, a duracao do beneficio varia conforme a idade na data do obito e o tempo de uniao ou casamento.</p>" +
      "<h3>Documentos necessarios</h3>" +
      "<ul>" +
      "<li>Certidao de obito</li>" +
      "<li>Documentos pessoais do segurado e dos dependentes</li>" +
      "<li>Certidao de casamento ou comprovantes de uniao estavel</li>" +
      "<li>CNIS do segurado falecido</li>" +
      "</ul>" +
      "<h3>O que fazer em caso de indeferimento?</h3>" +
      "<p>O INSS costuma negar o beneficio quando a uniao estavel nao esta formalizada ou quando faltam provas da dependencia economica. Nesses casos, e possivel recorrer administrativamente ou ajuizar acao na Justica Federal. A Dra. Amanda Reis orienta familias na solicitacao e na defesa judicial da pensao por morte.</p>"
  },

  {
    id: 15,
    titulo: "Demissao por justa causa: quando e valida e como o trabalhador pode se defender",
    categoria: "Trabalhista",
    data: "06/07/2026",
    resumo: "A demissao por justa causa retira diversos direitos do trabalhador e so pode ser aplicada em hipoteses previstas em lei. Entenda os motivos validos e como contestar uma justa causa aplicada de forma indevida.",
    foto: "blog/imagens/justa-causa-trabalho.jpg",
    conteudo: "<p>A demissao por justa causa e a penalidade mais grave prevista na CLT para o empregado e so pode ser aplicada em hipoteses taxativamente listadas em lei. Aplicada de forma indevida, ela pode e deve ser contestada na Justica do Trabalho.</p>" +
      "<h3>Quais sao os motivos previstos em lei?</h3>" +
      "<p>O art. 482 da CLT lista as hipoteses de justa causa, entre elas:</p>" +
      "<ul>" +
      "<li>Improbidade (desonestidade, furto, fraude)</li>" +
      "<li>Incontinencia de conduta ou mau procedimento</li>" +
      "<li>Desidia no desempenho das funcoes</li>" +
      "<li>Embriaguez habitual ou em servico</li>" +
      "<li>Indisciplina ou insubordinacao</li>" +
      "<li>Abandono de emprego</li>" +
      "<li>Ato lesivo a honra ou a boa fama praticado contra o empregador ou colegas</li>" +
      "</ul>" +
      "<h3>O que o trabalhador perde com a justa causa?</h3>" +
      "<p>Ao contrario da demissao sem justa causa, o empregado demitido por justa causa nao recebe aviso previo, 13o proporcional, ferias proporcionais, multa de 40% do FGTS, nem tem acesso ao saque do FGTS ou ao seguro-desemprego. Mantem apenas o saldo de salario e as ferias vencidas, se houver.</p>" +
      "<h3>Como contestar uma justa causa indevida?</h3>" +
      "<p>Cabe ao empregador provar a falta grave cometida pelo empregado, com testemunhas e documentos que comprovem a conduta e sua gravidade. Quando a justa causa e aplicada sem provas solidas ou de forma desproporcional, e possivel ajuizar acao trabalhista para reverte-la em demissao sem justa causa, com direito a todas as verbas rescisorias.</p>" +
      "<h3>Como agir?</h3>" +
      "<p>Se voce foi demitido por justa causa e acredita que a penalidade foi aplicada de forma injusta, procure orientacao juridica o quanto antes. A Dra. Amanda Reis avalia o caso e atua na reversao judicial de justas causas aplicadas indevidamente.</p>"
  },

  {
    id: 16,
    titulo: "Pensao alimenticia: como e definido o valor e o que fazer em caso de atraso",
    categoria: "Familia",
    data: "13/07/2026",
    resumo: "A pensao alimenticia e um direito da crianca e um dever legal dos pais. Entenda como o valor e calculado e quais medidas podem ser tomadas quando o pagamento atrasa.",
    foto: "blog/imagens/pensao-alimenticia.jpg",
    conteudo: "<p>A pensao alimenticia e o valor destinado a garantir as necessidades basicas de quem nao pode prove-las sozinho, geralmente filhos menores, mas tambem pode ser devida entre ex-conjuges ou companheiros em determinadas situacoes.</p>" +
      "<h3>Como e definido o valor?</h3>" +
      "<p>Nao ha um percentual fixo em lei. O juiz considera o chamado <strong>trinomio necessidade-possibilidade-proporcionalidade</strong>: as necessidades de quem recebe, a capacidade financeira de quem paga e a proporcionalidade entre os dois. Na pratica, os valores costumam variar entre 20% e 30% dos rendimentos do alimentante quando ha vinculo empregaticio formal.</p>" +
      "<h3>O que fazer em caso de atraso no pagamento?</h3>" +
      "<p>O nao pagamento da pensao alimenticia pode ser cobrado por meio de execucao de alimentos. Duas vias sao possiveis:</p>" +
      "<ul>" +
      "<li>Execucao com possibilidade de prisao civil do devedor, para as tres ultimas parcelas vencidas</li>" +
      "<li>Execucao por penhora de bens e valores, para debitos mais antigos</li>" +
      "</ul>" +
      "<p>Tambem e possivel solicitar o protesto do devedor e a inclusao do nome em cadastros de inadimplentes.</p>" +
      "<h3>Ate quando dura a obrigacao?</h3>" +
      "<p>Em regra, a pensao alimenticia e devida ate os 18 anos do filho, podendo se estender ate os 24 anos se ele estiver cursando ensino superior e comprovar a necessidade de continuar recebendo o auxilio.</p>" +
      "<h3>Como agir?</h3>" +
      "<p>Seja para fixar, revisar ou cobrar uma pensao alimenticia em atraso, o acompanhamento juridico evita perda de prazos e garante que o valor seja compativel com as necessidades reais da crianca. A Dra. Amanda Reis atua na fixacao, revisao e execucao de pensao alimenticia.</p>"
  },

  {
    id: 17,
    titulo: "Registro de candidatura nas Eleicoes 2026: prazos, documentos e motivos de indeferimento",
    categoria: "Eleitoral",
    data: "29/07/2026",
    resumo: "Com as convencoes partidarias em andamento e o registro de candidaturas se encerrando em 15 de agosto, veja os documentos exigidos, os prazos oficiais e os erros que mais levam ao indeferimento.",
    foto: "blog/imagens/registro-candidatura.png",
    conteudo: "<p>Com as Eleicoes Gerais de 2026 marcadas para 4 de outubro, o calendario eleitoral ja esta em andamento e o prazo para o registro de candidaturas se aproxima. Entender os documentos exigidos e os prazos evita que uma candidatura seja barrada antes mesmo do inicio da campanha.</p>" +
      "<h3>Quem precisa se registrar</h3>" +
      "<p>Todo cidadao escolhido em convencao partidaria para concorrer a presidente, governador, senador, deputado federal ou deputado estadual/distrital precisa ter sua candidatura formalmente registrada na Justica Eleitoral, ainda que ja tenha disputado eleicoes anteriores.</p>" +
      "<h3>Documentos necessarios</h3>" +
      "<ul>" +
      "<li>Copia da ata da convencao partidaria</li>" +
      "<li>Certidao de quitacao eleitoral</li>" +
      "<li>Certidoes criminais (estadual e federal)</li>" +
      "<li>Declaracao de bens</li>" +
      "<li>Comprovante de filiacao partidaria e de domicilio eleitoral</li>" +
      "<li>Fotografia recente no padrao exigido pelo TSE</li>" +
      "<li>Proposta de governo ou plano de trabalho, quando exigida pelo cargo</li>" +
      "</ul>" +
      "<h3>Prazos do calendario eleitoral 2026</h3>" +
      "<ul>" +
      "<li><strong>20/07 a 05/08:</strong> periodo de convencoes partidarias para escolha de candidatos e coligacoes</li>" +
      "<li><strong>15/08:</strong> ultimo dia para o registro das candidaturas na Justica Eleitoral</li>" +
      "<li><strong>16/08:</strong> inicio oficial da propaganda eleitoral</li>" +
      "<li><strong>04/10:</strong> primeiro turno das eleicoes (segundo turno em 25/10, se necessario)</li>" +
      "</ul>" +
      "<h3>Motivos mais comuns de indeferimento</h3>" +
      "<p>A Justica Eleitoral pode negar o registro por documentacao incompleta, pendencias na prestacao de contas de campanhas anteriores, condenacoes que geram inelegibilidade (Lei da Ficha Limpa) ou divergencias entre os dados declarados e os registros oficiais. Muitos casos poderiam ser evitados com uma analise juridica previa.</p>" +
      "<h3>Como recorrer em caso de indeferimento</h3>" +
      "<p>Se o registro for indeferido, o candidato pode recorrer ao Tribunal Regional Eleitoral e, em ultima instancia, ao Tribunal Superior Eleitoral. Os prazos recursais sao curtos, por isso a atuacao rapida de uma advogada especializada e essencial para nao perder o direito de concorrer.</p>" +
      "<p>A Dra. Amanda Reis assessora candidatos, partidos e coligacoes durante todo o processo de registro de candidatura, da conferencia documental ate a eventual defesa em recursos, reduzindo o risco de indeferimento nas Eleicoes 2026.</p>"
  },

  {
    id: 18,
    titulo: "Revisão da vida toda: o que é e quem ainda pode pedir",
    categoria: "Previdenciario",
    data: "12/08/2026",
    resumo: "Entenda o que é a revisão da vida toda, quem tem direito e como solicitar o recálculo do benefício previdenciário de forma segura.",
    foto: "blog/imagens/revisao-da-vida-toda-o-que-e-e-quem-ainda-pode-pedir.jpg",
    conteudo: "<p>A “revisão da vida toda” tem sido pauta frequente nos tribunais e na mídia, pois permite recalcular o benefício previdenciário considerando todas as contribuições do segurado, inclusive as anteriores a 1994. Essa possibilidade surge da interpretação do Supremo Tribunal Federal sobre a Constituição, que garante o direito ao cálculo mais favorável ao segurado.</p><h3>O que é a revisão da vida toda?</h3><p>Trata‑se da revisão do cálculo do benefício de aposentadoria ou de pensão por morte, de modo que o INSS inclua no salário de benefício (SB) as remunerações recebidas antes da Lei Complementar n.º 109/2001, quando estas eram mais altas que as posteriores. O objetivo é aplicar a média salarial mais vantajosa, respeitando o teto máximo do regime.</p><h3>Quem ainda pode pedir?</h3><p>A decisão do STF não tem prazo de validade determinado, mas o prazo prescricional para entrar com a ação continua sendo de 10 anos a partir da data em que o benefício foi concedido ou revisado. Assim, ainda podem requerer a revisão:</p><ul><li>Segurados que se aposentaram antes da reforma da previdência (EC 103/2019) e que tiveram salários superiores antes de 1994;</li><li>Aposentados que já tiveram a “revisão de cálculo” negada pelo INSS, mas que ainda estejam dentro do prazo de 10 anos;</li><li>Beneficiários de pensão por morte que receberam o benefício calculado apenas com base nas contribuições posteriores a 1994.</li></ul><h3>Como solicitar a revisão?</h3><p>O pedido pode ser iniciado diretamente no INSS, por meio do Meu INSS, ou por meio de ação judicial. É recomendável reunir documentos que comprovem as remunerações anteriores, como contracheques, extratos bancários, declarações de imposto de renda e o CNIS completo. Caso o INSS negue o pedido, a via judicial pode ser utilizada.</p><h3>Principais documentos necessários</h3><ul><li>Identidade com foto (RG ou CNH) e CPF;</li><li>Carteira de Trabalho com todas as anotações de salário;</li><li>Extratos de contribuições (CNIS) atualizados;</li><li>Comprovantes de renda anteriores a 1994 (holerites, recibos, declarações de IR);</li><li>Comprovante de residência.</li></ul><h3>Riscos de indeferimento</h3><p>O INSS costuma negar a revisão quando não há prova documental suficiente das remunerações antigas ou quando o cálculo já considerou a média mais alta possível. A falta de atualização do CNIS também pode gerar divergências.</p><p>Para avaliar a viabilidade da revisão, analisar a documentação e calcular o possível ganho, a orientação de um advogado especializado é essencial.</p><p>A Dra. Amanda Reis está à disposição para esclarecer dúvidas, analisar seu caso e conduzir a revisão da vida toda de forma segura e eficiente.</p>"
  },

  {
    id: 19,
    titulo: "Acidente de trabalho: direitos, estabilidade e responsabilidade da empresa",
    categoria: "Trabalhista",
    data: "19/08/2026",
    resumo: "Entenda os direitos do trabalhador acidentado, a estabilidade no emprego e as obrigações da empresa em caso de acidente de trabalho.",
    foto: "blog/imagens/acidente-de-trabalho-direitos-estabilidade-e.jpg",
    conteudo: "<p>Acidente de trabalho é situação inesperada que ocorre no exercício das atividades laborais, provocando lesão corporal ou perturbação funcional ao trabalhador. Quando isso acontece, o empregado passa a ter direitos específicos, a empresa assume responsabilidades e a legislação garante estabilidade provisória para a manutenção do vínculo.</p><h3>Direitos básicos do trabalhador acidentado</h3><p>O trabalhador tem direito ao auxílio‑acidente ou à aposentadoria por invalidez, conforme a gravidade da lesão, além de assistência médica integral e reabilitação. Os gastos com tratamento, medicamentos, exames e órteses são de responsabilidade do empregador ou do INSS, dependendo da situação. Também é assegurado o pagamento do salário‑maternidade ou do salário‑integral durante o afastamento, conforme a CLT e a legislação previdenciária.</p><h3>Estabilidade no emprego</h3><p>Após o acidente, o empregado que recebeu o auxílio‑doença por motivo de acidente de trabalho tem garantia de manutenção do contrato por, no mínimo, 12 meses após a cessação do benefício. Essa estabilidade impede a demissão sem justa causa durante esse período, exceto em caso de falta grave comprovada ou acordo entre as partes.</p><h3>Responsabilidade da empresa</h3><p>A empresa deve comunicar o acidente à Previdência Social em até 24 horas, por meio da Comunicação de Acidente de Trabalho (CAT). O não cumprimento pode gerar multa administrativa e responsabilização civil. Além disso, o empregador deve garantir as condições de segurança previstas nas normas regulamentadoras (NRs) e providenciar equipamentos de proteção individual (EPIs). Caso haja culpa da empresa na ocorrência, o trabalhador pode pleitear indenização por danos morais e materiais.</p><h3>Procedimentos recomendados ao trabalhador</h3><p>Ao sofrer um acidente, o empregado deve:</p><ul><li>Buscar atendimento médico imediato e solicitar a emissão da CAT;</li><li>Comunicar o empregador por escrito, guardando cópias;</li><li>Manter todos os documentos médicos, exames e receitas;</li><li>Acompanhar o andamento do benefício junto ao INSS.</li></ul><h3>Quando a orientação de um advogado é essencial</h3><p>Mesmo com a legislação clara, a análise de cada caso pode revelar particularidades que influenciam a concessão de benefícios ou a necessidade de ação judicial. A Dra. Amanda Reis, especializada em Direito do Trabalho, está pronta para orientar e atuar em situações de acidente de trabalho, garantindo que seus direitos sejam plenamente respeitados.</p>"
  },

  {
    id: 20,
    titulo: "Inventário e partilha de bens: como funciona após o falecimento",
    categoria: "Familia",
    data: "26/08/2026",
    resumo: "Entenda as etapas, documentos e cuidados essenciais para realizar o inventário e a partilha de bens de forma segura e eficiente.",
    foto: "blog/imagens/inventario-e-partilha-de-bens-como-funciona-apos-o.jpg",
    conteudo: "<p>O falecimento de um ente querido gera diversas questões práticas, entre elas a necessidade de fazer o inventário e a partilha dos bens deixados. Esse procedimento legal tem o objetivo de regularizar a transmissão patrimonial aos herdeiros, observando as regras previstas no direito de família e evitando futuros litígios.</p><h3>Quando se inicia o inventário?</h3><p>O prazo para dar início ao inventário começa a contar a partir da data do óbito. Embora a lei não estabeleça um prazo rígido, recomenda‑se que o procedimento seja iniciado dentro de 60 dias, evitando multas e complicações com a Receita Federal.</p><h3>Quem pode requerer o inventário?</h3><p>Podem requerer o inventário o cônjuge, o companheiro, os filhos, os pais, ou qualquer pessoa que tenha interesse na herança, como credores do falecido. Caso não haja consenso entre os interessados, o Ministério Público pode intervir para garantir a proteção dos direitos dos herdeiros menores ou incapazes.</p><h3>Procedimentos: judicial x extrajudicial</h3><p>Existem duas formas de conduzir o inventário: </p><ul><li><strong>Inventário judicial:</strong> obrigatório quando há testamento, herdeiros incapazes, ou quando os bens incluem imóveis que não podem ser transferidos por escritura pública. O processo tramita no fórum competente e pode durar meses ou anos, dependendo da complexidade.</li><li><strong>Inventário extrajudicial:</strong> realizado em cartório, mediante escritura pública, quando todos os herdeiros são capazes, concordam com a partilha e não há testamento. É mais ágil e costuma ter custos menores.</li></ul><h3>Documentação necessária</h3><p>Independentemente da via escolhida, a documentação básica inclui:</p><ul><li>Certidão de óbito do falecido;</li><li>Documentos pessoais (RG, CPF) dos herdeiros;</li><li>Escritura ou matrícula dos imóveis;</li><li>Extratos bancários, documentos de veículos, ações e demais bens;</li><li>Comprovante de endereço atualizado;</li><li>Declaração de Imposto de Renda e eventual Certidão Negativa de Débitos.</li></ul><h3>Principais pontos de atenção</h3><p>Alguns cuidados são essenciais para que o inventário transcorra sem contratempos: </p><ul><li>Verificar a existência de dívidas ou ônus sobre os bens, pois elas devem ser quitadas antes da partilha.</li><li>Observar a partilha igualitária entre os herdeiros, respeitando a legítima, que corresponde a 50% da herança reservada aos descendentes, ascendentes e cônjuge.</li><li>Ficar atento aos prazos para pagamento do ITCMD (Imposto de Transmissão Causa Mortis e Doação), cuja alíquota varia de acordo com o estado.</li><li>Em caso de desacordo, considerar a mediação ou a ação judicial de adjudicação de bens.</li></ul><p>Para garantir que todos os trâmites sejam cumpridos corretamente e evitar surpresas desagradáveis, a Dra. Amanda Reis está à disposição para orientar e atuar em todas as fases do inventário e da partilha, oferecendo assessoria personalizada e segura.</p>"
  },

  {
    id: 21,
    titulo: "Prestação de contas de campanha: regras e riscos de irregularidade",
    categoria: "Eleitoral",
    data: "02/09/2026",
    resumo: "Entenda as exigências legais, principais falhas e sanções na prestação de contas eleitoral e saiba como se prevenir com orientação especializada.",
    foto: "blog/imagens/prestacao-de-contas-de-campanha-regras-e-riscos-de.jpg",
    conteudo: "<p>A prestação de contas de campanha eleitoral é obrigação legal que visa garantir a transparência dos gastos e receitas dos candidatos. O descumprimento das normas pode gerar sanções graves, como multas, suspensão da candidatura ou até a cassação do mandato. Conhecer as regras e os principais riscos ajuda a evitar irregularidades.</p><h3>Prazo e forma de entrega</h3><p>Os partidos e candidatos devem apresentar a prestação de contas ao Tribunal Superior Eleitoral (TSE) dentro do prazo estabelecido no calendário eleitoral. O documento deve ser enviado eletronicamente, por meio do Sistema de Prestação de Contas (SPC), contendo todas as receitas e despesas discriminadas.</p><h3>Documentação exigida</h3><p>É imprescindível reunir comprovantes que atestem cada movimentação financeira, como notas fiscais, recibos, extratos bancários e contratos. Também devem constar informações sobre doadores, limites de doação e a origem dos recursos.</p><ul><li>Recibos ou notas fiscais de despesas;</li><li>Extratos bancários e comprovantes de transferências;</li><li>Relatórios de arrecadação de doações, com identificação do doador;</li><li>Contratos de prestação de serviços e aluguel de bens;</li><li>Comprovantes de despesas com propaganda eleitoral.</li></ul><h3>Principais irregularidades</h3><p>Entre as falhas mais recorrentes estão a omissão de receitas, a classificação equivocada de despesas, o uso de recursos de origem proibida e a realização de gastos fora do período permitido. Tais práticas podem ser interpretadas como fraude e acarretar penalidades.</p><h3>Sanções previstas</h3><p>O TSE dispõe de um conjunto de punições que varia de advertência e multa até a inelegibilidade por até oito anos. Em casos de fraude comprovada, pode haver a anulação da candidatura ou a perda do mandato, além de responsabilização criminal.</p><h3>Como se prevenir</h3><p>Adotar um controle interno rígido, contar com contadores experientes e registrar todas as movimentações em tempo real são medidas eficazes. A revisão periódica das contas por profissionais especializados reduz o risco de erros e omissões.</p><h3>Importância da transparência</h3><p>Além de cumprir a lei, a transparência fortalece a confiança do eleitorado e evita questionamentos judiciais que podem comprometer a imagem do candidato.</p><h3>Dicas práticas para uma prestação de contas segura</h3><ul><li>Organize os documentos diariamente, evitando acúmulo;</li><li>Utilize planilhas ou softwares de gestão de campanha;</li><li>Verifique os limites de doação antes de aceitar recursos;</li><li>Consulte um advogado especializado antes de fechar despesas de grande valor;</li><li>Faça auditoria interna antes de enviar a conta ao TSE.</li></ul><p>Para garantir que a prestação de contas da sua campanha esteja em conformidade com a legislação eleitoral, a Dra. Amanda Reis pode orientar e atuar no seu caso, oferecendo assessoria jurídica personalizada.</p>"
  },

  {
    id: 22,
    titulo: "BPC/LOAS: quem tem direito ao benefício assistencial e como solicitar",
    categoria: "Previdenciario",
    data: "09/09/2026",
    resumo: "Entenda quem pode receber o BPC, os requisitos de renda e a documentação necessária, além do passo a passo para solicitar o benefício.",
    foto: "blog/imagens/bpc-loas-quem-tem-direito-ao-beneficio-assistencial-e-como.jpg",
    conteudo: "<p>O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), garante um salário‑mínimo mensal a pessoa com deficiência ou idosa que comprove não possuir meios de prover a própria subsistência nem de ser sustentada por sua família. Conhecer quem tem direito e como solicitar o benefício evita atrasos e indeferimentos.</p><h3>Quem pode receber o BPC?</h3><p>São elegíveis duas categorias: (i) pessoa com deficiência de qualquer idade que apresente impedimento de longo prazo, de natureza física, mental ou sensorial, que dificulte a sua participação plena e efetiva na sociedade em igualdade de condições com os demais; (ii) pessoa idosa com 65 anos ou mais. Em ambos os casos, a renda per capita familiar não pode ultrapassar ¼ do salário‑mínimo.</p><h3>Critérios de renda e composição familiar</h3><p>O cálculo da renda familiar considera todos os membros que vivem na mesma residência e que recebem algum tipo de benefício ou salário. É imprescindível apresentar comprovantes de renda, como contracheques, extratos bancários, declaração de Imposto de Renda ou recibos de pensão. Caso a família possua renda acima do limite, o benefício será negado.</p><h3>Documentação necessária</h3><ul><li>Documento de identidade com foto (RG ou CNH) e CPF;</li><li>Comprovante de residência atualizado;</li><li>Laudo médico que ateste a deficiência, emitido por serviço de saúde oficial;</li><li>Cadastro Único para Programas Sociais do Governo Federal (CU);</li><li>Declaração de renda familiar ou documentos que comprovem a situação de vulnerabilidade econômica.</li></ul><h3>Como solicitar o BPC</h3><p>A solicitação pode ser feita presencialmente em um Centro de Referência da Assistência Social (CRAS) ou pelo portal do Governo Federal (Meu INSS). O requerente deve apresentar toda a documentação listada e preencher o formulário de requerimento. Após a entrega, o INSS tem até 45 dias para analisar o pedido; caso haja necessidade de complementação, o órgão notificará o interessado.</p><h3>Principais motivos de indeferimento</h3><p>Os indeferimentos mais frequentes ocorrem por: (i) ausência ou insuficiência do laudo médico; (ii) renda familiar acima do limite permitido; (iii) falta de inscrição ou atualização no Cadastro Único; (iv) documentação incompleta ou ilegível. Por isso, é recomendável revisar cuidadosamente os documentos antes de protocolar o pedido.</p><p>Se o benefício for negado, é possível interpor recurso administrativo ou ajuizar ação judicial. A Dra. Amanda Reis está à disposição para orientar sobre a documentação, analisar o caso concreto e representar o interessado em todas as fases do processo.</p>"
  },

  {
    id: 23,
    titulo: "Banco de horas: regras, compensação e riscos para o trabalhador",
    categoria: "Trabalhista",
    data: "16/09/2026",
    resumo: "Entenda como funciona o banco de horas, as exigências legais para a compensação e os principais riscos que o trabalhador pode enfrentar.",
    foto: "blog/imagens/banco-de-horas-regras-compensacao-e-riscos-para-o.jpg",
    conteudo: "<p>O banco de horas é um mecanismo de compensação de jornada que permite ao empregador acumular horas extras trabalhadas para serem usufruídas em folgas ou redução de horário, respeitando limites legais. Conhecer as regras, a forma de compensação e os riscos envolvidos ajuda o trabalhador a evitar prejuízos e a garantir seus direitos.</p><h3>Como funciona o banco de horas?</h3><p>O acordo deve ser formalizado por escrito, seja por meio de convenção coletiva, acordo coletivo ou acordo individual, desde que respeite a Constituição e a CLT. As horas acumuladas podem ser compensadas em até seis meses, salvo disposição mais favorável prevista em instrumento coletivo.</p><h3>Regras essenciais para a compensação</h3><p>Para que a compensação seja válida, é preciso observar:</p><ul><li>Limite máximo de duas horas diárias de jornada suplementar, salvo acordo específico.</li><li>Controle rigoroso de registro de horas, preferencialmente por meio de sistemas eletrônicos ou cartões de ponto.</li><li>Compensação dentro do prazo estabelecido, sob pena de pagamento como hora extra, com os adicionais devidos.</li></ul><h3>Riscos para o trabalhador</h3><p>Quando o banco de horas não é corretamente implementado, o empregado pode enfrentar:</p><ul><li>Perda de remuneração, caso as horas não sejam compensadas no prazo.</li><li>Jornada excessiva sem o devido pagamento de adicional, configurando fraude.</li><li>Dificuldade de comprovar a existência do banco, sobretudo se não houver registro escrito.</li></ul><h3>Como se proteger</h3><p>O trabalhador deve exigir a formalização do acordo, guardar cópias dos documentos e acompanhar o extrato de horas. Em caso de descumprimento, é recomendável buscar orientação jurídica para avaliar a possibilidade de ação trabalhista, requerindo o pagamento das horas extras não compensadas e eventuais danos morais.</p><p>A Dra. Amanda Reis, especialista em direito trabalhista em Brasília-DF, está à disposição para analisar o seu caso e orientar sobre a melhor estratégia para garantir seus direitos.</p>"
  },

  {
    id: 24,
    titulo: "Adoção no Brasil: etapas do processo e requisitos legais",
    categoria: "Familia",
    data: "22/09/2026",
    resumo: "Entenda as fases, requisitos e cuidados essenciais para adotar no Brasil, com orientação da Dra. Amanda Reis.",
    foto: "blog/imagens/adocao-no-brasil-etapas-do-processo-e-requisitos-legais.jpg",
    conteudo: "<p>A adoção é o ato jurídico que cria vínculo de filiação entre o adotante e a pessoa adotada, garantindo direitos e deveres como os da filiação natural. No Brasil, o procedimento é regulamentado pelo Estatuto da Criança e do Adolescente e pela Lei de Adoção, exigindo observância de requisitos específicos e etapas bem definidas para assegurar o melhor interesse da criança ou adolescente.</p><h3>Quem pode adotar?</h3><p>Podem adotar pessoas maiores de 18 anos que comprovem capacidade civil plena, possuam estabilidade econômica e moral, e que atendam aos critérios de idade em relação ao adotado (geralmente, diferença mínima de 16 anos). Não há exigência de estado civil, mas casais, solteiros e até pessoas solteiras podem requerer a adoção, respeitando as normas do órgão competente.</p><h3>Requisitos documentais</h3><ul><li>Documento de identidade com foto (RG ou CNH);</li><li>CPF;</li><li>Comprovante de residência atualizado;</li><li>Certidão de casamento ou de união estável, se houver;</li><li>Comprovantes de renda (contracheques, declaração de Imposto de Renda);</li><li>Atestado de antecedentes criminais;</li><li>Laudos médicos que atestem aptidão física e mental.</li></ul><h3>Etapas do processo de adoção</h3><p>O procedimento costuma seguir as seguintes fases: 1) Habilitação: o interessado apresenta a documentação e passa por avaliação psicossocial; 2) Estudo social: equipe técnica realiza visitas domiciliares e elabora relatório sobre as condições de vida; 3) Parecer do Ministério Público: análise da conveniência da adoção; 4) Sentença judicial: o juiz profere a decisão, tornando a adoção oficial; 5) Registro civil: a nova filiação é anotada na certidão de nascimento.</p><h3>Tipos de adoção reconhecidos</h3><p>Existem duas modalidades principais: adoção plena, que rompe todos os vínculos com a família biológica e confere todos os direitos de filiação; e adoção simples, que mantém alguns laços, como direito a alimentos de parentes biológicos. Também há a adoção de maiores de idade, que segue procedimento simplificado, porém requer avaliação de capacidade e consentimento do adotado.</p><h3>Principais cuidados e erros comuns</h3><p>Entre os obstáculos mais frequentes estão a falta de documentação completa, a demora na avaliação psicossocial e a ausência de acompanhamento jurídico especializado, o que pode acarretar indeferimentos ou atrasos significativos. É fundamental manter a transparência nas informações prestadas e contar com apoio de profissionais que conheçam as exigências do Poder Judiciário.</p><p>A Dra. Amanda Reis pode orientar e atuar em todas as fases da adoção, garantindo que o procedimento seja conduzido de forma segura e eficiente. Entre em contato para uma avaliação personalizada.</p>"
  },
];
