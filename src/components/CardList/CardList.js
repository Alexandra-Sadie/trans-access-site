import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const stringAvatar = (name) => {
  return {
    // uses .split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to extract the first letter of the first word in name and the first letter of the second word in name
    // assumes two-word name -- could be an issue?
    // mb database should expect first and last names as separate data entries to account for this
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

const CardList = ({ cardArr }) => {
  return (
    <List>
      {cardArr.map((professional) => {
        return (
          <ListItem>
            <Card key={professional.uid} variant="outlined" sx={{ width: 400 }}>
              <CardHeader
                title={professional.name}
                titleTypographyProps={{ fontSize: 20 }}
                // can this be square?
                avatar={
                  <Avatar
                    src={professional.avatar}
                    // if they don't have an avatar, it runs stringAvatar on their name to make the avatar their initials
                    // this fallback will also apply if they have a listed avatar but it is somehow invalid (bc src looks for image link), but otherwise is overwritten by the image
                    {...stringAvatar(professional.name)}
                  ></Avatar>
                }
                subheader={
                  <>
                    <Typography>{professional.profession}</Typography>
                  </>
                }
              ></CardHeader>
              <CardContent>
                <Typography>Location: {professional.location}</Typography>
                <Typography>
                  Wait time: {professional.waitTime} months
                </Typography>
                <Typography
                  sx={{ mt: 1 }}
                  // noWrap is what makes it cut short with ellipsis at card limit
                  noWrap={true}
                >
                  Bio: {professional.bio}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        );
      })}
    </List>
  );
};
export default CardList;
