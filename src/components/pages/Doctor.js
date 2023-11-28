import { Card, CardHeader } from "@mui/material";

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
        <CardHeader title={modelDoctor.name}></CardHeader>
      </Card>
    </div>
  );
};

export default Doctor;
