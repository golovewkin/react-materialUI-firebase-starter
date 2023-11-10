import React, { useState } from "react";
import { AuthService } from "../../../services/AuthService";
import "./style.scss";
import ProjectButton from "../../../common-components/Button/ProjectButton";
import MainContext from "../../../contexts/main.context";
import { commonConst } from "../../../constants/commonConst";
import ProjectTextField from "../../../common-components/ProjectTextField";
import { setFormState } from "../../../helpers/form.helper";
import { LogService } from "../../../services/LogService";
import { useHistory } from "react-router-dom";
import { urlsConst } from "../../../constants/urlsConst";
import ProjectLink from "../../../common-components/Link/ProjectLink";
import { validEmail, validPassword } from "../../../helpers/validator.helper";

const CreateAccountPage = () => {
  const history = useHistory();
  const { user } = React.useContext(MainContext);
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
  });

  const createAccount = () => {
    AuthService.createFirebaseAccount(state.email, state.password, history);
  };

  const isDisabled = (state) => {
    try {
      if (!validEmail(state.email)) return true;
      if (!validPassword(state.password)) return true;
      return false;
    } catch (e) {
      LogService.logError("isDisabled error", e);
      return true;
    }
  };

  if (user) {
    return <span>{commonConst.error}</span>;
  }

  return (
    <div className="CreateAccountPage">
      <div className="CreateAccountPage__title">Create account</div>
      <div className="CreateAccountPage__wrapper">
        <TextField
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="email"
          error={!validEmail(state.email)}
        />
        <TextField
          onChange={(value) => setFormState("password", value, setState)}
          value={state.password}
          type="password"
          label="password"
          error={!validPassword(state.password)}
        />
        <Button disabled={isDisabled(state)} onClick={createAccount}>
          Create Account
        </Button>
        <div className="CreateAccountPage__links">
          <Link to={urlsConst.login} children="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
