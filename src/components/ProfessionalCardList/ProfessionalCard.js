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
    <ListItem
      sx={{
        justifyContent: "center",
        // ? we have padding:0 because this ListItem was rendering with padding, we're not sure if that's coming from MUI, from default css list item properties, or something yet more arcane
        padding: 0,
      }}
    >
      <Card
        // TODO set height to multiple breakpoint IF noWrap can be set to further lines
        // TODO choose best breakpoints
        // TODO should this use MUI's built-in breakpoints like our other stuff?
        sx={{
          // width: { xs: 400, md: 850 },
          minWidth: "100%",
          // minHeight ensures style consistency with a blank card
          minHeight: { xs: "256px", md: "232px" },
        }}
      >
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
          // minHeight ensures standard styling on blank UI card - this element is the same height at xs and md breakpoints as oif Jan 2024
          sx={{ minHeight: "84px" }}
        ></CardHeader>
        <CardContent>
          <Typography>Adresse: {location}</Typography>
          <Typography>Temps d'attente: {waitTime} mois</Typography>
          <Typography
            sx={{
              mt: 1,
              // this should work for most browsers - tested in firefox and chrome
              // this will make the bio truncate with an ellipsis after TWO lines
              // previous we just gave it noWrap={true}, but this makes it cut off after 1 line, and 2 looks nicer for a full bio
              // https://stackoverflow.com/questions/64315111/material-ui-write-text-in-exactly-2-lines-with-ellipsis
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineClamp: 2,
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            À propos: {bio}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};
export default ProfessionalCard;
