// this file exports a dummy list of cards, this will be server data later in development
// the top level properties match our main provider routes "therapist, doctor, etc"

const therapist = [
  {
    uid: "1",
    name: "Jane Doe",
    profession: "Therapist",
    location: "123 X Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 2,
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maiores minima eum laboriosam neque molestiae suscipit obcaecati reiciendis inventore soluta! Nobis corrupti esse laborum ad! Officiis alias quae autem obcaecati quos omnis, ex dolor porro reiciendis sed assumenda facilis. Repellat, voluptate, mollitia maxime ducimus qui fuga totam minima velit hic cupiditate laudantium?",
  },
  {
    uid: "2",
    name: "Jane Doe 2",
    profession: "Counselor",
    location: "225 Y Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 7,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro magni assumenda eveniet nisi doloribus? Odio dignissimos dolor officia asperiores nam dolorum labore blanditiis cum, dolores libero ea. Reprehenderit numquam voluptatibus explicabo quo ipsum nam iure unde nulla eius magnam assumenda optio sit neque, esse facere voluptas impedit itaque animi. Exercitationem, at nulla rem inventore perspiciatis error dolorem, suscipit facere natus tempora quis esse? Maiores vero laborum, voluptates qui porro corrupti dicta inventore dignissimos excepturi distinctio iure!",
  },
];

const doctor = [
  {
    uid: "1",
    name: "Jane Doe",
    profession: "General Practitioner",
    location: "175 X Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 3,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis delectus et quaerat architecto optio molestiae ipsam, minus sequi praesentium quae laborum, facilis nobis veritatis!",
  },
  {
    uid: "2",
    name: "Jane Doe 2",
    profession: "Endocrinologist",
    location: "22754 Y Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 1,
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi culpa placeat numquam temporibus qui, ullam hic autem, fugit esse repellendus corporis animi molestias doloremque voluptatum porro exercitationem pariatur excepturi est nobis quasi! Deserunt, vel? Ea?",
  },
];

const intervention = [
  {
    uid: "1",
    name: "Jane Doe",
    profession: "Intervention Worker",
    location: "728 X Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 3,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis delectus et quaerat architecto optio molestiae ipsam, minus sequi praesentium quae laborum, facilis nobis veritatis!",
  },
  {
    uid: "2",
    name: "Ellen X",
    profession: "Intervention Worker",
    location: "1345 Y Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 1,
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi culpa placeat numquam temporibus qui, ullam hic autem, fugit esse repellendus corporis animi molestias doloremque voluptatum porro exercitationem pariatur excepturi est nobis quasi! Deserunt, vel? Ea?",
  },
];

export const cards = { therapist, doctor, intervention };
