// see comment in thingsToTranslate.js for why we do this
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
