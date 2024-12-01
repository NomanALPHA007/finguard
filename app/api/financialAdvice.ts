// /app/api/financialAdvice.ts
import { NextResponse } from "next/server";
import { getFinancialAdvice } from "@/utils/financialUtils";

interface FinancialAdviceRequestBody {
  userPreferences: any; // Replace 'any' with a more specific type if possible
}

export async function POST(request: Request) {
  const { userPreferences }: FinancialAdviceRequestBody = await request.json();

  try {
    const advice = await getFinancialAdvice(userPreferences);
    return NextResponse.json({ advice });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
