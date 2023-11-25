export const setFormState = (property, value, updateState) => {
  updateState((oldState) => {
    return { ...oldState, [property]: value };
  });
};
