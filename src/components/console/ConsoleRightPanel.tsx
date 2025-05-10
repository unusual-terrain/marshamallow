import { useEffect, useRef, useState } from "react";
import type { DynamicComponent } from "../../services";
import { ContentArea } from "./ContentArea";
import { SendChat } from "./SendChat";
import { Box } from "@mui/system";

export const ConsoleRightPanel = () => {
  const [components, setComponents] = useState<DynamicComponent[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [components]); // runs whenever new content is added
  return (
    <Box
      sx={{
        background: "white",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        paddingTop: 5,
        
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Scrollable content area */}
      <Box
        ref={scrollRef}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          px: 2,
          pt: 2,
        }}
      >
        <ContentArea components={components} />
      </Box>

      {/* Chat input area */}
      <Box sx={{ px: 2, pb: 2, pt: 1 }}>
        <SendChat components={components} setComponents={setComponents} />
      </Box>
    </Box>
  );
};
