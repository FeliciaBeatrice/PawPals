"use client";

import Rectangle from "@/components/common/Rectangle";
import { useAuth } from "@clerk/clerk-react";
import { api } from "@packages/backend/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SitterOnboardingPage() {
  const { isSignedIn } = useAuth();

  const router = useRouter();

  const setSitterProfile = useMutation(api.mutations.users.setProfile.setSitterProfile);

  // Convert display picture file to Base64 string
  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    displayPicture: null,
    location: "",
    bio: ""
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.displayPicture || !formData.location) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear error message if everything is valid

    const displayPictureBase64String = await convertToBase64(formData.displayPicture);

    // Call mutation to set owner profile
    try {
      // await setSitterProfile({
      //   // TODO
      // });

      router.push("/sitter");
    } catch (error) {
      setError("Failed to submit the form. Please try again.");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <Rectangle className="w-[500px] h-[550px] flex flex-col justify-center items-center gap-6">
        <h1 className="text-secondary-900 font-montserrat font-extrabold text-2xl text-center">
          Pet Sitter Onboarding
        </h1>

        {error && <p className="text-red-500 font-montserrat font-semibold">{error}</p>}

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="w-full">
            <label className="block text-secondary-900 font-montserrat font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-white border border-secondary-700 text-secondary-900 rounded-lg focus:ring focus:ring-secondary-700 outline-none"
            />
          </div>

          {/* Display Picture Input */}
          <div className="w-full">
            <label className="block text-secondary-900 font-montserrat font-semibold">
              Display Picture
            </label>
            <input
              type="file"
              name="displayPicture"
              accept="image/*"
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-white border border-secondary-700 rounded-lg focus:ring focus:ring-secondary-400 outline-none"
            />
          </div>

          {/* Location Input */}
          {/* TODO: add some sort of maps feature */}
          <div className="w-full">
            <label className="block text-secondary-900 font-montserrat font-semibold">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-white border border-secondary-700 text-secondary-900 rounded-lg focus:ring focus:ring-secondary-700 outline-none"
            />
          </div>

          {/* Bio Input */}
          <div className="w-full">
            <label className="block text-secondary-900 font-montserrat font-semibold">
              Share something about you!
            </label>
            <input
              type="text"
              name="bio"
              placeholder="Enter your bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-white border border-secondary-700 text-secondary-900 rounded-lg focus:ring focus:ring-secondary-700 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-secondary-900 text-white font-bold py-2 rounded-lg hover:bg-secondary-500"
          >
            Submit
          </button>
        </form>
      </Rectangle>
    </main>
  );
}
