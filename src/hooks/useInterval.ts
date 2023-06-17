import { useEffect, useRef } from "react";

const useInterval = (callback: VoidFunction, delay: number): void => {
  const savedCallback = useRef<VoidFunction>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export { useInterval };
