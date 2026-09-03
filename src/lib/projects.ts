export type Project = {
  slug: string;
  image: string;
  title: string;
  tagline: string;
  text: string;
  detail: string;
  accent: "maroon" | "navy";
  video?: string;
  poem?: string;
  subProjects?: {
    position: "left" | "middle" | "right";
    image: string;
    title: string;
    text: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "die-7-seelen",
    image:
      "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/e9ccec662_ChatGPTImage29Aug202620_23_33.png",
    title: "Die 7 Seelen",
    tagline: "Eine Stimme für SternenVäter",
    text: "Ein Projekt, das Vätern eine Stimme gibt, die einen Verlust erlebt haben – und Raum schafft, Trauer und Verbindung sichtbar zu machen.",
    detail:
      "„Die 7 Seelen“ ist ein Raum für Männer und Väter, die den Verlust eines Kindes erlebt haben. Oft bleibt die Trauer von Vätern unsichtbar – dieses Projekt gibt ihr eine Stimme, schafft Begegnung mit anderen Betroffenen und hilft, Trauer, Verbindung und Heilung sichtbar zu machen.",
    accent: "maroon",
    video:
      "https://twffopnohdndyzhmmgag.supabase.co/storage/v1/object/public/videos/Die7Seelen_Kurzvideo_Webseite.mp4",
  },
  {
    slug: "mann-weib-in-einigkeit",
    image:
      "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/516b652c8_ChatGPTImage29Aug202620_29_04.png",
    title: "Mann & Weib in Einigkeit",
    tagline: "Verbindung und Miteinander",
    text: "Ein Projekt rund um Beziehung, Begegnung und das Zusammenspiel von Ich, Du und Wir – für mehr Verständnis zwischen Menschen.",
    detail:
      "Ein bewussteres Miteinander zwischen Mann, Weib und den kommenden Generationen. Das Projekt öffnet Raum für Begegnung, ehrlichen Austausch und ein tieferes Verständnis zwischen den Polaritäten – für mehr Einigkeit in Beziehung und Gemeinschaft.",
    accent: "maroon",
    video:
      "https://twffopnohdndyzhmmgag.supabase.co/storage/v1/object/public/videos/Mann_und_Weib_final_neue_saubere_Tonspur.mp4",
  },
  {
    slug: "klangvoll-leben",
    image:
      "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/8a5555abd_ChatGPTImage29Aug202620_39_18.png",
    title: "Klangvoll leben",
    tagline: "Klang · Frequenz · Liebe",
    text: "Achtsame Begleitung mit Klang und Klangschalen für mehr Harmonie im Leben – initiiert und geleitet von Karen Hagen.",
    detail:
      "Ein Raum zum Lauschen, Wahrnehmen und bei sich Ankommen. Mit Klang, Frequenz und Klangschalen begleitet Karen Hagen Menschen dabei, wieder in Harmonie mit sich selbst zu kommen – in Einzelsitzungen und gemeinsamen Klangreisen.",
    accent: "maroon",
    video:
      "https://twffopnohdndyzhmmgag.supabase.co/storage/v1/object/public/videos/Klangvoll_leben_Webvideo_mit_Logo.mp4",
    poem:
      "♡ Wenn Klang dich wieder nach Hause führt ♡\n\nNeben den vielen Alltagsfrequenzen wie Handystrahlen, W-lan, Radio, Funktürme, negative Sprache und Gedanken, ....\nist es um so wichtiger deinen Körper  in die lebendigen Frequenzen und in deine eigene Schwingung zu helfen. Wie ein Orchester, das hormonische Komositionen spielt.\n♡ In deinen Einklang ♡ Dein inneres Heim ♡\n\nManche Menschen empfinden während einer Klangreise tiefe Entspannung. Andere spüren Wärme, Weite, ein sanftes Kribbeln oder werden von unerwarteten Gefühlen berührt. Manchmal entsteht einfach nur eine tiefe Stille.\n\nNach einer Klangbehandlung beschreiben viele Menschen ein Gefühl von Leichtigkeit, Klarheit und tieferer Verbundenheit mit sich selbst. Manche fühlen sich geerdet und geborgen, andere beschreiben es wie ein inneres Aufatmen oder einen kleinen Reset.\n\nVielleicht ist es genau das, wonach du dich im Alltag so oft sehnst:\n\n♡ Zurück zu dir ♡\nManchmal braucht es keinen weiteren Gedanken.\nKeine Erklärung. Kein Tun.\n\nPlanetenklangschalen sind besondere Begleiter auf dieser Reise. Ihre Frequenzen orientieren sich an den natürlichen Rhythmen von Erde, Mond und Planeten. Jede Schale trägt ihre eigene Klangqualität.\nManche Frequenzen erden, andere öffnen, lösen, tragen oder schenken Weite.\n\nDie feinen Schwingungen werden nicht nur gehört, sie werden im ganzen Körper spürbar. Wie sanfte Wellen, die durch dich hindurchschwingen und dich einladen, für einen Augenblick nichts leisten zu müssen.\n\n♡ Schließe deine Augen.\n♡ Atme.\n♡ Spüre\n\nUnd vielleicht geschieht etwas ganz Leises:\n\n♡ Du hörst wieder dich selbst. ♡\n\nIn liebevoller Begleitung\nKaren ♡ Klangvoll leben",
    subProjects: [
      {
        position: "left",
        image:
          "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/5f4461743_7b112bd39_ChatGPTImage3Sept202616_07_18.png",
        title: "Planetenklangschalenmassage",
        text:
          "♡ Planetenklangschalenmassage, wohltuende Schwingungen für Körper und Geist ♡\nBei einer Planetenklangschalenmassage werden ausgewählte Klangschalen behutsam auf verschiedene Bereiche des bekleideten Körpers gestellt und sanft zum Schwingen gebracht.\nDas Besondere an Planetenklangschalen ist ihre ausgemessene Frequenz. Diese wird einem bestimmten Planetenton zugeordnet und trägt eine eigene Klangqualität in sich. Je nach persönlichem Bedürfnis und Körperbereich wähle ich die Schalen achtsam und individuell für dich aus.\nDie feinen Vibrationen breiten sich vom Auflagepunkt aus wie sanfte Wellen im Körper aus. Sie werden nicht nur gehört, sondern können bis in die Tiefe wahrgenommen werden. Ihr harmonisches Zusammenspiel lädt den Körper dazu ein, Anspannung loszulassen, während der Atem ruhiger und die Gedanken leiser werden dürfen.\nManche Klänge vermitteln Erdung und Geborgenheit. Andere werden als öffnend, stärkend oder wohltuend weit erlebt. So entsteht ein geschützter Raum, in dem Körper und Geist zur Ruhe kommen und du dich selbst wieder bewusster spüren darfst.\nEine liebevolle Auszeit, die dich dabei unterstützen kann, Stress loszulassen, neue Kraft zu schöpfen und wieder ganz bei dir anzukommen.\n♡ Spüren. Loslassen. In dir nachklingen lassen. ♡",
      },
      {
        position: "middle",
        image:
          "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/01906c8f8_23908face_ChatGPTImage3Sept202615_38_06.png",
        title: "Klangbad",
        text:
          "♡ Klangbad: getragen von Klang und Schwingung ♡\nBei einem Klangbad liegst du bequem und geborgen zwischen verschiedenen Klangschalen. Du musst nichts tun, nichts erreichen und nirgendwo ankommen.\nDu darfst einfach liegen, lauschen und dich von den harmonischen Klängen umhüllen lassen.\nWerden die Schalen sanft angeschlagen, entstehen lang anhaltende Töne und feine Schwingungen. Wie Wellen breiten sie sich im Raum aus und verbinden sich zu einem vielschichtigen Klangteppich, in den du ganz langsam eintauchen darfst.\nDaher auch der Name Klangbad: Du badest nicht im Wasser, sondern in Klängen, Schwingungen und wohltuender Resonanz.\nViele Menschen erleben ein Klangbad als tiefe Ruhe. Gedanken dürfen leiser werden, der Körper kann entspannen und es entsteht ein Gefühl von Leichtigkeit, Geborgenheit und innerer Weite.\nVielleicht entstehen innere Bilder oder Gefühle. Vielleicht genießt du einfach nur die Stille zwischen den Klängen.\nEine liebevolle Auszeit, in der du dich von Klang tragen lassen und wieder ganz bei dir ankommen darfst.\n♡ Hinlegen. Lauschen. Loslassen. ♡\n♡ Und für einen Moment in den Klängen baden. ♡",
      },
    ],  },
];
