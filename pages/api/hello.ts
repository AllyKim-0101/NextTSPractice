// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MenuData } from "../../components/nav/nav";
import { menuData } from "../../constants/constants";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuData[]>
) {
  res.status(200).json(menuData);
}
