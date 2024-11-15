const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
    console.log("Usuario conectado a: " + req.url);
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    console.log("Un usuario " + req.ip + " busco contenido en la url inexistente: " + req.url);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
