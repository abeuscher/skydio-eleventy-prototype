module.exports = (classNames) => {
  let classNamesString = "";
  Object.keys(classNames).forEach((key) => {
    if (classNames[key]) {
      classNamesString += ` ${key}`;
    }
  });
  return classNamesString.trim();
}
