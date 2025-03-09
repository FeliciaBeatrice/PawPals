"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import Header from "@/components/sitter/Header";
import { api } from "@packages/backend/convex/_generated/api";

export default function SitterProfilePage() {
    const sitterProfile = useQuery(api.queries.getUserProfile.getSitterProfile);
    const setSitterProfile = useMutation(api.mutations.setUserProfile.setSitterProfile);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        displayPicture: "",
        location: "",
        availabilityStart: "",
        availabilityEnd: "",
        experience: "",
        skills: "",
        notes: "",
    });

    useEffect(() => {
        if (sitterProfile && sitterProfile[0]) {
            setFormData({
                name: sitterProfile[0].name || "",
                displayPicture: sitterProfile[0].displayPicture || "",
                location: sitterProfile[0].location || "",
                availabilityStart: sitterProfile[0].availabilityStart ? new Date(sitterProfile[0].availabilityStart).toISOString().split('T')[0] : "",
                availabilityEnd: sitterProfile[0].availabilityEnd ? new Date(sitterProfile[0].availabilityEnd).toISOString().split('T')[0] : "",
                experience: sitterProfile[0].experience || "",
                skills: sitterProfile[0].skills || "",
                notes: sitterProfile[0].notes || "",
            });
        }
    }, [sitterProfile]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, displayPicture: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await setSitterProfile({
            ...formData,
            availabilityStart: new Date(formData.availabilityStart).getTime(),
            availabilityEnd: new Date(formData.availabilityEnd).getTime()
        });
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pastelBlue to-pastelPink flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl text-white mb-6">My Profile</h1>
                <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
                    {isEditing ? (
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="mb-2 p-2 border rounded"
                            />
                            <input
                                type="file"
                                name="displayPicture"
                                onChange={handleFileChange}
                                className="mb-2 p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="Location"
                                className="mb-2 p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                placeholder="Experience"
                                className="mb-2 p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="skills"
                                value={formData.skills}
                                onChange={handleInputChange}
                                placeholder="Skills"
                                className="mb-2 p-2 border rounded"
                            />
                            <input
                                type="date"
                                name="availabilityStart"
                                value={formData.availabilityStart}
                                onChange={handleInputChange}
                                className="mb-2 p-2 border rounded"
                            />
                            <input
                                type="date"
                                name="availabilityEnd"
                                value={formData.availabilityEnd}
                                onChange={handleInputChange}
                                className="mb-2 p-2 border rounded"
                            />
                            <button type="submit" className="bg-primary text-white p-2 rounded mb-2 shadow-lg">Save</button>
                        </form>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
                <button onClick={() => setIsEditing(!isEditing)} className="mt-4 bg-secondary text-white p-2 rounded">
                    {isEditing ? "Cancel" : "Edit"}
                </button>
            </main>
        </div>
    );
}
