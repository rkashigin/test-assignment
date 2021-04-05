import React from "react";
import { Form, Input } from "antd";

import { validateField } from "../../utils";

const FormField = ({
  name,
  placeholder,
  icon,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
  addonBefore = "",
  type = "text",
}) => {
  const MyInput = type === "password" ? Input.Password : Input;
  return (
    <Form.Item
      validateStatus={validateField(name, touched, errors)}
      hasFeedback
      help={!touched[name] ? null : errors[name]}
    >
      <MyInput
        id={name}
        prefix={icon}
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        addonBefore={addonBefore}
        size="large"
      />
    </Form.Item>
  );
};

export default FormField;
