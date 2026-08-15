import Link from "next/link";
import ManagePreferencesButton from "@/components/banner/ManagePreferencesButton";
import LegalPageLayout from "./LegalPageLayout";
import PolicySection from "./PolicySection";

export default function CookiePolicyContent() {
  return (
    <LegalPageLayout
      eyebrow="Informativa cookie"
      title="Cookie e contenuti esterni"
      intro="Questa pagina descrive gli strumenti utilizzati dal sito per ricordare le preferenze dell'utente e gestire i contenuti forniti da servizi esterni."
    >
      <PolicySection title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che un sito può salvare nel
          browser per permettere il funzionamento di determinate funzioni o
          ricordare le scelte effettuate dall&apos;utente.
        </p>
      </PolicySection>

      <PolicySection title="2. Cookie tecnico di preferenza">
        <p>Il sito utilizza il seguente cookie tecnico:</p>
        <div className="overflow-x-auto">
          <table className="mt-3 w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border p-3">Nome</th>
                <th className="border p-3">Finalità</th>
                <th className="border p-3">Durata</th>
                <th className="border p-3">Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">
                  olo_external_content_consent_v1
                </td>
                <td className="border p-3">
                  Ricorda l&apos;accettazione o il rifiuto dei contenuti
                  esterni.
                </td>
                <td className="border p-3">180 giorni</td>
                <td className="border p-3">Tecnico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PolicySection>

      <PolicySection title="3. Contenuti esterni">
        <p>
          Se l&apos;utente seleziona “Accetta tutti”, il sito può caricare la
          mappa interattiva di Google Maps. Il caricamento stabilisce una
          connessione con Google, che può trattare dati tecnici e utilizzare
          cookie o tecnologie analoghe secondo la propria informativa.
        </p>
        <p>
          Fornitore: Google Ireland Limited. Consulta la {" "}
          <a
            className="underline"
            href="https://policies.google.com/privacy?hl=it"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy di Google
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection title="4. Rifiuto dei contenuti non necessari">
        <p>
          Se l&apos;utente rifiuta, Google Maps non viene caricato e il sito
          mostra un contenuto locale sostitutivo. Le funzionalità essenziali
          del sito e il modulo di contatto restano disponibili.
        </p>
      </PolicySection>

      <PolicySection title="5. Modifica o revoca della scelta">
        <p>
          La preferenza può essere modificata in qualsiasi momento tramite il
          comando seguente o attraverso il link presente nel footer.
        </p>
        <div className="mt-4 inline-flex rounded-full border-2 px-5 py-3">
          <ManagePreferencesButton />
        </div>
      </PolicySection>

      <PolicySection title="6. Gestione dal browser">
        <p>
          È possibile eliminare o bloccare i cookie anche dalle impostazioni
          del browser. Eliminando il cookie di preferenza, il banner verrà
          mostrato nuovamente alla visita successiva.
        </p>
      </PolicySection>

      <PolicySection title="7. Ulteriori informazioni">
        <p>
          Per informazioni sul trattamento dei dati personali consulta la {" "}
          <Link className="underline" href="/privacy">
            Privacy Policy
          </Link>
          .
        </p>
        <p>Ultimo aggiornamento: 15 agosto 2026.</p>
      </PolicySection>
    </LegalPageLayout>
  );
}
