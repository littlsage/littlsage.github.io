import { NoMatchPageTemplate } from "@app/components/templates/NoMatchPageTemplate/NoMatchPageTemplate";
import { NotFoundContainer } from "@app/containers/notFound/NotFoundContainer";

const metadata = {
  description: "Alan Hadyk's Portfolio",
  title: "Alan Hadyk - Portfolio",
};

const NotFoundPage: React.FC = () => (
  <NoMatchPageTemplate>
    <NotFoundContainer />
  </NoMatchPageTemplate>
);

export { metadata };
export default NotFoundPage;
