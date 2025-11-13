//variable
const PORT = 5780;

// import
var express = require("express");
const {sequelize, file_path, sessions, users} = require("./models"); // modèles + instance Sequelize
const { Op } = require('sequelize');

// Test de la connexion Sequelize
sequelize.authenticate()
    .then(() => console.log("Connexion Sequelize OK"))
    .catch(err => {
        console.error("Erreur Sequelize :", err);
        process.exit(1); // stoppe le serveur si connexion échoue
    });

// initialisation serveur
var server = express();
server.use(express.json()); // parser le JSON

/// Integration de swagger dans mon serveur
const swaggerUi = require('swagger-ui-express'); // <-- ajouté
const swaggerFile = require('./swagger-output.json'); // <-- ajouté
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)); // <-- ajouté
console.log("📘 Swagger Docs disponible sur : http://localhost:5780/api-docs");
//fin swagger

// Endpoint principale
server.get("/", function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.status(200).json({ message: "Bienvenue sur l'API REST de mon blog !" });
});

server.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
