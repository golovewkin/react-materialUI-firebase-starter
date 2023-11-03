import React, {useState} from 'react';
import './style.scss'
import VButton from "../../../material/VButton/VButton";
import MainContext from "../../../contexts/main.context";
import VTextField from "../../../material/VTextField";
import {setFormState} from "../../../helpers/form.helper";
import {LogService} from "../../../services/LogService";
import {withErrorBoundary} from "../../../components/hoc/withErrorBoundary/withErrorBoundary";
import PicChanger from "../../../components/utils/PicChanger/PicChanger";
import {UserDBService} from "../../../services/UserDBService";
import {PicService} from "../../../services/PicService";

const SettingsPage = () => {
  const { user, updateUser, showSnack } = React.useContext(MainContext);
  const [state, setState] = useState({...user});
  const [file, setFile] = useState(null);

  const submit = async (newUser) => {
  	try {
  	  const user = {...newUser};
  	  if (file) {
        user.pic = await PicService.savePic(file);
      }
      await UserDBService.updateUser(newUser.id, user);
      updateUser(user);
      showSnack('Success!');
  	} catch (e) {
  		LogService.showAndLogError('save user error', e);
  	}
  };

  const picOnChange = ({base64, file}) => {
  	try {
      setFormState('pic', base64, setState);
      setFile(file);
  	} catch (e) {
  		LogService.showAndLogError('picOnChange error', e);
  	}
  };

  return (
    <div className='SettingsPage'>
      <div className="SettingsPage__title">Edit Account Data</div>
      <div className="SettingsPage__wrapper">
        <PicChanger
          alt='profile-pic'
          pic={state.pic}
          onChange={(value) => picOnChange(value)}
        />
        <VTextField
          onChange={(value) => setFormState('name', value, setState)}
          value={state.name}
          type='name'
          error={!state.name}
          label='your name'
        />
        <VButton disabled={!state.name} onClick={() => submit(state)}>Save</VButton>
      </div>
    </div>
  );
};

export default withErrorBoundary(SettingsPage);
