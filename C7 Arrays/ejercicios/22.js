function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let table = []
  let counter = 0 


  while (table.length < 11) {
    table.push(counter * 6)
    counter++
  }

  return table

}

module.exports = tablaDelSeis;
