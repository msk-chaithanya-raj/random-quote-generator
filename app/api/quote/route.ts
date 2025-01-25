import { NextResponse } from "next/server";

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Act as if what you do makes a difference. It does. - William James",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
];

export async function GET() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return NextResponse.json({ quote: randomQuote });
}
