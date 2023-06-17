import { IHexagonWithDescriptionContentProps } from "@app/components/molecules/HexagonWithDescriptionContent/@types/HexagonWithDescriptionContent";

export interface IHexagonWithDescriptionProps {
  children: IHexagonWithDescriptionContentProps["children"];
  description: IHexagonWithDescriptionContentProps["description"];
  id?: string;
}
