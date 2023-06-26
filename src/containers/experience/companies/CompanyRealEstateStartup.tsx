import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";
import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { Company } from "@app/components/organisms/Company/Company";
import { invertIcon } from "@app/containers/experience/helpers/invertIcon";

const CompanyRealEstateStartup: React.FC<
  Pick<ICompanyProps, "format" | "variant">
> = ({ format, variant }) => {
  const icons = iconsWithLabels
    .filter(({ iconName }) =>
      [
        IconStaticName.HTML,
        IconStaticName.CSS,
        IconStaticName.JavaScript,
        IconStaticName.TypeScript,
        IconStaticName.React,
        IconStaticName.NextJs,
        IconStaticName.Tailwind,
        IconStaticName.Auth0,
        IconStaticName.Webpack,
        IconStaticName.JEST,
        IconStaticName.ReactTestingLibrary,
        IconStaticName.Cypress,
        IconStaticName.NodeJs,
        IconStaticName.Apollo,
        IconStaticName.GraphQL,
        IconStaticName.Docker,
      ].includes(iconName),
    )
    .map(
      invertIcon(
        [
          IconStaticName.Apollo,
          IconStaticName.Auth0,
          IconStaticName.Cypress,
          IconStaticName.NextJs,
        ],
        format,
      ),
    );

  return (
    <Company
      date="December 2021 to March 2022"
      format={format}
      iconsWithLabels={icons}
      name="Bitwave"
      link="https://bitwave.io"
      responsibilities={[
        <span key="Handled">
          Handled the web 3.0 integration for different{" "}
          <strong>
            wallet connections and contract integrations for multi-chain support
          </strong>
          , including Ethereum, Binance, Polygon, etc.
        </span>,
        <span key="Architected">
          Architected feature-rich gaming, rewards, and a pack NFT project for a
          major sports league.
        </span>,
        <span key="Implemented">
          Implemented <strong>large gas optimizations</strong> in underlying DAO
          governance,
          <strong>stablecoin yield generation, liquidity arbitrage</strong>{" "}
          functionalities, and integration of new LP pools for the regular coin
          peg maintenance, such as curve finance and Liquidity Protocol.
        </span>,
        <span key="Embedded">
          <strong>Created a crowdfunding Protocol</strong> in Solidity launched
          on Ethereum in 2022.
        </span>,
      ]}
      title="Blockchain Engineer"
      variant={variant}
    />
  );
};

export { CompanyRealEstateStartup };
