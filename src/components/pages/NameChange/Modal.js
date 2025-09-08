import { Backdrop, Slide } from "@mui/material";

// TODO: remove 'height' once provider is up and running
// ? Not sure if just Modal is a good name as there is also an MUI Modal component, as well as because this is currently very specifically just for the checklist and can't be used elsewhere
const Modal = ({ height, children }) => {
  return (
    <Backdrop
      // TODO: replace 'true' once provider is up and running
      open={true}
      sx={{
        // These two properties make the backdrop fill the Grid row
        position: "relative",
        top: -height - 72,
        width: "100%", // This ensures the checklist and backdrop fill the Grid container
        zIndex: 20, // This places the backdrop in between the progress bar and checklist
        borderRadius: 1, // Gives Backdrop a border radius, 1 here is not the px value, but the amount to multiply default theme value by
        justifyContent: "flex-start", // This is necesassary for Grid item size to be respected
      }}
    >
      <Slide
        // TODO: replace 'true' once provider is up and running
        in={true}
        direction="left"
      >
        {children}
      </Slide>
    </Backdrop>
  );
};

export default Modal;
