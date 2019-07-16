import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Moment from "../moment";

const ListTableColumn = ({ colDef, item, loading, cellProps }) => {
  let value = colDef.propertyName ? eval("item." + colDef.propertyName) : null;
  return (
    <TableCell scope="row" style={colDef.tdStyle} {...cellProps}>
      {typeof colDef.render === "function" ? (
        colDef.render(item, loading)
      ) : colDef.isDate === true ? (
        <Moment date={value} />
      ) : (
        value
      )}
    </TableCell>
  );
};

export default ListTableColumn;
