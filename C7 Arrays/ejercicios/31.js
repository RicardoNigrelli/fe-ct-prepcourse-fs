function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  let newText = texto.split('')
  return newText.reverse().join('')
}

module.exports = invertirTexto;
