"use client";

import { useQuery } from "convex/react";
import Header from "@/components/sitter/Header";
import { api } from "@packages/backend/convex/_generated/api";

export default function SitterProfilePage() {
    const sitterProfile = useQuery(api.queries.getUserProfile.getSitterProfile);

    return (
        <div className="min-h-screen bg-gradient-to-r from-pastelBlue to-pastelPink flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl text-primary mb-6">My Profile</h1>
                <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
                    {sitterProfile?.[0]?.displayPicture ? (
                        <img
                            src={sitterProfile[0].displayPicture}
                            alt="Profile"
                            className="w-32 h-32 rounded-full border-4 border-pastelPurple mb-4 md:mb-0 md:mr-6"
                        />
                    ) : (
                        <div
                            className="w-32 h-32 rounded-full border-4 border-pastelPurple mb-4 md:mb-0 md:mr-6 bg-gray-200 flex items-center justify-center"
                        >
                            <span className="text-pastelPurple">No Image</span>
                        </div>
                    )}
                    <div className="text-lg text-primary">
                        <p><strong>Name:</strong> {sitterProfile?.[0]?.name || "N/A"}</p>
                        <p><strong>Location:</strong> {sitterProfile?.[0]?.location || "N/A"}</p>
                        <p><strong>Experience:</strong> {sitterProfile?.[0]?.experience || "N/A"}</p>
                        <p><strong>Skills:</strong> {sitterProfile?.[0]?.skills || "N/A"}</p>
                        <p><strong>Availability:</strong> {sitterProfile?.[0]?.availabilityStart ? new Date(sitterProfile[0].availabilityStart).toLocaleDateString() : "N/A"} - {sitterProfile?.[0]?.availabilityEnd ? new Date(sitterProfile[0].availabilityEnd).toLocaleDateString() : "N/A"}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
