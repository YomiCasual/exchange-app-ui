import { useEffect, useCallback, useState } from "react";

export const useWindowSize = () => {
  const isClient = typeof window === "object";

  const getSize = useCallback(
    () => ({
      height: isClient ? window.innerHeight : null,
      width: isClient ? window.innerWidth : null,
    }),
    [isClient]
  );

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    /**
     * @function
     * @description Sets the state with the current window size object
     */
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]);
  return windowSize;
};
