import React, { useState, useEffect } from "react";
import ListTable from "app/core/components/list-table";
import update from "immutability-helper";
import GridToolbar from "app/core/components/grid-toolbar";
import ButtonListAddArchivo from "../buttons/button-list-add-archivo";

const gridArchivosDef = {
  columns: [
    { label: "Nro.", property: "nroArchivo" },
    { label: "Descripción del Archivo", property: "descripcionArchivo" },
    { label: "Nombre del Archivo Adjunto", property: "nombreArchivo" },
    { label: "Tipo de Archivo", property: "tipoArchivo" },
  ],
};

const GridArchivo = ({ archivos, onClickUpload }) => {
  const [gridDef, setGridDef] = useState(gridArchivosDef);

  useEffect(() => {
    setGridDef(
      update(gridDef, {
        columns: {
          $push: [
            {
              label: "Acciones",
              render: () => <div>acciones</div>,
            },
          ],
        },
      }),
    );
  }, []);

  return (
    <>
      <GridToolbar
        hideNew
        rightSection={<ButtonListAddArchivo onClick={onClickUpload} />}
      />

      <ListTable
        items={archivos}
        tableDef={gridDef}
        emptyMessage="No hay archivos"
      />
    </>
  );
};

GridArchivo.defaultProps = {
  archivos: [],
};

export default GridArchivo;
