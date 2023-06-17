import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Link } from "@app/components/molecules/Link/Link";
import { Section } from "@app/components/molecules/Section/Section";

const ContactContainer: React.FC = () => (
  <Section id="contact" title="Contact">
    <LayoutContainer
      themeClasses={{
        display: "flex",
        justifyContent: "justify-center",
      }}
    >
      <Link href="mailto:alan.hadyk@gmail.com" isExternal isHoverable>
        <Typography
          ellipsis
          isHoverable
          themeClasses={{
            color: "text-blue300",
            fontSize: "text-28",
            paddingBottom: "pb-16",
            textAlign: "text-center",
          }}
        >
          alan.hadyk@gmail.com
        </Typography>
      </Link>
    </LayoutContainer>
  </Section>
);

export { ContactContainer };
