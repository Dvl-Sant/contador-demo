const http = require("node:http");
const { registrarVisita, visitasTotales } = require("./contador");

// Con un número: simula esa cantidad de visitas en consola (node src/index.js 6).
// Sin argumentos: sirve el contador por HTTP (puerto 3000 o $PORT).
const total = Number(process.argv[2]);

if (total > 0) {
  for (let i = 0; i < total; i++) {
    registrarVisita();
    console.log(`Visita ${i + 1} → la landing muestra: ${visitasTotales()}`);
  }
  console.log("Total final:", visitasTotales());
} else {
  const puerto = Number(process.env.PORT) || 3000;

  http
    .createServer((req, res) => {
      registrarVisita();
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(
        `<h1>Contador de visitas</h1><p>La landing muestra: ${visitasTotales()}</p>`
      );
    })
    .listen(puerto, () => {
      console.log(`Contador escuchando en http://localhost:${puerto}`);
    });
}
