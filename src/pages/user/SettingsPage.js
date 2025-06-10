import React, { useCallback, useMemo, useState } from "react";
import { useAuth } from "../../providers/AuthProvider.js";
import { UserModel } from "../../models/UserModel.js";
import { COMMON } from "../../constants/COMMON.js";
import FormComponent from "../../components/library-based-components/FormComponent.js";
import { useSnack } from "../../providers/SnackProvider.js";
import PicChanger from "../../components/PicChanger/PicChanger.js";
import { PicService } from "../../services/PicService.js";

const SettingsPage = () => {
  const showSnack = useSnack();
  const [file, setFile] = useState(null);
  const { user, setUser } = useAuth();

  const sendRequest = useCallback(
    async ({ name }) => {
      const userModel = new UserModel(user);
      if (file) {
        userModel.pic = await PicService.savePic(file);
      }
      userModel.setName(name);
      setUser(userModel);
      showSnack("Done!");
      await userModel.update();

      // Really important reset
      // Without this some images could be lost!!
      setFile(null);
    },
    [setUser, user, showSnack, file],
  );

  const picOnChange = useCallback(
    ({ base64, file }, user) => {
      const newUser = new UserModel({ ...user, pic: base64 });
      setUser(newUser);
      setFile(file);
    },
    [setUser],
  );

  const configState = useMemo(() => ({ name: user.name }), [user.name]);
  return (
    <div className="App-page">
      <div className="App-page__title">Edit Account Data</div>
      <PicChanger
        id="picChanger"
        alt="pic"
        pic={user.pic}
        onChange={(value) => picOnChange(value, user)}
      />
      <FormComponent
        footerButtonLabel={COMMON.SUBMIT_WITH_ENTER_MESSAGE}
        configState={configState}
        sendRequest={sendRequest}
      />
    </div>
  );
};

export default SettingsPage;
