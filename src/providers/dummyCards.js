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

  {
    uid: "3",
    name: "Nopic Guy",
    profession: "Therapist",
    location: "99 X Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 5,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos molestias asperiores repellendus quibusdam alias voluptatum molestiae. Optio impedit incidunt veniam et libero officia placeat, corrupti sequi at. Omnis, soluta!",
    avatar: "https://invalidlink.nogood.com",
  },
  {
    uid: "4",
    name: "Britney Spears",
    profession: "Therapist",
    location: "420 Slay Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 8,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos molestias asperiores repellendus quibusdam alias voluptatum molestiae. Optio impedit incidunt veniam et libero officia placeat, corrupti sequi at. Omnis, soluta!",
    avatar:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhighxtar.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fhighxtar-britney-spears-1.jpg&f=1&nofb=1&ipt=5830f49e53dd70d12e97e723ece51eb1789d2bf7457b77fa4285b2e39a440183&ipo=images",
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
  {
    uid: "3",
    name: "Bee Movie",
    profession: "Doctor",
    location: "456 X Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 3,
    bio: "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
    avatar: "",
  },
  {
    uid: "4",
    name: "Laura Palmer",
    profession: "Doctor",
    location: "123 X Street, Montreal, Quebec, V6B 4A2",
    available: true,
    waitTime: 2,
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus magnam quam perspiciatis dolorum aliquam laudantium optio corrupti culpa a, fugit quas odit quo, minus similique non, voluptas libero veritatis doloribus.",
    avatar:
      "https://cdn.discordapp.com/attachments/920024348335689800/1178203372181008414/F_0bnEhXYAAIBY8.jpg?ex=65754a65&is=6562d565&hm=b26b3956d121645d8a725af263d48500f66b4d36cb5fdb7b37b9b086ba44a226&",
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

  {
    uid: "3",
    name: "Horrible Goblin",
    profession: "Intervention Worker",
    location: "Dank Cave",
    available: false,
    waitTime: 666,
    bio: "I'll get ya!",
    avatar:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffictionhorizon.com%2Fwp-content%2Fuploads%2F2020%2F03%2FNINTCHDBPICT0004777086082-1.jpg&f=1&nofb=1&ipt=eb5b882c8883ffce6fa0f57b26204e117f53338d53b0531f71fa0471267e7c14&ipo=images",
  },
];

export const cards = { therapist, doctor, intervention };
