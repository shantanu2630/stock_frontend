// import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./Page/Dashboard";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
   <Header />
      <Dashboard />
</ThemeProvider>
     
   
  );
}

export default App;
