import { Box, Typography } from "@mui/material";
import logo from "../../assets/mm.png";
import { useAuth } from "../../services";

export const ConsoleLeftPanel = () => {
  const { authData } = useAuth();
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
            marshmallows
          </Typography>

          <Typography variant="caption" color="white" mt={0.5}>
            Business Intelligence
          </Typography>
        </Box>
      </Box>
      <Box textAlign="start">
        <Typography variant="body2" color="white" mt={0.5} ml={1}>
          connected to Oracle HCM Cloud
        </Typography>
        <Typography variant="body2" color="white" mt={0.5} ml={1}>
          { 
            authData?.userData.DisplayName +
            " | " +
            authData?.userData.PersonNumber}
        </Typography>
        <Box mt={4} /> {/* Blank space */}
        <Box textAlign="center">
  <Typography variant="caption" color="white" display="block" mt={2}>
    © 2025 Antzlab Technology Services Pvt Ltd.
  </Typography>
  <Typography variant="caption" color="white" display="block" mt={0.25}>
    All rights reserved.
  </Typography>
</Box>
      </Box>
    </Box>
  );
};
