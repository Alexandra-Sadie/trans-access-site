// !IMPORT ZONE
import { Button, Stack, Typography } from "@mui/material";

const Flowchart = () => {
  // so I'm looking at react mui drawers: https://mui.com/material-ui/react-drawer/ -- there are a couple options
  // the "responsive drawer" seems closest to what we might want?
  // this being for having a checklist on the side that can keep trakc of what papers/etc somene needs as they fill out the quiz
  // i will implement basic flowchart functionality first and then examine this further, presumably we'll do this together

  return (
    <>
      <Stack sx={{ pt: 6 }} spacing={1.5} alignItems="center">
        <Typography variant="h2">Why is my cat yelling?</Typography>
        <Typography>Which cat is yelling?</Typography>
        <Stack
          direction="row"
          // this spacing property uses the spacing unit set in the MUI theme
          // docs: https://mui.com/material-ui/customization/spacing/
          spacing={2}
          // this means the Stack will be display:none at mobile breakpoints and display:flex on desktop breakpoints
        >
          {/* These buttons should have some logic to make them be the same size but I'm doing that rn lol */}
          <Button variant="contained">Cricket</Button>
          {/* I am just giong to code the "Finch" path first */}
          <Button variant="contained">Finch</Button>
        </Stack>
      </Stack>
    </>
  );
};
export default Flowchart;
