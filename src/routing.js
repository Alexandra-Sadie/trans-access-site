// This is the object we use to define all the routes (pages) in our site. We export them from this file so we're not re-typing the route titles and addresses over and over again (prevent human error). Any future routes added to this file will automatically be added to the parts of the site that iterate through this object (navbar, etc).
// We have the routes structured each as their own object, with "title" and "route" keys.
export const routingObject = {
  main: {
    title: "Main",
    route: "/",
  },

  intervention: {
    title: "Intervention",
    route: "intervention",
  },

  name_change: {
    title: "Name Change",
    route: "name_change",
  },

  therapist: {
    title: "Therapist",
    route: "therapist",
  },

  doctor: {
    title: "Doctor",
    route: "doctor",
  },
};
