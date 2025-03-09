import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg_image">
      <div className="container py-16 sm:py-36 px-6 sm:px-0">
        <div className="flex sm:flex-nowrap flex-wrap justify-between items-center max-h-[690px] h-full">
          <div className="">
            <h2 className="font-montserrat pb-7 sm:pb-[26px] text-black text-[44px] sm:text-[75px] not-italic font-medium leading-[111.3%] tracking-[-1.1px] sm:tracking-[-1.875px]">
              The Ultimate <br /> Pet Care Experience
            </h2>
            <p className="font-montserrat sm:pb-16 max-w-[680px] text-black text-xl sm:text-3xl not-italic font-normal leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px] pb-11">
              Connect with trusted pet sitters and ensure your furry friends are well cared for.
            </p>
            <Link href={"/onboarding"}>
              <button className="button gap-2.5 px-8 py-4 font-montserrat text-white text-xl sm:text-3xl not-italic font-semibold leading-[90.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
