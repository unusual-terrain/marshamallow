import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { LeftPanel, Login } from "../components/home";

export const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Left Side - 40% */}
        <Box
          sx={{
            width: "35%",
            bgcolor: "#2e2e2e",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          < LeftPanel />
        </Box>

        {/* Right Side - 60% */}
        <Box
          sx={{
            width: "65%",
            bgcolor: "#ffffff",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          < Login />
        </Box>
      </Box>
    </React.Fragment>
  );
};
