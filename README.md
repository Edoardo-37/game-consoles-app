# Sito web sulle console videoludiche - 'ConsoleVault'

Questo è un sito web creato con `React e il framework Vite come compiler`. Inoltre, per evitare il problema dello scope globale CSS e applicare stili ai componenti e ai tag JSX individualmente, ho utilizzato il **framework CSS Tailwind con DaisyUi come plugin**. Il file `index.css` contiene stili generali che impediscono un'eccessiva ripetizione delle regole di Tailwind.

---

## Tecnologie e librerie utilizzate:

- **[React](https://reactjs.org/)** - Libreria per lo sviluppo dell'interfaccia utente.

- **[Vite](https://vitejs.dev/)** - Bundler veloce per sviluppo e build.

- **[Tailwind](https://tailwindcss.com/)** - Framework CSS.

- **[React Router](https://reactrouter.com/home)** - Dipendenza per il routing in una SPA.

- **[DaisyUI](https://daisyui.com/)** - Libreria di componenti dell'interfaccia utente basata su Tailwind.

---

**Struttura del progetto**:

- `./docs`: cartella con tutte le immagini del sito e gli screenshots di codice per il README.
- `./public`: cartella con il favicon.
- `./src/assets`: cartella con tutte le immagini dell'app.
- `./src/components`: cartella con tutti componenti dell'app.
- `./src/constants`: cartella con tutti gli array di oggetti utilizzati per mappare i componenti.
- `./src/pages`: cartella con tutte le pagine del sito.

<br />

![Immagine della struttura del progetto](docs/struttura-progetto.png)

---

### Come avviare il progetto in locale

1. Assicurati di aver installato Node.js.
2. Apri il terminale:

```bash
git clone https://github.com/Edoardo-37/game-consoles-app
cd game-consoles-app (nome repository)
npm install (Per installare la cartella `node_modules`)
npm run dev
Apri il browser su http://localhost:5173
```

3. Per testare il sito sul tuo dispositivo mobile, vai al file `package.json` > oggetto `scripts` > chiave `dev` e digita `dev --host`, quindi riavvia il server con `npm run dev` e copia l'indirizzo mostrato.
4. Per arrestare il server, premi `CTRL + C`.

---

### Pagine principali del sito

1. **Pagina principale** con un'introduzione alla storia dell'industria videoludica.
2. Pagina dedicata alla storia delle **console Nintendo** .
3. Pagina dedicata alla storia delle **console Sony** .
4. Pagina dedicata alla storia delle **console Microsoft** .

- Tutte le pagine presentano lo stesso layout: una sidebar a sinistra che evidenzia i vari sottotitoli man mano che ci passiamo sopra grazie ad un Intersection Observer; e il contenuto a destra, tutto in una grande griglia da 2 colonne. Da mobile la sidebar sparisce e rimane solo il contenuto.
- Nelle diverse pagine persistono: il componente `<NavBar />`, `<Sidebar />` e `<Footer />`.

##### Pagina principale

- Contenuto principale della pagina componentizzato dal componente `<HomePageArticleBody />`.
- Componente `<Timeline />` preso da DaisyUI che accetta in ingresso informazioni provenienti da un'array di oggetti (presente nel file `./src/constants/homepageTimelineContent.jsx`) e stampa alternando i contneuti a destra e sinistra.

![Immagine della homepage](docs/homepage-1-Desktop.png)
![Immagine 2 della homepage](docs/homepage-2-Desktop.png)

<br>

##### Pagina console Nintendo

- Struttura identica alla Pagina principale con un titolo, un'immagine di apertura e un'introduzione.
- Contenuto principale della pagina componentizzato dal componente `<SezioneConsole />`: a questo componente viene passata come prop l'array di oggetti `nintendoConsoles` che conterrà le informaizoni di tutte le console Nintendo (o della pagina di console che si sta visitando). Il componente restituisce un mapping dell'array per scorrere ognuno dei suoi elementi (ogni console) e stampa per ognuno il componente `<ConsoleCard />` al quale viene passata la key prop tramite id contenuto in ogni elemento dell'array di oggetti, e la prop consoleInfo che conterrà il singolo elemento dell'array che si sta mappando in quel momento.
  A questo punto il componente `<ConsoleCard />` fa una destrutturazione di tutte le proprietà dell'oggetto prop consoleInfo ricevuto e stampa un article con titolo, immagine, descrizione e, se esiste la proprietà `bestGamesList` nell'oggetto in quel momento mappato, una lista con i migliori giochi di quella specifica console. Per il codice JSX di tutto questo **[vai alla sezione Note tecniche](#note-tecniche)**

![Immagine della pagina dedicata alle console Nintendo](docs/Nintendo-1-Desktop.png)
![Immagine 2 della pagina dedicata alle console Nintendo](docs/Nintendo-2-Desktop.png)
<br>

##### Pagina console Sony

- Struttura identica alla Pagina principale e quella relativa alle console Nintendo con un titolo, un'immagine di apertura, un'introduzione e l'elenco delle console gestito dal componente `<SezioneConsole />`. L'unico cambiamento è l'array di oggetti con le informazioni delle console passato a SezioneConsole, `sonyConsoles`.

![Immagine della pagina dedicata alle console sony](docs/sony-1-Desktop.png)
![Immagine 2 della pagina dedicata alle console sony](docs/sony-2-Desktop.png)
<br>

##### Pagina console Microsoft

- Struttura identica alla Pagina principale e quella relativa alle console Nintendo e Sony. L'array di oggetti con le informazioni delle console è chiamato `microsoftConsoles`.

![Immagine della pagina dedicata alle console microsoft](docs/microsoft-1-Desktop.png)
![Immagine 2 della pagina dedicata alle console microsoft](docs/microsoft-2-Desktop.png)

---

`CSS`

- Layout a griglia e flessibili
- Design per dispositivi mobili
- Barra laterale (solo per schermi di grandi dimensioni) con link interni alle varie sezioni dell'articolo.

`JS`

- Lazy Load delle immagini per migliori prestazioni
- Utilizzo di Intersection Observer per implementare il Lazy load e per applicare un font weight differente alle scritte della sidebar quando intercettiamo i titoli delle diverse sezioni della pagina.

---

### Build per la produzione

Eseguire il comando: `npm run build`.
La cartella `/dist` conterrà tutti i file ottimizzati.

---

#### Note tecniche & Difficoltà riscontrate

-
