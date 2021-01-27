import { useEffect } from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default (arr, loader) => {
  useEffect(() => {
    window.scrollTo(100, 0);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [arr, loader]);
};
