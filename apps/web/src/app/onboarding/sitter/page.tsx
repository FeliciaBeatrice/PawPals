"use client";

import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from "@packages/backend/convex/_generated/api";

export default function SitterOnboardingPage() {
  const [availabilityStart, setAvailabilityStart] = useState('');
  const [availabilityEnd, setAvailabilityEnd] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [notes, setNotes] = useState('');

  const setSitterProfile = useMutation(api.mutations.setUserProfile.setSitterProfile);

  async function handleSubmit(event: any) {
    event.preventDefault();

    // Convert date strings to timestamps
    const availabilityStartTimestamp = new Date(availabilityStart).getTime();
    const availabilityEndTimestamp = new Date(availabilityEnd).getTime();

    // Call the mutation
    await setSitterProfile({
      availabilityStart: availabilityStartTimestamp,
      availabilityEnd: availabilityEndTimestamp,
      experience,
      skills,
      notes,
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pastelBlue">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Availability Start</label>
          <input
            type="date"
            value={availabilityStart}
            onChange={(e) => setAvailabilityStart(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Availability End</label>
          <input
            type="date"
            value={availabilityEnd}
            onChange={(e) => setAvailabilityEnd(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Experience</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:border-primary"
            placeholder="Enter your experience"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Skills</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:border-primary"
            placeholder="Enter your skills"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:border-primary"
            placeholder="Additional notes"
          />
        </div>

        <button type="submit" className="bg-primary text-white p-2 rounded hover:bg-pastelBlueHover">
          Submit
        </button>
      </form>
    </div>
  );
}
