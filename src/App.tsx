import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import LeftDrawer from "./components/LeftDrawer";
import "./i18n";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <LeftDrawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 0 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
