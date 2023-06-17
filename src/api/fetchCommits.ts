import { ICommitProps } from "@app/components/molecules/ListOfCommits/@types/ListOfCommits";
import { axiosGet } from "@app/helpers/api/axiosGet";

async function fetchCommits(): Promise<ICommitProps[] | Error> {
  try {
    const response = await axiosGet<ICommitProps[]>(
      "https://api.github.com/repos/alan-hadyk/portfolio/commits",
    );

    return response;
  } catch (error) {
    throw "There was a problem with GitHub API";
  }
}

export { fetchCommits };
