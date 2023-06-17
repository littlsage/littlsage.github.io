import { convertPageToPDF } from "@app/helpers/browser/convertPageToPDF";
import { NextApiRequest, NextApiResponse } from "next";

const ApiCvRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Disposition", "inline");
  res.setHeader("Content-Type", "application/pdf");

  const host = req.headers.host;

  const pdf = await convertPageToPDF(`http://${host}/cv`, {
    height: "6720px",
    pageRanges: "1",
    printBackground: true,
    width: "210mm",
  });

  return res.send(pdf);
};

export default ApiCvRoute;
