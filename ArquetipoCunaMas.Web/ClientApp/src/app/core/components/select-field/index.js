import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import update from "immutability-helper";

const NONE_SELECTED = "__NONE__";

const SelectField = ({
  options,
  bindValue,
  bindLabel,
  value,
  onChange,
  ...props
}) => {
  return (
    <TextField
      select
      value={!value ? NONE_SELECTED : value}
      onChange={(e, child) => {
        const value = e.target.value == NONE_SELECTED ? null : e.target.value;

        const newEvent = update(e, { target: { value: { $set: value } } });

        onChange && onChange(newEvent, child);
      }}
      {...props}
    >
      <MenuItem value={NONE_SELECTED}>--Todos--</MenuItem>
      {options.map((option, index) => (
        <MenuItem key={index} value={option[bindValue]}>
          {option[bindLabel]}
        </MenuItem>
      ))}
    </TextField>
  );
};

SelectField.defaultProps = {
  options: [],
  bindValue: "value",
  bindLabel: "label",
  SelectProps: {}
};

export default SelectField;
