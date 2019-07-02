import React from "react";
import { Route } from "react-router";
import { datosMaestroRoutes } from "app/modules/datos-maestros/routes";
import { investigacionPreliminarRoutes } from "./modules/investigacion-preliminar/routes";

const appRoutes = [...datosMaestroRoutes, ...investigacionPreliminarRoutes];

const AppRouting = () => (
  <>
    {appRoutes.map((x, i) => (
      <Route key={i} exact path={x.path} component={x.component} />
    ))}
  </>
);

export default AppRouting;
