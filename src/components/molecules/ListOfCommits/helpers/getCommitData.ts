import { ICommitProps } from "@app/components/molecules/ListOfCommits/@types/ListOfCommits";

const getCommitData = (commitEntity: ICommitProps | null | undefined) => {
  const { commit, html_url, sha } = commitEntity || {};
  const { author } = commit || {};
  const { date } = author || {};

  return {
    date,
    html_url,
    sha,
  };
};

export { getCommitData };
