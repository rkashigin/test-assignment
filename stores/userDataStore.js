import React from "react";
import { observable, computed, action } from "mobx";

class UserDataStore {
  @observable username = "";
  @observable email = "";
  @observable cell = "";
  @observable code = "";
  @observable firstName = "";
  @observable lastName = "";
  @observable gender = "";
  @observable info = "";
  @observable password = "";
  @observable hash = "";

  @computed
  get getUserData() {
    return {
      username: this.username,
      email: this.email,
      cell: this.cell,
      code: this.code,
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      info: this.info,
      password: this.password,
      hash: this.hash,
    };
  }

  @action
  setUserData(userData) {
    for (const key in userData) {
      this[key] = userData[key];
    }
  }
}

const UserDataStoreContext = React.createContext(new UserDataStore());

export default UserDataStoreContext;
