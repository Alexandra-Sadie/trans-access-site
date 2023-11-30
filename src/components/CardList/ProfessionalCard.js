import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  ListItem,
} from "@mui/material";
// uses .split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to extract the first letter of the first word in name and the first letter of the second word in name
// could think about updating to have a third letter etc
const stringAvatar = (name) =>
  name
    .split(" ")
    .map((nameWord) => nameWord[0])
    .join("");

const ProfessionalCard = ({
  name,
  avatar,
  profession,
  waitTime,
  location,
  bio,
}) => {
  return (
    // the ListItem takes full width and is a row-direction flexbox
    // by default it justifies content to 'flex-start', i.e. to the left edge
    // this centers the card in the page
    <ListItem sx={{ justifyContent: "center" }}>
      <Card variant="outlined" sx={{ width: 400 }}>
        <CardHeader
          title={name}
          titleTypographyProps={{ fontSize: 20 }}
          // can this be square?
          avatar={
            <Avatar
              src={avatar}
              // if they don't have an avatar, it runs stringAvatar on their name to make the avatar their initials
              // this fallback will also apply if they have a listed avatar but it is somehow invalid (bc src looks for image link), but otherwise is overwritten by the image
            >
              {stringAvatar(name)}
            </Avatar>
          }
          subheader={
            <>
              <Typography>{profession}</Typography>
            </>
          }
        ></CardHeader>
        <CardContent>
          <Typography>Location: {location}</Typography>
          <Typography>Wait time: {waitTime} months</Typography>
          <Typography
            sx={{ mt: 1 }}
            // noWrap is what makes it cut short with ellipsis at card limit
            noWrap={true}
          >
            Bio: {bio}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};
export default ProfessionalCard;
