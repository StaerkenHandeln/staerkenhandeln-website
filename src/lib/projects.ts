export type Project = {
  slug: string;
  image: string;
  title: string;
  tagline: string;
  text: string;
  detail: string;
  accent: "maroon" | "navy";
  video?: string;
  song?: string;
  poem?: string;
  initiator?: {
    name: string;
    role: string;
    image?: string;
  };
  imageFit?: "cover" | "contain";
  subProjects?: {
    position: "left" | "middle" | "right" | "bottom";
    image?: string;
    title: string;
    text: string;
    slug?: string;
    fullText?: string;
  }[];
  afterText?: string;
  sideInfo?: {
    title: string;
    items: { label: string; text: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "die-7-seelen",
    image:
      "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/e9ccec662_ChatGPTImage29Aug202620_23_33.png",
    title: "Die 7 Seelen",
    tagline: "Eine Stimme für SternenVäter",
    text: "Ein Projekt, das Vätern eine Stimme gibt, die einen Verlust erlebt haben, und Raum schafft, Trauer und Verbindung sichtbar zu machen.",
    detail:
      "„Die 7 Seelen“ ist ein Raum für Männer und Väter, die den Verlust eines Kindes erlebt haben. Oft bleibt die Trauer von Vätern unsichtbar – dieses Projekt gibt ihr eine Stimme, schafft Begegnung mit anderen Betroffenen und hilft, Trauer, Verbindung und Heilung sichtbar zu machen.",
    accent: "maroon",
    video:
      "https://twffopnohdndyzhmmgag.supabase.co/storage/v1/object/public/videos/Die7Seelen_Kurzvideo_Webseite.mp4",
    song: "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/91032a8db_8274ec82d_7Seelen.aac",
  },
  {
    slug: "mann-weib-in-einigkeit",
    image:
      "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/516b652c8_ChatGPTImage29Aug202620_29_04.png",
    title: "Mann & Weib in Einigkeit",
    tagline: "Verbindung und Miteinander",
    text: "Ein Projekt rund um Partnerschaft, Begegnung und das Zusammenspiel von Ich - Du - Wir, für mehr Verständnis im Miteinander und ehrliches Mitteilen.",
    detail:
      "Ein bewussteres Miteinander zwischen Mann, Weib und den kommenden Generationen. Das Projekt öffnet Raum für Begegnung, ehrlichen Austausch und ein tieferes Verständnis zwischen den Polaritäten für mehr Einigkeit in Partnerschaft und Gemeinschaft.",
    accent: "maroon",
    song: "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/8a5240724_4502862bb_MannWeib.aac",
    video:
      "https://twffopnohdndyzhmmgag.supabase.co/storage/v1/object/public/videos/Mann_und_Weib_final_neue_saubere_Tonspur.mp4",
  },
  {
    slug: "klangvoll-leben",
    image:
      "https://media.base44.com/images/public/6a91d252f2a77bee5314ead1/8a5555abd_ChatGPTImage29Aug202620_39_18.png",
    title: "Klangvoll leben",
    tagline: "Klang · Frequenz · Liebe",
    text: "Ein Raum zum Lauschen, Wahrnehmen und bei dir Ankommen. Begleitet mit Klangschalen, Frequenzen und Frequenzhygiene, für mehr Harmonie in dir selbst, deinem Leben und deinem Miteinander.\n\nInitiiert und begleitet von Karen",
    detail:
      "Ein Raum zum Lauschen, Wahrnehmen und bei sich Ankommen. Mit Klang, Frequenz und Klangschalen begleitet Karen Hagen Menschen dabei, wieder in Harmonie mit sich selbst zu kommen – in Einzelsitzungen und gemeinsamen Klangreisen.",
    accent: "maroon",
    video:
      "https://twffopnohdndyzhmmgag.supabase.co/storage/v1/object/public/videos/Klangvoll_leben_Webvideo_mit_Logo.mp4",
    poem:
      "♡ Zurück zu dir ♡\nUnser Alltag ist von unzähligen Eindrücken geprägt: Geräuschen, Gesprächen, digitalen Reizen, und Gedanken. Auch Worte, die uns begegnen, und die Art, wie wir mit einander und uns selbst sprechen, können unsere Stimmung und unser Körpererleben beeinflussen.\n\nUmso wertvoller sind bewusste Momente, in denen du zur Ruhe kommst und einen Augenblick nichts leisten musst. \nStell dir deinen Körper wie ein großes Orchester vor. Gerät das Zusammenspiel aus dem Takt, entsteht Unruhe.\n\nPlanetenklangschalen sind besondere Begleiter, die für ihre intensiven und wohltuenden Schwingungen geschätzt werden. Sie lassen dich spüren und unterstützen dich, dich neu auszurichten, wie ein Orchester, das langsam wieder in einer harmonischen Komposition spielt.\n\nWenn wir uns sicher und geborgen fühlen, darf das Nervensystem langsam zur Ruhe kommen. Der Atem kann tiefer werden, die Gedanken können leiser werden und der Körper erhält die Gelegenheit, Anspannung loszulassen.\nNach einer Klangbehandlung beschreiben viele Menschen ein Gefühl von Leichtigkeit, Klarheit und tieferer Verbundenheit mit sich selbst. Manche fühlen sich geerdet und geborgen. Andere erleben die Behandlung wie ein inneres Aufatmen oder einen kleinen Reset vom Alltag.\n\n♡ Schließe deine Augen.\n♡ Atme.\n♡ Spüre.\n\nIn liebevoller Begleitung\nKaren ♡ Klangvoll leben",
    subProjects: [
      {
        position: "left",
        image:
          "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/5f4461743_7b112bd39_ChatGPTImage3Sept202616_07_18.png",
        title: "Klangschalenmassage",
        text:
          "♡ Klangschalenmassage, wohltuende Schwingungen im Körper ♡\nBei dieser Massage werden ausgewählte Klangschalen behutsam auf verschiedene Bereiche des bekleideten Körpers gestellt und sanft zum Schwingen gebracht.\nJe nach persönlichem Bedürfnis und Körperbereich wähle ich die Schalen achtsam und individuell für dich aus.\nDie feinen Vibrationen breiten sich von der Schale wie sanfte Wellen im Körper aus. Sie werden nicht nur gehört, sondern können bis in die Tiefe wahrgenommen werden.\nDie wohltuenden Frequenzen der Schalen vermitteln Erdung und Geborgenheit, so dass dein Körper und Geist zur Ruhe kommen.\nIch unterstütze dich Stress loszulassen, neue Kraft zu schöpfen und wieder ganz bei dir anzukommen.",
      },
      {
        position: "middle",
        image:
          "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/01906c8f8_23908face_ChatGPTImage3Sept202615_38_06.png",
        title: "Einzelbad",
        text:
          "♡ Einzelbad: getragen von Klang und Schwingungen ♡\nBei einem Einzelbad liegst du bequem und geborgen zwischen verschiedenen Klangschalen, meiner Planetenschalen.\nDu badest in Klängen, Schwingungen und wohltuender Frequenzen. Viele Menschen erleben ein Einzelbad als tiefe Ruhe, in der ein Gefühl von Leichtigkeit, Geborgenheit und innerer Weite entsteht.\nDu darfst einfach liegen, lauschen und dich von den harmonischen Klängen umhüllen lassen.\n\nEine liebevolle Auszeit, in der du dich von Klang und Frequenz tragen lassen darfst.",
      },
      {
        position: "right",
        image:
          "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/c538c45ee_gruppenbad.jpg",
        title: "Gruppenbad",
        text:
          "♡ Gruppenbad: getragen von Klang und Schwingungen ♡\nBei einem Klangbad liegt ihr bequem und geborgen neben verschiedenen Klangschalen, meiner Planetenschalen.\nIhr badet in Klängen, Schwingungen und wohltuender Frequenzen. Viele Menschen erleben ein Klangbad als tiefe Ruhe, in der ein Gefühl von Leichtigkeit, Geborgenheit und innerer Weite entsteht.\nIhr dürft einfach liegen, lauschen und euch von den harmonischen Klängen umhüllen lassen.\n\nEine liebevolle Auszeit, in der ihr euch von Klang und Frequenz tragen lassen darfst.",
      },
    ],  },
  {
    slug: "worte-werden-wirklichkeit",
    image:
      "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/ebd6ad3d6_worte_werden_wirklichkeit.png",
    imageFit: "contain",
    title: "Worte werden Wirklichkeit",
    tagline: "Auch Worte sind Frequenzen, die tief in uns wirken.",
    text: "Auch Worte sind Frequenzen, die tief in uns wirken.",
    detail:
      "♡ Worte werden Wirklichkeit ♡\nWas wir sagen, hinterlässt Resonanz\n\nWorte sind weit mehr als aneinandergereihte Buchstaben.\nSie tragen einen Klang, einen Tonfall und eine Bedeutung. Sie können berühren, beruhigen und Mut schenken. Sie können Räume öffnen, neue Perspektiven entstehen lassen und einem Menschen das Gefühl geben:\nIch werde gesehen.\nIch werde gehört.\nIch bin richtig.\n\nWir möchten Menschen dafür sensibilisieren, achtsam mit Sprache und Gedanken umzugehen: in Familien, Partnerschaften, Freundschaften und besonders im Umgang mit Kindern.\n\nWelche Worte möchtest du in die Welt geben?\nUnd welche Worte dürfen in dir selbst neu entstehen?\n\n♡ Sprich so, dass Verbindung wachsen kann. ♡\n♡ Denke so, dass auch du darin ein Zuhause findest. ♡\n\nKaren ♡ Worte werden Wirklichkeit",
    accent: "maroon",
    subProjects: [
      {
        position: "bottom",
        slug: "vertiefung",
        image:
          "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/035d9eb7e_worte_boy_illustration.png",
        title: "Worte werden Wirklichkeit",
        text:
          "♡ Worte werden Wirklichkeit ♡\nAuch Worte sind Frequenzen, die tief in uns wirken.\nWas wir sagen, hinterlässt Resonanz\nWir möchte Menschen dafür sensibilisieren, achtsam mit Sprache und Gedanken umzugehen in Familien, Partnerschaften, Freundschaften und besonders im Umgang mit Kindern.\nWelche Worte möchtest du in die Welt geben?\nUnd welche Worte dürfen in dir selbst neu entstehen?\n♡ Sprich so, dass Verbindung wachsen kann. ♡\n♡ Denke so, dass auch du darin ein Zuhause findest. ♡\n\n**Wir kommen dorthin, wo Worte wirken**",
        fullText:
          "♡ Worte werden Wirklichkeit ♡\nWas wir sagen, hinterlässt Resonanz\n\nWorte sind weit mehr als aneinandergereihte Buchstaben.\nSie tragen einen Klang, einen Tonfall und eine Bedeutung. Sie können berühren, beruhigen und Mut schenken. Sie können Räume öffnen, neue Perspektiven entstehen lassen und einem Menschen das Gefühl geben:\nIch werde gesehen.\nIch werde gehört.\nIch bin richtig.\n\nDoch Worte können auch verunsichern, beschämen oder lange in uns nachhallen. Denn unser Inneres reagiert nicht nur auf das, was gesagt wird. Es nimmt ebenso wahr, wie etwas gesagt wird und welche Erfahrungen wir damit verbinden.\nManchmal genügt ein einziger Satz, um uns aufzurichten. Manchmal bleibt ein lieblos gesprochenes Wort noch lange in uns lebendig.\nWie der Klang einer Schale Schwingungen im Raum entstehen lässt, erzeugen auch unsere Worte Resonanz: in unseren Gedanken, unseren Gefühlen, unseren Beziehungen und in der Art, wie wir uns selbst erleben.\n\n♡ Worte prägen unsere innere Welt ♡\nWas wir immer wieder hören, kann mit der Zeit zu einem Teil dessen werden, was wir über uns selbst glauben.\nAus einem häufigen „Du bist zu empfindlich“ kann die Überzeugung entstehen, den eigenen Gefühlen nicht vertrauen zu dürfen.\nAus „Das kannst du noch nicht“ kann im Inneren irgendwann ein „Ich schaffe es nicht“ werden.\nUnd aus wiederholter Kritik kann das Gefühl wachsen, nie gut genug zu sein, selbst dann, wenn wir längst unser Bestes geben.\n\nDoch auch stärkende Worte hinterlassen Spuren:\nIch sehe dich.\nDeine Gefühle dürfen da sein.\nDu musst nicht perfekt sein.\nDu darfst dir Zeit lassen.\nIch glaube an dich.\n\nSolche Sätze lösen nicht jedes Problem. Doch sie können Sicherheit vermitteln, Selbstvertrauen stärken und uns daran erinnern, liebevoller mit uns selbst umzugehen. Sie können zu einer inneren Stimme werden, die uns auch in schwierigen Momenten begleitet.\n\n♡ Es beginnt bei unseren Kindern ♡\nKinder begegnen der Welt offen, neugierig und vertrauensvoll. Die Worte ihrer Eltern, Bezugspersonen und Lehrenden helfen ihnen dabei, ein Bild von sich selbst zu entwickeln.\nDurch unsere Sprache lernen Kinder nicht nur, wie die Dinge heißen. Sie erfahren auch, ob ihre Gefühle willkommen sind, wie mit Fehlern umgegangen wird und ob ihre Bedürfnisse gehört werden dürfen.\n\nEin achtsames Wort kann Halt geben.\nEin verständnisvoller Satz kann Verbindung schaffen.\nEine liebevolle Rückmeldung kann im Inneren eines Kindes weiterwachsen.\n\nEin Kind, das immer wieder hört, dass es anstrengend, falsch oder zu empfindlich sei, trägt diese Worte möglicherweise lange mit sich. Ein Kind, das erlebt, dass seine Gefühle ernst genommen werden, kann dagegen lernen: Ich darf wahrnehmen, was in mir geschieht. Ich darf darüber sprechen. Ich bin auch dann liebenswert, wenn etwas schwierig ist.\n\nDabei geht es nicht darum, immer alles richtig zu sagen. Eltern und Bezugspersonen sind Menschen. Sie sind manchmal müde, überfordert oder ungeduldig.\nAchtsame Sprache bedeutet deshalb nicht, belastende Gefühle schönzureden oder Konflikte zu vermeiden. Es geht vielmehr um Bewusstsein, Verantwortung und die Bereitschaft, einander wirklich zuzuhören.\n\nAuch ein ehrliches „Es tut mir leid“ kann für ein Kind zu einem heilsamen Satz werden. Es zeigt ihm: Beziehungen dürfen Fehler aushalten. Verletzungen dürfen angesprochen werden. Und Verbindung kann wieder neu entstehen.\n\n♡ Wir bleiben ein Leben lang berührbar ♡\nDie Wirkung unserer Worte endet nicht mit der Kindheit.\nAuch als Erwachsene bleiben wir berührbar. Worte können uns Mut schenken, Nähe entstehen lassen und uns daran erinnern, wer wir sind. Sie können trösten, stärken und etwas in uns zum Aufblühen bringen.\n\nDoch Worte können ebenso verletzen. Ein abwertender Satz, wiederholte Kritik oder ein liebloser Ton können Spuren hinterlassen, manchmal sichtbar, manchmal ganz still im Inneren.\nBesonders tief wirken häufig die Worte von Menschen, die uns nahestehen oder deren Anerkennung uns wichtig ist. Was in einer Partnerschaft, einer Familie, einer Freundschaft oder am Arbeitsplatz gesagt wird, kann unser Gefühl von Sicherheit und Zugehörigkeit entscheidend mitprägen.\nDarum ist ein achtsamer Umgang miteinander in allen Bereichen unseres Lebens so wertvoll.\n\nEs geht nicht darum, in jedem Moment die perfekten Worte zu finden. Es geht darum, bewusster wahrzunehmen, wie wir miteinander sprechen und was unsere Sprache im anderen auslösen kann.\nWir dürfen lernen:\nklar zu sein, ohne zu verletzen,\nehrlich zu sein, ohne abzuwerten,\nGrenzen zu setzen, ohne die Würde des anderen zu verletzen.\n\n♡ Auch unsere Gedanken sprechen mit uns ♡\nNicht nur die Worte anderer wirken in uns. Auch unser innerer Dialog begleitet uns jeden Tag.\nWie sprichst du mit dir, wenn dir etwas misslingt?\nWelche Sätze wiederholst du über dich?\nSind es wirklich deine eigenen Worte, oder sind es Stimmen aus deiner Vergangenheit?\n\nVielleicht kennst du Sätze wie:\n„Ich bin nicht gut genug.“\n„Ich darf keine Fehler machen.“\n„Ich muss funktionieren.“\n„Ich bin zu viel.“\n„Ich schaffe das sowieso nicht.“\n\nManche dieser inneren Sätze begleiten uns schon so lange, dass wir sie kaum noch bemerken. Sie fühlen sich wie Wahrheiten an, obwohl sie vielleicht einmal als Bewertungen, Erwartungen oder Verletzungen von außen zu uns gekommen sind.\nGedanken sind keine magischen Befehle. Doch sie beeinflussen, worauf wir unsere Aufmerksamkeit richten, was wir von uns erwarten und wie wir Situationen erleben.\nWenn wir beginnen, unsere innere Sprache bewusst wahrzunehmen, entsteht ein neuer Raum: zwischen dem alten Satz und einer neuen Möglichkeit.\n\nVielleicht wird aus:\n„Ich bin nicht gut genug“\nganz langsam:\n„Ich darf lernen.\nIch darf wachsen.\nIch muss nicht perfekt sein.\nIch bin bereits wertvoll.“\n\nEs geht nicht darum, schwierige Gedanken einfach durch schöne Sätze zu überdecken. Es geht darum, uns selbst mit derselben Ehrlichkeit, Geduld und Würde zu begegnen, die wir auch einem geliebten Menschen schenken würden.\n\n♡ Eine Einladung zu mehr Bewusstsein ♡\n„Worte werden Wirklichkeit“ möchte Menschen dafür sensibilisieren, achtsam mit Sprache und Gedanken umzugehen, in Familien, Partnerschaften, Freundschaften, im Berufsleben und besonders im Umgang mit Kindern.\nNicht aus Angst, etwas Falsches zu sagen.\nSondern aus dem Bewusstsein heraus, dass Sprache Beziehungen gestaltet und jedes Wort eine Spur hinterlassen kann.\n\nWir können Vergangenes nicht ungeschehen machen. Aber wir können beginnen, heute anders hinzuhören: den Worten anderer, den Worten unserer Kinder und den Sätzen, die wir selbst jeden Tag in uns tragen.\n\nWelche Worte möchtest du in die Welt geben?\nWelche Worte sollen in einem Menschen weiterwachsen?\nUnd welche Worte dürfen in dir selbst neu entstehen?\n\n♡ Sprich so, dass Verbindung wachsen kann. ♡\n♡ Denke so, dass auch du darin ein Zuhause findest. ♡\n\nKaren ♡ Worte werden Wirklichkeit",
      },
    ],
    afterText:
      "**Worte werden Wirklichkeit.**\n\nManchmal ist es nur ein Satz, den wir beinahe nebenbei sagen.\nUnd doch kann er sehr lange in einem Menschen weiterleben.\n\nDenn auch Worte sind Frequenzen, die tief in uns wirken.\n\nWorte können trösten.\nSie können Mut machen, Sicherheit geben und Verbindung schaffen.\nAber Worte können auch verletzen und Spuren hinterlassen.\n\nBesonders Kinder hören nicht nur was wir zu ihnen sagen.\n\nSie sind wie ein Schwamm und saugen alles auf wie ihre Eltern und ihre Bezugsmenschen mit ihnen kommunizieren und wie mit ihnen umgegangen wird.\n\nSo entstehen Prägungen und tief in ihnen ein Bild von sich selbst.\n\nDu warst auch mal dieses Kind!\n\nWorte begleiten uns.\nVom Kind zum Jugendlichen.\nVom Jugendlichen zum Erwachsenen.\n\nMachnismen, die wir seit Kindheit mit uns tragen, weil wir uns Zuhause anpassen mussten.\n\nMechanismen, die immernoch in uns wirken, doch die wir gar nicht mehr brauchen.\n\nSie wirken in unseren Freundschaften, in unseren Partnerschaften und auch darin, wie wir selbst mit unseren Kindern sprechen.\n\nSo werden Worte und Gefühle von einer Generation zur nächsten weitergegeben.\n\nDoch wir können diesen Kreislauf bewusst gestalten.\n\nWir können innehalten.\nHinhören.\nVerantwortung übernehmen.\nUnd auch mal sagen: „Es tut mir leid.“\n\nLass uns gemeinsam aus einem „Du bist zu empfindlich“ ein „Ich glaube an dich“ gestalten\n...und ich glaube du kannst jetzt schon spüren, was dieser Wandel für großartige Auswirkungen mit sich trägt.\n\nWelche Worte möchtest du in die Welt geben?\nUnd welchen Kreislauf möchtest du durchbrechen?\n\nWir sprechen dort, wo Worte wirken.\nUns gemeinsam werden wir wachsen.",
    sideInfo: {
      title: "Als Impuls, wo Worte wirken",
      items: [
        { label: "Kitas und Familienzentren", text: "Elternabende und Teamimpulse: „Wie unsere Worte Kinder begleiten“" },
        { label: "Schulen und Ganztagsbetreuung", text: "Workshops für Lehrkräfte, Eltern und Klassen über Sprache, Selbstbild und Zusammenhalt" },
        { label: "Familienbildungsstätten und Eltern-Kind-Gruppen", text: "Gesprächsrunden über eigene Prägungen und neue Wege im Familienalltag" },
        { label: "Erziehungs- und Familienberatungsstellen", text: "Begleitende Themenabende zu Kommunikation und Beziehung" },
        { label: "Jugendzentren und Jugendhilfe", text: "Kreative Projekte: „Welche Sätze stärken mich – welche möchte ich nicht weitergeben?“" },
        { label: "Hebammenpraxen und Angebote für junge Eltern", text: "Frühe Impulse für einen liebevollen Umgang miteinander und mit dem Kind" },
        { label: "Pflegeschulen und soziale Einrichtungen", text: "Fortbildungsimpulse zu Würde, Zuhören und Sprache im Betreuungsalltag" },
      ],
    },
  },
  {
    slug: "wildwiesenwissen",
    image:
      "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/9741cbc72_ea2243c9f_f897df37-6461-49b6-b8a9-e035b882455b.png",
    imageFit: "contain",
    title: "WildWiesenWissen",
    tagline: "Die Natur wieder mit anderen Augen sehen.",
    text: "Die Natur wieder mit anderen Augen sehen.",
    detail:
      "„WildWiesenWissen lädt dazu ein, Wildkräuter, Pflanzen und das Wissen der Natur neu zu entdecken. Es geht darum, genauer hinzusehen, neugierig zu werden und wieder bewusster wahrzunehmen, was direkt vor unserer Haustür wächst.\n\nAltes Pflanzenwissen trifft dabei auf heutige Erkenntnisse, persönliche Erfahrungen und die Freude am gemeinsamen Entdecken.“",
    accent: "maroon",
    initiator: {
      name: "Nicole",
      role: "Initiatorin von WildWiesenWissen",
      image:
        "https://base44.app/api/apps/6a7f05b048dc9fcfe183cce7/files/mp/public/6a7f05b048dc9fcfe183cce7/1b7e1f8ad_15325df63_image.png",
    },
  },
];
