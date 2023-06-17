"use client";
import { Section } from "@app/components/molecules/Section/Section";
import {
  ISkillsContainerProps,
  SkillsContainerFormat,
} from "@app/containers/skills/@types/SkillsContainer";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import {
  SectionSize,
  SectionVariant,
} from "@app/components/molecules/Section/@types/Section";
import { skillsItems } from "@app/containers/skills/config";
import { lazy } from "react";
import { LazyLoadingWrapper } from "@app/components/layout/LazyLoadingWrapper/LazyLoadingWrapper";

const ContentFrameWithIconsGroup = lazy(() =>
  import(
    "@app/components/molecules/ContentFrameWithIconsGroup/ContentFrameWithIconsGroup"
  ).then((module) => ({ default: module.ContentFrameWithIconsGroup })),
);

const SkillsContainer: React.FC<ISkillsContainerProps> = ({
  format = SkillsContainerFormat.Web,
}) => (
  <Section
    id="skills"
    title="Skills"
    size={
      format === SkillsContainerFormat.Web
        ? SectionSize.Large
        : SectionSize.Small
    }
    variant={
      format === SkillsContainerFormat.Web
        ? SectionVariant.Blue
        : SectionVariant.Light
    }
  >
    {format === SkillsContainerFormat.Web && (
      <LazyLoadingWrapper>
        <ContentFrameWithIconsGroup
          columnCount="columns-5"
          device={Device.Tv}
          items={skillsItems}
        />

        <ContentFrameWithIconsGroup
          columnCount="columns-3"
          device={Device.Desktop}
          items={skillsItems}
        />

        <ContentFrameWithIconsGroup
          columnCount="columns-2"
          device={Device.Tablet}
          items={skillsItems}
        />

        <ContentFrameWithIconsGroup
          device={Device.Mobile}
          items={skillsItems}
        />
      </LazyLoadingWrapper>
    )}

    {format === SkillsContainerFormat.Pdf && (
      <ContentFrameWithIconsGroup items={skillsItems} />
    )}
  </Section>
);

export { SkillsContainer };
