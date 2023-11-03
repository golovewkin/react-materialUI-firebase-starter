import React, {useState} from 'react';
import {AuthService} from "../../../services/AuthService";
import './style.scss'
import VButton from "../../../material/VButton/VButton";
import MainContext from "../../../contexts/main.context";
import {commonConst} from "../../../constants/commonConst";
import VTextField from "../../../material/VTextField";
import {setFormState} from "../../../helpers/form.helper";
import {LogService} from "../../../services/LogService";
import {urlsConst} from "../../../constants/urlsConst";
import VLink from "../../../material/VLink/VLink";
import {validEmail, validPassword} from "../../../helpers/validator.helper";

const LoginPage = () => {
  const { user } = React.useContext(MainContext);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const login = () => {
    AuthService.logIn(state.email, state.password);
  };

  const isDisabled = (state) => {
  	try {
      if (!validEmail(state.email)) return true;
      if (!validPassword(state.password)) return true;
      return false;
  	} catch (e) {
  		LogService.logError('isDisabled error', e);
  		return true;
  	}
  };

  if (user) {
    return <span>{commonConst.error}</span>
  }

  return (
    <div className='LoginPage'>
      <div className="LoginPage__title">Sign in</div>
      <div className="LoginPage__wrapper">
        <VTextField
          onChange={(value) => setFormState('email', value, setState)}
          value={state.email}
          type='email'
          label='email'
          error={!validEmail(state.email)}
        />
        <VTextField
          onChange={(value) => setFormState('password', value, setState)}
          value={state.password}
          type='password'
          label='password'
          error={!validPassword(state.password)}
        />
        <VButton disabled={isDisabled(state)} onClick={login}>Log in</VButton>
        <div className="LoginPage__links">
          <VLink to={urlsConst.resetPass} children='Forgot password?'/>
          <VLink to={urlsConst.createAccount} children='Sign up'/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

