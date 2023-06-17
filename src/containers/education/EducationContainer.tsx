import { IconWithLabelAndTitleGroup } from "@app/components/molecules/IconWithLabelAndTitleGroup/IconWithLabelAndTitleGroup";
import {
  SectionSize,
  SectionVariant,
} from "@app/components/molecules/Section/@types/Section";
import { Section } from "@app/components/molecules/Section/Section";
import { education } from "@app/containers/education/config";

const EducationContainer: React.FC = () => (
  <Section
    id="education"
    title="Education"
    size={SectionSize.Small}
    variant={SectionVariant.Dark}
  >
    <IconWithLabelAndTitleGroup iconsWithLabelsGroup={education} />
  </Section>
);

export { EducationContainer };
