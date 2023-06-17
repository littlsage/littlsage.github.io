export interface IUseIntersectionObserver {
  onElementVisible: (arg1: string) => void;
  selectors: string[];
}

export interface IIntersectionObserverWithPolyfill
  extends IntersectionObserver {
  POLL_INTERVAL?: number;
}
