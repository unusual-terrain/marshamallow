import { useState } from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import {
  type ComponentType,
  type DynamicComponent,
  processQuery,
} from "../../services";

interface SendChatProps {
  components: DynamicComponent[];
  setComponents: React.Dispatch<React.SetStateAction<DynamicComponent[]>>;
}
export const SendChat = ({ setComponents }: SendChatProps) => {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addComponent = (
    type: ComponentType,
    value: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: any,
    id: string = crypto.randomUUID()
  ) => {
    setComponents((prev) => [...prev, { id, type, value, props }]);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    addComponent("query", inputValue);
    setInputValue("");

    const loadingId = crypto.randomUUID();
    addComponent("response", "", { loading: true }, loadingId); // Pass loadingId here!

    try {
      const response = await processQuery(inputValue);
      setComponents((prev) =>
        prev.map((comp) =>
          comp.id === loadingId
            ? { ...comp, value: response, props: { loading: false } }
            : comp
        )
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setComponents((prev) =>
        prev.map((comp) =>
          comp.id === loadingId
            ? {
                ...comp,
                value: `😢 ${error.message}`,
                props: { loading: false },
              }
            : comp
        )
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      width="100%"
    >
      <Box
        sx={{
          p: 2,
          background: "#fff",
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            width: "100%",
            maxWidth: 600,
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 3,
            px: 2,
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            placeholder="Ask me your query..."
            multiline
            minRows={3}
           
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            inputProps={{
              style: {
                fontSize: "1.1rem",
                paddingRight: 8, // pr: 1
                paddingTop: 12, // py: 1.5
                paddingBottom: 12,
              },
            }}
          />
          <IconButton sx={{ color: "#2e2e2e" }} onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
