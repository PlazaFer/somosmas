export const parseString = (cadena) => {
  if (cadena) {
    const primerModificacion = cadena
      .replace(/ /g, "")
      .split("#")
      .toString()
      .split(",");
    const filtrarResultado = primerModificacion.filter(
      (elemento) => elemento !== ""
    );
    const resultadoFinal = filtrarResultado.toString().replace(/,/g, "+");
    return resultadoFinal;
  }
};
