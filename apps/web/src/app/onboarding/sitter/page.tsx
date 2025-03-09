"use client";

import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from "@packages/backend/convex/_generated/api";

export default function SitterOnboardingPage() {
  const [name, setName] = useState('');
  const [displayPicture, setDisplayPicture] = useState<File | null>(null);
  const [location, setLocation] = useState('');
  const [availabilityStart, setAvailabilityStart] = useState('');
  const [availabilityEnd, setAvailabilityEnd] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [notes, setNotes] = useState('');

  const setSitterProfile = useMutation(api.mutations.setUserProfile.setSitterProfile);

  async function handleSubmit(event: any) {
    event.preventDefault();

    // TODO: make sure it won't be added if it's required and there is nothing inside
    const availabilityStartTimestamp = new Date(availabilityStart).getTime();
    const availabilityEndTimestamp = new Date(availabilityEnd).getTime();

    // convert display picture to base 64 string
    const displayPictureBase64 = displayPicture ? await toBase64(displayPicture) : undefined;

    await setSitterProfile({
      name,
      displayPicture: displayPictureBase64,
      location,
      availabilityStart: availabilityStartTimestamp,
      availabilityEnd: availabilityEndTimestamp,
      experience,
      skills,
      notes,
    });
  }

  function toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pastelBlue">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:border-primary"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Display Picture</label>
          <input
            type="file"
            onChange={(e) => setDisplayPicture(e.target.files ? e.target.files[0] : null)}
            className="mt-1 p-2 w-full border rounded focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:border-primary"
            placeholder="Enter your location"
          />
        </div>

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
