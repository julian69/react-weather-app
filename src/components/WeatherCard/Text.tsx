import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  value: string | number;
}

const Text: React.FC<Props> = ({ value }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Typography
        className={classes.text}
        color="textSecondary"
        component="span"
      >
        {value}
      </Typography>
    </Grid>
  );
};

export default Text;
