import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ConsoleLeftPanel, ConsoleRightPanel } from "../components/console";

export const Console = () => {
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
            width: "20%",
            bgcolor: "#2e2e2e",
            color: "white",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <ConsoleLeftPanel />
        </Box>

        {/* Right Side - 60% */}
        <Box
          sx={{
            width: "80%",
            bgcolor: "#ffffff",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ConsoleRightPanel />
        </Box>
      </Box>
    </React.Fragment>
  );
};
