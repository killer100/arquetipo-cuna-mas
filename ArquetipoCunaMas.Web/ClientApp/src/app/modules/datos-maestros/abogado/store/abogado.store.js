import { BuscadorAbogadoActions } from './buscador-abogados.action'
import { ModalGestionAbogadoActions } from './modal-gestion-abogado.action'

/**
 * @typedef {{
 *  buscadorAbogadoActions: BuscadorAbogadoActions
 *  modalGestionAbogadoActions: ModalGestionAbogadoActions
 * }} abogadoStoreType
 * @param {() => import('./_initial-state').intialState} getState
 * @param {(state:import('./_initial-state').intialState, callback?: () => void ) => void} setState
 * @returns {abogadoStoreType}
 */
export function abogadoStore (getState, setState) {
  /**
   * helper que devuelve un metodo "getState" para ser
   * utilizado por las clases "Acciones" que solo devolverá
   * el contexto que se defina por la variable "prop"
   * @param {string} prop
   */
  const buildScopedGetState = prop => () => getState()[prop]
  /**
   * helper que devuelve un metodo "setState" para ser
   * utilizado por las clases "Acciones" que solo asignará
   * el estado del contexto que se defina por la variable "prop"
   * @param {string} prop
   */
  const buildScopedSetState = prop => (newState, callback) => {
    setState({ [prop]: newState }, callback)
  }
  //= ==============================================
  // Configurando las acciones del store
  //= ==============================================
  return {
    /**
     * Se instancia la accion acotando su stado a la
     * propiedad "buscadorAbogados" que debe existir en
     * el estado inicial
     */
    buscadorAbogadoActions: new BuscadorAbogadoActions(
      buildScopedGetState('buscadorAbogados'),
      buildScopedSetState('buscadorAbogados')
    ),
    /**
     * Se instancia la accion acotando su stado a la
     * propiedad "modalGestionAbogado" que debe existir en
     * el estado inicial
     */
    modalGestionAbogadoActions: new ModalGestionAbogadoActions(
      buildScopedGetState('modalGestionAbogado'),
      buildScopedSetState('modalGestionAbogado')
    )
  }
}
