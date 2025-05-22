import { Box, Paper, Typography } from "@mui/material";
import type { SxProps } from "@mui/system";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useAuth, type DynamicComponent } from "../../services";
import { MarkdownViewer } from "./MarkdownViewer";

interface ContentAreaProps {
  sx?: SxProps;
  components: DynamicComponent[];
}

export const ContentArea = ({ sx, components }: ContentAreaProps) => {
    const { authData } = useAuth();
  
  const renderComponent = (component: DynamicComponent) => {
    switch (component.type) {
      case "query":
        return (
          <Box
            sx={{
              width: "100%",
              textAlign:
                "right" /* Or use display: 'flex', justifyContent: 'flex-end' on the parent */,
              // If using flexbox, consider alignItems: 'center' to vertically align icon and text
            }}
          >
            {/* Place the icon before the Typography */}
            <AccountCircle
              sx={{ marginRight: "8px", verticalAlign: "middle" }}
            />{" "}
            {/* Add margin-right for spacing and vertical-align */}
            <Typography
              key={component.id}
              fullWidth
              multiline
              {...component.props}
              sx={{
                backgroundColor: "#fff", // Or a light hex code like #f0f0f0
                padding: "10px",
                borderRadius: "4px",
                display: "inline-block",
              }}
            >
              {component.value}
            </Typography>
          </Box>
        );

      case "response":
        return (
          <Box sx={{ width: "100%", textAlign: "left" }}>
            <Box display="flex" alignItems="center">
              {component.props?.loading ? (
                <AutoAwesomeIcon
                  sx={{
                    mr: 1,
                    animation: "spin 1s linear infinite",
                    "@keyframes spin": {
                      "0%": { transform: "rotate(0deg)" },
                      "100%": { transform: "rotate(360deg)" },
                    },
                  }}
                />
              ) : (
                <AutoAwesomeIcon sx={{ mr: 1 }} />
              )}
              {component.props?.loading ? (
                <Typography sx={{ fontStyle: "italic", opacity: 0.6 }}>
                  Processing...
                </Typography>
              ) : (
                <MarkdownViewer markdown={component.value} />
              )}
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        overflowY: "auto", // Enables scrolling only on the y-axis when content overflows
        overflowX: "hidden", // Hides horizontal overflow

        marginLeft: "15%", // 15% margin on the left
        marginRight: "15%", // 15% margin on the right

        // You might still need to consider height/minHeight based on your layout context
        // minHeight: 0, // Useful in flex containers to prevent overflow instead of shrinking

        // Include any custom styles passed from the parent component
        ...sx,
      }}
    >
      {/* This is where the content you place inside ContentArea will be rendered */}
{components.length === 0 ? (
  <Box
    sx={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Paper elevation={0} sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        👋 Welcome! {authData?.userData.DisplayName}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Waiting for your query.
      </Typography>
    </Paper>
  </Box>
) : (
  components.map(renderComponent)
)}
    </Box>
  );
};
