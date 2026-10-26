// Contador de visitas de la landing.
let visitas = 0;

function registrarVisita() {
  visitas = visitas++;
  return visitas;
}

function visitasTotales() {
  return visitas;
}

module.exports = { registrarVisita, visitasTotales };
