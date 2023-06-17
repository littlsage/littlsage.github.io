import { useState, useRef, useEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import { IUseResizeArgs } from "@app/hooks/@types/useResize";

const useResize = ({ breakpoint, callback }: IUseResizeArgs) => {
  const targetElement = useRef<HTMLBodyElement | null>(null);
  const [size, setSize] = useState<DOMRectReadOnly | undefined>(undefined);
  const called = useRef<boolean>(false);

  useEffect(() => {
    if (typeof document !== undefined) {
      targetElement.current = document.querySelector("body");
    }
  }, []);

  useEffect(() => {
    targetElement.current &&
      setSize(targetElement.current.getBoundingClientRect());
  }, [targetElement]);

  useResizeObserver(targetElement, (entry) => setSize(entry?.contentRect));

  useEffect(() => {
    if (size?.width && size.width >= parseInt(breakpoint) && !called.current) {
      callback?.();
      called.current = true;
    } else {
      called.current = false;
    }
  }, [breakpoint, callback, size]);
};

export { useResize };
