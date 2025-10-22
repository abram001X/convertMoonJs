export function getIdYt(url) {
  if (typeof url !== "string") return "Ingresa una url válida";
  const coincidents = url.match(/(?<=v=)[A-Za-z0-9\W][^&]+(?=&|\b)/g);
  const id = coincidents ? coincidents[0] : "Ingresa una url válida";
  return id;
}
