import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Corners } from "@app/components/molecules/Corners/Corners";
import { ILanguagesGroupProps } from "@app/components/molecules/LanguagesGroup/@types/LanguagesGroup";
import { languagesGroupDefaultThemeClasses } from "@app/components/molecules/LanguagesGroup/styles";

const LanguagesGroup: React.FC<ILanguagesGroupProps> = ({ languages }) => (
  <LayoutContainer themeClasses={languagesGroupDefaultThemeClasses.wrapper}>
    {languages.map(({ level, name }) => (
      <LayoutContainer
        key={level + name}
        themeClasses={languagesGroupDefaultThemeClasses.languageWrapper}
      >
        <LayoutContainer themeClasses={languagesGroupDefaultThemeClasses.level}>
          <Corners />
          {level}
        </LayoutContainer>

        <Typography themeClasses={languagesGroupDefaultThemeClasses.name}>
          {name}
        </Typography>
      </LayoutContainer>
    ))}
  </LayoutContainer>
);

export { LanguagesGroup };
