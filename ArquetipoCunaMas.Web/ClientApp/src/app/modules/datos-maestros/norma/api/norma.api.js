import moment from "moment";

const fechaRegistro = moment();
export const GetPageNorma = (page, pageSize, filter = null) => {
  console.log("filtros norma", filter);
  const filters = {
    ...filter
  };

  const source = [
    {
      idNorma: 1,
      numeroNorma: "ads",
      descripcion: "asdds",
      fechaRegistro: fechaRegistro
    },
    {
      idNorma: 2,
      numeroNorma: "afafas",
      descripcion: "sfsdf",
      fechaRegistro: fechaRegistro
    },
    {
      idNorma: 3,
      numeroNorma: "sfs",
      descripcion: "wrwefw",
      fechaRegistro: fechaRegistro
    },
    {
      idNorma: 4,
      numeroNorma: "wef",
      descripcion: "dfgdgdfgd",
      fechaRegistro: fechaRegistro
    }
  ];

  const items = source.slice((page - 1) * pageSize).slice(0, pageSize);

  const total = source.length;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          items,
          total
        }
      });
    }, 500);
  });
};
