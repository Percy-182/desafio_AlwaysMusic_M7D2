const client = require("./dbConfig");

// Función para ejecutar una consulta SQL
async function consultaSQL() {
  // Obtenemos una conexión de la client
  const connection = await client.connect();

  try {
    // Ejecutamos la consulta SQL
    const result = await client.query("SELECT * FROM alwaysMusic");

    // Mostramos los resultados
    console.log(result.rows);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
  } finally {
    // Liberamos la conexión
    connection.release();
  }
}

// Función para insertar un usuario
const insertUser = async () => {
  const text =
    "INSERT INTO alwaysMusic(nombre, rut, curso, nivel) VALUES($1, $2, $3, $4)";
  const values = ["Nombre 2", "17.123.456-8", "guitarra", "10"];

  const response = await client.query(text, values);
  console.log(response);
};

// Función para eliminar un usuario
const deleteUser = async () => {
  const text = "DELETE FROM alwaysMusic WHERE nombre = $1";
  const values = "Nombre 1";

  const response = await client.query(text, values);
  console.log("Fila eliminada exitosamente", response);
};

// Función para actualizar un usuario
const updateUser = async () => {
  const text = "UPDATE alwaysMusic SET nombre = $1 WHERE nombre = $2";
  const values = ["Nombre 5"];

  const response = await client.query(text, values);
  console.log("Actualización exitosa", response);
};

// Función para consultar una fila completa por un valor de una columna específica
const queryUser = async () => {
  // Define la sentencia SQL para la consulta
  const text = "SELECT * FROM alwaysMusic WHERE rut = $1";

  // Define el valor del nombre que quieres consultar
  const nameToQuery = "18.123.456-7";

  try {
    // Ejecuta la consulta con el nombre como valor
    const response = await client.query(text, [nameToQuery]);
    console.log("Fila consultada exitosamente:", response.rows);
  } catch (error) {
    console.error("Error al consultar la fila:", error);
  }
};

module.exports = { consultaSQL, insertUser, deleteUser, updateUser, queryUser };
