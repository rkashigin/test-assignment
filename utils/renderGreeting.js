const renderGreeting = (userInfo) => {
  return userInfo.firstName && userInfo.lastName
    ? `${userInfo.firstName} ${userInfo.lastName}`
    : `${userInfo.username}`;
};

export default renderGreeting;
