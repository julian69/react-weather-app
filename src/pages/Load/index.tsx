import React from "react";
import { Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const Load: React.FC = () => (
  <Box
    display="flex"
    height="100vh"
    alignItems="center"
    justifyContent="center"
  >
    <CircularProgress data-testid="loader" />
  </Box>
);
export default Load;
