import { spinnerDefaultThemeClasses } from "@app/components/atoms/Spinner/styles";
import { convertObjectValuesToArray } from "@app/helpers/arrays/convertObjectValuesToArray";

const Spinner: React.FC = () => (
  <div
    className={convertObjectValuesToArray(spinnerDefaultThemeClasses).join(" ")}
  />
);

export { Spinner };
