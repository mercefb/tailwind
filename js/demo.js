// Muestra debajo de cada ejemplo el código HTML que lo genera.
// Así cada ejemplo se escribe una sola vez: lo que ves y lo que lees es lo mismo.
// Uso: <div class="demo" data-demo> ...ejemplo... </div>

document.querySelectorAll('[data-demo]').forEach((demo) => {
  const lineas = demo.innerHTML.replace(/^\s*\n/, '').replace(/\s+$/, '').split('\n');
  const sangrias = lineas
    .filter((linea) => linea.trim() !== '')
    .map((linea) => linea.match(/^\s*/)[0].length);
  const sangria = Math.min(...sangrias);
  const codigo = lineas.map((linea) => linea.slice(sangria)).join('\n');

  const pre = document.createElement('pre');
  pre.className = 'codigo';
  const code = document.createElement('code');
  code.textContent = codigo;
  pre.append(code);
  demo.after(pre);
});
