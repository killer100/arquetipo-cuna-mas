import { dataSourceInvestigacion } from "./datasource";

export const GetPageInvestigacion = (page, pageSize, filter = null) => {
  const { fechaInicio, fechaFin } = filter;
  const filters = {
    ...filter,
    fechaInicio: fechaInicio ? fechaInicio.format("YYYY-MM-DD") : fechaInicio,
    fechaFin: fechaFin ? fechaFin.format("YYYY-MM-DD") : fechaFin
  };
  console.log(filters);
  const source = dataSourceInvestigacion;

  const items = source.slice((page - 1) * pageSize).slice(0, pageSize);

  const total = source.length;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: { items, total }
      });
    }, 500);
  });
};

export const GetInvestigacion = id => {
  const investigacion = dataSourceInvestigacion.find(
    x => x.idExpedienteInvestigacion == id
  );

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: { investigacion }
      });
    }, 500);
  });
};

export const DeleteInvestigacion = id => {
  dataSourceInvestigacion.splice(
    dataSourceInvestigacion.findIndex(x => x.idExpedienteInvestigacion == id),
    1
  );
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: null,
        msg: "Se eliminó la investigacion"
      });
    }, 500);
  });
};
