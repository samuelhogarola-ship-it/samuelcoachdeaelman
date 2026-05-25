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

function getTextoBySlug(slug) {
  return TEXTOS.find(t => t.slug === slug) || null;
}

function getTextos() {
  return TEXTOS;
}

function renderLista(container) {
  const niveles = [...new Set(TEXTOS.map(t => t.nivel))];
  let html = '';
  niveles.forEach(nivel => {
    const grupo = TEXTOS.filter(t => t.nivel === nivel);
    html += `<div class="lese-nivel-grupo">
      <h2 class="lese-nivel-titulo">Nivel ${nivel}</h2>
      <div class="lese-grid">`;
    grupo.forEach(t => {
      html += `<a class="lese-card" href="/leseverstehen/${t.nivel.toLowerCase()}/${t.slug}/">
        <span class="lese-card-nivel">${t.nivel}</span>
        <h3>${t.titulo}</h3>
        <p>${t.descripcion}</p>
        <span class="lese-card-cta">Leer y practicar →</span>
      </a>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}

function renderLectura(container, slug) {
  const texto = getTextoBySlug(slug);
  if (!texto) {
    container.innerHTML = '<p class="lese-error">Texto no encontrado.</p>';
    return;
  }

  const parrafos = texto.texto.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');

  const preguntasHtml = texto.preguntas.map((p, i) => `
    <div class="lese-pregunta" id="pregunta-${i}">
      <p class="lese-pregunta-enunciado"><span class="lese-num">${i + 1}.</span> ${p.enunciado}</p>
      <div class="lese-opciones">
        <button class="lese-btn lese-btn-richtig" data-index="${i}" data-valor="true">Richtig</button>
        <button class="lese-btn lese-btn-falsch" data-index="${i}" data-valor="false">Falsch</button>
      </div>
      <p class="lese-feedback" aria-live="polite"></p>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="lese-lectura-wrap">
      <div class="lese-texto-col">
        <span class="lese-badge-nivel">${texto.nivel}</span>
        <h1 class="lese-titulo">${texto.titulo}</h1>
        <div class="lese-cuerpo">${parrafos}</div>
      </div>
      <div class="lese-ejercicio-col">
        <h2 class="lese-ejercicio-titulo">¿Has entendido el texto?</h2>
        <p class="lese-ejercicio-sub">Indica si cada frase es <strong>Richtig</strong> (verdadero) o <strong>Falsch</strong> (falso).</p>
        <div class="lese-preguntas">${preguntasHtml}</div>
        <div class="lese-resultado" hidden>
          <p class="lese-resultado-texto"></p>
          <button class="lese-btn-reiniciar">Intentar de nuevo</button>
        </div>
      </div>
    </div>
    <div class="lese-back">
      <a href="/leseverstehen/" class="lese-volver">← Volver a la lista</a>
    </div>
  `;

  let respuestas = new Array(texto.preguntas.length).fill(null);

  function comprobarFin() {
    if (respuestas.every(r => r !== null)) {
      const aciertos = respuestas.filter((r, i) => r === texto.preguntas[i].respuesta).length;
      const resultado = container.querySelector('.lese-resultado');
      const textoResultado = container.querySelector('.lese-resultado-texto');
      textoResultado.textContent = `Resultado: ${aciertos} de ${texto.preguntas.length} correctas.`;
      resultado.hidden = false;
      resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  container.addEventListener('click', e => {
    const btn = e.target.closest('.lese-btn[data-index]');
    if (!btn) return;

    const i = parseInt(btn.dataset.index, 10);
    const valor = btn.dataset.valor === 'true';
    const correcta = texto.preguntas[i].respuesta;
    const bloque = container.querySelector(`#pregunta-${i}`);
    const feedback = bloque.querySelector('.lese-feedback');

    bloque.querySelectorAll('.lese-btn[data-index]').forEach(b => {
      b.disabled = true;
      b.classList.remove('lese-btn-seleccionado', 'lese-correcto', 'lese-incorrecto');
    });

    btn.classList.add('lese-btn-seleccionado');
    if (valor === correcta) {
      btn.classList.add('lese-correcto');
      feedback.textContent = '✓ Richtig!';
      feedback.className = 'lese-feedback lese-feedback-ok';
    } else {
      btn.classList.add('lese-incorrecto');
      feedback.textContent = `✗ Falsch. Die richtige Antwort ist: ${correcta ? 'Richtig' : 'Falsch'}.`;
      feedback.className = 'lese-feedback lese-feedback-error';
      const correctBtn = bloque.querySelector(`.lese-btn[data-valor="${correcta}"]`);
      if (correctBtn) correctBtn.classList.add('lese-correcto');
    }

    respuestas[i] = valor;
    comprobarFin();
  });

  container.querySelector('.lese-btn-reiniciar')?.addEventListener('click', () => {
    renderLectura(container, slug);
  });
}
