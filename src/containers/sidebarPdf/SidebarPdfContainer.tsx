import { SidebarPdfContainerLanguagesSection } from "@app/containers/sidebarPdf/sections/SidebarPdfContainerLanguagesSection";
import { SidebarPdfContainerLogoSection } from "@app/containers/sidebarPdf/sections/SidebarPdfContainerLogoSection";
import { SidebarPdfContainerMainIconsSection } from "@app/containers/sidebarPdf/sections/SidebarPdfContainerMainIconsSection";
import { SkillsContainerFormat } from "@app/containers/skills/@types/SkillsContainer";
import { SkillsContainer } from "@app/containers/skills/SkillsContainer";

const SidebarPdfContainer: React.FC = () => (
  <>
    <SidebarPdfContainerLogoSection />

    <SidebarPdfContainerMainIconsSection />

    <SkillsContainer format={SkillsContainerFormat.Pdf} />

    <SidebarPdfContainerLanguagesSection />
  </>
);

export { SidebarPdfContainer };
