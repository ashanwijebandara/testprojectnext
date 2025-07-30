"use client"

import { useSession, SessionProvider } from 'next-auth/react';
import React from "react";

const AuthProvider = ({ children }) => {
    // const session = useSession();

    return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;




