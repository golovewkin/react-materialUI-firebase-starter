import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { URLS } from "../../../constants/URLS";
import { validEmail, validPassword } from "../../../helpers/validator.helper";
import { InquiryModel } from "../../../models/InquiryModel";
import useSubmit from "../../../components/hooks/useSubmit";
import { BrowserStorageService } from "../../../services/BrowserStorageService";
import { COMMON } from "../../../constants/COMMON";
import { setFormState } from "../../../helpers/form.helper";
import { INQUIRY_STATUSES } from "../../../constants/INQUIRY_STATUSES";
import { useNavigate, useParams } from "react-router-dom";
import FormComponent from "../../../components/utils/FormComponent";

const AcceptRequestPage = () => {
  const navigate = useNavigate();
  const { id: inquiryId } = useParams();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { loading, submit } = useSubmit({
    sendRequest: async (params) => {
      const { data, inquiryId } = params;
      debugger;
      const previousRequest = BrowserStorageService.getData(
        COMMON.APPROVAL_SENT,
      );
      if (previousRequest) {
        throw new Error("Approval was already sent!");
      }
      await InquiryModel.create({
        ...params,
        status: INQUIRY_STATUSES.CREATED,
      });

      BrowserStorageService.setData(COMMON.APPROVAL_SENT, "sent");
      navigate(URLS.LOGIN);
    },
    successMessage: "Success! Now you can login 🥳",
  });

  const isDisabled = useCallback((state) => {
    if (!validEmail(state.email)) return true;
    if (!validPassword(state.password)) return true;
    return false;
  }, []);

  return (
    <div className="AcceptRequestPage">
      <div className="AcceptRequestPage__title">
        Accept the invite and setup your password
      </div>
      <FormComponent
        className="AcceptRequestPage__wrapper"
        onSubmit={() => submit({ data: state, inquiryId })}
      >
        <TextFieldComponent
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="your email"
          error={!validEmail(state.email)}
        />
        <TextFieldComponent
          onChange={(value) => setFormState("password", value, setState)}
          value={state.password}
          type="password"
          label="your desired password"
          error={!validPassword(state.password)}
        />
        <ButtonComponent
          loading={loading}
          disabled={isDisabled(state)}
          type="submit"
        >
          {COMMON.SUBMIT_WITH_ENTER_MESSAGE}
        </ButtonComponent>
        <div className="AcceptRequestPage__links">
          <LinkComponent to={URLS.HOME} children="Return to home" />
        </div>
      </FormComponent>
    </div>
  );
};

export default AcceptRequestPage;
