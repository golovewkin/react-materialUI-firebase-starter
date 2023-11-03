export const classToObject = proto => {
  let jsoned = {};
  let toConvert = proto || this;
  Object.getOwnPropertyNames(toConvert).forEach((prop) => {
    const val = toConvert[prop];
    // don't include those
    if (prop === 'toJSON' || prop === 'constructor') {
      return;
    }
    if (typeof val === 'function') {
      jsoned[prop] = val.bind(jsoned);
      return;
    }
    jsoned[prop] = val;
  });

  return jsoned;
}

export const makeId = (length = 27) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
