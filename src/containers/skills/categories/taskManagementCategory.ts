import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const taskManagementCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.Jira,
      IconStaticName.Phabricator,
      IconStaticName.Redmine,
      IconStaticName.Quire,
      IconStaticName.Trello,
      IconStaticName.Taskade,
      IconStaticName.Basecamp,
    ].includes(iconName),
  ),
  title: "Task Management",
};
