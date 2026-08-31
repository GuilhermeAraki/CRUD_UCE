export interface CreateMinistroDTO {
  nome: string;
  telefone?: string;
  funcao?: string;
  ativo?: boolean;
}

export interface UpdateMinistroDTO {
  nome?: string;
  telefone?: string;
  funcao?: string;
  ativo?: boolean;
}