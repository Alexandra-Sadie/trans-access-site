// This is the object we use to define all the routes (pages) in our site. We export them from this file so we're not re-typing the route titles and addresses over and over again (prevent human error). Any future routes added to this file will automatically be added to the parts of the site that iterate through this object (navbar, etc).
// We have the routes structured each as their own object, with "titleEn: and "route" keys.
// TODO explain weird routeNames:main formatting
export const routingObject = {
  main: {
    title: "routeNames:main",
    route: "/",
    redactFromMain: true,
  },

  intervention: {
    title: "routeNames:intervention",
    route: "intervention",
  },

  name_change: {
    title: "routeNames:nameChange",
    route: "changement_de_nom",
  },

  therapist: {
    title: "routeNames:therapists",
    route: "therapist",
  },

  doctor: {
    title: "routeNames:doctors",
    route: "doctor",
  },

  login_signup: {
    title: "routeNames: loginSignup",
    route: "connexion_inscription",
    redactFromNav: true,
    redactFromMain: true,
  },

  my_account: {
    title: "routeNames:loginSignup",
    route: "mon_compte",
    redactFromNav: true,
    redactFromMain: true,
  },
};
