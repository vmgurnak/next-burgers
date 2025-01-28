import { NextResponse } from 'next/server';

import burgers from '../../../../../db.json';

interface Burger {
  name: string;
  image: string;
  desc: string;
  price: number;
  id: string;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
  res: Response
) {
  const id = await params.id;

  const burger = burgers.burgers.find((burger: Burger) => burger.id === id);

  return NextResponse.json(burger);
}
