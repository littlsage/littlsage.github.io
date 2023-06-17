import { CommitsState } from "@app/hooks/@types/useCommits";

export interface IListOfCommitsProps {
  commitsList: Array<ICommitProps | undefined | null>;
  commitsState: CommitsState;
}

export interface ICommitProps {
  commit?: {
    author?: {
      date?: string;
    };
  } | null;
  html_url?: string | null;
  sha?: string | null;
}
