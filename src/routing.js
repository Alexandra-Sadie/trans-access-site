// This is the object we use to define all the routes (pages) in our site. We export them from this file so we're not re-typing the route titles and addresses over and over again (prevent human error). Any future routes added to this file will automatically be added to the parts of the site that iterate through this object (navbar, etc).
// We have the routes structured each as their own object, with "titleEn: and "route" keys.
// TODO explain weird routeNames:main formatting
export const routingObject = {
  main: {
    titleEn: "Home",
    titleFr: "Acceuil",
    route: "/",
    redactFromMain: true,
  },

  intervention: {
    titleEn: "Intervention",
    titleFr: "Intervention",
    route: "intervention",
  },

  name_change: {
    titleEn: "Name Change",
    titleFr: "Changement de nom",
    route: "changement_de_nom",
  },

  therapist: {
    titleEn: "Therapists",
    titleFr: "Thérapeutes",
    route: "therapist",
  },

  doctor: {
    titleEn: "Doctors",
    titleFr: "Médecins",
    route: "doctor",
  },

  login_signup: {
    titleEn: "Login & Signup",
    titleFr: "Connexion & inscription",
    route: "connexion_inscription",
    redactFromNav: true,
    redactFromMain: true,
  },

  my_account: {
    titleEn: "My Account",
    titleFr: "Mon compte",
    route: "mon_compte",
    redactFromNav: true,
    redactFromMain: true,
  },
};
