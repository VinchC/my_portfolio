import { type NextRequest, NextResponse } from 'next/server';

export default async function POST(request: NextRequest) {
  return NextResponse.json('Hello from API!');
}