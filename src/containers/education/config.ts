import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelAndTitleGroupProps } from "@app/components/molecules/IconWithLabelAndTitleGroup/@types/IconWithLabelAndTitleGroup";

export const education: IIconWithLabelAndTitleGroupProps["iconsWithLabelsGroup"] =
  [
    {
      iconWithLabel: {
        iconName: IconStaticName.Calendar,
        label: "September 2008 to June 2010",
      },
      title: "Sound Engineering Study, Regionalny Ośrodek Edukacji, Katowice",
    },
    {
      iconWithLabel: {
        iconName: IconStaticName.Calendar,
        label: "September 2004 to June 2007",
      },
      title: "High School, SOSW, Tarnowskie Góry",
    },
  ];
