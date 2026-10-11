import LegalPageLayout from "./LegalPageLayout";
import PolicySection from "./PolicySection";

export default function Faq() {
  return (
    <LegalPageLayout
      eyebrow="FAQ"
      title="FAQ - Domande frequenti"
      intro="Questa pagina raccoglie le domande più frequenti relative al sito Oltre l'Ostacolo e ai servizi offerti."
    >
      <section className="mt-12" aria-labelledby="faq-social">
        <h2 id="faq-social" className="text-2xl font-bold md:text-3xl">
          Comunicazione e social
        </h2>
        <PolicySection headingLevel="h3" title="Cos’è una strategia di social media marketing?">
          <p>
            Una strategia di social media marketing è un piano pensato per
            comunicare sui social in modo chiaro, coerente e riconoscibile. Non
            riguarda solo la pubblicazione di post, ma definisce obiettivi,
            pubblico, tono di voce, format, contenuti e identità visiva del profilo.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Perché avere una strategia social è importante?">
          <p>
            Senza una strategia, i profili social rischiano di diventare semplici
            vetrine senza direzione. Una strategia social permette invece di
            costruire una presenza digitale riconoscibile, creare familiarità con
            il pubblico e trasformare i contenuti in uno strumento utile per far
            crescere il brand.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Che cos’è un piano editoriale social?">
          <p>
            Il piano editoriale è il calendario dei contenuti da pubblicare sui
            social. Definisce temi, rubriche, copy, format e frequenza di
            pubblicazione. Aiuta a comunicare con continuità, evitare contenuti
            improvvisati e mantenere il profilo sempre coerente con gli obiettivi
            del brand.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Il servizio è adatto anche a chi parte da zero?">
          <p>
            Sì. Una strategia social è utile sia per chi deve aprire o rilanciare
            i propri profili, sia per chi pubblica già contenuti ma non ottiene
            risultati chiari. Il percorso parte dall’analisi del business e dalla
            definizione di una direzione personalizzata.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Perché una buona identità social aiuta a fidelizzare la community?">
          <p>
            Un’identità social coerente aiuta le persone a riconoscere il brand,
            ricordarlo e percepirlo come più affidabile. Quando contenuti, tono e
            stile visivo seguono una direzione precisa, il pubblico capisce più
            facilmente chi sei e perché continuare a seguirti.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Come posso iniziare un progetto di social media marketing?">
          <p>
            Il primo passo è candidare la tua azienda o richiedere una consulenza.
            Da lì vengono analizzati obiettivi, pubblico, canali e necessità del
            brand, per costruire una proposta personalizzata e una strategia
            social realmente adatta al progetto.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Dopo quanto tempo si vedono i risultati?">
          <p>
            I primi miglioramenti si notano entro 1-3 mesi, ma i benefici più
            solidi si vedono nel medio-lungo periodo.
          </p>
          <p>Costruire una presenza riconoscibile richiede continuità.</p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Quanto contenuto producete ogni mese?">
          <p>
            Dipende dal pacchetto scelto: offriamo formule flessibili da 6 a 20
            contenuti mensili.
          </p>
        </PolicySection>

        <PolicySection headingLevel="h3" title="È possibile effettuare le riprese presso la mia sede?">
          <p>
            Sì, offriamo riprese on location in tutta la Sicilia, con team di
            produzione mobile per spot, interviste o ambientazioni specifiche.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Realizzate video verticali per Instagram Reels e TikTok?">
          <p>
            Certo! Ottimizziamo ogni contenuto per il formato, la durata e il
            linguaggio del canale. I video verticali sono uno dei nostri punti
            forti per engagement rapido e storytelling breve.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="È possibile realizzare più video da una singola giornata di riprese?">
          <p>
            Assolutamente sì. Durante una sessione possiamo raccogliere contenuti
            per più formati: spot principale, backstage, interviste, tagli brevi.
            Ottimizzare le riprese è parte della nostra strategia.
          </p>
        </PolicySection>
      </section>

      <section className="mt-12" aria-labelledby="faq-web">
        <h2 id="faq-web" className="text-2xl font-bold md:text-3xl">
          Sviluppo web
        </h2>
        <PolicySection headingLevel="h3" title="Quanto costa realizzare un sito web professionale?">
          <p>
            Il costo dipende dal numero di pagine, dalle funzionalità richieste e
            dal lavoro di progettazione e sviluppo. Dopo aver analizzato le
            esigenze della tua attività, prepariamo un preventivo su misura con le
            attività comprese, i tempi e i costi.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Quanto tempo serve per realizzare un sito web?">
          <p>
            Indicativamente, dai 10 ai 30 giorni lavorativi, in base alla
            complessità del progetto. Le tempistiche vengono concordate nel
            preventivo e dipendono anche dalla disponibilità di testi, immagini e
            approvazioni.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Perché scegliere Oltre l’Ostacolo per realizzare un sito web?">
          <p>
            Oltre l’Ostacolo realizza siti web personalizzati, sviluppati in
            codice in base alle esigenze dell’attività, senza affidarsi a template
            preconfezionati. Progettiamo siti responsive, veloci e scalabili,
            curando struttura, design, performance e ottimizzazione SEO di base e
            GEO.
          </p>
          <p>Seguiamo il cliente dalla progettazione alla pubblicazione.</p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Chi si occupa della manutenzione dopo la pubblicazione?">
          <p>
            Offriamo assistenza dopo il lancio e possiamo occuparci di
            manutenzione e aggiornamenti su richiesta. Gli interventi e le
            relative condizioni vengono concordati in base alle esigenze del sito.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Perché scegliere un sito personalizzato invece di un template?">
          <p>
            Un sito web personalizzato viene progettato e sviluppato in base alle
            esigenze specifiche dell&apos;azienda, offrendo maggiore flessibilità,
            scalabilità e controllo sulle funzionalità. A differenza delle
            soluzioni basate su template predefiniti, Oltre l&apos;Ostacolo realizza
            siti web con codice su misura, curando design, prestazioni ed
            esperienza utente per valorizzare l&apos;identità del brand.
          </p>
        </PolicySection>
        <PolicySection headingLevel="h3" title="Il sito sarà ottimizzato per Google e i motori di ricerca?">
          <p>
            Sì. Oltre l&apos;Ostacolo realizza siti web con un&apos;ottimizzazione SEO
            tecnica di base, curando la struttura delle pagine, i titoli, le meta
            description, la compatibilità con i dispositivi mobili e le
            prestazioni.
          </p>
          <p>
            L&apos;obiettivo è facilitare la scansione e la comprensione dei contenuti
            da parte dei motori di ricerca, creando una base solida per migliorare
            la visibilità online nel tempo.
          </p>
        </PolicySection>

        <PolicySection headingLevel="h3" title="Per migliorare la SEO è necessario modificare il sito?">
          <p>
            Può essere necessario intervenire su contenuti, struttura delle pagine
            o aspetti tecnici. Prima analizziamo il sito per individuare gli
            interventi utili: non sempre serve rifarlo da zero.
          </p>
        </PolicySection>
      </section>

      <section className="mt-12" aria-labelledby="faq-generali">
        <h2 id="faq-generali" className="text-2xl font-bold md:text-3xl">
          Informazioni generali
        </h2>
        <PolicySection headingLevel="h3" title="Quanto costa un vostro servizio?">
          <p>La risposta più antipatica è: dipende. Quella più corretta anche.</p>
          <p>
            Ogni attività ha esigenze, obiettivi e priorità diverse, quindi
            costruiamo una proposta su misura dopo aver capito di cosa hai
            realmente bisogno.
          </p>
        </PolicySection>
      </section>
    </LegalPageLayout>
  );
}
