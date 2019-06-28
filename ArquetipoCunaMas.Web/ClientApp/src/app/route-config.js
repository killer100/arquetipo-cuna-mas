import React from "react";
import { Route } from "react-router";
import { datosMaestroRoutes } from "app/modules/datos-maestros/routes";

const appRoutes = [...datosMaestroRoutes];

const AppRouting = () => (
  <>
    {appRoutes.map((x, i) => (
      <Route key={i} exact path={x.path} component={x.component} />
    ))}
  </>
);

export default AppRouting;
