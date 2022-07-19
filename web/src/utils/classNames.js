module.exports = (classNames) => {
  let classNamesString = "";
  const classObj = JSON.parse(classNames);
  Object.keys(classObj).forEach((key) => {
    if (classNames[key]) {
      classNamesString += ` ${key}`;
    }
  });
  return classNamesString.trim();
}
