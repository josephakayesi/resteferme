"use client";

import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  return (
    <section>
      <form className="bg-secondary sm:px-16 px-3 sm:py-12 py-4 my-16">
        <div className="space-y-12 sm:space-x-12 w-fit">
          <div className="border-dark/10 pb-12">
            <h2 className="text-dark font-bold sm:leading-7 sm:text-5xl text-3xl">
              {"Let's work together!"}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-dark"
                >
                  NAME
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-dark"
                >
                  EMAIL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-dark"
                >
                  MESSAGE
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={10}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            size="normal"
          />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            className="rounded-full  bg-primary py-2 px-3 space-x-1 text-sm font-normal cursor-pointer text-white  hover:bg-primary/80 m inline-flex items-center gap-5"
            type="submit"
          >
            {"Submit"}
            <Image
              src="arrow-right.svg"
              alt="an icon of a right arrow indicating the next step"
              width={40}
              height={12}
            />
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
