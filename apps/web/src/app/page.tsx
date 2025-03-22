"use client";

import Header from "@/components/home/Header";


export default function Home() {
  return (
    <main className="bg-primary-500 min-h-screen">
      <Header />
      <section className="relative px-6 py-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-40">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary-900 leading-tight">
            PawPals – Connecting Pet Owners with Trusted Pet Sitters 🐾
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-secondary-900">
            Find the Perfect Care for Your Furry Friend
          </h2>
          <p className="mt-4 text-lg text-secondary-900">
            Leaving town? Need a reliable sitter? PawPals makes it easy to find trusted pet sitters 
            who will treat your pets like family. Whether you need a quick walk, overnight care, 
            or long-term pet sitting, we’ve got you covered!
          </p>

          <h2 className="mt-10 text-2xl font-bold text-secondary-900">
            Are You a Pet Sitter?
          </h2>
          <p className="mt-4 text-lg text-secondary-900">
            Turn your passion for animals into a flexible, rewarding job! PawPals connects you with 
            pet owners in your area looking for loving, responsible caregivers. Build your reputation, 
            and grow your pet-sitting business—all in one place.
          </p>
        </div>

        {/* Right Image */}
        <img
          src="./pawpals-images/dog.png" 
          alt="Cute Dog"
          className="w-64 lg:w-96 mt-0 lg:mt-0"
        />
      </section>
    </main>
  );
}
