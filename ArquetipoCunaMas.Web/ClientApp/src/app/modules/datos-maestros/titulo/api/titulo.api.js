import moment from "moment";

const fechaRegistro = moment();

export const GetPageTitulo = (idNorma, page, pageSize, filter = null) => {
  console.log("idNorma", idNorma, "filtros titulo", filter);
  const filters = {
    ...filter
  };

  const source = [
    {
      idTitulo: 1,
      numeroTitulo: "ads",
      descripcion: "asdds",
      fechaRegistro: fechaRegistro
    },
    {
      idTitulo: 2,
      numeroTitulo: "afafas",
      descripcion: "sfsdf",
      fechaRegistro: fechaRegistro
    },
    {
      idTitulo: 3,
      numeroTitulo: "sfs",
      descripcion: "wrwefw",
      fechaRegistro: fechaRegistro
    },
    {
      idTitulo: 4,
      numeroTitulo: "wef",
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
