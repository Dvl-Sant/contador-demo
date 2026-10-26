# contador-demo

Contador de visitas de la landing.

## Uso

```
npm start                # sirve el contador en http://localhost:3000
node src/index.js 6      # simula 6 visitas en consola
```

Cada petición HTTP registra una visita y muestra el número que ve la landing.
El puerto se configura con la variable `PORT` (3000 por defecto).
