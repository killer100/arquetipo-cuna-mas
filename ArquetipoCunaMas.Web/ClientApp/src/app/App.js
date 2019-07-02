import React, { useState } from "react";
import "./App.css";
import AppRouting from "./route-config";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "app/core/components/layout/layout";

const initialState = {
  sidebarOpen: false
};

function App({ classes }) {
  const [state, setState] = useState(initialState);

  return (
    <Router>
      <Layout
        appName="SISPAD"
        sidebarOpen={state.sidebarOpen}
        openSidebar={() => {
          setState({ ...state, sidebarOpen: true });
        }}
        closeSidebar={() => {
          setState({ ...state, sidebarOpen: false });
        }}
        menu={[
          { text: "Inicio", url: "/", icon: "home" },
          {
            text: "Mantenimiento",
            icon: "settings",
            children: [{ text: "Abogado", url: "/datos-maestros/abogado", icon: "accessibility" }]
          },
          {
            text: "Investigacion",
            icon: "pageview",
            children: [{ text: "Bandeja Principal", url: "/investigacion", icon: "inbox" }]
          }
        ]}
      >
        <AppRouting />
      </Layout>
    </Router>
  );
}

export default App;
