import React from "react";
import Head from "next/head";
import { Spin, Typography } from "antd";

import styles from "../styles/Home.module.css";
import { SignupForm } from "../modules/SignupForm";
import UserDataStoreContext from "../stores/userDataStore";
import { useRouter } from "next/router";
import { parseCookies } from "../utils";
import axios from "axios";

const { Title } = Typography;

const Home = ({ userData }) => {
  const userDataStore = React.useContext(UserDataStoreContext);
  const [showSpinner, setShowSpinner] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (userData) {
      const storageData = JSON.parse(userData);
      userDataStore.setUserData(storageData);
      setShowSpinner(true);
      setTimeout(() => {
        router.push("/profile");
      }, 1000);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Регистрация</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        {showSpinner && (
          <div className={styles.spinnerBlock}>
            <Spin className={styles.spinner} tip="Авторизация..." />
          </div>
        )}
        <Title level={1}>Регистрация</Title>
        <p>Заполните форму ниже, чтобы зарегистрироваться</p>
        <SignupForm />
      </div>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const cookies = parseCookies(req);

  return { userData: cookies.userData };
};

export default Home;
