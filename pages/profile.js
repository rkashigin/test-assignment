import React from "react";
import Head from "next/head";
import { Button, List, Modal, Typography } from "antd";
import Cookie from "js-cookie";

import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import {
  parseCookies,
  renderProfileItem,
  renderGreeting,
  renderAvatar,
  cleanUserInfo,
} from "../utils";

const { Title } = Typography;

const Profile = ({ userData }) => {
  const router = useRouter();
  const modalFlag = router.query.welcome === "true";
  const [showModal, setShowModal] = React.useState(modalFlag);

  const dirtyUserInfo = JSON.parse(userData);

  const userInfo = cleanUserInfo(dirtyUserInfo);

  return (
    <div className={styles.container}>
      <Head>
        <title>Профиль</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.profileContent}>
        <Modal
          title="Поздравляем с успешной регистрацией!"
          centered
          visible={showModal}
          closable={false}
          footer={
            <Button
              type="primary"
              onClick={() => {
                setShowModal(false);
                router.push("/profile");
              }}
            >
              Найс
            </Button>
          }
        >
          <p>
            Добрый день, {renderGreeting(userInfo)}! Вы успешно прошли
            регистрацию и теперь можете посмотреть свой профиль
          </p>
        </Modal>
        {renderAvatar(50, userInfo)}
        <Title level={1}>Профиль</Title>
        <p>Добрый день, {renderGreeting(userInfo)}!</p>
        <List
          size="large"
          bordered
          style={{ width: "100%", marginBottom: 15 }}
          dataSource={Object.keys(userInfo)}
          renderItem={renderProfileItem.bind(null, userInfo)}
        />
        <Button
          className="formSubmit"
          onClick={() => {
            Cookie.remove("userData");
            router.push("/");
          }}
          type="primary"
        >
          Выйти
        </Button>
      </div>
    </div>
  );
};

Profile.getInitialProps = ({ req, res }) => {
  const cookies = parseCookies(req);

  if (!cookies.userData) {
    res.writeHead(303, { location: "/" });
    res.end();
  }

  return { userData: cookies.userData };
};

export default Profile;
