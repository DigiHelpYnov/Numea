// 📘 === swagger.js ===
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'API Sequelize - Documentation Automatique',
    description: 'Documentation auto-générée avec Swagger-Autogen pour ton API REST Node + Express + Sequelize.',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Serveur local',
    },
  ],
  
  // =============================
  // 🚀 AJOUT DES SCHEMAS POUR MODELES
  // =============================
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          name: { type: 'string', example: 'username' },
          person_name: { type: 'string', example: 'Arthur Dupont' },
          mail: { type: 'string', example: 'arthur@example.com' },
          password: { type: 'string', example: '$2b$10$...' },
          phone_number: { type: 'string', example: '+33123456789' },
          createdAt: { type: 'string', format: 'date-time', example: '2025-11-13T08:00:00Z' },
          updatedAt: { type: 'string', format: 'date-time', example: '2025-11-13T08:00:00Z' }
        }
      },
      FilePath: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          user_id: { type: 'integer', example: 1 },
          path: { type: 'string', example: '/uploads/2025/11/archivo.pdf' },
          file_name: { type: 'string', example: 'archivo.pdf' },
          file_size: { type: 'integer', example: 234567 },
          file_type: { type: 'string', example: 'application/pdf' },
          createdAt: { type: 'string', format: 'date-time', example: '2025-11-13T08:00:00Z' },
          updatedAt: { type: 'string', format: 'date-time', example: '2025-11-13T08:00:00Z' }
        }
      },
      Session: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          user_id: { type: 'integer', example: 1 },
          token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
          expires_at: { type: 'string', format: 'date-time', example: '2025-11-20T08:00:00Z' },
          revoked: { type: 'boolean', example: false },
          createdAt: { type: 'string', format: 'date-time', example: '2025-11-13T08:00:00Z' },
          updatedAt: { type: 'string', format: 'date-time', example: '2025-11-13T08:00:00Z' }
        }
      }
    }
  }
};


const outputFile = './swagger-output.json'; // où sera générée la doc
const endpointsFiles = ['./server.js']; // <-- ici on met index.js à la place de server.js

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./server.js'); // <-- démarre ton serveur après génération
});
