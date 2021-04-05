import React from "react";
import { Select } from "antd";

const { Option } = Select;

const codes = ["+7", "+1", "+359", "+226", "+43", "+44"].sort((a, b) => a - b);

const CodesSelector = ({ setFieldValue, styles, values }) => (
  <Select
    className={styles.codeSelector}
    defaultValue={values.code}
    name="code"
    onChange={(value) => {
      setFieldValue("code", value);
    }}
  >
    {codes.map((code) => (
      <Option key={code} value={code}>
        {code}
      </Option>
    ))}
  </Select>
);

export default CodesSelector;
