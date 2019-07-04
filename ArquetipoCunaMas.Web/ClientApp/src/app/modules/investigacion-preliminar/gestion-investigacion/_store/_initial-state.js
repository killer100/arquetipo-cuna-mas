/**
 * @typedef {{
 *    [prop:string]: {value: any[], loading: boolean}
 * }} IFilterList
 */

export const buildFormBuscarInvestigacion = () => ({
  idDependenciaDenunciante: "",
  idAbogado: "",
  nombreInvestigado: "",
  idEstadoExpediente: "",
  fechaInicio: null,
  fechaFin: null,
  nombreDenunciante: "",
  expedienteCorrupcion: false,
  numeroExpediente: null
});

export const buscadorInvestigacion = {
  loading: false,

  /**
   *
   * @param {IFilterList} filterLists
   */
  filterLists: {
    dependencias: { value: [], loading: false },
    abogados: { value: [], loading: false },
    estados: { value: [], loading: false }
  },

  filters: buildFormBuscarInvestigacion(),

  tableDef: {
    columns: [
      { label: "N° exp", property: "dniAbogado" },
      { label: "N° Hoja ruta", property: "nombres" },
      { label: "Fecha hoja ruta", property: "primerApellido" },
      { label: "Recepción UGTH", property: "segundoApellido" },
      { label: "Prescr. Investig.", property: "fechaRegistro" },
      { label: "Denunciante", property: "fechaRegistro" },
      { label: "Dependencia denunciante", property: "fechaRegistro" },
      { label: "Abog. Responsable", property: "fechaRegistro" },
      { label: "Estado Exp.", property: "fechaRegistro" },
      { label: "Alerta", property: "fechaRegistro" }
    ]
  },

  pagination: {
    total: 0,
    page: 1,
    pageSize: 10,
    items: []
  }
};

//export const modalGestionAbogado = buildModalAbogado();

export const intialState = {
  buscadorInvestigacion
  //modalGestionAbogado
};
