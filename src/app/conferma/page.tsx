import Link from "next/link";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { THEME_COLORS } from "@/constants/colors";

type ConfirmationPageProps = {
  searchParams: Promise<{ status?: string | string[] }>;
};

export default async function ConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const params = await searchParams;
  const status = Array.isArray(params.status) ? params.status[0] : params.status;
  const success = status === "success";

  const message = success
    ? "Il tuo indirizzo email è stato confermato e il messaggio è stato inviato correttamente."
    : status === "invalid-token"
      ? "Il link di conferma non è valido, è già stato utilizzato oppure è scaduto."
      : status === "missing-token"
        ? "Il link di conferma è incompleto."
        : "Non è stato possibile confermare il messaggio. Riprova dal form.";

  return (
    <section
      className="flex min-h-[70vh] items-center justify-center px-6 py-20"
      style={{ backgroundColor: THEME_COLORS.secondary }}
    >
      <div
        className="w-full max-w-xl rounded-3xl p-8 text-center shadow-xl md:p-12"
        style={{ backgroundColor: THEME_COLORS.background }}
      >
        {success ? (
          <CheckCircle2
            className="mx-auto size-16"
            style={{ color: THEME_COLORS.dark }}
            aria-hidden="true"
          />
        ) : (
          <CircleAlert
            className="mx-auto size-16"
            style={{ color: THEME_COLORS.primary }}
            aria-hidden="true"
          />
        )}
        <h1 className="mt-6 text-3xl font-bold">
          {success ? "Email confermata" : "Conferma non riuscita"}
        </h1>
        <p className="mt-4 text-lg leading-7">{message}</p>
        <Link
          href="/#contattaci"
          className="mt-8 inline-block rounded-full px-7 py-4 font-bold"
          style={{
            backgroundColor: THEME_COLORS.dark,
            color: THEME_COLORS.background,
          }}
        >
          Torna al sito
        </Link>
      </div>
    </section>
  );
}
