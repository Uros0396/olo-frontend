import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(2, "Inserisci il tuo nome."),
  lastName: z.string().trim().min(2, "Inserisci il tuo cognome."),
  email: z.email("Inserisci un indirizzo email valido."),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || /^[+0-9 ()-]{6,}$/.test(value),
      "Inserisci un numero di telefono valido.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Raccontaci qualcosa in piu' del tuo progetto."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
