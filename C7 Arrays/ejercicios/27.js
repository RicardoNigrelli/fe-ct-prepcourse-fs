function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  let newString = "";
  for (let i = 0; i < palabras.length; i++) {
    if (i < palabras.length - 1) {
      newString += palabras[i] + " ";
    } else {
      newString += palabras[i];
    }
  }
  return newString;
}

module.exports = dePalabrasAFrase;
