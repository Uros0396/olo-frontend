"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { THEME_COLORS } from "@/constants/colors";
import {
  contactFormSchema,
  type ContactFormValues,
} from "./contactForm.schema";

const fieldClassName =
  "mt-2 w-full rounded-2xl border px-4 py-3 outline-none transition focus:ring-2";

type ContactFormProps = {
  buttonLabel?: string;
  buttonClassName?: string;
};

export default function ContactForm({
  buttonLabel = "Parlaci del tuo ostacolo",
  buttonClassName = "",
}: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function closeForm() {
    setIsOpen(false);
    setIsSubmitted(false);
    reset();
  }

  async function onSubmit(values: ContactFormValues) {
    // Il backend non e' ancora disponibile: qui collegheremo fetch al suo endpoint.
    void values;
    setIsSubmitted(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`mt-8 rounded-full px-7 py-4 text-base font-bold transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 ${buttonClassName}`}
        style={{
          backgroundColor: THEME_COLORS.dark,
          color: THEME_COLORS.background,
          outlineColor: THEME_COLORS.dark,
        }}
      >
        {buttonLabel}
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 py-8">
          <button
            type="button"
            className="absolute inset-0 opacity-80"
            style={{ backgroundColor: THEME_COLORS.primary }}
            onClick={closeForm}
            aria-label="Chiudi il form"
          />
          <div
            className="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-3xl p-6 md:p-10"
            style={{ backgroundColor: THEME_COLORS.background }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
          >
            <button
              type="button"
              onClick={closeForm}
              className="absolute right-5 top-5 rounded-full p-2 transition-transform hover:scale-110 focus-visible:outline-2"
              style={{
                color: THEME_COLORS.dark,
                outlineColor: THEME_COLORS.dark,
              }}
              aria-label="Chiudi il form"
            >
              <X aria-hidden="true" />
            </button>

            <div className="mx-auto max-w-2xl">
              {isSubmitted ? (
              <div className="py-12 text-center">
                <h3 id="contact-form-title" className="text-3xl font-bold">
                  Grazie per averci raccontato il tuo ostacolo.
                </h3>
                <p className="mt-4 text-lg leading-7">
                  Il sistema di invio verra&apos; collegato non appena il
                  backend sara&apos; disponibile.
                </p>
                <button
                  type="button"
                  onClick={closeForm}
                  className="mt-8 rounded-full px-6 py-3 font-bold"
                  style={{
                    backgroundColor: THEME_COLORS.secondary,
                    color: THEME_COLORS.dark,
                  }}
                >
                  Chiudi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h3
                  id="contact-form-title"
                  className="pr-10 text-3xl font-bold"
                >
                  Parlaci del tuo ostacolo
                </h3>
                <p className="mt-3 text-lg leading-7">
                  Raccontaci di te e del tuo progetto: ti risponderemo appena
                  possibile.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <Field label="Nome" error={errors.firstName?.message}>
                    <input
                      {...register("firstName")}
                      autoComplete="given-name"
                      className={fieldClassName}
                      style={inputStyle}
                    />
                  </Field>
                  <Field label="Cognome" error={errors.lastName?.message}>
                    <input
                      {...register("lastName")}
                      autoComplete="family-name"
                      className={fieldClassName}
                      style={inputStyle}
                    />
                  </Field>
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      className={fieldClassName}
                      style={inputStyle}
                    />
                  </Field>
                  <Field label="Telefono*" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      type="tel"
                      autoComplete="tel"
                      className={fieldClassName}
                      style={inputStyle}
                    />
                  </Field>
                </div>
                <div className="mt-5">
                  <Field
                    label="Il tuo messaggio"
                    error={errors.message?.message}
                  >
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={fieldClassName}
                      style={inputStyle}
                    />
                  </Field>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 rounded-full px-7 py-4 font-bold disabled:cursor-not-allowed disabled:opacity-60"
                  style={{
                    backgroundColor: THEME_COLORS.secondary,
                    color: THEME_COLORS.dark,
                  }}
                >
                  {isSubmitting ? "Invio in corso..." : "Invia"}
                </button>
              </form>
              )}
            </div>
          </div>
          </div>,
          document.body,
        )
        : null}
    </>
  );
}

const inputStyle = {
  borderColor: THEME_COLORS.dark,
  backgroundColor: THEME_COLORS.background,
  color: THEME_COLORS.dark,
  "--tw-ring-color": THEME_COLORS.secondary,
} as React.CSSProperties;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-bold">
      {label}
      {children}
      {error ? (
        <span
          className="mt-2 block text-sm"
          style={{ color: THEME_COLORS.primary }}
        >
          {error}
        </span>
      ) : null}
    </label>
  );
}
