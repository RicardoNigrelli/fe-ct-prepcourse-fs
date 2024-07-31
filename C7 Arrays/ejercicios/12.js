function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  let arrayWithUpperCase = []
  for (let i = 0; i < array.length; i++) {
    arrayWithUpperCase.push(array[i].toUpperCase())
  }

  return arrayWithUpperCase
}

module.exports = convertirStringAMayusculas;
