import Emails from "@/app/(models)/Emails";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const emailData = body.formData;
    await Emails.create(emailData);

    return NextResponse.json({ message: "Email registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
