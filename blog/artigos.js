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
  }

];
