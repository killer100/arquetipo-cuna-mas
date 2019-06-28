import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginBottom: theme.spacing(2)
  }
});

const FormBuscar = ({ classes }) => {
  return (
    <Card className={classes.root}>
      <CardContent>assad</CardContent>
    </Card>
  );
};

export default withStyles(styles)(FormBuscar);
