import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

function MUITextField() {
  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim" variant="outlined" />
        <TextField label="isim" variant="filled" />
        <TextField label="isim" variant="standard" />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim" variant="outlined" color="warning" />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="isim"
          variant="outlined"
          color="warning"
          helperText="*isminizi giriniz"
        />
        <TextField
          label="şifre"
          variant="outlined"
          color="warning"
          helperText="*şifrenizi kimseye göstermeyin"
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="Kimlik No"
          disabled
          variant="outlined" //inputu tıklanılılmaz yapar.
          color="warning"
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          color="warning"
          size="medium"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
    </div>
  );
}

export default MUITextField;
