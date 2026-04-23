import { Auto, Movimento, Intimacao, EstatisticaProdutividade } from './types/atena';

export const MOCK_AUTOS: Auto[] = [
  {
    id: '1',
    numero: '202400123456',
    classe: 'Inquérito Civil',
    assunto: 'Improbidade Administrativa',
    tipo: 'Extrajudicial',
    órgão: '01ª Unidade de Atendimento',
    sigilo: 'Público',
    relevancia: true,
    dataIngressso: '2024-01-10',
    status: 'Digital',
    posse: 'Responsável Unidade',
    ultimoMovimento: 'Manifestação do MP',
    dataUltimoMovimento: '2024-04-15'
  },
  {
    id: '2',
    numero: '202300987654',
    classe: 'Ação Civil Pública',
    assunto: 'Meio Ambiente',
    tipo: 'Judicial',
    órgão: '05ª Inspetoria Regional',
    sigilo: 'Restrito',
    relevancia: false,
    dataIngressso: '2023-11-20',
    status: 'Digital',
    posse: 'Assessor Técnico',
    ultimoMovimento: 'Petição de Juntada',
    dataUltimoMovimento: '2024-04-18'
  },
  {
    id: '3',
    numero: '202400554433',
    classe: 'Procedimento Administrativo',
    assunto: 'Gestão de Pessoal',
    tipo: 'Administrativo',
    órgão: 'Diretoria-Geral',
    sigilo: 'Sigilo Pessoal',
    relevancia: false,
    dataIngressso: '2024-02-05',
    status: 'Físico',
    posse: 'Recursos Humanos',
    ultimoMovimento: 'Despacho de Encaminhamento',
    dataUltimoMovimento: '2024-04-17'
  }
];

export const MOCK_MOVIMENTOS: Movimento[] = [
  {
    id: 'm1',
    autoId: '1',
    tipo: 'Promoção de Arquivamento',
    resumo: 'Promoção de arquivamento por falta de provas testemunhais.',
    detalhe: 'Após exaustiva investigação, não restou comprovado o dolo específico exigido pela nova Lei de Improbidade Administrativa...',
    autor: 'Dr. João Silva',
    data: '2024-04-15T10:30:00Z',
    status: 'Consolidado',
    anexos: [
      { id: 'a1', nome: 'promocao_arquivamento.pdf', tipo: 'pdf', url: '#', tamanho: '450 KB' }
    ]
  },
  {
    id: 'm2',
    autoId: '1',
    tipo: 'Cota Ministerial',
    resumo: 'Solicitação de diligências complementares à Polícia Civil.',
    detalhe: 'Diligência necessária para identificar o real proprietário do imóvel citado no evento 45...',
    autor: 'Dr. João Silva',
    data: '2024-04-10T14:20:00Z',
    status: 'Consolidado',
    anexos: []
  }
];

export const MOCK_INTIMACOES: Intimacao[] = [
  {
    id: 'i1',
    autoId: '2',
    numeroAuto: '202300987654',
    titulo: 'Intimação para Audiência de Conciliação',
    dataRecebimento: '2024-04-18T08:00:00Z',
    lida: false,
    promotoria: '05ª Inspetoria'
  },
  {
    id: 'i2',
    autoId: '4',
    numeroAuto: '202400001122',
    titulo: 'Prazo para Impugnação de Embargos',
    dataRecebimento: '2024-04-17T16:45:00Z',
    lida: true,
    promotoria: '05ª Inspetoria'
  }
];

export const MOCK_STATS_PRODUTIVIDADE: EstatisticaProdutividade[] = [
  { dia: 'Seg', movimentos: 12 },
  { dia: 'Ter', movimentos: 18 },
  { dia: 'Qua', movimentos: 15 },
  { dia: 'Qui', movimentos: 25 },
  { dia: 'Sex', movimentos: 20 },
  { dia: 'Sáb', movimentos: 5 },
  { dia: 'Dom', movimentos: 2 }
];

export const MOCK_MODELOS: any[] = [
  { id: 'mod1', titulo: 'Parecer de Improcedência', tipo: 'Manifestação', conteudo: 'Manifesto-me pela improcedência do pedido inicial...' },
  { id: 'mod2', titulo: 'Despacho de Diligência', tipo: 'Despacho', conteudo: 'Solicitem-se as seguintes diligências à autoridade policial...' },
  { id: 'mod3', titulo: 'Cota de Encaminhamento', tipo: 'Cota Ministerial', conteudo: 'Encaminhem-se os autos à Secretaria de Estado...' },
];

export const MOCK_TAREFAS: any[] = [
  { id: 't1', autoId: '1', texto: 'Revisar petição inicial do Projudi', data: '2024-04-19', concluida: false },
  { id: 't2', autoId: '1', texto: 'Ligar para testemunha principal', data: '2024-04-18', concluida: true },
];

export const MOCK_USUARIOS: any[] = [
  { id: 'u1', nome: 'Ricardo Santos', cargo: 'Analista de Sistemas', perfil: 'Administrador', setor: '02ª Região' },
  { id: 'u2', nome: 'Ana Paula Lima', cargo: 'Assessor Técnico', perfil: 'Assessor', setor: '01ª Região' },
  { id: 'u3', nome: 'Carlos Eduardo', cargo: 'Oficial Administrativo', perfil: 'Servidor', setor: 'Diretoria-Geral' },
];

export const MOCK_NOTIFICACOES: any[] = [
  { id: 'n1', titulo: 'Prazo Vencendo', mensagem: 'O auto 202400123456 vence em 24h.', data: '2024-04-19T08:00:00Z', lida: false, tipo: 'urgente' },
  { id: 'n2', titulo: 'Assinatura Realizada', mensagem: 'Dr. João assinou o despacho.', data: '2024-04-19T09:30:00Z', lida: true, tipo: 'informativa' },
];
