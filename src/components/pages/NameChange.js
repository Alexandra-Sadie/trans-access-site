import { Paper } from "@mui/material";
import GridItemPolyfill from "../GridItemPolyfill";
const NameChange = () => {
  return (
    <>
      {[...new Array(12)].map((_, i) => (
        <GridItemPolyfill size={{ xs: 1, md: 1 }}>
          <Paper>{i}</Paper>
        </GridItemPolyfill>
      ))}
    </>
  );
};

export default NameChange;
