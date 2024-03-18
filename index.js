const http = require("http");
const mysql = require("mysql");

const host = 'localhost';
const port = 8000;

const connection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "",
});

const requestListener = function (req, res) {
    connection.query("SELECT * FROM tabla_de_prueba", (error, results, fields) => {
        if (error) {
            console.log("Error al consultar la base de datos:", error);
            res.writeHead(500);
            res.end("Error interno del servidor");
        } else {
            console.log("Consulta exitosa:", results);
            res.writeHead(200);
            res.end("El servidor está funcionando y se ha conectado a la base de datos MySQL");
        }
    });
};

connection.connect((error) => {
    if (error) {
        console.log("Error al conectar con la base de datos:", error);
        return;
    }
    console.log("Conexión exitosa a la base de datos MySQL");
});

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
