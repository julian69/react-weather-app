import React from "react";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const NotFound: React.FC = () => (
  <Box
    display="flex"
    height="100vh"
    alignItems="center"
    justifyContent="center"
  >
    <Typography variant="h4" component="h2">
      Ups... Something went wrong.
    </Typography>
  </Box>
);

export default NotFound;
