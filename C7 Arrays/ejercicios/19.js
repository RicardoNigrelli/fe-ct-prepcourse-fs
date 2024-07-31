function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  let producto = 1
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i]
  }

  return arguments.length === 0 ? 0 : producto
}

module.exports = multiplicarArgumentos;
