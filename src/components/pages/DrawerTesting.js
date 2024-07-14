import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Stack } from "@mui/material";

//! my imports
import { Button } from "@mui/material";
import { useState } from "react";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  //! states
  const [finchYelling, setFinchYelling] = useState(false);
  // this one has default state of "" because we want it to appear on page load
  const [displayWhoIsYellingQuestion, setDisplayWhoIsYellingQuestion] =
    useState("");
  // the rest have default state of "none" because they will display:none by default
  // this could probably be done more functionally, without using these states, by having the buttons directly display:none the elements in question
  const [displayIsFinchAloneQuestion, setDisplayIsFinchAloneQuestion] =
    useState("none");
  const [displayFinchIsAloneEndpoint, setDisplayFinchIsAloneEndpoint] =
    useState("none");
  const [
    displayBirdOrPlayfightingEndpoint,
    setDisplayBirdOrPlayfightingEndpoint,
  ] = useState("none");

  // states to put things that are true and things to be done in the drawer
  const [trueThings, setTrueThings] = useState([]);
  const [thingsToDo, setThingsToDo] = useState([]);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          Persistent drawer
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Main open={open}>
        <>
          {/* //* FLOWCHART QUESTIONS */}
          <Stack sx={{ pt: 6 }} spacing={1.5} alignItems="center">
            <Typography variant="h2">Why is my cat yelling?</Typography>
            {/* Putting this in a box (mui div) so that when I apply vanilla react state/conditional logic, this box can appear or disappear based on said logic*/}
            {/* Maybe this could/should be a Stack or a more directly relevant MUI component? */}

            <Box display={displayWhoIsYellingQuestion}>
              <Typography>Which cat is yelling?</Typography>
              <Stack direction="row" spacing={2}>
                {/* I am just giong to code the "Finch" path first */}
                {/* These buttons should have some logic to make them be the same size but I'm doing that rn lol */}
                <Button variant="contained">Cricket (Coming Soon™️)</Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    // I'm leaving this state here, because state tracking + ternary rendering was my first thought on how to go through the questions, but i'm going to implement another idea that i think might work better, detailed below
                    setFinchYelling(true);
                    // hides itself
                    setDisplayWhoIsYellingQuestion("none");
                    setDisplayIsFinchAloneQuestion("");
                    // adds "finch is yelling" to "things that are true"
                    setTrueThings([...trueThings, "Finch is yelling"]);
                  }}
                >
                  Finch
                </Button>
              </Stack>
            </Box>

            <Box display={displayIsFinchAloneQuestion}>
              <Typography>Is she alone in a room?</Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setDisplayIsFinchAloneQuestion("none");
                    setDisplayFinchIsAloneEndpoint("");
                    setTrueThings([
                      ...trueThings,
                      "Finch is going aaaaa where are you guys",
                    ]);
                    setThingsToDo([
                      ...thingsToDo,
                      "Finch is going aaaaa where are you guys",
                    ]);
                    console.log(thingsToDo);
                  }}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setDisplayIsFinchAloneQuestion("none");
                    setDisplayBirdOrPlayfightingEndpoint("");
                    setTrueThings([
                      ...trueThings,
                      "There is a bird, or the cats are playing",
                    ]);
                    setThingsToDo([...thingsToDo, "Let them have fun 😎"]);
                  }}
                >
                  No
                </Button>
              </Stack>
            </Box>

            <Box display={displayFinchIsAloneEndpoint}>
              <Typography>
                She just woke up from a nap and is like where are you guuuuuys
                am I alone...........
              </Typography>
              <Typography>
                Make a sound so she know's you're in the other room and stpos
                freaking out.
              </Typography>
            </Box>

            <Box display={displayBirdOrPlayfightingEndpoint}>
              <Typography>
                Either there is a bird in the window or Cricket and Finch are
                playfighting.
              </Typography>
              <Typography>Let them have fun. :)</Typography>
            </Box>
          </Stack>
        </>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography fontSize="1.4rem">Things that are true</Typography>
        <List>
          {trueThings.map((trueThing) => (
            <ListItem key={trueThing}>{trueThing}</ListItem>
          ))}
        </List>
        <Divider />
        <Typography fontSize="1.4rem">Things to do</Typography>
        <List>
          {thingsToDo.map((task) => {
            <ListItem key={task}>{task}</ListItem>;
          })}
        </List>
      </Drawer>
    </Stack>
  );
}
