import { environment } from "../environments/environment";

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3004;
const base_url = environment.base_url;

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.2',
    info: {
      title: 'API Title',
      version: '1.0',
      description: 'Descripción de tu API',
    },
    servers: [{ url: `http://localhost:${port}` }],
  },
  apis: `${ base_url }/productos`, // Rutas de la API
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
const testRoute = require('./routes/test');
app.use('/v1', testRoute);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
