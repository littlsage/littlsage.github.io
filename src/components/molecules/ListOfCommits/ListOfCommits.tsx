import isEmpty from "lodash/isEmpty";

import { Loader } from "@app/components/molecules/Loader/Loader";
import { Commit } from "@app/components/molecules/Commit/Commit";
import { Error } from "@app/components/molecules/Error/Error";
import { IListOfCommitsProps } from "@app/components/molecules/ListOfCommits/@types/ListOfCommits";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { listOfCommitsCommitsWrapperDefaultThemeClasses } from "@app/components/molecules/ListOfCommits/styles";
import { getCommitData } from "@app/components/molecules/ListOfCommits/helpers/getCommitData";
import { CommitsState } from "@app/hooks/@types/useCommits";

const ListOfCommits: React.FC<IListOfCommitsProps> = ({
  commitsList,
  commitsState,
}) => {
  switch (commitsState) {
    case CommitsState.Error:
      return <Error title="Error" description="GitHub API issue" />;

    case CommitsState.Loaded:
      return (
        <LayoutContainer
          themeClasses={listOfCommitsCommitsWrapperDefaultThemeClasses}
        >
          {!isEmpty(commitsList) &&
            commitsList
              ?.filter((commitEntity) => commitEntity)
              ?.map((commitEntity, index: number) => {
                const { date, html_url, sha } = getCommitData(commitEntity);
                const delay = index * 300;

                return date && html_url && sha ? (
                  <Commit
                    date={date}
                    delay={delay}
                    htmlUrl={html_url}
                    key={sha}
                    sha={sha}
                  />
                ) : null;
              })}
        </LayoutContainer>
      );

    default:
      return <Loader />;
  }
};

export { ListOfCommits };
