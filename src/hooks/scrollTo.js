import { useEffect } from "react";
export default (arr, loader) => {
  useEffect(() => {
    window.scrollTo(100, 0);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [arr, loader]);
};
