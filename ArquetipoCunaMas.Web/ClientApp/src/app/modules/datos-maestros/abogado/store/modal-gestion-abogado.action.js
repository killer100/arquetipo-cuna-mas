import update from 'immutability-helper'
import { FORM_TYPE } from 'app/core/enums/enums'
import { buildModalAbogado } from './_initial-state'
import { GetAbogado } from '../api/abogado.api'

/**
 * Acciones que gestionarán el contexto del Modal de gestión de abogados
 * dentro del estado
 */
export class ModalGestionAbogadoActions {
  /**
   * @param {() => import('./_initial-state').modalGestionAbogado} getState
   * @param {(state:import('./_initial-state').modalGestionAbogado ) => void} setState
   */
  constructor (getState, setState) {
    this.getState = getState
    this.setState = setState
  }

  openModalNew = () => {
    this.setState({ ...this.getState(), open: true })
  }

  openModalShow = id => {
    const state = this.getState()

    this.setState(
      update(state, {
        title: { $set: 'Ver Abogado' },
        formType: { $set: FORM_TYPE.CONSULTAR },
        idAbogado: { $set: id },
        open: { $set: true }
      })
    )
  }

  openModalUpdate = id => {
    this.setState(
      update(this.getState(), {
        title: { $set: 'Editar Abogado' },
        formType: { $set: FORM_TYPE.EDITAR },
        idAbogado: { $set: id },
        open: { $set: true }
      })
    )
  }

  closeModal = () => {
    this.setState({
      ...this.getState(),
      open: false
    })
  }

  resetModal = () => {
    this.setState(buildModalAbogado())
  }

  setModal = newModalState => {
    this.setState(newModalState)
  }

  getAbogadoBegin = () => {
    this.setState({ ...this.getState(), loading: true })
  }

  getAbogadoSuccess = abogado => {
    this.setState({ ...this.getState(), abogado, loading: false })
  }

  //= ============================================
  // Acciones asincronas
  //= ============================================

  asyncGetAbogado = id => {
    this.getAbogadoBegin()
    return GetAbogado(id).then(response => {
      this.getAbogadoSuccess(response.data.abogado)
      return response.data.abogado
    })
  }
}
