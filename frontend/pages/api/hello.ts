// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let request;
  let q = req.method === "GET" ? req.query : req.body;
  let { config } = q;

  if (config) {
    request = axios.create(config);
  } else {
    request = null;
  }
  // let createRequest = new Promise(request.post("/status"));
  res.status(200).json([
    { key: 1, status: 1 },
    { key: 2, status: 1 },
  ]);
}
