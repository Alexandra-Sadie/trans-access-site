import Grid from "@mui/material/Unstable_Grid2";

const GridItemPolyfill = ({ size, children, ...props }) => {
  return (
    <Grid xs={size.xs} md={size.md} {...props}>
      {children}
    </Grid>
  );
};
export default GridItemPolyfill;
