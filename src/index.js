const { registrarVisita, visitasTotales } = require("./contador");

// Simula visitas a la landing: 3 por defecto, o las que pases (node src/index.js 6)
const total = Number(process.argv[2]) || 3;

for (let i = 0; i < total; i++) {
  registrarVisita();
  console.log(`Visita ${i + 1} → la landing muestra: ${visitasTotales()}`);
}

console.log("Total final:", visitasTotales());
