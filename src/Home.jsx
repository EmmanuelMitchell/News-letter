import React, { useState } from "react";
import mobile from "../src/assets/images/illustration-sign-up-mobile.svg";
import desktop from "../src/assets/images/illustration-sign-up-desktop.svg";
import icon from "../src/assets/images/icon-list.svg";
import Success from "./component/Success";
import { Formik, useFormik } from "formik";

export default function Home() {
  const [success, setSuccess] = useState(false);

  // Validation

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "valid email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      // console.log("Form Submitted Successfully");
      setSuccess(true);
    },
  });
  return (
    <>
      {!success && (
        <div className="h-screen md:bg-slate-700  md:flex flex-col items-center">
          <main className="w-full bg-white h-screen md:w-[760px] md:my-4 rounded-md  md:flex flex-row-reverse">
            <div className="block w-full  md:hidden">
              <img
                src={mobile}
                alt="mobile"
                className=""
                width={768}
                height={300}
              />
            </div>

            {/* Desktop Version */}

            <div className=" hidden md:block md: flex-1 px-4 py-4 ">
              <img
                src={desktop}
                alt="mobile"
                className="md:h-98"
                width={768}
                height={300}
              />
            </div>

            <div className="mx-6 md:flex-1 md: flex flex-col justify-center">
              <h1 className="text-slate-700 text-3xl font-bold mt-3 pt-4">
                Stay updated!
              </h1>
              <p className="py-2">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="pt-8">
                <li className="flex items-start gap-4">
                  <img src={icon} alt="icons" />
                  <p>Product discovery and building what matters</p>
                </li>

                <li className="flex items-start gap-4 pt-3">
                  <img src={icon} alt="icons" />
                  <p>Measuring to ensure updates are a success</p>
                </li>

                <li className="flex items-start gap-4 pt-3">
                  <img src={icon} alt="icons" />
                  <p>And much more!</p>
                </li>
              </ul>

              <div className="mt-8">
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                  <article className="flex justify-between">
                    <label className="font-bold text-slate-900" htmlFor="email">
                      Email address
                    </label>
                    {formik.errors.email ? (
                      <p className="text-red-500 font-bold">
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </article>
                  <input
                    className={`w-full outline-none border-2 border-slate-900 p-3 rounded-md my-4 ${
                      formik.errors.email &&
                      "bg-red-200 border-2 border-red-500"
                    }`}
                    type="text"
                    placeholder="email@company.com"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />

                  <button
                    onClick={formik.handleSubmit}
                    type="submit"
                    className="btn-sub md:mt-6 hover:bg-gradient-to-r from-pink-600 to-orange-600"
                  >
                    Subscribe to monthily newsletter
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      )}
      {success && (
        <Success email={formik.values.email} setSuccess={setSuccess} />
      )}
    </>
  );
}
