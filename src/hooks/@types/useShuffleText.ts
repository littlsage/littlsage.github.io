import { TChildren } from "@app/types/props";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IShuffleState {
  start: VoidFunction;
}

export interface IUseShuffleTextArgs {
  duration?: number;
  onShuffleReady: Dispatch<SetStateAction<IShuffleState | undefined>>;
  ref: MutableRefObject<HTMLElement | null>;
  shouldInitialize?: boolean;
  shuffleDelay?: number;
  shuffleState: IShuffleState | undefined;
  text: TChildren;
}
