// /app/api/blockchain.ts
import { NextResponse } from "next/server";
import { mintToken, stakeTokens } from "@/utils/blockchainUtils";

interface BlockchainRequestBody {
  action: "mint" | "stake";
  amount: number;
  user: string;
}

export async function POST(request: Request) {
  const { action, amount, user }: BlockchainRequestBody = await request.json();

  try {
    if (action === "mint") {
      const result = await mintToken(amount, user);
      return NextResponse.json(result);
    }
    if (action === "stake") {
      const result = await stakeTokens(amount, user);
      return NextResponse.json(result);
    }
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
