import { Avatar, Card, CardHeader } from "@mui/material";

const Doctor = () => {
  const modelDoctor = {
    uid: "1",
    name: "Jane Doe",
    profession: "Therapist",
    location: "123 X Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 2,
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maiores minima eum laboriosam neque molestiae suscipit obcaecati reiciendis inventore soluta! Nobis corrupti esse laborum ad! Officiis alias quae autem obcaecati quos omnis, ex dolor porro reiciendis sed assumenda facilis. Repellat, voluptate, mollitia maxime ducimus qui fuga totam minima velit hic cupiditate laudantium?",
  };

  console.log(modelDoctor);

  return (
    <div>
      Doctor
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          title={modelDoctor.name}
          avatar={
            <Avatar src="https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Avatar>
          }
        ></CardHeader>
      </Card>
    </div>
  );
};

export default Doctor;
