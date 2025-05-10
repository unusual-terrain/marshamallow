import { Box, Typography } from "@mui/material";
import logo from "../../assets/mm.png";

export const ConsoleLeftPanel = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      py={4}
      alignItems="center"
    >
      <Box display="flex" alignItems="center" gap={2}>
        <img src={logo} alt="Company Logo" style={{ width: 60, height: 60 }} />

        <Box display="flex" flexDirection="column">
          <Typography variant="h5" fontWeight="bold" color="white">
            marshmellows
          </Typography>

          <Typography variant="caption" color="white" mt={0.5}>
            Business Intelligence
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center">
      <Typography variant="h5" color="white" mt={2}>
          Oracle Application Cloud
        </Typography>
        <Typography variant="body2" color="white" mt={2}>
          © 2025 Antzlab Technology Services Pvt Ltd. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
