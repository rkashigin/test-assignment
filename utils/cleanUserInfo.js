const cleanUserInfo = (dirtyUserInfo) => {
  const userInfo = {};

  for (const key in dirtyUserInfo) {
    if (dirtyUserInfo[key]) {
      userInfo[key] = dirtyUserInfo[key];
    }
  }

  return userInfo;
};

export default cleanUserInfo;
