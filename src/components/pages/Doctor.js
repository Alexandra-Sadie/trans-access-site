import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const Doctor = () => {
  // unsure if this is ok by default as an array of objects or if it should be an object and run Object.values() on it like we do in main.js to routingObject
  const dummyDoctorsList = [
    {
      uid: "1",
      name: "First Doctor",
      profession: "Doctor",
      location: "123 X Street, Montreal, Quebec, V6B 4A2",
      available: true,
      waitTime: 2,
      bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus magnam quam perspiciatis dolorum aliquam laudantium optio corrupti culpa a, fugit quas odit quo, minus similique non, voluptas libero veritatis doloribus.",
      avatar:
        "https://cdn.discordapp.com/attachments/920024348335689800/1178203372181008414/F_0bnEhXYAAIBY8.jpg?ex=65754a65&is=6562d565&hm=b26b3956d121645d8a725af263d48500f66b4d36cb5fdb7b37b9b086ba44a226&",
    },
    {
      uid: "2",
      name: "Second Doctor",
      profession: "Doctor",
      location: "456 X Street, Montreal, Quebec, V6B 4A2",
      available: true,
      waitTime: 3,
      bio: "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
      avatar: "",
    },
    {
      uid: "3",
      name: "First Therapist",
      profession: "Therapist",
      location: "99 X Street, Montreal, Quebec, V6B 4A2",
      available: true,
      waitTime: 5,
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos molestias asperiores repellendus quibusdam alias voluptatum molestiae. Optio impedit incidunt veniam et libero officia placeat, corrupti sequi at. Omnis, soluta!",
      avatar: "https://invalidlink.nogood.com",
    },
    {
      uid: "4",
      name: "Second Therapist",
      profession: "Therapist",
      location: "420 Slay Street, Montreal, Quebec, V6B 4A2",
      available: true,
      waitTime: 8,
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos molestias asperiores repellendus quibusdam alias voluptatum molestiae. Optio impedit incidunt veniam et libero officia placeat, corrupti sequi at. Omnis, soluta!",
      avatar:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhighxtar.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fhighxtar-britney-spears-1.jpg&f=1&nofb=1&ipt=5830f49e53dd70d12e97e723ece51eb1789d2bf7457b77fa4285b2e39a440183&ipo=images",
    },
    {
      uid: "5",
      name: "Horrible Goblin",
      profession: "Brigand",
      location: "Dank Cave",
      available: true,
      waitTime: 666,
      bio: "I'll get ya!",
      avatar:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhighxtar.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fhighxtar-britney-spears-1.jpg&f=1&nofb=1&ipt=5830f49e53dd70d12e97e723ece51eb1789d2bf7457b77fa4285b2e39a440183&ipo=images",
    },
  ];

  //TODO currently this var isn't used below -- did it functional programming style -- but I'm keeping it around as a reminder that it might be worth having this filtering done at a higher-level provider component, so that various lower-down pages can access the filtered list (eg when filtering additionally by profession, wait time, etc) without having to do the filter each time
  const filteredList = dummyDoctorsList.filter(
    (professional) =>
      // remove professionals who are in the database but not currently taking new patients
      (professional.available = true)
  );
  console.log(filteredList);

  const stringAvatar = (name) => {
    return {
      // uses .split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to extract the first letter of the first word in name and the first letter of the second word in name
      // assumes two-word name -- could be an issue?
      // mb database should expect first and last names as separate data entries to account for this
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <>
      <Typography>List of professionals:</Typography>
      <List>
        {dummyDoctorsList
          .filter(
            (professional) =>
              // remove professionals who are in the database but not currently taking new patients
              (professional.available = true)
          )
          .map((professional) => {
            return (
              <ListItem>
                <Card
                  key={professional.uid}
                  variant="outlined"
                  sx={{ width: 400 }}
                >
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
    </>
  );
};

export default Doctor;
