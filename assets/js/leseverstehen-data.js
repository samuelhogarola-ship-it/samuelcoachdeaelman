const TEXTOS = [
  {
    slug: 'auf-dem-markt',
    nivel: 'B1',
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
    nivel: 'B1',
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
    nivel: 'B1',
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
    nivel: 'B1',
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
    nivel: 'B1',
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
    nivel: 'B1',
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
    nivel: 'B1',
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
    nivel: 'B1',
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

  // ── A1 ──────────────────────────────────────────────────────
  {
    slug: 'meine-familie',
    nivel: 'A1',
    titulo: 'Meine Familie',
    descripcion: 'Lisa presenta a su pequeña familia. Un texto A1 con vocabulario básico sobre la familia.',
    texto: `Lisa hat eine kleine Familie. Sie hat eine Mutter, einen Vater und einen Bruder. Ihr Bruder heißt Tom. Tom ist acht Jahre alt. Lisa ist zehn Jahre alt.

Lisas Vater heißt Klaus. Er ist Lehrer. Lisas Mutter heißt Anna. Sie ist Ärztin. Die Familie wohnt in München.

Am Wochenende essen sie zusammen. Sie mögen Pizza und Salat. Tom trinkt Apfelsaft. Lisa trinkt Wasser. Die Familie ist sehr glücklich.`,
    preguntas: [
      { enunciado: 'Lisa hat zwei Geschwister.', respuesta: false },
      { enunciado: 'Lisas Vater ist Lehrer.', respuesta: true },
      { enunciado: 'Tom ist zehn Jahre alt.', respuesta: false },
      { enunciado: 'Die Familie wohnt in München.', respuesta: true },
      { enunciado: 'Am Wochenende essen sie zusammen.', respuesta: true },
    ],
  },
  {
    slug: 'das-wetter',
    nivel: 'A1',
    titulo: 'Das Wetter',
    descripcion: 'Peter habla del tiempo en las cuatro estaciones. Vocabulario A1 sobre el clima.',
    texto: `Im Sommer ist es warm und sonnig. Peter geht gern schwimmen. Er mag den Sommer sehr. Im Winter ist es kalt. Es schneit oft. Peter spielt dann Fußball in der Halle.

Im Frühling ist es schön. Die Blumen sind bunt. Im Herbst ist es windig und es regnet viel. Peter trägt dann eine Jacke.

Peters Lieblingszeit ist der Sommer. Er schwimmt gern im See. Das macht er jeden Tag.`,
    preguntas: [
      { enunciado: 'Im Sommer geht Peter schwimmen.', respuesta: true },
      { enunciado: 'Im Winter spielt Peter Fußball draußen.', respuesta: false },
      { enunciado: 'Im Frühling regnet es viel.', respuesta: false },
      { enunciado: 'Peters Lieblingszeit ist der Winter.', respuesta: false },
      { enunciado: 'Im Herbst trägt Peter eine Jacke.', respuesta: true },
    ],
  },
  {
    slug: 'im-supermarkt',
    nivel: 'A1',
    titulo: 'Im Supermarkt',
    descripcion: 'Emma va al supermercado con una lista de la compra. Vocabulario A1 sobre alimentos.',
    texto: `Emma geht heute in den Supermarkt. Sie braucht Milch, Brot und Äpfel. Sie hat eine Einkaufsliste. Die Liste ist kurz.

Im Supermarkt findet Emma die Milch im Kühlschrank. Das Brot ist beim Eingang. Die Äpfel sind im Obstbereich. Emma kauft auch Schokolade. Die mag sie sehr.

An der Kasse bezahlt Emma. Alles kostet sechs Euro. Emma geht dann nach Hause.`,
    preguntas: [
      { enunciado: 'Emma kauft Milch, Brot und Äpfel.', respuesta: true },
      { enunciado: 'Emma findet die Milch im Obstbereich.', respuesta: false },
      { enunciado: 'Emma kauft auch Schokolade.', respuesta: true },
      { enunciado: 'Alles kostet zehn Euro.', respuesta: false },
      { enunciado: 'Emma hat eine Einkaufsliste.', respuesta: true },
    ],
  },
  {
    slug: 'mein-zimmer',
    nivel: 'A1',
    titulo: 'Mein Zimmer',
    descripcion: 'Max describe su habitación. Vocabulario A1 sobre muebles y objetos de casa.',
    texto: `Max hat ein kleines Zimmer. Es gibt ein Bett, einen Schreibtisch und einen Stuhl. Das Bett ist blau. Der Schreibtisch ist braun. An der Wand hängen Bilder.

Max hat viele Bücher. Die Bücher stehen im Regal. Er liest sehr gern. Sein Zimmer ist oft unordentlich. Seine Mutter sagt: „Räum dein Zimmer auf!"

Das Fenster ist groß. Max kann den Garten sehen. Er mag sein Zimmer sehr.`,
    preguntas: [
      { enunciado: 'Max hat ein großes Zimmer.', respuesta: false },
      { enunciado: 'Das Bett ist blau.', respuesta: true },
      { enunciado: 'Max hat keine Bücher.', respuesta: false },
      { enunciado: 'Das Zimmer ist immer ordentlich.', respuesta: false },
      { enunciado: 'Max kann den Garten aus dem Fenster sehen.', respuesta: true },
    ],
  },
  {
    slug: 'der-morgen',
    nivel: 'A1',
    titulo: 'Der Morgen',
    descripcion: 'Lena describe su rutina matutina. Vocabulario A1 sobre la rutina diaria.',
    texto: `Lena steht um sieben Uhr auf. Sie geht ins Bad. Sie wäscht sich und putzt die Zähne. Dann zieht sie sich an.

Zum Frühstück isst Lena Brot mit Butter. Sie trinkt Orangensaft. Das Frühstück ist ihr Lieblingsessen. Um halb acht geht sie zur Schule. Die Schule ist nicht weit.

Lena ist immer pünktlich. Sie mag die Schule. Ihre Lehrerin ist nett.`,
    preguntas: [
      { enunciado: 'Lena steht um acht Uhr auf.', respuesta: false },
      { enunciado: 'Zum Frühstück isst Lena Brot mit Butter.', respuesta: true },
      { enunciado: 'Lena trinkt Kaffee zum Frühstück.', respuesta: false },
      { enunciado: 'Die Schule ist weit von Lenas Haus.', respuesta: false },
      { enunciado: 'Lena ist immer pünktlich.', respuesta: true },
    ],
  },
  {
    slug: 'in-der-schule',
    nivel: 'A1',
    titulo: 'In der Schule',
    descripcion: 'Felix cuenta cómo es su día en el colegio. Vocabulario A1 sobre la escuela.',
    texto: `Felix geht in die vierte Klasse. Seine Schule heißt Stadtschule. Felix mag Mathe und Sport.

In der Pause spielt Felix mit seinen Freunden. Sie spielen Fußball. Das macht Felix sehr gern. Nach der Schule macht er seine Hausaufgaben.

Am Freitag gibt es Kunstunterricht. Felix malt gern. Sein Lieblingslehrer ist Herr Braun. Er ist der Sportlehrer.`,
    preguntas: [
      { enunciado: 'Felix mag Mathe und Sport.', respuesta: true },
      { enunciado: 'In der Pause liest Felix Bücher.', respuesta: false },
      { enunciado: 'Felix macht seine Hausaufgaben nach der Schule.', respuesta: true },
      { enunciado: 'Herr Braun ist der Mathematiklehrer.', respuesta: false },
      { enunciado: 'Felix geht in die fünfte Klasse.', respuesta: false },
    ],
  },
  {
    slug: 'meine-hobbys',
    nivel: 'A1',
    titulo: 'Meine Hobbys',
    descripcion: 'Julia habla de sus aficiones: bailar, leer, pintar y montar en bici. Vocabulario A1.',
    texto: `Julia hat viele Hobbys. Sie tanzt, liest und malt. Tanzen ist ihr Lieblingshobbys. Sie geht zweimal pro Woche zum Tanzkurs.

Julia hat auch ein Fahrrad. Am Samstag fährt sie gern Fahrrad. Manchmal fährt sie mit ihrer Freundin Sarah. Das macht ihr viel Spaß.

Julia sieht auch gern Filme. Aber sie geht nicht so gern ins Kino. Sie schaut die Filme zu Hause.`,
    preguntas: [
      { enunciado: 'Tanzen ist Julias Lieblingshobby.', respuesta: true },
      { enunciado: 'Julia fährt jeden Tag Fahrrad.', respuesta: false },
      { enunciado: 'Julia geht gern ins Kino.', respuesta: false },
      { enunciado: 'Julias Freundin heißt Sarah.', respuesta: true },
      { enunciado: 'Julia geht zweimal pro Woche zum Tanzkurs.', respuesta: true },
    ],
  },
  {
    slug: 'im-cafe',
    nivel: 'A1',
    titulo: 'Im Café',
    descripcion: 'Maria y Sofía toman algo en un café. Vocabulario A1 para pedir en un café.',
    texto: `Maria und ihre Freundin Sofía gehen ins Café. Das Café heißt „Zum Bären". Es ist sehr gemütlich. Sie setzen sich an einen Tisch beim Fenster.

Die Kellnerin kommt. Maria bestellt einen Kaffee und ein Stück Kuchen. Sofía möchte Tee und ein Sandwich. Der Kuchen ist sehr lecker.

Sie reden viel. Es ist schön. Nach einer Stunde bezahlen sie und gehen nach Hause.`,
    preguntas: [
      { enunciado: 'Das Café heißt „Zum Bären".', respuesta: true },
      { enunciado: 'Maria bestellt Tee.', respuesta: false },
      { enunciado: 'Sofía möchte ein Stück Kuchen.', respuesta: false },
      { enunciado: 'Sie sitzen beim Fenster.', respuesta: true },
      { enunciado: 'Sie bleiben zwei Stunden im Café.', respuesta: false },
    ],
  },
  {
    slug: 'mein-hund',
    nivel: 'A1',
    titulo: 'Mein Hund',
    descripcion: 'Ben presenta a su perro Bello. Texto A1 muy sencillo sobre los animales domésticos.',
    texto: `Ich heiße Ben. Ich habe einen Hund. Er heißt Bello. Bello ist drei Jahre alt. Er ist braun und weiß.

Bello ist sehr freundlich. Er spielt gern mit mir. Jeden Morgen gehen wir zusammen spazieren. Das macht Bello sehr glücklich.

Am Abend schläft Bello auf seinem Kissen. Er schläft viel. Ich mag Bello sehr. Er ist mein bester Freund.`,
    preguntas: [
      { enunciado: 'Der Hund heißt Bello.', respuesta: true },
      { enunciado: 'Bello ist schwarz.', respuesta: false },
      { enunciado: 'Ben und Bello gehen jeden Morgen spazieren.', respuesta: true },
      { enunciado: 'Bello schläft auf dem Sofa.', respuesta: false },
      { enunciado: 'Ben mag seinen Hund sehr.', respuesta: true },
    ],
  },
  {
    slug: 'familie-schneider',
    nivel: 'A1',
    titulo: 'Familie Schneider',
    descripcion: 'Conoce a la familia Schneider de Colonia: sus hijos, profesiones y rutina de fin de semana. Texto A1 sobre la familia.',
    texto: `Das ist Familie Schneider. Der Vater heißt Thomas. Die Mutter heißt Anna. Sie haben drei Kinder: einen Sohn und zwei Töchter. Der Sohn heißt Lukas. Er ist acht Jahre alt. Die Töchter heißen Mia und Sophie. Mia ist sechs Jahre alt und Sophie ist drei Jahre alt.

Die Familie wohnt in einem Haus in Köln. Das Haus hat einen Garten. Im Garten gibt es Blumen und einen Baum. Thomas arbeitet als Arzt. Anna ist Lehrerin. Die Kinder gehen in die Schule – nur Sophie nicht. Sie ist noch klein und geht in den Kindergarten.

Am Wochenende kocht Anna gern. Thomas spielt mit den Kindern im Garten. Lukas mag Fußball. Mia malt gern. Sophie spielt mit ihrer Katze. Die Katze heißt Mimi. Mimi ist grau und weiß.

Die Familie ist glücklich. Sie essen abends zusammen. Das ist wichtig für sie.`,
    preguntas: [
      { enunciado: 'Familie Schneider hat zwei Kinder.', respuesta: false },
      { enunciado: 'Thomas arbeitet als Arzt.', respuesta: true },
      { enunciado: 'Das Haus hat keinen Garten.', respuesta: false },
      { enunciado: 'Sophie geht in den Kindergarten.', respuesta: true },
      { enunciado: 'Die Katze heißt Mimi und ist schwarz.', respuesta: false },
    ],
  },
  {
    slug: 'mein-koerper',
    nivel: 'A1',
    titulo: 'Mein Körper',
    descripcion: 'Jonas aprende las partes del cuerpo en alemán. Vocabulario A1 esencial sobre el cuerpo humano.',
    texto: `Ich heiße Jonas. Ich bin zehn Jahre alt. Heute lerne ich in der Schule Körperteile auf Deutsch.

Der Kopf ist oben. Im Kopf sind die Augen, die Nase, der Mund und die Ohren. Ich habe zwei Augen. Sie sind blau. Ich habe eine Nase und einen Mund. Mit dem Mund esse und spreche ich. Mit den Ohren höre ich Musik.

Der Hals verbindet den Kopf mit dem Körper. Dann kommen die Schultern, die Arme und die Hände. Ich habe zwei Arme und zwei Hände. Mit den Händen schreibe ich und spiele ich Gitarre.

Unten sind die Beine und die Füße. Ich habe zwei Beine und zwei Füße. Mit den Beinen laufe ich und spiele ich Fußball. Mein Körper ist toll!`,
    preguntas: [
      { enunciado: 'Jonas ist zwölf Jahre alt.', respuesta: false },
      { enunciado: 'Jonas hat blaue Augen.', respuesta: true },
      { enunciado: 'Mit den Ohren schreibt Jonas.', respuesta: false },
      { enunciado: 'Jonas spielt Gitarre.', respuesta: true },
      { enunciado: 'Der Hals verbindet den Kopf mit dem Körper.', respuesta: true },
    ],
  },
  {
    slug: 'tiere-auf-dem-bauernhof',
    nivel: 'A1',
    titulo: 'Tiere auf dem Bauernhof',
    descripcion: 'Los animales de la granja del señor Müller: vacas, cerdos, gallinas, ovejas y el perro Rex. Vocabulario A1.',
    texto: `Auf dem Bauernhof von Herrn Müller leben viele Tiere. Es gibt Kühe, Schweine, Hühner, Schafe und ein Pferd. Das Pferd heißt Bruno. Bruno ist braun und sehr groß.

Die Kühe geben Milch. Herr Müller verkauft die Milch im Dorf. Die Hühner legen Eier. Morgens sammelt Herr Müller die Eier ein. Die Schweine fressen viel. Sie fressen Gemüse und Brot.

Die Schafe haben viel Wolle. Einmal im Jahr schneidet Herr Müller die Wolle. Das nennt man „scheren". Die Wolle ist weich und warm.

Herr Müller hat auch einen Hund. Der Hund heißt Rex. Rex passt auf die Schafe auf. Er ist sehr intelligent. Herr Müller mag alle seine Tiere. Er sagt: „Der Bauernhof ist mein Leben."`,
    preguntas: [
      { enunciado: 'Auf dem Bauernhof gibt es keine Schweine.', respuesta: false },
      { enunciado: 'Das Pferd Bruno ist braun.', respuesta: true },
      { enunciado: 'Die Kühe legen Eier.', respuesta: false },
      { enunciado: 'Der Hund Rex passt auf die Schafe auf.', respuesta: true },
      { enunciado: 'Herr Müller schneidet die Wolle jeden Monat.', respuesta: false },
    ],
  },
  {
    slug: 'meine-wohnung',
    nivel: 'A1',
    titulo: 'Meine Wohnung',
    descripcion: 'Sara describe su piso en Berlín: habitaciones, muebles y electrodomésticos. Vocabulario A1 sobre la casa.',
    texto: `Ich heiße Sara. Ich wohne in einer Wohnung in Berlin. Die Wohnung ist nicht groß, aber sie ist schön und hell.

Die Wohnung hat vier Zimmer: ein Wohnzimmer, ein Schlafzimmer, ein Badezimmer und eine Küche. Im Wohnzimmer gibt es ein Sofa, einen Tisch und einen Fernseher. Im Schlafzimmer steht mein Bett. Das Bett ist groß und bequem.

In der Küche koche ich gern. Ich habe einen Herd, einen Kühlschrank und eine Spülmaschine. Das Badezimmer hat eine Dusche und ein Waschbecken. Ich habe keine Badewanne.

Im Flur hängt ein großer Spiegel. Neben dem Spiegel steht ein Regal mit Büchern. Meine Lieblingszimmer sind die Küche und das Wohnzimmer. Ich fühle mich hier sehr wohl.`,
    preguntas: [
      { enunciado: 'Saras Wohnung hat fünf Zimmer.', respuesta: false },
      { enunciado: 'Im Wohnzimmer gibt es einen Fernseher.', respuesta: true },
      { enunciado: 'Sara hat eine Badewanne im Badezimmer.', respuesta: false },
      { enunciado: 'Im Flur hängt ein großer Spiegel.', respuesta: true },
      { enunciado: 'Sara kocht nicht gern.', respuesta: false },
    ],
  },
  {
    slug: 'berufe-in-meiner-stadt',
    nivel: 'A1',
    titulo: 'Berufe in meiner Stadt',
    descripcion: 'Las profesiones más comunes en una ciudad alemana: médico, panadero, policía, conductor... Vocabulario A1.',
    texto: `In meiner Stadt gibt es viele verschiedene Berufe. Der Arzt arbeitet im Krankenhaus. Er hilft kranken Menschen. Die Lehrerin arbeitet in der Schule. Sie unterrichtet Kinder.

Der Bäcker backt Brot und Kuchen. Er beginnt sehr früh – um vier Uhr morgens! Der Polizist sorgt für Sicherheit auf der Straße. Die Köchin arbeitet in einem Restaurant. Sie kocht das Essen für die Gäste.

Der Busfahrer fährt jeden Tag viele Menschen durch die Stadt. Er kennt alle Straßen. Die Verkäuferin arbeitet in einem Supermarkt. Sie hilft den Kunden und kassiert das Geld.

Alle diese Menschen arbeiten für die Stadt. Ohne sie funktioniert das Leben nicht. Welchen Beruf finde ich interessant? Ich möchte Ärztin werden!`,
    preguntas: [
      { enunciado: 'Der Bäcker beginnt seine Arbeit um vier Uhr morgens.', respuesta: true },
      { enunciado: 'Der Polizist arbeitet im Krankenhaus.', respuesta: false },
      { enunciado: 'Die Köchin arbeitet in einem Restaurant.', respuesta: true },
      { enunciado: 'Die Verkäuferin arbeitet in einer Bäckerei.', respuesta: false },
      { enunciado: 'Die Person im Text möchte Ärztin werden.', respuesta: true },
    ],
  },
  {
    slug: 'jahreszeiten',
    nivel: 'A1',
    titulo: 'Das Wetter und die Jahreszeiten',
    descripcion: 'Las cuatro estaciones del año en Alemania y el vocabulario del tiempo. Texto A1 sobre el clima.',
    texto: `In Deutschland gibt es vier Jahreszeiten: Frühling, Sommer, Herbst und Winter.

Im Frühling ist es warm und die Blumen wachsen. Die Sonne scheint oft, aber es regnet auch manchmal. Im Sommer ist es heiß. Die Temperatur ist manchmal 30 Grad oder mehr. Die Kinder haben Sommerferien und spielen draußen.

Im Herbst werden die Blätter gelb, orange und rot. Es ist kühler und es regnet mehr. Die Tage werden kürzer. Im Winter ist es kalt. Manchmal schneit es. Die Kinder bauen Schneemänner und fahren Schlitten.

Meine Lieblingszeit ist der Sommer. Ich gehe gern schwimmen und mache Ausflüge mit meiner Familie. Was ist deine Lieblingszeit?`,
    preguntas: [
      { enunciado: 'In Deutschland gibt es drei Jahreszeiten.', respuesta: false },
      { enunciado: 'Im Sommer können die Temperaturen 30 Grad oder mehr erreichen.', respuesta: true },
      { enunciado: 'Im Herbst werden die Blätter grün.', respuesta: false },
      { enunciado: 'Im Winter schneit es manchmal.', respuesta: true },
      { enunciado: 'Die Person im Text mag den Winter am liebsten.', respuesta: false },
    ],
  },
  {
    slug: 'lebensmittel-und-einkaufen',
    nivel: 'A1',
    titulo: 'Lebensmittel und Einkaufen',
    descripcion: 'La señora Koch hace la compra semanal: frutas, verduras, lácteos y más. Vocabulario A1 sobre alimentos.',
    texto: `Heute geht Frau Koch in den Supermarkt. Sie braucht Lebensmittel für die Woche. Sie nimmt einen Einkaufskorb und geht durch die Gänge.

Zuerst nimmt sie Gemüse: Tomaten, Karotten und einen Salat. Dann kauft sie Obst: Äpfel, Bananen und Orangen. Im Kühlregal nimmt sie Milch, Butter, Joghurt und Käse. Sie braucht auch Eier.

An der Fleischtheke kauft sie Hähnchen und etwas Schinken. Danach geht sie zur Brotabteilung. Sie kauft ein Vollkornbrot und zwei Brötchen. Am Ende nimmt sie noch Nudeln, Reis und Olivenöl.

An der Kasse bezahlt sie 42 Euro. Sie bezahlt mit Karte. „Danke und auf Wiedersehen!", sagt die Kassiererin. Frau Koch nimmt ihre Taschen und geht nach Hause.`,
    preguntas: [
      { enunciado: 'Frau Koch kauft Bananen und Orangen.', respuesta: true },
      { enunciado: 'Im Kühlregal kauft sie Nudeln und Reis.', respuesta: false },
      { enunciado: 'An der Fleischtheke kauft sie Rindfleisch.', respuesta: false },
      { enunciado: 'Frau Koch bezahlt mit Karte.', respuesta: true },
      { enunciado: 'Sie kauft drei Brötchen.', respuesta: false },
    ],
  },
  {
    slug: 'mein-schultag',
    nivel: 'A1',
    titulo: 'Mein Schultag',
    descripcion: 'Ben cuenta cómo es su jornada escolar: horarios, asignaturas y la tarde con su amigo Paul. Vocabulario A1.',
    texto: `Ich heiße Ben. Ich bin neun Jahre alt und gehe in die dritte Klasse. Meine Schule beginnt um acht Uhr. Ich stehe um sieben Uhr auf und frühstücke mit meiner Familie.

In meinem Schulranzen habe ich Bücher, Hefte, Stifte und ein Lineal. Meine Lieblingsfächer sind Mathematik und Sport. Deutsch mag ich auch, aber Englisch finde ich schwierig.

In der Pause esse ich mein Pausenbrot. Meistens bringe ich ein Käsebrot oder ein Brot mit Marmelade mit. Ich trinke Wasser oder Apfelsaft. Nach der Pause haben wir noch zwei Stunden Unterricht.

Um dreizehn Uhr ist die Schule fertig. Dann gehe ich nach Hause. Nachmittags mache ich zuerst Hausaufgaben, dann spiele ich mit meinem Freund Paul. Manchmal spielen wir Fußball, manchmal spielen wir Computerspiele.`,
    preguntas: [
      { enunciado: 'Bens Schule beginnt um neun Uhr.', respuesta: false },
      { enunciado: 'Bens Lieblingsfächer sind Mathematik und Sport.', respuesta: true },
      { enunciado: 'In der Pause isst Ben meistens ein Wurstbrot.', respuesta: false },
      { enunciado: 'Ben macht nach der Schule zuerst Hausaufgaben.', respuesta: true },
      { enunciado: 'Ben spielt nachmittags immer allein.', respuesta: false },
    ],
  },
  {
    slug: 'beim-arzt',
    nivel: 'A1',
    titulo: 'Beim Arzt',
    descripcion: 'Emma tiene fiebre y va al médico con su madre. Vocabulario A1 sobre síntomas, enfermedades y la visita médica.',
    texto: `Heute geht Emma zum Arzt. Sie fühlt sich nicht gut. Sie hat Kopfschmerzen, Halsschmerzen und etwas Fieber. Ihre Mutter geht mit ihr.

Im Wartezimmer sitzen noch drei andere Patienten. Emma wartet zwanzig Minuten. Dann ruft die Sprechstundenhilfe: „Emma Weber, bitte!"

Der Arzt heißt Dr. Berger. Er ist freundlich. Er fragt: „Was fehlt Ihnen?" Emma sagt: „Ich habe Halsschmerzen und Kopfschmerzen. Mir ist auch kalt." Dr. Berger schaut in ihren Hals und misst die Temperatur. Emma hat 38,5 Grad Fieber.

Dr. Berger sagt: „Sie haben eine Erkältung. Sie brauchen Ruhe und viel Tee." Er schreibt ein Rezept für Tabletten. „In drei bis vier Tagen geht es Ihnen besser", sagt er. Emma und ihre Mutter gehen zur Apotheke und kaufen die Tabletten.`,
    preguntas: [
      { enunciado: 'Emma hat Bauchschmerzen und Fieber.', respuesta: false },
      { enunciado: 'Emma wartet zwanzig Minuten im Wartezimmer.', respuesta: true },
      { enunciado: 'Dr. Berger sagt, Emma hat eine Grippe.', respuesta: false },
      { enunciado: 'Emma hat 38,5 Grad Fieber.', respuesta: true },
      { enunciado: 'Nach dem Arztbesuch gehen Emma und ihre Mutter in den Supermarkt.', respuesta: false },
    ],
  },
  {
    slug: 'hobbys-und-freizeit',
    nivel: 'A1',
    titulo: 'Hobbys und Freizeit',
    descripcion: 'Lena habla de sus aficiones: piano, lectura, natación y salidas con amigas. Texto A1 sobre el tiempo libre.',
    texto: `Mein Name ist Lena. Ich bin vierzehn Jahre alt. In meiner Freizeit mache ich viele Dinge, die mir Spaß machen.

Ich spiele gern Klavier. Ich übe dreimal pro Woche – dienstags, donnerstags und samstags. Meine Klavierlehrerin heißt Frau Vogel. Sie ist sehr nett.

Ich lese auch sehr gern. Mein Lieblingsbuch ist eine Geschichte über ein Mädchen und einen Drachen. Ich lese abends vor dem Schlafen. Außerdem gehe ich einmal pro Woche schwimmen. Das Schwimmbad ist fünf Minuten von meinem Haus entfernt.

Am Wochenende treffe ich meine Freundinnen. Wir gehen manchmal ins Kino oder in ein Café. Im Café trinken wir heiße Schokolade und reden viel. Das ist mein Lieblingstag: Samstag mit meinen Freundinnen!`,
    preguntas: [
      { enunciado: 'Lena spielt Gitarre.', respuesta: false },
      { enunciado: 'Lena übt Klavier dreimal pro Woche.', respuesta: true },
      { enunciado: 'Lenas Lieblingsbuch handelt von einem Mädchen und einem Drachen.', respuesta: true },
      { enunciado: 'Das Schwimmbad ist zehn Minuten von Lenas Haus entfernt.', respuesta: false },
      { enunciado: 'Am Wochenende geht Lena immer allein ins Kino.', respuesta: false },
    ],
  },
  // ── fin A1 ──────────────────────────────────────────────────

  {
    slug: 'picknick-im-park',
    nivel: 'A2',
    titulo: 'Ein Picknick im Park',
    descripcion: 'Mira und Jonas verbringen einen warmen Samstag im Park und erleben einen typischen Freizeittag auf A2-Niveau.',
    texto: `Am Samstag ist das Wetter sehr schön. Mira und Jonas möchten nicht zu Hause bleiben, deshalb machen sie ein Picknick im Stadtpark. Am Morgen kaufen sie im Supermarkt Wasser, Saft, Käsebrote, Weintrauben und kleine Kuchen. Mira bringt auch eine Decke, Teller und Becher von zu Hause mit.

Gegen elf Uhr treffen sie sich am Parkeingang. Dort ist schon viel los. Familien spazieren mit ihren Kindern, Jugendliche fahren Fahrrad und einige Leute spielen Badminton. Mira und Jonas suchen einen ruhigen Platz unter einem großen Baum. Dort setzen sie sich und essen zusammen.

Nach dem Essen hören sie Musik und sprechen über ihre Pläne für die Sommerferien. Jonas möchte gern ans Meer fahren, aber Mira bleibt dieses Jahr in Deutschland. Sie will ihre Tante in Köln besuchen. Später machen sie noch einen Spaziergang am See im Park. Auf dem Rückweg kaufen sie ein Eis und fahren am Nachmittag zufrieden nach Hause.`,
    preguntas: [
      { enunciado: 'Mira und Jonas kaufen am Morgen Essen und Getränke im Supermarkt.', respuesta: true },
      { enunciado: 'Sie treffen sich erst am Abend im Park.', respuesta: false },
      { enunciado: 'Im Park spielen nur kleine Kinder.', respuesta: false },
      { enunciado: 'Mira möchte im Sommer ihre Tante in Köln besuchen.', respuesta: true },
      { enunciado: 'Bevor sie nach Hause fahren, kaufen sie ein Eis.', respuesta: true },
    ],
  },
  {
    slug: 'wochenende-am-see',
    nivel: 'A2',
    titulo: 'Ein Wochenende am See',
    descripcion: 'Nina fährt mit ihrer Familie an einen See und erzählt von Freizeit, Gewohnheiten und einem entspannten Wochenende.',
    texto: `Nina verbringt das Wochenende mit ihrer Familie an einem kleinen See in Bayern. Ihre Eltern haben dort für zwei Nächte ein Ferienhaus gemietet. Am Freitagabend kommen sie mit dem Auto an. Es ist schon spät, deshalb packen sie nur schnell ihre Taschen aus und essen Brot, Käse und Tomaten.

Am Samstag stehen alle früh auf. Der Vater macht Kaffee, und die Mutter bereitet das Frühstück vor. Danach gehen Nina und ihr kleiner Bruder sofort zum Wasser. Sie dürfen schwimmen, aber nur in der Nähe des Stegs. Später mieten sie ein Tretboot für eine Stunde. Das macht allen viel Spaß.

Am Nachmittag macht die Familie einen Spaziergang durch den Wald. Dort sehen sie viele Vögel und sammeln schöne Steine. Abends grillen sie vor dem Haus. Am Sonntag fahren sie nach dem Frühstück wieder zurück. Nina findet das Wochenende kurz, aber sehr schön, und sie möchte im nächsten Sommer noch einmal dorthin fahren.`,
    preguntas: [
      { enunciado: 'Die Familie übernachtet in einem Hotel am See.', respuesta: false },
      { enunciado: 'Am Freitagabend essen sie noch eine kleine Mahlzeit.', respuesta: true },
      { enunciado: 'Nina und ihr Bruder dürfen weit weg vom Steg schwimmen.', respuesta: false },
      { enunciado: 'Die Familie mietet am Samstag ein Tretboot.', respuesta: true },
      { enunciado: 'Nina möchte nächstes Jahr wieder an den See fahren.', respuesta: true },
    ],
  },
  {
    slug: 'stadtfest-im-sommer',
    nivel: 'A2',
    titulo: 'Das Stadtfest im Sommer',
    descripcion: 'Ali besucht mit Freunden ein Stadtfest und berichtet über Musik, Essen und typische Freizeitaktivitäten.',
    texto: `In Alis Stadt gibt es jedes Jahr im Juni ein großes Stadtfest. Viele Menschen warten schon lange darauf, weil es dort Musik, Essen und kleine Stände gibt. Dieses Jahr geht Ali am Samstagnachmittag mit seinen Freunden Emma und Leon dorthin. Sie treffen sich vor dem Rathaus und laufen dann zusammen über den Marktplatz.

Zuerst sehen sie sich die Stände mit regionalen Produkten an. Emma kauft Honig für ihre Großmutter, und Leon probiert eine Wurst im Brötchen. Ali möchte später etwas Süßes essen und wartet noch. Auf einer kleinen Bühne spielt eine Schülerband. Die Musik ist nicht perfekt, aber die Stimmung ist sehr gut.

Am Abend wird der Platz immer voller. Viele Familien sitzen an langen Tischen und unterhalten sich. Ali kauft am Ende noch einen Crêpe mit Schokolade. Um halb zehn fahren die drei mit dem Bus nach Hause. Sie sind müde, aber sie finden, dass das Stadtfest wieder sehr schön war.`,
    preguntas: [
      { enunciado: 'Das Stadtfest findet jedes Jahr im Winter statt.', respuesta: false },
      { enunciado: 'Ali trifft seine Freunde vor dem Rathaus.', respuesta: true },
      { enunciado: 'Emma kauft Honig für ihre Großmutter.', respuesta: true },
      { enunciado: 'Ali isst zuerst einen Crêpe mit Schokolade.', respuesta: false },
      { enunciado: 'Die Freunde fahren am Abend mit dem Bus nach Hause.', respuesta: true },
    ],
  },
  {
    slug: 'reise-nach-hamburg',
    nivel: 'A2',
    titulo: 'Eine Reise nach Hamburg',
    descripcion: 'Clara macht eine kurze Städtereise nach Hamburg und trainiert typisches Reisevokabular für A2-Prüfungen.',
    texto: `Clara fährt in den Herbstferien für drei Tage nach Hamburg. Sie reist allein, weil ihre beste Freundin arbeiten muss. Die Zugfahrt dauert nur etwas mehr als zwei Stunden, deshalb nimmt Clara keinen großen Koffer mit. Sie packt nur einen Rucksack mit Kleidung, einem Buch, ihrer Kamera und einem Regenschirm.

Nach der Ankunft geht sie zuerst in ihr kleines Hotel in der Nähe des Bahnhofs. Das Zimmer ist nicht groß, aber sehr sauber. Nachdem sie ihren Rucksack abgestellt hat, fährt sie mit der U-Bahn in die Innenstadt. Dort macht sie eine Hafenrundfahrt. Clara findet die Schiffe und die alten Speicherhäuser besonders interessant.

Am zweiten Tag besucht sie die Elbphilharmonie und trinkt später einen Kaffee mit Blick auf das Wasser. Vor der Rückreise kauft sie noch ein paar Postkarten für ihre Familie. Zu Hause erzählt sie begeistert von der Reise und sagt, dass sie bald noch einmal nach Hamburg fahren möchte.`,
    preguntas: [
      { enunciado: 'Clara reist mit ihrer besten Freundin nach Hamburg.', respuesta: false },
      { enunciado: 'Sie nimmt nur einen Rucksack mit.', respuesta: true },
      { enunciado: 'Ihr Hotel ist groß und luxuriös.', respuesta: false },
      { enunciado: 'Clara macht in Hamburg eine Hafenrundfahrt.', respuesta: true },
      { enunciado: 'Vor der Rückreise kauft sie Postkarten.', respuesta: true },
    ],
  },
  {
    slug: 'sonntag-bei-oma',
    nivel: 'A2',
    titulo: 'Sonntag bei Oma',
    descripcion: 'Lea beschreibt einen typischen Sonntagsbesuch bei ihrer Großmutter mit Familie, Essen und kleinen Traditionen.',
    texto: `Fast jeden zweiten Sonntag besucht Lea mit ihren Eltern und ihrem Bruder die Großmutter. Sie wohnt in einem Dorf, ungefähr dreißig Kilometer von der Stadt entfernt. Die Familie fährt meistens gegen elf Uhr los und bleibt bis zum frühen Abend dort.

Wenn sie ankommen, steht das Mittagessen oft schon auf dem Tisch. Omas Spezialität ist Hähnchen mit Kartoffeln und Salat. Nach dem Essen trinken alle zusammen Kaffee, und es gibt selbst gemachten Apfelkuchen. Lea hilft ihrer Großmutter danach in der Küche, während ihr Bruder im Garten Fußball spielt.

Später machen sie oft einen kurzen Spaziergang durch das Dorf. Die Großmutter kennt viele Nachbarn und bleibt unterwegs immer wieder stehen, um ein paar Worte zu wechseln. Lea findet diese Sonntage manchmal ein bisschen ruhig, aber gleichzeitig auch sehr gemütlich. Für sie gehört dieser Besuch einfach zur Familienroutine.`,
    preguntas: [
      { enunciado: 'Leas Großmutter wohnt mitten in der Stadt.', respuesta: false },
      { enunciado: 'Die Familie fährt meistens gegen elf Uhr los.', respuesta: true },
      { enunciado: 'Nach dem Essen gibt es Kaffee und Apfelkuchen.', respuesta: true },
      { enunciado: 'Leas Bruder hilft nach dem Essen in der Küche.', respuesta: false },
      { enunciado: 'Lea sieht die Sonntagsbesuche als Teil der Familienroutine.', respuesta: true },
    ],
  },
  {
    slug: 'urlaub-mit-dem-zug',
    nivel: 'A2',
    titulo: 'Urlaub mit dem Zug',
    descripcion: 'Patrick plant seine Reise mit dem Zug und erzählt von Tickets, Gepäck und einer bequemen Urlaubsfahrt.',
    texto: `Patrick möchte in den Sommerferien nach Österreich fahren. Dieses Mal nimmt er nicht das Auto, sondern den Zug. Er findet das entspannter, weil er unterwegs lesen oder Musik hören kann. Zwei Wochen vor der Reise kauft er sein Ticket online. So bekommt er einen günstigeren Preis und kann direkt einen Fensterplatz reservieren.

Am Reisetag ist Patrick schon früh am Bahnhof. Er hat einen Koffer, einen kleinen Rucksack und eine Flasche Wasser dabei. Der Zug kommt pünktlich, und Patrick findet seinen Platz schnell. Gegenüber sitzt eine ältere Dame, die auch nach Österreich fährt. Sie sprechen kurz über das Wetter und über die Berge.

Während der Fahrt sieht Patrick grüne Wiesen, kleine Dörfer und später sogar hohe Berge. Er isst ein Sandwich und liest in seinem Reiseführer. Als der Zug am Ziel ankommt, ist Patrick froh, dass die Reise so ruhig war. Er möchte in Zukunft öfter mit dem Zug in den Urlaub fahren.`,
    preguntas: [
      { enunciado: 'Patrick fährt dieses Mal mit dem Auto nach Österreich.', respuesta: false },
      { enunciado: 'Er kauft das Ticket zwei Wochen vor der Reise online.', respuesta: true },
      { enunciado: 'Patrick reserviert einen Platz am Gang.', respuesta: false },
      { enunciado: 'Im Zug spricht Patrick kurz mit einer älteren Dame.', respuesta: true },
      { enunciado: 'Nach der Fahrt möchte Patrick auch in Zukunft öfter mit dem Zug reisen.', respuesta: true },
    ],
  },
  {
    slug: 'deutsches-fruehstueck',
    nivel: 'A2',
    titulo: 'Ein typisches Frühstück',
    descripcion: 'Sara berichtet über Frühstücksgewohnheiten in Deutschland und lernt dabei Wortschatz zu Essen und Alltag.',
    texto: `Sara kommt aus Spanien und lebt seit drei Monaten in Deutschland. Sie wohnt bei einer Gastfamilie in Bonn und findet viele Alltagsgewohnheiten interessant. Besonders das Frühstück unterscheidet sich von dem, was sie von zu Hause kennt.

Unter der Woche frühstückt die Familie eher schnell. Der Vater trinkt Kaffee, die Mutter Tee, und die Kinder essen Brot mit Käse oder Marmelade. Manchmal gibt es auch Joghurt mit Obst. Alle sitzen nur kurz am Tisch, weil Schule und Arbeit früh beginnen.

Am Sonntag ist das ganz anders. Dann nimmt sich die Familie viel mehr Zeit. Auf dem Tisch stehen Brötchen, Eier, Butter, Wurst, Käse und manchmal auch Croissants. Sara hilft oft beim Decken des Tisches. Sie mag besonders die frischen Brötchen vom Bäcker. Für sie ist das Sonntagsfrühstück schon zu einer kleinen Tradition geworden, auf die sie sich jede Woche freut.`,
    preguntas: [
      { enunciado: 'Sara lebt seit drei Monaten in Deutschland.', respuesta: true },
      { enunciado: 'Unter der Woche frühstückt die Familie sehr lange.', respuesta: false },
      { enunciado: 'Die Kinder essen oft Brot mit Käse oder Marmelade.', respuesta: true },
      { enunciado: 'Am Sonntag gibt es nie Eier auf dem Tisch.', respuesta: false },
      { enunciado: 'Sara freut sich jede Woche auf das Sonntagsfrühstück.', respuesta: true },
    ],
  },
  {
    slug: 'geburtstag-im-garten',
    nivel: 'A2',
    titulo: 'Eine Geburtstagsparty im Garten',
    descripcion: 'Maja feiert ihren Geburtstag im Garten und erzählt von Vorbereitungen, Gästen und typischen Festgewohnheiten.',
    texto: `Maja hat im Mai Geburtstag und wird dieses Jahr zwanzig Jahre alt. Weil das Wetter schön ist, organisiert sie eine kleine Feier im Garten ihrer Eltern. Schon am Vormittag hilft ihr Bruder beim Aufstellen der Tische und Stühle. Maja hängt bunte Lichterketten auf und stellt Blumen auf die Tische.

Am Nachmittag kommen zuerst ihre beste Freundin Klara und zwei Nachbarn. Später treffen noch einige Kommilitonen von der Universität ein. Jeder bringt etwas mit: Saft, Salate, Brot oder einen Kuchen. Maja freut sich besonders über einen Schokoladenkuchen, den ihre Tante gebacken hat.

Am Abend grillt Majas Vater Würstchen und Gemüse. Die Gäste reden, lachen und machen viele Fotos. Gegen neun Uhr singt die Gruppe ein Geburtstagslied, und Maja pustet die Kerzen aus. Sie findet die Feier nicht zu groß und genau deshalb besonders schön.`,
    preguntas: [
      { enunciado: 'Maja feiert ihren Geburtstag im Winter.', respuesta: false },
      { enunciado: 'Ihr Bruder hilft am Vormittag bei den Vorbereitungen.', respuesta: true },
      { enunciado: 'Alle Gäste kommen gleichzeitig am Nachmittag an.', respuesta: false },
      { enunciado: 'Majas Tante backt einen Schokoladenkuchen.', respuesta: true },
      { enunciado: 'Maja mag die Feier, weil sie nicht zu groß ist.', respuesta: true },
    ],
  },
  {
    slug: 'besuch-im-freilichtmuseum',
    nivel: 'A2',
    titulo: 'Ein Besuch im Freilichtmuseum',
    descripcion: 'Tim besucht mit seiner Klasse ein Freilichtmuseum und entdeckt dort alte Häuser, Berufe und deutsche Alltagskultur.',
    texto: `Tim fährt mit seiner Klasse in ein Freilichtmuseum. Der Ausflug gehört zum Unterricht, denn die Schülerinnen und Schüler sprechen gerade über das Leben früher. Das Museum liegt außerhalb der Stadt, deshalb fahren alle morgens mit dem Bus dorthin.

Im Museum sehen sie alte Häuser, eine kleine Schule und Werkstätten von Handwerkern. Eine Mitarbeiterin erklärt, wie die Menschen vor hundert Jahren gelebt haben. Tim findet besonders die alte Küche spannend. Dort gibt es keinen modernen Herd, sondern nur einen großen Ofen.

Zur Mittagszeit essen die Jugendlichen ihre belegten Brote auf einer Bank. Danach dürfen sie in kleinen Gruppen noch einmal durch das Gelände gehen. Tim kauft im Museumsladen eine Postkarte für seinen Großvater, weil dieser sich auch für Geschichte interessiert. Auf dem Heimweg sprechen viele über ihre Lieblingsorte im Museum.`,
    preguntas: [
      { enunciado: 'Tim fährt allein ins Freilichtmuseum.', respuesta: false },
      { enunciado: 'Die Klasse lernt gerade im Unterricht etwas über das Leben früher.', respuesta: true },
      { enunciado: 'Tim findet die alte Küche besonders spannend.', respuesta: true },
      { enunciado: 'Die Schülerinnen und Schüler essen mittags in einem Restaurant.', respuesta: false },
      { enunciado: 'Tim kauft eine Postkarte für seinen Großvater.', respuesta: true },
    ],
  },
  {
    slug: 'ferienjob-im-cafe',
    nivel: 'A2',
    titulo: 'Ein Ferienjob im Café',
    descripcion: 'Lukas arbeitet in den Sommerferien in einem Café und übt A2-Themen aus Alltag, Arbeit und Kundenkontakt.',
    texto: `In den Sommerferien hat Lukas einen Ferienjob in einem kleinen Café gefunden. Er möchte etwas Geld verdienen, weil er im Herbst mit Freunden nach Prag reisen will. Das Café liegt in der Innenstadt und ist besonders am Wochenende sehr voll.

Lukas arbeitet vier Tage pro Woche, immer von zehn bis sechzehn Uhr. Morgens stellt er zuerst Tassen und Gläser auf die Theke. Danach hilft er beim Servieren von Kaffee, Tee und Kuchen. Manchmal bringt er auch frische Brötchen von der Küche zu den Gästen.

Am Anfang war Lukas nervös, weil er noch nie in einem Café gearbeitet hat. Jetzt gefällt ihm die Arbeit gut. Er hat nette Kolleginnen, und die Chefin erklärt alles geduldig. Nur wenn viele Touristen gleichzeitig kommen, wird es stressig. Trotzdem ist Lukas zufrieden, denn er lernt viel und spart schon erfolgreich für seine Reise.`,
    preguntas: [
      { enunciado: 'Lukas möchte mit dem Ferienjob Geld für eine Reise sparen.', respuesta: true },
      { enunciado: 'Das Café ist nur unter der Woche sehr voll.', respuesta: false },
      { enunciado: 'Lukas arbeitet jeden Tag von morgens bis abends.', respuesta: false },
      { enunciado: 'Am Anfang war Lukas wegen der neuen Arbeit nervös.', respuesta: true },
      { enunciado: 'Trotz stressiger Momente ist Lukas mit dem Ferienjob zufrieden.', respuesta: true },
    ],
  },

  {
    slug: 'tagesausflug',
    nivel: 'B1',
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

  // ── Nivel 2 · Solo usuarios registrados ──────────────────────────────────

  // A1 — Nivel 2
  {
    slug: 'lenas-zimmer',
    nivel: 'A1',
    titulo: 'Lenas Zimmer',
    descripcion: 'Lena beschreibt ihr Zimmer und die Gegenstände darin.',
    requiresAuth: true,
    texto: `Mein Name ist Lena und ich bin zwölf Jahre alt. Ich wohne in München mit meiner Familie. Mein Zimmer ist nicht sehr groß, aber ich mag es sehr.

In meinem Zimmer gibt es ein Bett, einen Schreibtisch und einen Stuhl. Neben dem Bett steht eine kleine Lampe. Auf dem Schreibtisch liegen Bücher und Stifte. An der Wand hängen Fotos von meiner Familie und meinen Freunden.

Ich lerne oft an meinem Schreibtisch. Manchmal höre ich Musik, wenn ich lerne. Mein Zimmer ist mein Lieblingsplatz zu Hause.`,
    preguntas: [
      { enunciado: 'Lena ist zwölf Jahre alt.', respuesta: true },
      { enunciado: 'Lenas Zimmer ist sehr groß.', respuesta: false },
      { enunciado: 'An der Wand hängen Fotos.', respuesta: true },
      { enunciado: 'Lena lernt immer in der Küche.', respuesta: false },
      { enunciado: 'Auf dem Schreibtisch liegen Bücher und Stifte.', respuesta: true },
    ],
  },
  {
    slug: 'im-supermarkt-einkaufen',
    nivel: 'A1',
    titulo: 'Im Supermarkt',
    descripcion: 'Tom kauft mit seiner Mutter im Supermarkt ein.',
    requiresAuth: true,
    texto: `Tom geht mit seiner Mutter in den Supermarkt. Sie brauchen Milch, Brot, Äpfel und Käse. Tom schiebt den Einkaufswagen.

Zuerst gehen sie in die Obstabteilung. Tom nimmt sechs Äpfel und legt sie in den Wagen. Dann kaufen sie Milch und Käse. Das Brot ist frisch und riecht gut. Tom möchte auch Schokolade kaufen, aber seine Mutter sagt nein.

An der Kasse bezahlt die Mutter. Sie gibt der Kassiererin zwanzig Euro. Tom trägt eine Tüte nach Hause. Er ist müde, aber zufrieden.`,
    preguntas: [
      { enunciado: 'Tom geht allein in den Supermarkt.', respuesta: false },
      { enunciado: 'Sie kaufen Milch, Brot, Äpfel und Käse.', respuesta: true },
      { enunciado: 'Tom darf Schokolade kaufen.', respuesta: false },
      { enunciado: 'Die Mutter bezahlt an der Kasse.', respuesta: true },
      { enunciado: 'Tom trägt eine Tüte nach Hause.', respuesta: true },
    ],
  },

  // A2 — Nivel 2
  {
    slug: 'ein-wochenende-in-hamburg',
    nivel: 'A2',
    titulo: 'Ein Wochenende in Hamburg',
    descripcion: 'Sandra und Kai verbringen ein Wochenende in Hamburg und entdecken die Stadt.',
    requiresAuth: true,
    texto: `Sandra und Kai fahren am Freitagnachmittag mit dem Zug nach Hamburg. Sie haben ein kleines Hotel in der Nähe des Hauptbahnhofs gebucht. Das Zimmer ist sauber und hat einen Blick auf die Straße.

Am Samstag besuchen sie den Hafen. Das Wetter ist windig, aber trocken. Sie machen eine kurze Bootsfahrt auf der Elbe und sehen die großen Schiffe. Danach kaufen sie Fischbrötchen an einem Stand und essen sie am Wasser.

Am Sonntag gehen sie auf dem Flohmarkt in Altona spazieren. Kai findet eine alte Schallplatte für drei Euro. Am Nachmittag fahren sie wieder nach Hause. Beide sind müde, aber happy über das schöne Wochenende.`,
    preguntas: [
      { enunciado: 'Sandra und Kai fahren mit dem Auto nach Hamburg.', respuesta: false },
      { enunciado: 'Ihr Hotel liegt in der Nähe des Hauptbahnhofs.', respuesta: true },
      { enunciado: 'Am Samstag regnet es den ganzen Tag.', respuesta: false },
      { enunciado: 'Sie essen Fischbrötchen am Hafen.', respuesta: true },
      { enunciado: 'Kai kauft auf dem Flohmarkt eine alte Schallplatte.', respuesta: true },
    ],
  },
  {
    slug: 'auf-der-arbeit',
    nivel: 'A2',
    titulo: 'Auf der Arbeit',
    descripcion: 'Julia beginnt einen neuen Job in einem Büro und beschreibt ihren ersten Arbeitstag.',
    requiresAuth: true,
    texto: `Julia hat heute ihren ersten Arbeitstag in einem Büro in der Stadtmitte. Sie ist etwas nervös, aber auch aufgeregt. Sie kommt um acht Uhr morgens an.

Ihr Kollege Peter zeigt ihr den Arbeitsplatz. Er erklärt, wie der Computer und das Telefon funktionieren. Um halb zehn trinken alle zusammen Kaffee in der Küche. Das ist die Kaffeepause. Julia lernt viele neue Kolleginnen und Kollegen kennen.

Am Mittag isst Julia in der Kantine. Das Essen ist günstig und lecker. Am Nachmittag macht sie einfache Aufgaben am Computer. Um fünf Uhr geht sie nach Hause. Der erste Tag war gut, und Julia freut sich auf morgen.`,
    preguntas: [
      { enunciado: 'Julia beginnt um neun Uhr zu arbeiten.', respuesta: false },
      { enunciado: 'Peter zeigt Julia den Arbeitsplatz.', respuesta: true },
      { enunciado: 'Die Kaffeepause ist um halb zehn.', respuesta: true },
      { enunciado: 'Julia isst mittags in einem Restaurant.', respuesta: false },
      { enunciado: 'Julia ist zufrieden nach ihrem ersten Arbeitstag.', respuesta: true },
    ],
  },

  // B1 — Nivel 2
  {
    slug: 'im-fitnessstudio',
    nivel: 'B1',
    titulo: 'Im Fitnessstudio',
    descripcion: 'Markus fängt an, regelmäßig ins Fitnessstudio zu gehen, und erzählt von seinen Erfahrungen.',
    requiresAuth: true,
    texto: `Seit drei Monaten geht Markus zweimal pro Woche ins Fitnessstudio. Am Anfang war es schwierig, weil er schnell müde wurde und die Übungen kaum kannte. Aber mit der Zeit wurde es besser. Ein Trainer hat ihm gezeigt, wie er die Geräte richtig benutzt, damit er sich nicht verletzt.

Heute macht Markus zuerst zwanzig Minuten auf dem Laufband, danach trainiert er seine Arme und den Rücken mit Gewichten. Er findet es wichtig, sich nach dem Training zu dehnen, weil die Muskeln sonst am nächsten Tag wehtun. Nach dem Sport duscht er im Studio und trinkt ein großes Glas Wasser.

Markus merkt, dass er fitter geworden ist. Er schläft besser und hat mehr Energie im Alltag. Manchmal trifft er im Studio auch Freunde, was das Training angenehmer macht. Er plant, die Häufigkeit auf dreimal pro Woche zu erhöhen, sobald er genug Zeit hat.`,
    preguntas: [
      { enunciado: 'Markus geht seit drei Monaten ins Fitnessstudio.', respuesta: true },
      { enunciado: 'Am Anfang war das Training sehr einfach für Markus.', respuesta: false },
      { enunciado: 'Ein Trainer hat ihm erklärt, wie er die Geräte richtig benutzt.', respuesta: true },
      { enunciado: 'Markus dehnt sich nach dem Training, damit seine Muskeln nicht wehtun.', respuesta: true },
      { enunciado: 'Er möchte in Zukunft weniger oft ins Studio gehen.', respuesta: false },
    ],
  },
  {
    slug: 'eine-reise-nach-wien',
    nivel: 'B1',
    titulo: 'Eine Reise nach Wien',
    descripcion: 'Claudia und ihr Freund reisen nach Wien und erleben die Highlights der Stadt.',
    requiresAuth: true,
    texto: `Claudia und ihr Freund Jonas haben eine lange Zugreise nach Wien geplant. Sie fahren früh morgens ab und kommen nach etwa neun Stunden in der österreichischen Hauptstadt an. Das Hotel, das sie gebucht haben, liegt direkt im Zentrum, nur fünf Gehminuten vom Stephansdom entfernt.

Am ersten Tag besichtigen sie den Dom und schlendern durch die Innere Stadt. Die historischen Gebäude beeindrucken sie sehr. Am Abend gehen sie in ein traditionelles Wiener Restaurant und essen Wiener Schnitzel mit Kartoffelsalat. Jonas findet das Essen ausgezeichnet, obwohl er sonst kein großer Fan von Schweinefleisch ist.

Am zweiten Tag besuchen sie das Kunsthistorische Museum. Die Gemälde- und Skulpturensammlung ist riesig, und sie verbringen fast vier Stunden dort. Nachmittags trinken sie Kaffee in einem klassischen Wiener Café mit Marmortischen und Kristallleuchtern. Auf der Rückreise sind sie sich einig: Wien ist eine Stadt, in die man gerne zurückkehrt.`,
    preguntas: [
      { enunciado: 'Claudia und Jonas reisen mit dem Flugzeug nach Wien.', respuesta: false },
      { enunciado: 'Das Hotel liegt in der Nähe des Stephansdoms.', respuesta: true },
      { enunciado: 'Jonas isst das Wiener Schnitzel gern, obwohl er normalerweise kein Schweinefleisch mag.', respuesta: true },
      { enunciado: 'Sie verbringen im Kunsthistorischen Museum etwa zwei Stunden.', respuesta: false },
      { enunciado: 'Am Ende sind beide begeistert von Wien.', respuesta: true },
    ],
  },

  // B2 — Nivel 2
  {
    slug: 'digitale-kommunikation',
    nivel: 'B2',
    titulo: 'Digitale Kommunikation im Alltag',
    descripcion: 'Ein Text über die Auswirkungen digitaler Kommunikation auf persönliche Beziehungen und Arbeitskultur.',
    requiresAuth: true,
    texto: `Die Art, wie wir miteinander kommunizieren, hat sich in den letzten zwei Jahrzehnten grundlegend verändert. Während früher Briefe und Telefonanrufe dominierten, sind heute Messenger-Dienste, E-Mails und Videoanrufe aus dem Alltag kaum noch wegzudenken. Diese Entwicklung bringt zweifellos Vorteile mit sich: Informationen lassen sich schneller austauschen, geografische Entfernungen spielen kaum noch eine Rolle, und die Dokumentation von Vereinbarungen ist einfacher geworden.

Gleichzeitig beobachten Soziologen und Psychologen besorgniserregende Trends. Studien zeigen, dass die ständige Erreichbarkeit durch Smartphones viele Menschen unter Druck setzt. Die Erwartung, auf Nachrichten sofort zu reagieren, führt bei einem wachsenden Anteil der Bevölkerung zu Stress und Schlafproblemen. Besonders in beruflichen Kontexten verschwimmt die Grenze zwischen Arbeitszeit und Freizeit zunehmend, da Mitarbeitende auch außerhalb der regulären Bürostunden Nachrichten erhalten und beantworten.

Ein weiteres Problem betrifft die Qualität zwischenmenschlicher Beziehungen. Digitale Kommunikation fehlt oft der nonverbale Anteil — Mimik, Gestik und Tonfall —, der in persönlichen Gesprächen für das Verständnis entscheidend ist. Missverständnisse entstehen häufiger, und Konflikte eskalieren schneller, wenn Botschaften durch das Medium gefiltert werden. Einige Experten fordern deshalb eine bewusstere Nutzung digitaler Werkzeuge und plädieren für klare Regeln, etwa Kommunikationspausen nach Feierabend oder die Rückkehr zu persönlichen Gesprächen für sensible Themen.`,
    preguntas: [
      { enunciado: 'Digitale Kommunikation hat ausschließlich negative Folgen für den Alltag.', respuesta: false },
      { enunciado: 'Die ständige Erreichbarkeit durch Smartphones kann laut Studien zu Stress führen.', respuesta: true },
      { enunciado: 'Die Grenze zwischen Arbeit und Freizeit ist durch digitale Medien klarer geworden.', respuesta: false },
      { enunciado: 'Nonverbale Signale fehlen in digitaler Kommunikation häufig.', respuesta: true },
      { enunciado: 'Einige Experten empfehlen, digitale Kommunikation bewusster einzusetzen.', respuesta: true },
    ],
  },
  {
    slug: 'klimawandel-und-alltag',
    nivel: 'B2',
    titulo: 'Klimawandel und persönliche Verantwortung',
    descripcion: 'Ein Artikel über individuelle Handlungsmöglichkeiten angesichts des Klimawandels und gesellschaftliche Debatten dazu.',
    requiresAuth: true,
    texto: `Der Klimawandel gehört zu den drängendsten Herausforderungen unserer Zeit. Während internationale Gremien und Regierungen über Emissionsreduktionen und Klimaziele verhandeln, stellt sich für viele Einzelpersonen die Frage: Welchen Beitrag kann ich als Privatperson leisten? Die Antworten darauf sind vielschichtig und werden in der Gesellschaft kontrovers diskutiert.

Auf der einen Seite argumentieren viele Umweltorganisationen, dass individuelle Verhaltensänderungen unerlässlich sind. Weniger Fleisch zu essen, seltener zu fliegen und auf öffentliche Verkehrsmittel umzusteigen seien konkrete Schritte, die jede und jeder Einzelne unternehmen könne. Auch der Konsum von Energie aus erneuerbaren Quellen und die Reduzierung von Einwegplastik werden als wichtige Maßnahmen genannt.

Kritiker hingegen weisen darauf hin, dass individuelle Maßnahmen allein nicht ausreichen, um die notwendigen Veränderungen herbeizuführen. Sie betonen die Verantwortung von Unternehmen und politischen Entscheidungsträgern, strukturelle Rahmenbedingungen zu schaffen, die nachhaltiges Verhalten erleichtern und klimaschädliche Alternativen unattraktiver machen. Das Konzept des „Carbon Footprint", das den Einzelnen in den Mittelpunkt stellt, sei ursprünglich von der Ölindustrie populär gemacht worden, um die gesellschaftliche Debatte vom kollektiven Handeln abzulenken.

Trotz dieser Meinungsverschiedenheiten sind sich die meisten Experten einig, dass es sowohl strukturelle Veränderungen als auch ein Umdenken im individuellen Verhalten braucht, um die globalen Klimaziele zu erreichen.`,
    preguntas: [
      { enunciado: 'Der Artikel beschreibt den Klimawandel als ein bereits gelöstes Problem.', respuesta: false },
      { enunciado: 'Umweltorganisationen halten individuelle Verhaltensänderungen für notwendig.', respuesta: true },
      { enunciado: 'Kritiker sind der Meinung, dass allein individuelles Handeln ausreicht.', respuesta: false },
      { enunciado: 'Das Konzept des „Carbon Footprint" wurde laut dem Text von der Ölindustrie verbreitet.', respuesta: true },
      { enunciado: 'Die meisten Experten sind sich einig, dass sowohl strukturelle als auch individuelle Maßnahmen nötig sind.', respuesta: true },
    ],
  },
  {
    slug: "am-bahnhof",
    nivel: "A1",
    titulo: "Am Bahnhof",
    descripcion: "Anna va a la estación de tren para visitar a su abuela en otra ciudad.",
    texto: "Anna geht heute zum Bahnhof. Sie möchte ihre Großmutter in Hamburg besuchen. Der Zug fährt um zehn Uhr ab. Anna kauft eine Fahrkarte am Schalter.\n\nSie wartet auf dem Bahnsteig. Viele Leute stehen dort und warten auch. Der Zug kommt pünktlich. Anna steigt ein und sucht einen Platz.\n\nDie Fahrt dauert zwei Stunden. Anna liest ein Buch und hört Musik. Sie freut sich sehr auf ihre Großmutter. Am Bahnhof in Hamburg wartet die Großmutter schon.",
    preguntas: [{enunciado: "Anna fährt nach Berlin.", respuesta: false}, {enunciado: "Der Zug fährt um zehn Uhr ab.", respuesta: true}, {enunciado: "Anna kauft die Fahrkarte online.", respuesta: false}, {enunciado: "Die Fahrt dauert zwei Stunden.", respuesta: true}, {enunciado: "Die Großmutter wartet am Bahnhof in Hamburg.", respuesta: true}],
  },
  {
    slug: "der-geburtstag",
    nivel: "A1",
    titulo: "Der Geburtstag",
    descripcion: "Hoy es el cumpleaños de Lukas y su familia prepara una fiesta para él.",
    texto: "Heute ist Lukas' Geburtstag. Er wird sieben Jahre alt. Seine Mutter backt einen Kuchen mit Schokolade. Sein Vater kauft Luftballons und Geschenke.\n\nAm Nachmittag kommen fünf Freunde zu Besuch. Die Kinder spielen im Garten und lachen viel. Lukas öffnet seine Geschenke. Er bekommt ein neues Buch und ein Spielzeug.\n\nDann essen alle zusammen Kuchen und trinken Saft. Lukas ist sehr glücklich. Er sagt: „Das ist der beste Geburtstag!“ Am Abend gehen die Freunde nach Hause.",
    preguntas: [{enunciado: "Lukas wird acht Jahre alt.", respuesta: false}, {enunciado: "Seine Mutter backt einen Kuchen.", respuesta: true}, {enunciado: "Zehn Freunde kommen zu Besuch.", respuesta: false}, {enunciado: "Lukas bekommt ein neues Buch.", respuesta: true}, {enunciado: "Die Kinder trinken Milch.", respuesta: false}],
  },
  {
    slug: "meine-kleidung",
    nivel: "A1",
    titulo: "Meine Kleidung",
    descripcion: "Marie elige su ropa para la escuela y para diferentes estaciones del año.",
    texto: "Marie steht am Morgen auf und öffnet ihren Kleiderschrank. Heute ist es kalt draußen. Sie zieht eine warme Hose und einen Pullover an. Dann nimmt sie ihre Jacke.\n\nIm Sommer trägt Marie gerne ein T-Shirt und einen Rock. Ihre Lieblingsfarbe ist blau. Sie hat auch weiße Schuhe und eine rote Mütze.\n\nAm Wochenende trägt sie oft eine Jeans und Sportschuhe. Marie mag bequeme Kleidung. Ihre Mutter sagt: „Du siehst heute sehr hübsch aus!“ Marie lächelt und geht zur Schule.",
    preguntas: [{enunciado: "Heute ist es warm draußen.", respuesta: false}, {enunciado: "Marie zieht einen Pullover an.", respuesta: true}, {enunciado: "Maries Lieblingsfarbe ist rot.", respuesta: false}, {enunciado: "Am Wochenende trägt Marie oft eine Jeans.", respuesta: true}, {enunciado: "Marie geht zur Schule.", respuesta: true}],
  },
  {
    slug: "am-strand",
    nivel: "A1",
    titulo: "Am Strand",
    descripcion: "La familia Müller pasa un día soleado en la playa durante las vacaciones de verano.",
    texto: "Die Familie Müller fährt im Sommer an den Strand. Das Wetter ist schön und die Sonne scheint. Die Kinder nehmen ihre Badesachen und ein großes Handtuch mit.\n\nAm Strand bauen die Kinder eine Sandburg. Der Vater schwimmt im Meer. Die Mutter liegt auf einer Decke und liest ein Buch. Das Wasser ist warm und blau.\n\nAm Mittag essen sie Brötchen und trinken Wasser. Die Kinder spielen mit einem Ball. Am Abend gehen alle müde, aber glücklich nach Hause.",
    preguntas: [{enunciado: "Die Familie fährt im Winter an den Strand.", respuesta: false}, {enunciado: "Die Sonne scheint.", respuesta: true}, {enunciado: "Die Kinder bauen eine Sandburg.", respuesta: true}, {enunciado: "Die Mutter schwimmt im Meer.", respuesta: false}, {enunciado: "Am Mittag essen sie Pizza.", respuesta: false}],
  },
  {
    slug: "der-spielplatz",
    nivel: "A1",
    titulo: "Der Spielplatz",
    descripcion: "Dos hermanos van al parque infantil del barrio y se divierten con otros niños.",
    texto: "Tom und seine Schwester Lisa gehen zum Spielplatz. Der Spielplatz ist neben dem Park. Dort gibt es eine Rutsche, eine Schaukel und ein Klettergerüst.\n\nTom klettert gern auf das Klettergerüst. Lisa fährt auf der Rutsche. Andere Kinder spielen im Sandkasten. Alle haben viel Spaß zusammen.\n\nNach einer Stunde ruft die Mutter: „Kommt, wir gehen nach Hause!“ Tom und Lisa sind ein bisschen traurig. Aber morgen können sie wieder kommen. Sie sagen den anderen Kindern „Tschüss!“",
    preguntas: [{enunciado: "Tom und Lisa gehen zum Spielplatz.", respuesta: true}, {enunciado: "Der Spielplatz ist neben der Schule.", respuesta: false}, {enunciado: "Lisa klettert auf das Klettergerüst.", respuesta: false}, {enunciado: "Die Kinder haben viel Spaß.", respuesta: true}, {enunciado: "Die Mutter ruft die Kinder nach einer Stunde.", respuesta: true}],
  },
  {
    slug: "mein-fahrrad",
    nivel: "A1",
    titulo: "Mein Fahrrad",
    descripcion: "Max recibe una bicicleta nueva y sale a dar un paseo por su barrio.",
    texto: "Max hat ein neues Fahrrad. Es ist rot und hat eine Klingel. Max fährt jeden Tag mit dem Fahrrad zur Schule. Das macht ihm viel Spaß.\n\nHeute fährt Max mit seinem Freund Paul durch den Park. Sie fahren langsam am See vorbei. Die Vögel singen und die Blumen blühen. Es ist ein schöner Tag.\n\nNach dem Park fahren sie zum Eisladen. Max kauft ein Eis mit Erdbeere. Paul nimmt Schokolade. Dann fahren sie zurück nach Hause. Max stellt sein Fahrrad in die Garage.",
    preguntas: [{enunciado: "Das Fahrrad von Max ist blau.", respuesta: false}, {enunciado: "Max fährt jeden Tag mit dem Fahrrad zur Schule.", respuesta: true}, {enunciado: "Max fährt allein durch den Park.", respuesta: false}, {enunciado: "Max kauft ein Eis mit Erdbeere.", respuesta: true}, {enunciado: "Max stellt sein Fahrrad in die Garage.", respuesta: true}],
  },
  {
    slug: "die-post",
    nivel: "A1",
    titulo: "Die Post",
    descripcion: "Frau Klein va a la oficina de correos para enviar un paquete y comprar sellos.",
    texto: "Frau Klein geht heute zur Post. Sie möchte ein Paket an ihre Tochter in Berlin schicken. Das Paket ist nicht sehr schwer. Es wiegt drei Kilogramm.\n\nIn der Post wartet Frau Klein in einer Schlange. Der Angestellte ist freundlich. Er wiegt das Paket und klebt eine Briefmarke darauf. Frau Klein bezahlt fünf Euro.\n\nSie kauft auch drei Postkarten und Briefmarken. Frau Klein schreibt gern Briefe. Ihre Tochter freut sich immer über Post. Das Paket kommt in zwei Tagen an.",
    preguntas: [{enunciado: "Frau Klein schickt ein Paket nach München.", respuesta: false}, {enunciado: "Das Paket wiegt drei Kilogramm.", respuesta: true}, {enunciado: "Der Angestellte ist unfreundlich.", respuesta: false}, {enunciado: "Frau Klein bezahlt fünf Euro.", respuesta: true}, {enunciado: "Das Paket kommt in einer Woche an.", respuesta: false}],
  },
  {
    slug: "im-bus",
    nivel: "A1",
    titulo: "Im Bus",
    descripcion: "Jan toma el autobús todos los días para ir a trabajar y describe su rutina.",
    texto: "Jan fährt jeden Morgen mit dem Bus zur Arbeit. Die Bushaltestelle ist direkt vor seinem Haus. Der Bus kommt um halb acht. Jan hat eine Monatskarte.\n\nIm Bus setzt sich Jan ans Fenster. Er hört Musik mit seinen Kopfhörern. Manchmal liest er auch die Zeitung. Die Fahrt dauert zwanzig Minuten.\n\nAn der Haltestelle Marktplatz steigt Jan aus. Sein Büro ist nur fünf Minuten zu Fuß entfernt. Am Abend fährt er mit dem gleichen Bus zurück nach Hause.",
    preguntas: [{enunciado: "Jan fährt mit der Straßenbahn zur Arbeit.", respuesta: false}, {enunciado: "Der Bus kommt um halb acht.", respuesta: true}, {enunciado: "Jan hat eine Monatskarte.", respuesta: true}, {enunciado: "Die Fahrt dauert dreißig Minuten.", respuesta: false}, {enunciado: "Jan steigt an der Haltestelle Marktplatz aus.", respuesta: true}],
  },
  {
    slug: "das-picknick",
    nivel: "A1",
    titulo: "Das Picknick",
    descripcion: "Una familia organiza un pícnic en el parque y disfruta de un día al aire libre.",
    texto: "Am Sonntag macht die Familie Weber ein Picknick im Park. Die Mutter packt einen Korb mit Essen. Es gibt Brot, Käse, Obst und Saft. Der Vater bringt eine große Decke mit.\n\nSie sitzen unter einem Baum und essen zusammen. Die Kinder spielen mit einem Ball auf der Wiese. Das Wetter ist warm und sonnig. Alle sind fröhlich.\n\nNach dem Essen machen sie einen Spaziergang am Fluss. Sie sehen Enten auf dem Wasser. Am Nachmittag fahren sie zufrieden nach Hause zurück.",
    preguntas: [{enunciado: "Das Picknick ist am Samstag.", respuesta: false}, {enunciado: "Die Mutter packt einen Korb mit Essen.", respuesta: true}, {enunciado: "Sie sitzen unter einem Baum.", respuesta: true}, {enunciado: "Das Wetter ist kalt und regnerisch.", respuesta: false}, {enunciado: "Sie sehen Enten auf dem Wasser.", respuesta: true}],
  },
  {
    slug: "der-garten",
    nivel: "A1",
    titulo: "Der Garten",
    descripcion: "Oma Helga trabaja en su jardín plantando flores y verduras en primavera.",
    texto: "Oma Helga hat einen schönen Garten hinter dem Haus. Im Frühling pflanzt sie Blumen und Gemüse. Sie hat Tomaten, Gurken und Karotten. Die Blumen sind rot, gelb und weiß.\n\nJeden Morgen gießt Oma Helga ihre Pflanzen. Sie braucht eine Gießkanne und Handschuhe. Die Arbeit im Garten macht ihr viel Freude. Manchmal hilft ihr Enkel Tim.\n\nTim mag die Erdbeeren am liebsten. Er pflückt sie und isst sie direkt. Oma Helga lacht und sagt: „Du bist mein bester Helfer!“ Am Abend ruhen sie sich im Garten aus.",
    preguntas: [{enunciado: "Oma Helgas Garten ist vor dem Haus.", respuesta: false}, {enunciado: "Sie pflanzt Blumen und Gemüse.", respuesta: true}, {enunciado: "Oma Helga gießt ihre Pflanzen jeden Abend.", respuesta: false}, {enunciado: "Tim mag die Erdbeeren am liebsten.", respuesta: true}, {enunciado: "Tim hilft manchmal im Garten.", respuesta: true}],
  },
  {
    slug: "meine-nachbarn",
    nivel: "A1",
    titulo: "Meine Nachbarn",
    descripcion: "Sophie describe a sus vecinos y las cosas amables que hacen en el vecindario.",
    texto: "Sophie wohnt in einem Mehrfamilienhaus. Sie hat nette Nachbarn. Herr Braun wohnt im ersten Stock. Er ist Lehrer und hat einen kleinen Hund. Frau Fischer wohnt im zweiten Stock.\n\nFrau Fischer ist Ärztin und sehr freundlich. Sie bringt Sophie manchmal Kuchen. Herr Braun hilft oft mit schweren Taschen. Die Nachbarn grüßen sich jeden Tag.\n\nAm Wochenende machen die Nachbarn manchmal ein Fest im Hof. Sie kochen zusammen und die Kinder spielen. Sophie mag ihre Nachbarn sehr. Es ist wie eine große Familie.",
    preguntas: [{enunciado: "Sophie wohnt in einem Einfamilienhaus.", respuesta: false}, {enunciado: "Herr Braun ist Lehrer.", respuesta: true}, {enunciado: "Frau Fischer ist Lehrerin.", respuesta: false}, {enunciado: "Frau Fischer bringt Sophie manchmal Kuchen.", respuesta: true}, {enunciado: "Am Wochenende machen die Nachbarn manchmal ein Fest.", respuesta: true}],
  },
  {
    slug: "am-flughafen",
    nivel: "A1",
    titulo: "Am Flughafen",
    descripcion: "La familia Schmidt va al aeropuerto para tomar un vuelo a España de vacaciones.",
    texto: "Die Familie Schmidt fliegt heute nach Spanien. Sie fahren mit dem Taxi zum Flughafen. Am Flughafen gibt es viele Menschen. Sie müssen zuerst einchecken.\n\nDie Koffer sind schwer. Ein Angestellter wiegt sie. Dann gehen sie durch die Sicherheitskontrolle. Die Kinder sind aufgeregt und schauen die Flugzeuge an.\n\nDas Flugzeug fliegt um drei Uhr ab. Die Familie sitzt zusammen in einer Reihe. Der Flug dauert zweieinhalb Stunden. Die Kinder freuen sich auf den Strand und die Sonne.",
    preguntas: [{enunciado: "Die Familie fliegt nach Italien.", respuesta: false}, {enunciado: "Sie fahren mit dem Taxi zum Flughafen.", respuesta: true}, {enunciado: "Die Koffer sind leicht.", respuesta: false}, {enunciado: "Das Flugzeug fliegt um drei Uhr ab.", respuesta: true}, {enunciado: "Der Flug dauert zweieinhalb Stunden.", respuesta: true}],
  },
  {
    slug: "das-konzert",
    nivel: "A1",
    titulo: "Das Konzert",
    descripcion: "Julia y su amiga van a un concierto de su banda favorita en la ciudad.",
    texto: "Julia und ihre Freundin Mia gehen heute Abend zu einem Konzert. Die Band heißt „Sternenklang“ und spielt Pop-Musik. Das Konzert ist in der Stadthalle.\n\nSie kommen um sieben Uhr an. Die Halle ist voll mit Leuten. Julia und Mia stehen in der dritten Reihe. Die Musik ist laut und toll. Sie tanzen und singen mit.\n\nNach dem Konzert kaufen sie ein T-Shirt von der Band. Julia sagt: „Das war fantastisch!“ Mia ist auch begeistert. Sie nehmen den letzten Bus nach Hause.",
    preguntas: [{enunciado: "Julia geht allein zum Konzert.", respuesta: false}, {enunciado: "Die Band spielt Pop-Musik.", respuesta: true}, {enunciado: "Das Konzert ist im Park.", respuesta: false}, {enunciado: "Julia und Mia tanzen und singen mit.", respuesta: true}, {enunciado: "Sie nehmen den letzten Bus nach Hause.", respuesta: true}],
  },
  {
    slug: "im-kino",
    nivel: "A1",
    titulo: "Im Kino",
    descripcion: "Leon y su hermano van al cine a ver una película de aventuras el sábado.",
    texto: "Am Samstag gehen Leon und sein Bruder Felix ins Kino. Sie möchten einen Abenteuerfilm sehen. Der Film beginnt um vier Uhr. Leon kauft die Eintrittskarten an der Kasse.\n\nSie kaufen auch Popcorn und Cola. Der Kinosaal ist groß und dunkel. Sie setzen sich in die letzte Reihe. Der Film ist sehr spannend und lustig.\n\nNach dem Film sprechen sie über die besten Szenen. Leon sagt: „Der Held war super!“ Felix mag die lustigen Momente am meisten. Sie gehen zufrieden nach Hause.",
    preguntas: [{enunciado: "Leon geht am Sonntag ins Kino.", respuesta: false}, {enunciado: "Sie möchten einen Abenteuerfilm sehen.", respuesta: true}, {enunciado: "Der Film beginnt um fünf Uhr.", respuesta: false}, {enunciado: "Der Kinosaal ist groß und dunkel.", respuesta: true}, {enunciado: "Sie setzen sich in die erste Reihe.", respuesta: false}],
  },
  {
    slug: "der-zahnarzt",
    nivel: "A1",
    titulo: "Der Zahnarzt",
    descripcion: "El pequeño Ben tiene cita con el dentista y descubre que no es tan terrible.",
    texto: "Ben hat heute einen Termin beim Zahnarzt. Er hat ein bisschen Angst. Seine Mutter geht mit ihm. Die Zahnarztpraxis ist in der Hauptstraße.\n\nIm Wartezimmer liest Ben ein Kinderbuch. Dann ruft die Assistentin seinen Namen. Der Zahnarzt ist sehr nett. Er sagt: „Mach den Mund auf, bitte!“ Er schaut sich die Zähne an.\n\nDer Zahnarzt sagt: „Deine Zähne sind gesund! Sehr gut!“ Ben ist erleichtert und lächelt. Er bekommt einen kleinen Sticker als Belohnung. Auf dem Heimweg kauft seine Mutter ihm ein Eis.",
    preguntas: [{enunciado: "Ben geht allein zum Zahnarzt.", respuesta: false}, {enunciado: "Ben hat ein bisschen Angst.", respuesta: true}, {enunciado: "Die Zahnarztpraxis ist im Krankenhaus.", respuesta: false}, {enunciado: "Bens Zähne sind gesund.", respuesta: true}, {enunciado: "Ben bekommt einen Sticker als Belohnung.", respuesta: true}],
  },
  {
    slug: "umzug-in-eine-neue-stadt",
    nivel: "A2",
    titulo: "Umzug in eine neue Stadt",
    descripcion: "Una joven cuenta cómo se ha mudado a una nueva ciudad y sus primeras experiencias allí.",
    texto: "Letzten Monat bin ich in eine neue Stadt umgezogen. Ich habe vorher in einem kleinen Dorf gewohnt, aber jetzt lebe ich in Hamburg. Der Umzug war sehr anstrengend, weil ich viele Kartons tragen musste.\n\nMeine neue Wohnung liegt im dritten Stock und hat zwei Zimmer. Die Küche ist klein, aber das Wohnzimmer ist groß und hell. Ich habe schon alle Möbel aufgebaut und die Wände gestrichen.\n\nIn der ersten Woche habe ich meine Nachbarn kennengelernt. Sie sind sehr freundlich und haben mir Kuchen gebracht. Eine Nachbarin hat mir auch den Supermarkt und die Bäckerei gezeigt.\n\nIch muss noch viele Dinge erledigen. Ich möchte mich beim Einwohnermeldeamt anmelden und einen Hausarzt finden. Aber insgesamt bin ich sehr zufrieden mit meinem neuen Zuhause.",
    preguntas: [{enunciado: "Die Erzählerin hat vorher in einer großen Stadt gewohnt.", respuesta: false}, {enunciado: "Die neue Wohnung hat zwei Zimmer.", respuesta: true}, {enunciado: "Die Nachbarn waren unfreundlich.", respuesta: false}, {enunciado: "Eine Nachbarin hat ihr den Supermarkt gezeigt.", respuesta: true}, {enunciado: "Sie hat sich schon beim Einwohnermeldeamt angemeldet.", respuesta: false}],
  },
  {
    slug: "der-flohmarkt",
    nivel: "A2",
    titulo: "Der Flohmarkt",
    descripcion: "Un hombre visita un mercadillo el fin de semana y encuentra cosas interesantes a buen precio.",
    texto: "Am Samstag bin ich mit meiner Freundin zum Flohmarkt gegangen. Der Markt findet jeden Monat auf dem großen Parkplatz neben der Kirche statt. Wir sind früh aufgestanden, weil die besten Sachen schnell weg sind.\n\nEs gab viele Stände mit gebrauchten Kleidern, alten Büchern und Geschirr. Ich habe eine schöne Lampe für nur fünf Euro gefunden. Meine Freundin hat sich einen Wintermantel gekauft, der fast wie neu aussah.\n\nWir haben auch mit den Verkäufern gesprochen. Ein älterer Mann hat uns die Geschichte von einer alten Uhr erzählt. Er wollte zwanzig Euro dafür, aber wir haben auf fünfzehn verhandelt.\n\nNach zwei Stunden waren wir müde und hungrig. Wir haben uns an einen Stand mit Kaffee und Kuchen gesetzt. Der Flohmarkt war ein tolles Erlebnis.",
    preguntas: [{enunciado: "Der Flohmarkt findet jede Woche statt.", respuesta: false}, {enunciado: "Sie haben eine Lampe für fünf Euro gekauft.", respuesta: true}, {enunciado: "Die Freundin hat einen Sommerrock gekauft.", respuesta: false}, {enunciado: "Ein älterer Mann hat ihnen von einer Uhr erzählt.", respuesta: true}, {enunciado: "Die Uhr hat zwanzig Euro gekostet.", respuesta: false}],
  },
  {
    slug: "wandern-im-schwarzwald",
    nivel: "A2",
    titulo: "Wandern im Schwarzwald",
    descripcion: "Una familia hace una excursión de senderismo por la Selva Negra y disfruta de la naturaleza.",
    texto: "Im Sommer haben wir einen Ausflug in den Schwarzwald gemacht. Wir sind mit dem Auto von Stuttgart losgefahren und nach zwei Stunden angekommen. Das Wetter war perfekt zum Wandern, sonnig aber nicht zu heiß.\n\nDer Wanderweg war gut beschildert und führte durch dichte Wälder und über grüne Wiesen. Unterwegs haben wir einen kleinen Wasserfall entdeckt. Die Kinder waren begeistert und wollten im Wasser spielen.\n\nNach drei Stunden haben wir eine Pause an einer Berghütte gemacht. Dort konnten wir regionale Spezialitäten probieren. Ich habe Schwarzwälder Schinken bestellt, und meine Frau hat eine Forelle gegessen.\n\nAm Abend waren wir alle sehr müde, aber glücklich. Die Wanderung war ungefähr zwölf Kilometer lang. Wir möchten nächstes Jahr wiederkommen und eine längere Tour machen.",
    preguntas: [{enunciado: "Die Familie ist mit dem Zug gefahren.", respuesta: false}, {enunciado: "Das Wetter war sonnig.", respuesta: true}, {enunciado: "Die Kinder haben einen Wasserfall entdeckt.", respuesta: true}, {enunciado: "Sie haben in einem Restaurant gegessen.", respuesta: false}, {enunciado: "Die Wanderung war ungefähr zwölf Kilometer lang.", respuesta: true}],
  },
  {
    slug: "kochen-mit-freunden",
    nivel: "A2",
    titulo: "Kochen mit Freunden",
    descripcion: "Un grupo de amigos organiza una cena conjunta y cada uno prepara un plato diferente.",
    texto: "Letzten Freitag haben wir bei mir zu Hause zusammen gekocht. Ich habe drei Freunde eingeladen, und jeder sollte etwas mitbringen. Wir wollten ein italienisches Abendessen machen.\n\nMein Freund Marco hat die Vorspeise vorbereitet. Er hat einen großen Salat mit Tomaten und Mozzarella gemacht. Lisa hat die Hauptspeise gekocht: Pasta mit einer selbstgemachten Tomatensoße. Das Rezept hat sie von ihrer Großmutter bekommen.\n\nIch war für das Dessert verantwortlich und habe Tiramisu gemacht. Dafür musste ich am Vormittag schon die Zutaten kaufen. Thomas hat den Wein und das Brot mitgebracht.\n\nWir haben den ganzen Abend zusammen gegessen, gelacht und Musik gehört. Alle haben gesagt, dass das Essen sehr lecker war. Wir möchten das jetzt jeden Monat wiederholen.",
    preguntas: [{enunciado: "Sie haben in einem Restaurant gegessen.", respuesta: false}, {enunciado: "Marco hat einen Salat gemacht.", respuesta: true}, {enunciado: "Lisa hat das Rezept aus dem Internet.", respuesta: false}, {enunciado: "Der Erzähler hat Tiramisu als Dessert gemacht.", respuesta: true}, {enunciado: "Sie wollen das Kochen jeden Monat wiederholen.", respuesta: true}],
  },
  {
    slug: "der-tierpark",
    nivel: "A2",
    titulo: "Der Tierpark",
    descripcion: "Una madre lleva a sus hijos al zoológico y pasan un día emocionante viendo diferentes animales.",
    texto: "Gestern habe ich mit meinen Kindern den Tierpark besucht. Wir haben uns sehr auf diesen Tag gefreut, weil die Kinder Tiere lieben. Das Wetter war bewölkt, aber es hat nicht geregnet.\n\nZuerst sind wir zu den Elefanten gegangen. Die Kinder haben zugesehen, wie die Elefanten gebadet haben. Danach haben wir die Affen besucht. Ein kleiner Affe hat uns von seinem Baum aus beobachtet. Das war sehr lustig.\n\nBeim Mittagessen haben wir Pommes und Bratwurst an einem Kiosk gegessen. Dann sind wir zum Streichelzoo gegangen. Dort konnten die Kinder Ziegen und Kaninchen anfassen. Meine Tochter wollte ein Kaninchen mit nach Hause nehmen.\n\nAm Ende haben wir noch Postkarten und Stofftiere im Souvenirladen gekauft. Der Ausflug in den Tierpark war ein wunderschöner Tag für die ganze Familie.",
    preguntas: [{enunciado: "Es hat an diesem Tag geregnet.", respuesta: false}, {enunciado: "Die Elefanten haben gebadet.", respuesta: true}, {enunciado: "Die Familie hat im Restaurant Mittag gegessen.", respuesta: false}, {enunciado: "Im Streichelzoo konnten die Kinder Tiere anfassen.", respuesta: true}, {enunciado: "Sie haben Postkarten im Souvenirladen gekauft.", respuesta: true}],
  },
  {
    slug: "ein-brief-an-oma",
    nivel: "A2",
    titulo: "Ein Brief an Oma",
    descripcion: "Un niño escribe una carta a su abuela contándole sus últimas novedades en el colegio y en casa.",
    texto: "Liebe Oma, ich möchte dir von meiner letzten Woche erzählen. In der Schule haben wir ein Projekt über Tiere gemacht. Ich habe über Delfine geschrieben, weil sie meine Lieblingstiere sind.\n\nAm Mittwoch hatte ich eine Matheprüfung. Ich habe lange dafür gelernt und eine gute Note bekommen. Papa hat gesagt, er ist stolz auf mich. Am Donnerstag hat Mama einen Kuchen gebacken, und ich durfte helfen.\n\nAm Wochenende haben wir unseren Garten aufgeräumt. Papa hat neue Blumen gepflanzt, und ich habe ihm dabei geholfen. Jetzt sieht der Garten sehr schön aus. Unser Hund Max hat im Garten gespielt und war ganz schmutzig.\n\nIch vermisse dich sehr und hoffe, dass du uns bald besuchen kannst. Vielleicht kannst du im Sommer kommen? Viele Grüße und Küsse, dein Enkel Tim.",
    preguntas: [{enunciado: "Tim hat in der Schule über Katzen geschrieben.", respuesta: false}, {enunciado: "Tim hat eine gute Note in Mathe bekommen.", respuesta: true}, {enunciado: "Die Mutter hat am Mittwoch einen Kuchen gebacken.", respuesta: false}, {enunciado: "Der Vater hat neue Blumen im Garten gepflanzt.", respuesta: true}, {enunciado: "Tim möchte, dass die Oma im Sommer kommt.", respuesta: true}],
  },
  {
    slug: "fahrradtour-am-rhein",
    nivel: "A2",
    titulo: "Fahrradtour am Rhein",
    descripcion: "Dos amigos hacen un recorrido en bicicleta a lo largo del río Rin y descubren pueblos pintorescos.",
    texto: "Letztes Wochenende haben mein Freund Jan und ich eine Fahrradtour am Rhein gemacht. Wir sind in Bonn gestartet und wollten bis Koblenz fahren. Die Strecke war ungefähr sechzig Kilometer lang.\n\nDer Radweg am Rhein ist sehr gut ausgebaut und meistens flach. Wir sind an vielen kleinen Dörfern vorbeigefahren und haben die Burgen auf den Hügeln bewundert. Das Wetter war warm, und wir konnten den Fluss die ganze Zeit sehen.\n\nNach der Hälfte der Strecke haben wir in einem gemütlichen Biergarten angehalten. Dort haben wir ein kaltes Getränk bestellt und uns ausgeruht. Jan hatte leider einen platten Reifen, aber wir konnten ihn schnell reparieren.\n\nAm späten Nachmittag sind wir in Koblenz angekommen. Wir waren erschöpft, aber sehr stolz. Die Rückfahrt haben wir dann bequem mit dem Zug gemacht.",
    preguntas: [{enunciado: "Die Tour ging von Koblenz nach Bonn.", respuesta: false}, {enunciado: "Die Strecke war ungefähr sechzig Kilometer lang.", respuesta: true}, {enunciado: "Der Radweg war meistens bergig.", respuesta: false}, {enunciado: "Jan hatte einen platten Reifen.", respuesta: true}, {enunciado: "Sie sind mit dem Zug zurückgefahren.", respuesta: true}],
  },
  {
    slug: "im-schwimmbad",
    nivel: "A2",
    titulo: "Im Schwimmbad",
    descripcion: "Una familia pasa una tarde calurosa de verano en la piscina municipal y los niños aprenden a nadar.",
    texto: "Letzte Woche war es sehr heiß, und wir haben beschlossen, ins Schwimmbad zu gehen. Wir haben unsere Badesachen gepackt und sind mit dem Bus dorthin gefahren. Der Eintritt hat für die ganze Familie zwanzig Euro gekostet.\n\nDas Schwimmbad hatte ein großes Becken für Erwachsene und ein kleines Kinderbecken. Mein Sohn hat zum ersten Mal ohne Schwimmflügel geschwommen. Ich war sehr stolz auf ihn. Meine Tochter hat lieber auf der Wasserrutsche gespielt.\n\nWir haben uns auch auf der Wiese gesonnt und ein Eis gegessen. Daneben gab es einen Spielplatz, wo die Kinder nach dem Schwimmen gespielt haben. Das Wasser war angenehm kühl und sehr sauber.\n\nGegen fünf Uhr haben wir das Schwimmbad verlassen. Die Kinder waren müde, aber zufrieden. Auf dem Rückweg haben sie im Bus sofort geschlafen. Es war ein perfekter Sommertag.",
    preguntas: [{enunciado: "Sie sind mit dem Auto zum Schwimmbad gefahren.", respuesta: false}, {enunciado: "Der Sohn hat zum ersten Mal ohne Schwimmflügel geschwommen.", respuesta: true}, {enunciado: "Die Tochter hat im großen Becken geschwommen.", respuesta: false}, {enunciado: "Das Wasser war angenehm kühl.", respuesta: true}, {enunciado: "Die Kinder haben auf dem Rückweg im Bus geschlafen.", respuesta: true}],
  },
  {
    slug: "der-weihnachtsmarkt",
    nivel: "A2",
    titulo: "Der Weihnachtsmarkt",
    descripcion: "Una pareja visita el mercadillo navideño de Núremberg y disfruta del ambiente festivo.",
    texto: "Im Dezember haben wir den berühmten Weihnachtsmarkt in Nürnberg besucht. Es war schon dunkel, und die vielen Lichter haben wunderschön ausgesehen. Überall hat es nach Zimt und gebrannten Mandeln geduftet.\n\nWir sind durch die Reihen der Holzbuden gegangen und haben die Handwerkskunst bewundert. Es gab handgemachte Kerzen, Schmuck und Spielzeug aus Holz. Ich habe für meine Mutter eine kleine Krippe gekauft.\n\nDanach haben wir Glühwein getrunken und Lebkuchen gegessen. Der Glühwein war heiß und süß, genau richtig bei dem kalten Wetter. Ein Chor hat auf der Bühne Weihnachtslieder gesungen, und die Stimmung war festlich.\n\nDer Weihnachtsmarkt war sehr voll, besonders am Abend. Trotzdem hat uns der Besuch sehr gefallen. Wir haben viele schöne Geschenke für die Familie gefunden und möchten nächstes Jahr wiederkommen.",
    preguntas: [{enunciado: "Der Weihnachtsmarkt war in München.", respuesta: false}, {enunciado: "Es hat nach Zimt und Mandeln geduftet.", respuesta: true}, {enunciado: "Der Erzähler hat eine Krippe für seine Mutter gekauft.", respuesta: true}, {enunciado: "Der Glühwein war kalt.", respuesta: false}, {enunciado: "Der Markt war am Abend sehr voll.", respuesta: true}],
  },
  {
    slug: "mein-erster-job",
    nivel: "A2",
    titulo: "Mein erster Job",
    descripcion: "Un joven cuenta su experiencia en su primer trabajo de verano en una heladería.",
    texto: "In den Sommerferien habe ich meinen ersten Job angefangen. Ich habe in einer Eisdiele gearbeitet, die direkt am Marktplatz liegt. Mein Chef war nett, und die Kollegen haben mir alles erklärt.\n\nMeine Aufgaben waren einfach: Ich musste die Kunden bedienen, Eis in Waffeln und Becher füllen und die Tische sauber machen. Am Anfang war ich nervös, weil so viele Leute gleichzeitig bestellt haben. Aber nach ein paar Tagen habe ich mich daran gewöhnt.\n\nIch habe jeden Tag sechs Stunden gearbeitet und am Ende des Monats meinen ersten Lohn bekommen. Mit dem Geld habe ich mir neue Kopfhörer und ein Buch gekauft. Den Rest habe ich gespart.\n\nDer Job hat mir viel Spaß gemacht. Ich habe gelernt, mit Menschen zu sprechen und im Team zu arbeiten. Nächsten Sommer möchte ich dort wieder arbeiten.",
    preguntas: [{enunciado: "Er hat in einem Restaurant gearbeitet.", respuesta: false}, {enunciado: "Die Eisdiele liegt am Marktplatz.", respuesta: true}, {enunciado: "Am Anfang war er nervös.", respuesta: true}, {enunciado: "Er hat acht Stunden am Tag gearbeitet.", respuesta: false}, {enunciado: "Er hat das ganze Geld ausgegeben.", respuesta: false}],
  },
  {
    slug: "ein-tag-in-muenchen",
    nivel: "A2",
    titulo: "Ein Tag in München",
    descripcion: "Un turista pasa un día visitando los lugares más conocidos de Múnich.",
    texto: "Letzten Samstag habe ich einen Tagesausflug nach München gemacht. Ich bin früh mit dem Zug losgefahren und war um neun Uhr am Hauptbahnhof. Zuerst bin ich zum Marienplatz gelaufen und habe das Rathaus angeschaut.\n\nUm elf Uhr habe ich das Glockenspiel am Rathaus gesehen. Es war sehr beeindruckend, und viele Touristen haben Fotos gemacht. Danach bin ich in den Englischen Garten gegangen. Der Park ist riesig, und ich habe dort sogar Surfer auf dem Eisbach gesehen.\n\nZum Mittagessen war ich in einem typischen bayerischen Wirtshaus. Ich habe Weißwürste mit Brezel und süßem Senf gegessen. Das Essen war köstlich und nicht teuer. Die Bedienung war auch sehr nett.\n\nAm Nachmittag habe ich noch die Frauenkirche besucht und bin durch die Geschäfte in der Innenstadt gebummelt. Gegen sechs Uhr bin ich müde, aber zufrieden zum Bahnhof zurückgegangen.",
    preguntas: [{enunciado: "Er ist mit dem Auto nach München gefahren.", respuesta: false}, {enunciado: "Das Glockenspiel war um elf Uhr.", respuesta: true}, {enunciado: "Im Englischen Garten hat er Surfer gesehen.", respuesta: true}, {enunciado: "Das Mittagessen war sehr teuer.", respuesta: false}, {enunciado: "Am Nachmittag hat er die Frauenkirche besucht.", respuesta: true}],
  },
  {
    slug: "die-bibliothek",
    nivel: "A2",
    titulo: "Die Bibliothek",
    descripcion: "Una estudiante descubre la biblioteca de su ciudad y empieza a ir regularmente.",
    texto: "Vor zwei Monaten habe ich mich in der Stadtbibliothek angemeldet. Die Bibliothek ist sehr modern und liegt direkt neben dem Rathaus. Man kann dort Bücher, DVDs und sogar Spiele ausleihen.\n\nIch gehe jetzt jede Woche dorthin, um neue Bücher zu holen. Am liebsten lese ich Romane und Reisebücher. Man darf die Bücher drei Wochen behalten, und die Verlängerung kann man online machen.\n\nDie Bibliothek hat auch einen großen Lesesaal mit bequemen Sesseln. Dort kann man in Ruhe lesen oder für die Universität lernen. Es gibt auch Computer mit Internet, die man kostenlos benutzen darf.\n\nLetzte Woche hat die Bibliothek eine Lesung organisiert. Ein bekannter Autor hat aus seinem neuen Roman vorgelesen. Es waren ungefähr fünfzig Besucher da. Ich finde es toll, dass die Bibliothek so viele Angebote hat.",
    preguntas: [{enunciado: "Die Bibliothek liegt neben der Schule.", respuesta: false}, {enunciado: "Man kann dort auch Spiele ausleihen.", respuesta: true}, {enunciado: "Die Bücher darf man eine Woche behalten.", respuesta: false}, {enunciado: "Es gibt Computer mit kostenlosem Internet.", respuesta: true}, {enunciado: "Bei der Lesung waren ungefähr fünfzig Besucher.", respuesta: true}],
  },
  {
    slug: "arztbesuch-mit-dem-kind",
    nivel: "A2",
    titulo: "Arztbesuch mit dem Kind",
    descripcion: "Una madre lleva a su hijo al médico porque tiene fiebre y tos desde hace varios días.",
    texto: "Mein Sohn Leon war seit drei Tagen krank. Er hatte Fieber und Husten und wollte nicht essen. Deshalb habe ich einen Termin beim Kinderarzt gemacht. Zum Glück hatten sie noch einen Termin frei.\n\nIm Wartezimmer mussten wir eine halbe Stunde warten. Leon hat ein Bilderbuch angeschaut, während ich die Formulare ausgefüllt habe. Dann hat uns die Sprechstundenhilfe ins Behandlungszimmer gerufen.\n\nDie Ärztin hat Leon gründlich untersucht. Sie hat seinen Hals angeschaut, die Ohren geprüft und seine Lunge abgehört. Sie hat gesagt, dass er eine Erkältung hat, aber nichts Schlimmes. Sie hat uns ein Rezept für Hustensaft gegeben.\n\nNach dem Arztbesuch sind wir in die Apotheke gegangen und haben die Medizin geholt. Zu Hause hat Leon den Hustensaft genommen und viel Tee getrunken. Nach zwei Tagen ging es ihm schon viel besser.",
    preguntas: [{enunciado: "Leon war seit einer Woche krank.", respuesta: false}, {enunciado: "Im Wartezimmer mussten sie eine halbe Stunde warten.", respuesta: true}, {enunciado: "Die Ärztin hat gesagt, es ist etwas Schlimmes.", respuesta: false}, {enunciado: "Leon hat ein Rezept für Hustensaft bekommen.", respuesta: true}, {enunciado: "Nach zwei Tagen ging es Leon besser.", respuesta: true}],
  },
  {
    slug: "sport-im-verein",
    nivel: "A2",
    titulo: "Sport im Verein",
    descripcion: "Un hombre se apunta a un club deportivo y cuenta sus experiencias jugando al fútbol con el equipo.",
    texto: "Seit drei Monaten bin ich Mitglied in einem Sportverein. Ich spiele dort Fußball in einer Hobbymannschaft. Das Training ist jeden Dienstag und Donnerstag abends um sieben Uhr.\n\nAm Anfang war ich nicht so fit und musste viele Pausen machen. Aber der Trainer hat mir geholfen und gute Übungen gezeigt. Jetzt kann ich schon neunzig Minuten ohne Probleme spielen. Die anderen Spieler sind sehr nett und wir verstehen uns gut.\n\nLetzten Samstag hatten wir unser erstes Spiel gegen eine andere Mannschaft. Wir haben drei zu eins gewonnen. Ich habe sogar ein Tor geschossen. Nach dem Spiel haben wir zusammen im Vereinsheim gefeiert und Pizza bestellt.\n\nDer Sportverein ist nicht teuer, ich bezahle nur fünfzehn Euro im Monat. Dafür kann ich auch die Turnhalle und den Fitnessraum benutzen. Sport im Verein macht mir viel mehr Spaß als alleine zu trainieren.",
    preguntas: [{enunciado: "Das Training ist dreimal pro Woche.", respuesta: false}, {enunciado: "Am Anfang musste er viele Pausen machen.", respuesta: true}, {enunciado: "Sie haben ihr erstes Spiel verloren.", respuesta: false}, {enunciado: "Er hat ein Tor geschossen.", respuesta: true}, {enunciado: "Der Verein kostet fünfzehn Euro im Monat.", respuesta: true}],
  },
  {
    slug: "das-neue-handy",
    nivel: "A2",
    titulo: "Das neue Handy",
    descripcion: "Una adolescente recibe un móvil nuevo por su cumpleaños y aprende a usarlo.",
    texto: "Zum Geburtstag habe ich ein neues Handy bekommen. Mein altes Handy war schon drei Jahre alt und sehr langsam. Das neue Modell hat eine bessere Kamera und einen größeren Bildschirm.\n\nZuerst musste ich alle meine Kontakte und Fotos auf das neue Handy übertragen. Mein Bruder hat mir dabei geholfen, weil er sich gut mit Technik auskennt. Danach habe ich meine wichtigsten Apps heruntergeladen.\n\nDie Kamera ist wirklich fantastisch. Ich habe schon viele Fotos von meinem Hund und meinen Freunden gemacht. Die Bilder sind viel schärfer als mit dem alten Handy. Ich kann jetzt auch bessere Videos aufnehmen.\n\nAm Anfang musste ich mich an das neue System gewöhnen. Manche Funktionen habe ich nicht sofort gefunden. Aber nach einer Woche konnte ich alles problemlos bedienen. Ich bin sehr zufrieden und passe gut auf mein neues Handy auf.",
    preguntas: [{enunciado: "Das alte Handy war zwei Jahre alt.", respuesta: false}, {enunciado: "Das neue Handy hat eine bessere Kamera.", respuesta: true}, {enunciado: "Sie hat die Daten alleine übertragen.", respuesta: false}, {enunciado: "Die Bilder sind schärfer als mit dem alten Handy.", respuesta: true}, {enunciado: "Nach einer Woche konnte sie alles bedienen.", respuesta: true}],
  },
  {
    slug: "nachhaltig-einkaufen",
    nivel: "B1",
    titulo: "Nachhaltig einkaufen",
    descripcion: "Un texto sobre cómo las personas pueden comprar de forma más sostenible en su vida cotidiana.",
    texto: "Immer mehr Menschen in Deutschland achten beim Einkaufen auf Nachhaltigkeit. Sie kaufen regionale Produkte, weil sie wissen, dass lange Transportwege der Umwelt schaden. Obwohl nachhaltige Lebensmittel oft teurer sind, entscheiden sich viele Verbraucher trotzdem dafür, weil ihnen die Qualität wichtiger ist als der Preis.\n\nWenn man nachhaltig einkaufen möchte, sollte man zuerst einen Einkaufszettel schreiben, damit man nur das kauft, was man wirklich braucht. Deshalb werfen nachhaltige Käufer weniger Lebensmittel weg. Außerdem bringen sie ihre eigenen Taschen mit, anstatt Plastiktüten zu verwenden. Es wäre besser, wenn alle Geschäfte auf Einwegverpackungen verzichten würden.\n\nViele Supermärkte bieten inzwischen unverpackte Waren an. In sogenannten Unverpackt-Läden können die Kunden ihre eigenen Behälter mitbringen und genau die Menge kaufen, die sie benötigen. Obwohl diese Läden noch selten sind, wächst ihre Zahl stetig. Manche Leute sagen, sie hätten gern mehr solche Geschäfte in ihrer Nähe.\n\nNachhaltiges Einkaufen bedeutet auch, saisonale Produkte zu bevorzugen. Im Winter Erdbeeren zu kaufen, wäre nicht sinnvoll, weil diese dann aus fernen Ländern importiert werden müssen. Wer bewusst einkauft, schützt nicht nur die Umwelt, sondern spart langfristig auch Geld, weil er weniger verschwendet.",
    preguntas: [{enunciado: "Nachhaltige Lebensmittel sind immer günstiger als konventionelle Produkte.", respuesta: false}, {enunciado: "Ein Einkaufszettel hilft dabei, weniger Lebensmittel wegzuwerfen.", respuesta: true}, {enunciado: "In Unverpackt-Läden bringen die Kunden eigene Behälter mit.", respuesta: true}, {enunciado: "Die Zahl der Unverpackt-Läden sinkt in Deutschland.", respuesta: false}, {enunciado: "Saisonale Produkte zu kaufen gehört zum nachhaltigen Einkaufen.", respuesta: true}],
  },
  {
    slug: "digitales-lernen",
    nivel: "B1",
    titulo: "Digitales Lernen",
    descripcion: "Un texto sobre las ventajas y desventajas del aprendizaje digital en la educación moderna.",
    texto: "Seit der Pandemie hat sich das digitale Lernen in Deutschland stark verbreitet. Viele Schulen und Universitäten nutzen heute Online-Plattformen, obwohl nicht alle Schüler zu Hause einen eigenen Computer haben. Deshalb mussten einige Familien während des Lockdowns Geräte ausleihen, damit ihre Kinder am Unterricht teilnehmen konnten.\n\nDigitales Lernen bietet viele Vorteile. Die Schüler können in ihrem eigenen Tempo arbeiten und Lernvideos so oft anschauen, wie sie möchten. Außerdem sparen sie Zeit, weil sie nicht zur Schule fahren müssen. Wenn ein Schüler krank wäre, könnte er trotzdem von zu Hause aus lernen. Manche Experten sagen, das digitale Lernen hätte die Bildung revolutioniert.\n\nAllerdings gibt es auch Nachteile. Viele Schüler vermissen den persönlichen Kontakt zu ihren Mitschülern und Lehrern. Obwohl Videokonferenzen den direkten Austausch ermöglichen, ersetzen sie nicht das gemeinsame Lernen im Klassenzimmer. Trotzdem glauben viele Lehrer, dass eine Kombination aus digitalem und traditionellem Unterricht die beste Lösung wäre.\n\nDie Bundesregierung hat deshalb den Digitalpakt beschlossen, um Schulen mit moderner Technik auszustatten. Obwohl die Umsetzung langsam vorangeht, verbessert sich die digitale Infrastruktur an deutschen Schulen schrittweise. Es bleibt jedoch wichtig, dass alle Schüler gleichen Zugang zu digitalen Lernmitteln bekommen.",
    preguntas: [{enunciado: "Alle Schüler in Deutschland haben zu Hause einen eigenen Computer.", respuesta: false}, {enunciado: "Digitales Lernen ermöglicht es den Schülern, in ihrem eigenen Tempo zu arbeiten.", respuesta: true}, {enunciado: "Videokonferenzen können das gemeinsame Lernen im Klassenzimmer vollständig ersetzen.", respuesta: false}, {enunciado: "Die Bundesregierung hat den Digitalpakt für die technische Ausstattung der Schulen beschlossen.", respuesta: true}, {enunciado: "Die digitale Infrastruktur an deutschen Schulen verbessert sich nur sehr langsam.", respuesta: true}],
  },
  {
    slug: "nachbarschaftshilfe",
    nivel: "B1",
    titulo: "Nachbarschaftshilfe",
    descripcion: "Un texto sobre la importancia de la ayuda entre vecinos y las iniciativas comunitarias en Alemania.",
    texto: "In vielen deutschen Städten gibt es Initiativen für Nachbarschaftshilfe. Die Idee ist einfach: Nachbarn helfen einander im Alltag, obwohl sie sich manchmal kaum kennen. Manche Leute bringen älteren Menschen die Einkäufe nach Hause, während andere bei der Gartenarbeit oder bei kleinen Reparaturen helfen.\n\nBesonders während der Pandemie wurde die Nachbarschaftshilfe wichtiger denn je. Viele ältere Menschen konnten nicht mehr selbst einkaufen gehen, deshalb organisierten jüngere Nachbarn Einkaufsdienste für sie. Wenn es diese Hilfe nicht gegeben hätte, wären viele Senioren in einer schwierigen Lage gewesen. Die Erfahrung zeigte, dass Solidarität in Krisenzeiten besonders wertvoll ist.\n\nHeute nutzen viele Nachbarschaften digitale Plattformen, um sich zu vernetzen. Über Apps und soziale Medien können die Bewohner eines Viertels schnell miteinander kommunizieren. Obwohl manche Menschen skeptisch gegenüber solchen Plattformen sind, erleichtern sie die Organisation von gemeinsamen Aktivitäten erheblich. Trotzdem bevorzugen einige Nachbarn den persönlichen Kontakt.\n\nExperten betonen, dass eine gute Nachbarschaft die Lebensqualität deutlich verbessert. Menschen, die ihre Nachbarn kennen, fühlen sich sicherer und weniger einsam. Deshalb fördern viele Gemeinden aktiv Nachbarschaftsprojekte, damit das Zusammenleben in den Stadtvierteln harmonischer wird.",
    preguntas: [{enunciado: "Nachbarschaftshilfe funktioniert nur, wenn sich die Nachbarn gut kennen.", respuesta: false}, {enunciado: "Während der Pandemie organisierten jüngere Nachbarn Einkaufsdienste für ältere Menschen.", respuesta: true}, {enunciado: "Digitale Plattformen werden von allen Nachbarn begeistert genutzt.", respuesta: false}, {enunciado: "Eine gute Nachbarschaft verbessert die Lebensqualität der Bewohner.", respuesta: true}, {enunciado: "Viele Gemeinden fördern aktiv Nachbarschaftsprojekte.", respuesta: true}],
  },
  {
    slug: "urlaub-auf-dem-land",
    nivel: "B1",
    titulo: "Urlaub auf dem Land",
    descripcion: "Un texto sobre las vacaciones rurales en Alemania y por qué cada vez más personas eligen el campo como destino.",
    texto: "In den letzten Jahren ist der Urlaub auf dem Land in Deutschland immer beliebter geworden. Viele Familien entscheiden sich für einen Bauernhofurlaub, weil sie dem Stress der Stadt entfliehen möchten. Obwohl die Anreise manchmal länger dauert als zu einem Strandhotel, schätzen die Gäste die Ruhe und die frische Luft auf dem Land.\n\nBesonders Kinder genießen den Kontakt mit Tieren. Sie können Kühe melken, Hühner füttern und auf Pferden reiten. Wenn die Kinder in der Stadt aufgewachsen wären, hätten sie solche Erfahrungen normalerweise nicht. Deshalb empfehlen Pädagogen den Landurlaub als wertvolle Lernerfahrung für Stadtkinder. Außerdem lernen die Kinder, woher ihre Lebensmittel kommen.\n\nViele Bauernhöfe bieten heute moderne Unterkünfte mit allem Komfort an. Die Gäste übernachten in gemütlichen Ferienwohnungen, obwohl sie sich mitten in der Natur befinden. Trotzdem verzichten manche Urlauber bewusst auf Luxus, weil sie ein authentisches Landleben erleben möchten. Sie helfen bei der Ernte und kochen mit regionalen Produkten.\n\nDer Landtourismus bringt auch wirtschaftliche Vorteile für die ländlichen Regionen. Die Bauern verdienen durch den Tourismus zusätzliches Einkommen, deshalb können sie ihre Höfe besser erhalten. Experten sagen, dass der Agrotourismus eine wichtige Rolle für die Zukunft der Landwirtschaft spielen würde.",
    preguntas: [{enunciado: "Der Bauernhofurlaub wird in Deutschland immer unbeliebter.", respuesta: false}, {enunciado: "Kinder können auf einem Bauernhof den Kontakt mit Tieren genießen.", respuesta: true}, {enunciado: "Alle Bauernhöfe bieten nur einfache Unterkünfte ohne Komfort an.", respuesta: false}, {enunciado: "Der Landtourismus bringt wirtschaftliche Vorteile für ländliche Regionen.", respuesta: true}, {enunciado: "Pädagogen empfehlen den Landurlaub als Lernerfahrung für Stadtkinder.", respuesta: true}],
  },
  {
    slug: "berufswahl",
    nivel: "B1",
    titulo: "Berufswahl nach dem Abitur",
    descripcion: "Un texto sobre los desafíos que enfrentan los jóvenes alemanes al elegir una carrera después del bachillerato.",
    texto: "Nach dem Abitur stehen viele junge Menschen in Deutschland vor einer schwierigen Entscheidung: Sollen sie studieren oder eine Ausbildung machen? Obwohl ein Studium oft als der bessere Weg gilt, bietet eine Berufsausbildung ebenfalls hervorragende Karrierechancen. Deshalb raten Berufsberater den Jugendlichen, sich gründlich über beide Möglichkeiten zu informieren.\n\nViele Abiturienten wissen nicht genau, welchen Beruf sie ergreifen möchten. Wenn sie mehr Praktika während der Schulzeit gemacht hätten, wäre die Entscheidung vielleicht leichter gefallen. Trotzdem nutzen immer mehr Schulen die Möglichkeit, Berufsorientierungstage zu organisieren. Dabei können die Schüler verschiedene Berufsfelder kennenlernen und mit Fachleuten sprechen.\n\nEin duales Studium verbindet theoretisches Wissen mit praktischer Erfahrung im Betrieb. Obwohl dieses Modell anspruchsvoll ist, wird es bei Arbeitgebern sehr geschätzt. Die Studierenden verdienen bereits während des Studiums Geld, sodass sie finanziell unabhängiger sind. Außerdem haben sie nach dem Abschluss bessere Chancen auf dem Arbeitsmarkt.\n\nExperten empfehlen, dass junge Menschen sich nicht nur am Gehalt orientieren sollten. Es wäre besser, einen Beruf zu wählen, der den eigenen Interessen und Stärken entspricht. Wer seine Arbeit gern macht, ist langfristig zufriedener und erfolgreicher. Deshalb sollte die Berufswahl gut überlegt sein, damit man später nicht bereut.",
    preguntas: [{enunciado: "Eine Berufsausbildung bietet keine guten Karrierechancen.", respuesta: false}, {enunciado: "Praktika während der Schulzeit können die Berufswahl erleichtern.", respuesta: true}, {enunciado: "Ein duales Studium verbindet Theorie und Praxis.", respuesta: true}, {enunciado: "Experten empfehlen, sich bei der Berufswahl nur am Gehalt zu orientieren.", respuesta: false}, {enunciado: "Immer mehr Schulen organisieren Berufsorientierungstage.", respuesta: true}],
  },
  {
    slug: "der-podcast-trend",
    nivel: "B1",
    titulo: "Der Podcast-Trend",
    descripcion: "Un texto sobre la creciente popularidad de los podcasts en Alemania y cómo influyen en el consumo de medios.",
    texto: "Podcasts sind in Deutschland zu einem wichtigen Medium geworden. Millionen von Menschen hören regelmäßig Podcasts, obwohl das traditionelle Radio nach wie vor beliebt ist. Besonders jüngere Hörer bevorzugen Podcasts, weil sie die Themen selbst auswählen und die Sendungen jederzeit anhören können.\n\nDas Angebot an deutschsprachigen Podcasts ist in den letzten Jahren enorm gewachsen. Es gibt Sendungen zu fast jedem Thema: von Politik und Wissenschaft bis hin zu Kultur und Unterhaltung. Wenn jemand vor zehn Jahren gesagt hätte, dass Podcasts so populär werden würden, hätte man ihm wahrscheinlich nicht geglaubt. Deshalb sprechen Medienexperten von einer regelrechten Podcast-Revolution.\n\nViele Hörer schätzen an Podcasts, dass sie diese beim Kochen, Joggen oder auf dem Weg zur Arbeit hören können. Obwohl manche Sendungen mehrere Stunden dauern, finden die Hörer trotzdem die Zeit dafür, weil sie die Aufnahmen in ihrem eigenen Tempo konsumieren können. Außerdem sind die meisten Podcasts kostenlos verfügbar.\n\nAuch für die Bildung werden Podcasts immer wichtiger. Viele Lehrer empfehlen ihren Schülern bestimmte Podcasts als Ergänzung zum Unterricht. Experten sagen, dass Podcasts eine hervorragende Möglichkeit wären, um sich weiterzubilden. Trotzdem warnen Medienkritiker davor, Podcasts als einzige Informationsquelle zu nutzen, weil nicht alle Sendungen journalistischen Standards entsprechen.",
    preguntas: [{enunciado: "Das traditionelle Radio ist in Deutschland gar nicht mehr beliebt.", respuesta: false}, {enunciado: "Es gibt deutschsprachige Podcasts zu vielen verschiedenen Themen.", respuesta: true}, {enunciado: "Die meisten Podcasts sind kostenpflichtig.", respuesta: false}, {enunciado: "Manche Lehrer empfehlen Podcasts als Ergänzung zum Unterricht.", respuesta: true}, {enunciado: "Medienkritiker warnen davor, Podcasts als einzige Informationsquelle zu nutzen.", respuesta: true}],
  },
  {
    slug: "wohnen-in-der-grossstadt",
    nivel: "B1",
    titulo: "Wohnen in der Großstadt",
    descripcion: "Un texto sobre los desafíos de encontrar vivienda en las grandes ciudades alemanas y las posibles soluciones.",
    texto: "Die Wohnungssuche in deutschen Großstädten ist für viele Menschen zu einer großen Herausforderung geworden. In Städten wie München, Berlin und Hamburg steigen die Mieten seit Jahren kontinuierlich, obwohl die Politik verschiedene Maßnahmen dagegen ergriffen hat. Deshalb können sich viele Familien und Studierende das Wohnen in der Innenstadt nicht mehr leisten.\n\nWenn die Mieten weiter so stark steigen würden, müssten viele Menschen an den Stadtrand ziehen. Obwohl die Wohnungen dort günstiger sind, bedeutet das längere Pendelzeiten zur Arbeit. Trotzdem entscheiden sich immer mehr Familien für das Wohnen im Umland, weil sie dort größere Wohnungen zu niedrigeren Preisen finden.\n\nEinige Städte haben den Mietendeckel eingeführt, damit die Mieten nicht unbegrenzt steigen können. Allerdings ist dieses Instrument umstritten, weil Vermieter dann weniger in die Instandhaltung der Wohnungen investieren könnten. Manche Experten sagen, es wäre besser, mehr Sozialwohnungen zu bauen, anstatt die Mieten zu begrenzen.\n\nWohngemeinschaften sind besonders bei jungen Leuten eine beliebte Alternative. In einer WG teilen sich mehrere Bewohner eine große Wohnung und die Kosten. Obwohl das Zusammenleben manchmal schwierig sein kann, überwiegen für die meisten die Vorteile. Außerdem schätzen viele WG-Bewohner die Gesellschaft ihrer Mitbewohner, sodass sie sich weniger einsam fühlen.",
    preguntas: [{enunciado: "Die Mieten in deutschen Großstädten sinken seit Jahren.", respuesta: false}, {enunciado: "Viele Familien ziehen wegen der hohen Mieten an den Stadtrand.", respuesta: true}, {enunciado: "Der Mietendeckel ist ein unumstrittenes Instrument.", respuesta: false}, {enunciado: "Wohngemeinschaften sind bei jungen Leuten eine beliebte Alternative.", respuesta: true}, {enunciado: "Einige Experten empfehlen den Bau von mehr Sozialwohnungen.", respuesta: true}],
  },
  {
    slug: "elternzeit",
    nivel: "B1",
    titulo: "Elternzeit in Deutschland",
    descripcion: "Un texto sobre el permiso parental en Alemania y cómo afecta a las familias y al mundo laboral.",
    texto: "In Deutschland haben Eltern das Recht auf Elternzeit, um sich nach der Geburt eines Kindes um die Familie zu kümmern. Obwohl dieses Recht sowohl für Mütter als auch für Väter gilt, nehmen immer noch deutlich mehr Frauen die Elternzeit in Anspruch. Deshalb versucht die Regierung, auch Väter stärker zur Elternzeit zu ermutigen.\n\nDas Elterngeld unterstützt Familien während dieser Zeit finanziell. Eltern erhalten bis zu 67 Prozent ihres letzten Nettogehalts, damit sie sich voll auf die Betreuung ihres Kindes konzentrieren können. Wenn beide Elternteile Elternzeit nehmen würden, bekämen sie insgesamt mehr Elterngeld. Trotzdem entscheiden sich viele Väter dagegen, weil sie berufliche Nachteile befürchten.\n\nArbeitgeber sind gesetzlich verpflichtet, den Arbeitsplatz während der Elternzeit freizuhalten. Obwohl einige Unternehmen die Rückkehr der Eltern erschweren, gibt es auch viele fortschrittliche Betriebe, die flexible Arbeitsmodelle anbieten. Manche Arbeitgeber ermöglichen sogar Teilzeitarbeit während der Elternzeit, sodass die Eltern den Kontakt zum Berufsleben nicht verlieren.\n\nExperten sagen, dass eine gleichmäßige Aufteilung der Elternzeit zwischen Mutter und Vater die beste Lösung wäre. Wenn mehr Väter Elternzeit nähmen, würde sich auch die Gleichstellung am Arbeitsplatz verbessern. Außerdem profitieren die Kinder davon, wenn beide Elternteile sich intensiv um sie kümmern.",
    preguntas: [{enunciado: "Nur Mütter haben in Deutschland das Recht auf Elternzeit.", respuesta: false}, {enunciado: "Das Elterngeld beträgt bis zu 67 Prozent des letzten Nettogehalts.", respuesta: true}, {enunciado: "Viele Väter befürchten berufliche Nachteile durch die Elternzeit.", respuesta: true}, {enunciado: "Arbeitgeber dürfen den Arbeitsplatz während der Elternzeit kündigen.", respuesta: false}, {enunciado: "Experten empfehlen eine gleichmäßige Aufteilung der Elternzeit.", respuesta: true}],
  },
  {
    slug: "recycling-und-muelltrennung",
    nivel: "B1",
    titulo: "Recycling und Mülltrennung",
    descripcion: "Un texto sobre el sistema de reciclaje y separación de basura en Alemania y su importancia para el medio ambiente.",
    texto: "Deutschland gilt als Vorreiter beim Recycling in Europa. Die Mülltrennung gehört zum Alltag der meisten Deutschen, obwohl das System für Ausländer anfangs verwirrend sein kann. Es gibt verschiedene Tonnen für unterschiedliche Abfallarten: die gelbe Tonne für Verpackungen, die blaue für Papier, die braune für Bioabfall und die schwarze für Restmüll.\n\nDas Pfandsystem für Flaschen und Dosen ist ein weiterer wichtiger Bestandteil des deutschen Recyclings. Wenn man eine Flasche im Supermarkt zurückgibt, bekommt man den Pfandbetrag erstattet. Deshalb werden in Deutschland über 98 Prozent aller Pfandflaschen zurückgegeben. Manche Experten sagen, dieses System hätte einen großen Beitrag zur Reduzierung von Plastikmüll geleistet.\n\nTrotzdem gibt es noch Verbesserungspotenzial. Obwohl die Deutschen viel Müll trennen, wird nicht alles tatsächlich recycelt. Ein Teil des Plastikmülls wird verbrannt oder ins Ausland exportiert, anstatt wiederverwertet zu werden. Deshalb fordern Umweltschützer strengere Regeln für die Verpackungsindustrie, damit weniger Müll entsteht.\n\nViele Gemeinden bieten Informationsveranstaltungen an, bei denen die Bewohner lernen können, wie man richtig Müll trennt. Wenn alle Menschen ihren Abfall korrekt sortieren würden, könnte die Recyclingquote deutlich steigen. Außerdem wäre es wichtig, den Verbrauch insgesamt zu reduzieren, weil das beste Recycling immer noch die Müllvermeidung ist.",
    preguntas: [{enunciado: "Deutschland ist beim Recycling ein Vorreiter in Europa.", respuesta: true}, {enunciado: "Das Mülltrennsystem ist für Ausländer sofort verständlich.", respuesta: false}, {enunciado: "Über 98 Prozent der Pfandflaschen werden in Deutschland zurückgegeben.", respuesta: true}, {enunciado: "Aller getrennter Plastikmüll wird tatsächlich recycelt.", respuesta: false}, {enunciado: "Umweltschützer fordern strengere Regeln für die Verpackungsindustrie.", respuesta: true}],
  },
  {
    slug: "freiwilliges-soziales-jahr",
    nivel: "B1",
    titulo: "Freiwilliges Soziales Jahr",
    descripcion: "Un texto sobre el año social voluntario en Alemania y las experiencias que ofrece a los jóvenes.",
    texto: "Nach dem Schulabschluss entscheiden sich viele junge Deutsche für ein Freiwilliges Soziales Jahr, das auch als FSJ bekannt ist. Während dieses Jahres arbeiten die Freiwilligen in sozialen Einrichtungen wie Krankenhäusern, Kindergärten oder Pflegeheimen. Obwohl sie nur ein Taschengeld erhalten, sammeln sie wertvolle Berufserfahrung.\n\nDas FSJ hilft vielen Jugendlichen bei der Berufsorientierung. Wenn sie vorher nicht gewusst hätten, welchen Beruf sie ergreifen wollen, gibt ihnen das FSJ die Möglichkeit, verschiedene Berufsfelder kennenzulernen. Deshalb empfehlen Berufsberater das FSJ besonders denjenigen, die sich noch unsicher über ihre berufliche Zukunft sind. Außerdem entwickeln die Freiwilligen wichtige soziale Kompetenzen.\n\nTrotzdem gibt es auch kritische Stimmen. Manche Leute argumentieren, dass die Freiwilligen als billige Arbeitskräfte eingesetzt würden, obwohl sie eigentlich zusätzlich zum regulären Personal arbeiten sollten. Deshalb hat die Regierung klare Richtlinien erlassen, damit die Rechte der Freiwilligen geschützt werden.\n\nViele ehemalige FSJ-Teilnehmer berichten, dass das Jahr eine der wichtigsten Erfahrungen ihres Lebens gewesen sei. Sie hätten nicht nur beruflich, sondern auch persönlich davon profitiert. Wer die Möglichkeit hat, ein FSJ zu machen, sollte diese Chance nutzen, weil man so viel über sich selbst und über das Zusammenleben in der Gesellschaft lernt.",
    preguntas: [{enunciado: "Freiwillige im FSJ arbeiten nur in Krankenhäusern.", respuesta: false}, {enunciado: "Das FSJ hilft Jugendlichen bei der Berufsorientierung.", respuesta: true}, {enunciado: "Alle Stimmen zum FSJ sind positiv.", respuesta: false}, {enunciado: "Die Regierung hat Richtlinien zum Schutz der Freiwilligen erlassen.", respuesta: true}, {enunciado: "Viele ehemalige Teilnehmer bezeichnen das FSJ als wichtige Erfahrung.", respuesta: true}],
  },
  {
    slug: "haustiere-in-der-mietwohnung",
    nivel: "B1",
    titulo: "Haustiere in der Mietwohnung",
    descripcion: "Un texto sobre las normas y desafíos de tener mascotas en un piso de alquiler en Alemania.",
    texto: "Viele Deutsche wünschen sich ein Haustier, obwohl sie in einer Mietwohnung leben. Die Frage, ob man in einer Mietwohnung Tiere halten darf, führt immer wieder zu Konflikten zwischen Mietern und Vermietern. Deshalb ist es wichtig, die rechtlichen Grundlagen zu kennen, bevor man sich ein Haustier anschafft.\n\nGrundsätzlich dürfen Vermieter die Haltung von Kleintieren wie Fischen, Hamstern oder Wellensittichen nicht verbieten. Bei größeren Tieren wie Hunden oder Katzen sieht die Lage anders aus. Wenn ein Mieter einen Hund halten möchte, müsste er in vielen Fällen zuerst die Erlaubnis des Vermieters einholen. Trotzdem darf der Vermieter die Tierhaltung nicht ohne triftigen Grund ablehnen.\n\nObwohl Haustiere das Leben bereichern können, bringen sie in einer Mietwohnung auch Herausforderungen mit sich. Nachbarn beschweren sich manchmal über Lärm oder Gerüche, deshalb sollten Tierhalter besonders rücksichtsvoll sein. Außerdem müssen sie darauf achten, dass ihre Tiere keine Schäden in der Wohnung verursachen, weil sie sonst beim Auszug dafür haften.\n\nExperten empfehlen, dass Mieter vor der Anschaffung eines Haustieres mit ihrem Vermieter sprechen sollten, damit es später keine Probleme gibt. Es wäre auch sinnvoll, die Vereinbarung schriftlich festzuhalten. Wer sein Tier gut erzieht und auf die Nachbarn Rücksicht nimmt, wird in den meisten Fällen keine Schwierigkeiten haben.",
    preguntas: [{enunciado: "Vermieter können die Haltung von Kleintieren generell verbieten.", respuesta: false}, {enunciado: "Für größere Tiere braucht man oft die Erlaubnis des Vermieters.", respuesta: true}, {enunciado: "Nachbarn beschweren sich nie über Haustiere in Mietwohnungen.", respuesta: false}, {enunciado: "Tierhalter haften für Schäden, die ihre Tiere in der Wohnung verursachen.", respuesta: true}, {enunciado: "Experten empfehlen eine schriftliche Vereinbarung zur Tierhaltung.", respuesta: true}],
  },
  {
    slug: "pendeln-zur-arbeit",
    nivel: "B1",
    titulo: "Pendeln zur Arbeit",
    descripcion: "Un texto sobre los desplazamientos diarios al trabajo en Alemania y sus efectos en la calidad de vida.",
    texto: "Millionen von Menschen in Deutschland pendeln täglich zur Arbeit. Die durchschnittliche Pendelzeit beträgt etwa 30 Minuten pro Strecke, obwohl viele Berufstätige deutlich länger unterwegs sind. Deshalb verbringen einige Pendler mehrere Stunden am Tag im Auto oder in öffentlichen Verkehrsmitteln.\n\nDas Pendeln hat erhebliche Auswirkungen auf die Lebensqualität. Studien zeigen, dass Langstreckenpendler häufiger unter Stress und Schlafproblemen leiden als Menschen mit kurzem Arbeitsweg. Wenn die Unternehmen mehr Homeoffice-Möglichkeiten anbieten würden, könnten viele Pendler ihre Situation verbessern. Trotzdem lehnen manche Arbeitgeber flexibles Arbeiten ab, weil sie die Kontrolle über ihre Mitarbeiter behalten möchten.\n\nObwohl der eigene Wagen das beliebteste Verkehrsmittel für Pendler ist, nutzen immer mehr Menschen öffentliche Verkehrsmittel oder das Fahrrad. Das Deutschlandticket hat das Pendeln mit Bus und Bahn deutlich günstiger gemacht, sodass viele Berufstätige auf den öffentlichen Nahverkehr umgestiegen sind. Außerdem schonen sie damit die Umwelt.\n\nExperten empfehlen, die Pendelzeit sinnvoll zu nutzen, damit sie nicht als verlorene Zeit empfunden wird. Manche Pendler hören während der Fahrt Podcasts oder Hörbücher, während andere die Zeit zum Lesen verwenden. Es wäre ideal, wenn niemand mehr als 45 Minuten pro Strecke pendeln müsste, weil längere Pendelzeiten nachweislich die Gesundheit belasten.",
    preguntas: [{enunciado: "Die durchschnittliche Pendelzeit beträgt etwa eine Stunde pro Strecke.", respuesta: false}, {enunciado: "Langstreckenpendler leiden häufiger unter Stress und Schlafproblemen.", respuesta: true}, {enunciado: "Alle Arbeitgeber in Deutschland unterstützen flexibles Arbeiten.", respuesta: false}, {enunciado: "Das Deutschlandticket hat das Pendeln mit öffentlichen Verkehrsmitteln günstiger gemacht.", respuesta: true}, {enunciado: "Längere Pendelzeiten können die Gesundheit belasten.", respuesta: true}],
  },
  {
    slug: "second-hand-mode",
    nivel: "B1",
    titulo: "Second-Hand-Mode",
    descripcion: "Un texto sobre la tendencia de comprar ropa de segunda mano en Alemania y sus ventajas para el medio ambiente.",
    texto: "Second-Hand-Mode liegt in Deutschland voll im Trend. Immer mehr Menschen kaufen gebrauchte Kleidung, obwohl sie sich auch neue Sachen leisten könnten. Sie tun dies nicht nur aus finanziellen Gründen, sondern vor allem, weil sie die Umwelt schützen möchten. Deshalb boomen Secondhand-Läden und Online-Plattformen für gebrauchte Kleidung.\n\nDie Modeindustrie gehört zu den größten Umweltverschmutzern weltweit. Für die Herstellung eines einzigen T-Shirts werden etwa 2700 Liter Wasser benötigt. Wenn alle Menschen nur noch gebrauchte Kleidung kaufen würden, könnte man enorme Mengen an Ressourcen einsparen. Trotzdem ist es unrealistisch, komplett auf neue Kleidung zu verzichten, weil bestimmte Artikel wie Unterwäsche oder Schuhe meist neu gekauft werden.\n\nObwohl Secondhand-Kleidung früher als altmodisch galt, hat sich diese Wahrnehmung grundlegend geändert. Heute gilt es als modern und bewusst, gebrauchte Mode zu tragen. Außerdem finden viele Käufer in Secondhand-Läden einzigartige Stücke, die es in normalen Geschäften nicht mehr gibt. Manche sagen, sie hätten dort ihre liebsten Kleidungsstücke gefunden.\n\nAuch Tauschpartys werden immer beliebter. Bei diesen Veranstaltungen bringen die Teilnehmer Kleidung mit, die sie nicht mehr tragen, und tauschen sie gegen andere Stücke. Damit sparen sie Geld und reduzieren gleichzeitig den Textilmüll. Es wäre wünschenswert, wenn solche Initiativen in jeder Stadt angeboten würden.",
    preguntas: [{enunciado: "Second-Hand-Mode wird in Deutschland immer unbeliebter.", respuesta: false}, {enunciado: "Für die Herstellung eines T-Shirts werden etwa 2700 Liter Wasser benötigt.", respuesta: true}, {enunciado: "Secondhand-Kleidung gilt heute noch als altmodisch.", respuesta: false}, {enunciado: "Bei Tauschpartys tauschen die Teilnehmer Kleidung untereinander.", respuesta: true}, {enunciado: "Viele Menschen kaufen gebrauchte Kleidung, um die Umwelt zu schützen.", respuesta: true}],
  },
  {
    slug: "sportveranstaltungen",
    nivel: "B1",
    titulo: "Sportveranstaltungen",
    descripcion: "Un texto sobre los grandes eventos deportivos en Alemania y su impacto en la sociedad y la economía.",
    texto: "Deutschland ist ein beliebtes Gastgeberland für große Sportveranstaltungen. Die Fußball-Europameisterschaft 2024 hat gezeigt, dass solche Events die Menschen zusammenbringen können, obwohl sie normalerweise unterschiedliche Interessen haben. Deshalb sind Sportveranstaltungen nicht nur sportlich, sondern auch gesellschaftlich von großer Bedeutung.\n\nGroße Sportereignisse bringen erhebliche wirtschaftliche Vorteile mit sich. Hotels, Restaurants und Geschäfte profitieren von den vielen Besuchern, die während der Veranstaltungen in die Stadt kommen. Wenn Deutschland die Olympischen Spiele ausrichten würde, könnten die wirtschaftlichen Auswirkungen noch größer sein. Trotzdem sind solche Großereignisse auch mit hohen Kosten verbunden, weil neue Stadien und Infrastruktur gebaut werden müssen.\n\nObwohl die Begeisterung der Fans ansteckend ist, gibt es auch negative Seiten von Sportveranstaltungen. Anwohner beschweren sich manchmal über Lärm und Verkehrsprobleme, deshalb müssen die Veranstalter umfassende Sicherheits- und Verkehrskonzepte entwickeln. Außerdem sollten die Stadien nach der Veranstaltung weiter genutzt werden, damit sie nicht zu teuren Ruinen werden.\n\nExperten sagen, dass Sportveranstaltungen eine wichtige Rolle für den sozialen Zusammenhalt spielen würden. Sie ermöglichen es Menschen verschiedener Herkunft, gemeinsam zu feiern und sich verbunden zu fühlen. Es wäre schön, wenn dieser Gemeinschaftsgeist auch nach den Veranstaltungen bestehen bliebe, weil die Gesellschaft davon nachhaltig profitieren könnte.",
    preguntas: [{enunciado: "Die Fußball-EM 2024 fand nicht in Deutschland statt.", respuesta: false}, {enunciado: "Große Sportveranstaltungen bringen wirtschaftliche Vorteile für Hotels und Restaurants.", respuesta: true}, {enunciado: "Es gibt keine negativen Seiten von Sportveranstaltungen.", respuesta: false}, {enunciado: "Die Veranstalter müssen Sicherheits- und Verkehrskonzepte entwickeln.", respuesta: true}, {enunciado: "Sportveranstaltungen fördern den sozialen Zusammenhalt.", respuesta: true}],
  },
  {
    slug: "gartenarbeit-als-hobby",
    nivel: "B1",
    titulo: "Gartenarbeit als Hobby",
    descripcion: "Un texto sobre la jardinería como pasatiempo en Alemania y sus beneficios para la salud y el bienestar.",
    texto: "Gartenarbeit ist eines der beliebtesten Hobbys in Deutschland. Etwa 35 Millionen Deutsche besitzen einen Garten oder einen Schrebergarten, obwohl die Wartelisten für Kleingärten in vielen Städten lang sind. Deshalb müssen Interessierte manchmal mehrere Jahre warten, bis sie einen Garten bekommen.\n\nDie Arbeit im Garten hat viele positive Auswirkungen auf die Gesundheit. Studien haben gezeigt, dass regelmäßige Gartenarbeit Stress reduziert und die körperliche Fitness verbessert. Wenn man täglich eine Stunde im Garten arbeiten würde, hätte man schon ausreichend Bewegung. Trotzdem betrachten viele Menschen Gartenarbeit nicht als Sport, weil sie die körperliche Anstrengung unterschätzen.\n\nObwohl der traditionelle Schrebergarten nach wie vor populär ist, gibt es auch neue Formen des urbanen Gärtnerns. In sogenannten Gemeinschaftsgärten können Stadtbewohner gemeinsam Gemüse und Kräuter anbauen. Diese Projekte fördern nicht nur die Selbstversorgung, sondern auch den sozialen Zusammenhalt im Viertel. Außerdem lernen die Teilnehmer, woher ihre Lebensmittel kommen und wie viel Arbeit in der Produktion steckt.\n\nManche Experten sagen, dass Gartenarbeit eine therapeutische Wirkung hätte. Es wäre wünschenswert, wenn mehr Krankenhäuser und Pflegeheime therapeutische Gärten anlegen würden, damit die Patienten von der heilenden Kraft der Natur profitieren können. Wer keinen eigenen Garten hat, kann auch auf dem Balkon Kräuter und Tomaten ziehen.",
    preguntas: [{enunciado: "In Deutschland gibt es kurze Wartelisten für Kleingärten.", respuesta: false}, {enunciado: "Gartenarbeit kann Stress reduzieren und die Fitness verbessern.", respuesta: true}, {enunciado: "Alle Menschen betrachten Gartenarbeit als Sport.", respuesta: false}, {enunciado: "In Gemeinschaftsgärten können Stadtbewohner gemeinsam Gemüse anbauen.", respuesta: true}, {enunciado: "Gartenarbeit kann laut Experten eine therapeutische Wirkung haben.", respuesta: true}],
  },
  {
    slug: "bedingungsloses-grundeinkommen",
    nivel: "B2",
    titulo: "Bedingungsloses Grundeinkommen",
    descripcion: "Texto sobre el debate en torno a la introducción de una renta básica universal en Alemania y sus posibles consecuencias sociales y económicas.",
    texto: "In den vergangenen Jahren ist das bedingungslose Grundeinkommen zu einem der meistdiskutierten sozialpolitischen Konzepte geworden. Befürworter argumentieren, dass jedem Bürger ein monatlicher Betrag ausgezahlt werden sollte, unabhängig davon, ob er erwerbstätig ist oder nicht. Dadurch würde nicht nur die Existenzangst verringert, sondern auch die individuelle Freiheit gestärkt, da Menschen sich verstärkt ehrenamtlichen Tätigkeiten oder kreativen Projekten widmen könnten.\n\nKritiker hingegen befürchten, dass ein solches Modell den Anreiz zur Arbeit erheblich mindern würde, zumal die Finanzierung durch höhere Steuern oder Umverteilungen erfolgen müsste. Es wird darauf hingewiesen, dass bisherige Pilotprojekte in Finnland und Kanada nur bedingt aussagekräftige Ergebnisse geliefert hätten, da sie zeitlich begrenzt gewesen seien und somit keine langfristigen Verhaltensänderungen hätten messen können.\n\nDennoch zeigen Umfragen, dass ein wachsender Anteil der Bevölkerung dem Konzept aufgeschlossen gegenübersteht. Insbesondere jüngere Generationen sehen darin eine Antwort auf die zunehmende Automatisierung und Digitalisierung, durch die zahlreiche Arbeitsplätze wegfallen dürften. Sofern eine tragfähige Finanzierung gefunden würde, könnte das Grundeinkommen dazu beitragen, soziale Ungleichheit abzubauen und den gesellschaftlichen Zusammenhalt zu fördern.\n\nLetztlich bleibt die Frage offen, ob die politische Bereitschaft ausreicht, um ein derart weitreichendes Reformprojekt umzusetzen. Fest steht jedoch, dass die Debatte über das bedingungslose Grundeinkommen den Diskurs über Gerechtigkeit und Teilhabe nachhaltig verändert hat.",
    preguntas: [{enunciado: "Das bedingungslose Grundeinkommen soll nur an erwerbstätige Bürger ausgezahlt werden.", respuesta: false}, {enunciado: "Kritiker befürchten, dass die Motivation zur Arbeit sinken könnte.", respuesta: true}, {enunciado: "Die Pilotprojekte in Finnland und Kanada haben eindeutige Ergebnisse geliefert.", respuesta: false}, {enunciado: "Jüngere Generationen sehen im Grundeinkommen eine Lösung für die Folgen der Automatisierung.", respuesta: true}, {enunciado: "Die politische Bereitschaft für eine solche Reform ist bereits vollständig gegeben.", respuesta: false}],
  },
  {
    slug: "datenschutz",
    nivel: "B2",
    titulo: "Datenschutz im digitalen Zeitalter",
    descripcion: "Texto sobre los desafíos de la protección de datos personales en la era digital y el papel del Reglamento General de Protección de Datos europeo.",
    texto: "Seit der Einführung der Datenschutz-Grundverordnung im Jahr 2018 hat sich der Umgang mit persönlichen Daten in Europa grundlegend verändert. Unternehmen sind dazu verpflichtet worden, transparenter mit den Informationen ihrer Kunden umzugehen, indem sie deren ausdrückliche Zustimmung einholen müssen, bevor personenbezogene Daten verarbeitet werden dürfen.\n\nGleichzeitig wird jedoch kritisiert, dass viele Nutzer die langen Datenschutzerklärungen weder lesen noch verstehen würden. Anstatt sich eingehend mit den Bestimmungen auseinanderzusetzen, klickten die meisten Verbraucher reflexartig auf die Zustimmungstaste, ohne sich der Konsequenzen bewusst zu sein. Dies führe dazu, dass der eigentliche Schutzmechanismus weitgehend wirkungslos bleibe.\n\nDarüber hinaus stellt die rasante Entwicklung künstlicher Intelligenz den Datenschutz vor neue Herausforderungen. Algorithmen, die auf riesigen Datenmengen trainiert werden, könnten potenziell dazu genutzt werden, detaillierte Persönlichkeitsprofile zu erstellen, ohne dass die betroffenen Personen davon Kenntnis erlangen. Experten fordern daher, dass bestehende Regelungen an die technologischen Entwicklungen angepasst werden müssten.\n\nEs bleibt abzuwarten, ob die europäischen Institutionen in der Lage sein werden, einen angemessenen Rechtsrahmen zu schaffen, der sowohl Innovation ermöglicht als auch die Privatsphäre der Bürger wirksam schützt. Die Balance zwischen wirtschaftlichem Fortschritt und dem Schutz individueller Rechte wird eine der zentralen gesellschaftlichen Aufgaben der kommenden Jahrzehnte darstellen.",
    preguntas: [{enunciado: "Die Datenschutz-Grundverordnung wurde im Jahr 2020 eingeführt.", respuesta: false}, {enunciado: "Unternehmen müssen die ausdrückliche Zustimmung der Kunden einholen, bevor sie Daten verarbeiten.", respuesta: true}, {enunciado: "Die meisten Nutzer lesen die Datenschutzerklärungen sorgfältig durch.", respuesta: false}, {enunciado: "Künstliche Intelligenz könnte dazu genutzt werden, Persönlichkeitsprofile zu erstellen.", respuesta: true}, {enunciado: "Der bestehende Rechtsrahmen wird als ausreichend für die Zukunft betrachtet.", respuesta: false}],
  },
  {
    slug: "urbane-mobilitaet",
    nivel: "B2",
    titulo: "Urbane Mobilität der Zukunft",
    descripcion: "Texto sobre las transformaciones en la movilidad urbana y las alternativas sostenibles al transporte privado en las ciudades alemanas.",
    texto: "Die Art und Weise, wie sich Menschen in Großstädten fortbewegen, befindet sich im Wandel. Während das private Automobil jahrzehntelang als Symbol individueller Freiheit galt, wird es zunehmend als Belastung für die städtische Lebensqualität wahrgenommen. Staus, Lärm und Abgase haben dazu geführt, dass immer mehr Kommunen nach alternativen Verkehrskonzepten suchen.\n\nInzwischen setzen zahlreiche Städte auf den Ausbau des öffentlichen Nahverkehrs sowie auf die Förderung des Radverkehrs. In Kopenhagen und Amsterdam wird bereits vorgemacht, wie eine fahrradfreundliche Infrastruktur aussehen kann, wobei breite Radwege und sichere Abstellmöglichkeiten den Umstieg erleichtern. Deutsche Städte hingegen hinken bei der Umsetzung solcher Konzepte häufig noch hinterher.\n\nZusätzlich gewinnen sogenannte Sharing-Modelle an Bedeutung. Carsharing-Dienste und E-Scooter-Verleiher versprechen, den individuellen Autobesitz überflüssig zu machen, sofern die Angebote flächendeckend und zuverlässig bereitgestellt werden. Kritiker wenden jedoch ein, dass diese Dienste vor allem in Innenstadtlagen verfügbar seien und somit die Bewohner der Außenbezirke weiterhin auf das eigene Auto angewiesen blieben.\n\nUm eine echte Verkehrswende zu erreichen, müssten verschiedene Maßnahmen miteinander verknüpft werden: ein attraktiver öffentlicher Nahverkehr, sichere Fahrradwege, durchdachte Stadtplanung und eine Reduzierung des motorisierten Individualverkehrs. Nur durch ein solches Zusammenspiel könne die urbane Mobilität langfristig nachhaltiger gestaltet werden.",
    preguntas: [{enunciado: "Das private Auto wird zunehmend als Bereicherung für die Lebensqualität in Städten angesehen.", respuesta: false}, {enunciado: "Kopenhagen und Amsterdam gelten als Vorbilder für fahrradfreundliche Infrastruktur.", respuesta: true}, {enunciado: "Deutsche Städte sind Vorreiter bei der Umsetzung alternativer Verkehrskonzepte.", respuesta: false}, {enunciado: "Sharing-Modelle könnten den individuellen Autobesitz überflüssig machen.", respuesta: true}, {enunciado: "Für eine echte Verkehrswende reicht allein der Ausbau des öffentlichen Nahverkehrs aus.", respuesta: false}],
  },
  {
    slug: "gender-pay-gap",
    nivel: "B2",
    titulo: "Gender Pay Gap",
    descripcion: "Texto sobre la brecha salarial entre hombres y mujeres en Alemania, sus causas estructurales y las medidas propuestas para reducirla.",
    texto: "Trotz jahrzehntelanger Gleichstellungsbemühungen verdienen Frauen in Deutschland im Durchschnitt immer noch rund 18 Prozent weniger als ihre männlichen Kollegen. Dieser sogenannte Gender Pay Gap wird von Fachleuten sowohl auf strukturelle als auch auf individuelle Faktoren zurückgeführt. Zu den strukturellen Ursachen zählen unter anderem die ungleiche Verteilung von Erwerbs- und Sorgearbeit sowie die Tatsache, dass typisch weibliche Berufe häufig schlechter entlohnt werden.\n\nEs wird darauf hingewiesen, dass Frauen überproportional häufig in Teilzeit arbeiten, da sie nach wie vor den Großteil der Kinderbetreuung und der häuslichen Pflege übernehmen würden. Indem gesellschaftliche Rollenbilder hinterfragt und eine gleichmäßigere Aufteilung der Sorgearbeit angestrebt werde, könne dieser Faktor langfristig abgeschwächt werden.\n\nDarüber hinaus spielen Gehaltsverhandlungen eine bedeutende Rolle. Studien haben gezeigt, dass Frauen seltener als Männer aktiv eine Gehaltserhöhung fordern würden, was teilweise auf sozialisationsbedingte Zurückhaltung zurückgeführt werde. Transparente Gehaltsstrukturen, wie sie durch das Entgelttransparenzgesetz von 2017 angestoßen wurden, könnten dazu beitragen, diese Asymmetrie abzubauen.\n\nLetztlich erfordert die Schließung des Gender Pay Gaps ein Zusammenwirken von Politik, Wirtschaft und Gesellschaft. Ohne tiefgreifende kulturelle Veränderungen dürfte es schwierig bleiben, die bestehende Lohnlücke vollständig zu überwinden, selbst wenn weitere gesetzliche Maßnahmen ergriffen werden sollten.",
    preguntas: [{enunciado: "Frauen verdienen in Deutschland durchschnittlich etwa 18 Prozent weniger als Männer.", respuesta: true}, {enunciado: "Der Gender Pay Gap hat ausschließlich individuelle Ursachen.", respuesta: false}, {enunciado: "Frauen arbeiten häufiger in Teilzeit als Männer.", respuesta: true}, {enunciado: "Das Entgelttransparenzgesetz wurde im Jahr 2019 verabschiedet.", respuesta: false}, {enunciado: "Kulturelle Veränderungen werden als notwendig für die Schließung der Lohnlücke angesehen.", respuesta: true}],
  },
  {
    slug: "fake-news",
    nivel: "B2",
    titulo: "Fake News und Medienkompetenz",
    descripcion: "Texto sobre la propagación de noticias falsas en redes sociales y la importancia de la competencia mediática en la sociedad democrática.",
    texto: "Die Verbreitung von Falschinformationen in sozialen Netzwerken hat sich in den vergangenen Jahren zu einer ernsthaften Bedrohung für demokratische Gesellschaften entwickelt. Sogenannte Fake News werden gezielt eingesetzt, um die öffentliche Meinung zu manipulieren und das Vertrauen in seriöse Medien zu untergraben. Besonders in Krisenzeiten, wie etwa während der Corona-Pandemie, konnte beobachtet werden, dass sich Verschwörungstheorien in rasanter Geschwindigkeit verbreiteten.\n\nExperten betonen, dass die Algorithmen sozialer Medien dieses Problem verschärfen würden, da sie Inhalte bevorzugt anzeigten, die starke emotionale Reaktionen hervorrufen. Dadurch entstehe eine sogenannte Filterblase, in der Nutzer vorwiegend mit Informationen konfrontiert würden, die ihre bestehenden Überzeugungen bestätigten. Ein sachlicher Austausch unterschiedlicher Standpunkte werde somit zunehmend erschwert.\n\nAngesichts dieser Entwicklung wird die Förderung von Medienkompetenz als zentrale Bildungsaufgabe betrachtet. Bereits in der Schule sollten Kinder und Jugendliche lernen, Quellen kritisch zu hinterfragen, anstatt Informationen ungeprüft zu übernehmen. Darüber hinaus seien auch Erwachsene dazu aufgefordert, ihre eigene Mediennutzung regelmäßig zu reflektieren.\n\nOb gesetzliche Regulierungen, wie etwa das Netzwerkdurchsetzungsgesetz, ausreichen, um die Flut an Falschinformationen einzudämmen, bleibt umstritten. Klar ist jedoch, dass eine Kombination aus technischen Maßnahmen, Bildungsinitiativen und eigenverantwortlichem Handeln erforderlich ist, um die Integrität des öffentlichen Diskurses zu bewahren.",
    preguntas: [{enunciado: "Fake News stellen eine Bedrohung für demokratische Gesellschaften dar.", respuesta: true}, {enunciado: "Algorithmen sozialer Medien tragen dazu bei, das Problem der Falschinformationen zu verringern.", respuesta: false}, {enunciado: "In der sogenannten Filterblase werden Nutzer mit verschiedenen Standpunkten konfrontiert.", respuesta: false}, {enunciado: "Medienkompetenz sollte bereits in der Schule gefördert werden.", respuesta: true}, {enunciado: "Das Netzwerkdurchsetzungsgesetz gilt als unbestritten wirksame Lösung gegen Fake News.", respuesta: false}],
  },
  {
    slug: "integration-durch-sport",
    nivel: "B2",
    titulo: "Integration durch Sport",
    descripcion: "Texto sobre el papel del deporte como instrumento de integración social y cultural para personas con trasfondo migratorio en Alemania.",
    texto: "Sport wird häufig als universelle Sprache bezeichnet, die Menschen unabhängig von ihrer Herkunft, Religion oder sozialen Stellung zusammenbringt. In Deutschland spielen Sportvereine eine besonders wichtige Rolle bei der Integration von Menschen mit Migrationshintergrund, da sie Begegnungsräume schaffen, in denen kulturelle Unterschiede in den Hintergrund treten und gemeinsame Ziele verfolgt werden.\n\nZahlreiche Studien haben belegt, dass regelmäßige sportliche Aktivitäten den Spracherwerb fördern und das Zugehörigkeitsgefühl stärken können. Durch die Teilnahme an Mannschaftssportarten würden soziale Kontakte geknüpft, die über den Sportplatz hinaus Bestand hätten. Zudem lernten die Teilnehmenden, sich an gemeinsame Regeln zu halten und Konflikte konstruktiv zu lösen.\n\nDennoch darf nicht übersehen werden, dass Sportvereine vor erheblichen Herausforderungen stehen. Sprachbarrieren, finanzielle Hürden und fehlende Informationen über bestehende Angebote verhinderten in vielen Fällen eine gleichberechtigte Teilhabe. Insbesondere Frauen und Mädchen mit Migrationshintergrund seien in Vereinen nach wie vor stark unterrepräsentiert, was unter anderem auf kulturelle Vorbehalte zurückzuführen sei.\n\nUm das integrative Potenzial des Sports voll auszuschöpfen, bedarf es gezielter Maßnahmen: niedrigschwellige Angebote, mehrsprachige Informationsmaterialien sowie die Ausbildung interkulturell kompetenter Trainerinnen und Trainer. Sofern diese Rahmenbedingungen geschaffen würden, könnte der Sport einen noch wirkungsvolleren Beitrag zur gesellschaftlichen Integration leisten.",
    preguntas: [{enunciado: "Sportvereine spielen in Deutschland eine wichtige Rolle bei der Integration.", respuesta: true}, {enunciado: "Sportliche Aktivitäten haben keinen Einfluss auf den Spracherwerb.", respuesta: false}, {enunciado: "Frauen mit Migrationshintergrund sind in Sportvereinen gut repräsentiert.", respuesta: false}, {enunciado: "Finanzielle Hürden können die Teilhabe am Vereinssport erschweren.", respuesta: true}, {enunciado: "Es werden niedrigschwellige Angebote und mehrsprachige Materialien gefordert.", respuesta: true}],
  },
  {
    slug: "lebensmittelverschwendung",
    nivel: "B2",
    titulo: "Lebensmittelverschwendung",
    descripcion: "Texto sobre el desperdicio de alimentos en Alemania, sus causas a lo largo de la cadena de producción y las iniciativas para combatirlo.",
    texto: "In Deutschland werden jährlich rund zwölf Millionen Tonnen Lebensmittel weggeworfen, was nicht nur ökologisch bedenklich ist, sondern auch ethisch fragwürdig erscheint, zumal weltweit Hunderte Millionen Menschen an Hunger leiden. Die Verschwendung erstreckt sich über die gesamte Wertschöpfungskette – von der landwirtschaftlichen Produktion über den Handel bis hin zum Endverbraucher.\n\nEin erheblicher Teil der Verluste entsteht bereits auf dem Feld, da Obst und Gemüse, das den ästhetischen Normen des Handels nicht entspricht, aussortiert wird. Krumme Gurken oder unförmige Kartoffeln finden häufig keinen Abnehmer, obwohl sie geschmacklich einwandfrei wären. Initiativen wie „Zu gut für die Tonne“ oder diverse Foodsharing-Plattformen setzen sich dafür ein, dass solche Produkte dennoch genutzt werden.\n\nAuch auf der Ebene der privaten Haushalte besteht erhebliches Einsparpotenzial. Studien zufolge werden pro Person und Jahr etwa 75 Kilogramm Lebensmittel entsorgt, wobei ein Großteil davon zum Zeitpunkt der Entsorgung noch genießbar gewesen wäre. Mangelnde Planung beim Einkauf, Fehlinterpretation des Mindesthaltbarkeitsdatums und zu große Portionsgrößen gelten als Hauptursachen.\n\nExperten fordern neben einer besseren Verbraucheraufklärung auch verbindliche Maßnahmen seitens der Politik, etwa ein Verbot für Supermärkte, noch genießbare Lebensmittel zu entsorgen, wie es in Frankreich bereits seit 2016 umgesetzt wird. Ohne ein Zusammenwirken aller Beteiligten dürfte eine spürbare Reduzierung der Lebensmittelverschwendung kaum zu erreichen sein.",
    preguntas: [{enunciado: "In Deutschland werden jährlich rund zwölf Millionen Tonnen Lebensmittel verschwendet.", respuesta: true}, {enunciado: "Die Lebensmittelverschwendung betrifft ausschließlich die Endverbraucher.", respuesta: false}, {enunciado: "Krummes Gemüse wird häufig aussortiert, obwohl es noch genießbar ist.", respuesta: true}, {enunciado: "In Frankreich gibt es bereits ein Verbot für Supermärkte, genießbare Lebensmittel zu entsorgen.", respuesta: true}, {enunciado: "Das Mindesthaltbarkeitsdatum spielt bei der Lebensmittelverschwendung keine Rolle.", respuesta: false}],
  },
  {
    slug: "burnout",
    nivel: "B2",
    titulo: "Burnout in der Arbeitswelt",
    descripcion: "Texto sobre el síndrome de burnout en el mundo laboral moderno, sus causas y las medidas de prevención en las empresas alemanas.",
    texto: "Das Burnout-Syndrom hat sich in den vergangenen Jahrzehnten von einem kaum beachteten Phänomen zu einer weit verbreiteten Diagnose entwickelt. Laut einer Erhebung der Techniker Krankenkasse fühlt sich mehr als jeder dritte Beschäftigte in Deutschland dauerhaft erschöpft und überfordert. Die Weltgesundheitsorganisation hat Burnout inzwischen als eigenständiges Krankheitsbild anerkannt, das durch chronischen Stress am Arbeitsplatz verursacht werde.\n\nAls Hauptursachen werden die zunehmende Arbeitsverdichtung, ständige Erreichbarkeit durch digitale Kommunikationsmittel und der wachsende Leistungsdruck genannt. Insbesondere in Berufen, in denen ein hohes Maß an emotionaler Beteiligung gefordert wird, etwa in der Pflege oder im Bildungswesen, sei das Risiko überdurchschnittlich hoch. Hinzu komme, dass die Grenzen zwischen Berufs- und Privatleben zunehmend verschwimmen würden.\n\nUnternehmen sind daher aufgefordert, präventive Maßnahmen zu ergreifen. Flexible Arbeitszeitmodelle, klare Regelungen zur Erreichbarkeit außerhalb der Arbeitszeit sowie betriebliche Gesundheitsprogramme könnten dazu beitragen, das Risiko eines Burnouts deutlich zu reduzieren. Allerdings wird betont, dass strukturelle Veränderungen allein nicht ausreichen würden, sofern nicht gleichzeitig eine offene Unternehmenskultur geschaffen werde, in der psychische Belastungen offen angesprochen werden könnten.\n\nLetztlich tragen auch die Betroffenen selbst eine gewisse Verantwortung, indem sie lernen, eigene Grenzen zu erkennen und rechtzeitig Unterstützung zu suchen. Prävention und Früherkennung gelten als Schlüssel, um dem Burnout-Syndrom wirksam entgegenzuwirken.",
    preguntas: [{enunciado: "Mehr als jeder dritte Beschäftigte in Deutschland fühlt sich dauerhaft erschöpft.", respuesta: true}, {enunciado: "Die Weltgesundheitsorganisation hat Burnout nicht als Krankheitsbild anerkannt.", respuesta: false}, {enunciado: "Pflegeberufe haben ein überdurchschnittlich hohes Burnout-Risiko.", respuesta: true}, {enunciado: "Strukturelle Veränderungen in Unternehmen reichen allein aus, um Burnout zu verhindern.", respuesta: false}, {enunciado: "Betroffene sollten lernen, eigene Grenzen zu erkennen und Hilfe zu suchen.", respuesta: true}],
  },
  {
    slug: "kulturelle-aneignung",
    nivel: "B2",
    titulo: "Kulturelle Aneignung",
    descripcion: "Texto sobre el debate en torno a la apropiación cultural, sus límites frente al intercambio cultural y las perspectivas de los grupos afectados.",
    texto: "Die Debatte über kulturelle Aneignung hat in den vergangenen Jahren erheblich an Intensität gewonnen. Unter kultureller Aneignung wird verstanden, dass Angehörige einer dominanten Kultur Elemente einer marginalisierten Kultur übernehmen, ohne deren historischen Kontext oder Bedeutung zu berücksichtigen. Besonders kontrovers diskutiert wird dies im Bereich der Mode, Musik und Kulinarik.\n\nBefürworter einer strengeren Abgrenzung argumentieren, dass die unbekümmerte Übernahme kultureller Symbole die Erfahrungen marginalisierter Gruppen trivialisiere und bestehende Machtverhältnisse verfestige. Wenn beispielsweise traditioneller Kopfschmuck indigener Völker als modisches Accessoire getragen werde, ohne die damit verbundene spirituelle Bedeutung zu würdigen, stelle dies eine Form der Respektlosigkeit dar.\n\nKritiker dieses Standpunkts wenden hingegen ein, dass kultureller Austausch seit jeher ein wesentlicher Motor gesellschaftlicher Entwicklung gewesen sei. Kulturen hätten sich stets gegenseitig beeinflusst, und eine zu rigide Abgrenzung führe letztlich zu kultureller Verarmung. Entscheidend sei nicht die Übernahme an sich, sondern die Art und Weise, wie sie vollzogen werde – nämlich ob mit Respekt und Wertschätzung oder lediglich als oberflächliche Aneignung.\n\nUm einen konstruktiven Dialog zu ermöglichen, schlagen Fachleute vor, die Stimmen der betroffenen Gemeinschaften stärker einzubeziehen, anstatt über deren Köpfe hinweg zu entscheiden. Nur so könne ein respektvoller Umgang mit kultureller Vielfalt gewährleistet werden, der weder in Abschottung noch in unreflektierter Aneignung münde.",
    preguntas: [{enunciado: "Kulturelle Aneignung betrifft ausschließlich den Bereich der Musik.", respuesta: false}, {enunciado: "Kritiker der Debatte sehen kulturellen Austausch als Motor gesellschaftlicher Entwicklung.", respuesta: true}, {enunciado: "Die Verwendung indigenen Kopfschmucks als Modeaccessoire wird als unproblematisch betrachtet.", respuesta: false}, {enunciado: "Fachleute fordern, die Stimmen betroffener Gemeinschaften stärker einzubeziehen.", respuesta: true}, {enunciado: "Eine zu strenge Abgrenzung könnte zu kultureller Verarmung führen.", respuesta: true}],
  },
  {
    slug: "recht-auf-reparatur",
    nivel: "B2",
    titulo: "Recht auf Reparatur",
    descripcion: "Texto sobre el derecho a la reparación de productos electrónicos, la obsolescencia programada y las iniciativas legislativas europeas al respecto.",
    texto: "In einer Gesellschaft, in der elektronische Geräte immer schneller veralten, gewinnt das sogenannte Recht auf Reparatur zunehmend an Bedeutung. Verbraucherorganisationen fordern, dass Hersteller dazu verpflichtet werden, Ersatzteile über einen angemessenen Zeitraum bereitzustellen und die Reparierbarkeit ihrer Produkte von vornherein mitzudenken. Bislang sei es häufig günstiger, ein defektes Gerät durch ein neues zu ersetzen, anstatt es reparieren zu lassen.\n\nDiese Wegwerfmentalität wird maßgeblich durch die sogenannte geplante Obsoleszenz befördert, bei der Produkte bewusst so konstruiert werden, dass sie nach einer bestimmten Nutzungsdauer ausfallen. Obwohl dieser Vorwurf von vielen Herstellern bestritten wird, sprechen zahlreiche Indizien dafür, dass etwa fest verbaute Akkus oder verklebte Gehäuse die Lebensdauer von Geräten künstlich verkürzen.\n\nDie Europäische Union hat auf diese Problematik reagiert und im Rahmen des Green Deals Richtlinien verabschiedet, die Hersteller zu mehr Transparenz und Reparierbarkeit verpflichten sollen. Durch standardisierte Reparatur-Indices sollen Verbraucher bereits beim Kauf erkennen können, wie leicht sich ein Produkt reparieren lässt. Frankreich hat ein solches System bereits eingeführt und damit einen Vorreitereffekt erzielt.\n\nLangfristig könnte das Recht auf Reparatur nicht nur den Ressourcenverbrauch senken, sondern auch neue wirtschaftliche Perspektiven eröffnen. Lokale Reparaturwerkstätten und Repair-Cafés, die ehrenamtlich betrieben werden, zeigen bereits heute, dass eine Kultur der Reparatur sowohl ökologisch als auch gesellschaftlich wertvoll sein kann.",
    preguntas: [{enunciado: "Es ist derzeit oft günstiger, ein defektes Gerät zu ersetzen als es reparieren zu lassen.", respuesta: true}, {enunciado: "Alle Hersteller geben zu, geplante Obsoleszenz einzusetzen.", respuesta: false}, {enunciado: "Die EU hat im Rahmen des Green Deals Richtlinien zur Reparierbarkeit verabschiedet.", respuesta: true}, {enunciado: "Frankreich hat als erstes Land einen Reparatur-Index eingeführt.", respuesta: true}, {enunciado: "Repair-Cafés arbeiten in der Regel gewinnorientiert.", respuesta: false}],
  },
  {
    slug: "anonymitaet-im-internet",
    nivel: "B2",
    titulo: "Anonymität im Internet",
    descripcion: "Texto sobre el debate en torno al anonimato en internet, su papel en la libertad de expresión y los riesgos de los discursos de odio en línea.",
    texto: "Die Frage, ob Anonymität im Internet ein schützenswertes Gut oder eine Quelle zunehmender Verrohung des öffentlichen Diskurses darstellt, wird in Deutschland kontrovers diskutiert. Einerseits ermöglicht die anonyme Kommunikation es Whistleblowern, politischen Dissidenten und Opfern von Gewalt, ihre Erfahrungen zu teilen, ohne persönliche Konsequenzen befürchten zu müssen. Andererseits wird die Anonymität häufig als Deckmantel für Hassrede, Cybermobbing und die Verbreitung strafrechtlich relevanter Inhalte missbraucht.\n\nBefürworter einer Klarnamenpflicht argumentieren, dass die Hemmschwelle für beleidigende und hetzerische Äußerungen sinke, sobald Nutzer sich hinter Pseudonymen verbergen könnten. Indem eine Identifizierungspflicht eingeführt werde, ließen sich die Verantwortlichen solcher Äußerungen leichter zur Rechenschaft ziehen. Dies stärke den gesellschaftlichen Zusammenhalt und fördere eine zivilisiertere Debattenkultur.\n\nGegner einer solchen Pflicht warnen jedoch davor, dass eine Klarnamenpflicht die Meinungsfreiheit einschränken und vulnerable Gruppen gefährden würde. Personen, die etwa über psychische Erkrankungen oder politisch sensible Themen berichten wollten, könnten davon abgehalten werden, sich überhaupt zu äußern. Zudem sei eine technische Umsetzung ohne erhebliche Eingriffe in die Privatsphäre kaum realisierbar.\n\nStatt einer pauschalen Klarnamenpflicht plädieren viele Experten für eine Kombination aus besserer Strafverfolgung im digitalen Raum und einer Stärkung der Plattformverantwortung. Die Betreiber sozialer Netzwerke müssten stärker in die Pflicht genommen werden, strafrechtlich relevante Inhalte zeitnah zu entfernen, ohne dabei die Anonymität unbescholtener Nutzer zu gefährden.",
    preguntas: [{enunciado: "Anonymität im Internet wird in Deutschland einheitlich als positiv bewertet.", respuesta: false}, {enunciado: "Whistleblower profitieren von der Möglichkeit anonymer Kommunikation.", respuesta: true}, {enunciado: "Eine Klarnamenpflicht würde nach Meinung von Gegnern die Meinungsfreiheit stärken.", respuesta: false}, {enunciado: "Viele Experten fordern eine bessere Strafverfolgung im digitalen Raum.", respuesta: true}, {enunciado: "Betreiber sozialer Netzwerke sollen stärker zur Entfernung strafbarer Inhalte verpflichtet werden.", respuesta: true}],
  },
  {
    slug: "inklusion-in-der-schule",
    nivel: "B2",
    titulo: "Inklusion in der Schule",
    descripcion: "Texto sobre la inclusión de alumnos con necesidades especiales en las escuelas regulares alemanas, los desafíos y los avances logrados.",
    texto: "Seit der Ratifizierung der UN-Behindertenrechtskonvention im Jahr 2009 ist Deutschland dazu verpflichtet, ein inklusives Bildungssystem zu schaffen, in dem Kinder mit und ohne Behinderung gemeinsam unterrichtet werden. Die Umsetzung dieses Anspruchs gestaltet sich jedoch äußerst unterschiedlich, da Bildungspolitik in der Zuständigkeit der einzelnen Bundesländer liegt und somit keine einheitlichen Standards existieren.\n\nBefürworter der Inklusion betonen, dass gemeinsames Lernen nicht nur den Kindern mit Förderbedarf zugutekomme, sondern allen Beteiligten. Durch den täglichen Umgang miteinander würden Vorurteile abgebaut und soziale Kompetenzen gestärkt. Darüber hinaus zeigten Studien, dass inklusiv beschulte Kinder vergleichbare oder sogar bessere Lernfortschritte erzielten als solche in separaten Förderschulen.\n\nKritiker wenden hingegen ein, dass die Rahmenbedingungen an vielen Regelschulen bei Weitem nicht ausreichten, um echte Inklusion zu gewährleisten. Es mangele an sonderpädagogisch ausgebildetem Personal, barrierefreien Gebäuden und geeigneten Unterrichtsmaterialien. Lehrkräfte fühlten sich häufig überfordert und allein gelassen, was letztlich zulasten aller Schülerinnen und Schüler gehe.\n\nDamit Inklusion gelingen kann, bedarf es einer umfassenden Investition in Infrastruktur, Ausbildung und Begleitung. Sofern die notwendigen Ressourcen bereitgestellt würden und die pädagogischen Konzepte konsequent weiterentwickelt werden, könnte das Ziel eines inklusiven Bildungssystems langfristig erreicht werden. Ohne politischen Willen und gesellschaftliche Unterstützung bleibe es jedoch ein unerreichtes Ideal.",
    preguntas: [{enunciado: "Deutschland hat die UN-Behindertenrechtskonvention im Jahr 2009 ratifiziert.", respuesta: true}, {enunciado: "Die Bildungspolitik wird in Deutschland zentral vom Bund gesteuert.", respuesta: false}, {enunciado: "Inklusiv beschulte Kinder erzielen laut Studien schlechtere Lernfortschritte.", respuesta: false}, {enunciado: "An vielen Regelschulen mangelt es an sonderpädagogischem Personal.", respuesta: true}, {enunciado: "Inklusion kann ohne zusätzliche Investitionen erfolgreich umgesetzt werden.", respuesta: false}],
  },
  {
    slug: "gentechnik",
    nivel: "B2",
    titulo: "Gentechnik in der Landwirtschaft",
    descripcion: "Texto sobre el uso de la ingeniería genética en la agricultura, los riesgos y beneficios potenciales y la regulación europea al respecto.",
    texto: "Der Einsatz von Gentechnik in der Landwirtschaft zählt zu den umstrittensten Themen der modernen Agrarwissenschaft. Während Befürworter auf die Möglichkeit verweisen, durch genetisch veränderte Organismen den Ernteertrag zu steigern und Pflanzen widerstandsfähiger gegen Schädlinge und Trockenheit zu machen, warnen Kritiker vor unkalkulierbaren Risiken für Umwelt und Gesundheit.\n\nIn der Europäischen Union gelten strenge Vorschriften für den Anbau und die Vermarktung gentechnisch veränderter Produkte. Jeder neue Organismus muss ein umfassendes Zulassungsverfahren durchlaufen, bevor er auf den Markt gebracht werden darf. Dennoch wird die europäische Haltung von vielen Wissenschaftlern als zu restriktiv empfunden, zumal andere Länder wie die USA oder Brasilien gentechnisch veränderte Nutzpflanzen in großem Umfang anbauen.\n\nMit der Entwicklung neuer Verfahren wie der Genschere CRISPR-Cas9 hat die Debatte eine zusätzliche Dimension erhalten. Diese Technologie ermöglicht es, gezielt einzelne Gene zu verändern, ohne artfremde DNA einzuführen, weshalb einige Experten argumentieren, dass solche Eingriffe mit klassischer Züchtung vergleichbar seien und daher weniger streng reguliert werden sollten.\n\nLetztlich steht die Gesellschaft vor der Herausforderung, zwischen dem Potenzial innovativer Technologien und dem Vorsorgeprinzip abzuwägen. Eine sachliche, evidenzbasierte Diskussion erscheint unerlässlich, damit tragfähige Entscheidungen getroffen werden können, die sowohl die Ernährungssicherheit als auch den Schutz der Biodiversität berücksichtigen.",
    preguntas: [{enunciado: "Gentechnisch veränderte Organismen sollen unter anderem den Ernteertrag steigern.", respuesta: true}, {enunciado: "In der EU gibt es keine besonderen Vorschriften für gentechnisch veränderte Produkte.", respuesta: false}, {enunciado: "CRISPR-Cas9 führt artfremde DNA in Pflanzen ein.", respuesta: false}, {enunciado: "Einige Experten halten CRISPR-Eingriffe für vergleichbar mit klassischer Züchtung.", respuesta: true}, {enunciado: "Die USA bauen gentechnisch veränderte Nutzpflanzen in großem Umfang an.", respuesta: true}],
  },
  {
    slug: "streaming-vs-kino",
    nivel: "B2",
    titulo: "Streaming vs. Kino",
    descripcion: "Texto sobre la competencia entre plataformas de streaming y las salas de cine tradicionales y el futuro de la experiencia cinematográfica.",
    texto: "Der Aufstieg der Streaming-Plattformen hat die Filmbranche grundlegend verändert und die traditionelle Kinokultur vor existenzielle Herausforderungen gestellt. Anbieter wie Netflix, Amazon Prime und Disney+ investieren Milliarden in eigene Produktionen und ermöglichen es den Zuschauern, Filme und Serien bequem von zu Hause aus zu genießen. Infolgedessen sind die Besucherzahlen in deutschen Kinos seit Jahren rückläufig.\n\nKinobetreiber argumentieren, dass das Filmerlebnis auf der großen Leinwand durch keinen Bildschirm zu ersetzen sei. Die kollektive Erfahrung, einen Film gemeinsam mit anderen Menschen in einem verdunkelten Saal zu erleben, schaffe eine emotionale Intensität, die das Streaming nicht bieten könne. Überdies seien Kinos kulturelle Begegnungsorte, deren Verschwinden eine Verarmung des öffentlichen Lebens bedeuten würde.\n\nBefürworter des Streamings halten dem entgegen, dass die Demokratisierung des Filmzugangs ein erheblicher Fortschritt sei. Menschen, die in ländlichen Gebieten leben oder sich regelmäßige Kinobesuche finanziell nicht leisten könnten, hätten erstmals Zugang zu einem breiten kulturellen Angebot. Zudem förderten Streaming-Plattformen internationale Produktionen und ermöglichten es Filmschaffenden aus aller Welt, ein globales Publikum zu erreichen.\n\nExperten gehen davon aus, dass künftig beide Formate koexistieren werden, sofern sich die Kinos auf ihre Stärken besinnen und ein Erlebnis bieten, das über das bloße Abspielen eines Films hinausgeht. Premium-Formate, kulinarische Angebote und interaktive Veranstaltungen könnten dazu beitragen, das Kino als Kulturort neu zu positionieren.",
    preguntas: [{enunciado: "Die Besucherzahlen in deutschen Kinos steigen seit Jahren.", respuesta: false}, {enunciado: "Kinobetreiber betonen die emotionale Intensität des kollektiven Filmerlebnisses.", respuesta: true}, {enunciado: "Streaming-Plattformen fördern ausschließlich nationale Produktionen.", respuesta: false}, {enunciado: "Menschen in ländlichen Gebieten profitieren vom Streaming-Angebot.", respuesta: true}, {enunciado: "Experten erwarten, dass Kinos und Streaming langfristig koexistieren werden.", respuesta: true}],
  },
  {
    slug: "pflegenotstand",
    nivel: "B2",
    titulo: "Pflegenotstand in Deutschland",
    descripcion: "Texto sobre la crisis del personal de enfermería en Alemania, sus causas demográficas y las medidas para mejorar las condiciones laborales en el sector.",
    texto: "Deutschland steht vor einem der drängendsten sozialpolitischen Probleme der kommenden Jahrzehnte: dem Pflegenotstand. Aufgrund des demografischen Wandels steigt die Zahl pflegebedürftiger Menschen kontinuierlich an, während gleichzeitig immer weniger Fachkräfte zur Verfügung stehen. Bereits heute sind Hunderttausende Stellen in der Pflege unbesetzt, und Prognosen zufolge könnte sich diese Lücke bis 2035 auf über 500.000 fehlende Pflegekräfte ausweiten.\n\nDie Ursachen für den Fachkräftemangel sind vielfältig. Geringe Vergütung, hohe körperliche und psychische Belastung sowie unattraktive Arbeitszeiten führen dazu, dass viele Pflegekräfte ihren Beruf vorzeitig aufgeben oder sich von vornherein gegen eine Ausbildung in diesem Bereich entscheiden. Obwohl die Löhne in jüngster Zeit angehoben wurden, bleiben sie im Vergleich zu anderen Branchen mit vergleichbarer Verantwortung unterdurchschnittlich.\n\nUm dem Pflegenotstand entgegenzuwirken, werden verschiedene Ansätze diskutiert. Neben einer weiteren Aufwertung der Pflegeberufe durch bessere Bezahlung und verbesserte Arbeitsbedingungen wird auch die gezielte Anwerbung ausländischer Fachkräfte als notwendig erachtet. Hierbei müssten jedoch bürokratische Hürden abgebaut und Anerkennungsverfahren für im Ausland erworbene Qualifikationen beschleunigt werden.\n\nDarüber hinaus könnte die Digitalisierung einen Beitrag zur Entlastung des Pflegepersonals leisten, indem etwa Dokumentationsaufgaben automatisiert oder telemedizinische Angebote ausgebaut werden. Allerdings dürfe die Technisierung niemals den zwischenmenschlichen Kontakt ersetzen, der das Wesen guter Pflege ausmache. Ohne ein umfassendes Maßnahmenpaket drohe der Pflegenotstand zu einer gesamtgesellschaftlichen Krise zu werden.",
    preguntas: [{enunciado: "Bis 2035 könnten über 500.000 Pflegekräfte in Deutschland fehlen.", respuesta: true}, {enunciado: "Die Löhne in der Pflege liegen über dem Durchschnitt vergleichbarer Branchen.", respuesta: false}, {enunciado: "Die Anwerbung ausländischer Fachkräfte wird als eine mögliche Maßnahme betrachtet.", respuesta: true}, {enunciado: "Digitalisierung könnte das Pflegepersonal bei Dokumentationsaufgaben entlasten.", respuesta: true}, {enunciado: "Technisierung soll den zwischenmenschlichen Kontakt in der Pflege ersetzen.", respuesta: false}],
  },
  {
    slug: 'mein-fruehstueck',
    nivel: 'A1',
    titulo: 'Mein Frühstück',
    descripcion: 'Texto sencillo sobre un desayuno típico alemán con pan, mermelada, huevos y café.',
    requiresAuth: true,
    texto: 'Ich frühstücke jeden Morgen um sieben Uhr. Ich esse Brot mit Butter und Marmelade. Manchmal esse ich auch ein Ei. Ich trinke Kaffee mit Milch. Mein Mann trinkt Tee. Die Kinder essen Müsli mit Joghurt. Am Wochenende frühstücken wir zusammen. Dann kaufe ich frische Brötchen beim Bäcker. Wir essen auch Käse und Wurst. Das Frühstück am Sonntag dauert lange. Wir reden viel und lachen. Ich liebe das Sonntagsfrühstück.',
    preguntas: [{enunciado: 'Die Person frühstückt jeden Morgen um acht Uhr.', respuesta: false}, {enunciado: 'Der Mann trinkt Tee.', respuesta: true}, {enunciado: 'Die Kinder essen Brot mit Marmelade.', respuesta: false}, {enunciado: 'Am Wochenende kauft sie frische Brötchen.', respuesta: true}, {enunciado: 'Das Sonntagsfrühstück dauert lange.', respuesta: true}],
  },
  {
    slug: 'die-busfahrt',
    nivel: 'A1',
    titulo: 'Die Busfahrt',
    descripcion: 'Texto sobre un trayecto en autobús por la ciudad, describiendo paradas y pasajeros.',
    requiresAuth: true,
    texto: 'Ich fahre jeden Tag mit dem Bus zur Arbeit. Die Bushaltestelle ist neben meinem Haus. Der Bus kommt um halb acht. Ich steige ein und kaufe eine Fahrkarte. Im Bus sitzen viele Leute. Manche lesen Zeitung, andere hören Musik. Die Fahrt dauert zwanzig Minuten. Der Bus hält an fünf Haltestellen. An der dritten Haltestelle steigt meine Kollegin Anna ein. Wir reden über die Arbeit. An der letzten Haltestelle steigen wir aus. Das Büro ist nur zwei Minuten zu Fuß.',
    preguntas: [{enunciado: 'Die Bushaltestelle ist weit vom Haus entfernt.', respuesta: false}, {enunciado: 'Die Busfahrt dauert zwanzig Minuten.', respuesta: true}, {enunciado: 'Anna steigt an der ersten Haltestelle ein.', respuesta: false}, {enunciado: 'Im Bus lesen manche Leute Zeitung.', respuesta: true}, {enunciado: 'Das Büro ist zwei Minuten zu Fuß von der Haltestelle.', respuesta: true}],
  },
  {
    slug: 'auf-dem-spielplatz',
    nivel: 'A1',
    titulo: 'Auf dem Spielplatz',
    descripcion: 'Texto sobre niños jugando en un parque infantil con columpios, toboganes y arena.',
    requiresAuth: true,
    texto: 'Am Nachmittag gehe ich mit meinen Kindern auf den Spielplatz. Der Spielplatz ist im Park. Es gibt eine Rutsche, eine Schaukel und einen Sandkasten. Meine Tochter Lisa liebt die Schaukel. Mein Sohn Max spielt im Sandkasten. Er baut eine große Burg. Andere Kinder spielen auch dort. Lisa hat eine neue Freundin. Sie heißt Sophie. Die Kinder spielen zwei Stunden. Dann sind sie müde und hungrig. Wir gehen nach Hause und essen Abendbrot.',
    preguntas: [{enunciado: 'Der Spielplatz ist im Wald.', respuesta: false}, {enunciado: 'Lisa liebt die Schaukel.', respuesta: true}, {enunciado: 'Max spielt auf der Rutsche.', respuesta: false}, {enunciado: 'Lisas neue Freundin heißt Sophie.', respuesta: true}, {enunciado: 'Die Kinder spielen zwei Stunden.', respuesta: true}],
  },
  {
    slug: 'mein-handy',
    nivel: 'A1',
    titulo: 'Mein Handy',
    descripcion: 'Texto simple sobre el uso del teléfono móvil en la vida cotidiana.',
    requiresAuth: true,
    texto: 'Ich habe ein neues Handy. Es ist schwarz und nicht sehr groß. Ich benutze mein Handy jeden Tag. Ich rufe meine Mutter an. Ich schreibe Nachrichten an Freunde. Ich mache viele Fotos. Ich höre auch Musik auf meinem Handy. Manchmal spiele ich Spiele. Am Abend schaue ich Videos. Mein Handy hat einen Wecker. Er klingelt jeden Morgen um sechs Uhr. Ohne mein Handy bin ich verloren!',
    preguntas: [{enunciado: 'Das Handy ist weiß.', respuesta: false}, {enunciado: 'Die Person ruft ihre Mutter mit dem Handy an.', respuesta: true}, {enunciado: 'Das Handy hat keinen Wecker.', respuesta: false}, {enunciado: 'Der Wecker klingelt um sechs Uhr.', respuesta: true}, {enunciado: 'Die Person macht Fotos mit dem Handy.', respuesta: true}],
  },
  {
    slug: 'meine-strasse',
    nivel: 'A1',
    titulo: 'Meine Straße',
    descripcion: 'Texto sobre el vecindario y los comercios de la calle donde vive el narrador.',
    requiresAuth: true,
    texto: 'Ich wohne in der Blumenstraße. Die Straße ist ruhig und schön. Es gibt viele Bäume. Neben meinem Haus ist eine Bäckerei. Dort kaufe ich Brot. Gegenüber ist eine Apotheke. Am Ende der Straße ist ein kleiner Park. Dort spielen die Kinder. Meine Nachbarin Frau Müller wohnt im Haus Nummer fünf. Sie hat eine Katze. Die Katze sitzt oft am Fenster. Ich mag meine Straße sehr.',
    preguntas: [{enunciado: 'Die Blumenstraße ist laut.', respuesta: false}, {enunciado: 'Neben dem Haus ist eine Bäckerei.', respuesta: true}, {enunciado: 'Am Ende der Straße ist ein Supermarkt.', respuesta: false}, {enunciado: 'Frau Müller hat eine Katze.', respuesta: true}, {enunciado: 'Es gibt viele Bäume in der Straße.', respuesta: true}],
  },
  {
    slug: 'im-wartezimmer',
    nivel: 'A1',
    titulo: 'Im Wartezimmer',
    descripcion: 'Texto sobre la espera en la sala del médico y una visita rutinaria.',
    requiresAuth: true,
    texto: 'Ich bin krank. Ich habe Husten und Schnupfen. Ich gehe zum Arzt. Im Wartezimmer sitzen viele Leute. Ich nehme eine Nummer und warte. Neben mir sitzt ein Mann. Er liest eine Zeitschrift. Eine Frau mit einem Kind wartet auch. Das Kind weint. Nach dreißig Minuten ruft die Ärztin meinen Namen. Ich gehe in das Sprechzimmer. Die Ärztin untersucht mich. Sie sagt, ich soll viel Tee trinken und im Bett bleiben. Sie gibt mir ein Rezept.',
    preguntas: [{enunciado: 'Die Person hat Kopfschmerzen.', respuesta: false}, {enunciado: 'Im Wartezimmer sitzen viele Leute.', respuesta: true}, {enunciado: 'Die Person wartet eine Stunde.', respuesta: false}, {enunciado: 'Die Ärztin gibt ein Rezept.', respuesta: true}, {enunciado: 'Ein Mann neben der Person liest eine Zeitschrift.', respuesta: true}],
  },
  {
    slug: 'der-hund-im-park',
    nivel: 'A1',
    titulo: 'Der Hund im Park',
    descripcion: 'Texto sobre pasear al perro en el parque y encontrarse con otros dueños de perros.',
    requiresAuth: true,
    texto: 'Ich habe einen Hund. Er heißt Bruno und ist drei Jahre alt. Bruno ist braun und groß. Jeden Morgen gehe ich mit Bruno in den Park. Bruno läuft schnell und spielt mit anderen Hunden. Im Park gibt es eine Wiese für Hunde. Dort dürfen die Hunde ohne Leine laufen. Brunos bester Freund ist ein kleiner weißer Hund. Er heißt Schnee. Die Besitzerin von Schnee heißt Claudia. Wir trinken manchmal zusammen Kaffee. Bruno und Schnee spielen dann zusammen.',
    preguntas: [{enunciado: 'Bruno ist zwei Jahre alt.', respuesta: false}, {enunciado: 'Bruno ist braun und groß.', respuesta: true}, {enunciado: 'Die Hunde müssen immer an der Leine bleiben.', respuesta: false}, {enunciado: 'Brunos bester Freund heißt Schnee.', respuesta: true}, {enunciado: 'Claudia ist die Besitzerin von Schnee.', respuesta: true}],
  },
  {
    slug: 'der-kindergeburtstag',
    nivel: 'A1',
    titulo: 'Der Kindergeburtstag',
    descripcion: 'Texto sobre la celebración de un cumpleaños infantil con juegos, tarta y regalos.',
    requiresAuth: true,
    texto: 'Heute hat meine Tochter Emma Geburtstag. Sie wird sechs Jahre alt. Wir feiern zu Hause. Acht Kinder kommen zur Party. Ich backe einen Schokoladenkuchen. Emma bekommt viele Geschenke: Bücher, ein Puzzle und eine Puppe. Die Kinder spielen Verstecken im Garten. Dann essen wir Kuchen. Alle Kinder bekommen auch Luftballons. Am Abend sind alle müde. Emma ist sehr glücklich. Sie sagt: Das war der beste Geburtstag!',
    preguntas: [{enunciado: 'Emma wird sieben Jahre alt.', respuesta: false}, {enunciado: 'Acht Kinder kommen zur Party.', respuesta: true}, {enunciado: 'Die Mutter backt einen Erdbeerkuchen.', respuesta: false}, {enunciado: 'Die Kinder spielen Verstecken im Garten.', respuesta: true}, {enunciado: 'Emma ist sehr glücklich am Ende.', respuesta: true}],
  },
  {
    slug: 'die-jahreszeiten',
    nivel: 'A1',
    titulo: 'Die Jahreszeiten',
    descripcion: 'Texto que describe las cuatro estaciones del año y las actividades típicas de cada una.',
    requiresAuth: true,
    texto: 'Es gibt vier Jahreszeiten: Frühling, Sommer, Herbst und Winter. Im Frühling blühen die Blumen. Die Vögel singen. Im Sommer ist es heiß. Wir gehen schwimmen und essen Eis. Im Herbst fallen die Blätter von den Bäumen. Die Blätter sind rot, gelb und braun. Im Winter ist es kalt. Manchmal schneit es. Die Kinder bauen einen Schneemann. Ich mag den Sommer am liebsten. Aber der Herbst ist auch schön. Welche Jahreszeit magst du?',
    preguntas: [{enunciado: 'Im Frühling fallen die Blätter.', respuesta: false}, {enunciado: 'Im Sommer gehen sie schwimmen.', respuesta: true}, {enunciado: 'Die Blätter im Herbst sind blau und grün.', respuesta: false}, {enunciado: 'Die Kinder bauen im Winter einen Schneemann.', respuesta: true}, {enunciado: 'Die Person mag den Sommer am liebsten.', respuesta: true}],
  },
  {
    slug: 'der-wochenmarkt',
    nivel: 'A1',
    titulo: 'Der Wochenmarkt',
    descripcion: 'Texto sobre ir al mercado semanal para comprar frutas, verduras y flores.',
    requiresAuth: true,
    texto: 'Jeden Samstag gehe ich auf den Wochenmarkt. Der Markt ist auf dem Rathausplatz. Es gibt viele Stände. An einem Stand kaufe ich Obst: Äpfel, Bananen und Erdbeeren. An einem anderen Stand kaufe ich Gemüse: Tomaten, Gurken und Kartoffeln. Es gibt auch einen Stand mit Blumen. Ich kaufe Sonnenblumen für die Küche. Der Käsestand ist mein Lieblingsstand. Ich probiere immer den neuen Käse. Am Ende trinke ich einen Kaffee am Marktcafé. Der Wochenmarkt macht mir Freude.',
    preguntas: [{enunciado: 'Der Markt ist jeden Sonntag.', respuesta: false}, {enunciado: 'Der Markt ist auf dem Rathausplatz.', respuesta: true}, {enunciado: 'Die Person kauft Rosen für die Küche.', respuesta: false}, {enunciado: 'Am Käsestand probiert sie neuen Käse.', respuesta: true}, {enunciado: 'Am Ende trinkt sie Kaffee am Marktcafé.', respuesta: true}],
  },
  {
    slug: 'der-umzug',
    nivel: 'A2',
    titulo: 'Der Umzug',
    descripcion: 'Texto sobre mudarse a una nueva vivienda y organizar la mudanza con amigos.',
    requiresAuth: true,
    texto: 'Nächste Woche ziehe ich um. Meine neue Wohnung ist in der Mozartstraße. Sie hat drei Zimmer, eine Küche und ein Bad. Die Wohnung ist im zweiten Stock. Es gibt einen Balkon mit Blick auf den Park. Die Miete ist günstiger als in meiner alten Wohnung.\n\nFür den Umzug habe ich Freunde eingeladen. Mein Freund Thomas hat einen Transporter. Er hilft mir mit den schweren Möbeln. Meine Schwester packt die Kisten. Ich habe schon zwanzig Kisten gepackt. Die Bücher sind am schwersten.\n\nIn der neuen Wohnung möchte ich das Schlafzimmer neu streichen. Ich wähle eine helle Farbe. Am Abend nach dem Umzug bestellen wir Pizza für alle Helfer. Ich freue mich auf die neue Wohnung.',
    preguntas: [{enunciado: 'Die neue Wohnung hat vier Zimmer.', respuesta: false}, {enunciado: 'Thomas hat einen Transporter.', respuesta: true}, {enunciado: 'Die Miete ist teurer als vorher.', respuesta: false}, {enunciado: 'Die Person hat schon zwanzig Kisten gepackt.', respuesta: true}, {enunciado: 'Am Abend bestellen sie Pizza.', respuesta: true}],
  },
  {
    slug: 'der-flohmarkt-besuch',
    nivel: 'A2',
    titulo: 'Der Flohmarktbesuch',
    descripcion: 'Texto sobre visitar un mercadillo y encontrar objetos interesantes a buen precio.',
    requiresAuth: true,
    texto: 'Am Sonntagmorgen bin ich zum Flohmarkt gegangen. Er findet jeden ersten Sonntag im Monat statt. Der Flohmarkt ist auf dem großen Parkplatz hinter dem Rathaus. Dort verkaufen Leute alte Sachen: Bücher, Kleidung, Geschirr und Spielzeug.\n\nIch habe eine schöne alte Lampe gefunden. Sie kostet nur fünf Euro. Der Verkäufer hat gesagt, sie ist aus den sechziger Jahren. Meine Freundin Jana hat ein Kleid gekauft und alte Schallplatten. Wir haben fast zwei Stunden auf dem Flohmarkt verbracht.\n\nZum Schluss haben wir Bratwurst und Pommes an einem Imbissstand gegessen. Das gehört für mich zum Flohmarkt dazu. Ich gehe gern auf Flohmärkte, weil man nie weiß, was man findet.',
    preguntas: [{enunciado: 'Der Flohmarkt findet jeden Sonntag statt.', respuesta: false}, {enunciado: 'Die Lampe kostet fünf Euro.', respuesta: true}, {enunciado: 'Jana hat eine Lampe gekauft.', respuesta: false}, {enunciado: 'Sie haben fast zwei Stunden auf dem Flohmarkt verbracht.', respuesta: true}, {enunciado: 'Zum Schluss haben sie Bratwurst gegessen.', respuesta: true}],
  },
  {
    slug: 'das-vorstellungsgespraech',
    nivel: 'A2',
    titulo: 'Das Vorstellungsgespräch',
    descripcion: 'Texto sobre preparar y asistir a una entrevista de trabajo.',
    requiresAuth: true,
    texto: 'Morgen habe ich ein Vorstellungsgespräch. Die Firma sucht eine Bürokauffrau. Ich bin nervös, aber gut vorbereitet. Gestern habe ich mich über die Firma informiert. Sie stellt Sportartikel her.\n\nHeute Abend lege ich meine Kleidung zurecht. Ich ziehe eine schwarze Hose und eine weiße Bluse an. Meine Freundin hat mir Tipps gegeben: Pünktlich sein, lächeln und Augenkontakt halten.\n\nDas Gespräch ist um zehn Uhr. Ich fahre mit der Straßenbahn. Ich muss an der Haltestelle Marienplatz aussteigen. Von dort sind es fünf Minuten zu Fuß. Ich hoffe, dass alles gut geht. Wenn ich die Stelle bekomme, verdiene ich mehr als jetzt. Und der Arbeitsweg ist kürzer.',
    preguntas: [{enunciado: 'Die Firma stellt Lebensmittel her.', respuesta: false}, {enunciado: 'Das Gespräch ist um zehn Uhr.', respuesta: true}, {enunciado: 'Sie fährt mit dem Auto zur Firma.', respuesta: false}, {enunciado: 'Sie steigt an der Haltestelle Marienplatz aus.', respuesta: true}, {enunciado: 'Bei der neuen Stelle wäre der Arbeitsweg kürzer.', respuesta: true}],
  },
  {
    slug: 'das-klassenfest',
    nivel: 'A2',
    titulo: 'Das Klassenfest',
    descripcion: 'Texto sobre una fiesta de clase en la escuela con juegos, comida y música.',
    requiresAuth: true,
    texto: 'Am Freitag hat unsere Klasse ein Fest gefeiert. Wir haben das Klassenzimmer dekoriert. An der Wand hingen bunte Girlanden und Luftballons. Jeder Schüler hat etwas zu essen mitgebracht. Es gab Kuchen, Kekse, Obstsalat und Sandwiches.\n\nUnser Lehrer Herr Weber hat Musik gespielt. Einige Schüler haben getanzt. Wir haben auch Spiele gemacht. Beim Stuhlspiel hat Maria gewonnen. Sie hat einen kleinen Preis bekommen: ein Buch über Tiere.\n\nGegen halb fünf haben wir aufgeräumt. Alle haben geholfen. Das Klassenfest war toll. Unsere Lehrerin Frau Braun hat gesagt, sie ist stolz auf uns. Wir möchten bald wieder ein Fest feiern.',
    preguntas: [{enunciado: 'Das Fest war am Samstag.', respuesta: false}, {enunciado: 'Herr Weber hat Musik gespielt.', respuesta: true}, {enunciado: 'Beim Stuhlspiel hat Thomas gewonnen.', respuesta: false}, {enunciado: 'Maria hat ein Buch über Tiere gewonnen.', respuesta: true}, {enunciado: 'Alle haben beim Aufräumen geholfen.', respuesta: true}],
  },
  {
    slug: 'der-neue-mitbewohner',
    nivel: 'A2',
    titulo: 'Der neue Mitbewohner',
    descripcion: 'Texto sobre convivir con un nuevo compañero de piso y las normas de la casa.',
    requiresAuth: true,
    texto: 'Seit zwei Wochen habe ich einen neuen Mitbewohner. Er heißt Kerem und kommt aus der Türkei. Er studiert Informatik an der Universität. Kerem ist sehr nett und ordentlich.\n\nWir haben Regeln für die Wohngemeinschaft gemacht. Jeder kocht an drei Tagen in der Woche. Am Sonntag kochen wir zusammen. Kerem macht sehr guten Reis mit Gemüse. Ich koche gern Pasta.\n\nDas Bad putzen wir abwechselnd. Den Müll bringt immer der raus, der als Letzter nach Hause kommt. Wir teilen uns die Kosten für Toilettenpapier und Putzmittel.\n\nAbends schauen wir manchmal zusammen Filme. Kerem zeigt mir türkische Filme mit deutschen Untertiteln. Das finde ich sehr interessant. Ich glaube, wir sind ein gutes Team.',
    preguntas: [{enunciado: 'Kerem kommt aus Griechenland.', respuesta: false}, {enunciado: 'Jeder kocht an drei Tagen in der Woche.', respuesta: true}, {enunciado: 'Kerem studiert Medizin.', respuesta: false}, {enunciado: 'Sie schauen abends manchmal zusammen Filme.', respuesta: true}, {enunciado: 'Sie teilen sich die Kosten für Putzmittel.', respuesta: true}],
  },
  {
    slug: 'das-fahrradgeschaeft',
    nivel: 'A2',
    titulo: 'Das Fahrradgeschäft',
    descripcion: 'Texto sobre comprar una bicicleta nueva en una tienda y elegir accesorios.',
    requiresAuth: true,
    texto: 'Mein altes Fahrrad ist kaputt. Die Bremsen funktionieren nicht mehr und der Rahmen hat einen Riss. Deshalb gehe ich in ein Fahrradgeschäft. Das Geschäft heißt Radwelt und ist in der Hauptstraße.\n\nDer Verkäufer zeigt mir verschiedene Räder. Ein rotes Stadtrad gefällt mir. Es kostet 450 Euro. Das ist viel Geld, aber das Rad hat eine gute Qualität. Der Verkäufer erklärt mir die Gangschaltung und die Bremsen.\n\nIch kaufe auch einen Helm und ein Schloss. Der Helm ist blau und kostet 35 Euro. Das Schloss kostet 25 Euro. Zusammen bezahle ich 510 Euro. Ich bezahle mit meiner Bankkarte.\n\nAm Wochenende mache ich die erste Tour mit meinem neuen Fahrrad. Ich freue mich schon darauf.',
    preguntas: [{enunciado: 'Das alte Fahrrad hat kaputte Reifen.', respuesta: false}, {enunciado: 'Das Stadtrad kostet 450 Euro.', respuesta: true}, {enunciado: 'Der Helm ist rot.', respuesta: false}, {enunciado: 'Das Schloss kostet 25 Euro.', respuesta: true}, {enunciado: 'Die Person bezahlt mit ihrer Bankkarte.', respuesta: true}],
  },
  {
    slug: 'der-elternabend',
    nivel: 'A2',
    titulo: 'Der Elternabend',
    descripcion: 'Texto sobre la reunión de padres en la escuela y los temas que se discuten.',
    requiresAuth: true,
    texto: 'Gestern Abend war Elternabend in der Schule meiner Tochter. Die Klassenlehrerin Frau Hoffmann hat alle Eltern in das Klassenzimmer eingeladen. Fünfzehn Eltern sind gekommen.\n\nFrau Hoffmann hat über den Lehrplan gesprochen. Die Kinder lernen dieses Jahr Englisch und Sachkunde. Sie hat auch über den Schulausflug informiert. Im Mai fährt die Klasse nach Heidelberg. Der Ausflug kostet 30 Euro pro Kind.\n\nEin Vater hat gefragt, ob die Kinder zu viele Hausaufgaben bekommen. Frau Hoffmann hat erklärt, dass die Kinder täglich etwa dreißig Minuten Hausaufgaben machen sollen. Nicht mehr.\n\nAm Ende haben wir einen Elternvertreter gewählt. Frau Schmidt wurde gewählt. Sie organisiert jetzt die Kommunikation zwischen Eltern und Schule. Der Elternabend hat eine Stunde gedauert.',
    preguntas: [{enunciado: 'Zwanzig Eltern sind zum Elternabend gekommen.', respuesta: false}, {enunciado: 'Der Schulausflug geht nach Heidelberg.', respuesta: true}, {enunciado: 'Die Kinder sollen eine Stunde Hausaufgaben machen.', respuesta: false}, {enunciado: 'Frau Schmidt wurde als Elternvertreterin gewählt.', respuesta: true}, {enunciado: 'Der Elternabend hat eine Stunde gedauert.', respuesta: true}],
  },
  {
    slug: 'der-regentag',
    nivel: 'A2',
    titulo: 'Der Regentag',
    descripcion: 'Texto sobre un día lluvioso y las actividades que se hacen en casa.',
    requiresAuth: true,
    texto: 'Heute regnet es den ganzen Tag. Am Morgen wollte ich joggen gehen, aber das Wetter ist zu schlecht. Also bleibe ich zu Hause. Ich mache mir einen heißen Kakao und setze mich aufs Sofa.\n\nZuerst lese ich ein Buch. Es ist ein Krimi und sehr spannend. Dann räume ich die Küche auf und wasche die Wäsche. Am Mittag koche ich eine Gemüsesuppe. Sie wärmt von innen.\n\nNachmittags rufe ich meine Mutter an. Wir telefonieren eine halbe Stunde. Sie erzählt von ihrem Urlaub in Spanien. Am Abend schaue ich einen Film. Draußen regnet es immer noch. Aber ich fühle mich wohl. Manchmal ist ein Regentag genau das Richtige.',
    preguntas: [{enunciado: 'Die Person geht morgens joggen.', respuesta: false}, {enunciado: 'Sie liest einen spannenden Krimi.', respuesta: true}, {enunciado: 'Am Mittag bestellt sie Pizza.', respuesta: false}, {enunciado: 'Die Mutter erzählt von ihrem Urlaub in Spanien.', respuesta: true}, {enunciado: 'Am Abend schaut die Person einen Film.', respuesta: true}],
  },
  {
    slug: 'der-sportverein',
    nivel: 'A2',
    titulo: 'Der Sportverein',
    descripcion: 'Texto sobre unirse a un club deportivo y participar en entrenamientos.',
    requiresAuth: true,
    texto: 'Seit September bin ich Mitglied im Sportverein. Der Verein heißt TSV Grünstadt. Ich spiele in der Volleyballmannschaft. Wir trainieren zweimal pro Woche: dienstags und donnerstags von 19 bis 21 Uhr.\n\nUnser Trainer heißt Markus. Er ist streng, aber fair. Am Anfang jedes Trainings laufen wir zehn Minuten. Dann machen wir Übungen mit dem Ball. Am Ende spielen wir ein kurzes Match.\n\nIn unserer Mannschaft sind zwölf Spielerinnen. Die meisten sind zwischen 25 und 40 Jahre alt. Wir verstehen uns gut und gehen nach dem Training oft zusammen ein Bier trinken.\n\nNächsten Monat haben wir unser erstes Turnier. Wir spielen gegen drei andere Vereine. Ich bin ein bisschen nervös, aber ich trainiere fleißig.',
    preguntas: [{enunciado: 'Der Verein heißt TSV Blaustadt.', respuesta: false}, {enunciado: 'Sie trainieren dienstags und donnerstags.', respuesta: true}, {enunciado: 'Der Trainer heißt Stefan.', respuesta: false}, {enunciado: 'In der Mannschaft sind zwölf Spielerinnen.', respuesta: true}, {enunciado: 'Nach dem Training gehen sie oft zusammen ein Bier trinken.', respuesta: true}],
  },
  {
    slug: 'die-stadtbibliothek',
    nivel: 'A2',
    titulo: 'Die Stadtbibliothek',
    descripcion: 'Texto sobre usar la biblioteca municipal para leer, estudiar y tomar prestados libros.',
    requiresAuth: true,
    texto: 'In unserer Stadt gibt es eine große Bibliothek. Sie ist am Marktplatz, neben dem Rathaus. Die Bibliothek hat drei Stockwerke. Im Erdgeschoss stehen Romane und Zeitschriften. Im ersten Stock gibt es Sachbücher und Kinderbücher. Im zweiten Stock kann man am Computer arbeiten.\n\nIch gehe jede Woche in die Bibliothek. Man kann Bücher für vier Wochen ausleihen. Ich leihe meistens zwei Bücher aus. Im Moment lese ich einen Roman über eine Familie in Hamburg.\n\nDie Bibliothek bietet auch Veranstaltungen an. Am Mittwoch gibt es eine Lesestunde für Kinder. Am Donnerstag gibt es einen Buchclub für Erwachsene. Der Bibliotheksausweis kostet 15 Euro im Jahr. Für Kinder ist er kostenlos.',
    preguntas: [{enunciado: 'Die Bibliothek hat vier Stockwerke.', respuesta: false}, {enunciado: 'Man kann Bücher für vier Wochen ausleihen.', respuesta: true}, {enunciado: 'Der Bibliotheksausweis kostet 20 Euro im Jahr.', respuesta: false}, {enunciado: 'Am Mittwoch gibt es eine Lesestunde für Kinder.', respuesta: true}, {enunciado: 'Für Kinder ist der Ausweis kostenlos.', respuesta: true}],
  },
  {
    slug: 'home-office-erfahrungen',
    nivel: 'B1',
    titulo: 'Home-Office-Erfahrungen',
    descripcion: 'Texto sobre las experiencias personales trabajando desde casa y cómo organizar el día laboral.',
    requiresAuth: true,
    texto: 'Seit der Pandemie arbeite ich drei Tage pro Woche im Home-Office. Am Anfang war es schwierig, Arbeit und Privatleben zu trennen. Ich habe oft länger gearbeitet als im Büro, weil der Feierabend nicht klar definiert war.\n\nMittlerweile habe ich eine gute Routine entwickelt. Ich stehe um sieben Uhr auf, frühstücke und beginne um acht Uhr mit der Arbeit. In der Mittagspause gehe ich eine halbe Stunde spazieren. Um 17 Uhr schalte ich den Computer aus und gehe nicht mehr an die E-Mails.\n\nEin Nachteil des Home-Office ist die fehlende soziale Interaktion. Ich vermisse die Gespräche mit Kollegen in der Kaffeeküche. Videokonferenzen ersetzen den persönlichen Kontakt nicht vollständig. Andererseits spare ich jeden Tag eine Stunde Pendelzeit. Diese Zeit nutze ich für Sport und Familie.\n\nMein Arbeitgeber bietet jetzt ein hybrides Modell an. Ich finde, dass die Mischung aus Home-Office und Büroarbeit für mich ideal ist.',
    preguntas: [{enunciado: 'Die Person arbeitet fünf Tage pro Woche im Home-Office.', respuesta: false}, {enunciado: 'Am Anfang war es schwierig, Arbeit und Privatleben zu trennen.', respuesta: true}, {enunciado: 'In der Mittagspause schaut sie Fernsehen.', respuesta: false}, {enunciado: 'Die Person spart jeden Tag eine Stunde Pendelzeit.', respuesta: true}, {enunciado: 'Der Arbeitgeber bietet jetzt ein hybrides Modell an.', respuesta: true}],
  },
  {
    slug: 'unverpackt-laden',
    nivel: 'B1',
    titulo: 'Der Unverpackt-Laden',
    descripcion: 'Texto sobre comprar en una tienda sin envases y reducir los residuos plásticos.',
    requiresAuth: true,
    texto: 'In unserer Nachbarschaft hat vor einem halben Jahr ein Unverpackt-Laden eröffnet. Das Konzept ist einfach: Man bringt eigene Behälter mit und füllt sich Lebensmittel wie Nudeln, Reis, Müsli oder Gewürze selbst ab. So entsteht kein unnötiger Verpackungsmüll.\n\nAm Anfang war ich skeptisch. Ich dachte, es sei umständlich und teuer. Aber nachdem ich den Laden ausprobiert habe, war ich überrascht. Die Preise sind ähnlich wie im Supermarkt. Man kauft genau die Menge, die man braucht, und wirft weniger weg.\n\nDer Laden bietet auch regionale Produkte an: Eier vom Bauernhof, Honig aus der Umgebung und saisonales Obst. Die Besitzerin Katharina kennt ihre Lieferanten persönlich. Sie achtet auf faire Arbeitsbedingungen.\n\nNatürlich kaufe ich nicht alles dort. Für Fleisch und Milchprodukte gehe ich weiterhin in den Supermarkt. Aber mein Plastikverbrauch ist deutlich gesunken. Und ich habe das Gefühl, bewusster einzukaufen.',
    preguntas: [{enunciado: 'Der Unverpackt-Laden gibt es seit zwei Jahren.', respuesta: false}, {enunciado: 'Man bringt eigene Behälter mit.', respuesta: true}, {enunciado: 'Die Preise sind viel höher als im Supermarkt.', respuesta: false}, {enunciado: 'Der Laden bietet auch regionale Produkte an.', respuesta: true}, {enunciado: 'Der Plastikverbrauch der Person ist deutlich gesunken.', respuesta: true}],
  },
  {
    slug: 'ehrenamtlich-helfen',
    nivel: 'B1',
    titulo: 'Ehrenamtlich helfen',
    descripcion: 'Texto sobre trabajo voluntario en un comedor social y la importancia del compromiso social.',
    requiresAuth: true,
    texto: 'Jeden Samstag arbeite ich ehrenamtlich in der Suppenküche am Bahnhof. Wir verteilen warme Mahlzeiten an Menschen, die kein Zuhause haben oder wenig Geld verdienen. Pro Tag kommen etwa 80 Personen.\n\nMein Tag beginnt um neun Uhr. Zuerst bereiten wir das Essen vor: Suppe, Brot, Obst und manchmal auch Kuchen, den eine Bäckerei spendet. Um elf Uhr öffnen wir die Türen. Die Leute stellen sich in einer Reihe auf und bekommen einen Teller Essen und ein heißes Getränk.\n\nWas mich am meisten berührt, ist die Dankbarkeit der Gäste. Viele von ihnen erzählen mir ihre Geschichte. Ein älterer Mann namens Heinrich kommt jede Woche. Er war früher Lehrer. Durch eine Krankheit hat er alles verloren.\n\nDie Arbeit in der Suppenküche hat meine Perspektive verändert. Ich schätze die Dinge, die ich habe, viel mehr. Und ich glaube, dass jeder Mensch einen Beitrag leisten kann, egal wie klein er ist.',
    preguntas: [{enunciado: 'Die Suppenküche verteilt Essen an Touristen.', respuesta: false}, {enunciado: 'Pro Tag kommen etwa 80 Personen.', respuesta: true}, {enunciado: 'Heinrich war früher Arzt.', respuesta: false}, {enunciado: 'Eine Bäckerei spendet manchmal Kuchen.', respuesta: true}, {enunciado: 'Die Arbeit hat die Perspektive der Person verändert.', respuesta: true}],
  },
  {
    slug: 'sprachenlernen-im-alter',
    nivel: 'B1',
    titulo: 'Sprachenlernen im Alter',
    descripcion: 'Texto sobre aprender idiomas siendo adulto mayor, beneficios cognitivos y desafíos.',
    requiresAuth: true,
    texto: 'Meine Großmutter Helga ist 72 Jahre alt und lernt seit zwei Jahren Spanisch. Ihre Freundinnen haben sie gefragt, warum sie das in ihrem Alter noch macht. Sie antwortet immer: Zum Lernen ist man nie zu alt.\n\nHelga besucht zweimal pro Woche einen Kurs an der Volkshochschule. Der Kurs ist speziell für Senioren. Die Gruppe besteht aus acht Teilnehmern zwischen 65 und 80 Jahren. Die Lehrerin, eine Spanierin aus Madrid, ist sehr geduldig und macht den Unterricht mit viel Humor.\n\nAm Anfang hatte Helga Schwierigkeiten mit der Aussprache. Aber sie übt jeden Tag mit einer Sprach-App auf ihrem Tablet. Inzwischen kann sie einfache Gespräche führen. Letzten Sommer war sie in Málaga und hat im Restaurant auf Spanisch bestellt. Sie war sehr stolz.\n\nStudien zeigen, dass Sprachenlernen im Alter das Gehirn trainiert und das Risiko für Demenz senken kann. Für Helga ist es aber vor allem eines: eine Quelle der Freude und neuer Freundschaften.',
    preguntas: [{enunciado: 'Helga ist 68 Jahre alt.', respuesta: false}, {enunciado: 'Der Kurs ist speziell für Senioren.', respuesta: true}, {enunciado: 'Die Lehrerin kommt aus Barcelona.', respuesta: false}, {enunciado: 'Helga hat in Málaga auf Spanisch im Restaurant bestellt.', respuesta: true}, {enunciado: 'Sprachenlernen im Alter kann das Risiko für Demenz senken.', respuesta: true}],
  },
  {
    slug: 'foodsharing',
    nivel: 'B1',
    titulo: 'Foodsharing: Essen retten',
    descripcion: 'Texto sobre la iniciativa de compartir alimentos para evitar el desperdicio.',
    requiresAuth: true,
    texto: 'In Deutschland werden jedes Jahr etwa zwölf Millionen Tonnen Lebensmittel weggeworfen. Vieles davon ist noch genießbar. Die Initiative Foodsharing will das ändern. Freiwillige Helfer, sogenannte Foodsaver, holen überschüssige Lebensmittel bei Supermärkten, Bäckereien und Restaurants ab und verteilen sie kostenlos.\n\nIch bin seit einem Jahr Foodsaverin. Dreimal pro Woche hole ich Lebensmittel bei einem Bioladen in meiner Nähe ab. Meistens sind es Obst und Gemüse mit kleinen Schönheitsfehlern: eine krumme Gurke, ein leicht gedrückter Apfel. Alles noch völlig in Ordnung.\n\nDie geretteten Lebensmittel bringe ich zu einem öffentlichen Kühlschrank. Dort kann sich jeder bedienen, ohne Fragen beantworten zu müssen. Es geht nicht darum, arm oder reich zu sein. Es geht darum, Verschwendung zu vermeiden.\n\nFoodsharing hat auch mein eigenes Verhalten verändert. Ich plane meine Einkäufe besser, kaufe weniger und koche öfter mit Resten. Es ist erstaunlich, was man aus scheinbar wenig noch zaubern kann.',
    preguntas: [{enunciado: 'In Deutschland werden jährlich fünf Millionen Tonnen Lebensmittel weggeworfen.', respuesta: false}, {enunciado: 'Foodsaver holen überschüssige Lebensmittel ab und verteilen sie kostenlos.', respuesta: true}, {enunciado: 'Die Person holt Lebensmittel bei einem Supermarkt ab.', respuesta: false}, {enunciado: 'Es gibt öffentliche Kühlschränke, an denen sich jeder bedienen kann.', respuesta: true}, {enunciado: 'Foodsharing hat das Einkaufsverhalten der Person verändert.', respuesta: true}],
  },
  {
    slug: 'radfahren-in-der-stadt',
    nivel: 'B1',
    titulo: 'Radfahren in der Stadt',
    descripcion: 'Texto sobre el ciclismo urbano como alternativa al coche, infraestructura y seguridad.',
    requiresAuth: true,
    texto: 'Seit drei Jahren fahre ich jeden Tag mit dem Fahrrad zur Arbeit. Der Weg ist acht Kilometer lang und dauert etwa 25 Minuten. Am Anfang hatte ich Bedenken wegen des Stadtverkehrs, aber inzwischen kenne ich die sichersten Routen.\n\nUnsere Stadt hat in den letzten Jahren in Radinfrastruktur investiert. Es gibt neue Radwege entlang der Hauptstraßen und sichere Abstellplätze an den Bahnhöfen. An einigen Kreuzungen gibt es sogar eigene Ampeln für Radfahrer. Trotzdem gibt es noch gefährliche Stellen, besonders an Kreuzungen mit Lkw-Verkehr.\n\nIch spare durch das Radfahren nicht nur Geld für Benzin und Parkgebühren, sondern bleibe auch fit. Im Winter fahre ich allerdings nur bei trockenem Wetter. Bei Glatteis nehme ich die Straßenbahn. Im Sommer genieße ich die Fahrt am Fluss entlang.\n\nViele Kollegen haben sich von mir inspirieren lassen und fahren jetzt auch mit dem Rad. Unser Chef hat sogar eine Dusche im Büro einbauen lassen. Das hilft an heißen Sommertagen.',
    preguntas: [{enunciado: 'Der Arbeitsweg mit dem Fahrrad dauert 45 Minuten.', respuesta: false}, {enunciado: 'Die Stadt hat in Radinfrastruktur investiert.', respuesta: true}, {enunciado: 'Die Person fährt auch bei Glatteis mit dem Rad.', respuesta: false}, {enunciado: 'Viele Kollegen fahren jetzt auch mit dem Rad.', respuesta: true}, {enunciado: 'Der Chef hat eine Dusche im Büro einbauen lassen.', respuesta: true}],
  },
  {
    slug: 'digitale-freundschaften',
    nivel: 'B1',
    titulo: 'Digitale Freundschaften',
    descripcion: 'Texto sobre mantener amistades a distancia a través de medios digitales.',
    requiresAuth: true,
    texto: 'Mein bester Freund Marco lebt seit fünf Jahren in Australien. Trotz der Entfernung und der Zeitverschiebung von neun Stunden sind wir in engem Kontakt geblieben. Wir schreiben uns fast täglich Nachrichten und telefonieren einmal pro Woche per Video.\n\nFrüher hätte so eine Fernfreundschaft wahrscheinlich nicht überlebt. Aber dank digitaler Kommunikation können wir am Alltag des anderen teilhaben. Marco schickt mir Fotos vom Surfen, ich zeige ihm, was ich gekocht habe. Wir schauen sogar manchmal gleichzeitig denselben Film und kommentieren per Chat.\n\nNatürlich ersetzt das nicht alles. Wenn Marco einmal im Jahr nach Deutschland kommt, merke ich, wie sehr mir seine physische Anwesenheit fehlt. Ein gemeinsamer Abend beim Grillen ist etwas anderes als ein Videoanruf.\n\nTrotzdem bin ich dankbar für die Technologie. Ohne sie hätten wir den Kontakt vermutlich verloren. Und ich habe gelernt, dass echte Freundschaft nicht an einen Ort gebunden ist. Sie lebt vom Interesse am anderen Menschen, egal wo er sich befindet.',
    preguntas: [{enunciado: 'Marco lebt seit drei Jahren in Australien.', respuesta: false}, {enunciado: 'Sie telefonieren einmal pro Woche per Video.', respuesta: true}, {enunciado: 'Die Zeitverschiebung beträgt sechs Stunden.', respuesta: false}, {enunciado: 'Marco kommt einmal im Jahr nach Deutschland.', respuesta: true}, {enunciado: 'Die Person ist dankbar für die Technologie.', respuesta: true}],
  },
  {
    slug: 'schrebergarten',
    nivel: 'B1',
    titulo: 'Mein Schrebergarten',
    descripcion: 'Texto sobre tener un huerto urbano, cultivar verduras y disfrutar de la naturaleza en la ciudad.',
    requiresAuth: true,
    texto: 'Seit letztem Frühling habe ich einen Schrebergarten am Stadtrand. Die Parzelle ist 200 Quadratmeter groß und hat eine kleine Laube, in der man bei Regen unterstehen kann. Als ich den Garten übernommen habe, war alles verwildert. Ich habe wochenlang Unkraut gejätet und den Boden umgegraben.\n\nJetzt wachsen dort Tomaten, Zucchini, Salat, Erdbeeren und verschiedene Kräuter. Das Gemüse aus dem eigenen Garten schmeckt einfach anders als aus dem Supermarkt. Man weiß genau, was drin ist, und erntet, wenn es reif ist.\n\nDie Schrebergartenanlage ist eine kleine Gemeinschaft. Meine Gartennachbarn sind ein älteres Ehepaar, das mir viele Tipps gibt. Wir tauschen Pflanzen und Samen. Im Sommer grillen wir manchmal zusammen.\n\nDer Garten ist auch mein Ausgleich zum stressigen Büroalltag. Wenn ich in der Erde arbeite, vergesse ich alle Sorgen. Es ist erstaunlich, wie beruhigend es sein kann, eine Pflanze wachsen zu sehen.',
    preguntas: [{enunciado: 'Die Parzelle ist 100 Quadratmeter groß.', respuesta: false}, {enunciado: 'Im Garten wachsen Tomaten, Zucchini und Erdbeeren.', respuesta: true}, {enunciado: 'Die Gartennachbarn sind eine junge Familie.', respuesta: false}, {enunciado: 'Sie tauschen Pflanzen und Samen mit den Nachbarn.', respuesta: true}, {enunciado: 'Der Garten ist ein Ausgleich zum Büroalltag.', respuesta: true}],
  },
  {
    slug: 'repair-cafe',
    nivel: 'B1',
    titulo: 'Das Repair-Café',
    descripcion: 'Texto sobre un café de reparación donde voluntarios arreglan objetos rotos.',
    requiresAuth: true,
    texto: 'In unserem Stadtteil gibt es einmal im Monat ein Repair-Café. Menschen bringen kaputte Gegenstände mit, und freiwillige Helfer versuchen, sie zu reparieren. Es werden Fahrräder, Elektrogeräte, Kleidung und sogar Möbel repariert. Der Service ist kostenlos, Spenden sind aber willkommen.\n\nLetzten Samstag war ich zum ersten Mal dort. Ich hatte meinen alten Toaster mitgebracht, der nicht mehr funktionierte. Ein pensionierter Elektriker namens Werner hat sich den Toaster angesehen. Nach zwanzig Minuten hatte er das Problem gefunden: ein lockeres Kabel. Er hat es gelötet, und der Toaster funktioniert wieder einwandfrei.\n\nWährend ich gewartet habe, habe ich den anderen Reparaturen zugesehen. Eine Schneiderin hat einen Reißverschluss an einer Jacke ausgetauscht. Ein Tischler hat ein Stuhlbein geleimt. Die Atmosphäre war sehr herzlich.\n\nDas Repair-Café zeigt, dass viele Dinge nicht in den Müll gehören. Oft ist es nur eine Kleinigkeit, die repariert werden muss. Außerdem lernt man dabei etwas über die Funktionsweise der Gegenstände. Ich komme auf jeden Fall wieder.',
    preguntas: [{enunciado: 'Das Repair-Café findet jede Woche statt.', respuesta: false}, {enunciado: 'Der Service ist kostenlos.', respuesta: true}, {enunciado: 'Werner ist ein pensionierter Tischler.', respuesta: false}, {enunciado: 'Das Problem beim Toaster war ein lockeres Kabel.', respuesta: true}, {enunciado: 'Die Person möchte auf jeden Fall wiederkommen.', respuesta: true}],
  },
  {
    slug: 'mehrgenerationenhaus',
    nivel: 'B1',
    titulo: 'Das Mehrgenerationenhaus',
    descripcion: 'Texto sobre un centro comunitario intergeneracional donde conviven jóvenes y mayores.',
    requiresAuth: true,
    texto: 'In unserer Stadt gibt es ein Mehrgenerationenhaus. Das ist ein offener Treffpunkt, wo Menschen jeden Alters zusammenkommen. Das Haus bietet verschiedene Angebote: Sprachkurse, Computerkurse für Senioren, eine Hausaufgabenhilfe für Kinder und ein offenes Café.\n\nDas Besondere ist der Austausch zwischen den Generationen. Jugendliche erklären älteren Menschen, wie man ein Smartphone benutzt. Im Gegenzug bringen Senioren den Kindern Stricken oder Schach bei. So lernt jeder von jedem.\n\nMeine Nachbarin, Frau Bergmann, geht regelmäßig dorthin. Sie ist 78 und lebt allein. Im Mehrgenerationenhaus hat sie neue Freundschaften geschlossen. Sie hilft in der Küche und backt jeden Donnerstag Kuchen für das Café. Die Kinder nennen sie liebevoll Oma Bergmann.\n\nIch finde, Mehrgenerationenhäuser sind eine tolle Idee. In unserer Gesellschaft leben viele Menschen isoliert. Solche Orte schaffen Gemeinschaft und zeigen, dass alle Generationen voneinander profitieren können.',
    preguntas: [{enunciado: 'Das Mehrgenerationenhaus ist nur für Senioren.', respuesta: false}, {enunciado: 'Jugendliche erklären Senioren die Smartphone-Nutzung.', respuesta: true}, {enunciado: 'Frau Bergmann ist 68 Jahre alt.', respuesta: false}, {enunciado: 'Frau Bergmann backt jeden Donnerstag Kuchen.', respuesta: true}, {enunciado: 'Das Haus bietet auch Sprachkurse an.', respuesta: true}],
  },
  {
    slug: 'recht-auf-vergessen',
    nivel: 'B2',
    titulo: 'Das Recht auf Vergessen im Internet',
    descripcion: 'Texto sobre el derecho al olvido digital, la protección de datos personales y sus límites jurídicos.',
    requiresAuth: true,
    texto: 'Im Jahr 2014 entschied der Europäische Gerichtshof, dass Bürgerinnen und Bürger der EU unter bestimmten Voraussetzungen die Löschung personenbezogener Daten aus Suchmaschinenergebnissen verlangen können. Dieses sogenannte Recht auf Vergessen soll den Schutz der Privatsphäre im digitalen Zeitalter stärken.\n\nDie Entscheidung geht auf den Fall eines spanischen Bürgers zurück, der verlangte, dass ein alter Zeitungsartikel über seine Zwangsversteigerung nicht mehr bei Suchanfragen zu seinem Namen erscheint. Der Gerichtshof gab ihm Recht und verpflichtete Google, den entsprechenden Link zu entfernen.\n\nSeitdem haben Hunderttausende Europäer Löschanträge gestellt. Suchmaschinen müssen jeden einzelnen Fall prüfen und abwägen, ob das Persönlichkeitsrecht des Betroffenen schwerer wiegt als das öffentliche Informationsinteresse. Diese Abwägung ist in der Praxis äußerst komplex.\n\nKritiker bemängeln, dass das Recht auf Vergessen zur Geschichtsbereinigung missbraucht werden könne. Politiker oder Wirtschaftsführer könnten versuchen, unangenehme Informationen verschwinden zu lassen. Befürworter hingegen betonen, dass Menschen nicht für immer an vergangene Fehler gekettet sein sollten, insbesondere wenn diese Informationen für die Öffentlichkeit keine Relevanz mehr besitzen.\n\nDie Debatte berührt fundamentale Fragen unserer digitalen Gesellschaft: Wie viel Kontrolle soll der Einzelne über seine Online-Identität haben? Und wo endet der Schutz der Privatsphäre, wenn er mit der Pressefreiheit und dem Recht auf Information kollidiert?',
    preguntas: [{enunciado: 'Der Europäische Gerichtshof traf die Entscheidung im Jahr 2016.', respuesta: false}, {enunciado: 'Der Ausgangsfall betraf einen spanischen Bürger.', respuesta: true}, {enunciado: 'Suchmaschinen löschen automatisch alle beantragten Links.', respuesta: false}, {enunciado: 'Kritiker befürchten einen Missbrauch zur Geschichtsbereinigung.', respuesta: true}, {enunciado: 'Das Recht auf Vergessen steht in Spannung zur Pressefreiheit.', respuesta: true}],
  },
  {
    slug: 'soziale-ungleichheit-bildung',
    nivel: 'B2',
    titulo: 'Soziale Ungleichheit im Bildungssystem',
    descripcion: 'Texto sobre cómo el origen social influye en el éxito educativo en Alemania.',
    requiresAuth: true,
    texto: 'Kaum ein anderes europäisches Land weist einen so starken Zusammenhang zwischen sozialer Herkunft und Bildungserfolg auf wie Deutschland. Zahlreiche Studien belegen, dass Kinder aus Akademikerfamilien signifikant häufiger ein Gymnasium besuchen und ein Studium aufnehmen als Kinder aus Nicht-Akademikerhaushalten, selbst bei vergleichbaren kognitiven Fähigkeiten.\n\nDie Gründe hierfür sind vielschichtig. Bereits im Vorschulalter zeigen sich Unterschiede in der sprachlichen Entwicklung, die mit dem Bildungsniveau der Eltern korrelieren. Das dreigliedrige Schulsystem, das Kinder bereits nach der vierten Klasse in unterschiedliche Bildungswege sortiert, verstärkt diese Disparitäten zusätzlich. Lehrkräfte empfehlen Kindern aus bildungsfernen Familien seltener das Gymnasium, auch wenn deren Leistungen dies rechtfertigen würden.\n\nDarüber hinaus fehlen in einkommensschwachen Familien häufig die Ressourcen für Nachhilfe, kulturelle Angebote und eine förderliche Lernumgebung. Die Digitalisierung hat diese Kluft während der Pandemie noch vertieft, als manche Schüler keinen Zugang zu geeigneten Endgeräten oder stabilem Internet hatten.\n\nReformvorschläge reichen von einem längeren gemeinsamen Lernen bis zur gezielten Förderung von Schulen in sozialen Brennpunkten. Bildungsexperten fordern zudem eine stärkere Entkopplung von Elternhaus und Bildungschancen durch kostenlose Ganztagsbetreuung und frühkindliche Sprachförderung. Ohne strukturelle Veränderungen droht die Bildungsungleichheit die gesellschaftliche Spaltung weiter zu vertiefen.',
    preguntas: [{enunciado: 'In Deutschland ist der Zusammenhang zwischen Herkunft und Bildungserfolg schwach.', respuesta: false}, {enunciado: 'Kinder werden nach der vierten Klasse in verschiedene Bildungswege aufgeteilt.', respuesta: true}, {enunciado: 'Lehrkräfte empfehlen Kindern aus bildungsfernen Familien häufiger das Gymnasium.', respuesta: false}, {enunciado: 'Die Digitalisierung hat die Bildungskluft während der Pandemie vertieft.', respuesta: true}, {enunciado: 'Experten fordern kostenlose Ganztagsbetreuung als eine mögliche Maßnahme.', respuesta: true}],
  },
  {
    slug: 'whistleblowing',
    nivel: 'B2',
    titulo: 'Whistleblowing: Mut oder Verrat?',
    descripcion: 'Texto sobre la denuncia de irregularidades en empresas, la protección legal y el debate ético.',
    requiresAuth: true,
    texto: 'Als der ehemalige Mitarbeiter eines deutschen Automobilkonzerns im Jahr 2015 interne Dokumente über manipulierte Abgaswerte an die Öffentlichkeit brachte, löste er einen der größten Industrieskandale der jüngeren Geschichte aus. Für die einen war er ein Held, der Verbrauchertäuschung aufdeckte. Für andere war er ein Verräter, der seinen Arbeitgeber hinterging.\n\nDiese Ambivalenz spiegelt die gesellschaftliche Debatte um Whistleblowing wider. Hinweisgeber riskieren häufig ihre berufliche Existenz, wenn sie Missstände in Unternehmen oder Behörden melden. Sie werden gekündigt, juristisch verfolgt oder sozial isoliert. Lange Zeit gab es in Deutschland keinen umfassenden rechtlichen Schutz für sie.\n\nMit dem Hinweisgeberschutzgesetz, das 2023 in Kraft trat, hat sich die Lage verändert. Unternehmen mit mehr als 50 Beschäftigten müssen interne Meldestellen einrichten. Hinweisgeber, die Verstöße gegen europäisches oder nationales Recht melden, dürfen nicht benachteiligt werden. Bei Repressalien können sie Schadensersatz fordern.\n\nDennoch bleibt die Schwelle hoch. Viele potenzielle Whistleblower schweigen aus Angst vor sozialer Ächtung. Die Unternehmenskultur spielt eine entscheidende Rolle: Nur wenn Organisationen eine offene Fehlerkultur pflegen und Kritik nicht als Illoyalität werten, werden Missstände frühzeitig erkannt und behoben.\n\nLetztlich steht die Frage im Raum, ob eine Gesellschaft, die Transparenz und Rechtsstaatlichkeit hochhält, es sich leisten kann, diejenigen zu bestrafen, die genau diese Werte verteidigen.',
    preguntas: [{enunciado: 'Der Automobilskandal wurde im Jahr 2018 aufgedeckt.', respuesta: false}, {enunciado: 'Hinweisgeber riskieren häufig ihre berufliche Existenz.', respuesta: true}, {enunciado: 'Das Hinweisgeberschutzgesetz gilt nur für Unternehmen mit mehr als 200 Beschäftigten.', respuesta: false}, {enunciado: 'Das Hinweisgeberschutzgesetz trat 2023 in Kraft.', respuesta: true}, {enunciado: 'Eine offene Fehlerkultur in Unternehmen ist laut dem Text entscheidend.', respuesta: true}],
  },
  {
    slug: 'einsamkeit-in-grossstaedten',
    nivel: 'B2',
    titulo: 'Einsamkeit in Großstädten',
    descripcion: 'Texto sobre la paradoja de sentirse solo rodeado de millones de personas en la gran ciudad.',
    requiresAuth: true,
    texto: 'Berlin hat 3,7 Millionen Einwohner, doch immer mehr Menschen in der Hauptstadt berichten von chronischer Einsamkeit. Was paradox klingt, ist ein wachsendes gesellschaftliches Problem, das alle Altersgruppen betrifft. Laut einer Studie des Deutschen Instituts für Wirtschaftsforschung fühlt sich jeder zehnte Erwachsene in Deutschland dauerhaft einsam.\n\nDie Ursachen sind vielfältig. Die zunehmende Mobilität führt dazu, dass Menschen häufiger umziehen und gewachsene soziale Netzwerke zurücklassen. Die Digitalisierung ermöglicht zwar ständige Erreichbarkeit, ersetzt aber keine tiefgehenden Beziehungen. Flexible Arbeitsmodelle und die Anonymität der Großstadt tragen ebenfalls dazu bei, dass verbindliche soziale Kontakte seltener werden.\n\nBesonders betroffen sind ältere Menschen, die ihren Lebenspartner verloren haben, sowie junge Erwachsene, die für Studium oder Arbeit in eine neue Stadt gezogen sind. Auch Alleinerziehende und Menschen mit psychischen Erkrankungen leiden überdurchschnittlich häufig unter Isolation.\n\nDie gesundheitlichen Folgen der Einsamkeit sind gravierend. Forschungen zeigen, dass chronische Einsamkeit das Risiko für Herz-Kreislauf-Erkrankungen, Depressionen und Demenz erhöht. Einige Wissenschaftler vergleichen die gesundheitlichen Auswirkungen mit denen des Rauchens.\n\nPolitische Initiativen versuchen gegenzusteuern. Großbritannien hat bereits ein Ministerium für Einsamkeit eingerichtet. In Deutschland fordern Experten ähnliche Maßnahmen: mehr Begegnungsräume, stärkere Nachbarschaftsnetzwerke und eine Entstigmatisierung des Themas.',
    preguntas: [{enunciado: 'Einsamkeit in Großstädten betrifft nur ältere Menschen.', respuesta: false}, {enunciado: 'Jeder zehnte Erwachsene in Deutschland fühlt sich dauerhaft einsam.', respuesta: true}, {enunciado: 'Die Digitalisierung kann tiefgehende Beziehungen vollständig ersetzen.', respuesta: false}, {enunciado: 'Großbritannien hat ein Ministerium für Einsamkeit eingerichtet.', respuesta: true}, {enunciado: 'Chronische Einsamkeit erhöht das Risiko für Herz-Kreislauf-Erkrankungen.', respuesta: true}],
  },
  {
    slug: 'fleischkonsum-und-ethik',
    nivel: 'B2',
    titulo: 'Fleischkonsum und Ethik',
    descripcion: 'Texto sobre el debate ético del consumo de carne, la ganadería industrial y las alternativas.',
    requiresAuth: true,
    texto: 'Deutschland gehört mit einem Pro-Kopf-Verbrauch von rund 52 Kilogramm pro Jahr zu den fleischintensivsten Ländern Europas. Gleichzeitig wächst die gesellschaftliche Debatte über die ethischen, ökologischen und gesundheitlichen Dimensionen des Fleischkonsums.\n\nAus ethischer Sicht steht vor allem die industrielle Massentierhaltung in der Kritik. In konventionellen Betrieben leben Tiere häufig auf engstem Raum, ohne Zugang zu Tageslicht oder Auslauf. Tierschutzorganisationen dokumentieren regelmäßig Verstöße gegen bestehende Haltungsvorschriften. Die Frage, ob der Mensch das Recht hat, empfindungsfähige Lebewesen für seinen Genuss zu töten, wird zunehmend kontrovers diskutiert.\n\nDie ökologischen Auswirkungen der Fleischproduktion sind ebenfalls erheblich. Die Viehwirtschaft ist für etwa 14,5 Prozent der globalen Treibhausgasemissionen verantwortlich. Zudem werden riesige Flächen für den Anbau von Futtermitteln benötigt, was zur Abholzung von Regenwäldern beiträgt.\n\nAlternativen drängen auf den Markt. Pflanzliche Fleischersatzprodukte haben in den letzten Jahren enorme qualitative Fortschritte gemacht. Kultiviertes Fleisch, das aus Zellkulturen im Labor gezüchtet wird, könnte langfristig eine weitere Option darstellen, befindet sich allerdings noch im Frühstadium der Kommerzialisierung.\n\nEine vollständige Abkehr vom Fleischkonsum fordern nur wenige. Doch der Ruf nach einer Reduktion des Verbrauchs und einer artgerechteren Tierhaltung wird lauter. Letztlich muss jeder Einzelne entscheiden, welchen Preis er für seine Ernährungsgewohnheiten zu zahlen bereit ist — ethisch, ökologisch und finanziell.',
    preguntas: [{enunciado: 'Deutschland verbraucht weniger Fleisch als die meisten europäischen Länder.', respuesta: false}, {enunciado: 'Die Viehwirtschaft verursacht etwa 14,5 Prozent der globalen Treibhausgasemissionen.', respuesta: true}, {enunciado: 'Kultiviertes Fleisch ist bereits weit kommerzialisiert.', respuesta: false}, {enunciado: 'Pflanzliche Fleischersatzprodukte haben qualitative Fortschritte gemacht.', respuesta: true}, {enunciado: 'Der Text fordert eine vollständige Abkehr vom Fleischkonsum.', respuesta: false}],
  },
  {
    slug: 'sprachpolitik-gendern',
    nivel: 'B2',
    titulo: 'Sprachpolitik: Die Debatte ums Gendern',
    descripcion: 'Texto sobre el debate del lenguaje inclusivo de género en alemán y sus implicaciones sociales.',
    requiresAuth: true,
    texto: 'Kaum ein sprachpolitisches Thema polarisiert die deutsche Öffentlichkeit so stark wie das Gendern. Während Befürworter geschlechtergerechter Sprache argumentieren, dass Sprache Realität forme und die Sichtbarkeit aller Geschlechter erhöhe, sehen Kritiker darin einen unzulässigen Eingriff in die gewachsene Sprachstruktur.\n\nDie Debatte kreist um verschiedene Formen: das generische Maskulinum, bei dem die männliche Form stellvertretend für alle Geschlechter steht, die Doppelnennung (Lehrer und Lehrerinnen), den Genderstern (Lehrer*innen), den Doppelpunkt (Lehrer:innen) oder neutrale Formulierungen (Lehrkräfte). Jede Variante hat Vor- und Nachteile hinsichtlich Lesbarkeit, Inklusivität und sprachlicher Eleganz.\n\nLinguistisch ist die Frage komplex. Studien zeigen, dass das generische Maskulinum nicht so neutral wirkt, wie oft angenommen. Wenn von Ärzten die Rede ist, denken die meisten Menschen zunächst an männliche Ärzte. Gendern kann diesen Effekt abschwächen, führt aber zu längeren und teilweise sperrigen Formulierungen.\n\nPolitisch ist das Thema hochaufgeladen. Mehrere Bundesländer haben das Gendern in Schulen und Verwaltungen verboten oder eingeschränkt. Gleichzeitig verwenden viele Universitäten, Medien und Unternehmen geschlechtergerechte Sprache zunehmend selbstverständlich.\n\nJenseits der politischen Instrumentalisierung bleibt die zentrale Frage: Kann und soll Sprache gesellschaftlichen Wandel aktiv vorantreiben, oder bildet sie diesen lediglich ab? Die Antwort darauf wird die deutsche Sprachlandschaft auf Jahrzehnte hinaus prägen.',
    preguntas: [{enunciado: 'Das Gendern wird in der deutschen Öffentlichkeit einhellig befürwortet.', respuesta: false}, {enunciado: 'Studien zeigen, dass das generische Maskulinum nicht so neutral wirkt wie angenommen.', respuesta: true}, {enunciado: 'Alle Bundesländer haben das Gendern in Schulen verboten.', respuesta: false}, {enunciado: 'Viele Universitäten verwenden geschlechtergerechte Sprache zunehmend.', respuesta: true}, {enunciado: 'Der Genderstern und der Doppelpunkt sind zwei der diskutierten Formen.', respuesta: true}],
  },
  {
    slug: 'wohnungsnot-junge-generation',
    nivel: 'B2',
    titulo: 'Die Wohnungsnot der jungen Generation',
    descripcion: 'Texto sobre la crisis de vivienda para jóvenes en las grandes ciudades alemanas.',
    requiresAuth: true,
    texto: 'In München zahlt man für eine 30-Quadratmeter-Wohnung im Durchschnitt über 700 Euro Kaltmiete. In Berlin, Hamburg und Frankfurt sieht es kaum besser aus. Für viele junge Menschen, die gerade ins Berufsleben einsteigen, ist eine eigene Wohnung in der Großstadt zum unerreichbaren Luxus geworden.\n\nDie Gründe für die Wohnungskrise sind struktureller Natur. Jahrzehntelang wurde zu wenig gebaut, insbesondere im sozialen Wohnungsbau. Gleichzeitig zogen immer mehr Menschen in die Städte, während Investoren Wohnraum als Kapitalanlage entdeckten. Die Folge: Das Angebot kann die Nachfrage bei Weitem nicht decken.\n\nJunge Erwachsene trifft die Situation besonders hart. Viele können es sich nicht leisten, aus der Wohngemeinschaft auszuziehen oder eine Familie zu gründen. Die hohen Mietkosten verschlingen einen überproportionalen Anteil des Einkommens und schränken die finanzielle Zukunftsplanung ein. Eigentumserwerb bleibt ohne Erbschaft oder familiäre Unterstützung für die meisten illusorisch.\n\nDie Politik reagiert mit verschiedenen Instrumenten: Mietpreisbremse, Baukindergeld, Förderprogramme für den sozialen Wohnungsbau. Doch die Maßnahmen greifen zu langsam. Experten schätzen, dass jährlich 400.000 neue Wohnungen gebaut werden müssten, um den Bedarf zu decken. Tatsächlich werden deutlich weniger fertiggestellt.\n\nDie Wohnungsfrage ist längst zur sozialen Frage geworden. Wer wo wohnen kann, bestimmt zunehmend über Lebenschancen, Gesundheit und gesellschaftliche Teilhabe. Eine Lösung erfordert den politischen Willen, Wohnen nicht allein dem Markt zu überlassen.',
    preguntas: [{enunciado: 'In München kostet eine 30-qm-Wohnung durchschnittlich 500 Euro kalt.', respuesta: false}, {enunciado: 'Es wurde jahrzehntelang zu wenig gebaut.', respuesta: true}, {enunciado: 'Eigentumserwerb ist für junge Menschen ohne familiäre Unterstützung leicht möglich.', respuesta: false}, {enunciado: 'Experten fordern jährlich 400.000 neue Wohnungen.', respuesta: true}, {enunciado: 'Die Wohnungsfrage wird im Text als soziale Frage bezeichnet.', respuesta: true}],
  },
  {
    slug: 'kuenstliche-intelligenz-arbeitswelt',
    nivel: 'B2',
    titulo: 'Künstliche Intelligenz und die Arbeitswelt',
    descripcion: 'Texto sobre el impacto de la inteligencia artificial en el mundo laboral, automatización y nuevos perfiles profesionales.',
    requiresAuth: true,
    texto: 'Die rasante Entwicklung künstlicher Intelligenz verändert die Arbeitswelt grundlegend. Studien des Weltwirtschaftsforums prognostizieren, dass bis 2030 etwa 85 Millionen Arbeitsplätze weltweit durch Automatisierung wegfallen könnten, gleichzeitig aber 97 Millionen neue entstehen. Die entscheidende Frage ist, ob die Gesellschaft diesen Übergang sozialverträglich gestalten kann.\n\nBetroffen sind längst nicht nur repetitive Tätigkeiten in der Produktion. Generative KI-Systeme können inzwischen Texte verfassen, Bilder erstellen, Programmcode schreiben und juristische Dokumente analysieren. Berufe, die lange als unantastbar galten — Journalisten, Designer, Programmierer, Anwälte — sehen sich mit der Frage konfrontiert, welche Aspekte ihrer Arbeit automatisierbar sind.\n\nOptimisten verweisen darauf, dass technologischer Wandel historisch stets mehr Arbeitsplätze geschaffen als vernichtet hat. Die Industrialisierung, die Elektrifizierung und die Computerrevolution haben jeweils Befürchtungen ausgelöst, die sich letztlich nicht bewahrheitet haben. Skeptiker hingegen argumentieren, dass die Geschwindigkeit des KI-Wandels beispiellos sei und die Gesellschaft weniger Zeit für die Anpassung habe.\n\nEntscheidend wird die Aus- und Weiterbildung sein. Arbeitnehmer müssen in die Lage versetzt werden, mit KI-Systemen zusammenzuarbeiten statt gegen sie zu konkurrieren. Lebenslanges Lernen darf kein Schlagwort bleiben, sondern muss durch konkrete Förderprogramme und flexible Bildungsangebote Realität werden.\n\nDie ethische Dimension darf dabei nicht vernachlässigt werden. Algorithmen, die über Bewerbungen, Beförderungen oder Kündigungen entscheiden, müssen transparent und diskriminierungsfrei sein. Die Verantwortung für KI-gestützte Entscheidungen muss letztlich beim Menschen verbleiben.',
    preguntas: [{enunciado: 'Das Weltwirtschaftsforum prognostiziert nur Jobverluste durch KI.', respuesta: false}, {enunciado: 'Generative KI-Systeme können Texte verfassen und Programmcode schreiben.', respuesta: true}, {enunciado: 'Historisch hat technologischer Wandel immer nur Arbeitsplätze vernichtet.', respuesta: false}, {enunciado: 'Arbeitnehmer müssen lernen, mit KI-Systemen zusammenzuarbeiten.', respuesta: true}, {enunciado: 'Algorithmen, die über Bewerbungen entscheiden, müssen transparent sein.', respuesta: true}],
  },
  {
    slug: 'urban-gardening-bewegung',
    nivel: 'B2',
    titulo: 'Die Urban-Gardening-Bewegung',
    descripcion: 'Texto sobre el movimiento de jardinería urbana, huertos comunitarios y su impacto social y ecológico.',
    requiresAuth: true,
    texto: 'Auf einer ehemaligen Industriebrache im Berliner Stadtteil Neukölln wachsen Tomaten, Kürbisse und Sonnenblumen. Was vor zehn Jahren als spontanes Nachbarschaftsprojekt begann, ist heute einer von über 700 Gemeinschaftsgärten in deutschen Städten. Die Urban-Gardening-Bewegung hat sich von einer Nischenerscheinung zu einem gesamtgesellschaftlichen Phänomen entwickelt.\n\nDie Motive der Stadtgärtner sind vielfältig. Für manche steht der ökologische Aspekt im Vordergrund: Sie wollen wissen, woher ihr Essen kommt, und lehnen die industrielle Lebensmittelproduktion ab. Andere suchen einen Ausgleich zum digitalen Arbeitsalltag und schätzen die körperliche Arbeit an der frischen Luft. Für viele ist der Garten aber vor allem ein sozialer Ort, an dem Menschen unterschiedlicher Herkunft, Altersgruppen und sozialer Schichten zusammenkommen.\n\nPolitisch sind die Gärten nicht unumstritten. Immobilienentwickler sehen in den Brachflächen lukratives Bauland. In mehreren Städten mussten Gemeinschaftsgärten bereits Neubauprojekten weichen. Aktivisten fordern deshalb eine rechtliche Absicherung urbaner Gärten als öffentliche Grünflächen.\n\nWissenschaftliche Studien bestätigen den positiven Einfluss der Stadgärten auf die Biodiversität, das Stadtklima und das psychische Wohlbefinden der Beteiligten. In einer zunehmend verdichteten und digitalisierten Welt bieten sie einen analogen Gegenentwurf: einen Ort, an dem Wachstum keine Quartalszahlen meint, sondern den Keimling einer Tomate.',
    preguntas: [{enunciado: 'Es gibt über 700 Gemeinschaftsgärten in deutschen Städten.', respuesta: true}, {enunciado: 'Die Urban-Gardening-Bewegung ist eine rein ökologische Initiative.', respuesta: false}, {enunciado: 'Immobilienentwickler unterstützen die Gemeinschaftsgärten ohne Vorbehalte.', respuesta: false}, {enunciado: 'Der Garten in Neukölln begann als spontanes Nachbarschaftsprojekt.', respuesta: true}, {enunciado: 'Studien bestätigen den positiven Einfluss auf Biodiversität und Stadtklima.', respuesta: true}],
  },
  {
    slug: 'digitale-souveraenitaet',
    nivel: 'B2',
    titulo: 'Digitale Souveränität Europas',
    descripcion: 'Texto sobre la dependencia tecnológica de Europa de empresas estadounidenses y chinas, y los esfuerzos por una autonomía digital.',
    requiresAuth: true,
    texto: 'Europa befindet sich in einer digitalen Abhängigkeit, die zunehmend als strategisches Risiko erkannt wird. Die dominierenden Betriebssysteme, Cloud-Dienste, sozialen Netzwerke und Suchmaschinen stammen fast ausschließlich aus den USA oder China. Europäische Unternehmen, Behörden und Bürger speichern ihre sensibelsten Daten auf Servern amerikanischer Konzerne, die dem US-amerikanischen Recht unterliegen.\n\nDer Begriff der digitalen Souveränität beschreibt das Ziel, technologische Selbstbestimmung zurückzugewinnen. Dies umfasst die Fähigkeit, eigene digitale Infrastrukturen zu betreiben, Schlüsseltechnologien zu entwickeln und die Regeln des digitalen Raums selbst zu gestalten. Das europäische Cloud-Projekt Gaia-X, der Digital Markets Act und die KI-Verordnung sind Versuche, diesen Anspruch politisch und regulatorisch umzusetzen.\n\nKritiker bemängeln jedoch, dass Europa den technologischen Wettbewerb bereits verloren habe. Im Bereich der Halbleiterproduktion, der großen KI-Modelle und der Plattformökonomie fehlt es an europäischen Champions, die mit den globalen Marktführern konkurrieren könnten. Die Bürokratie der EU und die Fragmentierung in 27 nationale Märkte erschwerden Innovation zusätzlich.\n\nBefürworter der digitalen Souveränität betonen hingegen, dass Europa seine regulatorische Stärke als Gestaltungsinstrument nutzen solle. Die Datenschutz-Grundverordnung hat weltweit Standards gesetzt und gezeigt, dass normative Macht ein Gegengewicht zu technologischer Dominanz darstellen kann.\n\nLetztlich geht es um mehr als Technologie. Digitale Souveränität berührt fundamentale Fragen der Demokratie: Wer kontrolliert die Informationsflüsse, wer setzt die Regeln, und wer profitiert von der Datenwertschöpfung? Ohne eigene digitale Infrastruktur riskiert Europa, zum bloßen Konsumenten einer von anderen definierten digitalen Ordnung zu werden.',
    preguntas: [{enunciado: 'Die meisten dominierenden digitalen Dienste stammen aus Europa.', respuesta: false}, {enunciado: 'Gaia-X ist ein europäisches Cloud-Projekt.', respuesta: true}, {enunciado: 'Europa hat nach Meinung aller Experten den technologischen Wettbewerb gewonnen.', respuesta: false}, {enunciado: 'Die DSGVO hat weltweit Standards im Datenschutz gesetzt.', respuesta: true}, {enunciado: 'Digitale Souveränität berührt Fragen der Demokratie.', respuesta: true}],
  },
  {
    slug: 'der-friseurbesuch',
    nivel: 'A2',
    titulo: 'Der Friseurbesuch',
    descripcion: 'Sophie hat einen Termin beim Friseur und erzählt von ihrem Besuch.',
    texto: `Sophie hat lange braune Haare, aber sie findet ihre Frisur langweilig. Deshalb hat sie letzte Woche einen Termin beim Friseur gemacht. Der Salon ist in der Nähe von ihrer Wohnung, und Sophie ist dort schon oft gewesen. Am Samstagmorgen ist sie pünktlich um zehn Uhr gekommen.

Die Friseurin hat Sophie zuerst gefragt, was sie sich wünscht. Sophie hat gesagt, dass sie kürzere Haare möchte, weil die langen Haare im Sommer zu warm sind. Die Friseurin hat die Haare gewaschen, geschnitten und dann geföhnt. Nach einer Stunde war Sophie fertig, und sie hat sich im Spiegel angeschaut.

Sophie war sehr zufrieden mit der neuen Frisur. Sie hat der Friseurin gedankt und zehn Euro Trinkgeld gegeben. Wenn sie das nächste Mal Zeit hat, möchte sie auch ihre Haare färben lassen. Auf dem Weg nach Hause hat sie ihrer Mutter ein Foto von der neuen Frisur geschickt.`,
    preguntas: [
      { enunciado: 'Sophie hat lange braune Haare gehabt, bevor sie zum Friseur gegangen ist.', respuesta: true },
      { enunciado: 'Der Friseursalon ist weit von Sophies Wohnung entfernt.', respuesta: false },
      { enunciado: 'Sophie wollte kürzere Haare, weil ihr die langen Haare im Sommer zu warm sind.', respuesta: true },
      { enunciado: 'Sophie war mit der neuen Frisur nicht zufrieden.', respuesta: false },
      { enunciado: 'Sophie möchte irgendwann auch ihre Haare färben lassen.', respuesta: true },
    ],
  },
  {
    slug: 'die-fahrpruefung',
    nivel: 'A2',
    titulo: 'Die Fahrprüfung',
    descripcion: 'Tom bereitet sich auf seine Fahrprüfung vor und berichtet von einem aufregenden Tag.',
    texto: `Tom ist achtzehn Jahre alt und macht seit drei Monaten den Führerschein. Er hat schon viele Fahrstunden gehabt und fühlt sich ziemlich sicher. Trotzdem ist er nervös, weil die praktische Prüfung heute stattfindet. Am Morgen hat er kaum gefrühstückt, weil sein Magen so aufgeregt war.

Um neun Uhr ist Tom mit seinem Fahrlehrer zur Prüfungsstelle gefahren. Dort hat ihn eine Prüferin begrüßt und sich neben ihn ins Auto gesetzt. Zuerst musste Tom durch die Innenstadt fahren, dann auf die Autobahn und schließlich einparken. Er hat ein paar kleine Fehler gemacht, aber insgesamt ist er ruhig geblieben.

Nach der Prüfung hat die Prüferin gelächelt und gesagt, dass Tom bestanden hat. Tom konnte es zuerst nicht glauben, weil er so nervös gewesen war. Er hat sofort seine Eltern angerufen, und am Abend hat die ganze Familie zusammen gefeiert. Jetzt darf Tom endlich allein Auto fahren.`,
    preguntas: [
      { enunciado: 'Tom macht seit drei Monaten den Führerschein.', respuesta: true },
      { enunciado: 'Tom war am Morgen der Prüfung völlig entspannt.', respuesta: false },
      { enunciado: 'Die Prüferin hat sich neben Tom ins Auto gesetzt.', respuesta: true },
      { enunciado: 'Tom hat die Prüfung nicht bestanden.', respuesta: false },
      { enunciado: 'Am Abend hat die Familie zusammen gefeiert.', respuesta: true },
    ],
  },
  {
    slug: 'die-nachhilfestunde',
    nivel: 'A2',
    titulo: 'Die Nachhilfestunde',
    descripcion: 'Lukas hat Probleme in Mathe und bekommt Nachhilfe von seiner Nachbarin.',
    texto: `Lukas geht in die neunte Klasse und hat große Probleme in Mathe. Seine letzte Note war eine Fünf, und seine Eltern machen sich Sorgen. Weil seine Nachbarin Julia Mathematik studiert, hat sie angeboten, ihm einmal pro Woche zu helfen. Lukas war zuerst ein bisschen schüchtern, aber er hat die Hilfe gern angenommen.

Am Dienstagnachmittag ist Julia zu Lukas nach Hause gekommen. Sie haben sich an den Küchentisch gesetzt und die Hausaufgaben zusammen gemacht. Julia hat geduldig erklärt, wie man Gleichungen löst, und Lukas hat viele Fragen gestellt. Nach einer Stunde hat er die Aufgaben endlich verstanden.

Seit der ersten Nachhilfestunde ist Lukas viel motivierter. Er übt jeden Tag ein bisschen und hat keine Angst mehr vor dem Matheunterricht. In der nächsten Klassenarbeit hat er eine Drei geschrieben, und seine Eltern waren sehr stolz. Lukas hat Julia zum Dank ein Stück Kuchen gebacken.`,
    preguntas: [
      { enunciado: 'Lukas hatte in Mathe die Note Fünf.', respuesta: true },
      { enunciado: 'Julias Nachhilfe findet jeden Tag statt.', respuesta: false },
      { enunciado: 'Julia hat Lukas geduldig erklärt, wie man Gleichungen löst.', respuesta: true },
      { enunciado: 'Lukas hat in der nächsten Klassenarbeit eine schlechtere Note bekommen.', respuesta: false },
      { enunciado: 'Lukas hat Julia zum Dank einen Kuchen gebacken.', respuesta: true },
    ],
  },
  {
    slug: 'der-babysitterjob',
    nivel: 'A2',
    titulo: 'Der Babysitterjob',
    descripcion: 'Laura passt zum ersten Mal auf zwei Kinder auf und erlebt einen ereignisreichen Abend.',
    texto: `Laura ist sechzehn Jahre alt und möchte gern eigenes Geld verdienen. Ihre Nachbarn, Familie Berger, haben zwei kleine Kinder und suchen einen Babysitter für den Freitagabend. Laura hat sich sofort gemeldet, weil sie Kinder mag und schon Erfahrung mit ihrem kleinen Cousin hat.

Am Freitag ist Laura um sechs Uhr zu Familie Berger gekommen. Die Eltern sind ins Kino gegangen, und Laura ist mit den Kindern allein zu Hause geblieben. Zuerst haben sie zusammen gegessen, dann haben sie ein Spiel gespielt. Um acht Uhr wollte der kleine Junge nicht ins Bett gehen, aber Laura hat ihm ruhig eine Geschichte vorgelesen, und danach ist er schnell eingeschlafen.

Als die Eltern um elf Uhr zurückgekommen sind, haben sie sich sehr gefreut, weil alles gut gelaufen ist. Sie haben Laura fünfzig Euro gegeben und gefragt, ob sie auch nächste Woche kommen kann. Laura hat sofort Ja gesagt, weil ihr der Abend viel Spaß gemacht hat.`,
    preguntas: [
      { enunciado: 'Familie Berger hat zwei kleine Kinder.', respuesta: true },
      { enunciado: 'Die Eltern sind am Freitagabend zu Hause geblieben.', respuesta: false },
      { enunciado: 'Der kleine Junge ist sofort ohne Probleme eingeschlafen.', respuesta: false },
      { enunciado: 'Die Eltern waren zufrieden, als sie nach Hause gekommen sind.', respuesta: true },
      { enunciado: 'Laura hat abgelehnt, noch einmal zu babysitten.', respuesta: false },
    ],
  },
  {
    slug: 'die-reise-nach-koeln',
    nivel: 'A2',
    titulo: 'Eine Reise nach Köln',
    descripcion: 'Familie Wolf besucht Köln und entdeckt den Dom und die Altstadt.',
    texto: `Familie Wolf hat am Wochenende eine Reise nach Köln gemacht. Sie sind früh am Samstagmorgen mit dem Zug losgefahren, weil die Fahrt von ihrer Stadt nur zwei Stunden dauert. Die Kinder haben sich sehr auf den Ausflug gefreut, weil sie den berühmten Kölner Dom noch nie gesehen haben.

In Köln sind sie zuerst zum Dom gegangen und haben die vielen Treppen bis zur Turmspitze erklommen. Von oben hatten sie einen tollen Blick über die ganze Stadt und den Rhein. Danach sind sie durch die Altstadt spaziert und haben in einem kleinen Restaurant zu Mittag gegessen. Der Vater hat eine typische Kölner Wurst probiert, und die Mutter hat lieber einen Salat bestellt.

Am Nachmittag haben sie noch das Schokoladenmuseum besucht, weil die Kinder unbedingt sehen wollten, wie Schokolade hergestellt wird. Am Ende des Tages waren alle sehr müde, aber glücklich. Mit dem letzten Zug sind sie am Abend wieder nach Hause gefahren.`,
    preguntas: [
      { enunciado: 'Familie Wolf ist mit dem Auto nach Köln gefahren.', respuesta: false },
      { enunciado: 'Die Kinder haben den Kölner Dom vorher noch nie gesehen.', respuesta: true },
      { enunciado: 'Von der Turmspitze hatten sie keinen guten Blick über die Stadt.', respuesta: false },
      { enunciado: 'Am Nachmittag haben sie das Schokoladenmuseum besucht.', respuesta: true },
      { enunciado: 'Familie Wolf ist noch eine Nacht in Köln geblieben.', respuesta: false },
    ],
  },
  {
    slug: 'die-hochzeitsfeier',
    nivel: 'A2',
    titulo: 'Die Hochzeitsfeier',
    descripcion: 'Julia erzählt von der Hochzeit ihrer Schwester und einem unvergesslichen Familienfest.',
    texto: `Julias große Schwester Nina hat letzten Sommer geheiratet. Die ganze Familie hat sich schon Wochen vorher auf das Fest gefreut. Julia musste ein neues Kleid kaufen, weil sie als Trauzeugin eine wichtige Rolle bei der Feier hatte.

Die Hochzeit hat in einem kleinen Dorf am See stattgefunden. Am Morgen sind Nina und ihr Freund Paul in die Kirche gegangen, und viele Gäste haben geweint, weil die Zeremonie so schön war. Danach sind alle zu einem Gasthaus gefahren, wo es ein großes Abendessen gegeben hat. Die Kinder haben im Garten gespielt, während die Erwachsenen getanzt haben.

Am späten Abend hat Julia eine Rede für ihre Schwester gehalten, und alle Gäste haben laut geklatscht. Nina war sehr gerührt, dass Julia so persönliche Worte gefunden hat. Die Feier hat bis spät in die Nacht gedauert, und am nächsten Tag war die ganze Familie sehr müde, aber überglücklich.`,
    preguntas: [
      { enunciado: 'Julia war bei der Hochzeit die Trauzeugin.', respuesta: true },
      { enunciado: 'Die Hochzeit hat in einer großen Stadt stattgefunden.', respuesta: false },
      { enunciado: 'Die Kinder haben während der Zeremonie im Garten gespielt.', respuesta: false },
      { enunciado: 'Julia hat eine Rede für ihre Schwester gehalten.', respuesta: true },
      { enunciado: 'Die Feier ist schon früh am Abend zu Ende gegangen.', respuesta: false },
    ],
  },
  {
    slug: 'co2-steuer-und-klimapolitik',
    nivel: 'B2',
    titulo: 'CO2-Steuer und Klimapolitik – Ein wirksames Instrument?',
    descripcion: 'Die Debatte um eine CO2-Steuer als Mittel gegen den Klimawandel.',
    texto: `Seit Jahren wird in Deutschland und Europa darüber diskutiert, wie der Ausstoß von Treibhausgasen wirksam reduziert werden kann. Eine der meistdiskutierten Maßnahmen ist die sogenannte CO2-Steuer, bei der Emissionen von fossilen Brennstoffen mit einem festen Preis belegt werden. Befürworter argumentieren, dass dadurch klimaschädliches Verhalten teurer und klimafreundliches Verhalten automatisch attraktiver würde, ohne dass der Staat einzelne Produkte verbieten müsste.

Kritiker hingegen weisen darauf hin, dass eine pauschale Steuer vor allem einkommensschwache Haushalte treffen würde, da diese einen größeren Anteil ihres Einkommens für Heizung und Mobilität ausgeben. Wenn die zusätzlichen Einnahmen nicht in Form eines Klimageldes an die Bürger zurückgegeben würden, könnte die Steuer als sozial ungerecht wahrgenommen werden. Aus diesem Grund fordern viele Ökonomen ein Rückerstattungsmodell, bei dem jeder Bürger unabhängig vom Verbrauch denselben Betrag erhält.

Obwohl mehrere europäische Länder bereits eine CO2-Bepreisung eingeführt haben, sind die Auswirkungen auf das tatsächliche Emissionsverhalten bisher schwer messbar, da gleichzeitig auch andere Faktoren wie technologischer Fortschritt eine Rolle spielen. Trotzdem gilt die CO2-Steuer in der Wissenschaft als eines der wirkungsvollsten Instrumente der Klimapolitik, sofern sie sozial ausgewogen gestaltet wird. Die Frage, wie hoch der Preis pro Tonne CO2 tatsächlich sein müsste, um das Pariser Klimaziel zu erreichen, wird jedoch weiterhin kontrovers diskutiert.`,
    preguntas: [
      { enunciado: 'Die CO2-Steuer belegt den Ausstoß fossiler Brennstoffe mit einem Preis.', respuesta: true },
      { enunciado: 'Kritiker sehen die CO2-Steuer als sozial völlig unproblematisch an.', respuesta: false },
      { enunciado: 'Ein Klimageld könnte die soziale Ungerechtigkeit der Steuer ausgleichen.', respuesta: true },
      { enunciado: 'Alle europäischen Länder lehnen eine CO2-Bepreisung strikt ab.', respuesta: false },
      { enunciado: 'Die Wissenschaft betrachtet die CO2-Steuer als potenziell wirkungsvolles Klimainstrument.', respuesta: true },
    ],
  },
  {
    slug: 'digitalisierung-der-verwaltung',
    nivel: 'B2',
    titulo: 'Digitalisierung der Verwaltung – Deutschland auf dem Prüfstand',
    descripcion: 'Warum die deutsche Verwaltung im internationalen Vergleich bei der Digitalisierung hinterherhinkt.',
    texto: `Während in vielen europäischen Ländern Behördengänge längst online erledigt werden können, müssen Bürgerinnen und Bürger in Deutschland für einen neuen Personalausweis oder eine Ummeldung häufig noch persönlich erscheinen. Diese Diskrepanz wird seit Jahren kritisiert, doch die Umsetzung des sogenannten Onlinezugangsgesetzes, das eigentlich alle Verwaltungsleistungen digital verfügbar machen sollte, verläuft nur schleppend.

Die Gründe dafür sind vielfältig. Zum einen fehlt es vielerorts an einheitlichen technischen Standards zwischen Bund, Ländern und Kommunen, sodass jede Behörde teilweise eigene Softwarelösungen entwickelt hat, die nicht miteinander kompatibel sind. Zum anderen wird häufig bemängelt, dass Datenschutzbedenken zwar berechtigt seien, aber in der Praxis oft als Ausrede benutzt würden, um notwendige Reformen zu verzögern. Wäre die Digitalisierung konsequenter vorangetrieben worden, hätten viele Prozesse schon heute erheblich beschleunigt werden können.

Befürworter einer schnelleren Digitalisierung verweisen auf Länder wie Estland, wo nahezu alle Behördengänge komplett online möglich sind und selbst Wahlen über das Internet durchgeführt werden können. Ein solches System würde nicht nur Zeit und Kosten sparen, sondern auch die Verwaltung insgesamt transparenter machen. Gleichzeitig warnen Experten davor, die soziale Dimension zu vergessen: Ältere oder technisch weniger versierte Menschen dürften bei der digitalen Transformation nicht abgehängt werden, weshalb analoge Alternativen weiterhin bestehen bleiben müssten.`,
    preguntas: [
      { enunciado: 'In Deutschland können bereits alle Behördengänge vollständig online erledigt werden.', respuesta: false },
      { enunciado: 'Das Onlinezugangsgesetz sollte Verwaltungsleistungen digital verfügbar machen.', respuesta: true },
      { enunciado: 'Alle Behörden in Deutschland nutzen dieselbe, einheitliche Software.', respuesta: false },
      { enunciado: 'Estland gilt als Vorbild für digitale Verwaltungsprozesse.', respuesta: true },
      { enunciado: 'Experten fordern, dass analoge Alternativen komplett abgeschafft werden.', respuesta: false },
    ],
  },
  {
    slug: 'schulnoten-abschaffen',
    nivel: 'B2',
    titulo: 'Sollen Schulnoten abgeschafft werden?',
    descripcion: 'Eine Debatte über Sinn und Unsinn klassischer Ziffernnoten im Schulsystem.',
    texto: `In der Bildungsdebatte wird immer wieder die Frage gestellt, ob klassische Schulnoten von eins bis sechs noch zeitgemäß sind. Befürworter einer Abschaffung argumentieren, dass Noten den Leistungsdruck auf Schülerinnen und Schüler unnötig erhöhen und wenig über die tatsächlichen Fähigkeiten eines Kindes aussagen. Stattdessen plädieren sie für ausführliche schriftliche Rückmeldungen, die individuelle Stärken und Entwicklungsmöglichkeiten aufzeigen, anstatt eine einzelne Zahl zu vergeben.

Gegner dieser Position halten dagegen, dass Noten eine einfache und vergleichbare Orientierung bieten, sowohl für Schüler und Eltern als auch für spätere Arbeitgeber und Universitäten. Ohne Noten, so ihr Argument, müsste ein völlig neues Bewertungssystem entwickelt werden, das deutlich mehr Zeit und Aufwand von Lehrkräften verlangen würde. Nachdem einige Bundesländer bereits Modellversuche mit notenfreien Grundschulen durchgeführt haben, zeigen erste Studien gemischte Ergebnisse: Zwar sank der Leistungsdruck, allerdings hatten manche Kinder Schwierigkeiten, ihre eigene Leistung realistisch einzuschätzen.

Letztlich scheint klar zu sein, dass es keine einfache Lösung gibt, die allen Beteiligten gerecht wird. Während in Ländern wie Finnland alternative Bewertungsmodelle seit Langem etabliert sind, hält man in Deutschland trotz aller Kritik überwiegend am traditionellen Notensystem fest. Ob sich das in Zukunft ändern wird, hängt nicht zuletzt davon ab, wie überzeugend die Ergebnisse weiterer Modellversuche ausfallen.`,
    preguntas: [
      { enunciado: 'Befürworter einer Abschaffung sehen Noten als unnötigen Leistungsdruck.', respuesta: true },
      { enunciado: 'Gegner der Abschaffung befürchten einen höheren Aufwand für Lehrkräfte ohne Noten.', respuesta: true },
      { enunciado: 'Alle Bundesländer haben Noten in Grundschulen bereits vollständig abgeschafft.', respuesta: false },
      { enunciado: 'Studien zu notenfreien Grundschulen zeigen ausschließlich positive Ergebnisse.', respuesta: false },
      { enunciado: 'In Deutschland hält man überwiegend am traditionellen Notensystem fest.', respuesta: true },
    ],
  },
  {
    slug: 'medienkonzentration',
    nivel: 'B2',
    titulo: 'Medienkonzentration und Meinungsvielfalt',
    descripcion: 'Wie wenige große Konzerne die Medienlandschaft prägen und was das für die Demokratie bedeutet.',
    texto: `In vielen westlichen Ländern gehört ein großer Teil der Zeitungen, Fernsehsender und Onlineportale nur wenigen großen Medienkonzernen. Diese Entwicklung, die als Medienkonzentration bezeichnet wird, sorgt seit Jahren für Diskussionen unter Journalisten, Politikern und Medienwissenschaftlern. Kritiker befürchten, dass eine geringe Zahl von Eigentümern die öffentliche Meinung zu stark beeinflussen könnte, wenn wichtige Nachrichtenquellen letztlich denselben wirtschaftlichen Interessen unterliegen.

Besonders problematisch wird die Situation dann gesehen, wenn Medienunternehmen gleichzeitig in anderen Branchen wie der Telekommunikation oder dem Onlinehandel tätig sind, da dadurch Interessenkonflikte entstehen könnten. Sollte beispielsweise über ein Unternehmen berichtet werden, das demselben Konzern gehört wie die berichtende Redaktion, wäre eine unabhängige und kritische Berichterstattung kaum noch gewährleistet. Aus diesem Grund fordern Medienwissenschaftler strengere gesetzliche Regelungen, die eine übermäßige Konzentration von Medienbesitz verhindern sollen.

Auf der anderen Seite verweisen Vertreter der Medienbranche darauf, dass große Konzerne notwendig seien, um angesichts sinkender Werbeeinnahmen und der Konkurrenz durch internationale Digitalplattformen wirtschaftlich überleben zu können. Kleine, unabhängige Medienhäuser könnten den technologischen und finanziellen Anforderungen der digitalen Transformation oft nicht mehr allein gewachsen sein. Zwischen dem Wunsch nach wirtschaftlicher Stabilität und dem demokratischen Bedürfnis nach vielfältiger, unabhängiger Berichterstattung besteht somit ein Spannungsfeld, das bislang nicht zufriedenstellend gelöst wurde.`,
    preguntas: [
      { enunciado: 'Medienkonzentration bedeutet, dass viele Medien wenigen großen Konzernen gehören.', respuesta: true },
      { enunciado: 'Kritiker sehen in der Medienkonzentration keine Gefahr für die Meinungsvielfalt.', respuesta: false },
      { enunciado: 'Manche Medienunternehmen sind gleichzeitig in anderen Branchen wie der Telekommunikation tätig.', respuesta: true },
      { enunciado: 'Vertreter der Medienbranche halten große Konzerne für wirtschaftlich überflüssig.', respuesta: false },
      { enunciado: 'Das Spannungsfeld zwischen wirtschaftlicher Stabilität und Meinungsvielfalt gilt als vollständig gelöst.', respuesta: false },
    ],
  },
  {
    slug: 'tierversuche-in-der-forschung',
    nivel: 'B2',
    titulo: 'Tierversuche in der Forschung – Notwendigkeit oder ethisches Dilemma?',
    descripcion: 'Die kontroverse Debatte um Tierversuche zwischen wissenschaftlichem Fortschritt und Tierschutz.',
    texto: `Tierversuche gehören seit Jahrzehnten zu den umstrittensten Themen der Wissenschaft. Befürworter argumentieren, dass viele medizinische Durchbrüche, von Impfstoffen bis zu Krebstherapien, ohne Versuche an Tieren nicht möglich gewesen wären, da bestimmte biologische Prozesse bislang nur im lebenden Organismus vollständig untersucht werden können. Ohne diese Forschung, so ihr Argument, müssten neue Medikamente direkt am Menschen getestet werden, was ein erheblich größeres Risiko darstellen würde.

Tierschützer und viele Wissenschaftler halten dem entgegen, dass alternative Methoden wie Zellkulturen, Computersimulationen und sogenannte Organ-on-a-Chip-Verfahren in den letzten Jahren enorme Fortschritte gemacht haben. Diese Methoden könnten in vielen Fällen aussagekräftigere Ergebnisse liefern als Tierversuche, da menschliche Zellen verwendet werden, anstatt die Ergebnisse von Tieren auf den Menschen zu übertragen. Zudem wird kritisiert, dass ein erheblicher Teil der Tierversuche, die in der Grundlagenforschung durchgeführt werden, nie zu konkreten medizinischen Anwendungen führt.

In der Europäischen Union gilt inzwischen das sogenannte 3R-Prinzip, nach dem Tierversuche wann immer möglich vermieden, in ihrer Anzahl reduziert und in ihrer Belastung für die Tiere verbessert werden sollen. Trotzdem bleibt umstritten, wie schnell ein vollständiger Verzicht auf Tierversuche realistisch erreichbar wäre. Während einige Forscher glauben, dass alternative Methoden Tierversuche innerhalb weniger Jahrzehnte vollständig ersetzen könnten, halten andere diese Einschätzung angesichts der Komplexität lebender Organismen für zu optimistisch.`,
    preguntas: [
      { enunciado: 'Befürworter von Tierversuchen verweisen auf medizinische Durchbrüche wie Impfstoffe.', respuesta: true },
      { enunciado: 'Alternative Methoden wie Zellkulturen haben in den letzten Jahren keine Fortschritte gemacht.', respuesta: false },
      { enunciado: 'Das 3R-Prinzip fordert, Tierversuche zu vermeiden, zu reduzieren und zu verbessern.', respuesta: true },
      { enunciado: 'Alle Forscher sind sich einig, dass Tierversuche in wenigen Jahren komplett verschwinden werden.', respuesta: false },
      { enunciado: 'Ein Teil der Tierversuche in der Grundlagenforschung führt nie zu konkreten Anwendungen.', respuesta: true },
    ],
  },
  {
    slug: 'smartphone-sucht-bei-jugendlichen',
    nivel: 'B2',
    titulo: 'Smartphone-Sucht bei Jugendlichen',
    descripcion: 'Wie exzessive Handynutzung den Alltag junger Menschen beeinflusst und was Experten empfehlen.',
    texto: `Kaum ein Gegenstand hat den Alltag Jugendlicher in den letzten Jahren so verändert wie das Smartphone. Studien zeigen, dass Jugendliche in Deutschland durchschnittlich mehrere Stunden täglich am Bildschirm verbringen, wobei ein erheblicher Teil dieser Zeit auf soziale Netzwerke und Videoplattformen entfällt. Psychologen warnen zunehmend davor, dass eine übermäßige Nutzung Merkmale einer echten Verhaltenssucht annehmen kann, die sich unter anderem durch Kontrollverlust, Entzugserscheinungen und eine Vernachlässigung anderer Lebensbereiche äußert.

Besonders besorgniserregend finden Experten, dass ständige Erreichbarkeit und der Vergleich mit scheinbar perfekten Leben anderer Nutzer erheblichen psychischen Druck erzeugen können. Nachdem mehrere Langzeitstudien einen Zusammenhang zwischen intensiver Social-Media-Nutzung und erhöhten Angst- sowie Depressionswerten bei Jugendlichen festgestellt haben, fordern Kinderärzte und Bildungsexperten strengere Regeln für Bildschirmzeiten, insbesondere bei jüngeren Kindern. Manche Länder diskutieren sogar über gesetzliche Mindestaltersgrenzen für soziale Medien.

Gleichzeitig betonen andere Fachleute, dass nicht das Smartphone an sich das Problem sei, sondern der unreflektierte Umgang damit. Würden Eltern und Schulen gemeinsam einen bewussteren Medienkonsum vermitteln, könnten viele negative Folgen vermieden werden, ohne dass Jugendliche vollständig von digitalen Technologien ausgeschlossen werden müssten. Entscheidend sei letztlich, so der Konsens vieler Experten, ein ausgewogenes Verhältnis zwischen Online- und Offline-Aktivitäten zu finden.`,
    preguntas: [
      { enunciado: 'Jugendliche in Deutschland verbringen laut Studien durchschnittlich mehrere Stunden täglich am Bildschirm.', respuesta: true },
      { enunciado: 'Psychologen sehen bei übermäßiger Smartphone-Nutzung keinerlei Suchtmerkmale.', respuesta: false },
      { enunciado: 'Studien zeigen einen Zusammenhang zwischen intensiver Social-Media-Nutzung und erhöhten Angstwerten.', respuesta: true },
      { enunciado: 'Alle Experten fordern, dass Jugendliche komplett auf Smartphones verzichten sollen.', respuesta: false },
      { enunciado: 'Ein bewussterer Umgang mit Medien wird von manchen Fachleuten als wichtiger Lösungsansatz gesehen.', respuesta: true },
    ],
  },
];

// Permite importar desde Node.js (generate-pages.js) sin romper el navegador
if (typeof module !== 'undefined') module.exports = TEXTOS;
