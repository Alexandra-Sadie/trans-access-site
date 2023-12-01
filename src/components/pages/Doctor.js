import CardList from "../CardList/CardList";

const Doctor = () => {
  // unsure if this is ok by default as an array of objects or if it should be an object and run Object.values() on it like we do in main.js to routingObject
  const dummyDoctorsList = [



  ];

  return <CardList cardArr={dummyDoctorsList} />;
};

export default Doctor;
