import { IThemeClasses } from "@app/types/theme";
import React from "react";

export type TLayoutContainerElementType = HTMLDivElement | HTMLElement;

export interface ILayoutContainerProps {
  as?: "div" | "nav" | "header" | "main" | "ul";
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement> | (() => void);
  style?: React.CSSProperties;
  tabIndex?: number;
  themeClasses?: IThemeClasses;
}
