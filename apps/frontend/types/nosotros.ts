export interface MiembroJunta {
  cargo: string;
  nombre: string;
}

export interface NosotrosData {
  historia: string[];
  mision: string;
  vision: string;
  valores: string[];
  periodoJunta: string;
  juntaDirectiva: MiembroJunta[];
  marcoLegal: string[];
}
