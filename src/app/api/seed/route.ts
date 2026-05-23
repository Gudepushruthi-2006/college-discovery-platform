export const dynamic = "force-dynamic";
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIT Hyderabad",
        location: "Hyderabad",
        fees: 200000,
        rating: 4.8,
        overview: "Top engineering institute in India.",
        placements: "Highest package 60 LPA",
        image:
        "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg",
      },
      {
        name: "NIT Warangal",
        location: "Warangal",
        fees: 150000,
        rating: 4.5,
        overview: "Premier National Institute of Technology.",
        placements: "Highest package 45 LPA",
        image:
          "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
      },
    ],
  });

  return NextResponse.json({
    message: "Database Seeded Successfully",
  });
}