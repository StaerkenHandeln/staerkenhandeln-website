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
    position: "left" | "middle" | "right" | "bottom";
    image?: string;
    title: string;
    text: string;
    slug?: string;
    fullText?: string;
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
      {
        position: "bottom",
        slug: "worte-werden-wirklichkeit",
        title: "Worte werden Wirklichkeit",
        text:
          "♡ Worte werden Wirklichkeit ♡\nWas wir sagen, hinterlässt Resonanz\nWorte können trösten, stärken und Verbindung schaffen. Doch sie können auch verletzen und lange in uns nachhallen - besonders dann, wenn sie von Menschen kommen, die uns nahestehen.\nWelche Spuren hinterlassen unsere Worte in unseren Kindern, unseren Beziehungen und in uns selbst? „Worte werden Wirklichkeit“ lädt dich ein, die Kraft deiner Sprache und deiner Gedanken neu zu entdecken - einfühlsam, ehrlich und ohne den Anspruch, immer alles richtig machen zu müssen.\nEntdecke, wie Worte Beziehung gestalten - und wie aus Sprache ein Ort der Verbindung werden kann.\n\nDieses Herzensprojekt kommt zu euch!...\nStärkenHandeln möchte Menschen in Einrichtungen, wie Kindergärten, Hort, Schulen, Frauenkreise,... ermutigen und begleiten zurück in den achtsamen Austausch zu kommen.",
        fullText:
          "♡ Worte werden Wirklichkeit ♡\nWas wir sagen, hinterlässt Resonanz\n\nWorte sind weit mehr als aneinandergereihte Buchstaben.\nSie tragen einen Klang, einen Tonfall und eine Bedeutung. Sie können berühren, beruhigen und Mut schenken. Sie können Räume öffnen, neue Perspektiven entstehen lassen und einem Menschen das Gefühl geben:\nIch werde gesehen.\nIch werde gehört.\nIch bin richtig.\n\nDoch Worte können auch verunsichern, beschämen oder lange in uns nachhallen. Denn unser Inneres reagiert nicht nur auf das, was gesagt wird. Es nimmt ebenso wahr, wie etwas gesagt wird und welche Erfahrungen wir damit verbinden.\nManchmal genügt ein einziger Satz, um uns aufzurichten. Manchmal bleibt ein lieblos gesprochenes Wort noch lange in uns lebendig.\nWie der Klang einer Schale Schwingungen im Raum entstehen lässt, erzeugen auch unsere Worte Resonanz: in unseren Gedanken, unseren Gefühlen, unseren Beziehungen und in der Art, wie wir uns selbst erleben.\n\n♡ Worte prägen unsere innere Welt ♡\nWas wir immer wieder hören, kann mit der Zeit zu einem Teil dessen werden, was wir über uns selbst glauben.\nAus einem häufigen „Du bist zu empfindlich“ kann die Überzeugung entstehen, den eigenen Gefühlen nicht vertrauen zu dürfen.\nAus „Das kannst du noch nicht“ kann im Inneren irgendwann ein „Ich schaffe es nicht“ werden.\nUnd aus wiederholter Kritik kann das Gefühl wachsen, nie gut genug zu sein - selbst dann, wenn wir längst unser Bestes geben.\n\nDoch auch stärkende Worte hinterlassen Spuren:\nIch sehe dich.\nDeine Gefühle dürfen da sein.\nDu musst nicht perfekt sein.\nDu darfst dir Zeit lassen.\nIch glaube an dich.\n\nSolche Sätze lösen nicht jedes Problem. Doch sie können Sicherheit vermitteln, Selbstvertrauen stärken und uns daran erinnern, liebevoller mit uns selbst umzugehen. Sie können zu einer inneren Stimme werden, die uns auch in schwierigen Momenten begleitet.\n\n♡ Es beginnt bei unseren Kindern ♡\nKinder begegnen der Welt offen, neugierig und vertrauensvoll. Die Worte ihrer Eltern, Bezugspersonen und Lehrenden helfen ihnen dabei, ein Bild von sich selbst zu entwickeln.\nDurch unsere Sprache lernen Kinder nicht nur, wie die Dinge heißen. Sie erfahren auch, ob ihre Gefühle willkommen sind, wie mit Fehlern umgegangen wird und ob ihre Bedürfnisse gehört werden dürfen.\n\nEin achtsames Wort kann Halt geben.\nEin verständnisvoller Satz kann Verbindung schaffen.\nEine liebevolle Rückmeldung kann im Inneren eines Kindes weiterwachsen.\n\nEin Kind, das immer wieder hört, dass es anstrengend, falsch oder zu empfindlich sei, trägt diese Worte möglicherweise lange mit sich. Ein Kind, das erlebt, dass seine Gefühle ernst genommen werden, kann dagegen lernen: Ich darf wahrnehmen, was in mir geschieht. Ich darf darüber sprechen. Ich bin auch dann liebenswert, wenn etwas schwierig ist.\n\nDabei geht es nicht darum, immer alles richtig zu sagen. Eltern und Bezugspersonen sind Menschen. Sie sind manchmal müde, überfordert oder ungeduldig.\nAchtsame Sprache bedeutet deshalb nicht, belastende Gefühle schönzureden oder Konflikte zu vermeiden. Es geht vielmehr um Bewusstsein, Verantwortung und die Bereitschaft, einander wirklich zuzuhören.\n\nAuch ein ehrliches „Es tut mir leid“ kann für ein Kind zu einem heilsamen Satz werden. Es zeigt ihm: Beziehungen dürfen Fehler aushalten. Verletzungen dürfen angesprochen werden. Und Verbindung kann wieder neu entstehen.\n\n♡ Wir bleiben ein Leben lang berührbar ♡\nDie Wirkung unserer Worte endet nicht mit der Kindheit.\nAuch als Erwachsene bleiben wir berührbar. Worte können uns Mut schenken, Nähe entstehen lassen und uns daran erinnern, wer wir sind. Sie können trösten, stärken und etwas in uns zum Aufblühen bringen.\n\nDoch Worte können ebenso verletzen. Ein abwertender Satz, wiederholte Kritik oder ein liebloser Ton können Spuren hinterlassen - manchmal sichtbar, manchmal ganz still im Inneren.\nBesonders tief wirken häufig die Worte von Menschen, die uns nahestehen oder deren Anerkennung uns wichtig ist. Was in einer Partnerschaft, einer Familie, einer Freundschaft oder am Arbeitsplatz gesagt wird, kann unser Gefühl von Sicherheit und Zugehörigkeit entscheidend mitprägen.\nDarum ist ein achtsamer Umgang miteinander in allen Bereichen unseres Lebens so wertvoll.\n\nEs geht nicht darum, in jedem Moment die perfekten Worte zu finden. Es geht darum, bewusster wahrzunehmen, wie wir miteinander sprechen und was unsere Sprache im anderen auslösen kann.\nWir dürfen lernen:\nklar zu sein, ohne zu verletzen,\nehrlich zu sein, ohne abzuwerten,\nGrenzen zu setzen, ohne die Würde des anderen zu verletzen.\n\n♡ Auch unsere Gedanken sprechen mit uns ♡\nNicht nur die Worte anderer wirken in uns. Auch unser innerer Dialog begleitet uns jeden Tag.\nWie sprichst du mit dir, wenn dir etwas misslingt?\nWelche Sätze wiederholst du über dich?\nSind es wirklich deine eigenen Worte - oder sind es Stimmen aus deiner Vergangenheit?\n\nVielleicht kennst du Sätze wie:\n„Ich bin nicht gut genug.“\n„Ich darf keine Fehler machen.“\n„Ich muss funktionieren.“\n„Ich bin zu viel.“\n„Ich schaffe das sowieso nicht.“\n\nManche dieser inneren Sätze begleiten uns schon so lange, dass wir sie kaum noch bemerken. Sie fühlen sich wie Wahrheiten an, obwohl sie vielleicht einmal als Bewertungen, Erwartungen oder Verletzungen von außen zu uns gekommen sind.\nGedanken sind keine magischen Befehle. Doch sie beeinflussen, worauf wir unsere Aufmerksamkeit richten, was wir von uns erwarten und wie wir Situationen erleben.\nWenn wir beginnen, unsere innere Sprache bewusst wahrzunehmen, entsteht ein neuer Raum: zwischen dem alten Satz und einer neuen Möglichkeit.\n\nVielleicht wird aus:\n„Ich bin nicht gut genug“\nganz langsam:\n„Ich darf lernen.\nIch darf wachsen.\nIch muss nicht perfekt sein.\nIch bin bereits wertvoll.“\n\nEs geht nicht darum, schwierige Gedanken einfach durch schöne Sätze zu überdecken. Es geht darum, uns selbst mit derselben Ehrlichkeit, Geduld und Würde zu begegnen, die wir auch einem geliebten Menschen schenken würden.\n\n♡ Eine Einladung zu mehr Bewusstsein ♡\n„Worte werden Wirklichkeit“ möchte Menschen dafür sensibilisieren, achtsam mit Sprache und Gedanken umzugehen - in Familien, Partnerschaften, Freundschaften, im Berufsleben und besonders im Umgang mit Kindern.\nNicht aus Angst, etwas Falsches zu sagen.\nSondern aus dem Bewusstsein heraus, dass Sprache Beziehungen gestaltet und jedes Wort eine Spur hinterlassen kann.\n\nWir können Vergangenes nicht ungeschehen machen. Aber wir können beginnen, heute anders hinzuhören: den Worten anderer, den Worten unserer Kinder und den Sätzen, die wir selbst jeden Tag in uns tragen.\n\nWelche Worte möchtest du in die Welt geben?\nWelche Worte sollen in einem Menschen weiterwachsen?\nUnd welche Worte dürfen in dir selbst neu entstehen?\n\n♡ Sprich so, dass Verbindung wachsen kann. ♡\n♡ Denke so, dass auch du darin ein Zuhause findest. ♡\n\nKaren ♡ Klangvoll leben",
      },
    ],  },
];
