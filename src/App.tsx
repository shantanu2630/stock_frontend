// import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./Page/Dashboard";
import { theme } from "./theme";
// import WebSockets from "./components/WebSockets";

function App() {
  return (
    <ThemeProvider theme={theme}>
   <Header /> 
      <Dashboard />
      {/* <WebSockets/> */}
</ThemeProvider>
     
   
  );
}

export default App;
