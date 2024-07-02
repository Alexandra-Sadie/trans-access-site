// import paper
import Paper from "@mui/material/Paper";

const NameChange = () => {
  // some functions yaaaay
  //   make up a local elevation variable
  let elevationVariable = Array.from(new Array(25));
  console.log(elevationVariable);
  return (
    <>
      {elevationVariable.map((_thisdoesntmatter, elevationValue) => (
        <Paper
          elevation={elevationValue}
          sx={{ maxWidth: "400px", height: "100px", margin: "24px" }}
        >
          {elevationValue}
        </Paper>
      ))}
      {/*
  
  have it iterate on itself 24 times and each time increase its count by 1
  and make a paper component with elevation (mui trait) equal to itself
  */}
    </>
  );
};

export default NameChange;
