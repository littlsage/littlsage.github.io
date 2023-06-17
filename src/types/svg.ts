import { FunctionComponent, SVGProps } from "react";

export type TSVGIcon = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;
