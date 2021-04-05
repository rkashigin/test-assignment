import React from "react";
import { Avatar } from "antd";

import generateAvatar from "./generateAvatar";

const renderAvatar = (size, userInfo) => {
  const { color, colorLighten } = generateAvatar(userInfo.hash);

  return (
    <Avatar
      size={size}
      style={{
        background: `linear-gradient(160deg, ${color} 0%, ${colorLighten} 96.52%)`,
      }}
    >
      {userInfo.firstName && userInfo.lastName
        ? `${userInfo.firstName.charAt(0)}${userInfo.lastName.charAt(0)}`
        : `${userInfo.username.charAt(0)}`}
    </Avatar>
  );
};

export default renderAvatar;
