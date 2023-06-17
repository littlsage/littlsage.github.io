import {
  ImageDynamicName,
  TImageDynamicComponents,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import Earth from "@app/../public/images/dynamic/earth.svg";
import Flux from "@app/../public/images/dynamic/flux.svg";
import Hexagon from "@app/../public/images/dynamic/hexagon.svg";
import HexagonWithPattern from "@app/../public/images/dynamic/hexagonWithPattern.svg";
import Logo from "@app/../public/images/dynamic/logo.svg";
import LogoShortcut from "@app/../public/images/dynamic/logoShortcut.svg";

const imageDynamicComponents: TImageDynamicComponents = {
  [ImageDynamicName.Earth]: Earth,
  [ImageDynamicName.Flux]: Flux,
  [ImageDynamicName.Hexagon]: Hexagon,
  [ImageDynamicName.HexagonWithPattern]: HexagonWithPattern,
  [ImageDynamicName.Logo]: Logo,
  [ImageDynamicName.LogoShortcut]: LogoShortcut,
};

export { imageDynamicComponents };
