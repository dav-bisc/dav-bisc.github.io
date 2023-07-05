const convDataIta = (data) => {
  if (data === null || data === "" || data === "null") {
    return "";
  }

  let dataEsameMod = data.substring(0, 10);
  let anno = dataEsameMod.substring(0, 4);
  let mese = dataEsameMod.substring(5, 7);
  let giorno = dataEsameMod.substring(8, 10);
  let dataFormatoIta = giorno + "-" + mese + "-" + anno;
  if (dataFormatoIta !== "--null") {
    data = dataFormatoIta;
  }

  return data;
};

export default convDataIta;
