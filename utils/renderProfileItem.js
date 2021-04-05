import React from "react";
import { List } from "antd";

const profileItems = new Map([
  ["username", "Имя пользователя:"],
  ["email", "E-mail:"],
  ["cell", "Номер телефона:"],
  ["firstName", "Имя:"],
  ["lastName", "Фамилия:"],
  ["gender", "Пол:"],
  ["info", "Обо мне:"],
]);

const renderProfileItem = (userInfo, key) => {
  const noRender = ["password", "password2", "code", "hash"];

  if (noRender.indexOf(key) !== -1) {
    return null;
  }

  if (key === "cell") {
    return (
      <List.Item>{`${profileItems.get(key)} ${userInfo.code}${
        userInfo[key]
      }`}</List.Item>
    );
  } else {
    return <List.Item>{`${profileItems.get(key)} ${userInfo[key]}`}</List.Item>;
  }
};

export default renderProfileItem;
