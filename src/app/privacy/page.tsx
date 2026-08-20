import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import PolicySection from "@/components/legal/PolicySection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali del sito Oltre l'Ostacolo.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Informativa privacy"
      title="Trattamento dei dati personali"
      intro="Questa informativa descrive come Oltre l'Ostacolo tratta i dati personali raccolti attraverso il sito e il modulo di contatto."
    >
        <PolicySection title="1. Titolare del trattamento">
          <p>Oltre l&apos;Ostacolo</p>
          <p>Via Generale Giuseppe Arimondi 107, Palermo</p>
          <p>
            Email: {" "}
            <a className="underline" href="mailto:info@oltrelostacoloagenzia.it">
              info@oltrelostacoloagenzia.it
            </a>
          </p>
          <p>Telefono: +39 388 478 8576</p>
        </PolicySection>

        <PolicySection title="2. Dati trattati">
          <p>
            Attraverso il modulo possono essere raccolti nome, cognome,
            indirizzo email, numero di telefono facoltativo e contenuto del
            messaggio. Durante il normale funzionamento tecnico possono inoltre
            essere trattati dati di connessione, come indirizzo IP, data e ora
            della richiesta e informazioni necessarie alla sicurezza del
            servizio.
          </p>
        </PolicySection>

        <PolicySection title="3. Finalità e base giuridica">
          <p>
            I dati del modulo sono utilizzati per verificare l&apos;indirizzo
            email, rispondere alla richiesta dell&apos;interessato e adottare
            eventuali misure precontrattuali richieste dallo stesso. I dati
            tecnici possono essere trattati per garantire sicurezza,
            disponibilità e prevenzione degli abusi.
          </p>
        </PolicySection>

        <PolicySection title="4. Conferimento dei dati">
          <p>
            Nome, cognome, email e messaggio sono necessari per inviare la
            richiesta. Il numero di telefono è facoltativo. Il mancato
            conferimento dei dati obbligatori impedisce l&apos;invio del modulo.
          </p>
        </PolicySection>

        <PolicySection title="5. Conferma dell’indirizzo email">
          <p>
            Dopo l&apos;invio del modulo viene trasmessa un&apos;email contenente
            un collegamento di conferma valido per 15 minuti. Prima della
            conferma, i dati restano temporaneamente memorizzati e vengono
            eliminati automaticamente in caso di scadenza. Dopo la conferma, il
            messaggio viene inoltrato all&apos;agenzia e rimosso dal database
            temporaneo.
          </p>
        </PolicySection>

        <PolicySection title="6. Fornitori e destinatari">
          <p>
            Per il funzionamento del servizio possono essere utilizzati
            fornitori tecnici che agiscono secondo i rispettivi ruoli e
            condizioni contrattuali, tra cui Render per l&apos;esecuzione del
            backend, MongoDB Atlas per la memorizzazione temporanea e Brevo per
            l&apos;invio delle email. I dati non vengono venduti.
          </p>
        </PolicySection>

        <PolicySection title="7. Conservazione">
          <p>
            Le richieste non confermate vengono eliminate automaticamente dopo
            15 minuti. Le comunicazioni confermate possono essere conservate
            nella casella email dell&apos;agenzia per il tempo necessario a
            gestire la richiesta e per eventuali obblighi di legge.
          </p>
        </PolicySection>

        <PolicySection title="8. Contenuti esterni">
          <p>
            Google Maps viene caricato soltanto dopo l&apos;accettazione dei
            contenuti esterni. In assenza di consenso il sito mostra un
            contenuto sostitutivo locale. Ulteriori informazioni sono
            disponibili nella {" "}
            <Link className="underline" href="/cookie-policy">
              Cookie Policy
            </Link>
            .
          </p>
        </PolicySection>

        <PolicySection title="9. Diritti dell’interessato">
          <p>
            Nei casi previsti dalla normativa è possibile chiedere accesso,
            rettifica, cancellazione, limitazione, opposizione e portabilità dei
            dati, oltre a proporre reclamo all&apos;Autorità Garante per la
            protezione dei dati personali. Le richieste possono essere inviate
            a info@oltrelostacoloagenzia.it.
          </p>
        </PolicySection>

        <PolicySection title="10. Aggiornamenti">
          <p>Ultimo aggiornamento: 15 agosto 2026.</p>
        </PolicySection>
    </LegalPageLayout>
  );
}
