export type Sigilo = 'Público' | 'Restrito' | 'Sigilo Pessoal' | 'Sigilo Absoluto';

export type AutoType = 'Judicial' | 'Extrajudicial' | 'Administrativo';

export interface Auto {
  id: string;
  numero: string;
  classe: string;
  assunto: string;
  tipo: AutoType;
  órgão: string;
  sigilo: Sigilo;
  relevancia: boolean;
  dataIngressso: string;
  status: 'Digital' | 'Físico';
  posse: string;
  ultimoMovimento: string;
  dataUltimoMovimento: string;
}

export interface Movimento {
  id: string;
  autoId: string;
  tipo: string;
  resumo: string;
  detalhe: string;
  autor: string;
  data: string;
  status: 'Rascunho' | 'Assinado' | 'Consolidado';
  anexos: Anexo[];
}

export interface ModeloMovimento {
  id: string;
  titulo: string;
  tipo: string;
  conteudo: string;
}

export interface TarefaInterna {
  id: string;
  autoId: string;
  texto: string;
  data: string;
  concluida: boolean;
}

export interface Usuario {
  id: string;
  nome: string;
  cargo: string;
  perfil: 'Promotor' | 'Assessor' | 'Servidor' | 'Administrador';
  setor: string;
}

export interface Notificacao {
  id: string;
  titulo: string;
  mensagem: string;
  data: string;
  lida: boolean;
  tipo: 'urgente' | 'informativa';
}

export interface Anexo {
  id: string;
  nome: string;
  tipo: 'pdf' | 'audio' | 'video' | 'image';
  url: string;
  tamanho: string;
}

export interface Intimacao {
  id: string;
  autoId: string;
  numeroAuto: string;
  titulo: string;
  dataRecebimento: string;
  lida: boolean;
  promotoria: string;
}

export interface EstatisticaProdutividade {
  dia: string;
  movimentos: number;
}
