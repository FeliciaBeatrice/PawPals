"use client";

import { useQuery } from "convex/react";
import Header from "@/components/sitter/Header";
import { api } from "@packages/backend/convex/_generated/api";
import { Id } from "@packages/backend/convex/_generated/dataModel";

export default function ConversationMessagesPage({ params }: { params: { conversationId: string } }) {
    const messages = useQuery(api.queries.getMessage.getMessages, { conversationId: params.conversationId as Id<"conversations"> });

    return (
        <div className="min-h-screen bg-gradient-to-r from-pastelBlue to-pastelPink flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <div className="flex flex-col">
                    {messages?.map((message) => (
                        <div key={message._id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                            <p className="font-semibold">{message.senderName} </p>
                            <p>{message.message}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}