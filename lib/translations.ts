export const translations = {
  en: {
    language: "English",
    flag: "us",
    title: "Don't Ask to Ask",
    subtitle: "Learn proper chat etiquette - ask your question directly instead of just saying <em>hello</em>",
    highlight: "ask",
    metadata: {
      title: "Don't Ask to Ask",
      description: "Please don't ask to ask",
    },
    badge: "Better Communication",
    example: "Example",
    wrongWay: {
      config: {
        title: "❌ Don't do this",
        solution: "This creates unnecessary delays and requires multiple messages",
      },
      messages: [
        { role: "you", RoleText: "You", time: "10:32", message: "Hi, are you there?" },
        { role: "wait", RoleText: "", time: "", message: "4 hours later..." },
        { role: "colleague", RoleText: "Colleague", time: "14:15", message: "Yes, what can I help you with?" },
        { role: "wait", RoleText: "", time: "", message: "10 minutes later..." },
        { role: "you", RoleText: "You", time: "14:25", message: "I have a problem with my code..." },
      ],
    },
    rightWay: {
      config: {
        title: "✅ Instead try this",
        solution: "This is a more effective way to ask for help and save time for everyone",
      },
      messages: [
        { role: "You", RoleText: "You", time: "10:32", message: "Hi! I'm having an issue with my React component - it's not rendering correctly. Can you help me debug it?" },
        { role: "Wait", RoleText: "", time: "", message: "3 minutes later..." },
        { role: "Colleague", RoleText: "Colleague", time: "10:35", message: "Of course! Can you show me the code and error message?" },
        { role: "Wait", RoleText: "", time: "", message: "2 minutes later..." },
        { role: "You", RoleText: "You", time: "10:37", message: "Yes of course! Here's the code and error message." },
      ],
    },
    why: {
      title: "Why is this important?",
      reasons: [
        "It saves time for everyone involved",
        "It shows respect for others' time",
        "It makes communication more efficient",
        "It helps get faster responses",
        "It reduces unnecessary notifications",
      ],
    },
    tips: {
      title: "Tips for better chat communication",
      list: [
        {
          title: "Be specific",
          description: "Describe your problem or question clearly from the start",
        },
        {
          title: "Provide context",
          description: "Include relevant details that can help understand the situation",
        },
        {
          title: "Be patient",
          description: "People might not always be available immediately",
        },
        {
          title: "Use threads",
          description: "Keep related messages together in threads when possible",
        },
      ],
    },
    footer: {
      title: "Thank you for reading!",
      subtitle: "Help spread better communication habits",
    },
    phoneExample: "Imagine calling someone on the phone, going <em>hello!</em> then putting them on hold... 🤦",
  },

  // Danish translation
  da: {
    language: "Dansk",
    flag: "dk",
    title: "Spørg Ikke For At Spørge",
    subtitle: "Lær ordentlig chat-etikette - stil dit spørgsmål direkte i stedet for bare at sige <em>hej</em>",
    highlight: "spørg",
    metadata: {
      title: "Spørg Ikke For At Spørge",
      description: "Venligst spørg ikke for at spørge",
    },
    badge: "Bedre Kommunikation",
    example: "Eksempel",
    wrongWay: {
      config: {
        title: "❌ Gør ikke dette",
        solution: "Dette skaber unødvendige forsinkelser og kræver flere beskeder",
      },
      messages: [
        { role: "you", RoleText: "Dig", time: "10:32", message: "Hej, er du der?" },
        { role: "wait", RoleText: "", time: "", message: "4 timer senere..." },
        { role: "colleague", RoleText: "Kollega", time: "14:15", message: "Ja, hvad kan jeg hjælpe med?" },
        { role: "wait", RoleText: "", time: "", message: "10 minutter senere..." },
        { role: "you", RoleText: "Dig", time: "14:25", message: "Jeg har et problem med min kode..." },
      ],
    },
    rightWay: {
      config: {
        title: "✅ Prøv dette i stedet",
        solution: "Dette er en mere effektiv måde at bede om hjælp på og sparer tid for alle",
      },
      messages: [
        { role: "You", RoleText: "Dig", time: "10:32", message: "Hej! Jeg har et problem med min React-komponent - den vises ikke korrekt. Kan du hjælpe mig med at debugge den?" },
        { role: "Wait", RoleText: "", time: "", message: "3 minutter senere..." },
        { role: "Colleague", RoleText: "Kollega", time: "10:35", message: "Selvfølgelig! Kan du vise mig koden og fejlmeddelelsen?" },
        { role: "Wait", RoleText: "", time: "", message: "2 minutter senere..." },
        { role: "You", RoleText: "Dig", time: "10:37", message: "Ja selvfølgelig! Her er koden og fejlmeddelelsen." },
      ],
    },
    why: {
      title: "Hvorfor er dette vigtigt?",
      reasons: [
        "Det sparer tid for alle involverede",
        "Det viser respekt for andres tid",
        "Det gør kommunikationen mere effektiv",
        "Det hjælper med at få hurtigere svar",
        "Det reducerer unødvendige notifikationer",
      ],
    },
    tips: {
      title: "Tips til bedre chat-kommunikation",
      list: [
        {
          title: "Vær specifik",
          description: "Beskriv dit problem eller spørgsmål klart fra starten",
        },
        {
          title: "Giv kontekst",
          description: "Inkludér relevante detaljer, der kan hjælpe med at forstå situationen",
        },
        {
          title: "Vær tålmodig",
          description: "Folk er måske ikke altid tilgængelige med det samme",
        },
        {
          title: "Brug tråde",
          description: "Hold relaterede beskeder sammen i tråde når det er muligt",
        },
      ],
    },
    footer: {
      title: "Tak for at læse!",
      subtitle: "Hjælp med at sprede bedre kommunikationsvaner",
    },
    phoneExample: "Forestil dig at ringe til nogen, sige <em>hej!</em> og så sætte dem i venteposition... 🤦",
  },

  // German translation
  de: {
    language: "Deutsch",
    flag: "de",
    title: "Frag Nicht Ob Du Fragen Darfst",
    subtitle: "Lerne richtige Chat-Etikette - stelle deine Frage direkt, anstatt nur <em>hallo</em> zu sagen",
    highlight: "frag",
    metadata: {
      title: "Frag Nicht Ob Du Fragen Darfst",
      description: "Bitte frag nicht ob du fragen darfst",
    },
    badge: "Bessere Kommunikation",
    example: "Beispiel",
    wrongWay: {
      config: {
        title: "❌ Mach das nicht",
        solution: "Dies verursacht unnötige Verzögerungen und erfordert mehrere Nachrichten",
      },
      messages: [
        { role: "you", RoleText: "Du", time: "10:32", message: "Hi, bist du da?" },
        { role: "wait", RoleText: "", time: "", message: "4 Stunden später..." },
        { role: "colleague", RoleText: "Kollege", time: "14:15", message: "Ja, womit kann ich dir helfen?" },
        { role: "wait", RoleText: "", time: "", message: "10 Minuten später..." },
        { role: "you", RoleText: "Du", time: "14:25", message: "Ich habe ein Problem mit meinem Code..." },
      ],
    },
    rightWay: {
      config: {
        title: "✅ Versuche das stattdessen",
        solution: "Dies ist ein effektiverer Weg, um Hilfe zu bitten und spart allen Zeit",
      },
      messages: [
        { role: "You", RoleText: "Du", time: "10:32", message: "Hi! Ich habe ein Problem mit meiner React-Komponente - sie wird nicht korrekt gerendert. Kannst du mir beim Debuggen helfen?" },
        { role: "Wait", RoleText: "", time: "", message: "3 Minuten später..." },
        { role: "Colleague", RoleText: "Kollege", time: "10:35", message: "Natürlich! Kannst du mir den Code und die Fehlermeldung zeigen?" },
        { role: "Wait", RoleText: "", time: "", message: "2 Minuten später..." },
        { role: "You", RoleText: "Du", time: "10:37", message: "Ja natürlich! Hier ist der Code und die Fehlermeldung." },
      ],
    },
    why: {
      title: "Warum ist das wichtig?",
      reasons: [
        "Es spart Zeit für alle Beteiligten",
        "Es zeigt Respekt für die Zeit anderer",
        "Es macht die Kommunikation effizienter",
        "Es hilft, schnellere Antworten zu bekommen",
        "Es reduziert unnötige Benachrichtigungen",
      ],
    },
    tips: {
      title: "Tipps für bessere Chat-Kommunikation",
      list: [
        {
          title: "Sei spezifisch",
          description: "Beschreibe dein Problem oder deine Frage von Anfang an klar",
        },
        {
          title: "Gib Kontext",
          description: "Füge relevante Details hinzu, die helfen, die Situation zu verstehen",
        },
        {
          title: "Sei geduldig",
          description: "Menschen sind möglicherweise nicht immer sofort verfügbar",
        },
        {
          title: "Nutze Threads",
          description: "Halte verwandte Nachrichten in Threads zusammen, wenn möglich",
        },
      ],
    },
    footer: {
      title: "Danke fürs Lesen!",
      subtitle: "Hilf dabei, bessere Kommunikationsgewohnheiten zu verbreiten",
    },
    phoneExample: "Stell dir vor, du rufst jemanden an, sagst <em>hallo!</em> und legst ihn dann in die Warteschleife... 🤦",
  },

  // French translation
  fr: {
    language: "Français",
    flag: "fr",
    title: "Ne Demandez Pas À Demander",
    subtitle: "Apprenez l'étiquette de chat appropriée - posez votre question directement au lieu de dire simplement <em>bonjour</em>",
    highlight: "Demand",
    metadata: {
      title: "Ne Demandez Pas À Demander",
      description: "S'il vous plaît ne demandez pas à demander",
    },
    badge: "Meilleure Communication",
    example: "Exemple",
    wrongWay: {
      config: {
        title: "❌ Ne faites pas cela",
        solution: "Cela crée des retards inutiles et nécessite plusieurs messages",
      },
      messages: [
        { role: "you", RoleText: "Vous", time: "10:32", message: "Salut, tu es là ?" },
        { role: "wait", RoleText: "", time: "", message: "4 heures plus tard..." },
        { role: "colleague", RoleText: "Collègue", time: "14:15", message: "Oui, avec quoi puis-je t'aider ?" },
        { role: "wait", RoleText: "", time: "", message: "10 minutes plus tard..." },
        { role: "you", RoleText: "Vous", time: "14:25", message: "J'ai un problème avec mon code..." },
      ],
    },
    rightWay: {
      config: {
        title: "✅ Essayez ceci à la place",
        solution: "C'est une façon plus efficace de demander de l'aide et de faire gagner du temps à tout le monde",
      },
      messages: [
        { role: "You", RoleText: "Vous", time: "10:32", message: "Salut ! J'ai un problème avec mon composant React - il ne s'affiche pas correctement. Peux-tu m'aider à le déboguer ?" },
        { role: "Wait", RoleText: "", time: "", message: "3 minutes plus tard..." },
        { role: "Colleague", RoleText: "Collègue", time: "10:35", message: "Bien sûr ! Peux-tu me montrer le code et le message d'erreur ?" },
        { role: "Wait", RoleText: "", time: "", message: "2 minutes plus tard..." },
        { role: "You", RoleText: "Vous", time: "10:37", message: "Oui bien sûr ! Voici le code et le message d'erreur." },
      ],
    },
    why: {
      title: "Pourquoi est-ce important ?",
      reasons: [
        "Cela fait gagner du temps à tous les participants",
        "Cela montre le respect du temps des autres",
        "Cela rend la communication plus efficace",
        "Cela aide à obtenir des réponses plus rapides",
        "Cela réduit les notifications inutiles",
      ],
    },
    tips: {
      title: "Conseils pour une meilleure communication en chat",
      list: [
        {
          title: "Soyez spécifique",
          description: "Décrivez votre problème ou question clairement dès le début",
        },
        {
          title: "Donnez du contexte",
          description: "Incluez des détails pertinents qui peuvent aider à comprendre la situation",
        },
        {
          title: "Soyez patient",
          description: "Les gens ne sont pas toujours disponibles immédiatement",
        },
        {
          title: "Utilisez les fils de discussion",
          description: "Gardez les messages liés ensemble dans des fils quand c'est possible",
        },
      ],
    },
    footer: {
      title: "Merci d'avoir lu !",
      subtitle: "Aidez à répandre de meilleures habitudes de communication",
    },
    phoneExample: "Imaginez appeler quelqu'un au téléphone, dire <em>bonjour !</em> puis le mettre en attente... 🤦",
  },
}

export const locales = Object.keys(translations)
export const defaultLocale = "en"
export function getTranslations(locale: string) { return translations[locale as keyof typeof translations] || translations.en }