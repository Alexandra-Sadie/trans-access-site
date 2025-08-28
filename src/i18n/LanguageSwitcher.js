import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeToFrench = () => {
    i18n.changeLanguage("fr");
  };

  const changeToEnglish = () => {
    i18n.changeLanguage("en");
  };

  return (
    <>
      {i18n.language === "fr" ? (
        <Button
          onClick={changeToEnglish}
          sx={{ color: "primary.contrastText" }}
        >
          EN
        </Button>
      ) : (
        <Button onClick={changeToFrench} sx={{ color: "primary.contrastText" }}>
          FR
        </Button>
      )}
    </>
  );
};
export default LanguageSwitcher;
