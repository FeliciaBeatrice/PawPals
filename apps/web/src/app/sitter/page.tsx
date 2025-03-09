"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@packages/backend/convex/_generated/api";
import Header from "@/components/sitter/Header";

export default function ListingsPage() {
    const listings = useQuery(api.queries.getListing.getAllListings);
    const [currentListingIndex, setCurrentListingIndex] = useState(0);
    const handleNext = () => {
        if (listings && listings.length > 0) {
            setCurrentListingIndex((prevIndex) => Math.min(prevIndex + 1, listings.length - 1));
        }
    };

    return (
      <div className="min-h-screen bg-gradient-to-r from-pastelBlue to-pastelPink flex flex-col">
            <Header />
            {listings && listings.length > 0 && currentListingIndex < listings.length ? (
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <img 
                        src={listings[currentListingIndex].picture} 
                        alt={listings[currentListingIndex].petName} 
                        className="w-64 h-64 object-cover rounded-md mb-4 border-4 border-pastelPurple" 
                    />
                    <h2 className="text-2xl font-bold text-primary mb-2">{listings[currentListingIndex].petName}</h2>
                    <p className="text-gray-700"><strong>Type:</strong> {listings[currentListingIndex].petType}</p>
                    <p className="text-gray-700"><strong>From:</strong> {new Date(listings[currentListingIndex].start).toLocaleDateString()}</p>
                    <p className="text-gray-700"><strong>Until:</strong> {new Date(listings[currentListingIndex].end).toLocaleDateString()}</p>
                    <p className="text-gray-700"><strong>Notes:</strong> {listings[currentListingIndex].notes || "N/A"}</p>
                    <button 
                        onClick={handleNext} 
                        className="mt-4 bg-primary text-white p-2 rounded hover:bg-pastelBlueHover transition duration-300"
                    >
                        Next
                    </button>
                </div>
            ) : (
                <p className="text-gray-700">No more listings available.</p>
            )}
        </div>
    );
}