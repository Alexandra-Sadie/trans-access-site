import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const LanguageChangeButton = () => {
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
        <Button onClick={changeToEnglish} variant={"contained"}>
          to EN
        </Button>
      ) : (
        <Button onClick={changeToFrench} variant={"contained"}>
          to fr
        </Button>
      )}
    </>
  );
};
export default LanguageChangeButton;
