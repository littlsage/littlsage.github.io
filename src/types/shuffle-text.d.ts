import "shuffle-text";

declare module "shuffle-text" {
  export interface ShuffleTextType {
    dispose(): unknown;
    duration: number;
    setText: (arg1: string) => void;
    start: VoidFunction;
  }
}
