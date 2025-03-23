"use client";

import { useRouter } from 'next/navigation';
import { api } from "@packages/backend/convex/_generated/api";
import { useMutation } from "convex/react";
import Rectangle from '@/components/common/Rectangle';
import Button from '@/components/common/Button';

export default function OnboardingPage() {
    const router = useRouter();
    
    const setUserRole = useMutation(api.mutations.setUserRole.setUserRole);

    const handleRoleSelection = async (role: "owner" | "sitter") => {
        await setUserRole({ role });

        if (role === "owner") {
            router.push('/onboarding/owner');
        } else if (role === "sitter") {
            router.push('/onboarding/sitter');
        }
    };

    return (
        <main className="flex justify-center items-center h-screen">
            <Rectangle className="w-[640px] h-[250px] flex flex-col justify-center items-center gap-6">
                <h1 className="text-secondary-900 font-montserrat font-extrabold text-2xl text-center">
                    Are you a pet owner or a pet sitter?
                </h1>
                <div className="flex gap-4">
                    <Button text="Pet Owner" className="text-secondary-900 font-montserrat font-bold" />
                    <Button text="Pet Sitter" className="text-secondary-900 font-montserrat font-bold" />
                </div>
            </Rectangle>
        </main>
    );
}
