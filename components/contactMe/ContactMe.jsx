import React from "react";
import Divider from "../Divider";

export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
  };

  return (
    <section
      id="contactMe"
      className="text-center bg-secondary text-primary py-4"
    >
      <div>
        <h1 className=" text-4xl pt-5 font-semibold uppercase tracking-widest font-title">
          Contact Me
        </h1>

        <Divider bgColor="white" />

        <div className="neumorphism-shadow-form block rounded-lg p-6 bg-secondary mx-auto w-[90%] md:w-[70%] lg:w-[50%]">
          <form
            action="/send-data-here"
            className=" w-[90%] mx-auto"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="text-left my-3">
              <label
                htmlFor="name"
                className="text-primary text-md font-semibold"
              >
                Name:
              </label>
              <br />
              <input
                type="text"
                name="name"
                className="bg-secondary text-primary border-2 border-primary w-full p-1"
              />
            </div>
            <div className="text-left my-3">
              <label
                htmlFor="email"
                className="text-primary text-md font-semibold"
              >
                Email:
              </label>
              <br />
              <input
                type="email"
                id="last"
                name="email"
                className="bg-secondary color-primary border-2 border-primary w-full p-1"
              />
            </div>
            <div className="text-left my-3">
              <label
                htmlFor="message"
                className="text-primary text-md font-semibold"
              >
                Message:
              </label>
              <br />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="bg-secondary color-primary border-2 border-primary w-full p-1"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary w-full text-secondary p-3 rounded hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>

        {/* <div className="neumorphism-shadow-form block rounded-lg p-6 bg-secondary mx-auto w-[90%] md:w-[70%] lg:w-[50%]">
          <form>
            <div
              className="relative mb-6 text-primary"
              data-te-input-wrapper-init
            >
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 border-primary focus:border-secondary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-primary"
                id="exampleInput7"
                placeholder="Name"
              />
              <label
                htmlFor="exampleInput7"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-primary transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none font-semibold"
              >
                Name
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="text-primary peer block min-h-[auto] border-2 border-primary focus:border-secondary w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput8"
                placeholder="Email address"
              />
              <label
                htmlFor="exampleInput8"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-primary transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >
                Email address
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className=" text-primary peer block min-h-[auto] w-full rounded border-2 border-primary focus:border-secondary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea13"
                rows="6"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="exampleFormControlTextarea13"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-primary transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded bg-primary px-6 py-2.5  font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg text-md"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Send
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
}
