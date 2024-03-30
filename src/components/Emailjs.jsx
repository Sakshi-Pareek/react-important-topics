import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// npm install @emailjs/browser --save

export const Emailjs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vdrz1vb",
        "template_x9odzva",
        form.current,
        "LxkSzNiPE_r3ZsKnt"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("your form is sumbitted");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClick = () => {
    setTimeout(() => {
      form.current.reset();
    }, 3000);
  };
  return (
    <>
      <div className="bg-[black] py-10 my-5 px-40">
        <h2 className="py-5 text-center text-white font-bold text-5xl">
          Email JS
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-col pt-5 mx-auto pb-3 bg-[#5f9ea0] px-10"
        >
          <div className="mb-8 flex items-center gap-4">
            <label className="text-white text-3xl whitespace-nowrap">
              First Name:{" "}
            </label>
            <input
              type="text"
              name="fname"
              className="border-2 capitalize w-full"
              required
            />
          </div>
          <div className="mb-8 flex items-center gap-4">
            <label className="text-white text-3xl whitespace-nowrap">
              Last Name:{" "}
            </label>
            <input
              type="text"
              name="lname"
              className="border-2 capitalize w-full"
              required
            />
          </div>
          <div className="mb-8 flex items-center gap-4">
            <label className="text-white text-3xl whitespace-nowrap">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              className="border-2 w-full"
              required
            />
          </div>
          <div className="mb-8 flex items-center gap-4">
            <label className="text-white text-3xl whitespace-nowrap">
              Mobile:{" "}
            </label>
            <input
              type="number"
              name="mobile"
              className="border-2 w-full"
              required
            />
          </div>
          <div className="mb-8">
            <label className="text-white text-3xl whitespace-nowrap">
              Passward:{" "}
            </label>
            <input
              type="password"
              name="password"
              className="border-2 w-[89%]"
              required
            />
          </div>
          <div className="mb-8">
            <label className="text-white text-3xl whitespace-nowrap">
              Message:{" "}
            </label>
            <textarea name="message" className="border-2 w-[89%]" required />
          </div>
          <div className="text-center cursor-pointer">
            <input
              type="submit"
              value="Send"
              onClick={handleClick}
              className="cursor-pointer py-2 px-6 rounded-[50px] bg-white "
            />
          </div>
        </form>
      </div>
    </>
  );
};
