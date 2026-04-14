'use strict';

const TRANSLATIONS = {
  it: {
    btnDemo: 'Demo',
    screenshotPlaceholder: 'screenshot',
    license: 'Licenza GPL v3 · Codice aperto',
    madeWith: 'Sviluppata con il supporto di',
    tabAbout: 'About',
    tabUsage: 'Utilizzo & installazione',
    aboutText: 'Queste app hanno origini diverse: Python con Kivy e Tkinter, app Android native in Java, estensioni per Chrome. Alcune di queste app sono state create per necessità, altre per studio. Ho deciso di utilizzare Claude (Anthropic) per fare il porting in Tailwind e Alpine.js, per avere tool che girano direttamente nel browser, senza installazione.',
    usageDescription: 'Queste app possono essere utilizzate direttamente nel browser oppure installate come Progressive Web App (PWA)',
    browserTitle: 'Uso nel browser',
    browserText: 'Apri la demo live nel tuo browser e inizia subito a usarla',
    installTitle: 'Installazione',
    installStep1: 'Apri la demo live nel tuo browser',
    installStep2: 'Cerca l\'icona di installazione nella barra degli indirizzi oppure apri il menu del browser e seleziona "Installa app" / "Aggiungi alla schermata iniziale".',
    installStep3: 'Conferma l\'installazione: l\'app apparirà sul tuo desktop o sulla schermata iniziale e funzionerà come un\'app nativa, anche offline.',
    desktopApp: 'App desktop nativa - non è una PWA. Vedi il repository per le istruzioni di installazione.',
  },
  en: {
    btnDemo: 'Demo',
    screenshotPlaceholder: 'screenshot',
    license: 'GPL v3 License · Open source',
    madeWith: 'Developed with the support of',
    tabAbout: 'About',
    tabUsage: 'Usage & install',
    aboutText: 'These apps have different origins: Python with Kivy and Tkinter, native Android apps in Java, Chrome extensions. Some were built out of necessity, others just to learn. I decided to use Claude (Anthropic) to port everything to Tailwind and Alpine.js, so they run directly in the browser, no install needed.',
    usageDescription: 'These apps can be used directly in the browser or installed as Progressive Web App (PWA)',
    browserTitle: 'Use in the browser',
    browserText: 'Open the live demo in your browser and start using it immediately',
    installTitle: 'Install the app',
    installStep1: 'Open the live demo in your browser',
    installStep2: 'Look for the install icon in the address bar, or open the browser menu and select "Install app" / "Add to Home Screen"',
    installStep3: 'Confirm the installation - the app will appear on your desktop or home screen and work just like a native app, even offline',
    desktopApp: 'Native desktop app - not a PWA. See the repository for installation instructions.',
  },
};

const APPS = [
  {
    id: 'date-utils',
    name: 'Date Utils',
    tag: 'Utility',
    pwa: true,
    screenshot: 'assets/screenshots/date-utils.png',
    demoUrl: 'https://gsandrini.github.io/date-utils/',
    repoUrl: 'https://github.com/gsandrini/date-utils',
    desc: {
      it: 'Calcola una nuova data aggiungendo o sottraendo giorni, oppure conta i giorni tra due date.',
      en: 'Calculate a new date by adding or subtracting days, or count the days between two dates.',
    },
  },
  {
    id: 'dummy-text',
    name: 'Dummy Text',
    tag: 'Utility',
    pwa: true,
    screenshot: 'assets/screenshots/dummy-text.png',
    demoUrl: 'https://gsandrini.github.io/dummy-text/',
    repoUrl: 'https://github.com/gsandrini/dummy-text',
    desc: {
      it: 'Genera testo casuale per riempire mockup e prototipi.',
      en: 'Generate random text to fill mockups and prototypes.',
    },
  },
  {
    id: 'aes256-encryptor',
    name: 'AES-256-GCM Encryptor',
    tag: 'Security',
    pwa: true,
    screenshot: 'assets/screenshots/aes256-encryptor.png',
    demoUrl: 'https://gsandrini.github.io/aes256-encryptor/',
    repoUrl: 'https://github.com/gsandrini/aes256-encryptor',
    desc: {
      it: 'Cifra e decifra testo con AES-256-GCM direttamente nel browser.',
      en: 'Encrypt and decrypt text with AES-256-GCM directly in the browser.',
    },
  },
  {
    id: 'html-utils',
    name: 'HTML Utils',
    tag: 'Utility',
    pwa: true,
    screenshot: 'assets/screenshots/html-utils.png',
    demoUrl: 'https://gsandrini.github.io/html-utils/',
    repoUrl: 'https://github.com/gsandrini/html-utils',
    desc: {
      it: 'Converte da pixel a REM e viceversa.',
      en: 'Converts from pixels to REM and vice versa.',
    },
  },
  {
    id: 'easy-numbers',
    name: 'Easy Numbers',
    tag: 'Utility',
    pwa: true,
    screenshot: 'assets/screenshots/easy-numbers.png',
    demoUrl: 'https://gsandrini.github.io/easy-numbers/',
    repoUrl: 'https://github.com/gsandrini/easy-numbers',
    desc: {
      it: 'Un semplice generatore di numeri casuali.',
      en: 'A simple random number generator.',
    },
  },
  {
    id: 'connection-manager',
    name: 'Connection Manager',
    tag: 'Utility',
    pwa: false,
    screenshot: 'assets/screenshots/connection-manager.png',
    demoUrl: null,
    repoUrl: 'https://github.com/gsandrini/connection-manager',
    desc: {
      it: 'Connection Manager è un\'app desktop che consente di organizzare le connessioni SSH per gruppo e ambiente, cercarle in tempo reale e aprire un terminale nativo con un solo click',
      en: 'Connection Manager is a desktop app that lets you organize SSH connections by group and environment, search them in real time, and open a native terminal in one click.',
    },
  },
];

function showcase() {
  return {
    lang: navigator.language.startsWith('it') ? 'it' : 'en',
    get t() {
      return TRANSLATIONS[this.lang];
    },
    toggleLang() {
      this.lang = this.lang === 'it' ? 'en' : 'it';
    },
    apps: APPS,

    activeTab: 'about',

    showLightbox: false,
    lightboxSrc: '',
    lightboxAlt: '',

    openLightbox(src, alt) {
      this.lightboxSrc = src;
      this.lightboxAlt = alt || '';
      this.showLightbox = true;
    },

    closeLightbox() {
      this.showLightbox = false;
    },
  }
}
