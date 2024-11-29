import Grid from "@mui/material/Unstable_Grid2";

const GridItemPolyfill = ({ size, children, offset, ...props }) => {
  return (
    <Grid
      xs={size && size.xs ? size.xs : null}
      md={size && size.md ? size.md : null}
      xsOffset={offset && offset.xs ? offset.xs : null}
      mdOffset={offset && offset.md ? offset.md : null}
      {...props}
    >
      {children}
    </Grid>
  );
};
export default GridItemPolyfill;
