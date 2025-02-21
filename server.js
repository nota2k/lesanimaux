import strapi from '@strapi/strapi';
const app = strapi.createStrapi({ distDir: './dist' });
app.start();