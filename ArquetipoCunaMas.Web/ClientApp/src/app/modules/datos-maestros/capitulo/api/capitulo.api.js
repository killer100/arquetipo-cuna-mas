import moment from "moment";

const fechaRegistro = moment();

export const GetPageCapitulo = (idTitulo, page, pageSize, filter = null) => {
  console.log("idTitulo", idTitulo, "filtros titulo", filter);
  const filters = {
    ...filter
  };

  const source = [
    {
      idCapitulo: 1,
      numeroCapitulo: "ads",
      descripcion: "asdds",
      fechaRegistro: fechaRegistro
    },
    {
      idCapitulo: 2,
      numeroCapitulo: "afafas",
      descripcion: "sfsdf",
      fechaRegistro: fechaRegistro
    },
    {
      idCapitulo: 3,
      numeroCapitulo: "sfs",
      descripcion: "wrwefw",
      fechaRegistro: fechaRegistro
    },
    {
      idCapitulo: 4,
      numeroCapitulo: "wef",
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
