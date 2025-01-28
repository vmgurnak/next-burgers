import { NextResponse } from 'next/server';

import burgers from '../../../../db.json';

export async function GET() {
  return NextResponse.json(burgers);
}
