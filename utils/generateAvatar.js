import tinycolor from "tinycolor2";

const getCorrectIndexOfChar = (char) => {
  const number = char.charCodeAt(0);

  return number > 255 ? 255 : number < 0 ? 0 : number;
};

const generateAvatar = (hash) => {
  const [r, g, b] = hash.substr(0, 3).split("").map(getCorrectIndexOfChar);

  return {
    color: tinycolor({ r, g, b }).lighten(10).saturate(10).toHexString(),
    colorLighten: tinycolor({ r, g, b }).lighten(30).saturate(30).toHexString(),
  };
};

export default generateAvatar;
