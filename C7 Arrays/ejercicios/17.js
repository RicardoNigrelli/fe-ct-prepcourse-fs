function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let newArray = 0
  for (let i = 0; i < arrayOfNums.length; i++) {
    newArray += arrayOfNums[i]
  }
return newArray
}

module.exports = agregarNumeros;
