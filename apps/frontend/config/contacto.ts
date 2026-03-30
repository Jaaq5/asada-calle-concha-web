import { ContactoData } from "@/types/contacto";

export const contactoDefault: ContactoData = {
  direccion: {
    calle: "200 metros del Bar Cinco Manzanas, oficina a mano derecha color azul",
    ciudad: "Alajuela, Sarchi Sur, Calle Concha",
    mapaIframeUrl:
      "https://www.google.com/maps?q=10.0958412,-84.3290026&z=17&output=embed",
    mapaRedirectUrl:
      "https://www.google.com/maps/place/ASADA+Calle+Concha/@10.0958465,-84.3315775,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa059404f607289:0x976982edc8fff9af!8m2!3d10.0958412!4d-84.3290026!16s%2Fg%2F11pypdzlz1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
  },
  telefonos: [
    { numero: "2454-0300", descripcion: "Oficina" },
    { numero: "6062-2347", descripcion: "Oficina" },
  ],
  correo: "asadacalleconcha1@yahoo.com",
  horario: ["Lunes a Viernes: 7:00 a.m. - 2:20 p.m."],
  whatsapp: {
    numero: "50660622347",
    mensajeDefecto:
      "Hola, necesito información sobre los servicios de ASADA Calle Concha",
  },
};
