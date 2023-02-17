import { ls } from "shelljs";

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = []{
  name: string;
};

default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    res.send({
        let folders = ls('./')
        res.status(200).json(folders)
    })
}