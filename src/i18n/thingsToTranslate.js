import extractLanguage from "./extractLanguage";

// being able to organize our information like this key-first is much preferable to us than i18next's default, language-first -- as a result we use the extractLanguage function to transform this object into an enObject and a frObject, which we then feed into i18next in i18nProvider.j
export const thingsToTranslate = {
  routeNames: {
    main: { en: "Home", fr: "Accueil" },
    intervention: { en: "Intervention", fr: "Intervention" },
    nameChange: { en: "Name Change", fr: "Changement de nom" },
    therapists: { en: "Therapists", fr: "Thérapeutes" },
    doctors: { en: "Doctors", fr: "Médecins" },
    loginSignup: { en: "Login & Signup", fr: "Connexion & inscription" },
    myAccount: { en: "My Account", fr: "Mon compte" },
  },
  professionalInfo: {
    address: { en: "Address", fr: "Addresse" },
    waitTime: { en: "Wait time", fr: "Temps d'attente" },
    months_one: { en: "month", fr: "mois" },
    months_other: { en: "months", fr: "mois" },
    about: { en: "About", fr: "À propos" },
  },
  loginSignup: {
    logIn: { en: "Log In", fr: "Connexion" },
    logOut: { en: "Log Out", fr: "Déconnexion" },
    signUp: { en: "Sign Up", fr: "Inscription" },
    myAccount: { en: "My Account", fr: "Mon Compte" },
    emailFieldLabel: { en: "Email Address", fr: "Courriel" },
    passwordFieldLabel: { en: "Password", fr: "Mot de passe" },
  },
};

export const enObject = extractLanguage(thingsToTranslate, "en");
export const frObject = extractLanguage(thingsToTranslate, "fr");
