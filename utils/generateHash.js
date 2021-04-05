const generateHash = () => {
  const hash = "1234567890"
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return hash;
};

export default generateHash;
