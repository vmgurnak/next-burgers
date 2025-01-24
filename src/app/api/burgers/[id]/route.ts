import { NextResponse } from 'next/server';

import burgers from '../../../../../db.json';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  console.log(id);

  const burger = burgers.burgers.find((burger: any) => burger.id === id);

  return NextResponse.json(burger);
}
