import React from "react";
import { Button, Form, Radio, Select } from "antd";
import { FormField, CodesSelector } from "../../../components";
import Cookie from "js-cookie";

import styles from "./SignupForm.module.css";
import UserDataStoreContext from "../../../stores/userDataStore";
import axios from "axios";
import { useRouter } from "next/router";
import { generateHash } from "../../../utils";

export const SignupForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    isValid,
    setFieldValue,
    isSubmitting,
    setSubmitting,
  } = props;

  const [cellTouched, setCellTouched] = React.useState(false);
  const userDataStore = React.useContext(UserDataStoreContext);
  const router = useRouter();

  const handleSubmit = () => {
    setSubmitting(true);
    const hash = generateHash();
    axios.post("/api/signup", { ...values, hash }).then(({ data }) => {
      userDataStore.setUserData(data);
      Cookie.set("userData", JSON.stringify(data));
      router.push("/profile?welcome=true");
      setSubmitting(false);
    });
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <FormField
        name="username"
        touched={touched}
        errors={errors}
        values={values}
        placeholder="Имя пользователя"
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        name="email"
        touched={touched}
        errors={errors}
        values={values}
        placeholder="E-mail"
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        name="cell"
        touched={touched}
        errors={errors}
        values={values}
        placeholder="Номер телефона"
        handleChange={(e) => {
          setFieldValue("cell", e.target.value);
          if (!cellTouched && e.target.value === "8") {
            setTimeout(() => {
              setFieldValue("cell", "");
              setCellTouched(true);
            }, 100);
          }
        }}
        handleBlur={handleBlur}
        addonBefore={
          <CodesSelector
            setFieldValue={setFieldValue}
            styles={styles}
            values={values}
          />
        }
      />
      <FormField
        name="firstName"
        touched={touched}
        errors={errors}
        values={values}
        placeholder="Имя"
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        name="lastName"
        touched={touched}
        errors={errors}
        values={values}
        placeholder="Фамилия"
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Form.Item>
        <Radio.Group
          name="gender"
          onChange={(e) => setFieldValue("gender", e.target.value)}
        >
          <Radio value="Мужской">Мужской</Radio>
          <Radio value="Женский">Женский</Radio>
        </Radio.Group>
      </Form.Item>
      <FormField
        name="info"
        touched={touched}
        errors={errors}
        values={values}
        placeholder="О себе"
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        name="password"
        touched={touched}
        errors={errors}
        values={values}
        placeholder="Пароль"
        handleChange={handleChange}
        handleBlur={handleBlur}
        type="password"
      />
      <FormField
        name="password2"
        touched={touched}
        errors={errors}
        values={values}
        placeholder="Подтвердите пароль"
        handleChange={handleChange}
        handleBlur={handleBlur}
        type="password"
      />
      <Form.Item>
        <Button
          className="formSubmit"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit}
          type="primary"
        >
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};
