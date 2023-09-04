import React from "react";
import icon from "../assets/images/icon-list.svg";

export default function Success({ email, setSuccess }) {
  return (
    <div className="h-screen md:bg-slate-800 md:flex justify-center items-center">
      <section className="h-screen bg-white flex flex-col justify-around md:w-[500px] p-12  rounded-lg md:h-80">
        <div className="">
          <img src={icon} alt="icone" width={50} />
          <h1 className="text-slate-700 text-3xl font-bold my-2 p-4">
            Thanks For subscribing!
          </h1>

          <p>
            A confirmation email has been sent to
            <strong className="p-1 text-xl">{email}</strong> please open it and
            click the button inside to confirm your subscription
          </p>
        </div>

        <button
          onClick={() => setSuccess(false)}
          className="btn-sub md:mt-6 hover:bg-gradient-to-r from-pink-600 to-orange-600"
        >
          Dismiss message
        </button>
      </section>
    </div>
  );
}
