import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
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
      waitTime: 2,
      bio: "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
    },
    {
      uid: "3",
      name: "First Therapist",
      profession: "Therapist",
      location: "99 X Street, Montreal, Quebec, V6B 4A2",
      available: true,
      waitTime: 2,
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos molestias asperiores repellendus quibusdam alias voluptatum molestiae. Optio impedit incidunt veniam et libero officia placeat, corrupti sequi at. Omnis, soluta!",
      avatar:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupl.roob.la%2F2015%2F01%2Fdale-cooper-coffee-e1421147082530.png&f=1&nofb=1&ipt=060a6fa657b51ce6c3bdd1485a4a66da671dc9fe9d27985729ae6026c286bab6&ipo=images",
    },
  ];

  const stringAvatar = (name) => {
    return {
      // uses .split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to extract the first letter of the first word in name and the first letter of the second word in name
      // assumes two-word name -- could be an issue?
      // mb database should expect first and last names as separate data entries to account for this
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return dummyDoctorsList.map((professional) => {
    return (
      <Card key={professional.uid} variant="outlined" sx={{ maxWidth: 400 }}>
        <CardHeader
          title={professional.name}
          // can this be square?
          avatar={
            professional.avatar ? (
              <Avatar src={professional.avatar}>yes</Avatar>
            ) : (
              <Avatar {...stringAvatar(professional.name)} />
            )
          }
          subheader={professional.profession}
        ></CardHeader>
        <CardContent>
          <Card>{professional.location}</Card>
          <Card>Wait time: {professional.waitTime} months</Card>
          <Typography noWrap={true}>{professional.bio}</Typography>
        </CardContent>
      </Card>
    );
  });
};

export default Doctor;
