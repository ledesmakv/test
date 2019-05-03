// https://www.npmjs.com/package/express-generator
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// https://www.npmjs.com/package/body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.METODO(RUTA, FUNCION)

// dame algo (visual o datos - html)
// directorio raiz
app.get('/', (req, res) => {
    // darle el HTML
    // __dirname = "C:\\Users\\...\\Downloads\\..."
    // LINUX: /Users/.../.../
    res.sendFile(path.resolve(__dirname, "index.html"));
});

// yo cliente te envio datos a vos, servidor
app.post('/enviarDatos', (req, res) => {
    // JSON Object
    const datos = req.body; // { user: "adasd", "password": "ASDAS"}
    
    // SI el user == "admin" y password == "admin", que devuelva TRUE, si no FALSE
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
    if (datos.user === "admin" && datos.password === "admin") {
        // aca pasa la verdad
        res.json({tienePermiso: true}) // aca va el /home, o la busqueda, o lo que sea
    } else {
        // aca pasa la mentira
        res.json({tienePermiso: false }) // aca va el /home, o la busqueda, o lo que sea
    }
    res.json(datos)
});

app.listen(3000);