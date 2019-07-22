import React from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import DatePicker from "app/core/components/datepicker";
import SelectField from "app/core/components/select-field";
import CheckboxControl from "app/core/components/checkbox-control";
import { changeInputAction } from "./form-gestion-investigacion";
import DividerTitle from "app/core/components/divider-title";

/**
 *
 * @param {{
 *  form: import('../../_store/_initial-state').IModalGestionInvestigacion,
 *  setForm: (form: import('../../_store/_initial-state').IModalGestionInvestigacion) => void
 * }} param0
 */
const FormDatosGenerales = ({ form, setInput, loading, filterLists }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <DatePicker
            label="Fecha Recep. UGTH"
            value={form.fechaRecepcion}
            onChange={date => setInput("fechaRecepcion", date)}
            disabled={loading}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <SelectField
            fullWidth
            label="Tiempo de Presc."
            value={form.tiempoPrescripcion}
            onChange={e => setInput("tiempoPrescripcion", e.target.value)}
            options={filterLists.tiempoPrescripcion.value}
            loading={filterLists.tiempoPrescripcion.loading}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <DatePicker
            label="Fecha Prescrip. IP"
            disabled={true}
            fullWidth
            value={form.fechaPrescripcion}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <CheckboxControl
            label="Expediente de corrupción"
            checked={form.expedienteCorrupcion}
            onChange={e => setInput("expedienteCorrupcion", e.target.checked)}
            value="checked"
            color="primary"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <SelectField
            fullWidth
            label="Abogado Responsable"
            value={form.idAbogado}
            onChange={e => setInput("idAbogado", e.target.value)}
            options={filterLists.abogado.value}
            loading={filterLists.abogado.loading}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <CheckboxControl
            label="Amonestación Verbal"
            checked={form.amonestacionVerbal}
            onChange={e => setInput("amonestacionVerbal", e.target.checked)}
            value="checked"
            color="primary"
          />
        </Grid>
      </Grid>
      <DividerTitle title="Datos del Denunciante" />
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <SelectField
            fullWidth
            label="Trabajador denunciante"
            value={form.idTrabajadorDenunciante}
            onChange={e => setInput("idTrabajadorDenunciante", e.target.value)}
            options={filterLists.trabajador.value}
            loading={filterLists.trabajador.loading}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Dependencia del denunciante externo"
            value={form.externoDenuncianteDependencia}
            onChange={e =>
              setInput("externoDenuncianteDependencia", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CheckboxControl
            label="Denunciante externo"
            checked={form.esDenuncianteExterno}
            onChange={e => setInput("esDenuncianteExterno", e.target.checked)}
            value="checked"
            color="primary"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <TextField
            fullWidth
            label="Nombre del denunciante externo"
            value={form.externoDenunciante}
            onChange={e => setInput("externoDenunciante", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows="4"
            rowsMax="4"
            fullWidth
            label="Observación del caso"
            value={form.observacion}
            onChange={e => setInput("observacion", e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

FormDatosGenerales.defaultProps = {
  loading: false,
  filterLists: {
    tiempoPrescripcion: {
      loading: false,
      value: []
    },
    abogado: {
      loading: false,
      value: []
    },
    trabajador: {
      loading: false,
      value: []
    }
  }
};

export default FormDatosGenerales;
