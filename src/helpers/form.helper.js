import {LogService} from "../services/LogService";

export const setFormState = (property, value, updateState) => {
  try {
    updateState(oldState => {
      return {...oldState, [property]:value };
    });
  } catch (e) {
    LogService.showAndLogError('set form state error', e);
  }
}
