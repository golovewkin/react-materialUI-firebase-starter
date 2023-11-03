const namePattern = /^[a-z0-9 ,.'-]+$/i;
const emailPattern = /^.+@.+$/;
const passwordPattern = /^(?=.*\d)(?=.*\W)(?=.*[A-Z])(?=.*[a-z]).{8,64}$/;

export const validEmail = email => {
  if (email) return emailPattern.test(email);
  return false;
};

export const validPassword = password => {
  if (password) return passwordPattern.test(password);
  return false;
};

export const validName = name => {
  if (name) return namePattern.test(name);
  return false;
};

export const trimValue = name => {
  if (!name) return name;
  return name.replace(/\s{2,}/g, ' ').trimStart();
};
