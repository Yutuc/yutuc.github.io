import React, { useState, useEffect } from "react";
import hero from "../assets/hero/home-hero.jpg";
import EmailForm from "../components/organisms/EmailForm";
import Footer from "../components/organisms/Footer";
import { Transition } from "@headlessui/react";

// interface Focus {
//   focus: number;
// }

export default function Home() {
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
          className="w-full h-4/6 bg-no-repeat bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>
        <div className="flex justify-center md:text-4xl sm:text-3xl xs: text-2xl">
          <h1 className="text-secondaryBlue font-bold pt-10">
            Welcome to Health 101 Services
          </h1>
        </div>
        <div className="pt-5 pl-20 pr-20 pb-5 text-xl">
          <ul className="list-disc ">
            <li>
              Health 101 Services has earned its reputation by building solid
              relationships with clients, staff and their families. Health 101
              provides basic healthcare for home and institutions in Winnipeg
              and nearby regional areas. We provide quality care by providing
              healthcare aides, registered nurses, licensed practical nurses,
              and home care support workers.
            </li>
            <li>
              Health 101 Services is established with the objective of providing
              home care with dignity, comfort, compassion, integrity and trust.
              At Health 101 Services, our aim is to provide the very best in
              health care service.
            </li>
            <li>
              We work closely with clients, their families, government and
              health care professionals.
            </li>
            <li>
              To learn more about our services, contact us so we can find
              specialized ways to provide care for your loved ones.
            </li>
          </ul>
        </div>
        <EmailForm />
        <Footer />
      </div>
    </Transition>
  );
}
