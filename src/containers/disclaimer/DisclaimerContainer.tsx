import { Typography } from "@app/components/atoms/Typography/Typography";
import {
  SectionSize,
  SectionVariant,
} from "@app/components/molecules/Section/@types/Section";
import { Section } from "@app/components/molecules/Section/Section";
import { rodoAgreement } from "@app/containers/disclaimer/config";

const DisclaimerContainer: React.FC = () => (
  <Section
    id="disclaimer"
    size={SectionSize.Small}
    variant={SectionVariant.Dark}
  >
    <Typography
      themeClasses={{
        color: "text-black",
        fontSize: "text-8",
        lineHeight: "leading-16",
      }}
    >
      {rodoAgreement}
    </Typography>
  </Section>
);

export { DisclaimerContainer };
