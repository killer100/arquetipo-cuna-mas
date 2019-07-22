import moment from "moment";

const fechaRegistro = moment();

export const GetPageArticulo = (idCapitulo, page, pageSize, filter = null) => {
  console.log("idCapitulo", idCapitulo, "filtros Capítulo", filter);
  const filters = {
    ...filter
  };

  const source = [
    {
      idArticulo: 1,
      numeroArticulo: "ads",
      descripcion: "asdds",
      fechaRegistro: fechaRegistro
    },
    {
      idArticulo: 2,
      numeroArticulo: "afafas",
      descripcion: "sfsdf",
      fechaRegistro: fechaRegistro
    },
    {
      idArticulo: 3,
      numeroArticulo: "sfs",
      descripcion: "wrwefw",
      fechaRegistro: fechaRegistro
    },
    {
      idArticulo: 4,
      numeroArticulo: "wef",
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
