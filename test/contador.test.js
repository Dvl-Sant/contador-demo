const test = require("node:test");
const assert = require("node:assert");
const { registrarVisita, visitasTotales } = require("../src/contador");

test("cada visita registrada incrementa el total", () => {
  const antes = visitasTotales();
  registrarVisita();
  assert.strictEqual(visitasTotales(), antes + 1);
});

test("varias visitas consecutivas acumulan", () => {
  registrarVisita();
  registrarVisita();
  const despuesDeDos = visitasTotales();
  assert.ok(despuesDeDos > 0);
  registrarVisita();
  assert.strictEqual(visitasTotales(), despuesDeDos + 1);
});
