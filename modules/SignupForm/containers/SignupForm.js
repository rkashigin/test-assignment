import React from "react";
import { withFormik } from "formik";

import { SignupForm as BaseSignupForm } from "../components/SignupForm";

import { validateForm } from "../../../utils";

const SignupForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    username: "",
    email: "",
    cell: "",
    code: "+7",
    firstName: "",
    lastName: "",
    info: "",
    gender: "",
    password: "",
    password2: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },
  validateOnMount: true,
  displayName: "SignupForm",
})(BaseSignupForm);

export default SignupForm;
