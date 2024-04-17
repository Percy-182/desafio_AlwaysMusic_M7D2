// Importamos la librería de PostgreSQL
const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config(); // Carga las variables de entorno del archivo .env

// Configuración de la base de datos
const config = {
  host: process.env.DB_HOST,
  port: 5432,
  database: "bd1",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,
  min: 2,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 2000,
};

// Instanciamos la clase Client
const client = new Client(config);

// Conectamos el cliente a la base de datos
client.connect((err) => {
  if (err) {
    // Manejo de errores: Si hay un error al conectar, se ejecuta este bloque de código
    console.error("Error al conectar con la base de datos:", err.stack);
  } else {
    // Si no hay errores, se ejecuta este bloque de código
    console.log("Conexión exitosa con la base de datos");
  }
});

module.exports = client;
