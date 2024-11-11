'use client';

import { useForm } from "react-hook-form";
import { Section } from "./utils/Section";
import { Card } from "@/components/ui/card";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const language = useContext(LanguageContext);

  const { register, handleSubmit } = useForm<FormData>();

  function sendEmail(data: FormData) {
    // TODO: send email
    console.log(data);
  }
  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <Section className="section">
      <Card className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              aria-labelledby="name"
              htmlFor="name"
              className="mb-3 text-background"
            >
              {language === "English" ? "Full Name" : "Nom et prénom"}
            </label>
            <input
              type="text"
              placeholder={
                language === "English" ? "Full Name" : "Nom et prénom"
              }
              className="inputForm"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              aria-labelledby="email"
              htmlFor="email"
              className="mb-3 text-background"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="inputForm"
              {...register("email", { required: true })}
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
              rows={4}
              placeholder={
                language === "English"
                  ? "Type your message"
                  : "Ecrivez votre message"
              }
              className="inputForm resize-none"
              {...register("message", { required: true })}
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
  );
};
