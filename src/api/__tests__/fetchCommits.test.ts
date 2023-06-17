/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchCommits } from "@app/api/fetchCommits";
import { ICommitProps } from "@app/components/molecules/ListOfCommits/@types/ListOfCommits";
import axios from "axios";

jest.mock("axios");

const commitsList: ICommitProps[] = [
  {
    commit: {
      author: {
        date: "2020-03-15T14:58:16Z",
      },
    },
    html_url:
      "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
    sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f",
  },
  {
    commit: {
      author: {
        date: "2020-03-14T16:05:26Z",
      },
    },
    html_url:
      "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
    sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
  },
];

afterEach(() => {
  jest.resetAllMocks();
});

describe("api / fetchCommits", () => {
  test("should return an array of commits if GitHub API call's status is 200", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: commitsList });

    const fetchCommitsResult = await fetchCommits();

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/repos/alan-hadyk/portfolio/commits",
      undefined,
    );
    expect(fetchCommitsResult).toEqual(commitsList);
  });

  test("should return an error if GitHub API call fails", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Not Found"));

    try {
      await fetchCommits();

      expect(true).toBe(false);
    } catch (error: any) {
      expect(error).toEqual("There was a problem with GitHub API");
    }
  });
});
