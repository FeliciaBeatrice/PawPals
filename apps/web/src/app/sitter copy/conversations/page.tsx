"use client";

import { useQuery } from "convex/react";
import Header from "@/components/sitter/Header";
import { api } from "@packages/backend/convex/_generated/api";
import Link from "next/link";

export default function SitterConversationsPage() {
    const conversations = useQuery(api.queries.getConversationsOfSitter.getConversationsOfSitter);
    
    return (
        <div className="min-h-screen bg-gradient-to-r from-pastelBlue to-pastelPink flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <div className="flex flex-col">
                    {conversations?.map((conversation) => (
                        <Link key={conversation._id} href={`/sitter/conversations/${conversation._id}`}>
                            <div className="bg-white p-4 rounded-lg shadow-lg mb-4 flex items-center">
                                <img src={conversation.otherUserDisplayPicture} alt={`${conversation.otherUserName}'s display`} className="w-16 h-16 rounded-full mr-4" />
                                <p className="text-lg font-semibold">{conversation.otherUserName}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
