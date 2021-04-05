const validateForm = ({ values, errors }) => {
  const rules = {
    username: (errors, value) => {
      if (!value) {
        errors.username = "Это обязательное поле";
      } else if (!/^[a-zа-я]+$/i.test(value)) {
        errors.username = "Имя пользователя может содержать только буквы";
      }
    },
    email: (errors, value) => {
      if (!value) {
        errors.email = "Это обязательное поле";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Введите корректный E-mail адрес";
      }
    },
    cell: (errors, value) => {
      if (!value) {
        errors.cell = "Это обязательное поле";
      } else if (value.length !== 10) {
        errors.cell = "Введите корректный номер телефона";
      }
    },
    firstName: (errors, value) => {
      if (value.length > 0 && !/^[a-zа-я]+$/i.test(value)) {
        errors.firstName = "Имя может содержать только буквы";
      }
    },
    lastName: (errors, value) => {
      if (value.length > 0 && !/^[a-zа-я]+$/i.test(value)) {
        errors.lastName = "Фамилия может содержать только буквы";
      }
    },
    info: (errors, value) => {
      if (value.length > 35) {
        errors.info = "Текст не может быть длиннее 35 символов";
      }
    },
    password: (errors, value) => {
      if (!value) {
        errors.password = "Это обязательное поле";
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password =
          "Пароль должен быть не менее 8 символов, состоять из только из букв и цифр, а также содержать хотя бы одну заглавную букву";
      }
    },
    password2: (errors, value) => {
      if (!value) {
        errors.password2 = "Это обязательное поле";
      } else if (value !== values.password) {
        errors.password2 = "Пароли не совпадают";
      }
    },
  };

  Object.keys(values).forEach(
    (key) => rules[key] && rules[key](errors, values[key])
  );
};

export default validateForm;
