import { NextResponse } from 'next/server';

import burgers from '../../../../db.json';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return NextResponse.json(burgers);
}
