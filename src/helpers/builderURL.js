/* eslint-disable import/no-anonymous-default-export */
const CLIENT_KEY = "18839530-4e500f23cd7e38f757fc7d3b1";

export default (url) => {
  return `?${url}&key=${CLIENT_KEY}`;
};
