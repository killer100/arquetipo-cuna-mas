import { FORM_TYPE } from "app/core/enums/enums";

/**
 * @typedef {{
 *    [prop:string]: {value: any[], loading: boolean}
 * }} IFilterList
 *
 * @typedef {{
 *    fechaRecepcion: any,
 *    tiempoPrescripcion: number,
 *    fechaPrescripcion: any,
 *    expedienteCorrupcion: boolean,
 *    idAbogado: number,
 *    amonestacionVerbal: boolean,
 *    idTrabajadorDenunciante: number,
 *    idDependenciaDenunciante: number,
 *    esDenuncianteExterno: boolean,
 *    externoDenunciante: string,
 *    observacion: string,
 *    externoDenuncianteDependencia: string,
 *    expedientes: any[],
 *    investigados: any[],
 *    archivos: any[]
 * }} IModalGestionInvestigacion
 */

export const buildFormBuscarInvestigacion = () => ({
  idDependenciaDenunciante: null,
  idAbogado: null,
  nombreInvestigado: "",
  idEstadoExpediente: "",
  fechaInicio: null,
  fechaFin: null,
  nombreDenunciante: "",
  expedienteCorrupcion: false,
  numeroExpediente: "",
  numeroHojaTramite: ""
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
      { label: "N° exp", property: "numeroExpediente" },
      { label: "N° Hoja ruta", property: "numeroExpedienteDocumentario" },
      { label: "Fecha hoja ruta", property: "fechaTramiteDocumentario" },
      { label: "Recepción UGTH", property: "fechaRecepcion" },
      { label: "Prescr. Investig.", property: "fechaPrescripcion" },
      { label: "Denunciante", property: "nombreDenunciante" },
      { label: "Dependencia denunciante", property: "DependenciaDenunciante" },
      { label: "Abog. Responsable", property: "nombreAbogado" },
      { label: "Estado Exp.", property: "estadoExpediente" }
    ]
  },

  pagination: {
    total: 0,
    page: 1,
    pageSize: 10,
    items: []
  }
};

export const buildExpedienteInvestigacion = () => ({
  fechaRecepcion: null,
  tiempoPrescripcion: 0,
  fechaPrescripcion: null,
  expedienteCorrupcion: false,
  idAbogado: null,
  amonestacionVerbal: false,
  idTrabajadorDenunciante: null,
  idDependenciaDenunciante: null,
  esDenuncianteExterno: false,
  externoDenunciante: "",
  observacion: "",
  externoDenuncianteDependencia: "",
  expedientes: [],
  investigados: [],
  archivos: []
});

export const buildModalGestionInvestigacion = () => ({
  open: false,
  title: "Registro del Expediente de Denuncia",
  formType: FORM_TYPE.REGISTRAR,
  idExpedienteInvestigacion: null,
  expedienteInvestigacion: buildExpedienteInvestigacion(),
  loading: false,
  gridArchivoDef: {},
  gridInvestigadoDef: {}
});

export const modalGestionInvestigacion = buildModalGestionInvestigacion();

export const buildAnexoExpediente = () => ({
  idAnexoExpediente: null,
  numeroExpedienteAnexo: "",
  fechaExpedienteDocumentario: null,
  folioExpediente: 0,
  remitente: "",
  descripcion: ""
});

export const buildModalFormAnexoExpediente = () => ({
  open: false,
  title: "Agregar Expediente de Hoja de Trámite",
  idAnexoExpediente: null,
  expediente: buildAnexoExpediente(),
  formType: FORM_TYPE.REGISTRAR,
  loading: false
});

export const modalFormAnexoExpediente = buildModalFormAnexoExpediente();

export const buildInvestigado = () => ({
  idInvestigado: null,
  dniInvestigado: "",
  nombres: "",
  primerApellido: "",
  segundoApellido: "",
  idDependencia: null
});

export const buildModalFormInvestigado = () => ({
  open: false,
  title: "Agregar Investigado",
  idInvestigado: null,
  investigado: buildInvestigado(),
  formType: FORM_TYPE.REGISTRAR,
  loading: false
});

export const modalFormInvestigado = buildModalFormInvestigado();

export const modalFormArchivo = {
  open: false,
  tipoArchivo: { id: null, descripcion: "", icon: null }
};

export const intialState = {
  buscadorInvestigacion,
  modalGestionInvestigacion,
  modalFormAnexoExpediente,
  modalFormInvestigado,
  modalFormArchivo
};
