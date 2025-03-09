"use client";

import Header from "@/components/sitter/Header";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@packages/backend/convex/_generated/api";

function ProfileCard({ profile }: { profile: any }) {
  return (
    <div className="profile-card w-96 h-120 p-8 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center">
      {profile.displayPicture ? (
        <img
          src={profile.displayPicture}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-pastelPurple mb-4"
        />
      ) : (
        <div className="w-40 h-40 rounded-full border-4 border-pastelPurple mb-4 bg-gray-200 flex items-center justify-center">
          <span className="text-pastelPurple">No Image</span>
        </div>
      )}
      <h2 className="text-2xl font-bold text-primary mb-2">{profile.name || "N/A"}</h2>
      <p className="text-gray-700"><strong>Location:</strong> {profile.location || "N/A"}</p>
      <p className="text-gray-700"><strong>Experience:</strong> {profile.experience || "N/A"}</p>
      <p className="text-gray-700"><strong>Skills:</strong> {profile.skills || "N/A"}</p>
      <p className="text-gray-700">
        <strong>Availability:</strong> {profile.availabilityStart ? new Date(profile.availabilityStart).toLocaleDateString() : "N/A"} - {profile.availabilityEnd ? new Date(profile.availabilityEnd).toLocaleDateString() : "N/A"}
      </p>
      <p className="text-gray-700"><strong>Notes:</strong> {profile.notes || "N/A"}</p>
    </div>
  );
}

export default function SitterHomePage() {
  const allUsers = useQuery(api.queries.getOwnerProfiles.getOwnerProfiles); // Fetch all users with role "owner"
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const handleNext = () => {
    if (allUsers && allUsers.length > 0) {
      setCurrentProfileIndex((prevIndex) => Math.min(prevIndex + 1, allUsers.length - 1));
    }
  };

  return (
    <main className="bg-[#EDEDED] h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center h-full">
        {allUsers && allUsers.length > 0 && currentProfileIndex < allUsers.length ? (
          <div className="flex flex-col items-center">
            <ProfileCard 
              profile={allUsers[currentProfileIndex]} 
            />
            <button onClick={handleNext} className="mt-4 bg-primary text-white p-2 rounded hover:bg-pastelBlueHover transition duration-300">
              Next
            </button>
          </div>
        ) : (
          <p className="text-gray-700">No more profiles</p>
        )}
      </div>
    </main>
  );
}
