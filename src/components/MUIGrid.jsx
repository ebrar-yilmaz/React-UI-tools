import React from "react";
import Grid from "@mui/material/Grid2";

function MUIGrid() {
  return (
    <div>
      <Grid container>
        <Grid xs={12} sm={6} md={8} lg={9}>
          item1
        </Grid>
        <Grid xs={12} sm={6} md={8} lg={3}>
          item2
        </Grid>
      </Grid>
    </div>
  );
}

export default MUIGrid;
