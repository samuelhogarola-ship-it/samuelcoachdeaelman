const TEXTOS = [
  {
    slug: 'auf-dem-markt',
    nivel: 'A2',
    titulo: 'Auf dem Markt',
    descripcion: 'Anna und Max besuchen einen Wochenmarkt in Berlin-Kreuzberg.',
    texto: `Anna und Max sind heute in Berlin und besuchen einen Wochenmarkt im Stadtteil Kreuzberg. Es ist Samstagmorgen, und der Markt ist schon sehr voll. Viele Leute kaufen frisches Obst und Gemüse, und die Stände sind bunt und lebendig. Anna möchte frische Erdbeeren kaufen, und Max sucht nach Tomaten und Paprika für das Abendessen. Neben den Gemüseständen gibt es auch Stände mit Blumen und handgemachten Produkten. Anna interessiert sich besonders für die bunten Blumensträuße und überlegt, ob sie einen für ihre Wohnung kaufen soll.

Sie schlendern durch die Reihen der Stände, probieren hier und da ein Stück Käse oder ein paar Trauben. „Diese Erdbeeren riechen fantastisch!", sagt Anna und kauft ein Kilo. Max findet die Tomaten, die er haben wollte, und packt auch ein paar Paprika dazu. Am Ende des Marktes entdecken sie einen Stand mit frischem Brot. „Lass uns noch ein Brot für das Abendessen mitnehmen", schlägt Max vor. Ein paar Schritte weiter sehen sie eine Bäckerei mit frisch gebackenen Brezeln. Anna kann nicht widerstehen und kauft zwei Stück, die sie direkt essen.

Nach dem Einkaufen setzen sich Anna und Max in ein kleines Café am Marktplatz und genießen einen Kaffee. Sie reden über ihre Pläne für den Abend und freuen sich schon darauf, mit den frischen Zutaten ein leckeres Abendessen zuzubereiten. Max möchte ein neues Rezept ausprobieren, das er online gefunden hat. Sie beschließen, sich Zeit zu nehmen und den Abend in Ruhe zu genießen.`,
    preguntas: [
      { enunciado: 'Anna interessiert sich für die Blumen auf dem Markt.', respuesta: true },
      { enunciado: 'Max kauft Brot für das Frühstück.', respuesta: false },
      { enunciado: 'Sie kaufen keine Erdbeeren, weil sie zu teuer sind.', respuesta: false },
      { enunciado: 'Anna und Max essen etwas, bevor sie den Markt verlassen.', respuesta: true },
      { enunciado: 'Max plant, am Abend ein neues Rezept auszuprobieren.', respuesta: true },
    ],
  },
  {
    slug: 'im-park',
    nivel: 'A2',
    titulo: 'Im Park',
    descripcion: 'Laura und Max verbringen einen entspannten Sonntagnachmittag im Park.',
    texto: `Am Sonntagnachmittag gehen Laura und Max in den Park, um etwas frische Luft zu bekommen und spazieren zu gehen. Es ist ein sonniger Tag, und der Park ist voller Menschen. Einige Leute sitzen auf Bänken und lesen. Laura hat ihren Hund dabei, der fröhlich herumläuft. Max kauft Eis, und sie setzen sich auf eine Bank in der Nähe des Teichs.

Nach einer Weile kommt ein Freund von Max, Stefan, vorbei. Sie reden über die Schule und ihre Pläne für das Wochenende. Stefan plant, am Samstag zu einer Party zu gehen, aber Max möchte lieber zu Hause bleiben und Videospiele spielen. Laura hört interessiert zu, während sie ihren Hund füttert.

Bevor sie nach Hause gehen, machen Laura und Max noch einen kleinen Spaziergang am Teich entlang. Sie sehen Enten und ein paar Kinder, die mit ihren Eltern spielen. Es ist ein ruhiger und entspannter Nachmittag. Max beschließt, vielleicht doch zur Party zu gehen, um Stefan zu sehen.`,
    preguntas: [
      { enunciado: 'Max und Laura essen Eis im Park.', respuesta: true },
      { enunciado: 'Stefan möchte gern zu Hause bleiben.', respuesta: false },
      { enunciado: 'Laura hat einen Hund dabei.', respuesta: true },
      { enunciado: 'Max entscheidet sich, nicht zur Party zu gehen.', respuesta: false },
      { enunciado: 'Kinder spielen am Teich mit ihren Eltern.', respuesta: true },
    ],
  },
  {
    slug: 'im-zoo',
    nivel: 'A2',
    titulo: 'Im Zoo',
    descripcion: 'Anna und Felix verbringen einen aufregenden Tag im Zoo.',
    texto: `Anna und Felix besuchen am Samstag den Zoo, damit sie die neuen Tiere sehen können. Sie haben sich schon lange darauf gefreut. Felix bringt seine Kamera mit, um viele Fotos zu machen. Im Zoo gibt es viele spannende Tiere, darunter Löwen, Elefanten und Pinguine. Anna liebt besonders die Pinguine, weil sie so lustig watscheln.

Nach dem Rundgang durch den Zoo machen sie eine Pause, damit sie sich etwas trinken und ausruhen können. Felix kauft zwei Limonaden, und sie setzen sich auf eine Bank in der Nähe des Affengeheges. Die Affen springen von Ast zu Ast, was Anna und Felix zum Lachen bringt.

Am Nachmittag sehen sie sich die Fütterung der Elefanten an. Die Elefanten heben ihre Rüssel, um das Futter von den Pflegern zu bekommen. Danach gehen Anna und Felix zufrieden nach Hause und reden über die vielen Tiere, die sie gesehen haben.`,
    preguntas: [
      { enunciado: 'Felix bringt eine Kamera mit, um Fotos zu machen.', respuesta: true },
      { enunciado: 'Anna und Felix machen eine Pause, damit sie etwas trinken können.', respuesta: true },
      { enunciado: 'Die Elefanten bekommen das Futter von den Pflegern, um es mit ihren Rüsseln zu fangen.', respuesta: true },
      { enunciado: 'Anna mag besonders die Löwen.', respuesta: false },
      { enunciado: 'Sie lachen über die Affen, die von Ast zu Ast springen.', respuesta: true },
    ],
  },
  {
    slug: 'im-restaurant',
    nivel: 'A2',
    titulo: 'Im Restaurant',
    descripcion: 'Sophie und Martin probieren ein neues Restaurant in der Stadt.',
    texto: `Sophie und Martin gehen an einem Freitagabend in ein neues Restaurant in der Stadt. Sie haben schon viel über das Essen dort gehört und sind gespannt, die Spezialitäten zu probieren. Martin bestellt ein Steak, während Sophie sich für einen frischen Salat mit Lachs entscheidet. Beide genießen die gemütliche Atmosphäre im Restaurant.

Nach dem Essen beschließen sie, einen Nachtisch zu bestellen, damit das Abendessen noch schöner wird. Sophie möchte einen Obstsalat, und Martin bestellt ein Stück Schokoladenkuchen. Beide sind sehr zufrieden mit ihrer Wahl und freuen sich, weil das Essen so lecker war.

Zum Schluss trinken sie einen Kaffee, bevor sie das Restaurant verlassen. Sie sprechen darüber, bald wiederzukommen, um andere Gerichte auszuprobieren. Der Abend war für beide sehr gelungen, und sie gehen gut gelaunt nach Hause.`,
    preguntas: [
      { enunciado: 'Martin bestellt einen frischen Salat mit Lachs.', respuesta: false },
      { enunciado: 'Sophie wählt einen Obstsalat als Nachtisch.', respuesta: true },
      { enunciado: 'Nach dem Essen trinken sie einen Kaffee.', respuesta: true },
      { enunciado: 'Sophie bestellt Schokoladenkuchen als Nachtisch.', respuesta: false },
      { enunciado: 'Sie planen, das Restaurant bald wieder zu besuchen.', respuesta: true },
    ],
  },
  {
    slug: 'im-einkaufszentrum',
    nivel: 'A2',
    titulo: 'Im Einkaufszentrum',
    descripcion: 'Lisa und Tom suchen neue Kleidung im Einkaufszentrum.',
    texto: `Am Samstag gehen Lisa und Tom ins Einkaufszentrum, weil sie neue Kleidung brauchen. Tom möchte vor allem neue Sportschuhe kaufen, da seine alten kaputt sind. Lisa hingegen sucht ein Kleid für eine Hochzeit, zu der sie die nächste Woche eingeladen ist. Sie gehen zuerst in ein Sportgeschäft, wohin Tom gerne geht, weil dort die besten Angebote sind.

Nachdem Tom seine Schuhe gekauft hat, gehen sie in ein Modegeschäft, um Lisa zu helfen. Es gibt viele schöne Kleider zum Ausprobieren, aber Lisa fällt es schwer, sich zu entscheiden. Tom wird langsam ungeduldig, deshalb geht er in einen Elektronikladen, um sich einen Kopfhörer anzuschauen.

Am Ende treffen sich beide wieder im Café im zweiten Stock. Lisa hat schließlich ein Kleid gefunden, und Tom hat sich auch für ein Paar Kopfhörer entschieden. Sie sind zufrieden mit ihren Einkäufen und planen, bald wieder ins Einkaufszentrum zu kommen, denn es gibt immer etwas Neues zu entdecken.`,
    preguntas: [
      { enunciado: 'Tom kauft neue Schuhe, weil seine alten kaputt sind.', respuesta: true },
      { enunciado: 'Lisa sucht ein Kleid für einen Geburtstag.', respuesta: false },
      { enunciado: 'Tom geht ins Café, während Lisa im Modegeschäft bleibt.', respuesta: false },
      { enunciado: 'Lisa entscheidet sich für ein Kleid im ersten Stock.', respuesta: false },
      { enunciado: 'Beide sind zufrieden mit ihren Einkäufen.', respuesta: true },
    ],
  },
  {
    slug: 'ausflug-mit-freunden',
    nivel: 'A2',
    titulo: 'Der Ausflug mit Freunden',
    descripcion: 'Peter und Julia fahren mit Freunden in die Berge.',
    texto: `Peter und Julia machen einen Ausflug, den sie schon lange geplant haben. Sie fahren mit ihren Freunden, die aus der Nachbarstadt kommen, in die Berge. Peter freut sich besonders, weil er gerne klettert und Julia sich mehr für die Natur interessiert. Am Abend kehren sie in eine Hütte ein, wo sie übernachten werden. Peter ist sehr müde, deshalb legt er sich sofort ins Bett. Julia ist noch nicht müde, aber sie unterhält sich trotzdem mit den anderen über den Tag.

Sie fragen sich, ob sie am nächsten Tag wieder wandern gehen oder einen ruhigeren Abend verbringen sollen. Allerdings wissen sie noch nicht, wie das Wetter am nächsten Morgen sein wird.

Am nächsten Morgen entscheiden sie sich, einen kurzen Spaziergang zu machen. Die Gruppe freut sich auf das Frühstück in der Hütte, das früh serviert wird. Danach machen sie sich auf den Weg nach Hause, obwohl sie gerne noch länger geblieben wären. Trotz der Müdigkeit planen sie, bald wieder einen ähnlichen Ausflug zu machen.`,
    preguntas: [
      { enunciado: 'Klettern interessiert Peter.', respuesta: true },
      { enunciado: 'Julia liest ein Buch, während die anderen kochen.', respuesta: false },
      { enunciado: 'Die Gruppe übernachtet in einer Hütte.', respuesta: true },
      { enunciado: 'Am nächsten Morgen machen sie eine lange Wanderung.', respuesta: false },
      { enunciado: 'Die Freunde freuen sich auf das Frühstück in der Hütte.', respuesta: true },
    ],
  },
  {
    slug: 'familienausflug',
    nivel: 'A2',
    titulo: 'Der Familienausflug',
    descripcion: 'Die Familie Müller macht einen unvergesslichen Ausflug an den See.',
    texto: `Letzten Sommer machte die Familie Müller einen Ausflug an den See. Als sie ankamen, wollten die Kinder sofort ins Wasser springen. Das Wetter war perfekt, so dass die Sonne schien. Herr Müller packte das Picknick aus, während Frau Müller nach einem schattigen Platz suchte. Neben dem See gab es eine kleine Wiese, auf der Anna und Felix einige Male spielen konnten.

Immer wenn die Familie Müller an den See fuhr, freuten sich die Kinder darin zu schwimmen. Diesmal hatte Frau Müller auch einen Kuchen mitgebracht, sodass alle sich auf das Essen freuten. Die Familie setzte sich unter einen Baum, um gemeinsam zu essen und den Tag zu genießen. Der See war ruhig, und das Wasser glitzerte in der Sonne.

Am Abend, als die Sonne unterging, packte die Familie ihre Sachen zusammen. Herr Müller sagte, sie würden bald wiederkommen, weil der Tag so schön gewesen war. Die Kinder freuten sich und machten Pläne für den nächsten Ausflug. Sie beschlossen, das nächste Mal Freunde mitzunehmen.`,
    preguntas: [
      { enunciado: 'Die Familie Müller machte einen Ausflug an den See, als es regnete.', respuesta: false },
      { enunciado: 'Die Kinder wollten sofort ins Wasser springen.', respuesta: true },
      { enunciado: 'Herr Müller bereitete das Picknick vor, während Frau Müller einen schattigen Platz suchte.', respuesta: true },
      { enunciado: 'Immer wenn die Familie an den See fuhr, brachten sie einen Kuchen mit.', respuesta: false },
      { enunciado: 'Herr Müller versprach, dass sie bald wieder an den See kommen würden.', respuesta: true },
    ],
  },
  {
    slug: 'museumsbesuch',
    nivel: 'A2',
    titulo: 'Der Museumsbesuch',
    descripcion: 'Clara besucht mit ihrer Schulklasse ein bekanntes Museum.',
    texto: `Letzte Woche besuchte Clara mit ihrer Klasse ein Museum, das in ihrer Stadt sehr bekannt ist. Als sie ankamen, wurden sie von einem Führer begrüßt, der ihnen die Ausstellung zeigen wollte. Das Museum war groß, so dass die Klasse mehrere Stunden brauchte, um alles zu sehen. Clara interessierte sich besonders für die Kunstwerke, die aus dem Mittelalter stammten.

Immer wenn Clara ins Museum ging, entdeckte sie etwas Neues, das sie faszinierte. Diesmal gab es eine Sonderausstellung über antike Skulpturen, die sehr beeindruckend waren. Clara machte viele Fotos und schrieb einige Notizen, damit sie später einen Bericht schreiben konnte.

Am Ende des Besuchs erzählte der Lehrer, dass sie bald wieder eine Exkursion machen würden, allerdings in ein anderes Museum. Clara freute sich, weil sie Museen liebt. Als die Gruppe nach Hause ging, diskutierten sie über das, was sie gesehen hatten. Einige Schüler waren müde, trotzdem fanden alle den Besuch sehr spannend.`,
    preguntas: [
      { enunciado: 'Clara besuchte das Museum mit ihrer Familie.', respuesta: false },
      { enunciado: 'Die Klasse brauchte mehrere Stunden, um die Ausstellung zu sehen.', respuesta: true },
      { enunciado: 'Clara interessierte sich für die Kunstwerke aus der Antike.', respuesta: false },
      { enunciado: 'Clara schrieb Notizen, damit sie einen Bericht schreiben konnte.', respuesta: true },
      { enunciado: 'Der Lehrer versprach, dass sie bald ein anderes Museum besuchen würden.', respuesta: true },
    ],
  },
  // ── B1 ──────────────────────────────────────────────────────
  {
    slug: 'homeoffice',
    nivel: 'B1',
    titulo: 'Homeoffice – Fluch oder Segen?',
    descripcion: 'Thomas trabaja tres días desde casa. ¿Cuáles son las ventajas y los inconvenientes del teletrabajo?',
    texto: `Seit der Pandemie arbeiten viele Menschen zumindest teilweise von zu Hause aus. Auch Thomas, 38 Jahre alt und Projektmanager bei einer Softwarefirma in Hamburg, ist drei Tage pro Woche im Homeoffice. Er schätzt vor allem die Flexibilität: Er kann morgens länger schlafen, muss nicht pendeln und hat mittags Zeit, gemeinsam mit seiner Frau zu essen.

Allerdings gibt es auch Nachteile. Thomas vermisst den persönlichen Kontakt zu seinen Kollegen. Videokonferenzen sind praktisch, aber sie ersetzen seiner Meinung nach keine echten Gespräche. Außerdem fällt es ihm manchmal schwer, Beruf und Privatleben zu trennen. Oft sitzt er abends noch am Laptop, obwohl der Arbeitstag eigentlich schon längst vorbei ist.

Sein Unternehmen hat inzwischen klare Regeln eingeführt: Mitarbeiter dürfen maximal drei Tage pro Woche remote arbeiten, und nach 18 Uhr sollen keine dienstlichen E-Mails mehr verschickt werden. Thomas findet diese Regelung sinnvoll. „Man braucht klare Grenzen, sonst verschwimmt alles", sagt er.

Für die Zukunft wünscht er sich ein Modell, das noch mehr auf die individuellen Bedürfnisse der Mitarbeiter eingeht. Nicht jeder arbeitet gleich gut von zu Hause aus – manche brauchen das Büro, um konzentriert zu sein.`,
    preguntas: [
      { enunciado: 'Thomas arbeitet jeden Tag im Homeoffice.', respuesta: false },
      { enunciado: 'Ein Vorteil des Homeoffice ist für Thomas, dass er nicht pendeln muss.', respuesta: true },
      { enunciado: 'Thomas findet Videokonferenzen genauso gut wie persönliche Gespräche.', respuesta: false },
      { enunciado: 'Seine Firma hat Regeln für das Homeoffice eingeführt.', respuesta: true },
      { enunciado: 'Thomas möchte in Zukunft ausschließlich im Büro arbeiten.', respuesta: false },
    ],
  },
  {
    slug: 'reise-mit-dem-zug',
    nivel: 'B1',
    titulo: 'Eine Reise mit dem Zug durch Europa',
    descripcion: 'Julia y Kai viajan cuatro semanas por Europa en tren con un Interrail Pass. ¿Qué descubren por el camino?',
    texto: `Letzten Sommer haben sich Julia und ihr Freund Kai entschieden, keinen Flug zu buchen. Stattdessen sind sie mit dem Interrail-Pass durch Europa gereist – vier Wochen lang, mit dem Rucksack und ohne festen Plan. Ihre Route führte von Berlin über Prag, Wien und Ljubljana bis nach Zagreb.

Was sie am meisten überrascht hat, war die Vielfalt, die man mit dem Zug erleben kann. In jedem Land veränderte sich die Landschaft, die Sprache und das Essen. In Wien haben sie zwei Nächte bei einer Freundin übernachtet und die Stadt auf eigene Faust erkundet. In Ljubljana, der Hauptstadt Sloweniens, haben sie hingegen ein günstiges Hostel gefunden und sind mit dem Fahrrad durch die Altstadt gefahren.

Das Reisen mit dem Zug hat natürlich auch seine Tücken. Einmal hatten sie in Prag einen Anschlusszug verpasst und mussten vier Stunden auf den nächsten warten. Trotzdem bereuen sie die Reise nicht. Im Gegenteil: Julia sagt, es war die beste Erfahrung ihres Lebens.

Für das nächste Jahr planen die beiden bereits eine ähnliche Reise durch Skandinavien. Diesmal möchten sie etwas länger an den einzelnen Orten bleiben und nicht so viel hetzen.`,
    preguntas: [
      { enunciado: 'Julia und Kai sind mit dem Flugzeug durch Europa gereist.', respuesta: false },
      { enunciado: 'Ihre Reise dauerte ungefähr einen Monat.', respuesta: true },
      { enunciado: 'In Wien haben sie in einem Hostel übernachtet.', respuesta: false },
      { enunciado: 'Einmal haben sie in Prag einen Zug verpasst.', respuesta: true },
      { enunciado: 'Für das nächste Jahr planen sie eine Reise durch Südeuropa.', respuesta: false },
    ],
  },
  {
    slug: 'gesund-essen',
    nivel: 'B1',
    titulo: 'Gesund essen im Alltag – leichter gesagt als getan',
    descripcion: '¿Por qué es tan difícil comer sano? Un estudio de la Universidad de Bonn analiza los obstáculos y las soluciones.',
    texto: `Viele Menschen wissen, dass eine ausgewogene Ernährung wichtig ist. Aber zwischen Wissen und Handeln liegt oft ein großer Unterschied. Das bestätigt auch eine aktuelle Studie der Universität Bonn: Obwohl neun von zehn Befragten angaben, sich gesünder ernähren zu wollen, schafften es nur drei von zehn, ihre Gewohnheiten dauerhaft zu ändern.

Warum ist das so schwierig? Laut der Studie spielen vor allem Zeit und Kosten eine große Rolle. Frisches Gemüse und Obst ist oft teurer als Fertiggerichte, und nach einem langen Arbeitstag fehlt vielen die Energie zum Kochen. Hinzu kommt, dass Werbung und Gewohnheiten aus der Kindheit das Essverhalten stark beeinflussen.

Ernährungsexpertin Dr. Müller empfiehlt, kleine Schritte zu machen, anstatt alles auf einmal zu ändern. „Wer plötzlich auf alles verzichtet, was er mag, hält das selten lange durch", erklärt sie. Besser sei es, zum Beispiel einmal pro Woche gemeinsam zu kochen, mehr Hülsenfrüchte in den Speiseplan einzubauen oder zuckerhaltige Getränke durch Wasser zu ersetzen.

Außerdem betont sie die Bedeutung von Freude am Essen. Gesunde Ernährung müsse nicht langweilig sein – im Gegenteil: Wer neue Rezepte ausprobiert und verschiedene Küchen der Welt entdeckt, isst nicht nur gesünder, sondern auch abwechslungsreicher.`,
    preguntas: [
      { enunciado: 'Laut der Studie gelingt es den meisten Menschen, ihre Ernährung dauerhaft zu ändern.', respuesta: false },
      { enunciado: 'Zeit und Kosten sind laut der Studie wichtige Hindernisse für gesundes Essen.', respuesta: true },
      { enunciado: 'Dr. Müller empfiehlt, sofort alle ungesunden Gewohnheiten aufzugeben.', respuesta: false },
      { enunciado: 'Die Expertin schlägt vor, zuckerhaltige Getränke durch Wasser zu ersetzen.', respuesta: true },
      { enunciado: 'Dr. Müller ist der Meinung, dass gesundes Essen zwangsläufig langweilig ist.', respuesta: false },
    ],
  },
  {
    slug: 'klimaschutz-im-alltag',
    nivel: 'B1',
    titulo: 'Klimaschutz im Alltag – Was kann jeder tun?',
    descripcion: '¿Qué puede hacer cada persona para reducir su huella de carbono? El texto analiza medidas concretas y el debate sobre la responsabilidad individual.',
    texto: `Der Klimawandel ist eines der drängendsten Probleme unserer Zeit. Viele Menschen fühlen sich jedoch überfordert und fragen sich, ob ihr individuelles Handeln überhaupt einen Unterschied macht. Umweltorganisationen sind sich einig: Ja, es macht einen Unterschied – aber strukturelle Veränderungen auf politischer Ebene sind genauso wichtig.

Im Alltag gibt es viele Möglichkeiten, den eigenen CO₂-Fußabdruck zu reduzieren. Dazu gehören zum Beispiel der Verzicht auf häufige Flugreisen, die Nutzung öffentlicher Verkehrsmittel oder das Fahrrad für kurze Strecken sowie der bewusste Konsum von Lebensmitteln. Weniger Fleisch zu essen ist dabei eine der wirksamsten Maßnahmen, da die Fleischproduktion besonders viele Treibhausgase verursacht.

Auch im Bereich Energie lässt sich viel tun: Geräte ausschalten statt im Standby-Modus lassen, auf Ökostrom wechseln oder die Wohnung besser isolieren. Diese Maßnahmen sparen nicht nur CO₂, sondern auch Geld.

Kritiker wenden ein, dass es ungerecht sei, den Einzelnen in die Pflicht zu nehmen, während große Konzerne weiterhin ungebremst CO₂ ausstoßen. Diese Debatte ist berechtigt. Dennoch betonen Experten, dass beides nötig ist: persönliche Verantwortung und politischer Druck. Wer seinen Lebensstil ändert, sendet auch ein Signal an Wirtschaft und Politik.`,
    preguntas: [
      { enunciado: 'Umweltorganisationen sind der Meinung, dass individuelles Handeln keinen Unterschied macht.', respuesta: false },
      { enunciado: 'Weniger Fleisch zu essen gilt als eine besonders wirksame Maßnahme.', respuesta: true },
      { enunciado: 'Geräte im Standby-Modus zu lassen spart Energie.', respuesta: false },
      { enunciado: 'Laut dem Text verursacht die Fleischproduktion viele Treibhausgase.', respuesta: true },
      { enunciado: 'Der Text lehnt jede Systemkritik ab und sieht die Lösung nur im individuellen Handeln.', respuesta: false },
    ],
  },
  {
    slug: 'lebenslanges-lernen',
    nivel: 'B1',
    titulo: 'Lebenslanges Lernen – Weiterbildung im Erwachsenenalter',
    descripcion: 'En Alemania, 50 millones de adultos se forman cada año. El texto explora por qué el aprendizaje continuo es cada vez más importante.',
    texto: `Früher dachten viele Menschen, dass Lernen mit dem Schulabschluss oder dem Studium endet. Heute sieht das ganz anders aus. In einer Arbeitswelt, die sich durch Digitalisierung und Automatisierung schnell verändert, ist Weiterbildung fast schon eine Notwendigkeit geworden.

Laut einer aktuellen Umfrage des Bundesministeriums für Bildung nehmen in Deutschland jährlich rund 50 Millionen Erwachsene an irgendeiner Form von Weiterbildung teil. Das können Sprachkurse, Online-Seminare, Berufsschulungen oder einfach Workshops in der Freizeit sein. Die Gründe sind vielfältig: Manche wollen sich für eine bessere Stelle qualifizieren, andere möchten ein Hobby vertiefen oder einfach geistig aktiv bleiben.

Besonders beliebt sind in den letzten Jahren digitale Lernplattformen wie Coursera oder die deutschen Anbieter von Online-Kursen. Sie bieten flexible Lernzeiten, günstige Preise und ein breites Themenspektrum. Wer möchte, kann sogar Zertifikate erwerben, die von vielen Arbeitgebern anerkannt werden.

Trotzdem gibt es Hindernisse: Viele Berufstätige klagen über Zeitmangel, und nicht alle haben den gleichen Zugang zu digitalen Geräten oder einer stabilen Internetverbindung. Experten fordern deshalb, dass Arbeitgeber ihren Mitarbeitern mehr Zeit und finanzielle Unterstützung für Weiterbildung zur Verfügung stellen.`,
    preguntas: [
      { enunciado: 'Laut dem Text ist Weiterbildung in der heutigen Arbeitswelt kaum noch notwendig.', respuesta: false },
      { enunciado: 'An Weiterbildungsmaßnahmen nehmen in Deutschland jährlich rund 50 Millionen Erwachsene teil.', respuesta: true },
      { enunciado: 'Digitale Lernplattformen sind wegen ihrer festen Kurszeiten besonders beliebt.', respuesta: false },
      { enunciado: 'Einige Arbeitnehmer haben keinen stabilen Internetzugang.', respuesta: true },
      { enunciado: 'Experten sind der Meinung, dass Weiterbildung allein Aufgabe der Arbeitnehmer ist.', respuesta: false },
    ],
  },
  {
    slug: 'stress-und-erholung',
    nivel: 'B1',
    titulo: 'Stress und Erholung – Wie finden wir die Balance?',
    descripcion: 'Más de la mitad de los alemanes se siente estresado. El texto analiza las causas y qué recomiendan los médicos y psicólogos.',
    texto: `In der modernen Gesellschaft klagen immer mehr Menschen über Stress. Laut der Techniker Krankenkasse fühlt sich mehr als die Hälfte der Deutschen regelmäßig gestresst – hauptsächlich durch Arbeit, familiäre Verpflichtungen und finanzielle Sorgen. Doch was hilft wirklich gegen chronischen Stress?

Schlaf ist nach Ansicht vieler Mediziner das wichtigste Erholungsmittel. Erwachsene brauchen im Durchschnitt sieben bis acht Stunden pro Nacht. Wer dauerhaft weniger schläft, riskiert nicht nur Konzentrationsprobleme, sondern auch ernsthafte gesundheitliche Folgen wie Bluthochdruck oder ein geschwächtes Immunsystem.

Neben ausreichend Schlaf empfehlen Psychologen regelmäßige Bewegung an der frischen Luft, soziale Kontakte und feste Auszeiten vom Smartphone. Besonders das ständige Erreichbarsein durch Handys und E-Mails gilt als einer der Hauptgründe für das Gefühl, nie richtig abschalten zu können.

Einige Unternehmen reagieren bereits auf dieses Problem: Sie bieten ihren Mitarbeitern Meditationskurse an, verkürzen die Besprechungszeiten oder erlauben es, nach der Arbeit keine dienstlichen Nachrichten mehr zu beantworten. Ob solche Maßnahmen langfristig wirken, ist noch Gegenstand der Forschung. Klar ist jedoch: Erholung ist keine Schwäche, sondern eine Voraussetzung für Leistungsfähigkeit und Gesundheit.`,
    preguntas: [
      { enunciado: 'Laut der Techniker Krankenkasse fühlt sich die Mehrheit der Deutschen regelmäßig gestresst.', respuesta: true },
      { enunciado: 'Mediziner empfehlen Erwachsenen, mindestens neun Stunden pro Nacht zu schlafen.', respuesta: false },
      { enunciado: 'Das ständige Erreichbarsein durch Smartphones gilt als ein Hauptgrund für Stress.', respuesta: true },
      { enunciado: 'Alle Unternehmen haben bereits Maßnahmen gegen Stress eingeführt.', respuesta: false },
      { enunciado: 'Der Text beschreibt Erholung als Zeichen von Schwäche.', respuesta: false },
    ],
  },
  {
    slug: 'soziale-medien',
    nivel: 'B1',
    titulo: 'Soziale Medien – Fluch oder Segen für Jugendliche?',
    descripcion: '¿Son las redes sociales buenas o malas para los jóvenes? El texto presenta argumentos de ambos lados y las soluciones que proponen expertos y escuelas.',
    texto: `Kaum ein Thema wird in der Gesellschaft so kontrovers diskutiert wie der Einfluss sozialer Medien auf junge Menschen. Auf der einen Seite bieten Plattformen wie Instagram, TikTok oder YouTube enorme Möglichkeiten: Sie fördern Kreativität, ermöglichen den Austausch mit Gleichgesinnten weltweit und können sogar beim Lernen helfen.

Auf der anderen Seite warnen Psychologen vor möglichen Risiken. Studien zeigen, dass übermäßiger Konsum sozialer Medien mit einem erhöhten Risiko für Angstzustände und Depressionen bei Jugendlichen zusammenhängen kann. Besonders problematisch ist der sogenannte Vergleichsdruck: Viele junge Menschen vergleichen sich ständig mit den – oft idealisierten – Bildern, die andere online teilen.

Eltern und Schulen suchen nach sinnvollen Lösungen. Einige Experten schlagen vor, Kindern unter zwölf Jahren den Zugang zu sozialen Netzwerken zu verbieten. Andere setzen lieber auf Medienkompetenz: Jugendliche sollen lernen, Inhalte kritisch zu hinterfragen und ihren eigenen Konsum zu regulieren.

In Deutschland haben mehrere Bundesländer begonnen, Medienbildung fest in den Lehrplan zu integrieren. Das Ziel ist nicht, Technik abzulehnen, sondern einen bewussten und gesunden Umgang damit zu fördern. Denn soziale Medien werden aus dem Alltag junger Menschen so schnell nicht verschwinden.`,
    preguntas: [
      { enunciado: 'Soziale Medien haben laut dem Text ausschließlich negative Auswirkungen auf Jugendliche.', respuesta: false },
      { enunciado: 'Psychologen warnen vor einem erhöhten Risiko für Depressionen durch übermäßigen Social-Media-Konsum.', respuesta: true },
      { enunciado: 'Alle Experten sind sich einig, dass Kinder unter zwölf Jahren keinen Zugang zu sozialen Medien haben sollten.', respuesta: false },
      { enunciado: 'Einige deutsche Bundesländer haben Medienbildung in den Schulunterricht aufgenommen.', respuesta: true },
      { enunciado: 'Das Ziel der Medienbildung ist es, Jugendliche von Technologie fernzuhalten.', respuesta: false },
    ],
  },
  {
    slug: 'ehrenamt',
    nivel: 'B1',
    titulo: 'Ehrenamt – Warum immer mehr Menschen freiwillig helfen',
    descripcion: '28 millones de alemanes hacen voluntariado. El texto explora las motivaciones y los retos del trabajo voluntario en Alemania.',
    texto: `In Deutschland engagieren sich rund 28 Millionen Menschen ehrenamtlich – das sind fast 30 Prozent der Bevölkerung. Sie helfen in Sportvereinen, Feuerwehren, sozialen Einrichtungen, Umweltorganisationen oder bei der Integration von Geflüchteten. Aber warum tun sie das, ohne dafür bezahlt zu werden?

Die Motive sind vielfältig. Viele geben an, dass das Ehrenamt ihnen das Gefühl gibt, etwas Sinnvolles beizutragen. Andere schätzen den sozialen Aspekt: Man lernt neue Menschen kennen, knüpft Kontakte und fühlt sich weniger allein. Gerade für Rentnerinnen und Rentner ist das Ehrenamt oft eine wichtige Struktur im Alltag und ein Weg, geistig und körperlich aktiv zu bleiben.

Auch für den Lebenslauf kann freiwilliges Engagement von Vorteil sein: Arbeitgeber sehen es häufig als Zeichen von Teamfähigkeit, Verantwortungsbewusstsein und sozialer Kompetenz. Manche Berufsschulen und Universitäten berücksichtigen ehrenamtliche Tätigkeiten sogar bei der Aufnahme.

Trotz der hohen Beteiligung steht das Ehrenamt vor Herausforderungen. Viele Organisationen suchen dringend nach Nachwuchs, weil jüngere Generationen weniger Zeit haben oder andere Prioritäten setzen. Digitale Plattformen versuchen, das zu ändern, indem sie Freiwillige und Organisationen schnell und unkompliziert zusammenbringen.`,
    preguntas: [
      { enunciado: 'Etwa die Hälfte der deutschen Bevölkerung engagiert sich ehrenamtlich.', respuesta: false },
      { enunciado: 'Für viele Rentner ist das Ehrenamt eine wichtige Tagesstruktur.', respuesta: true },
      { enunciado: 'Ehrenamtliches Engagement wird von Arbeitgebern grundsätzlich negativ bewertet.', respuesta: false },
      { enunciado: 'Viele Organisationen haben Schwierigkeiten, junge Freiwillige zu finden.', respuesta: true },
      { enunciado: 'Digitale Plattformen spielen keine Rolle im Bereich des Ehrenamts.', respuesta: false },
    ],
  },
  {
    slug: 'wochenende-auf-dem-bauernhof',
    nivel: 'B1',
    titulo: 'Ein Wochenende auf dem Bauernhof',
    descripcion: 'Elena y su marido pasan un fin de semana en una granja ecológica cerca de Friburgo. Una experiencia inesperadamente fascinante.',
    texto: `Als Elena und ihr Mann beschlossen, mal einen anderen Urlaub auszuprobieren, buchten sie spontan zwei Nächte auf einem Biobauernhof in der Nähe von Freiburg. Sie hatten beide noch nie auf einem Bauernhof übernachtet und wussten nicht genau, was sie erwarten würden.

Die Unterkunft war einfach, aber gemütlich: ein kleines Zimmer mit Holzmöbeln, Blick auf die Felder und Frühstück mit Produkten direkt vom Hof – selbstgemachte Marmelade, frische Eier und Brot aus der eigenen Bäckerei. Elena war sofort begeistert.

Am ersten Tag durften sie bei der Ernte mithelfen. Das war anstrengender, als sie erwartet hatten, aber auch sehr befriedigend. Am Nachmittag zeigte ihnen der Bauer, Georg Huber, wie man Käse herstellt – ein Erlebnis, das Elena als „überraschend faszinierend" beschrieb. Ihr Mann hingegen interessierte sich mehr für die alten Landmaschinen in der Scheune.

Am letzten Abend saßen alle zusammen am Tisch: die Familie Huber, zwei weitere Gäste aus den Niederlanden und Elena mit ihrem Mann. Man redete, lachte und trank lokalen Wein. „Es war das Gegenteil von unserem normalen Alltag", schrieb Elena später in ihrer Reisebewertung, „und genau das hat uns so gut getan."`,
    preguntas: [
      { enunciado: 'Elena und ihr Mann hatten den Urlaub auf dem Bauernhof schon lange geplant.', respuesta: false },
      { enunciado: 'Das Frühstück bestand aus Produkten, die direkt vom Hof stammten.', respuesta: true },
      { enunciado: 'Elena fand die Käseherstellung langweilig.', respuesta: false },
      { enunciado: 'Am letzten Abend aßen nur Elena und ihr Mann mit der Familie Huber.', respuesta: false },
      { enunciado: 'Elena hat nach der Reise eine Bewertung geschrieben.', respuesta: true },
    ],
  },
  // ── fin B1 ──────────────────────────────────────────────────

  // ── B2 ──────────────────────────────────────────────────────
  {
    slug: 'zwischen-zwei-kulturen',
    nivel: 'B2',
    titulo: 'Zwischen zwei Kulturen – Identität im Wandel',
    descripcion: 'Kemal, nacido en Stuttgart de padres turcos, vive entre dos culturas. Un texto sobre identidad, pertenencia y la "hibridez cultural".',
    texto: `Wer in einem Land aufwächst und gleichzeitig die Traditionen einer anderen Kultur zu Hause lebt, kennt das Gefühl: Man gehört irgendwie überall dazu – und manchmal nirgends so ganz. Dieses Phänomen, das Soziologen als „kulturelle Hybridität" bezeichnen, betrifft Millionen von Menschen weltweit und wird in der Migrationsforschung zunehmend als Ressource statt als Problem begriffen.

Kemal, 29 Jahre alt, ist in Stuttgart geboren und aufgewachsen. Seine Eltern kommen aus der Türkei, die Großeltern sprechen kaum Deutsch. Zu Hause wird Türkisch gesprochen, gegessen wird traditionell – aber Kemal studiert Informatik, spielt in einer Band und fühlt sich beiden Welten zugehörig. „Ich übersetz nicht nur Sprachen, ich übersetz auch Denkweisen", sagt er.

Nicht immer verläuft diese Doppelzugehörigkeit reibungslos. Kemal berichtet, dass er in manchen deutschen Kontexten als „zu türkisch" wahrgenommen wird, während ihn Verwandte bei Besuchen in der Türkei als „zu deutsch" bezeichnen. Diese Zuschreibungen empfindet er als einengend – er weigert sich, sich für eine Identität entscheiden zu müssen.

Fachleute betonen, dass mehrsprachige und transkulturelle Biografien in einer globalisierten Welt immer bedeutsamer werden. Arbeitgeber schätzen kulturelle Kompetenz, und gesellschaftlich kann die Fähigkeit, Brücken zwischen Kulturen zu bauen, eine wertvolle Bereicherung sein – vorausgesetzt, die Gesellschaft erkennt dieses Potenzial auch an.`,
    preguntas: [
      { enunciado: 'Soziologen betrachten kulturelle Hybridität zunehmend als Defizit.', respuesta: false },
      { enunciado: 'Kemal fühlt sich ausschließlich der deutschen Kultur zugehörig.', respuesta: false },
      { enunciado: 'In manchen Kontexten wird Kemal als „zu türkisch" oder „zu deutsch" wahrgenommen.', respuesta: true },
      { enunciado: 'Laut dem Text verlieren mehrsprachige Biografien in der globalisierten Welt an Bedeutung.', respuesta: false },
      { enunciado: 'Kemal lehnt es ab, sich auf eine einzige Identität festlegen zu lassen.', respuesta: true },
    ],
  },
  {
    slug: 'vier-tage-woche',
    nivel: 'B2',
    titulo: 'Die Vier-Tage-Woche – Zukunftsmodell oder Utopie?',
    descripcion: '¿Es viable trabajar cuatro días con el mismo salario? El texto analiza los experimentos en Islandia y Reino Unido y el debate entre economistas.',
    texto: `In Island, Großbritannien und zuletzt auch in Deutschland wurde sie erprobt, diskutiert und bejubelt: die Vier-Tage-Woche. Das Modell sieht vor, dass Arbeitnehmer bei gleichem Lohn und gleicher Produktivität einen Tag weniger arbeiten. Klingt verlockend – doch so einfach ist es nicht.

Die Ergebnisse der isländischen Pilotprojekte, die zwischen 2015 und 2019 durchgeführt wurden, waren bemerkenswert positiv: Die Produktivität blieb stabil oder stieg sogar leicht an, während das Wohlbefinden der Beschäftigten sich deutlich verbesserte. Krankheitstage gingen zurück, die Mitarbeiterzufriedenheit stieg. Ähnliche Tendenzen zeigten sich in britischen Versuchen, an denen rund 60 Unternehmen teilnahmen.

Kritiker hingegen warnen vor einer Verallgemeinerung. In Branchen wie dem Gesundheitswesen, dem Einzelhandel oder der Gastronomie sei das Modell kaum umsetzbar, ohne dass entweder die Qualität leidet oder mehr Personal eingestellt werden muss – was wiederum Kosten verursacht. Auch Fragen der Arbeitszeitverteilung innerhalb von Teams sind komplex.

Ökonomen sind gespalten. Manche sehen in der Vier-Tage-Woche eine Antwort auf Burnout-Epidemien und den Fachkräftemangel. Andere befürchten, dass sie die Wettbewerbsfähigkeit des Wirtschaftsstandorts Deutschland gefährden könnte. Was bleibt, ist eine lebhafte Debatte – und die Erkenntnis, dass das Verhältnis zwischen Arbeit und Leben neu verhandelt werden muss.`,
    preguntas: [
      { enunciado: 'Die isländischen Pilotprojekte zur Vier-Tage-Woche zeigten durchgängig negative Ergebnisse.', respuesta: false },
      { enunciado: 'An den britischen Versuchen nahmen rund 60 Unternehmen teil.', respuesta: true },
      { enunciado: 'Laut dem Text lässt sich die Vier-Tage-Woche problemlos in allen Branchen einführen.', respuesta: false },
      { enunciado: 'Unter Ökonomen herrscht Einigkeit darüber, dass die Vier-Tage-Woche vorteilhaft ist.', respuesta: false },
      { enunciado: 'Der Text schlägt vor, das Verhältnis zwischen Arbeit und Leben neu zu überdenken.', respuesta: true },
    ],
  },
  {
    slug: 'overtourism',
    nivel: 'B2',
    titulo: 'Overtourism – Wenn der Massentourismus Städte erdrückt',
    descripcion: 'Venecia, Barcelona, Dubrovnik: ciudades que sufren el exceso de turismo. El texto analiza causas, consecuencias y posibles soluciones.',
    texto: `Venedig, Barcelona, Dubrovnik – diese Städte haben eines gemeinsam: Sie leiden unter dem, was Experten als „Overtourism" bezeichnen. Gemeint ist ein Übermaß an Touristen, das die lokale Infrastruktur, die Umwelt und das Alltagsleben der Einheimischen erheblich belastet. Was für Besucher wie ein Traumziel wirkt, ist für die Bewohner oft längst zur Zumutung geworden.

In Barcelona etwa haben in den vergangenen Jahren Tausende von Einwohnern gegen den Massentourismus demonstriert. Sie beklagen steigende Mietpreise, überfüllte Straßen und den Verlust des ursprünglichen Stadtcharakters durch die Ausbreitung von Souvenirläden und Fast-Food-Ketten. Manche Stadtviertel sind kaum noch wiederzuerkennen.

Einige Städte reagieren mit konkreten Maßnahmen: Venedig hat zeitweise Eintrittsgebühren für Tagesbesucher eingeführt, andere Orte begrenzen die Zahl der Airbnb-Wohnungen oder schließen bestimmte Bereiche für große Reisegruppen. Ob diese Maßnahmen langfristig wirken, ist jedoch umstritten.

Im Kern stellt Overtourism die Frage, wie Tourismus nachhaltig gestaltet werden kann. Reisende können dazu beitragen, indem sie weniger besuchte Ziele wählen, außerhalb der Hochsaison reisen und lokale Betriebe bevorzugen. Doch letztlich braucht es auch politische Rahmenbedingungen, die nicht nur Wirtschaftsinteressen, sondern auch das Wohlbefinden der Bevölkerung schützen.`,
    preguntas: [
      { enunciado: 'Overtourism beschreibt das Phänomen, dass zu wenige Touristen eine Stadt besuchen.', respuesta: false },
      { enunciado: 'In Barcelona haben Einwohner gegen den Massentourismus protestiert.', respuesta: true },
      { enunciado: 'Venedig hat dauerhaft Eintrittsgebühren für alle Besucher eingeführt.', respuesta: false },
      { enunciado: 'Laut dem Text können auch individuelle Reisende zur Lösung des Problems beitragen.', respuesta: true },
      { enunciado: 'Der Text ist der Ansicht, dass politische Maßnahmen zur Bekämpfung von Overtourism unnötig sind.', respuesta: false },
    ],
  },
  {
    slug: 'ki-in-der-medizin',
    nivel: 'B2',
    titulo: 'Künstliche Intelligenz in der Medizin – Chance und Risiko',
    descripcion: 'La IA ya diagnostica enfermedades con gran precisión. El texto debate si puede reemplazar a los médicos y qué riesgos éticos y legales plantea.',
    texto: `Die Medizin steht vor einem tiefgreifenden Wandel. Künstliche Intelligenz kann bereits heute Röntgenbilder auswerten, Krebszellen in Gewebeproben erkennen und Risikoprofile für Herzerkrankungen erstellen – oft mit einer Präzision, die menschliche Experten übersteigt. Doch was bedeutet das für die Arzt-Patienten-Beziehung und für ethische Fragen der Verantwortung?

Befürworter betonen, dass KI-Systeme Ärzte nicht ersetzen, sondern entlasten sollen. Routineaufgaben können automatisiert werden, sodass Medizinerinnen und Mediziner mehr Zeit für das Gespräch mit ihren Patientinnen und Patienten haben. In der Diagnostik kann KI als zweite Meinung fungieren und potenzielle Fehler reduzieren.

Kritiker hingegen mahnen zur Vorsicht. Algorithmen werden mit historischen Daten trainiert, die gesellschaftliche Ungleichheiten widerspiegeln können. So wurde etwa festgestellt, dass manche KI-Systeme bei der Diagnose von Hautkrankheiten weniger präzise bei Menschen mit dunkler Hautfarbe sind, weil Trainingsbilder überwiegend hellhäutige Personen zeigten. Auch die Frage der Haftung – wer ist verantwortlich, wenn ein Algorithmus einen Fehler macht? – ist rechtlich noch weitgehend ungeklärt.

Einig sind sich beide Seiten darin, dass der Einsatz von KI in der Medizin strenger Regulierung bedarf. Transparenz, Überprüfbarkeit und ein klarer rechtlicher Rahmen sind Grundvoraussetzungen, damit diese Technologie dem Menschen nutzt, ohne ihm zu schaden.`,
    preguntas: [
      { enunciado: 'KI-Systeme in der Medizin sollen laut dem Text Ärzte vollständig ersetzen.', respuesta: false },
      { enunciado: 'Manche KI-Systeme zeigen bei der Diagnose Unterschiede je nach Hautfarbe der Patienten.', respuesta: true },
      { enunciado: 'Die rechtliche Frage der Haftung bei KI-Fehlern ist bereits vollständig geregelt.', respuesta: false },
      { enunciado: 'Sowohl Befürworter als auch Kritiker sind sich einig, dass KI in der Medizin reguliert werden muss.', respuesta: true },
      { enunciado: 'Laut dem Text können KI-Systeme keine Krebszellen erkennen.', respuesta: false },
    ],
  },
  {
    slug: 'einsamkeit',
    nivel: 'B2',
    titulo: 'Einsamkeit – die stille Epidemie unserer Zeit',
    descripcion: 'La soledad crónica es tan dañina como fumar 15 cigarrillos al día. El texto analiza a quién afecta, qué hace la política y qué podemos hacer.',
    texto: `Einsamkeit gilt als eines der unterschätztesten Gesundheitsrisiken der Gegenwart. Studien zeigen, dass chronische Einsamkeit das Risiko für Herzerkrankungen, Schlaganfälle und sogar Demenz erhöht – in einem Ausmaß, das dem Rauchen von 15 Zigaretten täglich entsprechen soll. Dabei ist Einsamkeit kein Randphänomen: In Deutschland gibt sich laut einer Umfrage des Robert Koch-Instituts fast ein Viertel der Bevölkerung als einsam zu erkennen.

Besonders betroffen sind ältere Menschen, die nach dem Tod des Partners oder dem Auszug der Kinder soziale Kontakte verlieren. Doch auch junge Erwachsene zwischen 18 und 30 Jahren berichten überraschend häufig von Einsamkeitsgefühlen – trotz oder vielleicht gerade wegen der ständigen Vernetzung in sozialen Medien. Oberflächliche digitale Kontakte, so die These vieler Psychologen, können das Bedürfnis nach echter Nähe nicht erfüllen.

Politisch wurde das Thema lange ignoriert. Großbritannien hat als erstes europäisches Land eine Staatsministerin für Einsamkeit ernannt und nationale Strategien entwickelt, um soziale Isolation zu bekämpfen. In Deutschland hinkt die politische Reaktion noch hinterher, obwohl Fachleute schon länger auf die Dringlichkeit hinweisen.

Was können Einzelne tun? Experten empfehlen, regelmäßige Treffen zu festen Terminen zu planen, sich ehrenamtlich zu engagieren oder Nachbarschaftsinitiativen beizutreten. Denn Einsamkeit entsteht nicht immer durch fehlende Kontakte – sondern durch mangelnde Qualität der vorhandenen.`,
    preguntas: [
      { enunciado: 'Chronische Einsamkeit kann laut Studien mit dem Rauchen von 15 Zigaretten täglich verglichen werden.', respuesta: true },
      { enunciado: 'Junge Erwachsene sind laut dem Text kaum von Einsamkeit betroffen.', respuesta: false },
      { enunciado: 'Großbritannien hat eine Ministerin ernannt, die sich gezielt mit Einsamkeit befasst.', respuesta: true },
      { enunciado: 'Deutschland hat bereits umfangreiche nationale Strategien gegen Einsamkeit entwickelt.', respuesta: false },
      { enunciado: 'Laut dem Text entsteht Einsamkeit immer nur durch fehlende soziale Kontakte.', respuesta: false },
    ],
  },
  {
    slug: 'kolonialzeit-raubkunst',
    nivel: 'B2',
    titulo: 'Das Erbe der Kolonialzeit – Raubkunst und Rückgabedebatte',
    descripcion: '¿Deben los museos europeos devolver las obras de arte coloniales? El texto analiza el debate sobre las Benin-Bronzen y la restitución cultural.',
    texto: `Europäische Museen beherbergen Millionen von Kunstwerken und Kulturgütern, die während der Kolonialzeit unter zweifelhaften Umständen in die Sammlungen gelangt sind. Die Debatte darüber, ob und wie diese Objekte an ihre Herkunftsländer zurückgegeben werden sollen, gewinnt seit Jahren an Intensität.

Deutschland hat in dieser Diskussion eine ambivalente Rolle gespielt. Einerseits hat die Bundesregierung die Rückgabe von über tausend Benin-Bronzen an Nigeria angekündigt – ein historischer Schritt, der international Anerkennung fand. Andererseits stocken die Verhandlungen mit anderen Ländern, und bei vielen Objekten ist die Herkunft nicht eindeutig dokumentiert.

Kritiker werfen deutschen und europäischen Institutionen vor, trotz guter Absichtserklärungen zu langsam zu handeln. Zudem wird bemängelt, dass die Bedingungen für Rückgaben oft einseitig von den abgebenden Institutionen festgelegt werden – ohne gleichberechtigte Beteiligung der Herkunftsgesellschaften.

Auf der anderen Seite argumentieren manche Museumsdirektoren, dass die Objekte in Europa besser erforscht und konserviert worden seien und einem weltweiten Publikum zugänglich gemacht wurden. Dieses Argument stößt in den betroffenen Ländern zunehmend auf Widerstand. Die Forderung ist klar: Herkunftsgesellschaften sollen selbst entscheiden dürfen, was mit ihrem kulturellen Erbe geschieht – unabhängig davon, wo es sich gerade befindet.`,
    preguntas: [
      { enunciado: 'Deutschland hat die Rückgabe von Benin-Bronzen an Nigeria angekündigt.', respuesta: true },
      { enunciado: 'Laut dem Text ist die Herkunft aller Objekte in europäischen Museen klar dokumentiert.', respuesta: false },
      { enunciado: 'Kritiker sind zufrieden mit dem Tempo der Rückgaben.', respuesta: false },
      { enunciado: 'Einige Museumsdirektoren argumentieren, die Objekte seien in Europa gut konserviert und erforscht worden.', respuesta: true },
      { enunciado: 'Die Herkunftsgesellschaften fordern das Recht, selbst über ihr kulturelles Erbe zu entscheiden.', respuesta: true },
    ],
  },
  {
    slug: 'gentrifizierung',
    nivel: 'B2',
    titulo: 'Gentrifizierung – Wenn Aufwertung zur Verdrängung wird',
    descripcion: 'La rehabilitación urbana en Berlín, Hamburgo y Múnich expulsa a los vecinos con menos recursos. Un texto sobre el precio social del progreso urbano.',
    texto: `Wenn ein Stadtviertel saniert, aufgewertet und attraktiver wird, klingt das zunächst nach einer Erfolgsgeschichte. Doch hinter dem Begriff „Gentrifizierung" verbirgt sich ein komplexer sozialer Prozess, der für viele Bewohnerinnen und Bewohner alles andere als positiv ist. Günstige Altbauwohnungen werden zu Luxusapartments, Eckkneipen weichen Boutiquen, und alteingesessene Mieter können sich die steigenden Mieten nicht mehr leisten.

Das Phänomen ist in deutschen Großstädten wie Berlin, Hamburg und München seit Jahren zu beobachten. Besonders betroffen sind einkommensschwache Haushalte, Rentner und Familien mit Kindern, die in günstige Randgebiete verdrängt werden – weit weg von ihren sozialen Netzwerken, Schulen und Arbeitsplätzen. Soziologen sprechen von einem „sozialen Riss", der durch Städte geht.

Stadtentwickler und Politiker stehen vor einem Dilemma: Investitionen in Infrastruktur und Wohnqualität sind notwendig, dürfen aber nicht auf Kosten sozialer Durchmischung gehen. Einige Kommunen reagieren mit Mietpreisbremsen, dem Vorkaufsrecht für Gemeinden oder der Ausweisung von Sozialmietwohnungskontingenten. Die Wirksamkeit dieser Instrumente wird jedoch kontrovers diskutiert.

Was klar ist: Stadtentwicklung ist keine rein technische, sondern zutiefst politische Aufgabe. Wer bestimmt, wie eine Stadt aussehen soll – und wer darin leben darf? Diese Frage berührt Grundüberzeugungen über Gerechtigkeit, Teilhabe und das Recht auf Stadt.`,
    preguntas: [
      { enunciado: 'Gentrifizierung hat laut dem Text ausschließlich positive Auswirkungen für alle Bewohner.', respuesta: false },
      { enunciado: 'Besonders einkommensschwache Haushalte sind von Verdrängung betroffen.', respuesta: true },
      { enunciado: 'Laut dem Text haben alle Kommunen dasselbe Instrument zur Bekämpfung der Gentrifizierung eingesetzt.', respuesta: false },
      { enunciado: 'Soziologen beschreiben Gentrifizierung als einen „sozialen Riss" durch die Städte.', respuesta: true },
      { enunciado: 'Der Text betrachtet Stadtentwicklung als rein technische Aufgabe ohne politische Dimension.', respuesta: false },
    ],
  },
  {
    slug: 'schlaf-und-leistung',
    nivel: 'B2',
    titulo: 'Schlaf und Leistung – Was die Wissenschaft wirklich weiß',
    descripcion: 'Dormir poco no es señal de ambición: la ciencia lo desmiente. Un texto sobre los efectos del sueño en la cognición, la salud y la productividad.',
    texto: `Schlafen gilt in vielen Gesellschaften immer noch als Zeichen von Faulheit – wer wenig schläft, gilt als besonders ehrgeizig und leistungsfähig. Doch die Schlafforschung der letzten zwei Jahrzehnte hat dieses Bild gründlich widerlegt. Schlaf ist keine passive Auszeit, sondern ein hochaktiver biologischer Prozess, der für kognitive Leistungsfähigkeit, emotionale Regulation und körperliche Gesundheit unverzichtbar ist.

Während des Schlafs festigt das Gehirn Erinnerungen, verarbeitet emotionale Erlebnisse und reinigt sich von Stoffwechselabfällen – darunter Proteine, die mit der Entstehung von Alzheimer in Verbindung gebracht werden. Schlafentzug hingegen beeinträchtigt Urteilsvermögen, Kreativität und Impulskontrolle in einem Maß, das dem Alkoholeinfluss vergleichbar ist.

Besonders alarmierend ist, dass Menschen nach schlafarmen Nächten ihre eigene Beeinträchtigung systematisch unterschätzen. Wer vier Stunden geschlafen hat, glaubt oft, funktionsfähig zu sein – ein trügerisches Selbstgefühl, das in Berufen mit hoher Verantwortung, wie etwa in der Medizin oder im Transportwesen, fatale Folgen haben kann.

Trotz dieser Erkenntnisse verändert sich die gesellschaftliche Einstellung nur langsam. Einige Unternehmen bieten inzwischen Ruheräume und flexible Arbeitszeiten an, um erholsamen Schlaf zu fördern. Doch solange Erschöpfung als Leistungsmerkmal gilt, wird es schwer sein, eine echte Schlafkultur zu etablieren – zum Schaden der Gesundheit und letztlich auch der Produktivität.`,
    preguntas: [
      { enunciado: 'Die Schlafforschung hat bestätigt, dass wenig Schlaf ein Zeichen von Leistungsfähigkeit ist.', respuesta: false },
      { enunciado: 'Während des Schlafs reinigt das Gehirn sich von Stoffwechselabfällen.', respuesta: true },
      { enunciado: 'Menschen nach schlafarmen Nächten überschätzen in der Regel ihre eigene Beeinträchtigung.', respuesta: false },
      { enunciado: 'Schlafentzug kann Auswirkungen haben, die dem Einfluss von Alkohol vergleichbar sind.', respuesta: true },
      { enunciado: 'Die gesellschaftliche Einstellung zum Schlaf hat sich laut dem Text bereits grundlegend verändert.', respuesta: false },
    ],
  },
  {
    slug: 'populismus-in-europa',
    nivel: 'B2',
    titulo: 'Demokratie unter Druck – Populismus in Europa',
    descripcion: 'El populismo avanza en Europa. El texto analiza qué es, por qué atrae a votantes de todos los perfiles y qué reto supone para la democracia liberal.',
    texto: `Seit einigen Jahren beobachten Politikwissenschaftler mit wachsender Sorge den Aufstieg populistischer Parteien in Europa. Von Ungarn über Italien bis nach Schweden haben Bewegungen an Zulauf gewonnen, die mit einfachen Antworten auf komplexe Probleme punkten und dabei oft etablierte Institutionen, Medien und gesellschaftliche Minderheiten als Feinde des „einfachen Volkes" darstellen.

Populismus ist schwer zu definieren, weil er keine einheitliche Ideologie darstellt. Er tritt sowohl von rechts als auch von links auf und nutzt in beiden Fällen eine ähnliche Rhetorik der Konfrontation: hier das korrupte Establishment, dort das wahre Volk. Was Rechtspopulismus von Linkspopulismus unterscheidet, ist weniger die Methode als der Inhalt – insbesondere die Haltung gegenüber Migration, Globalisierung und kultureller Identität.

Demokratieforscher warnen davor, Populismus allein als Protest der Bildungsfernen oder Abgehängten zu verstehen. Studien zeigen, dass populistische Parteien auch bei gut ausgebildeten und wirtschaftlich stabilen Wählern punkten – oft aus Protest gegen ein politisches System, dem sie nicht mehr vertrauen.

Die Herausforderung für liberale Demokratien besteht darin, auf legitime Unzufriedenheit zu reagieren, ohne dabei Grundwerte wie Rechtsstaatlichkeit, Pressefreiheit und Minderheitenschutz zu opfern. Das erfordert keine Anpassung an populistische Rhetorik, sondern glaubwürdige politische Angebote und eine ehrliche Auseinandersetzung mit den Ursachen des Vertrauensverlusts.`,
    preguntas: [
      { enunciado: 'Populismus ist eine klar definierte politische Ideologie mit einheitlichem Programm.', respuesta: false },
      { enunciado: 'Populistische Parteien gewinnen laut Studien auch bei gut ausgebildeten Wählern an Zustimmung.', respuesta: true },
      { enunciado: 'Laut dem Text tritt Populismus ausschließlich in rechtsgerichteten Parteien auf.', respuesta: false },
      { enunciado: 'Demokratieforscher empfehlen, populistische Rhetorik zu übernehmen, um Wähler zurückzugewinnen.', respuesta: false },
      { enunciado: 'Der Text beschreibt den Aufstieg populistischer Parteien als europaweites Phänomen.', respuesta: true },
    ],
  },
  {
    slug: 'minimalismus',
    nivel: 'B2',
    titulo: 'Minimalismus – Weniger haben, mehr leben?',
    descripcion: '¿Tener menos hace más feliz? El texto examina el auge del minimalismo, sus raíces en Japón y las críticas que recibe como fenómeno de lujo.',
    texto: `In einer Welt, die auf ständiges Wachstum und Konsum ausgerichtet ist, wächst eine Gegenbewegung: der Minimalismus. Was einst als Randphänomen galt, hat sich zu einem kulturellen Trend entwickelt, der Bücher, Podcasts und ganze Instagram-Kanäle füllt. Die Botschaft ist simpel: Wer weniger besitzt, lebt befreiter.

Die Ursprünge des modernen Minimalismus liegen unter anderem in Japan, wo die Aufräum-Methode der Organisationsberaterin Marie Kondo weltweit bekannt wurde. Ihr Prinzip – behalte nur, was Freude macht – hat Millionen von Menschen dazu gebracht, Kleiderschränke auszumisten, Bücher zu verschenken und Wohnungen radikal zu entrümpeln.

Doch Minimalismus ist mehr als Aufräumen. In seiner konsequentesten Form hinterfragt er die Grundannahmen westlicher Konsumgesellschaften: Macht Besitz wirklich glücklicher? Welche Rolle spielen Statussymbole für Selbstwertgefühl und soziale Zugehörigkeit? Forschungen zur subjektiven Lebensqualität zeigen, dass ab einem bestimmten Wohlstandsniveau zusätzlicher Besitz kaum noch zum Glücksempfinden beiträgt.

Kritiker weisen darauf hin, dass Minimalismus ein Luxusphänomen sein kann: Wer grundlegende Bedürfnisse nicht gesichert hat, kann sich keine Philosophie des Weglassens leisten. Zudem läuft er Gefahr, zu einer weiteren Lifestyle-Marke zu werden, die am Ende neue Konsumprodukte – designte Aufbewahrungsboxen, teure Capsule-Wardrobes – verkauft, anstatt wirklich zu einem bewussteren Leben beizutragen.`,
    preguntas: [
      { enunciado: 'Der moderne Minimalismus hat seine Wurzeln unter anderem in Japan.', respuesta: true },
      { enunciado: 'Marie Kondos Methode besagt, man solle alles behalten, was praktisch ist.', respuesta: false },
      { enunciado: 'Laut Forschungen steigt das Glücksempfinden mit zunehmendem Besitz unbegrenzt an.', respuesta: false },
      { enunciado: 'Kritiker bezeichnen Minimalismus unter Umständen als ein Luxusphänomen.', respuesta: true },
      { enunciado: 'Der Text ist ausschließlich positiv gegenüber dem Minimalismus und nennt keine Einwände.', respuesta: false },
    ],
  },
  // ── fin B2 ──────────────────────────────────────────────────

  {
    slug: 'tagesausflug',
    nivel: 'A2',
    titulo: 'Der Tagesausflug',
    descripcion: 'Paul und Maria planen einen Tagesausflug in die Berge.',
    texto: `Paul und Maria planen einen Tagesausflug in die Berge. Bevor sie losfahren, packen sie ihre Rucksäcke und bereiten ein Picknick vor. Sie wollen früh aufbrechen, vorher tanken sie aber noch ihr Auto. Nachdem sie sich alle vorbereitet haben, starten sie ihre Reise. Es ist ein sonniger Tag, und beide freuen sich auf den Ausflug.

Nach der langen Autofahrt erreichen sie den Berg. Nach der Ankunft machen sie eine kurze Pause, um sich auszuruhen und etwas zu trinken. Nachher beginnen sie den Wanderweg hinaufzusteigen, der zu einem kleinen See führt. Der Weg ist steil, aber die Aussicht ist wunderschön, und sie sehen den See schon in der Ferne.

Am Nachmittag machen sie ein Picknick am See. Bevor sie zurückfahren, machen sie noch einige Fotos, um sich an den Tag zu erinnern. Vor der Rückfahrt genießen sie noch die frische Luft. Nachdem sie den Berg hinuntergegangen sind, fahren sie entspannt nach Hause.`,
    preguntas: [
      { enunciado: 'Paul und Maria tanken das Auto, bevor sie losfahren.', respuesta: true },
      { enunciado: 'Nach der Ankunft machen sie eine Pause.', respuesta: true },
      { enunciado: 'Nachdem sie am See angekommen sind, machen sie ein Picknick.', respuesta: true },
      { enunciado: 'Vor der Rückfahrt machen sie keine Fotos.', respuesta: false },
      { enunciado: 'Bevor sie nach Hause fahren, genießen sie die frische Luft.', respuesta: true },
    ],
  },
];

// Permite importar desde Node.js (generate-pages.js) sin romper el navegador
if (typeof module !== 'undefined') module.exports = TEXTOS;
