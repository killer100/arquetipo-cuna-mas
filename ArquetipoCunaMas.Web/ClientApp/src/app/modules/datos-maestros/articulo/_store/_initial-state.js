import { FORM_TYPE } from "app/core/enums/enums";

//===============================
// MODAL GESTION CAPITULO
//===============================
/**
 * @type {{
 *  idCapitulo: number,
 *  capitulo: {
 *    idCapitulo: number,
 *    numeroCapitulo: string,
 *    descripcion: string
 *    titulo: {
 *      idTitulo: number,
 *      numeroTitulo: string,
 *      descripcion: string,
 *      norma: {
 *        idNorma: number,
 *        numeroNorma: string,
 *        descripcion: string
 *      }
 *    }
 *  }
 * }}
 */
export const capituloData = {
  idCapitulo: null,
  capitulo: null
};

//===============================
// MODAL GESTION ARTICULO
//===============================

/**
 * @typedef {{
 * 	 idArticulo: number;
 *   numeroArticulo: string;
 *   descripcion: string;
 * }} IArticulo
 */

export const buildArticulo = () => ({
  idCapitulo: null,
  idArticulo: null,
  numeroArticulo: "",
  descripcion: ""
});

export const buildModalGestionCapitulo = () => ({
  open: false,
  loading: false,
  title: "Registro de Capítulo de la Norma Legal",
  idCapitulo: null,
  formType: FORM_TYPE.REGISTRAR,
  /**
   * @type ICapitulo
   */
  capitulo: buildCapitulo()
});

export const modalGestionCapitulo = buildModalGestionCapitulo();

//===============================
// FORMULARIO BUSCAR CAPITULO
//===============================

export const buildFormBuscarCapitulo = () => ({
  numeroCapitulo: "",
  descripcion: ""
});

export const buscadorCapitulo = {
  loading: false,
  pagination: {
    page: 1,
    pageSize: 10,
    total: 0,
    items: []
  },

  filters: buildFormBuscarCapitulo(),

  gridDefinition: {
    columns: [
      { label: "Nro. del Capítulo", property: "numeroCapitulo" },
      {
        label: "Descripción del Capítulo",
        property: "descripcion"
      },
      { label: "Fecha de Registro", property: "fechaRegistro", isDate: true }
    ]
  }
};

//===============================
// INITIAL STATE
//===============================

export const initialState = {
  buscadorCapitulo,
  modalGestionCapitulo,
  tituloData
};
