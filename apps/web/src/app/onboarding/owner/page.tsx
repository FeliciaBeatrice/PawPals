"use client";

import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from "@packages/backend/convex/_generated/api";

export default function OwnerOnboardingPage() {
  const [name, setName] = useState('');
  const [displayPicture, setDisplayPicture] = useState<File | null>(null);
  const [location, setLocation] = useState('');

  const setOwnerProfile = useMutation(api.mutations.setUserProfile.setOwnerProfile);

  async function handleSubmit(event: any) {
    event.preventDefault();

    // convert display picture to base 64 string
    const displayPictureBase64 = displayPicture ? await toBase64(displayPicture) : undefined;

    await setOwnerProfile({
      name,
      displayPicture: displayPictureBase64,
      location,
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

        <button type="submit" className="bg-primary text-white p-2 rounded hover:bg-pastelBlueHover">
          Submit
        </button>
      </form>
    </div>
  );
}
