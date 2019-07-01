import React, { useState, useEffect } from 'react'
import ModalFormContainer from 'app/core/components/modal-form-container'
import { buildAbogado } from '../../store/_initial-state'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { FORM_TYPE } from 'app/core/enums/enums'

const useStyles = makeStyles(theme => ({}))

const ButtonSearchPerson = ({ show, onClickSearch, onClickRemove }) =>
  show ? (
    <IconButton onClick={onClickRemove}>
      <Icon>delete</Icon>
    </IconButton>
  ) : (
    <IconButton onClick={onClickSearch}>
      <Icon>search</Icon>
    </IconButton>
  )

/**
 *
 * @param {{
 *  modal: import('../../store/_initial-state').modalGestionAbogado,
 *  store: import('../../store/abogado.store').abogadoStoreType
 * }} param0
 */

const FormGestionAbogado = ({ modal, store }) => {
  const [foundPerson, setFoundPerson] = useState(false)
  const [form, setForm] = useState(buildAbogado())
  const classes = useStyles()

  useEffect(
    () => {
      setFoundPerson(false)
      if (modal.idAbogado != null) {
        store.modalGestionAbogadoActions
          .asyncGetAbogado(modal.idAbogado)
          .then(abogado => {
            if (abogado) setFoundPerson(true)
          })
      }
    },
    [modal.idAbogado]
  )

  useEffect(() => setForm(modal.abogado), [modal.abogado])

  const removeDni = () => {
    setFoundPerson(false)
    setForm(buildAbogado())
  }

  return (
    <ModalFormContainer
      open={modal.open}
      onClose={store.modalGestionAbogadoActions.closeModal}
      title={modal.title}
      onExited={() => {
        store.modalGestionAbogadoActions.resetModal()
      }}
      onSubmit={() => {
        console.log(form)
      }}
      loading={modal.loading}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            value={form.dniAbogado}
            fullWidth
            label='N° DNI'
            disabled={modal.loading}
            onChange={e => setForm({ ...form, dniAbogado: e.target.value })}
            inputProps={{
              maxLength: 8,
              readOnly: foundPerson
            }}
            InputProps={{
              endAdornment: modal.formType != FORM_TYPE.CONSULTAR && (
                <InputAdornment position='end'>
                  <ButtonSearchPerson
                    show={foundPerson}
                    onClickSearch={() => {
							console.log('buscar dni')
						 }}
                    onClickRemove={removeDni}
                  />
                </InputAdornment>
              )
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField value={form.nombres} fullWidth label='Nombres' disabled />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.primerApellido}
            fullWidth
            label='Primer Apellido'
            disabled
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={form.segundoApellido}
            fullWidth
            label='Segundo Apellido'
            disabled
          />
        </Grid>
      </Grid>
    </ModalFormContainer>
  )
}

export default FormGestionAbogado
