"use client";
import { ImageStatic } from "@app/components/atoms/ImageStatic/ImageStatic";
import { Section } from "@app/components/molecules/Section/Section";
import { renderDescription } from "@app/containers/aboutMe/config";
import Alan from "@app/../public/images/static/alan.png";
import { lazy } from "react";
import { LazyLoadingWrapper } from "@app/components/layout/LazyLoadingWrapper/LazyLoadingWrapper";

const HexagonWithDescription = lazy(() =>
  import(
    "@app/components/molecules/HexagonWithDescription/HexagonWithDescription"
  ).then((module) => ({ default: module.HexagonWithDescription })),
);

const AboutMeContainer: React.FC = () => (
  <Section id="about-me" title="About me">
    <LazyLoadingWrapper>
      <HexagonWithDescription
        id="about-me-description"
        description={renderDescription()}
      >
        <ImageStatic alt="Alan Hadyk" height={700} src={Alan} width={700} />
      </HexagonWithDescription>
    </LazyLoadingWrapper>
  </Section>
);

export { AboutMeContainer };
