import { Spinner } from "@app/components/atoms/Spinner/Spinner";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  loaderDefaultThemeClasses,
  loaderSpinnerWrapperDefaultThemeClasses,
} from "@app/components/molecules/Loader/styles";

const Loader: React.FC = () => (
  <LayoutContainer themeClasses={loaderDefaultThemeClasses}>
    <LayoutContainer themeClasses={loaderSpinnerWrapperDefaultThemeClasses}>
      <Spinner />
    </LayoutContainer>
  </LayoutContainer>
);

export { Loader };
