export interface ContactoData {
  direccion: {
    calle: string;
    ciudad: string;
    mapaIframeUrl: string;
    mapaRedirectUrl: string;
  };
  telefonos: {
    numero: string;
    descripcion: string;
  }[];
  correo: string;
  horario: string[];
  whatsapp: {
    numero: string;
    mensajeDefecto: string;
  };
}
