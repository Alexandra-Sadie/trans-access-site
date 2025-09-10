import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const ChecklistItem = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<KeyboardArrowDown />}>
        <Typography
          // TODO confirm this in the figma -- i'm not sure i have access to it due to our new account setup
          component="h3"
          variant="h6"
        >
          This is your checklist.
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          perspiciatis quidem, blanditiis quia iste ab, commodi eligendi ad fuga
          consequuntur alias! Aperiam omnis nemo accusamus quibusdam aspernatur
          et perspiciatis fugiat?
        </Typography>
      </AccordionDetails>
      <AccordionActions sx={{ justifyContent: "center" }}>
        <Button variant="contained">Dismiss</Button>
      </AccordionActions>
    </Accordion>
  );
};
export default ChecklistItem;
