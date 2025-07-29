import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
    console.log("Register API called");
    console.log("Request body:", request);
    const { name, email, password } = ["1", "2", "3"]//await request.json();

    await connect();
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse("User created successfully", { status: 201 });

    } catch (err) {
        return new NextResponse(err.message, { status: 500 });
    }
} 