'use strict';

const TRANSLATIONS = {
  it: {
    btnDemo: 'Demo',
    screenshotPlaceholder: 'screenshot',
    license: 'Licenza GPL v3 · Codice aperto',
    madeWith: 'Sviluppata con il supporto di',
    tabAbout: 'About',
    tabUsage: 'Utilizzo & installazione',
    aboutIntro: 'Questa pagina raccoglie una serie di applicazioni che ho sviluppato con il supporto di Claude.',
    aboutTypes: 'Ci sono due tipi di app:',    
    aboutPwa: 'Girano direttamente nel browser, senza bisogno di installazione. Puoi anche installarle come app standalone direttamente dalla demo.',    
    aboutWails: 'Sono applicazioni desktop native sviluppate con Wails e Go. Devono essere scaricate e installate localmente.',    
    aboutOrigin: 'Le origini',
    aboutOrigin1: 'Queste app non hanno tutte la stessa origine. Alcune sono nate come piccoli esperimenti in Python, usando Kivy o Tkinter. Altre erano app Android native in Java, o estensioni per Chrome. Ognuna riflette un momento diverso: a volte un\'esigenza concreta da risolvere, altre volte semplice curiosità e voglia di imparare qualcosa di nuovo.',
    aboutOrigin2: 'A un certo punto ho sentito il bisogno di raccogliere tutto in una forma più accessibile. È lì che ho iniziato a usare Claude (Anthropic) per portare gradualmente questi progetti su Tailwind e Alpine.js. L\'obiettivo era semplice: farli girare direttamente nel browser, senza installazione.',
    aboutOrigin3: 'Nel frattempo ho anche creato nuove app da zero,  alcune pratiche, altre sperimentali,  continuando quel mix di necessità ed esplorazione da cui tutto è partito.',    
    browserStep1: 'Apri l\'app dal link della demo',
    browserStep2: 'Usala direttamente nel browser',
    browserStep3: '(Opzionale) Installala come app dal menu del browser',
    wailsStep1: 'Scarica l\'app dalla pagina delle release',
    wailsStep2: 'Installala localmente',
    wailsStep3: 'Avviala come una normale applicazione desktop',
    readmeNote: 'Per ulteriori informazioni, consulta il README nella pagina del progetto su GitHub.',    
  },
  en: {
    btnDemo: 'Demo',
    screenshotPlaceholder: 'screenshot',
    license: 'GPL v3 License · Open source',
    madeWith: 'Developed with the support of',
    tabAbout: 'About',
    tabUsage: 'Usage & install',
    aboutIntro: 'This page collects a set of applications I developed with the support of Claude.',
    aboutTypes: 'There are two types of apps:',
    aboutPwa: 'They run directly in your browser, with no installation required. You can also install them as standalone apps directly from the demo.',  
    aboutWails: 'These are native desktop applications built with Wails and Go. They need to be downloaded and installed locally.',
    aboutOrigin: 'Origins',
    aboutOrigin1: 'These apps didn\'t all start in the same place. Some began as small experiments in Python, using Kivy or Tkinter. Others were built as native Android apps in Java, or even as Chrome extensions. Each one reflects a different moment,  sometimes a specific need I wanted to solve, other times just curiosity and the desire to learn something new.',
    aboutOrigin2: 'At some point, I felt the need to bring everything together into a more accessible form. That\'s when I started using Claude (Anthropic) to gradually port these projects to Tailwind and Alpine.js. The goal was simple: make them run directly in the browser, with no installation required.',
    aboutOrigin3: 'Along the way, I also created new apps from scratch,  some practical, some experimental,  continuing that same mix of necessity and exploration that started it all.',    
    browserStep1: 'Open the app from the demo link',
    browserStep2: 'Use it directly in your browser',
    browserStep3: '(Optional) Install it as an app from your browser',    
    wailsStep1: 'Download the app from the release page',
    wailsStep2: 'Install it locally',
    wailsStep3: 'Launch it like a standard desktop application',
    readmeNote: 'For additional information, consult the README on the GitHub project page.',    
  },
};

const APPS = [
  {
    id: 'local-chat',
    name: 'Local Chat',
    tag: 'Utility',
    pwa: false,
    wails: true,
    screenshot: 'assets/screenshots/local-chat.png',
    demoUrl: null,
    repoUrl: 'https://github.com/gsandrini/local-chat',
    desc: {
      it: 'Applicazione desktop per chattare con modelli di intelligenza artificiale locali tramite Ollama.',
      en: 'Desktop app for chatting with local AI models through Ollama.',
    },
  },
  {
    id: 'connection-manager',
    name: 'Connection Manager',
    tag: 'Utility',
    pwa: false,
    wails: true,
    screenshot: 'assets/screenshots/connection-manager.png',
    demoUrl: null,
    repoUrl: 'https://github.com/gsandrini/connection-manager',
    desc: {
      it: 'Applicazione desktop che consente di organizzare le connessioni SSH per gruppo e ambiente, cercarle in tempo reale e aprire un terminale nativo con un solo click',
      en: 'Desktop app that lets you organize SSH connections by group and environment, search them in real time, and open a native terminal in one click.',
    },
  },
  {
    id: 'video-downloader',
    name: 'Video Downloader',
    tag: 'Utility',
    pwa: false,
    wails: true,
    screenshot: 'assets/screenshots/video-downloader.png',
    demoUrl: null,
    repoUrl: 'https://github.com/gsandrini/video-downloader',
    desc: {
      it: 'Applicazione desktop che consente di scaricare parti di video da YouTube',
      en: 'Desktop app that lets you download segments from YouTube videos',
    },
  },
  {
    id: 'date-utils',
    name: 'Date Utils',
    tag: 'Utility',
    pwa: true,
    wails: false,
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
    wails: false,
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
    wails: false,
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
    wails: false,
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
    wails: false,
    screenshot: 'assets/screenshots/easy-numbers.png',
    demoUrl: 'https://gsandrini.github.io/easy-numbers/',
    repoUrl: 'https://github.com/gsandrini/easy-numbers',
    desc: {
      it: 'Un semplice generatore di numeri casuali.',
      en: 'A simple random number generator.',
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
    iconPwa: '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /></svg>',
    iconWails: '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>',
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
