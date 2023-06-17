import { languagesCategory } from "@app/containers/skills/categories/languagesCategory";
import { frameworksCategory } from "@app/containers/skills/categories/frameworksCategory";
import { stateManagementCategory } from "@app/containers/skills/categories/stateManagementCategory";
import { webApisCategory } from "@app/containers/skills/categories/webApisCategory";
import { webTechnologiesCategory } from "@app/containers/skills/categories/webTechnologiesCategory";
import { cssToolsCategory } from "@app/containers/skills/categories/cssToolsCategory";
import { testingCategory } from "@app/containers/skills/categories/testingCategory";
import { cicdCategory } from "@app/containers/skills/categories/cicdCategory";
import { bundlersCategory } from "@app/containers/skills/categories/bundlersCategory";
import { taskManagementCategory } from "@app/containers/skills/categories/taskManagementCategory";
import { designToolsCategory } from "@app/containers/skills/categories/designToolsCategory";

import { IContentFrameWithIconsProps } from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";

export const skillsItems: IContentFrameWithIconsProps[] = [
  languagesCategory,
  frameworksCategory,
  stateManagementCategory,
  webApisCategory,
  webTechnologiesCategory,
  cssToolsCategory,
  testingCategory,
  cicdCategory,
  bundlersCategory,
  taskManagementCategory,
  designToolsCategory,
];
