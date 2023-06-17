"use client";
import { useEffect, useState, useRef } from "react";
import { isIE11 } from "@app/helpers/browser/isIE11";

import {
  HexagonFill,
  IHexagonProps,
  THexagonBorderDimensionsProps,
} from "@app/components/molecules/Hexagon/@types/Hexagon";

const useHexagonState = ({ fill }: Pick<IHexagonProps, "fill">) => {
  const [hexagonBorderDimensions, setHexagonBorderDimensions] =
    useState<THexagonBorderDimensionsProps>({
      height: undefined,
      width: undefined,
    });
  const hexagonBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fill !== HexagonFill.None) {
      return;
    }

    const path = hexagonBorderRef.current?.querySelector("path");

    const { height, width } = path
      ? path.getBoundingClientRect()
      : { height: undefined, width: undefined };

    if (isIE11() && height && width) {
      setHexagonBorderDimensions({
        height: `${height}px`,
        width: `${width}px`,
      });
    }
  }, [fill]);

  return {
    hexagonBorderDimensions,
    hexagonBorderRef,
  };
};

export { useHexagonState };
