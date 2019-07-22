import update from "immutability-helper";
import { GetPageCapitulo } from "../../api/articulo.api";

/**
 * Acciones que gestionarán el contexto del buscador dentro del estado
 */
export class BuscadorCapituloActions {
  /**
   * @param {() => import('../_initial-state').buscadorCapitulo} getState
   * @param {(state:import('../_initial-state').buscadorCapitulo ) => void} setState
   */
  constructor(getState, setState) {
    this.getState = getState;
    this.setState = setState;
  }

  addColumns = newColumns => {
    return new Promise(resolve => {
      this.setState(
        update(this.getState(), {
          gridDefinition: {
            columns: { $push: newColumns }
          }
        }),
        () => resolve()
      );
    });
  };

  //= ============================================
  // Acciones asincronas
  //= ============================================

  fetchCapitulosBegin = () => {
    this.setState({
      ...this.getState(),
      loading: true
    });
  };

  fetchCapitulosSuccess = (items, total, page, pageSize) => {
    const newState = update(this.getState(), {
      loading: {
        $set: false
      },
      pagination: {
        $set: {
          items: items,
          page: page,
          pageSize: pageSize,
          total: total
        }
      }
    });

    this.setState(newState);
  };

  asyncFetchCapitulos = (
    idTitulo,
    page = null,
    pageSize = null,
    filters = null
  ) => {
    const state = this.getState();
    if (!page) page = state.pagination.page;
    if (!pageSize) pageSize = state.pagination.pageSize;
    if (!filters) filters = state.filters;

    this.fetchCapitulosBegin();

    GetPageCapitulo(idTitulo, page, pageSize, filters).then(response => {
      const { items, total } = response.data;
      this.fetchCapitulosSuccess(items, total, page, pageSize);
    });
  };

  // asyncDeleteInvestigacion = id => {
  // 	this.deleteInvestigacionBegin();
  // 	return DeleteInvestigacion(id).then(response => {
  // 		this.deleteInvestigacionSuccess();
  // 		return response;
  // 	});
  // };
}
