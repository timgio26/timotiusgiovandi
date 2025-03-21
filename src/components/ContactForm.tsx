"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

// const templateParams = {
//   name: "James",
//   email: "james@gmail.com",
//   message: "Check this out!",
// };

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export const ContactUs = () => {
  //   const form = useRef<HTMLFormElement|string>("");
  const [contactForm, setContactForm] = useState<ContactForm>({name:"",email:"",message:""});

  function handleChange(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
    const { name } = e.target
    setContactForm((state)=>({...state, [name]:e.target.value}))
  }

  const sendEmail = (e: FormEvent) => {
    console.log(process.env.EMAIL_KEY);
    e.preventDefault();
    if(!process.env.TEMPLATE_ID)return
    emailjs
      .send("service_uaus1nu", process.env.TEMPLATE_ID, contactForm, {
        publicKey: process.env.EMAIL_KEY,
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col w-full sm:w-1/2 gap-1" id="contact_mes">
      <label className="text-sm font-light">Name</label>
      <input
        type="text"
        name="name"
        className="border-b focus:ring-0 outline-0"
        value={contactForm?.name}
        onChange={handleChange}
        required
      />
      <label className="text-sm font-light">Email</label>
      <input
        type="email"
        name="email"
        className="border-b focus:ring-0 outline-0"
        value={contactForm?.email}
        onChange={handleChange}
        required
      />
      <label className="text-sm font-light">Message</label>
      <textarea
        name="message"
        className="border focus:ring-0 outline-0 h-20"
        value={contactForm?.message}
        onChange={handleChange}
        required
      />
      <div className="flex justify-end">
        <input
          type="submit"
          value="Send"
          className="rounded-full px-5 py-1 hover:opacity-50 transition-opacity bg-gray-900 dark:bg-amber-900 text-gray-50 cursor-pointer"
        />
      </div>
    </form>
  );
};
