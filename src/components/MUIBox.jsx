import React from "react";
import Box from "@mui/material/Box";

function MUIBox() {
  return (
    <div>
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      ></Box>
    </div>
  );
}

export default MUIBox;
