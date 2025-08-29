const extractLanguage = (obj, language) => {
  return Object.fromEntries(
    Object.entries(obj).map(([namespace, translatedText]) => [
      namespace,
      Object.fromEntries(
        Object.entries(translatedText).map(([key, value]) => [
          key,
          value[language],
        ])
      ),
    ])
  );
};

export default extractLanguage;
