import { useRef, useEffect } from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
