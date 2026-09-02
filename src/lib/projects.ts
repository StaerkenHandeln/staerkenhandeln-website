export type Project = {
  slug: string;
  image: string;
  title: string;
  tagline: string;
  text: string;
  detail: string;
  accent: "maroon" | "navy";
  video?: string;
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
  },
];
