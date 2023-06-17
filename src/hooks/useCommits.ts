"use client";
import { useEffect, useState } from "react";

import { fetchCommits } from "@app/api/fetchCommits";
import { ICommitProps } from "@app/components/molecules/ListOfCommits/@types/ListOfCommits";
import { CommitsState } from "@app/hooks/@types/useCommits";

const useCommits = () => {
  const [commitsList, setCommitsList] = useState<ICommitProps[]>([]);
  const [commitsState, setCommitsState] = useState<CommitsState>(
    CommitsState.Idle,
  );

  const getCommits = async () => {
    setCommitsState(CommitsState.Loading);

    try {
      const commits = await fetchCommits();

      if (Array.isArray(commits)) {
        setCommitsList(commits);
        setCommitsState(CommitsState.Loaded);
      } else {
        setCommitsState(CommitsState.Error);
      }
    } catch (error) {
      setCommitsState(CommitsState.Error);
    }
  };

  useEffect(() => {
    getCommits();
  }, []);

  return {
    commitsList,
    commitsState,
  };
};

export { useCommits };
