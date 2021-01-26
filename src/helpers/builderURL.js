const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default (url) => {
  return `?${url}&key=${CLIENT_KEY}`;
};
