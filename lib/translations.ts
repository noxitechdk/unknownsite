interface TranslationType {
  language: string
  flag: string
  title: string
  subtitle: string
  highlight: string[]
  metadata: {
    title: string
    description: string
  }
  footer: {
    madeBy: string
    openSource: string
    viewOnGitHub: string
  }
}

export const translations: Record<string, Partial<TranslationType>> = {
  en: {
    language: "English",
    flag: "us",
    title: "This site is not a real site",
    subtitle: "This is just a wirldcard domain for public use purposes",
    highlight: ["real", "wirldcard", "public use"],
    metadata: {
      title: "Hello, World!",
      description: "What's this?",
    },
    footer: {
      madeBy: "Made by",
      openSource: "This project is open source",
      viewOnGitHub: "View on GitHub",
    },
  },
  da: {
    language: "Dansk",
    flag: "dk",
    title: "Dette site er ikke et rigtigt site",
    subtitle: "Dette er bare et wildcard-domæne til offentlige brug",
    highlight: ["rigtigt", "wildcard", "offentlige brug"],
    metadata: {
      title: "Hej, Verden!",
      description: "Hvad er dette?",
    },
    footer: {
      madeBy: "Lavede af",
      openSource: "Dette projekt er open source",
      viewOnGitHub: "Se på GitHub",
    },
  },
  de: {
    language: "Deutsch",
    flag: "de",
    title: "Diese Seite ist keine echte Seite",
    subtitle: "Dies ist nur eine Wildcard-Domain für öffentliche Zwecke",
    highlight: ["echte", "Wildcard", "öffentliche Zwecke"],
    metadata: {
      title: "Hallo, Welt!",
      description: "Was ist das?",
    },
    footer: {
      madeBy: "Gemacht von",
      openSource: "Dieses Projekt ist Open Source",
      viewOnGitHub: "Auf GitHub ansehen",
    },
  },
  fr: {
    language: "Français",
    flag: "fr",
    title: "Ce site n'est pas un vrai site",
    subtitle: "Ceci est juste un domaine générique à des fins d'utilisation publique",
    highlight: ["vrai", "générique", "utilisation publique"],
    metadata: {
      title: "Bonjour, le monde!",
      description: "Qu'est-ce que c'est?",
    },
    footer: {
      madeBy: "Fait par",
      openSource: "Ce projet est open source",
      viewOnGitHub: "Voir sur GitHub",
    },
  },
}

export const locales = Object.keys(translations)
export const defaultLocale = "en"

export function getTranslations(locale: string): TranslationType {
  return translations[locale as keyof typeof translations] as TranslationType || translations.en as TranslationType
}