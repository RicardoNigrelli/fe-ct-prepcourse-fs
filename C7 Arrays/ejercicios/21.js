function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:


    let monthArray = array.filter(x => x === "Enero" || x === "Marzo" || x === "Noviembre")
  

    console.log(monthArray)

    return monthArray.length === 3
      ? monthArray
      : "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
