import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                //Check if the user exists.
                await connect();

                try {
                    const user = await User.findOne({
                        email: credentials.email,
                    });

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password.toString(),
                            user.password
                        );

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials!");
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                } catch (err) {
                    throw new Error(err);
                }
            },
        }),
    ],
})