import { Box, Typography } from "@mui/material";
import logo from "../../assets/mm.png";

export const LeftPanel = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <img src={logo} alt="Company Logo" style={{ width: 100, height: 100 }} />

      <Typography variant="h5">marshmallows</Typography>

      <Typography variant="subtitle1">Business Intelligence</Typography>
    </Box>
  );
};
