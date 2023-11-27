import React, { useCallback, useMemo } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { UserModel } from "../../models/UserModel";
import { COMMON } from "../../constants/COMMON";
import FormComponent from "../../components/library-based-components/FormComponent";
import { useSnack } from "../../providers/SnackProvider";

const SettingsPage = () => {
  const showSnack = useSnack();
  const { user, setUser } = useAuth();

  const sendRequest = useCallback(
    async ({ name }) => {
      const userModel = new UserModel(user);
      userModel.setName(name);
      setUser(userModel);
      showSnack("Done!");
      await userModel.update();
    },
    [setUser, user, showSnack],
  );

  const configState = useMemo(() => ({ name: user.name }), [user.name]);
  return (
    <div className="App-page">
      <div className="App-page__title">Edit Account Data</div>
      <FormComponent
        footerButtonLabel={COMMON.SUBMIT_WITH_ENTER_MESSAGE}
        configState={configState}
        sendRequest={sendRequest}
      />
    </div>
  );
};

export default SettingsPage;
