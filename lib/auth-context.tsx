"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface UserProfile {
    id: string;
    name: string;
    email: string;
    targetExam: "IELTS" | "TOEFL";
    level: "Beginner" | "Intermediate" | "Advanced";
    avatar?: string;
}

interface AuthContextType {
    user: UserProfile | null;
    isLoading: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial auth check
        const timer = setTimeout(() => {
            setUser({
                id: "1",
                name: "Malik",
                email: "malik@example.com",
                targetExam: "IELTS",
                level: "Intermediate",
            });
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const login = () => {
        setUser({
            id: "1",
            name: "Malik",
            email: "malik@example.com",
            targetExam: "IELTS",
            level: "Intermediate",
        });
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
