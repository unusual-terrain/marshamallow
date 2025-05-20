import { Box, Button, TextField, Typography } from "@mui/material";
import { processLogin, useAuth } from "../../services"
import { useState } from "react";

export const Login = () => {
  const { login } = useAuth();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {

    const response = await processLogin(userId, password);
    console.log("Login response:", response.DisplayName);
    login({
      uid: userId,
      password: password,
      userData: response
    });

    
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: 320,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          color: "blac",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Oracle Application Cloud
        </Typography>

        <TextField
          label="User ID"
          variant="outlined"
          fullWidth
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1, bgcolor: "#2e2e2e" }}
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};
