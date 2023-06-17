import { useEffect } from "react";

import {
  IIntersectionObserverWithPolyfill,
  IUseIntersectionObserver,
} from "@app/hooks/@types/useIntersectionObserver";

const useIntersectionObserver = ({
  onElementVisible,
  selectors,
}: IUseIntersectionObserver): void => {
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]): void => {
      const intersectingElements = entries.filter(
        ({ isIntersecting }) => isIntersecting,
      );
      const highestIntersection = intersectingElements.length
        ? intersectingElements.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current,
          )
        : null;

      onElementVisible(
        highestIntersection ? `#${highestIntersection.target.id}` : "",
      );
    };

    const observer: IIntersectionObserverWithPolyfill =
      new window.IntersectionObserver(handleIntersect, {
        threshold: [0, 0.4],
      });

    observer.POLL_INTERVAL = 100;

    selectors.forEach((selector: string): void => {
      const element = document.querySelector(selector);
      if (element) {
        observer.observe(element);
      }
    });

    return (): void => observer.disconnect();
  }, [onElementVisible, selectors]);
};

export { useIntersectionObserver };
