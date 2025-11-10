import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const ChecklistCard = ({
  checkItemHeader,
  checkItemBodyText,
  checkItemButton,
}) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<KeyboardArrowDown />}>
        <Typography
          // TODO confirm this in the figma -- i'm not sure i have access to it due to our new account setup
          component="h3"
          variant="h6"
        >
          {checkItemHeader}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{checkItemBodyText}</Typography>
      </AccordionDetails>
      <AccordionActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" href={checkItemButton.link}>
          {checkItemButton.text}
        </Button>
      </AccordionActions>
    </Accordion>
  );
};
export default ChecklistCard;
