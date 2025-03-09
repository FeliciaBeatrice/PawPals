"use client";

import { api } from "@packages/backend/convex/_generated/api";
import { useMutation } from "convex/react";

export default function Home() {
    const setRole = useMutation(api.mutations.setUserRole.setUserRole);

    const handleRoleSelection = async (role: "owner" | "sitter") => {
        await setRole({ role });
    };

    return (
        <main className="bg-gradient-to-r from-pastelPink via-pastelPurple to-pastelBlue h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <p className="mb-6">Are you a pet owner or a pet sitter?</p>
                <div className="flex flex-col space-y-4 items-center">
                    <button 
                        className="bg-pastelPink text-white px-4 py-2 rounded hover:bg-pastelPinkHover"
                        onClick={() => handleRoleSelection("owner")}
                    >
                        Pet Owner
                    </button>
                    <button 
                        className="bg-pastelBlue text-white px-4 py-2 rounded hover:bg-pastelBlueHover"
                        onClick={() => handleRoleSelection("sitter")}
                    >
                        Pet Sitter
                    </button>
                </div>
            </div>
        </main>
    );
}
