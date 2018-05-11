export const toLocaleString = (date, lang, customOptions) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...customOptions
  };
  return new Date(date).toLocaleString(lang, options);
};
