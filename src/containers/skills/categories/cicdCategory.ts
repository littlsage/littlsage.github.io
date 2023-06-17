import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const cicdCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.Jenkins,
      IconStaticName.Buildkite,
      IconStaticName.Bamboo,
      IconStaticName.GitHubActions,
      IconStaticName.GitHubEnterprise,
      IconStaticName.Docker,
      IconStaticName.GitLab,
      IconStaticName.Stash,
    ].includes(iconName),
  ),
  title: "CI / CD",
};
