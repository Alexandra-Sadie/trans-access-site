import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";

const Doctor = () => {
  const modelDoctor = {
    uid: "1",
    name: "Jane Doe",
    profession: "Therapist",
    location: "123 X Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 2,
    bio: "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
  };

  console.log(modelDoctor);

  return (
    <div>
      Doctor
      <Card variant="outlined" sx={{ maxWidth: 400 }}>
        <CardHeader
          title={modelDoctor.name}
          // can this be square?
          avatar={
            <Avatar src="https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Avatar>
          }
          subheader={modelDoctor.profession}
        ></CardHeader>
        <CardContent>
          <Card>{modelDoctor.location}</Card>
          <Card>Wait time: {modelDoctor.waitTime} months</Card>
          <Typography noWrap={true}>{modelDoctor.bio}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Doctor;
