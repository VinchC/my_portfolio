'use client';

import { Section } from "./utils/Section";
import { Card } from "@/components/ui/card";
import LanguageContext from "../contexts/LanguageContext";
import { useContext } from "react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const language = useContext(LanguageContext);

  async function handleSubmit(e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) {
    e.preventDefault();
    const data: any = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Thanks for contacting us, we will get back to you soon!');
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <>
    <Section className="section">
      <Card className="card">
        <form onSubmit={handleSubmit} id="contact">
          <div className="mb-4">
            <label
              aria-labelledby="name"
              htmlFor="name"
              className="mb-3 text-background"
            >
              {language === "English" ? "Full Name" : "Nom et prénom"}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={
                language === "English" ? "Full Name" : "Nom et prénom"
              }
              className="inputForm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              aria-labelledby="email"
              htmlFor="email"
              className="mb-3 text-background"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              className="inputForm"
              required
            />
          </div>
          <div className="mb-5">
            <label
              aria-labelledby="your message"
              htmlFor="message"
              className="mb-3 text-background"
            >
              Message
            </label>
            <textarea
            id="message"
              rows={4}
              name="message"
              placeholder={
                language === "English"
                  ? "Type your message"
                  : "Ecrivez votre message"
              }
              className="inputForm resize-none"
              required
            ></textarea>
          </div>
          <div>
            <button className="buttonLarge">
              {language === "English" ? "Submit" : "Envoyer"}
            </button>
          </div>
        </form>
      </Card>
    </Section>
    </>
  );
};
