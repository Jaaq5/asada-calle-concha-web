import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // URL pública de Strapi
  url: env('PUBLIC_URL', 'https://midominio.com'),

  // Confía en los headers enviados por Nginx
  proxy: {
    koa: true,
  },

  app: {
    keys: env.array('APP_KEYS'),
  },
});

export default config;
