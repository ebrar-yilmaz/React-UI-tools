import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MUIAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          EBRAR
        </AccordionSummary>
        <AccordionDetails>
          Bak canım,biz bu işin ithalatını,ihracatını,yeri geliyor imalatını
          yapıyoruz.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          ÖZKAN
        </AccordionSummary>
        <AccordionDetails>Biz bu işin Vakkosuyuz.</AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>İBO</AccordionSummary>
        <AccordionDetails>hallederiz abi</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MUIAccordion;
