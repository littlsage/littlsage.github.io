import { CSSProperties } from "react";
import { IThemeClasses } from "@app/types/theme";
import { TSVGIcon } from "@app/types/svg";

export enum IconStaticName {
  AfterEffects = "afterEffects",
  AirBnb = "airbnb",
  Apollo = "apollo",
  Auth0 = "auth0",
  Axios = "axios",
  Bamboo = "bamboo",
  Basecamp = "basecamp",
  Buildkite = "buildkite",
  CSS = "css",
  CSSModules = "cssModules",
  Calendar = "calendar",
  Chakra = "chakra",
  CoffeeScript = "coffeeScript",
  CorelDraw = "corelDraw",
  Cypress = "cypress",
  Docker = "docker",
  Docpad = "docpad",
  Ember = "ember",
  Envelope = "envelope",
  Express = "express",
  Figma = "figma",
  Gallery = "gallery",
  GitHubActions = "githubActions",
  GitHubEnterprise = "githubEnterprise",
  GitLab = "gitlab",
  Globe = "globe",
  GraphQL = "graphQL",
  Grunt = "grunt",
  Gulp = "gulp",
  HTML = "html",
  JEST = "jest",
  JQuery = "jQuery",
  JavaScript = "javaScript",
  Jenkins = "jenkins",
  Jira = "jira",
  LESS = "less",
  Link = "link",
  LinkedIn = "linkedIn",
  NestJs = "nestJs",
  NextJs = "nextJs",
  NodeJs = "nodeJs",
  Phabricator = "phabricator",
  Photoshop = "photoshop",
  Pin = "pin",
  Prestashop = "prestashop",
  Prisma = "prisma",
  QUnit = "qUnit",
  Quire = "quire",
  REST = "rest",
  React = "react",
  ReactNative = "reactNative",
  ReactQuery = "reactQuery",
  ReactTestingLibrary = "reactTestingLibrary",
  Redmine = "redmine",
  Redux = "redux",
  Ruby = "ruby",
  RubyOnRails = "rubyOnRails",
  Sass = "sass",
  Sinatra = "sinatra",
  Sketch = "sketch",
  Stash = "stash",
  StyledComponents = "styledComponents",
  Tailwind = "tailwind",
  Taskade = "taskade",
  Trello = "trello",
  TypeScript = "typeScript",
  Vite = "vite",
  Webpack = "webpack",
  Websocket = "websocket",
  WindiCSS = "windiCss",
  Zeplin = "zeplin",
}

export enum IconStaticVariant {
  Default,
  Inverted,
}

export interface IIconStaticProps {
  iconName: IconStaticName;
  style?: CSSProperties;
  themeClasses?: Pick<IThemeClasses, "height" | "overflow" | "width">;
  variant?: IconStaticVariant;
}

export type TIconStaticIcons = Record<IIconStaticProps["iconName"], TSVGIcon>;
