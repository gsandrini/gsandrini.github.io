'use strict';

const TRANSLATIONS = {
  it: {
    btnDemo: 'Demo',
    screenshotPlaceholder: 'screenshot',
    activateLightTheme: 'Attiva tema chiaro',
    activateDarkTheme: 'Attiva tema scuro',
    toggleLanguage: 'Passa alla lingua inglese',
    closeLightbox: 'Chiudi anteprima',
    appTags: { Utility: 'Utility', Security: 'Sicurezza', Game: 'Gioco' },
    license: 'Licenza GPL v3 · Codice aperto',
    madeWith: 'Developed with AI assistance',
    tabAbout: 'About',
    tabUsage: 'Utilizzo & installazione',
    aboutIntro: 'Questa pagina raccoglie una serie di applicazioni che ho sviluppato con il supporto dell\'AI.',
    aboutTypes: 'Ci sono due tipi di app:',
    aboutPwa: 'Girano direttamente nel browser, senza bisogno di installazione. Puoi anche installarle come app standalone direttamente dalla demo.',
    aboutWails: 'Sono applicazioni desktop native sviluppate con Wails e Go. Devono essere scaricate e installate localmente.',
    aboutOrigin: 'Le origini',
    aboutOrigin1: 'Queste app non hanno tutte la stessa origine. Alcune sono nate come piccoli esperimenti in Python, usando Kivy o Tkinter. Altre erano app Android native in Java, o estensioni per Chrome. Ognuna riflette un momento diverso: a volte un\'esigenza concreta da risolvere, altre volte semplice curiosità e voglia di imparare qualcosa di nuovo.',
    aboutOrigin2: 'A un certo punto ho sentito il bisogno di raccogliere tutto in una forma più accessibile. È lì che ho iniziato a usare l\'AI per portare gradualmente questi progetti su Tailwind e Alpine.js. L\'obiettivo era semplice: farli girare direttamente nel browser, senza installazione.',
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
    activateLightTheme: 'Activate light theme',
    activateDarkTheme: 'Activate dark theme',
    toggleLanguage: 'Switch to Italian',
    closeLightbox: 'Close preview',
    appTags: { Utility: 'Utility', Security: 'Security', Game: 'Game' },
    license: 'GPL v3 License · Open source',
    madeWith: 'Developed with AI assistance',
    tabAbout: 'About',
    tabUsage: 'Usage & install',
    aboutIntro: 'This page collects a set of applications I developed with the support of AI.',
    aboutTypes: 'There are two types of apps:',
    aboutPwa: 'They run directly in your browser, with no installation required. You can also install them as standalone apps directly from the demo.',
    aboutWails: 'These are native desktop applications built with Wails and Go. They need to be downloaded and installed locally.',
    aboutOrigin: 'Origins',
    aboutOrigin1: 'These apps didn\'t all start in the same place. Some began as small experiments in Python, using Kivy or Tkinter. Others were built as native Android apps in Java, or even as Chrome extensions. Each one reflects a different moment,  sometimes a specific need I wanted to solve, other times just curiosity and the desire to learn something new.',
    aboutOrigin2: 'At some point, I felt the need to bring everything together into a more accessible form. That\'s when I started using AI to gradually port these projects to Tailwind and Alpine.js. The goal was simple: make them run directly in the browser, with no installation required.',
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
      it: 'Applicazione desktop che consente di organizzare le connessioni SSH per gruppo e ambiente, cercarle in tempo reale e aprirle in schede con terminale integrato, con password salvate in modo cifrato',
      en: 'Desktop app that lets you organize SSH connections by group and environment, search them in real time, and open them in tabs with an embedded terminal, with passwords stored encrypted.',
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
  }
];

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {}
}

function detectLanguage() {
  const stored = readStorage('language');
  if (stored === 'it' || stored === 'en') return stored;
  return (navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en';
}

const PREF_KEYS = { language: 'showcase-language', theme: 'showcase-theme' };
const THEME_COLORS = { light: '#f7f7f4', dark: '#181a1f' };

function showcase() {
  return {
    /* LANGUAGE & THEME */

    /**
     * Initial values are resolved once by the inline script in <head>
     * (saved preference, otherwise system language / color scheme)
     */
    lang: document.documentElement.lang === 'it' ? 'it' : 'en',
    theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',

    /**
     * Active translations object
     */
    get t() {
      return TRANSLATIONS[this.lang];
    },
    
    setLanguage(nextLanguage) {
      if (!Object.prototype.hasOwnProperty.call(TRANSLATIONS, nextLanguage)) return;
      this.lang = nextLanguage;
      document.documentElement.lang = nextLanguage;
      try { localStorage.setItem(PREF_KEYS.language, nextLanguage); } catch (_) {}
    },

    /**
     * Toggle between IT and EN without resetting generator state
     */
    toggleLang() {
      this.setLanguage(this.lang === 'it' ? 'en' : 'it');
    },

    setTheme(nextTheme) {
      if (nextTheme !== 'light' && nextTheme !== 'dark') return;
      this.theme = nextTheme;
      document.documentElement.dataset.theme = nextTheme;
      document.querySelector('meta[name="theme-color"]').content = THEME_COLORS[nextTheme];
      try { localStorage.setItem(PREF_KEYS.theme, nextTheme); } catch (_) {}
    },

    toggleTheme() {
      this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
    },
    apps: APPS,
    activeTab: 'about',
    showLightbox: false,
    lightboxSrc: '',
    lightboxAlt: '',
    iconPwa: '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /></svg>',
    iconWails: '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>',
    iconMoon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>',
    iconSun: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></svg>',
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
