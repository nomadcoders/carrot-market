import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.status(200).end();
}

export default withHandler("POST", handler);
