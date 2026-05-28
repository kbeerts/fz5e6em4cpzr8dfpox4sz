const app = document.getElementById("app");

const LANGUAGE_OPTIONS = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "nl", flag: "🇳🇱", label: "Nederlands" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
];

const PRINT_STEP_KEYS = [
  "printPreparing",
  "printEncoding",
  "printPersonalizing",
  "printSecuring",
  "printChecking",
];

const COPY = {
  en: {
    chromeLabel: "EIB-inspired self-service kiosk",
    appTitle: "eWelcome",
    appSubtitle: "Badge self-service for visitors, employees and contractors",
    languageTitle: "Welcome to eWelcome",
    languageLead: "Please choose your language to continue.",
    personaTitle: "Who are you today?",
    personaLead: "Select the option that best matches your visit.",
    visitor: "Visitor",
    employeeContractor: "Employee / Contractor",
    serviceTitle: "Which self-service option do you need?",
    serviceLead: "Choose the badge service you want to use.",
    serviceNew: "New Badge",
    serviceLost: "Lost Badge",
    serviceReplacement: "Replacement Badge",
    serviceNewHint: "Hybrid card migration flow",
    serviceLostHint: "Temporary service placeholder",
    serviceReplacementHint: "Temporary service placeholder",
    unavailableTitle: "Currently not available",
    unavailableVisitorBody:
      "Visitor self-service is not available on this kiosk yet.",
    unavailableServiceBody:
      "{service} is not available on this kiosk yet.",
    inviteTitle: "Invitation check",
    inviteLead:
      "Did you receive an invitation email or letter to replace your old Legic card with a new Hybrid card, and do you still have the QR code from the invitation?",
    inviteYes: "Yes, I have the QR code",
    inviteNo: "No, I do not have the QR code",
    qrTitle: "Show your QR code to the camera",
    qrLead:
      "Hold the invitation QR code inside the frame. You can also upload one of the sample QR files below.",
    qrStartCamera: "Start camera",
    qrStopCamera: "Stop camera",
    qrUpload: "Scan saved QR image",
    qrIdle: "Camera is off. Start the camera or upload a sample QR image.",
    qrActive:
      "Camera is active. Hold the QR code steady inside the frame.",
    qrFoundHeading: "Invitation found",
    qrFoundBody:
      "We found {name}. Please continue to old badge collection.",
    qrUnknown:
      "This QR code is not linked to a record in the mockup dataset.",
    qrNoCodeImage:
      "No readable QR code was detected in the uploaded image.",
    qrUnsupported:
      "This browser does not expose native QR detection. Use a modern Chromium-based kiosk browser on localhost.",
    qrCameraDenied:
      "Camera access was not granted. You can still test with a saved QR image.",
    sampleQrs: "Sample invitation QR codes",
    sampleQrsLead:
      "Three local demo QR images are included for Kris Beerts, Jari Rooman and Vincent Haemerlinck.",
    collectorTitleKnown: "Insert your old Legic badge",
    collectorLeadKnown:
      "Confirmed user: {name}. Insert the old Legic badge into the slot labelled Collector. The card will be read, collected and will not be returned.",
    collectorTitleUnknown: "Collect old Legic badge",
    collectorLeadUnknown:
      "Insert the old Legic badge into the slot labelled Collector. For this mockup, select one of the sample badges before starting the collector.",
    sampleBadges: "Sample Legic badges",
    selectDemoBadge: "Select demo badge",
    collectorStart: "Start collector",
    collectorRunning: "Collector reading badge...",
    collectorSelectRequired:
      "Select a demo badge first for the no-QR flow.",
    collectorSuccessKnown:
      "Old Legic badge {badge} was read successfully and matches {name}. The badge has been collected and will not be returned.",
    collectorSuccessUnknown:
      "Old Legic badge {badge} was read successfully for {name}. Please continue with identity verification.",
    collectorContinuePrint: "Continue to badge printing",
    collectorContinueIdentity: "Continue to identity check",
    identityTitle: "Scan identity card",
    identityLead:
      "Place the identity card on the scanner. For this mockup, type the family name exactly as it appears on the ID card for {name}.",
    identityRecord: "Record identified from old badge",
    identityLabel: "Family name on identity card",
    identityButton: "Confirm identity card",
    identityMismatch:
      "The scanned last name does not match the record that was read from the old badge.",
    printingTitle: "Printing and encoding your new badge",
    printingLead:
      "Please wait while the Hybrid card is encoded, personalized and quality checked.",
    printPreparing: "Preparing blank card",
    printEncoding: "Encoding hybrid chip",
    printPersonalizing: "Printing employee details",
    printSecuring: "Applying security layer",
    printChecking: "Completing final quality check",
    printReady: "Your new badge is ready for collection.",
    badgeRoleEmployee: "Employee",
    badgeType: "Hybrid Card",
    badgeNumber: "Badge number",
    completionTitle: "Badge issued successfully",
    completionBody:
      "{name}, your new badge has been printed and encoded. Please collect it from the output tray.",
    back: "Back",
    startOver: "Start over",
    continue: "Continue",
    returnStart: "Return to start",
  },
  de: {
    chromeLabel: "EIB-inspirierter Self-Service-Kiosk",
    appTitle: "eWelcome",
    appSubtitle:
      "Badge-Self-Service für Besucher, Mitarbeitende und Auftragnehmer",
    languageTitle: "Willkommen bei eWelcome",
    languageLead: "Bitte wählen Sie Ihre Sprache, um fortzufahren.",
    personaTitle: "Wer sind Sie heute?",
    personaLead: "Wählen Sie die Option, die am besten zu Ihrem Besuch passt.",
    visitor: "Besucher",
    employeeContractor: "Mitarbeiter / Auftragnehmer",
    serviceTitle: "Welche Self-Service-Option benötigen Sie?",
    serviceLead: "Wählen Sie den Badge-Service, den Sie verwenden möchten.",
    serviceNew: "Neuer Ausweis",
    serviceLost: "Ausweis verloren",
    serviceReplacement: "Ersatzausweis",
    serviceNewHint: "Hybridkarten-Migrationsablauf",
    serviceLostHint: "Vorübergehender Platzhalter",
    serviceReplacementHint: "Vorübergehender Platzhalter",
    unavailableTitle: "Derzeit nicht verfügbar",
    unavailableVisitorBody:
      "Der Self-Service für Besucher ist an diesem Kiosk noch nicht verfügbar.",
    unavailableServiceBody:
      "{service} ist an diesem Kiosk noch nicht verfügbar.",
    inviteTitle: "Einladung prüfen",
    inviteLead:
      "Haben Sie eine Einladungs-E-Mail oder einen Brief erhalten, um Ihre alte Legic-Karte durch eine neue Hybrid-Karte zu ersetzen, und haben Sie den QR-Code aus der Einladung noch dabei?",
    inviteYes: "Ja, ich habe den QR-Code",
    inviteNo: "Nein, ich habe den QR-Code nicht",
    qrTitle: "Zeigen Sie Ihren QR-Code der Kamera",
    qrLead:
      "Halten Sie den Einladungs-QR-Code in den Rahmen. Sie können auch eine der Beispiel-QR-Dateien unten hochladen.",
    qrStartCamera: "Kamera starten",
    qrStopCamera: "Kamera stoppen",
    qrUpload: "Gespeichertes QR-Bild scannen",
    qrIdle:
      "Die Kamera ist aus. Starten Sie die Kamera oder laden Sie ein Beispiel-QR-Bild hoch.",
    qrActive:
      "Die Kamera ist aktiv. Halten Sie den QR-Code ruhig im Rahmen.",
    qrFoundHeading: "Einladung gefunden",
    qrFoundBody:
      "Wir haben {name} gefunden. Bitte fahren Sie mit der Sammlung des alten Badges fort.",
    qrUnknown:
      "Dieser QR-Code ist nicht mit einem Datensatz in diesem Mockup verknüpft.",
    qrNoCodeImage:
      "Im hochgeladenen Bild wurde kein lesbarer QR-Code erkannt.",
    qrUnsupported:
      "Dieser Browser stellt keine native QR-Erkennung bereit. Verwenden Sie einen modernen Chromium-basierten Kiosk-Browser auf localhost.",
    qrCameraDenied:
      "Der Kamerazugriff wurde nicht gewährt. Sie können trotzdem mit einem gespeicherten QR-Bild testen.",
    sampleQrs: "Beispiel-QR-Codes",
    sampleQrsLead:
      "Drei lokale Demo-QR-Bilder sind für Kris Beerts, Jari Rooman und Vincent Haemerlinck enthalten.",
    collectorTitleKnown: "Alten Legic-Badge einlegen",
    collectorLeadKnown:
      "Bestätigter Benutzer: {name}. Legen Sie den alten Legic-Badge in den mit Collector beschrifteten Schlitz. Die Karte wird gelesen, eingezogen und nicht zurückgegeben.",
    collectorTitleUnknown: "Alten Legic-Badge einsammeln",
    collectorLeadUnknown:
      "Legen Sie den alten Legic-Badge in den mit Collector beschrifteten Schlitz. Wählen Sie für dieses Mockup zuerst eines der Beispiel-Badges aus.",
    sampleBadges: "Beispiel-Legic-Badges",
    selectDemoBadge: "Demo-Badge auswählen",
    collectorStart: "Collector starten",
    collectorRunning: "Collector liest Badge...",
    collectorSelectRequired:
      "Wählen Sie zuerst ein Demo-Badge für den Ablauf ohne QR-Code aus.",
    collectorSuccessKnown:
      "Der alte Legic-Badge {badge} wurde erfolgreich gelesen und stimmt mit {name} überein. Der Badge wurde eingezogen und wird nicht zurückgegeben.",
    collectorSuccessUnknown:
      "Der alte Legic-Badge {badge} wurde erfolgreich für {name} gelesen. Bitte fahren Sie mit der Identitätsprüfung fort.",
    collectorContinuePrint: "Weiter zur Badge-Erstellung",
    collectorContinueIdentity: "Weiter zur Identitätsprüfung",
    identityTitle: "Ausweis scannen",
    identityLead:
      "Legen Sie den Ausweis auf den Scanner. Geben Sie für dieses Mockup den Familiennamen genauso ein, wie er auf dem Ausweis von {name} steht.",
    identityRecord: "Datensatz aus altem Badge erkannt",
    identityLabel: "Familienname auf dem Ausweis",
    identityButton: "Ausweis bestätigen",
    identityMismatch:
      "Der gescannte Nachname stimmt nicht mit dem Datensatz des alten Badges überein.",
    printingTitle: "Ihr neuer Badge wird gedruckt und codiert",
    printingLead:
      "Bitte warten Sie, während die Hybrid-Karte codiert, personalisiert und geprüft wird.",
    printPreparing: "Leere Karte vorbereiten",
    printEncoding: "Hybrid-Chip codieren",
    printPersonalizing: "Mitarbeiterdaten drucken",
    printSecuring: "Sicherheitsschicht aufbringen",
    printChecking: "Abschließende Qualitätskontrolle",
    printReady: "Ihr neuer Badge liegt zur Abholung bereit.",
    badgeRoleEmployee: "Mitarbeiter",
    badgeType: "Hybrid-Karte",
    badgeNumber: "Badge-Nummer",
    completionTitle: "Badge erfolgreich ausgestellt",
    completionBody:
      "{name}, Ihr neuer Badge wurde gedruckt und codiert. Bitte entnehmen Sie ihn aus dem Ausgabefach.",
    back: "Zurück",
    startOver: "Neu starten",
    continue: "Weiter",
    returnStart: "Zurück zum Start",
  },
  nl: {
    chromeLabel: "EIB-geinspireerde selfservicekiosk",
    appTitle: "eWelcome",
    appSubtitle:
      "Badge-selfservice voor bezoekers, medewerkers en contractanten",
    languageTitle: "Welkom bij eWelcome",
    languageLead: "Kies uw taal om verder te gaan.",
    personaTitle: "Wie bent u vandaag?",
    personaLead: "Kies de optie die het best bij uw bezoek past.",
    visitor: "Bezoeker",
    employeeContractor: "Medewerker / Contractant",
    serviceTitle: "Welke selfservice-optie hebt u nodig?",
    serviceLead: "Kies de badge-service die u wilt gebruiken.",
    serviceNew: "Nieuwe badge",
    serviceLost: "Badge verloren",
    serviceReplacement: "Vervangbadge",
    serviceNewHint: "Migratieflow voor hybrid card",
    serviceLostHint: "Tijdelijke placeholder",
    serviceReplacementHint: "Tijdelijke placeholder",
    unavailableTitle: "Momenteel niet beschikbaar",
    unavailableVisitorBody:
      "De selfservice voor bezoekers is op deze kiosk nog niet beschikbaar.",
    unavailableServiceBody:
      "{service} is op deze kiosk nog niet beschikbaar.",
    inviteTitle: "Uitnodiging controleren",
    inviteLead:
      "Hebt u een uitnodigingsmail of brief ontvangen om uw oude Legic-kaart te vervangen door een nieuwe Hybrid card, en hebt u de QR-code uit de uitnodiging nog bij u?",
    inviteYes: "Ja, ik heb de QR-code",
    inviteNo: "Nee, ik heb de QR-code niet",
    qrTitle: "Toon uw QR-code aan de camera",
    qrLead:
      "Houd de uitnodigings-QR-code binnen het kader. U kunt hieronder ook een van de voorbeeld-QR-bestanden uploaden.",
    qrStartCamera: "Camera starten",
    qrStopCamera: "Camera stoppen",
    qrUpload: "Opgeslagen QR-afbeelding scannen",
    qrIdle:
      "De camera staat uit. Start de camera of upload een voorbeeld-QR-afbeelding.",
    qrActive:
      "De camera is actief. Houd de QR-code stil binnen het kader.",
    qrFoundHeading: "Uitnodiging gevonden",
    qrFoundBody:
      "We hebben {name} gevonden. Ga verder met het inzamelen van de oude badge.",
    qrUnknown:
      "Deze QR-code is niet gekoppeld aan een record in deze mockupdataset.",
    qrNoCodeImage:
      "Er werd geen leesbare QR-code gedetecteerd in de geuploade afbeelding.",
    qrUnsupported:
      "Deze browser biedt geen native QR-detectie. Gebruik een moderne Chromium-kioskbrowser op localhost.",
    qrCameraDenied:
      "Er werd geen cameratoegang verleend. U kunt nog steeds testen met een opgeslagen QR-afbeelding.",
    sampleQrs: "Voorbeeld-QR-codes",
    sampleQrsLead:
      "Drie lokale demo-QR-afbeeldingen zijn inbegrepen voor Kris Beerts, Jari Rooman en Vincent Haemerlinck.",
    collectorTitleKnown: "Plaats uw oude Legic-badge",
    collectorLeadKnown:
      "Bevestigde gebruiker: {name}. Plaats de oude Legic-badge in de sleuf met het label Collector. De kaart wordt gelezen, ingenomen en niet teruggegeven.",
    collectorTitleUnknown: "Oude Legic-badge inzamelen",
    collectorLeadUnknown:
      "Plaats de oude Legic-badge in de sleuf met het label Collector. Kies voor deze mockup eerst een van de voorbeeldbadges.",
    sampleBadges: "Voorbeeld-Legic-badges",
    selectDemoBadge: "Demo-badge kiezen",
    collectorStart: "Collector starten",
    collectorRunning: "Collector leest badge...",
    collectorSelectRequired:
      "Kies eerst een demo-badge voor de flow zonder QR-code.",
    collectorSuccessKnown:
      "Oude Legic-badge {badge} werd succesvol gelezen en komt overeen met {name}. De badge is ingenomen en wordt niet teruggegeven.",
    collectorSuccessUnknown:
      "Oude Legic-badge {badge} werd succesvol gelezen voor {name}. Ga verder met de identiteitscontrole.",
    collectorContinuePrint: "Verder naar badgeprint",
    collectorContinueIdentity: "Verder naar identiteitscontrole",
    identityTitle: "Identiteitskaart scannen",
    identityLead:
      "Plaats de identiteitskaart op de scanner. Typ voor deze mockup de familienaam exact zoals die op de identiteitskaart van {name} staat.",
    identityRecord: "Record geïdentificeerd via oude badge",
    identityLabel: "Familienaam op identiteitskaart",
    identityButton: "Identiteitskaart bevestigen",
    identityMismatch:
      "De gescande familienaam komt niet overeen met het record dat van de oude badge werd gelezen.",
    printingTitle: "Uw nieuwe badge wordt geprint en gecodeerd",
    printingLead:
      "Even geduld terwijl de Hybrid card wordt gecodeerd, gepersonaliseerd en gecontroleerd.",
    printPreparing: "Blanco kaart voorbereiden",
    printEncoding: "Hybrid-chip coderen",
    printPersonalizing: "Medewerkersgegevens printen",
    printSecuring: "Beveiligingslaag aanbrengen",
    printChecking: "Laatste kwaliteitscontrole",
    printReady: "Uw nieuwe badge ligt klaar om af te halen.",
    badgeRoleEmployee: "Medewerker",
    badgeType: "Hybrid card",
    badgeNumber: "Badgenummer",
    completionTitle: "Badge succesvol uitgegeven",
    completionBody:
      "{name}, uw nieuwe badge is geprint en gecodeerd. Haal hem op uit de uitgiftegleuf.",
    back: "Terug",
    startOver: "Opnieuw beginnen",
    continue: "Verder",
    returnStart: "Terug naar start",
  },
  fr: {
    chromeLabel: "Borne libre-service inspirée de l'EIB",
    appTitle: "eWelcome",
    appSubtitle:
      "Libre-service badge pour visiteurs, employés et contractants",
    languageTitle: "Bienvenue sur eWelcome",
    languageLead: "Veuillez choisir votre langue pour continuer.",
    personaTitle: "Qui êtes-vous aujourd'hui ?",
    personaLead:
      "Sélectionnez l'option qui correspond le mieux à votre visite.",
    visitor: "Visiteur",
    employeeContractor: "Employé / Contractant",
    serviceTitle: "Quelle option libre-service vous faut-il ?",
    serviceLead: "Choisissez le service badge que vous souhaitez utiliser.",
    serviceNew: "Nouveau badge",
    serviceLost: "Badge perdu",
    serviceReplacement: "Badge de remplacement",
    serviceNewHint: "Parcours de migration Hybrid Card",
    serviceLostHint: "Espace réservé temporaire",
    serviceReplacementHint: "Espace réservé temporaire",
    unavailableTitle: "Actuellement indisponible",
    unavailableVisitorBody:
      "Le libre-service pour les visiteurs n'est pas encore disponible sur cette borne.",
    unavailableServiceBody:
      "{service} n'est pas encore disponible sur cette borne.",
    inviteTitle: "Vérification de l'invitation",
    inviteLead:
      "Avez-vous reçu un e-mail ou une lettre d'invitation pour remplacer votre ancienne carte Legic par une nouvelle Hybrid Card, et avez-vous encore le QR code de l'invitation ?",
    inviteYes: "Oui, j'ai le QR code",
    inviteNo: "Non, je n'ai pas le QR code",
    qrTitle: "Présentez votre QR code à la caméra",
    qrLead:
      "Placez le QR code de l'invitation dans le cadre. Vous pouvez aussi téléverser ci-dessous un des fichiers QR d'exemple.",
    qrStartCamera: "Démarrer la caméra",
    qrStopCamera: "Arrêter la caméra",
    qrUpload: "Scanner une image QR enregistrée",
    qrIdle:
      "La caméra est arrêtée. Démarrez la caméra ou téléversez une image QR d'exemple.",
    qrActive:
      "La caméra est active. Maintenez le QR code immobile dans le cadre.",
    qrFoundHeading: "Invitation trouvée",
    qrFoundBody:
      "Nous avons trouvé {name}. Veuillez poursuivre avec la collecte de l'ancien badge.",
    qrUnknown:
      "Ce QR code n'est lié à aucun dossier dans ce jeu de données de démonstration.",
    qrNoCodeImage:
      "Aucun QR code lisible n'a été détecté dans l'image téléversée.",
    qrUnsupported:
      "Ce navigateur n'expose pas la détection native des QR codes. Utilisez un navigateur kiosque Chromium moderne sur localhost.",
    qrCameraDenied:
      "L'accès à la caméra n'a pas été accordé. Vous pouvez quand même tester avec une image QR enregistrée.",
    sampleQrs: "QR codes d'invitation d'exemple",
    sampleQrsLead:
      "Trois images QR locales de démonstration sont incluses pour Kris Beerts, Jari Rooman et Vincent Haemerlinck.",
    collectorTitleKnown: "Insérez votre ancien badge Legic",
    collectorLeadKnown:
      "Utilisateur confirmé : {name}. Insérez l'ancien badge Legic dans la fente portant l'étiquette Collector. La carte sera lue, collectée et ne sera pas rendue.",
    collectorTitleUnknown: "Collecte de l'ancien badge Legic",
    collectorLeadUnknown:
      "Insérez l'ancien badge Legic dans la fente portant l'étiquette Collector. Pour cette maquette, sélectionnez d'abord l'un des badges d'exemple.",
    sampleBadges: "Badges Legic d'exemple",
    selectDemoBadge: "Choisir le badge de démonstration",
    collectorStart: "Démarrer le collecteur",
    collectorRunning: "Le collecteur lit le badge...",
    collectorSelectRequired:
      "Sélectionnez d'abord un badge de démonstration pour le parcours sans QR code.",
    collectorSuccessKnown:
      "L'ancien badge Legic {badge} a été lu avec succès et correspond à {name}. Le badge a été collecté et ne sera pas rendu.",
    collectorSuccessUnknown:
      "L'ancien badge Legic {badge} a été lu avec succès pour {name}. Veuillez poursuivre avec la vérification d'identité.",
    collectorContinuePrint: "Continuer vers l'impression du badge",
    collectorContinueIdentity: "Continuer vers le contrôle d'identité",
    identityTitle: "Scanner la carte d'identité",
    identityLead:
      "Placez la carte d'identité sur le scanner. Pour cette maquette, saisissez le nom de famille exactement tel qu'il apparaît sur la carte d'identité de {name}.",
    identityRecord: "Dossier identifié via l'ancien badge",
    identityLabel: "Nom de famille sur la carte d'identité",
    identityButton: "Confirmer la carte d'identité",
    identityMismatch:
      "Le nom de famille scanné ne correspond pas au dossier lu depuis l'ancien badge.",
    printingTitle: "Impression et encodage de votre nouveau badge",
    printingLead:
      "Veuillez patienter pendant l'encodage, la personnalisation et le contrôle qualité de la Hybrid Card.",
    printPreparing: "Préparation de la carte vierge",
    printEncoding: "Encodage de la puce hybride",
    printPersonalizing: "Impression des informations employé",
    printSecuring: "Application de la couche de sécurité",
    printChecking: "Contrôle qualité final",
    printReady: "Votre nouveau badge est prêt à être retiré.",
    badgeRoleEmployee: "Employé",
    badgeType: "Hybrid Card",
    badgeNumber: "Numéro de badge",
    completionTitle: "Badge émis avec succès",
    completionBody:
      "{name}, votre nouveau badge a été imprimé et encodé. Veuillez le retirer du bac de sortie.",
    back: "Retour",
    startOver: "Recommencer",
    continue: "Continuer",
    returnStart: "Retour au début",
  },
};

const EMPLOYEES = [
  {
    id: "kris-beerts",
    firstName: "Kris",
    lastName: "Beerts",
    fullName: "Kris Beerts",
    qrPayload: "EWELCOME:EMP:KRIS-BEERTS:HB-02417",
    oldBadge: "LG-78124",
    newBadge: "HB-02417",
    department: "Security & Facilities",
    accent: "#0f5bb5",
    skin: "#f0c7a4",
    hair: "#425061",
    shirt: "#163d7a",
    qrFile: "./assets/qr-kris-beerts.png",
  },
  {
    id: "jari-rooman",
    firstName: "Jari",
    lastName: "Rooman",
    fullName: "Jari Rooman",
    qrPayload: "EWELCOME:EMP:JARI-ROOMAN:HB-02418",
    oldBadge: "LG-78125",
    newBadge: "HB-02418",
    department: "Digital Workplace",
    accent: "#5e6d80",
    skin: "#f2c39c",
    hair: "#6c4b3d",
    shirt: "#244f96",
    qrFile: "./assets/qr-jari-rooman.png",
  },
  {
    id: "vincent-haemerlinck",
    firstName: "Vincent",
    lastName: "Haemerlinck",
    fullName: "Vincent Haemerlinck",
    qrPayload: "EWELCOME:EMP:VINCENT-HAEMERLINCK:HB-02419",
    oldBadge: "LG-78126",
    newBadge: "HB-02419",
    department: "Identity Operations",
    accent: "#244f96",
    skin: "#f3c7b0",
    hair: "#3d2e2e",
    shirt: "#1a3561",
    qrFile: "./assets/qr-vincent-haemerlinck.png",
  },
];

for (const employee of EMPLOYEES) {
  employee.portrait = buildPortrait(employee);
}

function createInitialState() {
  return {
    language: null,
    stage: "language",
    history: [],
    selectedService: null,
    unavailableReason: null,
    hasQr: null,
    selectedUserId: null,
    qrStatus: "idle",
    qrMessage: "",
    qrLastRaw: "",
    collectorRunning: false,
    collectorProgress: 0,
    collectorComplete: false,
    collectorMessage: "",
    idLastName: "",
    idError: "",
    printRunning: false,
    printProgress: 0,
    printStepIndex: 0,
    printComplete: false,
  };
}

const state = createInitialState();

const runtime = {
  stream: null,
  detector: null,
  animationFrame: 0,
  detectBusy: false,
  lastHandledRaw: "",
  lastHandledAt: 0,
  collectorInterval: 0,
  printInterval: 0,
  scanCanvas: null,
  scanContext: null,
};

function t(key, vars = {}) {
  const locale = state.language || "en";
  const dictionary = COPY[locale] || COPY.en;
  const fallback = COPY.en[key] ?? key;
  const value = dictionary[key] ?? fallback;
  return interpolate(value, vars);
}

function interpolate(value, vars) {
  return String(value).replace(/\{(\w+)\}/g, (_, token) => {
    return vars[token] == null ? "" : String(vars[token]);
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getEmployee() {
  return EMPLOYEES.find((employee) => employee.id === state.selectedUserId) || null;
}

function getServiceLabel(service) {
  const keyMap = {
    new: "serviceNew",
    lost: "serviceLost",
    replacement: "serviceReplacement",
  };

  return t(keyMap[service] || "serviceNew");
}

function statusVariant(status) {
  if (status === "found") return "success";
  if (status === "not-found" || status === "camera-error" || status === "unsupported") {
    return "error";
  }

  if (status === "scanning") return "info";
  return "neutral";
}

function isBusy() {
  return state.collectorRunning || state.printRunning;
}

function snapshotState() {
  const snapshot = { ...state };
  delete snapshot.history;
  return JSON.parse(JSON.stringify(snapshot));
}

function pushHistory() {
  state.history.push(snapshotState());
}

function clearIntervals() {
  if (runtime.collectorInterval) {
    window.clearInterval(runtime.collectorInterval);
    runtime.collectorInterval = 0;
  }

  if (runtime.printInterval) {
    window.clearInterval(runtime.printInterval);
    runtime.printInterval = 0;
  }
}

function stopCamera() {
  if (runtime.animationFrame) {
    window.cancelAnimationFrame(runtime.animationFrame);
    runtime.animationFrame = 0;
  }

  if (runtime.stream) {
    for (const track of runtime.stream.getTracks()) {
      track.stop();
    }
  }

  runtime.stream = null;
  runtime.detectBusy = false;
}

function leaveCurrentFlow(nextStage) {
  if (state.stage === "qr" && nextStage !== "qr") {
    stopCamera();
  }

  if (state.stage === "collector" && nextStage !== "collector") {
    clearIntervals();
  }

  if (state.stage === "printing" && nextStage !== "printing") {
    clearIntervals();
  }
}

function goTo(stage, patch = {}, options = {}) {
  const { push = true } = options;

  if (push) {
    pushHistory();
  }

  leaveCurrentFlow(stage);

  Object.assign(state, patch, { stage });
  render();
}

function restorePrevious() {
  if (!state.history.length || isBusy()) {
    return;
  }

  leaveCurrentFlow("history");

  const history = state.history;
  const snapshot = history.pop();

  Object.assign(state, createInitialState(), snapshot);
  state.history = history;

  render();
}

function resetSession() {
  leaveCurrentFlow("reset");
  Object.assign(state, createInitialState());
  render();
}

function selectLanguage(code) {
  state.language = code;
  goTo("persona", { language: code, qrMessage: "" }, { push: false });
}

function selectPersona(type) {
  if (type === "visitor") {
    goTo("unavailable", {
      unavailableReason: "visitor",
      selectedService: null,
    });
    return;
  }

  goTo("service", {
    unavailableReason: null,
  });
}

function selectService(service) {
  if (service === "new") {
    goTo("invite", {
      selectedService: service,
      unavailableReason: null,
      hasQr: null,
      selectedUserId: null,
      qrStatus: "idle",
      qrMessage: "",
      collectorRunning: false,
      collectorProgress: 0,
      collectorComplete: false,
      collectorMessage: "",
      idLastName: "",
      idError: "",
      printRunning: false,
      printProgress: 0,
      printStepIndex: 0,
      printComplete: false,
    });
    return;
  }

  goTo("unavailable", {
    unavailableReason: service,
    selectedService: service,
  });
}

function chooseInvitationPath(hasQr) {
  if (hasQr) {
    goTo("qr", {
      hasQr: true,
      selectedUserId: null,
      qrStatus: "idle",
      qrMessage: "",
      qrLastRaw: "",
    });
    return;
  }

  goTo("collector", {
    hasQr: false,
    selectedUserId: null,
    collectorRunning: false,
    collectorProgress: 0,
    collectorComplete: false,
    collectorMessage: "",
    idLastName: "",
    idError: "",
  });
}

async function startQrCamera() {
  const hasNativeDetector = "BarcodeDetector" in window;
  const hasJsQr = typeof window.jsQR === "function";

  if (!hasNativeDetector && !hasJsQr) {
    state.qrStatus = "unsupported";
    state.qrMessage = t("qrUnsupported");
    render();
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    state.qrStatus = "camera-error";
    state.qrMessage = t("qrCameraDenied");
    render();
    return;
  }

  runtime.detector = null;

  if (hasNativeDetector) {
    try {
      runtime.detector = new BarcodeDetector({ formats: ["qr_code"] });
    } catch (error) {
      runtime.detector = null;
    }
  }

  try {
    runtime.stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    });

    state.qrStatus = "scanning";
    state.qrMessage = t("qrActive");
    render();
    attachVideoStream();
    runQrLoop();
  } catch (error) {
    state.qrStatus = "camera-error";
    state.qrMessage = t("qrCameraDenied");
    render();
  }
}

function attachVideoStream() {
  const video = document.getElementById("qr-video");
  if (!video || !runtime.stream) {
    return;
  }

  video.srcObject = runtime.stream;
  video.play().catch(() => {});
}

function shouldHandleRaw(rawValue) {
  const raw = String(rawValue || "").trim();
  if (!raw) {
    return false;
  }

  const now = Date.now();
  if (raw === runtime.lastHandledRaw && now - runtime.lastHandledAt < 2000) {
    return false;
  }

  runtime.lastHandledRaw = raw;
  runtime.lastHandledAt = now;
  return true;
}

function runQrLoop() {
  runtime.animationFrame = window.requestAnimationFrame(scanQrFrame);
}

async function scanQrFrame() {
  if (!runtime.stream || state.stage !== "qr" || state.qrStatus !== "scanning") {
    return;
  }

  const video = document.getElementById("qr-video");

  if (!video || video.readyState < 2) {
    runQrLoop();
    return;
  }

  if (runtime.detectBusy) {
    runQrLoop();
    return;
  }

  runtime.detectBusy = true;

  try {
    const barcodes = await detectQrFromSource(video);
    if (barcodes.length > 0) {
      const rawValue = barcodes[0].rawValue || "";
      if (shouldHandleRaw(rawValue)) {
        handleQrPayload(rawValue);
      }
    }
  } catch (error) {
    // Ignore transient detector errors and keep the live scanner running.
  } finally {
    runtime.detectBusy = false;
  }

  if (runtime.stream && state.stage === "qr" && state.qrStatus === "scanning") {
    runQrLoop();
  }
}

function stopQrCamera() {
  stopCamera();
  state.qrStatus = "idle";
  state.qrMessage = t("qrIdle");
  render();
}

async function scanUploadedQr(file) {
  if (!file) {
    return;
  }

  if (!("BarcodeDetector" in window) && typeof window.jsQR !== "function") {
    state.qrStatus = "unsupported";
    state.qrMessage = t("qrUnsupported");
    render();
    return;
  }

  try {
    const bitmap = await createImageBitmap(file);
    const barcodes = await detectQrFromSource(bitmap);

    if (!barcodes.length) {
      state.qrStatus = "not-found";
      state.qrMessage = t("qrNoCodeImage");
      render();
      return;
    }

    handleQrPayload(barcodes[0].rawValue || "");
  } catch (error) {
    state.qrStatus = "not-found";
    state.qrMessage = t("qrNoCodeImage");
    render();
  }
}

function getSourceSize(source) {
  if (!source) {
    return { width: 0, height: 0 };
  }

  if ("videoWidth" in source && "videoHeight" in source) {
    return { width: source.videoWidth, height: source.videoHeight };
  }

  if ("naturalWidth" in source && "naturalHeight" in source) {
    return { width: source.naturalWidth, height: source.naturalHeight };
  }

  return { width: source.width || 0, height: source.height || 0 };
}

function ensureScanCanvas(width, height) {
  if (!runtime.scanCanvas) {
    runtime.scanCanvas = document.createElement("canvas");
    runtime.scanContext = runtime.scanCanvas.getContext("2d", {
      willReadFrequently: true,
    });
  }

  if (runtime.scanCanvas.width !== width) {
    runtime.scanCanvas.width = width;
  }

  if (runtime.scanCanvas.height !== height) {
    runtime.scanCanvas.height = height;
  }

  return runtime.scanContext;
}

function detectWithJsQr(source) {
  if (typeof window.jsQR !== "function") {
    return [];
  }

  const { width, height } = getSourceSize(source);
  if (!width || !height) {
    return [];
  }

  const context = ensureScanCanvas(width, height);
  context.clearRect(0, 0, width, height);
  context.drawImage(source, 0, 0, width, height);

  const imageData = context.getImageData(0, 0, width, height);
  const result = window.jsQR(imageData.data, width, height, {
    inversionAttempts: "attemptBoth",
  });

  return result ? [{ rawValue: result.data }] : [];
}

async function detectQrFromSource(source) {
  if (runtime.detector) {
    try {
      const nativeDetections = await runtime.detector.detect(source);
      if (nativeDetections.length) {
        return nativeDetections;
      }
    } catch (error) {
      // Fall back to jsQR below when native detection is unavailable or incomplete.
    }
  }

  return detectWithJsQr(source);
}

function handleQrPayload(rawValue) {
  const payload = String(rawValue || "").trim();
  const employee = EMPLOYEES.find((entry) => entry.qrPayload === payload);

  state.qrLastRaw = payload;

  if (!employee) {
    state.qrStatus = "not-found";
    state.qrMessage = t("qrUnknown");
    render();
    attachVideoStream();
    return;
  }

  stopCamera();

  state.selectedUserId = employee.id;
  state.qrStatus = "found";
  state.qrMessage = t("qrFoundBody", { name: employee.fullName });
  render();
}

function beginCollector() {
  if (!state.hasQr && !state.selectedUserId) {
    state.collectorMessage = t("collectorSelectRequired");
    render();
    return;
  }

  state.collectorRunning = true;
  state.collectorComplete = false;
  state.collectorProgress = 0;
  state.collectorMessage = t("collectorRunning");
  render();

  const durationMs = 7000;
  const startedAt = Date.now();

  runtime.collectorInterval = window.setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const progress = Math.min(100, Math.round((elapsed / durationMs) * 100));
    state.collectorProgress = progress;

    if (progress >= 100) {
      window.clearInterval(runtime.collectorInterval);
      runtime.collectorInterval = 0;
      finishCollector();
    }

    render();
  }, 120);
}

function finishCollector() {
  const employee = getEmployee();
  if (!employee) {
    return;
  }

  state.collectorRunning = false;
  state.collectorComplete = true;
  state.collectorProgress = 100;
  state.collectorMessage = state.hasQr
    ? t("collectorSuccessKnown", {
        badge: employee.oldBadge,
        name: employee.fullName,
      })
    : t("collectorSuccessUnknown", {
        badge: employee.oldBadge,
        name: employee.fullName,
      });
}

function continueAfterCollector() {
  if (state.hasQr) {
    startPrinting();
    return;
  }

  goTo("identity", {
    idLastName: "",
    idError: "",
  });
}

function verifyIdentityCard() {
  const employee = getEmployee();
  if (!employee) {
    return;
  }

  const typed = normalizeText(state.idLastName);
  const expected = normalizeText(employee.lastName);

  if (!typed || typed !== expected) {
    state.idError = t("identityMismatch");
    render();
    return;
  }

  state.idError = "";
  startPrinting();
}

function startPrinting() {
  goTo(
    "printing",
    {
      printRunning: true,
      printProgress: 0,
      printStepIndex: 0,
      printComplete: false,
    },
    { push: true }
  );

  const durationMs = 8500;
  const startedAt = Date.now();

  runtime.printInterval = window.setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const progress = Math.min(100, Math.round((elapsed / durationMs) * 100));
    const stepIndex = Math.min(
      PRINT_STEP_KEYS.length - 1,
      Math.floor((progress / 100) * PRINT_STEP_KEYS.length)
    );

    state.printProgress = progress;
    state.printStepIndex = stepIndex;

    if (progress >= 100) {
      window.clearInterval(runtime.printInterval);
      runtime.printInterval = 0;
      state.printRunning = false;
      state.printComplete = true;
      state.printStepIndex = PRINT_STEP_KEYS.length - 1;
    }

    render();
  }, 140);
}

function render() {
  document.documentElement.lang = state.language || "en";

  app.innerHTML = `
    <div class="app-shell">
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>
      <div class="ambient ambient-three"></div>
      <header class="topbar">
        <div class="brand-block">
          <div class="brand-mark">
            <img src="./assets/eib-logo.png" alt="EIB Group logo" />
          </div>
          <div class="brand-copy">
            <span class="eyebrow">${escapeHtml(t("chromeLabel"))}</span>
            <div class="brand-title-row">
              <h1>${escapeHtml(t("appTitle"))}</h1>
              <span class="divider"></span>
              <p>${escapeHtml(t("appSubtitle"))}</p>
            </div>
          </div>
        </div>
        <div class="topbar-tools">
          ${state.language ? `<span class="language-pill">${escapeHtml(getLanguageLabel(state.language))}</span>` : ""}
          ${
            state.stage !== "language"
              ? `<button class="ghost-button" data-action="start-over">${escapeHtml(t("startOver"))}</button>`
              : ""
          }
        </div>
      </header>
      <main class="stage-frame">
        <section class="stage-card">
          ${renderStage()}
        </section>
      </main>
    </div>
  `;

  attachVideoStream();
}

function renderStage() {
  return `
    <div class="stage-head">
      <div class="stage-dot"></div>
      <span>${escapeHtml(t("appTitle"))}</span>
    </div>
    <div class="stage-body">
      ${renderStageBody()}
    </div>
    ${renderActions()}
  `;
}

function renderStageBody() {
  switch (state.stage) {
    case "language":
      return renderLanguageStage();
    case "persona":
      return renderPersonaStage();
    case "service":
      return renderServiceStage();
    case "unavailable":
      return renderUnavailableStage();
    case "invite":
      return renderInviteStage();
    case "qr":
      return renderQrStage();
    case "collector":
      return renderCollectorStage();
    case "identity":
      return renderIdentityStage();
    case "printing":
      return renderPrintingStage();
    default:
      return "";
  }
}

function renderActions() {
  const showBack = state.stage !== "language";
  const allowBack = showBack && !isBusy();

  return `
    <div class="stage-actions ${showBack ? "" : "is-hidden"}">
      ${
        showBack
          ? `<button class="ghost-button" data-action="back" ${allowBack ? "" : "disabled"}>${escapeHtml(t("back"))}</button>`
          : ""
      }
    </div>
  `;
}

function renderLanguageStage() {
  return `
    <div class="hero-block">
      <div class="hero-copy">
        <h2>${escapeHtml(t("languageTitle"))}</h2>
        <p>${escapeHtml(t("languageLead"))}</p>
      </div>
      <div class="language-grid">
        ${LANGUAGE_OPTIONS.map(
          (language) => `
            <button class="choice-card language-card" data-action="select-language" data-language="${escapeHtml(language.code)}">
              <span class="flag" aria-hidden="true">${renderFlag(language.code)}</span>
              <span class="choice-title">${escapeHtml(language.label)}</span>
            </button>
          `
        ).join("")}
      </div>
    </div>
  `;
}

function renderPersonaStage() {
  return `
    <div class="hero-block">
      <div class="hero-copy">
        <h2>${escapeHtml(t("personaTitle"))}</h2>
        <p>${escapeHtml(t("personaLead"))}</p>
      </div>
      <div class="two-column-grid">
        <button class="choice-card persona-card" data-action="persona" data-persona="visitor">
          <span class="choice-kicker">01</span>
          <span class="choice-title">${escapeHtml(t("visitor"))}</span>
        </button>
        <button class="choice-card persona-card is-primary" data-action="persona" data-persona="employee">
          <span class="choice-kicker">02</span>
          <span class="choice-title">${escapeHtml(t("employeeContractor"))}</span>
        </button>
      </div>
    </div>
  `;
}

function renderServiceStage() {
  return `
    <div class="hero-block">
      <div class="hero-copy">
        <h2>${escapeHtml(t("serviceTitle"))}</h2>
        <p>${escapeHtml(t("serviceLead"))}</p>
      </div>
      <div class="service-grid">
        ${renderServiceChoice("new", "01", "serviceNew", "serviceNewHint", true)}
        ${renderServiceChoice("lost", "02", "serviceLost", "serviceLostHint", false)}
        ${renderServiceChoice("replacement", "03", "serviceReplacement", "serviceReplacementHint", false)}
      </div>
    </div>
  `;
}

function renderServiceChoice(service, order, titleKey, hintKey, primary) {
  return `
    <button class="choice-card service-card ${primary ? "is-primary" : ""}" data-action="service" data-service="${service}">
      <span class="choice-kicker">${order}</span>
      <span class="choice-title">${escapeHtml(t(titleKey))}</span>
      <span class="choice-note">${escapeHtml(t(hintKey))}</span>
    </button>
  `;
}

function renderUnavailableStage() {
  const visitorFlow = state.unavailableReason === "visitor";
  const body = visitorFlow
    ? t("unavailableVisitorBody")
    : t("unavailableServiceBody", {
        service: getServiceLabel(state.unavailableReason),
      });

  return `
    <div class="message-block">
      <div class="message-card warning-card">
        <h2>${escapeHtml(t("unavailableTitle"))}</h2>
        <p>${escapeHtml(body)}</p>
      </div>
      <button class="primary-button" data-action="start-over">${escapeHtml(t("returnStart"))}</button>
    </div>
  `;
}

function renderInviteStage() {
  return `
    <div class="hero-block">
      <div class="hero-copy">
        <h2>${escapeHtml(t("inviteTitle"))}</h2>
        <p>${escapeHtml(t("inviteLead"))}</p>
      </div>
      <div class="two-column-grid">
        <button class="choice-card is-primary" data-action="invitation" data-has-qr="yes">
          <span class="choice-title">${escapeHtml(t("inviteYes"))}</span>
        </button>
        <button class="choice-card" data-action="invitation" data-has-qr="no">
          <span class="choice-title">${escapeHtml(t("inviteNo"))}</span>
        </button>
      </div>
    </div>
  `;
}

function renderQrStage() {
  const employee = getEmployee();

  return `
    <div class="panel-grid">
      <article class="panel">
        <div class="panel-copy">
          <h2>${escapeHtml(t("qrTitle"))}</h2>
          <p>${escapeHtml(t("qrLead"))}</p>
        </div>
        <div class="status-banner is-${statusVariant(state.qrStatus)}">
          <strong>${escapeHtml(state.qrStatus === "found" ? t("qrFoundHeading") : t("serviceNew"))}</strong>
          <span>${escapeHtml(state.qrMessage || t("qrIdle"))}</span>
        </div>
        <div class="scanner-shell">
          <div class="scanner-frame">
            <video id="qr-video" autoplay playsinline muted></video>
            <div class="scanner-target">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="scanner-tools">
            ${
              state.qrStatus === "scanning"
                ? `<button class="secondary-button" data-action="stop-camera">${escapeHtml(t("qrStopCamera"))}</button>`
                : `<button class="primary-button" data-action="start-camera">${escapeHtml(t("qrStartCamera"))}</button>`
            }
            <label class="upload-button">
              <input id="qr-upload" type="file" accept="image/*" />
              <span>${escapeHtml(t("qrUpload"))}</span>
            </label>
          </div>
        </div>
        ${
          employee && state.qrStatus === "found"
            ? `
              <div class="confirmation-card">
                <strong>${escapeHtml(employee.fullName)}</strong>
                <p>${escapeHtml(t("qrFoundBody", { name: employee.fullName }))}</p>
                <button class="primary-button" data-action="continue-after-qr">${escapeHtml(t("continue"))}</button>
              </div>
            `
            : ""
        }
      </article>
      <aside class="panel sample-panel">
        <div class="panel-copy">
          <h3>${escapeHtml(t("sampleQrs"))}</h3>
          <p>${escapeHtml(t("sampleQrsLead"))}</p>
        </div>
        <div class="sample-grid">
          ${EMPLOYEES.map(
            (employee) => `
              <article class="sample-card">
                <img src="${employee.qrFile}" alt="QR code for ${escapeHtml(employee.fullName)}" />
                <div>
                  <strong>${escapeHtml(employee.fullName)}</strong>
                  <span>${escapeHtml(employee.newBadge)}</span>
                </div>
              </article>
            `
          ).join("")}
        </div>
      </aside>
    </div>
  `;
}

function renderCollectorStage() {
  const employee = getEmployee();
  const title = state.hasQr ? t("collectorTitleKnown") : t("collectorTitleUnknown");
  const lead = state.hasQr
    ? t("collectorLeadKnown", { name: employee ? employee.fullName : "" })
    : t("collectorLeadUnknown");

  return `
    <div class="panel-grid">
      <article class="panel">
        <div class="panel-copy">
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(lead)}</p>
        </div>
        <div class="collector-machine">
          <div class="machine-top">
            <span class="machine-chip">Collector</span>
            <strong>EIB Badge Return</strong>
          </div>
          <div class="collector-slot">
            <span>Collector</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${state.collectorProgress}%"></div>
          </div>
          <div class="machine-status">
            ${escapeHtml(state.collectorMessage || (state.hasQr ? t("collectorLeadKnown", { name: employee ? employee.fullName : "" }) : t("collectorLeadUnknown")))}
          </div>
        </div>
        <div class="collector-tools">
          <button class="primary-button" data-action="start-collector" ${state.collectorRunning ? "disabled" : ""}>${escapeHtml(t("collectorStart"))}</button>
          ${
            state.collectorComplete
              ? `<button class="secondary-button" data-action="continue-after-collector">${escapeHtml(state.hasQr ? t("collectorContinuePrint") : t("collectorContinueIdentity"))}</button>`
              : ""
          }
        </div>
      </article>
      <aside class="panel sample-panel">
        ${
          state.hasQr
            ? employee
              ? `
                <div class="panel-copy">
                  <h3>${escapeHtml(employee.fullName)}</h3>
                  <p>${escapeHtml(employee.department)}</p>
                </div>
                ${renderBadgeIdentity(employee)}
              `
              : ""
            : `
                <div class="panel-copy">
                  <h3>${escapeHtml(t("sampleBadges"))}</h3>
                  <p>${escapeHtml(t("selectDemoBadge"))}</p>
                </div>
                <div class="sample-grid">
                  ${EMPLOYEES.map(
                    (entry) => `
                      <button class="sample-card sample-badge ${state.selectedUserId === entry.id ? "is-selected" : ""}" data-action="select-demo-badge" data-employee="${entry.id}">
                        <div class="sample-badge-top">
                          <strong>${escapeHtml(entry.fullName)}</strong>
                          <span>${escapeHtml(entry.oldBadge)}</span>
                        </div>
                        <span>${escapeHtml(entry.department)}</span>
                      </button>
                    `
                  ).join("")}
                </div>
              `
        }
      </aside>
    </div>
  `;
}

function renderIdentityStage() {
  const employee = getEmployee();

  return `
    <div class="message-block">
      <div class="identity-layout">
        <div class="panel">
          <div class="panel-copy">
            <h2>${escapeHtml(t("identityTitle"))}</h2>
            <p>${escapeHtml(t("identityLead", { name: employee ? employee.fullName : "" }))}</p>
          </div>
          <div class="record-card">
            <span class="record-label">${escapeHtml(t("identityRecord"))}</span>
            <strong>${escapeHtml(employee ? employee.fullName : "")}</strong>
            <span>${escapeHtml(employee ? employee.oldBadge : "")}</span>
          </div>
          <label class="field-label" for="identity-last-name">${escapeHtml(t("identityLabel"))}</label>
          <input id="identity-last-name" class="text-input" type="text" value="${escapeHtml(state.idLastName)}" autocomplete="off" />
          ${
            state.idError
              ? `<div class="status-banner is-error"><strong>${escapeHtml(t("identityTitle"))}</strong><span>${escapeHtml(state.idError)}</span></div>`
              : ""
          }
          <button class="primary-button" data-action="verify-identity">${escapeHtml(t("identityButton"))}</button>
        </div>
        ${employee ? renderBadgeIdentity(employee) : ""}
      </div>
    </div>
  `;
}

function renderPrintingStage() {
  const employee = getEmployee();

  return `
    <div class="panel-grid">
      <article class="panel">
        <div class="panel-copy">
          <h2>${escapeHtml(state.printComplete ? t("completionTitle") : t("printingTitle"))}</h2>
          <p>${escapeHtml(state.printComplete ? t("completionBody", { name: employee ? employee.fullName : "" }) : t("printingLead"))}</p>
        </div>
        <div class="print-progress">
          <div class="progress-track large">
            <div class="progress-fill" style="width: ${state.printProgress}%"></div>
          </div>
          <div class="progress-meta">
            <span>${escapeHtml(state.printComplete ? t("printReady") : t(PRINT_STEP_KEYS[state.printStepIndex]))}</span>
            <strong>${state.printProgress}%</strong>
          </div>
        </div>
        <div class="step-list">
          ${PRINT_STEP_KEYS.map((key, index) => {
            const classes = [
              "step-row",
              index < state.printStepIndex || (state.printComplete && index <= state.printStepIndex)
                ? "is-complete"
                : "",
              !state.printComplete && index === state.printStepIndex ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return `
              <div class="${classes}">
                <span class="step-index">0${index + 1}</span>
                <span>${escapeHtml(t(key))}</span>
              </div>
            `;
          }).join("")}
        </div>
        ${
          state.printComplete
            ? `<button class="primary-button" data-action="start-over">${escapeHtml(t("returnStart"))}</button>`
            : ""
        }
      </article>
      <aside class="panel badge-panel">
        ${employee ? renderFinalBadge(employee) : ""}
      </aside>
    </div>
  `;
}

function renderBadgeIdentity(employee) {
  return `
    <div class="identity-preview">
      <img class="portrait" src="${employee.portrait}" alt="Portrait of ${escapeHtml(employee.fullName)}" />
      <div class="identity-details">
        <strong>${escapeHtml(employee.fullName)}</strong>
        <span>${escapeHtml(employee.department)}</span>
        <span>${escapeHtml(employee.oldBadge)} -> ${escapeHtml(employee.newBadge)}</span>
      </div>
    </div>
  `;
}

function renderFinalBadge(employee) {
  return `
    <div class="badge-card ${state.printComplete ? "is-ready" : "is-printing"}">
      <div class="badge-header">
        <img src="./assets/eib-logo.png" alt="EIB Group logo" />
        <div class="badge-header-copy">
          <span>${escapeHtml(t("appTitle"))}</span>
          <strong>${escapeHtml(t("badgeRoleEmployee"))}</strong>
        </div>
      </div>
      <div class="badge-body">
        <img class="portrait" src="${employee.portrait}" alt="Portrait of ${escapeHtml(employee.fullName)}" />
        <div class="badge-copy">
          <span class="badge-type">${escapeHtml(t("badgeType"))}</span>
          <strong class="badge-name">${escapeHtml(employee.firstName)}</strong>
          <strong class="badge-name">${escapeHtml(employee.lastName)}</strong>
          <span class="badge-number-label">${escapeHtml(t("badgeNumber"))}</span>
          <span class="badge-number-value">${escapeHtml(employee.newBadge)}</span>
        </div>
      </div>
      <div class="badge-footer">
        <span>${escapeHtml(employee.department)}</span>
        <span>${escapeHtml(t("appTitle"))}</span>
      </div>
    </div>
  `;
}

function getLanguageLabel(code) {
  const language = LANGUAGE_OPTIONS.find((entry) => entry.code === code);
  return language ? language.label : "English";
}

function renderFlag(code) {
  const flags = {
    en: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#113f8a" />
        <path d="M0 8 8 0l56 56-8 8Z" fill="#fff" />
        <path d="M56 0 64 8 8 64 0 56Z" fill="#fff" />
        <path d="M0 14 14 0l50 50-14 14Z" fill="#d7334a" />
        <path d="M50 0 64 14 14 64 0 50Z" fill="#d7334a" />
        <rect x="24" width="16" height="64" fill="#fff" />
        <rect y="24" width="64" height="16" fill="#fff" />
        <rect x="27" width="10" height="64" fill="#d7334a" />
        <rect y="27" width="64" height="10" fill="#d7334a" />
      </svg>
    `,
    de: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#101010" />
        <rect y="21.33" width="64" height="21.34" fill="#c2283b" />
        <rect y="42.67" width="64" height="21.33" rx="0 0 14 14" fill="#f3c42f" />
      </svg>
    `,
    nl: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#b6283f" />
        <rect y="21.33" width="64" height="21.34" fill="#ffffff" />
        <rect y="42.67" width="64" height="21.33" rx="0 0 14 14" fill="#21468b" />
      </svg>
    `,
    fr: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#1f4ca3" />
        <rect x="21.33" width="21.34" height="64" fill="#ffffff" />
        <rect x="42.67" width="21.33" height="64" rx="0 14 14 0" fill="#d63a4f" />
      </svg>
    `,
  };

  return flags[code] || flags.en;
}

function buildPortrait(employee) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 380" role="img" aria-label="${escapeHtml(employee.fullName)} portrait">
      <defs>
        <linearGradient id="bg-${employee.id}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${employee.accent}" />
          <stop offset="100%" stop-color="#d9e4f5" />
        </linearGradient>
      </defs>
      <rect width="320" height="380" rx="32" fill="url(#bg-${employee.id})" />
      <circle cx="160" cy="118" r="66" fill="${employee.hair}" />
      <circle cx="160" cy="126" r="56" fill="${employee.skin}" />
      <path d="M96 356c16-74 53-111 64-111 11 0 48 37 64 111Z" fill="${employee.shirt}" />
      <path d="M118 260c10 22 28 34 42 34 14 0 32-12 42-34v22c0 21-18 39-42 39s-42-18-42-39Z" fill="${employee.skin}" />
      <path d="M116 140c8 8 18 12 28 12 18 0 30-10 41-22 12 9 25 13 39 13 12 0 22-3 30-10-4-44-33-77-69-77-42 0-69 31-69 84Z" fill="${employee.hair}" opacity="0.96" />
      <circle cx="140" cy="130" r="4.5" fill="#253449" />
      <circle cx="180" cy="130" r="4.5" fill="#253449" />
      <path d="M143 165c8 8 26 8 34 0" fill="none" stroke="#844d46" stroke-linecap="round" stroke-width="5" />
      <path d="M130 110c8-8 18-11 28-9" fill="none" stroke="#253449" stroke-linecap="round" stroke-width="5" />
      <path d="M165 101c11-2 22 1 29 9" fill="none" stroke="#253449" stroke-linecap="round" stroke-width="5" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

app.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) {
    return;
  }

  const action = trigger.dataset.action;

  if (action === "select-language") {
    selectLanguage(trigger.dataset.language);
    return;
  }

  if (action === "persona") {
    selectPersona(trigger.dataset.persona);
    return;
  }

  if (action === "service") {
    selectService(trigger.dataset.service);
    return;
  }

  if (action === "invitation") {
    chooseInvitationPath(trigger.dataset.hasQr === "yes");
    return;
  }

  if (action === "start-camera") {
    startQrCamera();
    return;
  }

  if (action === "stop-camera") {
    stopQrCamera();
    return;
  }

  if (action === "continue-after-qr") {
    goTo("collector", {
      collectorRunning: false,
      collectorProgress: 0,
      collectorComplete: false,
      collectorMessage: "",
    });
    return;
  }

  if (action === "select-demo-badge") {
    state.selectedUserId = trigger.dataset.employee;
    state.collectorMessage = "";
    render();
    return;
  }

  if (action === "start-collector") {
    beginCollector();
    return;
  }

  if (action === "continue-after-collector") {
    continueAfterCollector();
    return;
  }

  if (action === "verify-identity") {
    verifyIdentityCard();
    return;
  }

  if (action === "start-over") {
    resetSession();
    return;
  }

  if (action === "back") {
    restorePrevious();
  }
});

app.addEventListener("change", (event) => {
  if (event.target.id === "qr-upload") {
    scanUploadedQr(event.target.files[0]);
    event.target.value = "";
    return;
  }

  if (event.target.id === "identity-last-name") {
    state.idLastName = event.target.value;
  }
});

app.addEventListener("input", (event) => {
  if (event.target.id === "identity-last-name") {
    state.idLastName = event.target.value;
    if (state.idError) {
      state.idError = "";
      render();
    }
  }
});

render();
