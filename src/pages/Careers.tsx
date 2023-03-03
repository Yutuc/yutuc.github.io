import React from "react";
import hero from "../assets/hero/careers-hero.jpg";
import Footer from "../components/organisms/Footer";
import { Transition } from "@headlessui/react";

export default function Careers() {
  return (
    <Transition
      as="div"
      appear={true}
      show={true}
      enter="transition-opacity duration-2000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-2000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="flex w-full-h-screen"
    >
      <div className="w-full h-screen">
        <div
          className="w-full h-4/6 bg-no-repeat bg-cover bg-center bg-center bg-fixed"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>
        <div className="flex justify-center">
          <h1 className="text-secondaryBlue font-bold md:text-4xl sm:text-3xl xs: text-2xl pt-10">
            Driving careers forward
          </h1>
        </div>
        <div className="flex">
          <h1 className="text-secondaryBlue font-bold md:text-3xl sm:text-2xl xs: text-xl pl-20 pr-10 pt-5">
            Serving Businesses & Job Seekers
          </h1>
        </div>
        <div className="flex">
          <h1 className="text-secondaryBlue font-bold md:text-2xl sm:text-xl xs: text-lg pl-20 pt-5">
            Work for us
          </h1>
        </div>
        <div className="flex">
          <p className=" text-xl pl-20 pr-20">
            Health 101 Services continuously searches for talented and skilled
            healthcare professionals. We're looking for experienced and licensed
            healthcare and homecare staff. If you are interested in pursuing a
            career of caring as part of a high quality, teamwork-oriented
            atmosphere. Please contact us.
          </p>
        </div>
        <div>
          <p className=" text-xl pl-20 p-5 pr-20">
            We're hiring for positions in Manitoba, Canada. For more
            information, or to apply for a position, please email your resume
            and diploma or certificate to admin@health101services.ca ​
          </p>
        </div>
        <div className="pl-20 pr-20 pb-10 text-xl">
          <ul className="list-disc list-inside ">
            <div className="flex sm:pb-5">
              <h2 className="text-secondaryBlue font-bold md:text-3xl sm:text-2xl xs: text-xl pt-5">
                Health 101 Services staff are:
              </h2>
            </div>
            <li>Selected for their knowledge and for their people skills.</li>
            <li>
              High level of professionalism and expertise in their respective
              fields.
            </li>
            <li>Screened and background references checked thoroughly.</li>
            <li>
              Undergo police criminal record check, child abuse registry check,
              and adult abuse registry check.
            </li>
          </ul>
        </div>
        <div className="pl-20 pr-20 pb-10 text-xl">
          <ul className="list-disc list-inside ">
            <div className="flex sm:pb-5">
              <h2 className="text-secondaryBlue font-bold md:text-3xl sm:text-2xl xs: text-xl">
                Some of the positions we're hiring include:
              </h2>
            </div>
            <li>Registered Nurse (RN)</li>
            <li>Licensed Practical Nurse (LPN)</li>
            <li>Health Care Aide</li>
            <li>Home Support Worker</li>
            <li>Homemaker</li>
            <li>Companion</li>
          </ul>
        </div>
        <Footer />
      </div>
    </Transition>
  );
}
