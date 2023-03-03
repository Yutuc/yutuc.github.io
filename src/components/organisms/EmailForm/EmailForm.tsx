import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export interface AppHeaderProps {
  navAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function EmailForm({}: AppHeaderProps) {
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h9uucqh",
        "template_l4xnzet",
        e.target,
        "OimTczru9G2EkVsPb"
      )
      .then(
        async (result) => {
          setSent(true);
          setFailed(false);
          await timeout(4000);
          setSent(false);
          console.log(result.text);
        },
        async (error) => {
          setSent(false);
          setFailed(true);
          await timeout(4000);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="columns-1 pl-36 pr-36">
      <div className="flex justify-center pb-1">
        <h1 className="text-secondaryBlue font-bold  md:text-4xl sm:text-3xl xs: text-2xl">
          Connect with us
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="md:text-2xl sm:text-xl">(204)-880-1009</h1>
      </div>
      <div className="flex justify-center pb-5">
        <h1 className="md:text-2xl sm:text-xl">health101services@gmail.com</h1>
      </div>
      <form onSubmit={sendEmail}>
        <input
          className="w-full h-50 pb-5 pl-1 mb-3 text-black font-bold border-2 border-black"
          type="text"
          placeholder="Full Name"
          name="name"
          required
        />
        <input
          className="w-full h-50 pb-5 pl-1 mb-3 font-bold border-2 border-black"
          type="email"
          placeholder="Email Address"
          name="email_address"
          required
        />
        <input
          className="w-full h-50 pb-5 pl-1 mb-3 font-bold border-2 border-black"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          className="w-full pb-36 pl-1 mb-3 font-bold border-2 border-black"
          placeholder="Message"
          name="message"
          required
        ></textarea>
        <div className="flex justify-between h-12">
          <button
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-secondaryBlue hover:bg-secondaryGreen rounded-3xl md:w-44 sm: w-32 text-white font-bold md:text-2xl sm:text-lg p-2"
            type="submit"
          >
            Send
          </button>
          <div className="flex">
            <h1
              className={
                sent && !failed
                  ? "transition-opacity duration-1000 ease-in-out text-secondaryBlue font-bold md:text-2xl sm:text-lg py-2 pl-5"
                  : "transition-opacity duration-1000 ease-in-out opacity-0 text-secondaryBlue font-bold md:text-2xl sm:text-lg p-2"
              }
            >
              {sent && !failed
                ? "Thank you for your email. We will get back to you as soon as we can!"
                : "Something went wrong while sending the email. Please try again"}
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
}
