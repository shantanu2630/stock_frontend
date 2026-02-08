// import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./Page/Dashboard";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./components/Dashboard/Test";


// import WebSockets from "./components/WebSockets";

function App() {
  return (  
    <ThemeProvider theme={theme}>
     

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<Test/>} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
