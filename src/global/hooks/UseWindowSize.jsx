import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [mobile, setMobile] = useState(null);
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return mobile;
};

export default useWindowSize;
