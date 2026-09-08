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
  {
    slug: 'der-tierarzt',
    nivel: 'A1',
    titulo: 'Der Tierarzt',
    descripcion: 'Tim bringt seinen kranken Hund Bruno zum Tierarzt.',
    texto: `Tim hat einen Hund. Der Hund heißt Bruno. Bruno ist drei Jahre alt und sehr lieb. Aber heute ist Bruno krank. Er isst nicht und schläft den ganzen Tag. Tim macht sich Sorgen und ruft den Tierarzt an.

Am Nachmittag geht Tim mit Bruno zum Tierarzt. Die Praxis ist nicht weit von zu Hause. Im Wartezimmer sitzen auch eine Katze und ein Kaninchen. Bruno ist ein bisschen ängstlich, aber Tim streichelt ihn. Der Tierarzt untersucht Bruno genau und misst seine Temperatur.

„Bruno hat nur eine kleine Erkältung", sagt der Tierarzt. „Er braucht viel Wasser und Ruhe." Tim ist erleichtert. Er bekommt Medizin für Bruno und geht glücklich nach Hause. Am Abend spielt Bruno schon wieder ein bisschen im Garten.`,
    preguntas: [
      { enunciado: 'Bruno ist der Hund von Tim.', respuesta: true },
      { enunciado: 'Bruno ist heute sehr aktiv und isst viel.', respuesta: false },
      { enunciado: 'Tim geht am Morgen zum Tierarzt.', respuesta: false },
      { enunciado: 'Im Wartezimmer sind auch andere Tiere.', respuesta: true },
      { enunciado: 'Der Tierarzt sagt, dass Bruno sehr krank ist.', respuesta: false },
    ],
  },
  {
    slug: 'mein-lieblingsessen',
    nivel: 'A1',
    titulo: 'Mein Lieblingsessen',
    descripcion: 'Lisa erzählt von ihrem Lieblingsessen und dem Sonntag mit ihrer Familie.',
    texto: `Lisa isst gern Nudeln mit Tomatensauce. Das ist ihr Lieblingsessen. Sie kocht es fast jede Woche. Die Sauce macht sie mit Tomaten, Zwiebeln und ein bisschen Knoblauch. Das Kochen dauert nicht lange, nur dreißig Minuten.

Am liebsten kocht Lisa am Sonntag. Dann hat die ganze Familie Zeit. Ihr Bruder Paul deckt den Tisch, und ihre Mutter macht einen Salat dazu. Der Vater trinkt gern ein Glas Wein zum Essen. Alle setzen sich zusammen an den Tisch und essen langsam.

Nach dem Essen isst Lisa gern noch ein Stück Kuchen. Ihre Oma backt jeden Sonntag einen Apfelkuchen. Der Kuchen schmeckt sehr gut, und die ganze Familie liebt ihn. Lisa hilft ihrer Oma manchmal beim Backen.`,
    preguntas: [
      { enunciado: 'Lisas Lieblingsessen sind Nudeln mit Tomatensauce.', respuesta: true },
      { enunciado: 'Lisa kocht ihr Lieblingsessen nur einmal im Jahr.', respuesta: false },
      { enunciado: 'Paul deckt den Tisch.', respuesta: true },
      { enunciado: 'Die Mutter trinkt gern Wein zum Essen.', respuesta: false },
      { enunciado: 'Die Oma backt jeden Sonntag einen Kuchen.', respuesta: true },
    ],
  },
  {
    slug: 'der-verlorene-koffer',
    nivel: 'A2',
    titulo: 'Der verlorene Koffer',
    descripcion: 'Auf der Rückreise aus Spanien hat Familie Berger ein Problem mit dem Gepäck.',
    texto: `Familie Berger ist gerade aus dem Urlaub in Spanien zurückgekommen. Der Flug ist pünktlich gelandet, und alle waren müde, aber zufrieden. Am Gepäckband haben sie lange gewartet, doch ein Koffer ist einfach nicht gekommen. Herr Berger hat sofort zum Info-Schalter gehen müssen, weil seine Frau sehr nervös geworden ist.

Am Schalter hat eine freundliche Mitarbeiterin ihm ein Formular gegeben. Er hat den Namen, die Adresse und eine Beschreibung des Koffers aufgeschrieben. Die Mitarbeiterin hat erklärt, dass der Koffer wahrscheinlich noch in Spanien ist, weil er auf einen falschen Flug geladen wurde. Sie hat versprochen, dass der Koffer in zwei oder drei Tagen mit einem Kurier nach Hause geschickt wird.

Zwei Tage später hat es an der Tür geklingelt. Ein Kurier hat den Koffer gebracht, und die ganze Familie hat sich sehr gefreut. Nichts hat gefehlt, und alle Sachen waren noch heil. Frau Berger hat gesagt, dass sie beim nächsten Mal lieber ein Namensschild an den Koffer hängt.`,
    preguntas: [
      { enunciado: 'Familie Berger ist aus Spanien zurückgekommen.', respuesta: true },
      { enunciado: 'Alle Koffer sind sofort am Gepäckband angekommen.', respuesta: false },
      { enunciado: 'Herr Berger hat ein Formular am Info-Schalter ausgefüllt.', respuesta: true },
      { enunciado: 'Der Koffer ist für immer verloren gegangen.', respuesta: false },
      { enunciado: 'Frau Berger möchte beim nächsten Mal ein Namensschild an den Koffer hängen.', respuesta: true },
    ],
  },
  {
    slug: 'die-nachbarschaftsparty',
    nivel: 'A2',
    titulo: 'Die Nachbarschaftsparty',
    descripcion: 'Die Nachbarn in der Gartenstraße organisieren zusammen ein Sommerfest.',
    texto: `Im Sommer haben die Nachbarn in der Gartenstraße eine Party geplant. Frau Kaiser hat die Idee gehabt, weil sie ihre Nachbarn schon lange besser kennenlernen wollte. Sie hat kleine Zettel in alle Briefkästen gesteckt und alle zu einem Fest im Hof eingeladen.

Am Samstag haben viele Nachbarn mitgemacht. Herr Yildiz hat einen Grill mitgebracht und leckeres Fleisch gegrillt. Die Kinder haben im Hof gespielt, während die Erwachsenen an langen Tischen gesessen haben. Jede Familie hat etwas zu essen mitgebracht, deshalb gab es viele verschiedene Gerichte aus unterschiedlichen Ländern.

Am Abend haben alle zusammen Musik gehört und ein bisschen getanzt. Frau Kaiser war sehr glücklich, weil das Fest so gut gelungen ist. Die Nachbarn haben beschlossen, dass sie jedes Jahr im Sommer wieder ein Fest feiern wollen.`,
    preguntas: [
      { enunciado: 'Frau Kaiser hat die Nachbarschaftsparty organisiert.', respuesta: true },
      { enunciado: 'Niemand hat bei der Party mitgemacht.', respuesta: false },
      { enunciado: 'Herr Yildiz hat einen Grill mitgebracht.', respuesta: true },
      { enunciado: 'Es gab nur ein einziges Gericht bei der Party.', respuesta: false },
      { enunciado: 'Die Nachbarn wollen das Fest jedes Jahr wiederholen.', respuesta: true },
    ],
  },
  {
    slug: 'ein-brief-aus-der-schweiz',
    nivel: 'A2',
    titulo: 'Ein Brief aus der Schweiz',
    descripcion: 'Julia bekommt einen Brief von ihrer Brieffreundin Nadja aus Zürich.',
    texto: `Julia hat vor drei Monaten eine Brieffreundin in der Schweiz gefunden. Sie heißt Nadja und wohnt in Zürich. Letzte Woche hat Julia endlich einen Brief von Nadja bekommen. Sie hat sich sehr gefreut, weil der Brief lang und interessant war.

Nadja hat geschrieben, dass sie gern in den Bergen wandert und dass ihre Familie oft am Wochenende einen Ausflug macht. Sie hat auch erzählt, dass die Schule in der Schweiz ein bisschen anders ist als in Deutschland. Am Ende des Briefes hat Nadja gefragt, ob Julia sie im Sommer besuchen möchte.

Julia hat sofort geantwortet. Sie hat geschrieben, dass sie sich sehr über die Einladung freut und dass sie ihre Eltern schon gefragt hat. Ihre Eltern haben gesagt, dass sie im August zusammen in die Schweiz fahren können. Julia kann es kaum erwarten, Nadja endlich persönlich kennenzulernen.`,
    preguntas: [
      { enunciado: 'Julias Brieffreundin wohnt in Zürich.', respuesta: true },
      { enunciado: 'Julia hat den Brief sofort weggeworfen.', respuesta: false },
      { enunciado: 'Nadja wandert gern in den Bergen.', respuesta: true },
      { enunciado: 'Nadja hat Julia nicht eingeladen.', respuesta: false },
      { enunciado: 'Julias Eltern erlauben ihr, im August in die Schweiz zu fahren.', respuesta: true },
    ],
  },
  {
    slug: 'der-kurzurlaub-an-der-ostsee',
    nivel: 'A2',
    titulo: 'Der Kurzurlaub an der Ostsee',
    descripcion: 'Markus und seine Freundin Sarah fahren spontan für ein Wochenende an die Ostsee.',
    texto: `Am Freitagabend hat Markus seiner Freundin Sarah eine Überraschung vorgeschlagen: einen kurzen Ausflug an die Ostsee. Sarah hat sich sehr gefreut, weil sie schon lange nicht mehr am Meer war. Sie haben schnell eine Tasche gepackt und sind noch am selben Abend losgefahren.

Nach drei Stunden Autofahrt sind sie in einem kleinen Hotel direkt am Strand angekommen. Am nächsten Morgen sind sie früh aufgestanden und barfuß am Strand spazieren gegangen. Das Wasser war noch kalt, aber die Sonne hat schon warm geschienen. Am Nachmittag haben sie frischen Fisch in einem Restaurant am Hafen gegessen.

Am Sonntag mussten sie leider schon wieder nach Hause fahren, weil Markus am Montag arbeiten musste. Trotzdem waren beide sehr zufrieden, weil der kurze Urlaub genau richtig war, um sich zu erholen. Sarah hat gesagt, dass sie unbedingt bald wieder an die Ostsee fahren möchte.`,
    preguntas: [
      { enunciado: 'Markus und Sarah sind an einem Freitagabend losgefahren.', respuesta: true },
      { enunciado: 'Sie sind mit dem Zug an die Ostsee gefahren.', respuesta: false },
      { enunciado: 'Das Hotel lag direkt am Strand.', respuesta: true },
      { enunciado: 'Sie sind eine ganze Woche geblieben.', respuesta: false },
      { enunciado: 'Sarah möchte bald wieder an die Ostsee fahren.', respuesta: true },
    ],
  },
  {
    slug: 'die-klassenfahrt-nach-berlin',
    nivel: 'B1',
    titulo: 'Die Klassenfahrt nach Berlin',
    descripcion: 'Eine neunte Klasse verbringt drei Tage in Berlin und besucht wichtige historische Orte.',
    texto: `Die Klasse 9b ist letzte Woche für drei Tage nach Berlin gefahren. Obwohl viele Schüler vorher noch nie in der Hauptstadt waren, hatten alle sich schon lange auf die Fahrt gefreut. Nachdem die Klasse am Bahnhof angekommen war, sind sie direkt zur Jugendherberge gegangen, um ihr Gepäck abzustellen.

Am ersten Tag hat die Klasse das Brandenburger Tor und den Reichstag besichtigt. Der Geschichtslehrer, Herr Wolter, hat viel über die deutsche Geschichte erzählt, obwohl manche Schüler lieber Zeit zum Shoppen gehabt hätten. Trotzdem waren die meisten beeindruckt, als sie am zweiten Tag die East Side Gallery besucht haben, wo ein Teil der ehemaligen Berliner Mauer mit bunten Bildern bemalt ist.

Am letzten Abend durften die Schüler noch einmal in kleinen Gruppen durch die Stadt laufen, bevor sie am nächsten Morgen die Heimreise antreten mussten. Viele waren traurig, dass die Fahrt schon vorbei war, nachdem sie so viel Neues gesehen hatten. Am Ende waren sich alle einig, dass die Klassenfahrt eines der schönsten Erlebnisse des Schuljahres war.`,
    preguntas: [
      { enunciado: 'Die Klasse 9b ist für drei Tage nach Berlin gefahren.', respuesta: true },
      { enunciado: 'Alle Schüler waren schon oft in Berlin gewesen.', respuesta: false },
      { enunciado: 'Die Klasse hat die East Side Gallery besucht.', respuesta: true },
      { enunciado: 'Am letzten Abend mussten alle Schüler früh ins Bett gehen.', respuesta: false },
      { enunciado: 'Am Ende fanden die meisten Schüler die Klassenfahrt schön.', respuesta: true },
    ],
  },
  {
    slug: 'eine-neue-freundschaft-am-arbeitsplatz',
    nivel: 'B1',
    titulo: 'Eine neue Freundschaft am Arbeitsplatz',
    descripcion: 'Sabine findet in ihrer neuen Kollegin eine echte Freundin, obwohl der Anfang schwierig war.',
    texto: `Als Sabine vor sechs Monaten ihre neue Stelle in einem Architekturbüro angefangen hat, kannte sie noch niemanden. Obwohl ihre Kollegen freundlich waren, hat sie sich in den ersten Wochen oft einsam gefühlt. Nachdem sie mehrmals allein in der Mittagspause gesessen hatte, hat eine Kollegin namens Petra sie eines Tages einfach zu ihrem Tisch eingeladen.

Von diesem Moment an haben Sabine und Petra fast jeden Tag zusammen zu Mittag gegessen. Sie haben schnell gemerkt, dass sie ähnliche Interessen haben, obwohl sie in ganz unterschiedlichen Städten aufgewachsen sind. Trotzdem hat es gedauert, bis aus der Kollegenbeziehung eine echte Freundschaft geworden ist. Nachdem sie zusammen an einem großen Projekt gearbeitet hatten, haben sie sich auch außerhalb der Arbeit oft getroffen.

Heute gehen Sabine und Petra regelmäßig zusammen ins Kino oder treffen sich am Wochenende zum Wandern. Obwohl der Beginn schwierig war, ist Sabine sehr froh, dass sie den Mut hatte, offen für neue Kontakte zu sein. Sie sagt oft, dass diese Freundschaft das Beste ist, was ihr an der neuen Arbeitsstelle passiert ist.`,
    preguntas: [
      { enunciado: 'Sabine hat sich in den ersten Wochen an der neuen Arbeit einsam gefühlt.', respuesta: true },
      { enunciado: 'Petra hat Sabine nie zu ihrem Tisch eingeladen.', respuesta: false },
      { enunciado: 'Sabine und Petra sind in derselben Stadt aufgewachsen.', respuesta: false },
      { enunciado: 'Die beiden haben zusammen an einem Projekt gearbeitet.', respuesta: true },
      { enunciado: 'Sabine und Petra treffen sich auch außerhalb der Arbeit.', respuesta: true },
    ],
  },
  {
    slug: 'landflucht-und-strukturwandel',
    nivel: 'B2',
    titulo: 'Landflucht und Strukturwandel im ländlichen Raum',
    descripcion: 'Warum immer mehr junge Menschen ländliche Regionen verlassen und welche Folgen das hat.',
    texto: `Seit Jahrzehnten verlassen junge Menschen in Deutschland zunehmend ländliche Regionen, um in Großstädten zu studieren oder zu arbeiten. Dieses Phänomen, das als Landflucht bezeichnet wird, hat weitreichende Folgen für die betroffenen Dörfer und Kleinstädte. Wo einst Schulen, Ärzte und Geschäfte den Alltag prägten, herrscht heute vielerorts ein spürbarer Mangel an grundlegender Infrastruktur, was das Leben für die verbliebene, oft ältere Bevölkerung zunehmend erschwert.

Als Hauptgründe für die Abwanderung gelten fehlende Ausbildungs- und Arbeitsplätze sowie eine unzureichende digitale Anbindung, die insbesondere für jüngere Generationen, die im Homeoffice arbeiten möchten, ein entscheidendes Kriterium darstellt. Hinzu kommt, dass kulturelle und soziale Angebote in Städten deutlich vielfältiger sind, wodurch ländliche Regionen im Vergleich als weniger attraktiv wahrgenommen werden. Regionalpolitiker warnen bereits seit Langem davor, dass sich diese Entwicklung ohne gezielte Gegenmaßnahmen weiter verschärfen könnte.

Um dem Strukturwandel entgegenzuwirken, setzen manche Kommunen auf innovative Konzepte wie geförderte Coworking-Spaces, verbesserte Breitbandanbindung und finanzielle Anreize für junge Familien, die aufs Land ziehen möchten. Ob solche Maßnahmen ausreichen, um den Trend umzukehren, bleibt jedoch fraglich, zumal strukturelle Probleme wie der fehlende öffentliche Nahverkehr in vielen Regionen weiterhin ungelöst sind. Klar ist jedoch, dass ohne substanzielle Investitionen in die ländliche Infrastruktur die Kluft zwischen Stadt und Land in den kommenden Jahren eher noch größer werden dürfte.`,
    preguntas: [
      { enunciado: 'Landflucht beschreibt die Abwanderung junger Menschen aus ländlichen Regionen.', respuesta: true },
      { enunciado: 'In den betroffenen Dörfern gibt es laut Text keinerlei Probleme mit der Infrastruktur.', respuesta: false },
      { enunciado: 'Eine schlechte digitale Anbindung wird als einer der Gründe für die Abwanderung genannt.', respuesta: true },
      { enunciado: 'Alle Kommunen haben das Problem der Landflucht bereits vollständig gelöst.', respuesta: false },
      { enunciado: 'Manche Kommunen versuchen mit Coworking-Spaces und finanziellen Anreizen gegenzusteuern.', respuesta: true },
    ],
  },
  {
    slug: 'kuenstliche-intelligenz-im-klassenzimmer',
    nivel: 'B2',
    titulo: 'Künstliche Intelligenz im Klassenzimmer',
    descripcion: 'Wie KI-gestützte Lernprogramme den Schulunterricht verändern könnten – und welche Risiken damit verbunden sind.',
    texto: `Künstliche Intelligenz hält zunehmend Einzug in deutsche Klassenzimmer. Adaptive Lernprogramme, die sich individuell an das Lerntempo und die Schwächen einzelner Schüler anpassen, versprechen einen effizienteren und persönlicheren Unterricht, als es einer Lehrkraft allein möglich wäre. Befürworter argumentieren, dass solche Systeme Lehrer entlasten könnten, indem sie Routineaufgaben wie die Korrektur von Tests übernehmen, wodurch mehr Zeit für individuelle Betreuung bliebe.

Kritiker hingegen befürchten, dass eine übermäßige Abhängigkeit von KI-Systemen die soziale Komponente des Lernens vernachlässigen könnte, die gerade im schulischen Kontext von zentraler Bedeutung ist. Zudem stellt sich die Frage, wie mit den sensiblen Daten der Schüler umgegangen wird, die von solchen Programmen gesammelt werden. Sollten Schulen künftig verstärkt auf kommerzielle KI-Anbieter angewiesen sein, könnte dies außerdem zu einer problematischen Abhängigkeit von privaten Unternehmen im öffentlichen Bildungssystem führen.

Bildungsexperten fordern deshalb klare rechtliche Rahmenbedingungen, bevor KI-Werkzeuge flächendeckend eingeführt werden. Nur wenn Datenschutz, pädagogische Qualität und die Rolle der Lehrkraft klar geregelt seien, könne künstliche Intelligenz sinnvoll in den Unterricht integriert werden, ohne dass die Vorteile der Technologie durch unabsehbare Risiken zunichtegemacht würden. Wie diese Balance in der Praxis aussehen wird, ist derzeit noch weitgehend offen.`,
    preguntas: [
      { enunciado: 'Adaptive Lernprogramme passen sich laut Text an das individuelle Lerntempo der Schüler an.', respuesta: true },
      { enunciado: 'Alle Bildungsexperten lehnen den Einsatz von KI im Unterricht kategorisch ab.', respuesta: false },
      { enunciado: 'Kritiker befürchten eine Vernachlässigung der sozialen Komponente des Lernens.', respuesta: true },
      { enunciado: 'Der Umgang mit sensiblen Schülerdaten wird im Text als unproblematisch dargestellt.', respuesta: false },
      { enunciado: 'Bildungsexperten fordern klare rechtliche Rahmenbedingungen für den Einsatz von KI.', respuesta: true },
    ],
  },
  {
    slug: 'erbschaftssteuer-und-soziale-gerechtigkeit',
    nivel: 'B2',
    titulo: 'Erbschaftssteuer und soziale Gerechtigkeit',
    descripcion: 'Eine gesellschaftliche Debatte darüber, ob eine höhere Besteuerung von Erbschaften mehr Gerechtigkeit schaffen würde.',
    texto: `In kaum einem anderen Bereich der Steuerpolitik prallen die Positionen so unversöhnlich aufeinander wie bei der Erbschaftssteuer. Befürworter einer höheren Besteuerung argumentieren, dass ererbtes Vermögen maßgeblich zur wachsenden Vermögensungleichheit beitrage, da es leistungslos erworben werde und somit bestehende soziale Unterschiede über Generationen hinweg zementiere. Würde man große Erbschaften stärker besteuern, ließe sich das zusätzliche Steueraufkommen beispielsweise in Bildung oder Infrastruktur investieren, wovon die gesamte Gesellschaft profitieren könnte.

Gegner einer solchen Reform verweisen hingegen darauf, dass insbesondere Familienunternehmen durch eine höhere Erbschaftssteuer in ihrer Existenz bedroht werden könnten, wenn Erben gezwungen wären, Firmenanteile zu verkaufen, um die Steuerschuld zu begleichen. Zudem sei es fraglich, ob eine stärkere Besteuerung tatsächlich zu mehr Verteilungsgerechtigkeit führe, solange gleichzeitig zahlreiche Ausnahmeregelungen und Gestaltungsmöglichkeiten bestehen blieben, die vor allem von vermögenden Familien genutzt würden.

Zwischen diesen beiden Positionen versuchen manche Ökonomen einen Mittelweg zu finden, indem sie für eine Reform der bestehenden Ausnahmen plädieren, anstatt die Steuersätze grundsätzlich zu erhöhen. Auf diese Weise könnte man verhindern, dass Betriebsübergaben unnötig erschwert werden, während gleichzeitig überproportional große Privatvermögen stärker zur Finanzierung des Gemeinwesens herangezogen würden. Ob sich die Politik auf einen solchen Kompromiss einigen kann, bleibt angesichts der festgefahrenen Fronten allerdings ungewiss.`,
    preguntas: [
      { enunciado: 'Befürworter einer höheren Erbschaftssteuer sehen darin ein Mittel gegen wachsende Vermögensungleichheit.', respuesta: true },
      { enunciado: 'Alle Ökonomen lehnen eine Reform der Erbschaftssteuer strikt ab.', respuesta: false },
      { enunciado: 'Gegner der Reform befürchten Probleme für Familienunternehmen.', respuesta: true },
      { enunciado: 'Der Text stellt die Debatte um die Erbschaftssteuer als vollkommen unumstritten dar.', respuesta: false },
      { enunciado: 'Manche Ökonomen schlagen als Kompromiss eine Reform der bestehenden Ausnahmen vor.', respuesta: true },
    ],
  },
  {
    slug: 'elektroschrott-und-kreislaufwirtschaft',
    nivel: 'B2',
    titulo: 'Elektroschrott und Kreislaufwirtschaft',
    descripcion: 'Warum die wachsende Menge an Elektroschrott ein globales Problem darstellt und wie eine Kreislaufwirtschaft Abhilfe schaffen könnte.',
    texto: `Weltweit wächst die Menge an Elektroschrott schneller als jede andere Abfallart, was maßgeblich auf immer kürzere Innovationszyklen und eine zunehmende Wegwerfmentalität zurückzuführen ist. Millionen Tonnen ausrangierter Smartphones, Laptops und Haushaltsgeräte landen jährlich auf Mülldeponien, obwohl viele der enthaltenen Rohstoffe, darunter seltene Erden und wertvolle Metalle, theoretisch wiederverwertet werden könnten. Besonders problematisch ist zudem, dass ein erheblicher Teil des Elektroschrotts illegal in Länder des globalen Südens exportiert wird, wo er unter gesundheitsschädlichen Bedingungen informell recycelt wird.

Als Lösungsansatz gilt vielen Experten das Konzept der Kreislaufwirtschaft, bei dem Produkte von Anfang an so gestaltet werden, dass sie repariert, aufgerüstet oder recycelt werden können, anstatt nach kurzer Nutzungsdauer entsorgt zu werden. Die Europäische Union hat in diesem Zusammenhang bereits Regelungen eingeführt, die Hersteller dazu verpflichten, Ersatzteile länger verfügbar zu halten, und die ein einheitliches Ladekabel für elektronische Geräte vorschreiben. Kritiker bemängeln jedoch, dass diese Maßnahmen bislang nicht weitreichend genug seien, um die tatsächliche Lebensdauer von Elektrogeräten spürbar zu verlängern.

Damit eine echte Kreislaufwirtschaft entstehen kann, müssten nach Ansicht vieler Fachleute nicht nur Hersteller, sondern auch Verbraucher ihr Verhalten grundlegend ändern, indem sie Geräte länger nutzen und häufiger reparieren lassen, anstatt vorschnell neue Produkte zu kaufen. Nur wenn ökonomische Anreize und gesetzliche Vorgaben zusammenwirkten, ließe sich die Menge des anfallenden Elektroschrotts langfristig deutlich reduzieren. Bis dahin bleibt die Kluft zwischen dem Ideal einer nachhaltigen Kreislaufwirtschaft und der Realität eines wegwerforientierten Konsumverhaltens jedoch beträchtlich.`,
    preguntas: [
      { enunciado: 'Die Menge an Elektroschrott wächst laut Text schneller als jede andere Abfallart.', respuesta: true },
      { enunciado: 'Alle Rohstoffe aus Elektroschrott werden laut Text bereits vollständig recycelt.', respuesta: false },
      { enunciado: 'Ein Teil des Elektroschrotts wird illegal in Länder des globalen Südens exportiert.', respuesta: true },
      { enunciado: 'Die EU hat laut Text bisher keinerlei Regelungen zur Kreislaufwirtschaft eingeführt.', respuesta: false },
      { enunciado: 'Experten sehen auch beim Verbraucherverhalten Änderungsbedarf.', respuesta: true },
    ],
  },
  {
    slug: 'meine-lieblingsfarbe',
    nivel: 'A1',
    titulo: 'Meine Lieblingsfarbe',
    descripcion: 'Lisa erzählt von ihren Lieblingsfarben und ihrer Kleidung.',
    texto: `Lisa mag viele Farben. Ihre Lieblingsfarbe ist Blau. Sie hat ein blaues Fahrrad und eine blaue Tasche. Ihr Zimmer ist auch blau. Blau macht sie glücklich.

Ihr Bruder Tom mag Grün. Er hat ein grünes T-Shirt und grüne Schuhe. Er sagt: „Grün ist die Farbe der Natur." Die Geschwister streiten manchmal über Farben. Aber sie lachen auch viel zusammen.

Am Wochenende kaufen Lisa und Tom neue Kleidung. Lisa findet ein blaues Kleid. Tom findet eine grüne Jacke. Die Mutter kauft für sich ein rotes Halstuch. Alle sind zufrieden mit ihren Farben.`,
    preguntas: [
      { enunciado: 'Lisas Lieblingsfarbe ist Blau.', respuesta: true },
      { enunciado: 'Tom mag am liebsten die Farbe Rot.', respuesta: false },
      { enunciado: 'Lisa hat ein blaues Fahrrad.', respuesta: true },
      { enunciado: 'Die Geschwister kaufen am Wochenende neue Kleidung.', respuesta: true },
      { enunciado: 'Die Mutter kauft eine grüne Jacke.', respuesta: false },
    ],
  },
  {
    slug: 'der-wochenplan',
    nivel: 'A1',
    titulo: 'Der Wochenplan',
    descripcion: 'Paul zeigt seinen Wochenplan mit Schule, Sport und Hobbys.',
    texto: `Paul hat einen Wochenplan für die Schule. Montags hat er Mathe und Deutsch. Dienstags hat er Sport und Musik. Er mag Sport sehr gern.

Am Mittwoch geht Paul zum Fußballtraining. Am Donnerstag lernt er Englisch mit seiner Schwester. Am Freitag hat er frei und spielt mit Freunden. Er ist froh, wenn das Wochenende kommt.

Am Samstag hilft Paul seiner Mutter im Garten. Am Sonntag besucht die Familie die Großeltern. Paul isst gern Kuchen bei Oma. Danach spielt er mit seinem Cousin.`,
    preguntas: [
      { enunciado: 'Paul hat montags Sport und Musik.', respuesta: false },
      { enunciado: 'Paul geht mittwochs zum Fußballtraining.', respuesta: true },
      { enunciado: 'Am Freitag hat Paul den ganzen Tag Schule.', respuesta: false },
      { enunciado: 'Am Sonntag besucht die Familie die Großeltern.', respuesta: true },
      { enunciado: 'Paul isst gern Kuchen bei Oma.', respuesta: true },
    ],
  },
  {
    slug: 'der-verlorene-schluessel',
    nivel: 'A2',
    titulo: 'Der verlorene Schlüssel',
    descripcion: 'Sabine hat ihren Wohnungsschlüssel verloren und musste einen Schlüsseldienst rufen.',
    texto: `Gestern Abend ist Sabine nach Hause gekommen und hat gemerkt, dass sie ihren Schlüssel nicht mehr hatte. Sie hat ihre Tasche durchsucht, aber der Schlüssel war nicht da. Weil es schon dunkel war, hat sie sich Sorgen gemacht.

Sabine hat ihre Nachbarin Frau Berger angerufen und gefragt, ob sie einen Ersatzschlüssel hat. Leider hatte Frau Berger keinen Schlüssel für Sabines Wohnung. Deshalb hat Sabine einen Schlüsseldienst gerufen. Der Mann vom Schlüsseldienst ist nach dreißig Minuten gekommen und hat die Tür schnell geöffnet.

Später hat Sabine ihren Schlüssel doch noch gefunden. Er war in ihrer Jackentasche. Sie hat gelacht, weil sie so lange gesucht hatte. Seitdem legt sie den Schlüssel immer an denselben Platz.`,
    preguntas: [
      { enunciado: 'Sabine hat ihren Schlüssel sofort in der Tasche gefunden.', respuesta: false },
      { enunciado: 'Sabine hat ihre Nachbarin um Hilfe gebeten.', respuesta: true },
      { enunciado: 'Frau Berger hatte einen Ersatzschlüssel für Sabines Wohnung.', respuesta: false },
      { enunciado: 'Der Schlüsseldienst hat die Tür geöffnet.', respuesta: true },
      { enunciado: 'Sabine hat den Schlüssel am Ende in ihrer Jackentasche gefunden.', respuesta: true },
    ],
  },
  {
    slug: 'der-sprachkurs',
    nivel: 'A2',
    titulo: 'Der Sprachkurs',
    descripcion: 'Elif hat an der Volkshochschule einen Deutschkurs besucht und neue Freunde gefunden.',
    texto: `Elif ist vor einem Jahr nach Deutschland gezogen. Weil sie noch nicht gut Deutsch sprechen konnte, hat sie sich an der Volkshochschule für einen Sprachkurs angemeldet. Der Kurs hat zweimal pro Woche stattgefunden.

Am Anfang war es schwer, weil viele Wörter neu für Elif waren. Ihre Lehrerin hat viel Geduld gehabt und ihr oft geholfen. Nach ein paar Monaten hat Elif schon kleine Gespräche führen können. Sie hat auch neue Freunde im Kurs kennengelernt, zum Beispiel Marco aus Italien.

Am Ende des Kurses hat es eine kleine Prüfung gegeben. Elif hat sich sehr gefreut, dass sie die Prüfung bestanden hat. Jetzt spricht sie fast jeden Tag Deutsch bei der Arbeit. Sie ist stolz auf ihre Fortschritte.`,
    preguntas: [
      { enunciado: 'Elif konnte schon vor dem Kurs sehr gut Deutsch.', respuesta: false },
      { enunciado: 'Der Sprachkurs hat einmal pro Monat stattgefunden.', respuesta: false },
      { enunciado: 'Elif hat im Kurs einen neuen Freund namens Marco kennengelernt.', respuesta: true },
      { enunciado: 'Elif hat die Abschlussprüfung nicht bestanden.', respuesta: false },
      { enunciado: 'Elif spricht jetzt oft Deutsch bei der Arbeit.', respuesta: true },
    ],
  },
  {
    slug: 'das-familientreffen',
    nivel: 'A2',
    titulo: 'Das Familientreffen',
    descripcion: 'Die Familie Berger hat sich nach langer Zeit zu einem großen Familientreffen versammelt.',
    texto: `Am Samstag hat die Familie Berger ein großes Familientreffen organisiert, weil die Großmutter neunzig Jahre alt geworden ist. Verwandte aus ganz Deutschland sind angereist, sogar der Onkel aus Hamburg ist gekommen. Alle haben sich sehr gefreut, sich nach so langer Zeit wiederzusehen.

Es gab ein großes Buffet mit Salaten, Kuchen und gegrilltem Fleisch. Die Kinder haben im Garten gespielt, während die Erwachsenen sich unterhalten haben. Weil das Wetter so schön war, konnten alle draußen sitzen und die Sonne genießen.

Am Abend hat die Großmutter eine kleine Rede gehalten und sich bei allen bedankt. Danach haben alle zusammen ein Foto gemacht. Die Familie hat beschlossen, dass sie sich jedes Jahr wieder treffen möchte.`,
    preguntas: [
      { enunciado: 'Das Familientreffen war für den achtzigsten Geburtstag der Großmutter.', respuesta: false },
      { enunciado: 'Der Onkel aus Hamburg ist zum Treffen gekommen.', respuesta: true },
      { enunciado: 'Das Familientreffen hat wegen schlechten Wetters drinnen stattgefunden.', respuesta: false },
      { enunciado: 'Die Großmutter hat am Abend eine Rede gehalten.', respuesta: true },
      { enunciado: 'Die Familie will sich nie wieder treffen.', respuesta: false },
    ],
  },
  {
    slug: 'der-schueleraustausch',
    nivel: 'B1',
    titulo: 'Der Schüleraustausch',
    descripcion: 'Jonas verbringt drei Monate bei einer Gastfamilie in Frankreich und lernt eine neue Kultur kennen.',
    texto: `Jonas hatte schon lange davon geträumt, einmal im Ausland zu leben, und im letzten Schuljahr hat sich endlich die Gelegenheit dazu ergeben. Obwohl er anfangs große Angst hatte, sich in einer fremden Familie nicht wohlzufühlen, hat er sich für einen Schüleraustausch nach Frankreich entschieden. Nachdem er drei Monate bei seiner Gastfamilie in Lyon verbracht hatte, konnte er kaum glauben, wie schnell die Zeit vergangen war.

In den ersten Wochen fiel es Jonas schwer, dem schnellen Französisch seiner Gastgeschwister zu folgen, doch er gab nicht auf. Trotzdem sprach er jeden Abend mit ihnen über die Schule, das Essen und die Unterschiede zwischen Deutschland und Frankreich. Mit der Zeit verbesserte sich sein Französisch deutlich, und er begann sogar, in seinen Träumen Französisch zu sprechen.

Als der Austausch zu Ende ging, fiel Jonas der Abschied sehr schwer. Er hatte enge Freundschaften geschlossen und eine Kultur kennengelernt, die ihm vorher fremd gewesen war. Zurück in Deutschland erzählte er allen begeistert von seinen Erlebnissen und plant bereits, seine Gastfamilie im nächsten Sommer zu besuchen.`,
    preguntas: [
      { enunciado: 'Jonas hatte von Anfang an keine Angst vor dem Austausch.', respuesta: false },
      { enunciado: 'Jonas hat drei Monate bei einer Gastfamilie in Lyon verbracht.', respuesta: true },
      { enunciado: 'Sein Französisch hat sich während des Aufenthalts nicht verbessert.', respuesta: false },
      { enunciado: 'Jonas fiel der Abschied von der Gastfamilie leicht.', respuesta: false },
      { enunciado: 'Jonas möchte seine Gastfamilie im nächsten Sommer wieder besuchen.', respuesta: true },
    ],
  },
  {
    slug: 'die-neue-wohngemeinschaft',
    nivel: 'B1',
    titulo: 'Die neue Wohngemeinschaft',
    descripcion: 'Miriam zieht für ihr Studium in eine Wohngemeinschaft mit drei anderen Studierenden.',
    texto: `Nachdem Miriam einen Studienplatz in München bekommen hatte, musste sie sich schnell um eine Wohnung kümmern. Weil die Mieten in der Stadt sehr hoch sind, entschied sie sich für eine Wohngemeinschaft mit drei anderen Studierenden. Obwohl sie noch nie mit fremden Menschen zusammengewohnt hatte, war sie neugierig auf das neue Leben.

In den ersten Tagen war es ungewohnt, sich die Küche und das Badezimmer zu teilen. Trotzdem gewöhnte sich Miriam schnell an den Alltag in der WG, zumal ihre Mitbewohner sehr freundlich und hilfsbereit waren. Gemeinsam kochten sie oft am Abend und tauschten sich über ihre Vorlesungen aus.

Nach ein paar Monaten fühlte sich Miriam in der Wohngemeinschaft richtig zu Hause. Sie hatte gute Freunde gefunden, mit denen sie nicht nur wohnte, sondern auch ihre Freizeit verbrachte. Rückblickend war der Umzug in die WG eine der besten Entscheidungen ihres Studiums.`,
    preguntas: [
      { enunciado: 'Miriam hat sich für ein eigenes Apartment entschieden.', respuesta: false },
      { enunciado: 'Die Mieten in München waren laut Text sehr niedrig.', respuesta: false },
      { enunciado: 'Miriams Mitbewohner waren freundlich und hilfsbereit.', respuesta: true },
      { enunciado: 'Miriam hat sich nie an das Leben in der WG gewöhnt.', respuesta: false },
      { enunciado: 'Miriam verbringt auch ihre Freizeit mit ihren Mitbewohnern.', respuesta: true },
    ],
  },
  {
    slug: 'das-strassenfest-im-viertel',
    nivel: 'B1',
    titulo: 'Das Straßenfest im Viertel',
    descripcion: 'Die Nachbarschaft organisiert ein buntes Straßenfest mit Musik, Essen und Ständen.',
    texto: `Jedes Jahr im Sommer organisieren die Bewohner des Viertels ein großes Straßenfest, nachdem sie sich im Frühling zu einem Planungstreffen versammelt haben. Obwohl die Organisation viel Arbeit bedeutet, machen alle gerne mit, weil das Fest die Nachbarschaft näher zusammenbringt. In diesem Jahr wurde die Straße extra für den Verkehr gesperrt.

An zahlreichen Ständen gab es Speisen aus verschiedenen Ländern, denn viele Familien im Viertel haben unterschiedliche kulturelle Wurzeln. Trotz des wechselhaften Wetters kamen viele Besucher, und am Nachmittag spielte sogar eine lokale Band auf einer kleinen Bühne. Kinder konnten sich schminken lassen und an Spielen teilnehmen.

Am Abend, nachdem die Musik verstummt war, halfen viele Bewohner gemeinsam beim Aufräumen. Alle waren sich einig, dass das Fest ein voller Erfolg gewesen war. Schon jetzt freuen sich viele auf das nächste Straßenfest im kommenden Jahr.`,
    preguntas: [
      { enunciado: 'Das Straßenfest wird jedes Jahr im Winter organisiert.', respuesta: false },
      { enunciado: 'Für das Fest wurde die Straße gesperrt.', respuesta: true },
      { enunciado: 'An den Ständen gab es nur deutsches Essen.', respuesta: false },
      { enunciado: 'Wegen des schlechten Wetters kamen keine Besucher.', respuesta: false },
      { enunciado: 'Nach dem Fest haben die Bewohner gemeinsam aufgeräumt.', respuesta: true },
    ],
  },
  {
    slug: 'die-mietpreisbremse',
    nivel: 'B2',
    titulo: 'Die Mietpreisbremse',
    descripcion: 'Ein Text über die Wirkung und die Kritik an der deutschen Mietpreisbremse.',
    texto: `In vielen deutschen Großstädten sind die Mieten in den vergangenen Jahren stark gestiegen, sodass immer mehr Menschen Schwierigkeiten haben, eine bezahlbare Wohnung zu finden. Um diesem Trend entgegenzuwirken, wurde die sogenannte Mietpreisbremse eingeführt, die verhindern soll, dass Vermieter bei einer Neuvermietung die Miete beliebig erhöhen. Die Regelung gilt jedoch nur in Gebieten, die von den Bundesländern als angespannte Wohnungsmärkte ausgewiesen wurden.

Befürworter der Mietpreisbremse argumentieren, dass ohne diese Regelung viele einkommensschwächere Haushalte aus den Innenstädten verdrängt würden. Kritiker hingegen wenden ein, dass die Mietpreisbremse Investitionen in neuen Wohnraum hemme, da sich der Bau neuer Wohnungen für Vermieter weniger lohne, wenn die erzielbaren Mieten begrenzt würden. Studien zu den tatsächlichen Auswirkungen der Regelung kommen zu unterschiedlichen Ergebnissen.

Manche Experten schlagen deshalb vor, dass anstelle einer reinen Mietpreisbegrenzung stärker in den sozialen Wohnungsbau investiert werden sollte. Würde ausreichend bezahlbarer Wohnraum geschaffen, so ihr Argument, würde sich der Druck auf dem Mietmarkt von selbst verringern. Bis eine solche Lösung umgesetzt wird, bleibt die Mietpreisbremse jedoch eines der wichtigsten Instrumente der deutschen Wohnungspolitik.`,
    preguntas: [
      { enunciado: 'Die Mietpreisbremse gilt in ganz Deutschland ohne Ausnahme.', respuesta: false },
      { enunciado: 'Die Mietpreisbremse soll starke Mieterhöhungen bei Neuvermietungen verhindern.', respuesta: true },
      { enunciado: 'Alle Experten sind sich einig, dass die Mietpreisbremse ausschließlich positive Effekte hat.', respuesta: false },
      { enunciado: 'Kritiker befürchten, dass die Regelung den Neubau von Wohnungen bremst.', respuesta: true },
      { enunciado: 'Manche Experten fordern stattdessen mehr Investitionen in sozialen Wohnungsbau.', respuesta: true },
    ],
  },
  {
    slug: 'rentensystem-und-demografischer-wandel',
    nivel: 'B2',
    titulo: 'Rentensystem und demografischer Wandel',
    descripcion: 'Der Text beleuchtet die Herausforderungen des deutschen Rentensystems angesichts einer alternden Gesellschaft.',
    texto: `Das deutsche Rentensystem basiert traditionell auf dem sogenannten Umlageverfahren, bei dem die Beiträge der aktuell arbeitenden Generation direkt zur Finanzierung der Renten der älteren Generation verwendet werden. Aufgrund des demografischen Wandels, der durch eine sinkende Geburtenrate und eine steigende Lebenserwartung gekennzeichnet ist, gerät dieses System jedoch zunehmend unter Druck. Immer weniger Beitragszahler müssen für eine wachsende Zahl von Rentenempfängern aufkommen.

Würde an dem bisherigen System nichts geändert, müssten entweder die Beiträge der Arbeitnehmer erheblich erhöht oder die Renten spürbar gekürzt werden. Beide Optionen sind politisch schwer durchsetzbar, da sie entweder die jüngere oder die ältere Generation stark belasten würden. Aus diesem Grund wird seit Jahren über zusätzliche private und betriebliche Altersvorsorge diskutiert, die das staatliche Rentensystem ergänzen soll.

Einige Ökonomen plädieren zudem dafür, das Renteneintrittsalter schrittweise an die steigende Lebenserwartung anzupassen. Andere fordern, dass auch Selbstständige und Beamte stärker in das Umlageverfahren einbezogen werden sollten, um die finanzielle Basis zu verbreitern. Welcher Weg letztlich eingeschlagen wird, hängt maßgeblich davon ab, welche Kompromisse die Politik zwischen den Generationen zu schließen bereit ist.`,
    preguntas: [
      { enunciado: 'Das deutsche Rentensystem basiert auf dem Umlageverfahren.', respuesta: true },
      { enunciado: 'Die Geburtenrate steigt laut Text kontinuierlich an.', respuesta: false },
      { enunciado: 'Eine Erhöhung der Beiträge oder eine Kürzung der Renten gelten als politisch unproblematisch.', respuesta: false },
      { enunciado: 'Manche Ökonomen schlagen eine schrittweise Anhebung des Renteneintrittsalters vor.', respuesta: true },
      { enunciado: 'Laut Text sind bereits alle Selbstständigen und Beamten in das Umlageverfahren einbezogen.', respuesta: false },
    ],
  },
  {
    slug: 'cybermobbing-und-digitale-verantwortung',
    nivel: 'B2',
    titulo: 'Cybermobbing und digitale Verantwortung',
    descripcion: 'Eine Auseinandersetzung mit den Ursachen von Cybermobbing und möglichen Gegenmaßnahmen.',
    texto: `Mit der zunehmenden Nutzung sozialer Netzwerke hat sich auch das Phänomen des Cybermobbing stark ausgebreitet, bei dem Personen im Internet gezielt beleidigt, bloßgestellt oder ausgegrenzt werden. Anders als beim klassischen Mobbing auf dem Schulhof endet die Belästigung im digitalen Raum oft nicht am Ende des Schultages, sondern begleitet die Betroffenen rund um die Uhr. Untersuchungen zeigen, dass vor allem Jugendliche häufig sowohl als Täter als auch als Opfer betroffen sind.

Ein wesentlicher Grund für die Verbreitung von Cybermobbing wird in der scheinbaren Anonymität des Internets gesehen, die es manchen Nutzern erleichtert, Hemmschwellen zu überschreiten, die sie im direkten Kontakt nicht überschreiten würden. Wären die sozialen Netzwerke gezwungen, konsequenter gegen beleidigende Inhalte vorzugehen, könnte dies laut Experten viele Fälle verhindern. Bislang werden gemeldete Inhalte jedoch oft nur zögerlich oder gar nicht entfernt.

Um Cybermobbing wirksam zu begegnen, fordern Pädagogen, dass digitale Verantwortung bereits in der Schule vermittelt werden sollte, damit Kinder frühzeitig lernen, welche Folgen ihr Verhalten im Internet haben kann. Gleichzeitig müssten Eltern stärker sensibilisiert werden, um Warnsignale bei ihren Kindern rechtzeitig zu erkennen. Nur durch ein Zusammenspiel von Schule, Elternhaus und den Betreibern sozialer Netzwerke lasse sich das Problem langfristig eindämmen.`,
    preguntas: [
      { enunciado: 'Cybermobbing endet laut Text meist mit dem Ende des Schultages.', respuesta: false },
      { enunciado: 'Jugendliche sind laut Untersuchungen sowohl als Täter als auch als Opfer betroffen.', respuesta: true },
      { enunciado: 'Die Anonymität des Internets wird als ein Grund für Cybermobbing genannt.', respuesta: true },
      { enunciado: 'Soziale Netzwerke entfernen gemeldete Inhalte laut Text immer sofort.', respuesta: false },
      { enunciado: 'Pädagogen fordern, dass digitale Verantwortung bereits in der Schule vermittelt wird.', respuesta: true },
    ],
  },
  {
    slug: 'digitale-kluft-zwischen-generationen',
    nivel: 'B2',
    titulo: 'Digitale Kluft zwischen den Generationen',
    descripcion: 'Der Text untersucht, warum ältere Menschen häufig von der Digitalisierung abgehängt werden.',
    texto: `Während jüngere Generationen mit Smartphones und digitalen Anwendungen aufgewachsen sind, tun sich viele ältere Menschen nach wie vor schwer damit, neue Technologien im Alltag zu nutzen. Diese sogenannte digitale Kluft zeigt sich besonders deutlich, wenn Behördengänge, Bankgeschäfte oder Arztbesuche zunehmend online abgewickelt werden müssen. Wer den Umgang mit digitalen Geräten nicht beherrscht, läuft Gefahr, von wichtigen gesellschaftlichen Bereichen ausgeschlossen zu werden.

Als Gründe für diese Kluft werden neben mangelnder technischer Erfahrung auch fehlendes Vertrauen in die Sicherheit digitaler Systeme genannt. Viele ältere Menschen befürchten, Opfer von Betrug zu werden, wenn sie persönliche Daten online eingeben. Hinzu kommt, dass manche Anwendungen nicht nutzerfreundlich gestaltet sind und selbst technisch versierten Personen Schwierigkeiten bereiten würden.

Um die digitale Kluft zu verringern, setzen sich zahlreiche Initiativen dafür ein, kostenlose Computerkurse für Senioren anzubieten. Sollten Städte und Gemeinden solche Angebote flächendeckend bereitstellen, könnte dies vielen älteren Menschen die Angst vor der Digitalisierung nehmen. Letztlich profitiert die gesamte Gesellschaft davon, wenn niemand aufgrund seines Alters von wichtigen digitalen Dienstleistungen ausgeschlossen bleibt.`,
    preguntas: [
      { enunciado: 'Ältere Menschen haben laut Text generell keine Schwierigkeiten mit digitalen Anwendungen.', respuesta: false },
      { enunciado: 'Die digitale Kluft zeigt sich unter anderem bei Behördengängen und Bankgeschäften.', respuesta: true },
      { enunciado: 'Mangelndes Vertrauen in die Sicherheit digitaler Systeme wird als Grund genannt.', respuesta: true },
      { enunciado: 'Alle digitalen Anwendungen sind laut Text besonders nutzerfreundlich gestaltet.', respuesta: false },
      { enunciado: 'Initiativen bieten unter anderem kostenlose Computerkurse für Senioren an.', respuesta: true },
    ],
  },
  {
    slug: 'meine-geschwister',
    nivel: 'A1',
    titulo: 'Meine Geschwister',
    descripcion: 'Lisa stellt ihre Geschwister und den Alltag mit ihrer Familie vor.',
    texto: `Ich heiße Lisa und ich habe zwei Geschwister. Mein Bruder heißt Tom und meine Schwester heißt Mia. Tom ist vierzehn Jahre alt und Mia ist neun Jahre alt. Wir wohnen zusammen mit unseren Eltern in einem Haus.

Tom spielt gern Fußball. Er trainiert jeden Dienstag und Donnerstag. Mia malt gern Bilder. Sie hat viele bunte Stifte. Ich spiele gern Klavier. Am Wochenende spielen wir oft zusammen im Garten.

Am Abend essen wir zusammen. Meine Mutter kocht das Essen und mein Vater deckt den Tisch. Nach dem Essen spielen wir manchmal ein Spiel. Meine Familie ist mir sehr wichtig.`,
    preguntas: [
      { enunciado: 'Lisa hat zwei Geschwister.', respuesta: true },
      { enunciado: 'Tom ist älter als Mia.', respuesta: true },
      { enunciado: 'Mia spielt gern Fußball.', respuesta: false },
      { enunciado: 'Die Familie isst zusammen am Abend.', respuesta: true },
      { enunciado: 'Lisas Vater kocht das Essen.', respuesta: false },
    ],
  },
  {
    slug: 'der-schulweg',
    nivel: 'A1',
    titulo: 'Der Schulweg',
    descripcion: 'Paul beschreibt seinen täglichen Weg zur Schule.',
    texto: `Paul steht jeden Morgen um sieben Uhr auf. Er frühstückt schnell und zieht seine Jacke an. Die Schule ist nicht weit von seinem Haus. Paul geht zu Fuß zur Schule.

Der Schulweg dauert zehn Minuten. Paul geht durch einen kleinen Park. Dort trifft er oft seinen Freund Ben. Sie gehen dann zusammen weiter. Manchmal regnet es, und Paul nimmt einen Regenschirm mit.

Die Schule beginnt um acht Uhr. Paul kommt immer pünktlich an. Nach der Schule geht er wieder nach Hause und macht seine Hausaufgaben.`,
    preguntas: [
      { enunciado: 'Paul steht um sieben Uhr auf.', respuesta: true },
      { enunciado: 'Paul fährt mit dem Bus zur Schule.', respuesta: false },
      { enunciado: 'Der Schulweg dauert zehn Minuten.', respuesta: true },
      { enunciado: 'Paul trifft seinen Freund Ben im Park.', respuesta: true },
      { enunciado: 'Die Schule beginnt um neun Uhr.', respuesta: false },
    ],
  },
  {
    slug: 'der-besuch-beim-optiker',
    nivel: 'A2',
    titulo: 'Der Besuch beim Optiker',
    descripcion: 'Julia lässt ihre Augen testen und bekommt eine neue Brille.',
    texto: `Letzte Woche ist Julia zum Optiker gegangen, weil sie schlecht sehen konnte. Sie hat schon lange Kopfschmerzen gehabt und wollte endlich wissen, was los ist. Der Optiker hat ihre Augen genau getestet.

Nach dem Test hat der Optiker gesagt, dass Julia eine Brille braucht. Julia war zuerst ein bisschen traurig, aber dann hat sie viele schöne Brillen anprobiert. Sie hat sich für ein Modell mit rotem Rahmen entschieden. „Diese Brille gefällt mir am besten", hat sie gesagt.

Eine Woche später hat Julia ihre neue Brille abgeholt. Sie war sehr froh, weil sie jetzt viel besser sehen konnte. Auch ihre Kopfschmerzen sind seitdem weg. Ihre Freunde finden die neue Brille toll.`,
    preguntas: [
      { enunciado: 'Julia ist zum Optiker gegangen, weil sie Kopfschmerzen hatte.', respuesta: true },
      { enunciado: 'Der Optiker hat gesagt, dass Julia keine Brille braucht.', respuesta: false },
      { enunciado: 'Julia hat sich für eine rote Brille entschieden.', respuesta: true },
      { enunciado: 'Julia musste eine Woche auf ihre Brille warten.', respuesta: true },
      { enunciado: 'Julias Kopfschmerzen sind nach der Brille schlimmer geworden.', respuesta: false },
    ],
  },
  {
    slug: 'ein-wochenende-in-den-bergen',
    nivel: 'A2',
    titulo: 'Ein Wochenende in den Bergen',
    descripcion: 'Familie Berger verbringt ein Wochenende beim Wandern in den Bergen.',
    texto: `Am letzten Wochenende ist Familie Berger in die Berge gefahren. Sie wollten wandern und die frische Luft genießen. Weil das Wetter sehr gut war, sind sie schon früh am Morgen losgefahren.

Nach zwei Stunden Fahrt haben sie ihr Auto geparkt und sind zu Fuß weitergegangen. Der Weg war steil, aber die Kinder waren nicht müde. Als sie oben auf dem Berg angekommen sind, haben sie ein tolles Picknick gemacht. Sie haben Brote, Käse und Obst gegessen.

Am Nachmittag sind sie wieder zurück zum Auto gegangen. Alle waren müde, aber glücklich. „Das war ein perfekter Tag", hat Herr Berger gesagt. Die Familie will bald wieder in die Berge fahren.`,
    preguntas: [
      { enunciado: 'Familie Berger ist ans Meer gefahren.', respuesta: false },
      { enunciado: 'Sie sind früh am Morgen losgefahren.', respuesta: true },
      { enunciado: 'Der Weg auf den Berg war flach.', respuesta: false },
      { enunciado: 'Die Familie hat oben ein Picknick gemacht.', respuesta: true },
      { enunciado: 'Die Familie will nicht mehr in die Berge fahren.', respuesta: false },
    ],
  },
  {
    slug: 'die-postkarte-aus-italien',
    nivel: 'A2',
    titulo: 'Die Postkarte aus Italien',
    descripcion: 'Marco schickt seiner Freundin Nina eine Postkarte aus dem Italienurlaub.',
    texto: `Marco ist im Sommer nach Italien gefahren, weil er seine Großeltern besuchen wollte. Er hat dort zwei Wochen verbracht und viele schöne Orte gesehen. Von der Reise hat er seiner Freundin Nina eine Postkarte geschickt.

Auf der Postkarte hat er geschrieben, dass das Essen in Italien fantastisch ist. Er hat Pizza, Pasta und Eis gegessen. Außerdem hat er das Meer besucht und ist jeden Tag schwimmen gegangen. Nina hat sich sehr über die Postkarte gefreut.

Als Marco nach Hause gekommen ist, hat er Nina viele Fotos gezeigt. Nina fand die Bilder vom Meer besonders schön. Sie hat gesagt, dass sie auch gern einmal nach Italien fahren möchte. Marco hat versprochen, sie beim nächsten Mal mitzunehmen.`,
    preguntas: [
      { enunciado: 'Marco ist nach Spanien gefahren.', respuesta: false },
      { enunciado: 'Marco hat seine Großeltern besucht.', respuesta: true },
      { enunciado: 'Nina hat sich nicht über die Postkarte gefreut.', respuesta: false },
      { enunciado: 'Marco ist jeden Tag schwimmen gegangen.', respuesta: true },
      { enunciado: 'Nina möchte auch einmal nach Italien fahren.', respuesta: true },
    ],
  },
  {
    slug: 'der-erste-arbeitstag-in-der-neuen-firma',
    nivel: 'B1',
    titulo: 'Der erste Arbeitstag in der neuen Firma',
    descripcion: 'Simon erlebt seinen ersten Arbeitstag in einer neuen Firma.',
    texto: `Simon hatte lange auf diesen Tag gewartet: seinen ersten Arbeitstag in der neuen Firma. Obwohl er sehr nervös war, freute er sich auch darauf, endlich neue Kollegen kennenzulernen. Nachdem er sich am Empfang gemeldet hatte, wurde er von seiner neuen Chefin persönlich abgeholt.

Am Vormittag bekam Simon eine Führung durch das Gebäude und lernte die wichtigsten Kollegen kennen. Trotzdem fühlte er sich zunächst etwas überfordert, weil er so viele neue Informationen auf einmal verarbeiten musste. Ein Kollege namens Felix bemerkte das und half ihm geduldig bei den ersten Aufgaben.

Am Ende des Tages war Simon erschöpft, aber zufrieden. Er hatte das Gefühl, dass er sich in der neuen Firma wohlfühlen würde. Auf dem Heimweg rief er seine Eltern an und erzählte ihnen begeistert von seinem ersten Tag.`,
    preguntas: [
      { enunciado: 'Simon war an seinem ersten Arbeitstag überhaupt nicht nervös.', respuesta: false },
      { enunciado: 'Simons Chefin hat ihn persönlich abgeholt.', respuesta: true },
      { enunciado: 'Simon fühlte sich sofort überhaupt nicht überfordert.', respuesta: false },
      { enunciado: 'Felix hat Simon bei den ersten Aufgaben geholfen.', respuesta: true },
      { enunciado: 'Simon war am Ende des Tages unzufrieden.', respuesta: false },
    ],
  },
  {
    slug: 'das-strassenfest-in-der-nachbarschaft',
    nivel: 'B1',
    titulo: 'Das Straßenfest in der Nachbarschaft',
    descripcion: 'Die Nachbarn der Lindenstraße organisieren gemeinsam ein Straßenfest.',
    texto: `Jedes Jahr im Sommer organisieren die Bewohner der Lindenstraße ein Straßenfest, obwohl die Vorbereitungen viel Zeit kosten. In diesem Jahr übernahm Frau Wagner die Organisation, nachdem der frühere Organisator in eine andere Stadt gezogen war. Sie sammelte Ideen von allen Nachbarn und plante ein buntes Programm.

Am Tag des Festes bauten die Nachbarn schon früh morgens Tische und Stühle auf die Straße. Jede Familie brachte etwas zu essen mit, sodass am Ende ein riesiges Buffet entstand. Trotzdem gab es genug für alle, denn die Nachbarn teilten alles miteinander. Am Nachmittag spielte eine kleine Band, und viele Kinder tanzten auf der Straße.

Obwohl es am Abend leicht zu regnen begann, blieben die meisten Gäste noch lange zusammen. Frau Wagner war stolz, dass das Fest so gut gelungen war. Die Nachbarn beschlossen, das Straßenfest auch im nächsten Jahr wieder zu organisieren.`,
    preguntas: [
      { enunciado: 'Frau Wagner hat die Organisation des Festes übernommen.', respuesta: true },
      { enunciado: 'Jede Familie musste ihr eigenes Essen allein essen.', respuesta: false },
      { enunciado: 'Am Nachmittag spielte eine Band.', respuesta: true },
      { enunciado: 'Es hat den ganzen Tag stark geregnet.', respuesta: false },
      { enunciado: 'Die Nachbarn wollen das Fest im nächsten Jahr wiederholen.', respuesta: true },
    ],
  },
  {
    slug: 'der-austauschschueler-aus-frankreich',
    nivel: 'B1',
    titulo: 'Der Austauschschüler aus Frankreich',
    descripcion: 'Julien aus Frankreich lebt für einen Austausch bei Familie Hoffmann.',
    texto: `Seit einer Woche wohnt Julien, ein Austauschschüler aus Frankreich, bei der Familie Hoffmann. Julien spricht schon relativ gut Deutsch, obwohl er die Sprache erst seit zwei Jahren lernt. Am Anfang war er etwas schüchtern, doch das änderte sich schnell.

Tim, der Sohn der Familie Hoffmann, zeigte Julien die Schule und stellte ihn seinen Freunden vor. Nachdem die beiden Jungen gemeinsam Fußball gespielt hatten, wurden sie schnell gute Freunde. Julien erzählte Tim viel über das Leben in Frankreich, während Tim ihm die deutschen Bräuche erklärte.

Am Wochenende unternahm die Familie Hoffmann einen Ausflug in die Stadt, damit Julien mehr von Deutschland sehen konnte. Julien war begeistert von der alten Architektur. Er schrieb seinen Eltern, dass er sich in Deutschland sehr wohlfühle und schon jetzt traurig sei, dass der Austausch bald enden würde.`,
    preguntas: [
      { enunciado: 'Julien kommt aus Spanien.', respuesta: false },
      { enunciado: 'Julien und Tim wurden schnell Freunde.', respuesta: true },
      { enunciado: 'Julien spricht kein Wort Deutsch.', respuesta: false },
      { enunciado: 'Die Familie Hoffmann hat einen Ausflug in die Stadt gemacht.', respuesta: true },
      { enunciado: 'Julien freut sich, dass der Austausch bald endet.', respuesta: false },
    ],
  },
  {
    slug: 'die-woche-im-schullandheim',
    nivel: 'B1',
    titulo: 'Die Woche im Schullandheim',
    descripcion: 'Die Klasse 8b verbringt eine erlebnisreiche Woche im Schullandheim.',
    texto: `Nachdem die Klasse 8b monatelang auf die Fahrt gewartet hatte, ging es endlich los: eine ganze Woche im Schullandheim am Waldrand. Obwohl einige Schüler anfangs Heimweh hatten, verging die Zeit schnell, weil das Programm sehr abwechslungsreich war.

Am ersten Tag unternahmen die Schüler eine Wanderung durch den Wald und lernten dabei viel über heimische Pflanzen und Tiere. Danach bauten sie gemeinsam ein Lagerfeuer und sangen Lieder. Trotz des kühlen Wetters blieben alle bis spät in die Nacht draußen sitzen.

In den folgenden Tagen machten die Schüler Gruppenspiele, bastelten und besuchten einen nahegelegenen Bauernhof. Am letzten Abend gab es eine große Abschlussparty, bei der jede Gruppe etwas vorführte. Als der Bus am Ende der Woche zurück zur Schule fuhr, waren viele Schüler traurig, dass die schöne Zeit schon vorbei war.`,
    preguntas: [
      { enunciado: 'Die Klasse 8b war eine ganze Woche im Schullandheim.', respuesta: true },
      { enunciado: 'Kein Schüler hatte am Anfang Heimweh.', respuesta: false },
      { enunciado: 'Die Schüler haben einen Bauernhof besucht.', respuesta: true },
      { enunciado: 'Am letzten Abend gab es keine besondere Veranstaltung.', respuesta: false },
      { enunciado: 'Am Ende der Woche waren viele Schüler traurig.', respuesta: true },
    ],
  },
  {
    slug: 'das-recht-auf-unerreichbarkeit',
    nivel: 'B2',
    titulo: 'Das Recht auf Unerreichbarkeit',
    descripcion: 'Ein Diskurs über ein mögliches gesetzliches Recht, nach Feierabend nicht erreichbar sein zu müssen.',
    texto: `In den vergangenen Jahren wird zunehmend darüber diskutiert, ob Arbeitnehmern ein gesetzliches Recht auf Unerreichbarkeit außerhalb der Arbeitszeit eingeräumt werden sollte. Befürworter argumentieren, dass die ständige Erreichbarkeit über Smartphones und E-Mails die Grenze zwischen Arbeit und Freizeit zunehmend verschwimmen lasse, was langfristig zu Erschöpfung und psychischen Erkrankungen führen könne.

Einige europäische Länder haben bereits entsprechende Regelungen eingeführt, die es Beschäftigten erlauben, dienstliche Nachrichten nach Feierabend zu ignorieren, ohne arbeitsrechtliche Konsequenzen befürchten zu müssen. Kritiker wenden allerdings ein, dass solche Gesetze in vielen Branchen kaum umsetzbar wären, da etwa in international agierenden Unternehmen unterschiedliche Zeitzonen eine flexible Kommunikation erforderten. Zudem müsse berücksichtigt werden, dass nicht jede Erreichbarkeit erzwungen sei, sondern manche Beschäftigte freiwillig auch abends arbeiteten.

Würde ein solches Recht bundesweit eingeführt, müssten Unternehmen ihre internen Kommunikationsregeln grundlegend überdenken. Manche Experten schlagen vor, dass anstelle einer starren gesetzlichen Regelung individuelle Vereinbarungen zwischen Arbeitgebern und Arbeitnehmern getroffen werden sollten. Ob eine solche Lösung tatsächlich zu einer besseren Work-Life-Balance führen würde, bleibt jedoch umstritten.`,
    preguntas: [
      { enunciado: 'Laut Text diskutieren manche Länder über ein Recht auf Unerreichbarkeit.', respuesta: true },
      { enunciado: 'Befürworter meinen, dass ständige Erreichbarkeit keine negativen Folgen habe.', respuesta: false },
      { enunciado: 'Einige europäische Länder haben bereits entsprechende Gesetze eingeführt.', respuesta: true },
      { enunciado: 'Kritiker sehen bei international tätigen Unternehmen keine Probleme mit einem solchen Gesetz.', respuesta: false },
      { enunciado: 'Laut Text ist unumstritten, dass ein gesetzliches Recht die Work-Life-Balance verbessern würde.', respuesta: false },
    ],
  },
  {
    slug: 'algorithmen-und-meinungsbildung',
    nivel: 'B2',
    titulo: 'Algorithmen und Meinungsbildung',
    descripcion: 'Wie Algorithmen in sozialen Netzwerken die öffentliche Meinungsbildung beeinflussen.',
    texto: `Immer mehr Menschen informieren sich heutzutage über soziale Netzwerke, deren Inhalte von Algorithmen ausgewählt und sortiert werden. Diese Algorithmen entscheiden maßgeblich darüber, welche Nachrichten und Meinungen den Nutzern angezeigt werden, wobei in erster Linie jene Inhalte bevorzugt werden, die eine hohe Interaktion versprechen. Dadurch entsteht die Gefahr, dass polarisierende und emotional aufgeladene Beiträge stärker verbreitet werden als sachliche Informationen.

Kritiker warnen davor, dass auf diese Weise sogenannte Filterblasen entstehen könnten, in denen Nutzer vorwiegend mit Meinungen konfrontiert werden, die ihre eigene Sichtweise bestätigen. Dies erschwere es, unterschiedliche Perspektiven wahrzunehmen, und könne gesellschaftliche Spaltungen verstärken. Befürworter der Plattformen entgegnen jedoch, dass die Nutzer selbst durch ihr Verhalten Einfluss darauf nähmen, welche Inhalte ihnen angezeigt würden, und dass eine vollständige Neutralität der Algorithmen ohnehin kaum erreichbar sei.

Um diesem Problem entgegenzuwirken, fordern manche Politiker mehr Transparenz bei der Funktionsweise solcher Algorithmen, damit Nutzer nachvollziehen können, warum ihnen bestimmte Inhalte gezeigt werden. Ob eine solche Transparenzpflicht tatsächlich zu einer ausgewogeneren Meinungsbildung beitragen würde, ist unter Experten allerdings weiterhin umstritten.`,
    preguntas: [
      { enunciado: 'Algorithmen wählen laut Text aus, welche Inhalte Nutzern angezeigt werden.', respuesta: true },
      { enunciado: 'Laut Text werden vor allem sachliche und neutrale Beiträge bevorzugt verbreitet.', respuesta: false },
      { enunciado: 'Kritiker befürchten die Entstehung von Filterblasen.', respuesta: true },
      { enunciado: 'Befürworter der Plattformen sagen, dass Nutzer keinen Einfluss auf die angezeigten Inhalte hätten.', respuesta: false },
      { enunciado: 'Manche Politiker fordern mehr Transparenz bei Algorithmen.', respuesta: true },
    ],
  },
  {
    slug: 'leistungsdruck-im-abitur',
    nivel: 'B2',
    titulo: 'Leistungsdruck im Abitur',
    descripcion: 'Eine Debatte über den wachsenden Leistungsdruck während der Abiturzeit und mögliche Reformen.',
    texto: `In den letzten Jahren wird verstärkt diskutiert, ob der zunehmende Leistungsdruck während der Abiturzeit reformiert werden sollte. Viele Schülerinnen und Schüler berichten von Schlafmangel, Angstzuständen und körperlichen Beschwerden, die sie auf den enormen Druck zurückführen, in kurzer Zeit möglichst gute Noten zu erzielen. Bildungsexperten weisen darauf hin, dass dieser Druck nicht nur die schulischen Leistungen, sondern auch die psychische Gesundheit vieler Jugendlicher erheblich belaste.

Als Ursache wird häufig das derzeitige Bewertungssystem genannt, bei dem wenige zentrale Prüfungen über den gesamten weiteren Bildungsweg entscheiden. Befürworter einer Reform schlagen vor, stattdessen kontinuierliche Bewertungen während der gesamten Schulzeit stärker zu berücksichtigen, sodass einzelne Prüfungstage weniger Gewicht hätten. Gegner dieser Idee befürchten jedoch, dass dadurch die Vergleichbarkeit der Abschlüsse zwischen verschiedenen Schulen und Bundesländern verloren gehen könnte.

Würde das Bewertungssystem tatsächlich reformiert, müssten Lehrkräfte völlig neue Bewertungsmethoden entwickeln und anwenden. Manche Pädagogen betonen zudem, dass neben strukturellen Reformen auch eine bessere psychologische Unterstützung an Schulen notwendig wäre, damit Schülerinnen und Schüler besser mit Prüfungsstress umgehen könnten. Bislang konnte sich die Bildungspolitik jedoch auf keine einheitliche Lösung einigen.`,
    preguntas: [
      { enunciado: 'Viele Schüler berichten laut Text von Schlafmangel wegen des Leistungsdrucks.', respuesta: true },
      { enunciado: 'Laut Text hat der Leistungsdruck keinerlei Einfluss auf die psychische Gesundheit.', respuesta: false },
      { enunciado: 'Befürworter einer Reform wollen kontinuierliche Bewertungen stärker berücksichtigen.', respuesta: true },
      { enunciado: 'Gegner der Reform befürchten einen Verlust der Vergleichbarkeit der Abschlüsse.', respuesta: true },
      { enunciado: 'Die Bildungspolitik hat sich laut Text bereits auf eine einheitliche Lösung geeinigt.', respuesta: false },
    ],
  },
  {
    slug: 'im-freibad',
    nivel: 'A1',
    titulo: 'Im Schwimmbad',
    descripcion: 'Lisa und Tom verbringen einen heißen Sommertag im Schwimmbad.',
    texto: `Es ist Sommer und sehr heiß. Lisa und Tom gehen ins Schwimmbad. Sie packen Handtücher und Badesachen ein. Das Schwimmbad ist groß und hat drei Becken. Viele Kinder spielen im Wasser.

Lisa schwimmt gerne im großen Becken. Tom springt lieber vom Sprungbrett. Nach dem Schwimmen kaufen sie ein Eis am Kiosk. Das Eis schmeckt sehr lecker. Sie sitzen zusammen in der Sonne.

Am Nachmittag spielen sie Ball auf der Wiese. Danach sind sie müde und fahren nach Hause. Es war ein schöner Tag im Schwimmbad.`,
    preguntas: [
      { enunciado: 'Lisa und Tom gehen im Winter ins Schwimmbad.', respuesta: false },
      { enunciado: 'Das Schwimmbad hat drei Becken.', respuesta: true },
      { enunciado: 'Tom springt vom Sprungbrett.', respuesta: true },
      { enunciado: 'Sie kaufen ein Eis am Kiosk.', respuesta: true },
      { enunciado: 'Am Nachmittag schlafen sie auf der Wiese.', respuesta: false },
    ],
  },
  {
    slug: 'meine-katze',
    nivel: 'A1',
    titulo: 'Meine Katze',
    descripcion: 'Julia erzählt von ihrer Katze Mimi und ihrem Alltag.',
    texto: `Ich heiße Julia und ich habe eine Katze. Sie heißt Mimi. Mimi ist schwarz und weiß. Sie ist drei Jahre alt. Meine Katze schläft sehr viel.

Mimi frisst jeden Tag Fisch und Fleisch. Sie trinkt auch gerne Milch. Am Morgen spielt Mimi mit einem Ball. Am Abend liegt sie auf meinem Bett.

Ich putze jeden Tag ihren Fressnapf. Mimi ist sehr lieb und schnurrt oft. Ich liebe meine Katze sehr.`,
    preguntas: [
      { enunciado: 'Julias Katze heißt Mimi.', respuesta: true },
      { enunciado: 'Mimi ist fünf Jahre alt.', respuesta: false },
      { enunciado: 'Mimi frisst Fisch und Fleisch.', respuesta: true },
      { enunciado: 'Mimi spielt am Abend mit einem Ball.', respuesta: false },
      { enunciado: 'Mimi schnurrt oft.', respuesta: true },
    ],
  },
  {
    slug: 'bens-lieblingsfarbe',
    nivel: 'A1',
    titulo: 'Meine Lieblingsfarbe',
    descripcion: 'Ben erzählt, warum Blau seine Lieblingsfarbe ist.',
    texto: `Ich heiße Ben. Meine Lieblingsfarbe ist Blau. Der Himmel ist blau. Das Meer ist auch blau. Ich mag diese Farbe sehr.

Mein T-Shirt ist blau. Mein Fahrrad ist auch blau. Meine Schwester mag Rot. Ihr Zimmer ist rot und rosa. Wir haben verschiedene Lieblingsfarben.

Zum Geburtstag bekomme ich oft blaue Geschenke. Meine Mutter kauft mir einen blauen Rucksack für die Schule. Ich freue mich sehr darüber.`,
    preguntas: [
      { enunciado: 'Bens Lieblingsfarbe ist Grün.', respuesta: false },
      { enunciado: 'Der Himmel ist blau.', respuesta: true },
      { enunciado: 'Bens Fahrrad ist blau.', respuesta: true },
      { enunciado: 'Seine Schwester mag auch am liebsten Blau.', respuesta: false },
      { enunciado: 'Ben bekommt einen blauen Rucksack.', respuesta: true },
    ],
  },
  {
    slug: 'der-sturm-am-wochenende',
    nivel: 'A2',
    titulo: 'Der Sturm am Wochenende',
    descripcion: 'Ein heftiger Sturm verändert die Wochenendpläne von Nina und ihrer Familie.',
    texto: `Nina und ihre Familie haben für das Wochenende einen Ausflug an den See geplant. Am Freitagabend hat der Wetterbericht jedoch einen starken Sturm angekündigt, weil ein Tiefdruckgebiet über das Land gezogen ist. Ninas Vater hat sofort entschieden, dass sie den Ausflug verschieben müssen.

Am Samstagmorgen hat es tatsächlich stark gestürmt. Der Wind hat einen Ast vom großen Baum im Garten abgebrochen, und der Regen ist stundenlang gefallen. Nina war zuerst enttäuscht, weil sie sich so auf den See gefreut hatte. Ihre Mutter hat vorgeschlagen, dass sie stattdessen zusammen einen Kuchen backen.

Am Nachmittag haben sie Brettspiele gespielt und viel gelacht. Nina hat gemerkt, dass ein Tag zu Hause auch schön sein kann, wenn man ihn mit der Familie verbringt. Am Sonntag war der Sturm vorbei, und sie sind doch noch kurz an den See gefahren.`,
    preguntas: [
      { enunciado: 'Die Familie wollte am Wochenende an den See fahren.', respuesta: true },
      { enunciado: 'Der Sturm ist am Samstagmorgen gekommen.', respuesta: true },
      { enunciado: 'Nina war froh, dass der Ausflug ausgefallen ist.', respuesta: false },
      { enunciado: 'Die Familie hat am Samstag zusammen einen Kuchen gebacken.', respuesta: true },
      { enunciado: 'Am Sonntag hat es noch immer gestürmt.', respuesta: false },
    ],
  },
  {
    slug: 'die-verspaetete-bahn',
    nivel: 'A2',
    titulo: 'Die verspätete Bahn',
    descripcion: 'Markus verpasst wegen einer Zugverspätung fast ein wichtiges Vorstellungsgespräch.',
    texto: `Markus ist am Montag früh aufgestanden, weil er um neun Uhr ein Vorstellungsgespräch in einer anderen Stadt hatte. Er ist zum Bahnhof gefahren und hat auf seinen Zug gewartet. Plötzlich hat eine Durchsage gemeldet, dass sich der Zug wegen eines technischen Problems verspätet.

Markus wurde nervös, weil er pünktlich ankommen wollte. Er hat seinen zukünftigen Chef angerufen und erklärt, dass sein Zug Verspätung hat. Der Chef war sehr verständnisvoll und hat gesagt, dass Markus sich keine Sorgen machen soll. Nach zwanzig Minuten ist der Zug endlich gekommen.

Markus ist mit dem Taxi vom Bahnhof direkt zum Büro gefahren, weil er keine Zeit mehr verlieren wollte. Er ist nur fünf Minuten zu spät gekommen. Das Gespräch ist am Ende sehr gut gelaufen, und Markus hat den Job bekommen.`,
    preguntas: [
      { enunciado: 'Markus hatte am Montag ein Vorstellungsgespräch.', respuesta: true },
      { enunciado: 'Der Zug ist pünktlich gekommen.', respuesta: false },
      { enunciado: 'Markus hat seinen zukünftigen Chef angerufen.', respuesta: true },
      { enunciado: 'Der Chef war wütend über die Verspätung.', respuesta: false },
      { enunciado: 'Markus hat am Ende den Job bekommen.', respuesta: true },
    ],
  },
  {
    slug: 'der-neue-nachbar',
    nivel: 'A2',
    titulo: 'Der neue Nachbar',
    descripcion: 'Familie Berger lernt ihren neuen Nachbarn kennen.',
    texto: `Letzte Woche ist ein neuer Nachbar in das Haus neben Familie Berger eingezogen. Er heißt Herr Vogel und kommt aus Hamburg. Frau Berger hat ihn eingeladen, weil sie ihn gerne kennenlernen wollte. Herr Vogel hat sich sehr über die Einladung gefreut.

Am Samstag ist Herr Vogel zu Familie Berger gekommen und hat einen Kuchen mitgebracht. Sie haben zusammen Kaffee getrunken und über ihr Leben gesprochen. Herr Vogel hat erzählt, dass er wegen seiner neuen Arbeit umgezogen ist. Die Kinder von Familie Berger haben ihm viele Fragen über Hamburg gestellt.

Am Ende des Nachmittags hat Herr Vogel gesagt, dass er sich in der neuen Nachbarschaft schon sehr wohlfühlt. Familie Berger hat sich gefreut, dass sie einen so netten Nachbarn haben. Sie haben sich verabredet, bald wieder zusammen Kaffee zu trinken.`,
    preguntas: [
      { enunciado: 'Herr Vogel kommt aus München.', respuesta: false },
      { enunciado: 'Frau Berger hat Herrn Vogel eingeladen.', respuesta: true },
      { enunciado: 'Herr Vogel hat einen Kuchen mitgebracht.', respuesta: true },
      { enunciado: 'Herr Vogel ist wegen der Schule umgezogen.', respuesta: false },
      { enunciado: 'Familie Berger findet ihren neuen Nachbarn nett.', respuesta: true },
    ],
  },
  {
    slug: 'das-schulkonzert',
    nivel: 'B1',
    titulo: 'Das Schulkonzert',
    descripcion: 'Trotz Lampenfieber wird das Schulkonzert für Miriam zu einem unvergesslichen Erlebnis.',
    texto: `Seit Wochen übt Miriam jeden Tag Klavier, weil sie beim großen Schulkonzert ein Solostück spielen soll. Obwohl sie das Stück inzwischen fast perfekt beherrscht, wird sie jedes Mal nervös, wenn sie an den Auftritt denkt. Ihre Musiklehrerin hat ihr versichert, dass sie gut vorbereitet ist, doch Miriam bleibt trotzdem skeptisch.

Am Abend des Konzerts sitzt die ganze Aula voller Eltern und Schüler. Nachdem die ersten Klassen ihre Lieder gesungen haben, wird es langsam Zeit für Miriams Auftritt. Ihr Herz klopft laut, als sie auf die Bühne geht, doch sobald sie zu spielen beginnt, verschwindet die Angst. Sie konzentriert sich nur noch auf die Musik.

Nachdem Miriam das letzte Stück gespielt hat, bricht lauter Applaus aus. Ihre Eltern stehen auf und klatschen stolz. Obwohl der Auftritt nur wenige Minuten gedauert hat, fühlt sich Miriam danach, als hätte sie etwas Großes geschafft. Sie beschließt, im nächsten Jahr wieder mitzumachen.`,
    preguntas: [
      { enunciado: 'Miriam übt seit Wochen für das Schulkonzert.', respuesta: true },
      { enunciado: 'Miriam ist vor ihrem Auftritt völlig entspannt.', respuesta: false },
      { enunciado: 'Nach den ersten Klassen kommt Miriam an die Reihe.', respuesta: true },
      { enunciado: 'Miriam bricht ihren Auftritt wegen der Nervosität ab.', respuesta: false },
      { enunciado: 'Miriam möchte im nächsten Jahr wieder beim Konzert mitmachen.', respuesta: true },
    ],
  },
  {
    slug: 'der-erste-tag-in-der-neuen-stadt',
    nivel: 'B1',
    titulo: 'Der erste Tag in der neuen Stadt',
    descripcion: 'Jonas zieht in eine neue Stadt und muss sich trotz Unsicherheit zurechtfinden.',
    texto: `Jonas ist vor wenigen Tagen mit seiner Familie nach Leipzig gezogen, weil sein Vater dort eine neue Stelle angetreten hat. Obwohl Jonas sich auf das Abenteuer gefreut hat, fühlt er sich am ersten Schultag ziemlich unsicher, da er niemanden in der neuen Klasse kennt. Trotzdem versucht er, mutig zu wirken, als er den Klassenraum betritt.

Nachdem der Lehrer ihn den anderen Schülern vorgestellt hat, setzt sich Jonas neben einen Jungen namens Paul. Paul erklärt ihm freundlich, wo sich die wichtigsten Räume der Schule befinden, obwohl er selbst noch nie mit einem neuen Mitschüler gesprochen hat. In der Pause zeigt Paul ihm den Schulhof und stellt ihn seinen Freunden vor.

Am Ende des Tages ist Jonas erleichtert, dass alles besser gelaufen ist, als er erwartet hatte. Nachdem er abends seinen alten Freunden von seinem Tag erzählt hat, merkt er, dass er sich schon auf den nächsten Schultag freut. Die neue Stadt erscheint ihm plötzlich gar nicht mehr so fremd.`,
    preguntas: [
      { enunciado: 'Jonas ist wegen der neuen Arbeit seines Vaters umgezogen.', respuesta: true },
      { enunciado: 'Jonas kennt am ersten Schultag bereits viele Mitschüler.', respuesta: false },
      { enunciado: 'Paul zeigt Jonas die Schule und stellt ihn seinen Freunden vor.', respuesta: true },
      { enunciado: 'Jonas fühlt sich am Ende des Tages schlechter als am Morgen.', respuesta: false },
      { enunciado: 'Jonas freut sich schon auf den nächsten Schultag.', respuesta: true },
    ],
  },
  {
    slug: 'rentensystem-im-wandel',
    nivel: 'B2',
    titulo: 'Das Rentensystem im Wandel',
    descripcion: 'Angesichts des demografischen Wandels wird über eine grundlegende Reform des Rentensystems diskutiert.',
    texto: `Der demografische Wandel stellt das deutsche Rentensystem vor erhebliche Herausforderungen, da immer weniger Beitragszahler für eine wachsende Zahl von Rentnerinnen und Rentnern aufkommen müssen. Während in den vergangenen Jahrzehnten das Verhältnis zwischen Erwerbstätigen und Rentenempfängern noch relativ ausgeglichen war, verschiebt sich dieses Gleichgewicht zunehmend zugunsten der älteren Generation. Ökonomen warnen davor, dass das bestehende, auf dem Umlageverfahren basierende System langfristig nicht mehr finanzierbar sein könnte.

Um die Finanzierung zu sichern, werden derzeit verschiedene Reformmodelle diskutiert. Manche Experten schlagen vor, dass das Renteneintrittsalter schrittweise weiter angehoben werden sollte, damit die Erwerbsphase entsprechend der steigenden Lebenserwartung verlängert wird. Andere plädieren dafür, dass zusätzlich zur gesetzlichen Rente eine verpflichtende, kapitalgedeckte Altersvorsorge eingeführt werden müsse, wie sie in einigen skandinavischen Ländern bereits erfolgreich praktiziert wird.

Würde das Renteneintrittsalter tatsächlich weiter erhöht, müssten insbesondere Beschäftigte in körperlich anstrengenden Berufen mit erheblichen Nachteilen rechnen, da sie oft schon vor Erreichen des offiziellen Rentenalters gesundheitlich beeinträchtigt sind. Gewerkschaften fordern deshalb, dass eine mögliche Reform durch flexible Übergangsregelungen und branchenspezifische Ausnahmen ergänzt werden sollte, damit nicht alle Berufsgruppen gleichermaßen belastet werden.

Ob eine grundlegende Reform des Rentensystems in absehbarer Zeit umgesetzt wird, bleibt angesichts der politischen Uneinigkeit ungewiss. Klar ist jedoch, dass ohne strukturelle Anpassungen die finanzielle Stabilität des Systems mittelfristig gefährdet wäre.`,
    preguntas: [
      { enunciado: 'Laut Text sinkt die Zahl der Beitragszahler im Verhältnis zu den Rentnern.', respuesta: true },
      { enunciado: 'Ökonomen halten das bestehende Umlagesystem langfristig für uneingeschränkt finanzierbar.', respuesta: false },
      { enunciado: 'Manche Experten fordern eine schrittweise Anhebung des Renteneintrittsalters.', respuesta: true },
      { enunciado: 'Laut Text hätte eine Anhebung des Renteneintrittsalters für alle Berufsgruppen die gleichen Folgen.', respuesta: false },
      { enunciado: 'Gewerkschaften fordern flexible Übergangsregelungen für bestimmte Branchen.', respuesta: true },
    ],
  },
  {
    slug: 'datenschutz-im-digitalen-zeitalter',
    nivel: 'B2',
    titulo: 'Datenschutz im digitalen Zeitalter',
    descripcion: 'Zwischen persönlicher Freiheit und wirtschaftlichem Interesse: die Debatte um den Schutz persönlicher Daten.',
    texto: `In einer zunehmend digitalisierten Gesellschaft werden täglich enorme Mengen persönlicher Daten gesammelt, ausgewertet und weiterverkauft, oft ohne dass die betroffenen Nutzerinnen und Nutzer sich dessen vollständig bewusst sind. Unternehmen begründen diese Praxis meist damit, dass personalisierte Werbung und maßgeschneiderte Dienstleistungen nur auf Grundlage umfangreicher Datenanalysen möglich seien. Datenschützer hingegen warnen, dass durch die systematische Erfassung individueller Verhaltensmuster ein bedenkliches Maß an Kontrolle über das Privatleben der Menschen entstehe.

Mit der Einführung der Datenschutz-Grundverordnung sollte europaweit ein einheitlicher, hoher Schutzstandard geschaffen werden, der Bürgerinnen und Bürgern mehr Kontrolle über ihre eigenen Daten gibt. Kritiker bemängeln jedoch, dass die Umsetzung in der Praxis häufig lückenhaft bleibe, da viele Unternehmen komplizierte Einwilligungserklärungen verwendeten, die von den meisten Nutzern ungelesen akzeptiert würden. Befürworter der Verordnung entgegnen, dass zumindest ein rechtlicher Rahmen geschaffen worden sei, auf dessen Grundlage weitere Verbesserungen aufgebaut werden könnten.

Würden strengere Kontrollen eingeführt und Verstöße konsequenter geahndet, müssten viele Unternehmen ihre Geschäftsmodelle grundlegend überdenken, da diese oft stark von der Verwertung persönlicher Daten abhängen. Gleichzeitig geben manche Experten zu bedenken, dass übermäßig strikte Regelungen auch die Innovationsfähigkeit kleinerer, datenbasierter Start-ups einschränken könnten.

Letztlich bleibt die Debatte um einen angemessenen Ausgleich zwischen individuellem Datenschutz und wirtschaftlichem Nutzen ein zentrales Thema der digitalen Gesellschaft, dessen endgültige Lösung bislang noch aussteht.`,
    preguntas: [
      { enunciado: 'Laut Text werden persönliche Daten häufig ohne vollständiges Bewusstsein der Nutzer gesammelt.', respuesta: true },
      { enunciado: 'Datenschützer sehen in der Datensammlung keinerlei Risiko für die Privatsphäre.', respuesta: false },
      { enunciado: 'Die Datenschutz-Grundverordnung sollte einen einheitlichen Schutzstandard in Europa schaffen.', respuesta: true },
      { enunciado: 'Kritiker sind der Meinung, dass die Umsetzung der Verordnung in der Praxis lückenlos funktioniert.', respuesta: false },
      { enunciado: 'Manche Experten befürchten, dass strengere Regelungen Start-ups einschränken könnten.', respuesta: true },
    ],
  },
  {
    slug: 'tierwohl-in-der-landwirtschaft',
    nivel: 'B2',
    titulo: 'Tierwohl in der Landwirtschaft',
    descripcion: 'Die Debatte über artgerechte Tierhaltung stellt Landwirtschaft und Verbraucher vor schwierige Fragen.',
    texto: `In den letzten Jahren ist das Thema Tierwohl zunehmend in den Mittelpunkt der öffentlichen Debatte über die Landwirtschaft gerückt. Tierschutzorganisationen kritisieren seit Langem die Bedingungen in vielen konventionellen Betrieben, in denen Nutztiere häufig auf engem Raum gehalten werden, um die Produktionskosten möglichst niedrig zu halten. Verbraucherinnen und Verbraucher zeigen sich zunehmend sensibilisiert, kaufen jedoch weiterhin überwiegend günstige Produkte aus konventioneller Haltung.

Um dieser Diskrepanz zwischen Anspruch und tatsächlichem Kaufverhalten entgegenzuwirken, wurde in Deutschland ein staatliches Tierwohlkennzeichen eingeführt, das Verbrauchern auf einen Blick zeigen soll, unter welchen Bedingungen ein Tier gehalten wurde. Landwirte, die in artgerechtere Ställe investieren möchten, stehen jedoch vor erheblichen finanziellen Hürden, da entsprechende Umbauten oft hohe Investitionen erfordern, die sich nicht immer durch höhere Verkaufspreise refinanzieren lassen.

Würden verbindliche, höhere Tierwohlstandards für die gesamte Branche eingeführt, müssten viele kleinere Betriebe befürchten, im internationalen Wettbewerb mit günstigeren Importprodukten nicht mehr bestehen zu können. Befürworter strengerer Regeln argumentieren dagegen, dass eine faire Bepreisung, die auch ökologische und ethische Kosten berücksichtigt, langfristig unumgänglich sei, wenn eine nachhaltigere Tierhaltung erreicht werden solle.

Die Frage, wer letztlich für die Kosten einer besseren Tierhaltung aufkommen soll, ob der Staat, die Landwirte oder die Verbraucher selbst, bleibt politisch umstritten und dürfte die öffentliche Debatte auch in den kommenden Jahren weiter prägen.`,
    preguntas: [
      { enunciado: 'Tierschutzorganisationen kritisieren seit Langem die Haltungsbedingungen in konventionellen Betrieben.', respuesta: true },
      { enunciado: 'Laut Text kaufen die meisten Verbraucher trotz ihrer Bedenken überwiegend teure Bio-Produkte.', respuesta: false },
      { enunciado: 'In Deutschland wurde ein staatliches Tierwohlkennzeichen eingeführt.', respuesta: true },
      { enunciado: 'Laut Text können sich Investitionen in artgerechtere Ställe immer problemlos refinanzieren.', respuesta: false },
      { enunciado: 'Befürworter strengerer Regeln fordern eine faire Bepreisung ökologischer und ethischer Kosten.', respuesta: true },
    ],
  },
  {
    slug: 'oeffentlicher-nahverkehr-und-klimapolitik',
    nivel: 'B2',
    titulo: 'Öffentlicher Nahverkehr und Klimapolitik',
    descripcion: 'Kann ein ausgebauter öffentlicher Nahverkehr einen entscheidenden Beitrag zur Verkehrswende leisten?',
    texto: `Angesichts der Klimaziele, zu deren Einhaltung sich Deutschland völkerrechtlich verpflichtet hat, gerät der Verkehrssektor zunehmend in den Fokus politischer Debatten, da er für einen erheblichen Anteil der nationalen Treibhausgasemissionen verantwortlich ist. Während in anderen Sektoren wie der Energiewirtschaft bereits deutliche Fortschritte erzielt wurden, stagnieren die Emissionen im Verkehrsbereich seit Jahren nahezu unverändert. Klimapolitiker sehen im Ausbau des öffentlichen Nahverkehrs einen zentralen Hebel, um diese Entwicklung umzukehren.

Mit der Einführung eines bundesweit gültigen, vergünstigten Tickets sollte Bus- und Bahnfahren attraktiver gemacht und ein Anreiz geschaffen werden, auf das eigene Auto zu verzichten. Erste Auswertungen deuten darauf hin, dass zwar deutlich mehr Fahrgäste befördert wurden, ein Großteil davon jedoch zuvor bereits Fahrrad oder Bahn genutzt hatte, anstatt tatsächlich vom Auto umzusteigen. Kritiker bemängeln daher, dass die erhoffte Verlagerungswirkung bislang geringer ausgefallen sei als ursprünglich erwartet.

Würde der öffentliche Nahverkehr, insbesondere in ländlichen Regionen, deutlich ausgebaut, in denen bislang häufig nur unzureichende Verbindungen bestehen, könnten mehr Menschen tatsächlich zum Umstieg bewegt werden. Ein solcher Ausbau erfordert jedoch enorme, über viele Jahre verteilte Investitionen in Infrastruktur und Personal, deren Finanzierung angesichts knapper öffentlicher Haushalte politisch umstritten bleibt.

Ob günstige Ticketpreise allein ausreichen, um eine echte Verkehrswende herbeizuführen, wird von vielen Verkehrsforschern bezweifelt. Vielmehr, so ihr Argument, müsse ein dichteres Nahverkehrsnetz mit gezielten Maßnahmen zur Einschränkung des Autoverkehrs in den Städten kombiniert werden, damit ein spürbarer klimapolitischer Effekt erzielt werden kann.`,
    preguntas: [
      { enunciado: 'Der Verkehrssektor trägt laut Text erheblich zu den Treibhausgasemissionen bei.', respuesta: true },
      { enunciado: 'Die Emissionen im Verkehrsbereich sind laut Text in den letzten Jahren deutlich gesunken.', respuesta: false },
      { enunciado: 'Ein Großteil der neuen Ticketnutzer ist laut ersten Auswertungen tatsächlich vom Auto umgestiegen.', respuesta: false },
      { enunciado: 'In ländlichen Regionen bestehen laut Text bislang häufig nur unzureichende Verbindungen.', respuesta: true },
      { enunciado: 'Verkehrsforscher halten günstige Ticketpreise allein für ausreichend, um die Verkehrswende zu erreichen.', respuesta: false },
    ],
  },
  {
    slug: 'im-zug',
    nivel: 'A1',
    titulo: 'Im Zug',
    descripcion: 'Lisa fährt mit dem Zug zu ihrer Oma.',
    texto: `Lisa steht am Bahnhof. Der Zug kommt um neun Uhr. Lisa hat eine Fahrkarte. Sie sucht Platz vierzehn. Im Zug ist es warm. Lisa setzt sich ans Fenster. Sie sieht Felder und Bäume. Der Zug fährt schnell.

Nach einer Stunde hält der Zug. Lisa steigt aus. Ihre Oma wartet am Bahnsteig. „Hallo, Lisa!", ruft die Oma. Sie umarmen sich. Zusammen gehen sie nach Hause. Lisa freut sich sehr.`,
    preguntas: [
      { enunciado: 'Lisa fährt mit dem Bus.', respuesta: false },
      { enunciado: 'Der Zug kommt um neun Uhr.', respuesta: true },
      { enunciado: 'Lisa sitzt am Fenster.', respuesta: true },
      { enunciado: 'Die Fahrt dauert zwei Stunden.', respuesta: false },
      { enunciado: 'Die Oma wartet am Bahnsteig.', respuesta: true },
    ],
  },
  {
    slug: 'mein-tagesablauf',
    nivel: 'A1',
    titulo: 'Mein Tagesablauf',
    descripcion: 'Paul erzählt von seinem normalen Tag.',
    texto: `Paul steht um sieben Uhr auf. Er putzt seine Zähne. Dann isst er Frühstück. Er trinkt Kakao und isst Brot. Um acht Uhr geht er zur Schule. Die Schule ist nicht weit.

Nach der Schule spielt Paul Fußball. Er trifft seine Freunde im Park. Am Abend isst die Familie zusammen. Danach macht Paul Hausaufgaben. Um neun Uhr geht er ins Bett.`,
    preguntas: [
      { enunciado: 'Paul steht um sieben Uhr auf.', respuesta: true },
      { enunciado: 'Paul trinkt Kaffee zum Frühstück.', respuesta: false },
      { enunciado: 'Die Schule ist weit weg.', respuesta: false },
      { enunciado: 'Paul spielt nach der Schule Fußball.', respuesta: true },
      { enunciado: 'Paul geht um acht Uhr ins Bett.', respuesta: false },
    ],
  },
  {
    slug: 'am-telefon',
    nivel: 'A1',
    titulo: 'Am Telefon',
    descripcion: 'Tim ruft seinen Freund Ben an.',
    texto: `Tim hat ein Handy. Er ruft seinen Freund Ben an. „Hallo Ben, wie geht's?", fragt Tim. Ben antwortet: „Gut, danke! Und dir?" Tim erzählt von der Schule. Ben hört zu.

Dann fragt Tim: „Hast du Zeit am Samstag?" Ben sagt: „Ja, ich habe Zeit." Sie planen einen Ausflug ins Schwimmbad. Beide freuen sich auf das Wochenende. Am Ende sagen sie „Tschüss" und legen auf.`,
    preguntas: [
      { enunciado: 'Tim ruft seine Schwester an.', respuesta: false },
      { enunciado: 'Ben antwortet, dass es ihm gut geht.', respuesta: true },
      { enunciado: 'Sie sprechen über die Schule.', respuesta: true },
      { enunciado: 'Ben hat am Samstag keine Zeit.', respuesta: false },
      { enunciado: 'Sie planen einen Ausflug ins Schwimmbad.', respuesta: true },
    ],
  },
  {
    slug: 'der-skiurlaub',
    nivel: 'A2',
    titulo: 'Der Skiurlaub',
    descripcion: 'Familie Berger hat eine Woche Skiurlaub in Österreich gemacht.',
    texto: `Familie Berger ist letzte Woche nach Österreich gefahren, weil sie Skiurlaub machen wollte. Die Kinder haben sich sehr gefreut, denn sie hatten den Schnee schon lange nicht mehr gesehen. Am ersten Tag hat die Familie einen Skikurs gebucht, damit die Kinder das Skifahren richtig lernen konnten. Der Lehrer war geduldig, und schon am zweiten Tag konnten die Kinder allein den Berg hinunterfahren.

Am dritten Tag ist es sehr kalt geworden, aber die Sonne hat trotzdem geschienen. Die Familie hat mittags in einer Berghütte gegessen und heißen Kakao getrunken. Der Vater hat gesagt, dass er noch nie so einen schönen Ausblick gesehen hat. Am letzten Abend haben sie zusammen ein Feuerwerk beobachtet, weil es in dem Skiort eine kleine Feier gab.

Als die Familie wieder zu Hause ankam, waren alle müde, aber glücklich. Die Kinder haben schon gefragt, wann sie wieder in den Skiurlaub fahren können. Die Mutter hat gelacht und gesagt, dass sie im nächsten Winter bestimmt wiederkommen.`,
    preguntas: [
      { enunciado: 'Familie Berger ist nach Österreich gefahren.', respuesta: true },
      { enunciado: 'Die Kinder kannten Skifahren schon sehr gut.', respuesta: false },
      { enunciado: 'Am dritten Tag hat es geregnet.', respuesta: false },
      { enunciado: 'Die Familie hat in einer Berghütte gegessen.', respuesta: true },
      { enunciado: 'Die Kinder wollen nicht mehr in den Skiurlaub fahren.', respuesta: false },
    ],
  },
  {
    slug: 'die-fahrradpanne',
    nivel: 'A2',
    titulo: 'Die Fahrradpanne',
    descripcion: 'Jonas hatte eine Fahrradpanne auf dem Weg zur Arbeit.',
    texto: `Jonas ist heute Morgen mit dem Fahrrad zur Arbeit gefahren, weil das Wetter so schön war. Nach zehn Minuten hat er plötzlich ein komisches Geräusch gehört. Er ist abgestiegen und hat gesehen, dass sein Hinterreifen platt war. Jonas hatte keine Luftpumpe dabei, deshalb konnte er nicht weiterfahren.

Zum Glück ist ein Nachbar vorbeigekommen, den Jonas gut kennt. Der Nachbar hat sofort angehalten, als er Jonas mit dem kaputten Fahrrad gesehen hat. Er hat gesagt, dass er ein Flickzeug im Auto hat. Gemeinsam haben sie den Reifen repariert, obwohl es nicht einfach war. Nach zwanzig Minuten konnte Jonas endlich weiterfahren.

Als Jonas im Büro ankam, war er eine Stunde zu spät. Sein Chef hat gefragt, was passiert ist, und Jonas hat die Geschichte erzählt. Der Chef hat verstanden, dass es kein Problem war, weil Jonas sich sofort gemeldet hatte.`,
    preguntas: [
      { enunciado: 'Jonas ist mit dem Auto zur Arbeit gefahren.', respuesta: false },
      { enunciado: 'Der Hinterreifen von Jonas war platt.', respuesta: true },
      { enunciado: 'Jonas hatte eine Luftpumpe dabei.', respuesta: false },
      { enunciado: 'Ein Nachbar hat Jonas geholfen.', respuesta: true },
      { enunciado: 'Jonas kam pünktlich im Büro an.', respuesta: false },
    ],
  },
  {
    slug: 'ein-besuch-im-krankenhaus',
    nivel: 'A2',
    titulo: 'Ein Besuch im Krankenhaus',
    descripcion: 'Marie besucht ihren Bruder, der sich beim Fußball verletzt hat.',
    texto: `Maries Bruder Tom hat sich am Wochenende beim Fußballspielen das Bein gebrochen, weil er unglücklich gestürzt ist. Er musste sofort ins Krankenhaus gebracht werden. Marie war sehr besorgt, als sie die Nachricht bekommen hat. Am nächsten Tag ist sie mit ihrer Mutter ins Krankenhaus gefahren, um Tom zu besuchen.

Als sie das Zimmer betreten haben, hat Tom im Bett gelegen und ferngesehen. Sein Bein war eingegipst, aber er hat gelächelt, weil er keine großen Schmerzen mehr hatte. Marie hat ihm Trauben und ein Comicheft mitgebracht. Sie haben zusammen gelacht und über das Fußballspiel gesprochen, obwohl es für Tom nicht so lustig war.

Der Arzt hat gesagt, dass Tom noch zwei Wochen im Gips bleiben muss. Tom war traurig, weil er nicht mehr Fußball spielen konnte, aber er hat verstanden, dass die Erholung wichtig ist. Marie hat versprochen, ihn jeden Tag zu besuchen.`,
    preguntas: [
      { enunciado: 'Tom hat sich beim Fußball das Bein gebrochen.', respuesta: true },
      { enunciado: 'Marie hat ihren Bruder nicht besucht.', respuesta: false },
      { enunciado: 'Tom hatte im Krankenhaus starke Schmerzen.', respuesta: false },
      { enunciado: 'Marie hat Trauben mitgebracht.', respuesta: true },
      { enunciado: 'Tom muss noch zwei Wochen im Gips bleiben.', respuesta: true },
    ],
  },
  {
    slug: 'digital-detox',
    nivel: 'B1',
    titulo: 'Digital Detox – Ein Wochenende ohne Handy',
    descripcion: 'Immer mehr Menschen probieren ein Wochenende ganz ohne Smartphone aus.',
    texto: `Nachdem Sabine bemerkt hatte, dass sie täglich mehrere Stunden am Handy verbrachte, beschloss sie, ein Wochenende ohne Smartphone zu verbringen. Am Freitagabend schaltete sie ihr Handy aus und legte es in eine Schublade. Obwohl sie zunächst unruhig war, weil sie ständig das Gefühl hatte, etwas zu verpassen, gewöhnte sie sich schon am nächsten Morgen an die neue Ruhe.

Am Samstag verbrachte Sabine viel Zeit im Garten und las ein Buch, das schon seit Monaten ungelesen auf ihrem Nachttisch lag. Trotzdem fiel es ihr manchmal schwer, nicht automatisch nach dem Handy zu greifen, wenn sie eine kurze Pause hatte. Am Abend traf sie sich mit Freunden, und das Gespräch war intensiver als sonst, weil niemand ständig auf den Bildschirm schaute.

Als Sabine am Sonntagabend ihr Handy wieder einschaltete, war sie überrascht, wie wenig ihr wirklich gefehlt hatte. Seitdem plant sie regelmäßig digitale Auszeiten, obwohl ihre Freunde am Anfang skeptisch waren. Viele Studien zeigen inzwischen, dass solche Pausen die Konzentration verbessern und Stress reduzieren können.`,
    preguntas: [
      { enunciado: 'Sabine hat ihr Handy das ganze Wochenende benutzt.', respuesta: false },
      { enunciado: 'Sabine hat am Samstag ein Buch gelesen.', respuesta: true },
      { enunciado: 'Es fiel Sabine von Anfang an leicht, ohne Handy auszukommen.', respuesta: false },
      { enunciado: 'Das Treffen mit Freunden war intensiver als sonst.', respuesta: true },
      { enunciado: 'Sabine plant seitdem keine weiteren digitalen Auszeiten.', respuesta: false },
    ],
  },
  {
    slug: 'vereinsleben-in-deutschland',
    nivel: 'B1',
    titulo: 'Vereinsleben in Deutschland',
    descripcion: 'Ein Bericht über die Bedeutung von Vereinen im deutschen Alltag.',
    texto: `In Deutschland gibt es eine lange Tradition des Vereinslebens, die bis heute eine wichtige Rolle im Alltag vieler Menschen spielt. Ob Sportverein, Musikverein oder Gartenverein – fast jede Stadt und jedes Dorf bietet zahlreiche Möglichkeiten, sich einer Gemeinschaft anzuschließen. Nachdem Markus in eine neue Stadt gezogen war, entschied er sich, einem Fußballverein beizutreten, um schneller neue Kontakte zu knüpfen.

Obwohl er anfangs Zweifel hatte, ob er in der Mannschaft willkommen sein würde, wurde er schon beim ersten Training herzlich aufgenommen. Die anderen Spieler luden ihn nach dem Training sogar zu einem gemeinsamen Essen ein. Trotzdem dauerte es einige Wochen, bis Markus sich wirklich als Teil des Vereins fühlte, weil er die anderen Mitglieder erst richtig kennenlernen musste.

Heute trainiert Markus zweimal pro Woche und hat durch den Verein enge Freundschaften geschlossen. Viele Soziologen betonen, dass Vereine einen wichtigen Beitrag zum sozialen Zusammenhalt leisten, besonders in Zeiten, in denen viele Menschen zunehmend isoliert leben. Markus kann das aus eigener Erfahrung bestätigen und empfiehlt jedem, der neu in eine Stadt zieht, einem Verein beizutreten.`,
    preguntas: [
      { enunciado: 'Markus ist einem Fußballverein beigetreten, nachdem er umgezogen war.', respuesta: true },
      { enunciado: 'Markus wurde bei der Mannschaft schlecht aufgenommen.', respuesta: false },
      { enunciado: 'Es dauerte einige Wochen, bis sich Markus als Teil des Vereins fühlte.', respuesta: true },
      { enunciado: 'Markus trainiert nur einmal im Monat.', respuesta: false },
      { enunciado: 'Markus empfiehlt anderen, keinem Verein beizutreten.', respuesta: false },
    ],
  },
  {
    slug: 'kulturschock-im-auslandssemester',
    nivel: 'B1',
    titulo: 'Kulturschock im Auslandssemester',
    descripcion: 'Eine Studentin berichtet von ihrem Kulturschock während eines Auslandssemesters in Japan.',
    texto: `Als Jana für ein Auslandssemester nach Japan flog, freute sie sich sehr auf die neue Erfahrung. In den ersten Tagen war jedoch fast alles ungewohnt für sie: die Höflichkeitsregeln, das Essen und sogar der öffentliche Nahverkehr funktionierten anders, als sie es erwartet hatte. Obwohl sie sich vorher intensiv vorbereitet hatte, fühlte sie sich in den ersten Wochen oft unsicher und überfordert.

Nachdem Jana einige Wochen an der Universität verbracht hatte, lernte sie andere internationale Studierende kennen, die ähnliche Erfahrungen gemacht hatten. Gemeinsam besprachen sie ihre Eindrücke, und Jana merkte, dass ihr Gefühl der Fremdheit ganz normal war. Trotzdem brauchte sie noch mehrere Monate, bis sie sich in ihrem neuen Alltag wirklich wohlfühlte.

Am Ende ihres Auslandssemesters war Jana überzeugt, dass der anfängliche Kulturschock eine wichtige Erfahrung gewesen war. Sie hatte gelernt, geduldiger mit sich selbst zu sein und offener auf ungewohnte Situationen zu reagieren. Als sie nach Deutschland zurückkehrte, vermisste sie schon nach kurzer Zeit das Leben in Japan.`,
    preguntas: [
      { enunciado: 'Jana fand alles in Japan sofort vertraut.', respuesta: false },
      { enunciado: 'Jana hat andere internationale Studierende kennengelernt.', respuesta: true },
      { enunciado: 'Jana fühlte sich schon nach wenigen Tagen völlig wohl.', respuesta: false },
      { enunciado: 'Jana hält den Kulturschock rückblickend für eine wichtige Erfahrung.', respuesta: true },
      { enunciado: 'Jana vermisste Japan nach ihrer Rückkehr nicht.', respuesta: false },
    ],
  },
  {
    slug: 'plastikmuell-und-meeresschutz',
    nivel: 'B2',
    titulo: 'Plastikmüll und Meeresschutz',
    descripcion: 'Wie Plastikmüll die Weltmeere bedroht und welche Lösungen diskutiert werden.',
    texto: `Jedes Jahr gelangen schätzungsweise mehrere Millionen Tonnen Plastikmüll in die Weltmeere, wo er sich zu einem der drängendsten Umweltprobleme unserer Zeit entwickelt hat. Besonders problematisch ist, dass Kunststoffe im Meerwasser nur sehr langsam abgebaut werden und sich stattdessen in immer kleinere Partikel, sogenanntes Mikroplastik, zersetzen. Diese Partikel werden mittlerweile in nahezu allen Meeresorganismen nachgewiesen und gelangen über die Nahrungskette letztlich auch in den menschlichen Körper.

Würde die Plastikproduktion weltweit nicht drastisch reduziert, so warnen Umweltorganisationen, könnte sich die Menge des im Meer treibenden Plastikmülls bis zur Mitte des Jahrhunderts noch einmal vervielfachen. Um dieser Entwicklung entgegenzuwirken, wurden in den vergangenen Jahren zahlreiche internationale Abkommen verhandelt, deren Umsetzung sich jedoch als schwierig erweist, da die wirtschaftlichen Interessen der beteiligten Staaten oft auseinandergehen. Einige Länder haben bereits Einwegplastik verboten, während andere weiterhin auf freiwillige Selbstverpflichtungen der Industrie setzen.

Neben politischen Maßnahmen wird auch auf technologische Lösungen gesetzt. So wurden in den letzten Jahren verschiedene Systeme entwickelt, mit denen Plastikmüll direkt aus Flüssen und dem offenen Meer gefischt werden soll, bevor er sich weiter zersetzt. Kritiker bemängeln jedoch, dass solche Projekte lediglich Symptome bekämpfen würden, anstatt die eigentliche Ursache – die stetig wachsende Plastikproduktion – anzugehen.

Sollte es nicht gelingen, den globalen Plastikverbrauch spürbar zu senken, dürfte sich die Vermüllung der Ozeane trotz aller technischen Innovationen weiter verschärfen. Viele Wissenschaftler fordern deshalb ein grundlegendes Umdenken im Umgang mit Verpackungen und Einwegprodukten, das weit über einzelne Verbote hinausgehen müsste.`,
    preguntas: [
      { enunciado: 'Plastik wird im Meerwasser sehr schnell vollständig abgebaut.', respuesta: false },
      { enunciado: 'Mikroplastik wurde bereits in vielen Meeresorganismen nachgewiesen.', respuesta: true },
      { enunciado: 'Alle Länder verfolgen bei Einwegplastik dieselbe Strategie.', respuesta: false },
      { enunciado: 'Es gibt technologische Projekte, die Plastikmüll aus dem Meer entfernen sollen.', respuesta: true },
      { enunciado: 'Kritiker halten Aufräumprojekte für eine vollständige Lösung des Problems.', respuesta: false },
    ],
  },
  {
    slug: 'cancel-culture',
    nivel: 'B2',
    titulo: 'Cancel Culture – Wenn die Öffentlichkeit richtet',
    descripcion: 'Eine Auseinandersetzung mit dem Phänomen Cancel Culture und seinen gesellschaftlichen Folgen.',
    texto: `Der Begriff „Cancel Culture" bezeichnet ein Phänomen, bei dem Personen des öffentlichen Lebens aufgrund umstrittener Aussagen oder Handlungen in sozialen Netzwerken massiv kritisiert und in der Folge oft beruflich sowie gesellschaftlich ausgegrenzt werden. Befürworter sehen darin ein wirksames Mittel, um diskriminierendes oder verletzendes Verhalten öffentlich zu sanktionieren, das andernfalls möglicherweise folgenlos bliebe. Kritiker hingegen warnen davor, dass dabei häufig nicht mehr zwischen berechtigter Kritik und öffentlicher Vorverurteilung unterschieden werde.

Besonders umstritten ist, dass Betroffene oft kaum eine Möglichkeit erhalten, sich zu den Vorwürfen zu äußern, bevor eine Welle der Empörung über sie hereinbricht. Würde jede Aussage stets in ihrem vollständigen Kontext betrachtet, ließen sich laut Kritikern viele solcher Debatten sachlicher führen. Stattdessen verbreiten sich einzelne Zitate oder Videoausschnitte innerhalb weniger Stunden, ohne dass die Nutzer den ursprünglichen Zusammenhang überhaupt kennen.

Gleichzeitig betonen Befürworter der Cancel Culture, dass die öffentliche Aufmerksamkeit gerade in Fällen von Machtmissbrauch oder Diskriminierung lange überfällig gewesen sei. Ohne den Druck sozialer Netzwerke wären manche Skandale, so das Argument, vermutlich nie ans Licht gekommen. Es wird daher gefordert, zwischen legitimer öffentlicher Kritik und Formen digitaler Hetze klar zu unterscheiden, was in der Praxis jedoch selten gelingt.

Ob Cancel Culture langfristig zu einer offeneren oder eher zu einer ängstlicheren Gesellschaft führt, wird kontrovers diskutiert. Während die einen befürchten, dass Menschen sich aus Angst vor öffentlicher Ächtung immer weniger trauen, ihre Meinung zu äußern, sehen andere darin eine notwendige Korrektur überkommener gesellschaftlicher Machtverhältnisse.`,
    preguntas: [
      { enunciado: 'Cancel Culture bezeichnet ausschließlich positive Reaktionen im Internet.', respuesta: false },
      { enunciado: 'Kritiker bemängeln, dass oft nicht zwischen Kritik und Vorverurteilung unterschieden wird.', respuesta: true },
      { enunciado: 'Betroffene erhalten laut Text meist ausreichend Zeit, sich zu äußern, bevor Kritik entsteht.', respuesta: false },
      { enunciado: 'Befürworter sehen in Cancel Culture ein Mittel gegen Machtmissbrauch.', respuesta: true },
      { enunciado: 'Der Text kommt zu einem eindeutigen, unumstrittenen Fazit.', respuesta: false },
    ],
  },
  {
    slug: 'kernenergie-debatte',
    nivel: 'B2',
    titulo: 'Die Kernenergie-Debatte in Deutschland',
    descripcion: 'Ein Überblick über die kontroverse Diskussion um Kernenergie als Klimaschutzmaßnahme.',
    texto: `Kaum ein energiepolitisches Thema wird in Deutschland so leidenschaftlich diskutiert wie die Kernenergie. Nachdem die letzten deutschen Kernkraftwerke abgeschaltet wurden, mehren sich angesichts steigender Energiepreise und ambitionierter Klimaziele Stimmen, die eine Rückkehr zur Kernenergie fordern. Befürworter argumentieren, dass Kernkraftwerke im Betrieb kaum Treibhausgase ausstoßen und somit einen wichtigen Beitrag zur Energiewende leisten könnten, während erneuerbare Energien noch nicht ausreichend ausgebaut seien.

Gegner der Kernenergie verweisen dagegen auf die bislang ungelöste Frage der Endlagerung radioaktiven Abfalls, der über tausende Jahre sicher gelagert werden müsste. Würden neue Kernkraftwerke gebaut, so ihr Argument, entstünden zusätzliche Mengen an hochradioaktivem Abfall, ohne dass ein geeignetes Endlager gefunden worden wäre. Zudem seien die Baukosten neuer Reaktoren in den vergangenen Jahren in vielen Ländern erheblich gestiegen, sodass sich Kernenergie wirtschaftlich kaum noch rechne.

In anderen europäischen Ländern wird die Kernenergie deutlich anders bewertet. Frankreich etwa deckt einen Großteil seines Strombedarfs weiterhin durch Kernkraftwerke und plant sogar den Bau neuer Reaktoren. Diese unterschiedlichen energiepolitischen Strategien innerhalb der Europäischen Union erschweren eine gemeinsame europäische Klimapolitik, da sich die Mitgliedstaaten bislang nicht auf eine einheitliche Haltung zur Kernenergie einigen konnten.

Sollte sich Deutschland künftig doch für eine Rückkehr zur Kernenergie entscheiden, müssten zunächst zahlreiche rechtliche und technische Hürden überwunden werden, da die entsprechende Infrastruktur größtenteils bereits zurückgebaut wurde. Ob eine solche Kehrtwende politisch durchsetzbar wäre, bleibt angesichts der gesellschaftlichen Spaltung beim Thema Kernenergie höchst ungewiss.`,
    preguntas: [
      { enunciado: 'Deutschland hat seine letzten Kernkraftwerke bereits abgeschaltet.', respuesta: true },
      { enunciado: 'Die Frage der Endlagerung radioaktiven Abfalls gilt laut Text als vollständig gelöst.', respuesta: false },
      { enunciado: 'Frankreich deckt einen Großteil seines Strombedarfs durch Kernenergie.', respuesta: true },
      { enunciado: 'Laut Text sind die Baukosten neuer Reaktoren in den letzten Jahren gesunken.', respuesta: false },
      { enunciado: 'Alle EU-Mitgliedstaaten haben sich auf eine gemeinsame Haltung zur Kernenergie geeinigt.', respuesta: false },
    ],
  },
  {
    slug: 'meine-schultasche',
    nivel: 'A1',
    titulo: 'Meine Schultasche',
    descripcion: 'Ein Kind beschreibt, was in seiner Schultasche ist.',
    texto: `Ich heiße Paul und ich bin neun Jahre alt. Jeden Morgen packe ich meine Schultasche. In der Tasche sind viele Sachen. Ich habe zwei Hefte, einen Bleistift und einen Radiergummi. Ich habe auch ein Buch für Deutsch und ein Buch für Mathe. Meine Schultasche ist blau und sehr groß.

Meine Mutter macht mir auch ein Pausenbrot. Das Brot ist mit Käse. Ich habe auch einen Apfel und eine Flasche Wasser. Um acht Uhr gehe ich zur Schule. Die Schule ist nicht weit von meinem Haus. Ich laufe zu Fuß und treffe meine Freundin Mia. Wir gehen zusammen zur Schule.`,
    preguntas: [
      { enunciado: 'Paul ist neun Jahre alt.', respuesta: true },
      { enunciado: 'Die Schultasche ist rot.', respuesta: false },
      { enunciado: 'Paul hat ein Buch für Mathe.', respuesta: true },
      { enunciado: 'Die Mutter macht kein Pausenbrot.', respuesta: false },
      { enunciado: 'Paul fährt mit dem Bus zur Schule.', respuesta: false },
    ],
  },
  {
    slug: 'der-baecker',
    nivel: 'A1',
    titulo: 'Der Bäcker',
    descripcion: 'Ein Kind kauft mit seinem Vater Brot beim Bäcker.',
    texto: `Am Samstag gehe ich mit meinem Vater zum Bäcker. Der Bäcker ist in unserer Straße. Es gibt dort viele Brötchen, Brot und Kuchen. Mein Vater kauft ein großes Brot für die Familie. Ich möchte ein süßes Brötchen mit Schokolade.

Die Verkäuferin ist sehr nett. Sie sagt: „Guten Morgen! Was möchtet ihr heute?" Mein Vater bestellt fünf Brötchen und ein Vollkornbrot. Ich zeige auf das Schokobrötchen. Die Verkäuferin lacht und packt alles in eine Tüte. Wir bezahlen an der Kasse und gehen nach Hause. Zu Hause frühstücken wir zusammen.`,
    preguntas: [
      { enunciado: 'Der Vater geht mit dem Kind zum Bäcker.', respuesta: true },
      { enunciado: 'Der Bäcker ist weit weg von zu Hause.', respuesta: false },
      { enunciado: 'Der Vater kauft ein großes Brot.', respuesta: true },
      { enunciado: 'Das Kind möchte ein Schokobrötchen.', respuesta: true },
      { enunciado: 'Die Familie frühstückt im Bäckerladen.', respuesta: false },
    ],
  },
  {
    slug: 'meine-stadt',
    nivel: 'A1',
    titulo: 'Meine Stadt',
    descripcion: 'Ein Junge beschreibt seine kleine Stadt und was er dort mag.',
    texto: `Ich wohne in einer kleinen Stadt. Die Stadt heißt Lindenau. Es gibt einen Marktplatz, eine Kirche und ein kleines Kino. Meine Schule ist in der Nähe vom Marktplatz. Am Marktplatz gibt es auch einen Spielplatz.

Am Wochenende gehe ich oft mit meiner Familie in den Park. Der Park ist grün und ruhig. Dort gibt es einen See mit Enten. Meine Schwester füttert gern die Enten. Danach essen wir Eis in einem kleinen Café. Ich finde meine Stadt sehr schön.`,
    preguntas: [
      { enunciado: 'Die Stadt heißt Lindenau.', respuesta: true },
      { enunciado: 'Es gibt kein Kino in der Stadt.', respuesta: false },
      { enunciado: 'Der Park hat einen See mit Enten.', respuesta: true },
      { enunciado: 'Die Schwester mag es nicht, die Enten zu füttern.', respuesta: false },
      { enunciado: 'Die Familie isst Eis im Café.', respuesta: true },
    ],
  },
  {
    slug: 'der-erste-schultag-der-tochter',
    nivel: 'A2',
    titulo: 'Der erste Schultag der Tochter',
    descripcion: 'Eine Mutter erzählt vom aufregenden ersten Schultag ihrer Tochter.',
    texto: `Gestern war ein besonderer Tag, weil meine Tochter Lina ihren ersten Schultag hatte. Wir sind früh aufgestanden, weil Lina sehr aufgeregt war. Sie hat ihr neues Kleid angezogen und ihre Schultüte mitgenommen. Ich habe Fotos gemacht, bevor wir das Haus verlassen haben.

In der Schule haben viele Kinder und Eltern gewartet. Die Lehrerin hat alle Kinder begrüßt und hat jedem Kind einen Platz gezeigt. Lina hat schnell ein neues Mädchen kennengelernt, das neben ihr gesessen hat. Als die Schule zu Ende war, ist Lina glücklich zu mir gelaufen und hat erzählt, dass sie schon eine neue Freundin hat.

Am Nachmittag haben wir zusammen gefeiert. Meine Eltern sind auch gekommen, weil sie Lina zum ersten Schultag gratulieren wollten. Wir haben einen Kuchen gegessen und viel gelacht. Lina hat gesagt, dass sie sich schon auf morgen freut.`,
    preguntas: [
      { enunciado: 'Lina hatte gestern ihren ersten Schultag.', respuesta: true },
      { enunciado: 'Die Familie ist spät aufgestanden.', respuesta: false },
      { enunciado: 'Lina hat in der Schule eine neue Freundin kennengelernt.', respuesta: true },
      { enunciado: 'Die Großeltern sind nicht zur Feier gekommen.', respuesta: false },
      { enunciado: 'Lina freut sich auf den nächsten Schultag.', respuesta: true },
    ],
  },
  {
    slug: 'die-autopanne-auf-der-autobahn',
    nivel: 'A2',
    titulo: 'Die Autopanne auf der Autobahn',
    descripcion: 'Eine Familie hat auf dem Weg in den Urlaub eine Autopanne.',
    texto: `Familie Berger ist am Freitag in den Urlaub gefahren. Sie wollten an die Nordsee fahren, weil die Kinder das Meer sehen wollten. Nach zwei Stunden auf der Autobahn hat das Auto plötzlich komische Geräusche gemacht. Herr Berger ist an den Straßenrand gefahren, weil er nicht weiterfahren wollte.

Er hat sofort den Pannendienst angerufen, weil er selbst das Problem nicht lösen konnte. Die Kinder waren zuerst traurig, dass die Reise unterbrochen wurde. Nach einer Stunde ist der Mechaniker gekommen und hat das Auto repariert. Er hat gesagt, dass ein kleines Teil kaputt war.

Die Familie ist froh gewesen, dass die Panne nicht so schlimm war. Sie sind weitergefahren und haben am Abend endlich die Nordsee erreicht. Trotz der Verspätung haben alle den ersten Urlaubstag genossen.`,
    preguntas: [
      { enunciado: 'Familie Berger wollte an die Ostsee fahren.', respuesta: false },
      { enunciado: 'Das Auto hatte auf der Autobahn ein Problem.', respuesta: true },
      { enunciado: 'Herr Berger hat den Pannendienst angerufen.', respuesta: true },
      { enunciado: 'Der Mechaniker konnte das Auto nicht reparieren.', respuesta: false },
      { enunciado: 'Die Familie hat die Nordsee am Abend erreicht.', respuesta: true },
    ],
  },
  {
    slug: 'ein-tag-im-freizeitpark',
    nivel: 'A2',
    titulo: 'Ein Tag im Freizeitpark',
    descripcion: 'Zwei Freundinnen verbringen einen aufregenden Tag im Freizeitpark.',
    texto: `Sophie und Emma sind am Sonntag in einen Freizeitpark gefahren. Sie sind schon lange nicht mehr dort gewesen, deshalb waren sie sehr aufgeregt. Zuerst sind sie mit der großen Achterbahn gefahren. Emma hatte etwas Angst, aber Sophie hat sie beruhigt.

Nach der Achterbahn haben die beiden Freundinnen eine Pause gemacht, weil sie hungrig waren. Sie haben Pommes und eine Limonade gegessen. Danach sind sie noch mit dem Riesenrad gefahren und haben die ganze Stadt von oben gesehen. Emma hat gesagt, dass die Aussicht wunderschön war.

Am Abend waren beide sehr müde, aber glücklich. Sie haben beschlossen, dass sie nächstes Jahr wiederkommen möchten. Der Ausflug war ein perfekter Tag für die beiden Freundinnen.`,
    preguntas: [
      { enunciado: 'Sophie und Emma sind mit dem Auto gefahren.', respuesta: false },
      { enunciado: 'Sie sind zuerst mit der Achterbahn gefahren.', respuesta: true },
      { enunciado: 'Emma hatte keine Angst vor der Achterbahn.', respuesta: false },
      { enunciado: 'Sie sind auch mit dem Riesenrad gefahren.', respuesta: true },
      { enunciado: 'Die Freundinnen möchten nicht wiederkommen.', respuesta: false },
    ],
  },
  {
    slug: 'nachhilfe-geben-als-nebenjob',
    nivel: 'B1',
    titulo: 'Nachhilfe geben als Nebenjob',
    descripcion: 'Ein Student berichtet von seinen Erfahrungen als Nachhilfelehrer.',
    texto: `Seit einem Jahr gebe ich zweimal pro Woche Nachhilfe in Mathematik. Nachdem ich selbst in der Schule oft Probleme mit diesem Fach hatte, wollte ich anderen Schülern helfen, die ähnliche Schwierigkeiten haben. Anfangs war ich unsicher, ob ich als Lehrer überhaupt geeignet bin, obwohl ich das Thema fachlich gut beherrsche.

Mittlerweile unterrichte ich drei Schüler regelmäßig. Am Anfang jeder Stunde bespreche ich mit ihnen die Hausaufgaben, bevor wir neue Themen behandeln. Manche Schüler lernen schnell, während andere mehr Geduld brauchen. Besonders freue ich mich, wenn ein Schüler ein Thema endlich versteht, nachdem er lange daran gearbeitet hat.

Der Nebenjob bringt mir nicht nur Geld, sondern auch wertvolle Erfahrung. Trotzdem ist es manchmal anstrengend, nach einem langen Studientag noch zu unterrichten. Insgesamt bin ich aber froh, dass ich diesen Weg gewählt habe, weil ich dadurch sowohl pädagogische Fähigkeiten als auch Geduld gelernt habe.`,
    preguntas: [
      { enunciado: 'Der Student gibt seit einem Jahr Nachhilfe.', respuesta: true },
      { enunciado: 'Er unterrichtet das Fach Englisch.', respuesta: false },
      { enunciado: 'Am Anfang jeder Stunde bespricht er die Hausaufgaben.', respuesta: true },
      { enunciado: 'Der Nebenjob macht ihm keine Freude.', respuesta: false },
      { enunciado: 'Er unterrichtet aktuell drei Schüler.', respuesta: true },
    ],
  },
  {
    slug: 'die-renovierung-der-alten-wohnung',
    nivel: 'B1',
    titulo: 'Die Renovierung der alten Wohnung',
    descripcion: 'Ein Paar renoviert seine erste gemeinsame Wohnung und stößt auf Überraschungen.',
    texto: `Als Tim und Sarah ihre erste gemeinsame Wohnung gefunden hatten, war die Freude riesig, obwohl das alte Gebäude dringend renoviert werden musste. Die Wände waren grau und die Küche stammte noch aus den achtziger Jahren. Trotzdem sahen die beiden großes Potenzial in der Wohnung, weil die Zimmer hell und die Decken hoch waren.

Nachdem sie einen Plan erstellt hatten, begannen sie mit den Malerarbeiten. Sie strichen die Wände in warmen Farben und tauschten die alten Lampen aus. Beim Entfernen des alten Bodens entdeckten sie unerwartet einen wunderschönen Holzboden, der jahrelang unter dem Teppich versteckt gewesen war. Diese Entdeckung motivierte sie, noch mehr Zeit und Energie in das Projekt zu investieren.

Nach drei Monaten intensiver Arbeit war die Wohnung endlich fertig. Obwohl die Renovierung anstrengender war, als sie zunächst gedacht hatten, waren Tim und Sarah stolz auf das Ergebnis. Sie feierten den Abschluss der Arbeiten mit Freunden und Familie und genossen ihr neues Zuhause.`,
    preguntas: [
      { enunciado: 'Die Wohnung war schon vor dem Einzug perfekt renoviert.', respuesta: false },
      { enunciado: 'Unter dem Teppich fanden sie einen alten Holzboden.', respuesta: true },
      { enunciado: 'Tim und Sarah haben die Renovierung nach einem Monat beendet.', respuesta: false },
      { enunciado: 'Die beiden haben die Wände neu gestrichen.', respuesta: true },
      { enunciado: 'Sie haben den Abschluss der Arbeiten gefeiert.', respuesta: true },
    ],
  },
  {
    slug: 'ein-wochenende-im-kletterpark',
    nivel: 'B1',
    titulo: 'Ein Wochenende im Kletterpark',
    descripcion: 'Eine Gruppe von Freunden verbringt einen abenteuerlichen Tag im Kletterpark.',
    texto: `Am Samstag trafen sich fünf Freunde, um gemeinsam einen Kletterpark im Wald zu besuchen. Keiner von ihnen hatte vorher schon einmal an Seilen zwischen den Bäumen geklettert, weshalb die Vorfreude und die Nervosität gleichermaßen groß waren. Nachdem sie sich Helm und Gurt angelegt hatten, erklärte ein Trainer die wichtigsten Sicherheitsregeln.

Der erste Parcours war noch relativ einfach, doch mit jeder weiteren Ebene wurden die Hindernisse anspruchsvoller. Obwohl Lukas anfangs große Höhenangst hatte, schaffte er es dank der Unterstützung seiner Freunde, auch die schwierigeren Strecken zu meistern. Besonders die Seilrutsche am Ende jedes Parcours sorgte für Begeisterung bei der ganzen Gruppe.

Nachdem sie den ganzen Nachmittag im Wald verbracht hatten, waren alle erschöpft, aber glücklich. Bei einem gemeinsamen Abendessen erzählten sie sich gegenseitig von ihren mutigsten Momenten. Die Freunde waren sich einig, dass sie diesen Ausflug bald wiederholen wollten.`,
    preguntas: [
      { enunciado: 'Die Freunde waren erfahrene Kletterer.', respuesta: false },
      { enunciado: 'Ein Trainer erklärte die Sicherheitsregeln.', respuesta: true },
      { enunciado: 'Lukas hatte keine Angst vor der Höhe.', respuesta: false },
      { enunciado: 'Die Seilrutsche gefiel der Gruppe besonders gut.', respuesta: true },
      { enunciado: 'Nach dem Ausflug wollten sie den Park nie wieder besuchen.', respuesta: false },
    ],
  },
  {
    slug: 'tempolimit-auf-autobahnen',
    nivel: 'B2',
    titulo: 'Die Debatte um ein Tempolimit auf Autobahnen',
    descripcion: 'Deutschland diskutiert seit Jahrzehnten kontrovers über ein generelles Tempolimit auf Autobahnen.',
    texto: `Kaum ein verkehrspolitisches Thema wird in Deutschland so leidenschaftlich diskutiert wie die Frage nach einem generellen Tempolimit auf Autobahnen. Während nahezu alle europäischen Nachbarländer längst eine Höchstgeschwindigkeit eingeführt haben, gilt Deutschland als eines der letzten Länder, in denen auf weiten Strecken uneingeschränkt schnell gefahren werden darf. Befürworter eines Tempolimits verweisen vor allem auf die Klimabilanz: Würde die Geschwindigkeit auf 130 km/h begrenzt, ließen sich laut Umweltbundesamt jährlich mehrere Millionen Tonnen CO2 einsparen.

Gegner des Tempolimits hingegen betonen die symbolische Bedeutung der freien Fahrt für die deutsche Autoindustrie und argumentieren, dass moderne Fahrzeuge ohnehin immer effizienter würden. Zudem verweisen sie darauf, dass die tatsächliche Einsparung geringer ausfallen könnte, als Umweltverbände behaupten, da ein Großteil der Autobahnabschnitte bereits heute durch Baustellen oder Verkehrsschilder begrenzt sei. Auch das Argument der persönlichen Freiheit spielt in der öffentlichen Debatte eine wichtige Rolle, da viele Autofahrer ein Tempolimit als unnötigen staatlichen Eingriff empfinden.

Unabhängig von der politischen Ausrichtung zeigen Umfragen, dass eine wachsende Mehrheit der Bevölkerung inzwischen für ein Tempolimit ist, was im Widerspruch zur bisherigen Ablehnung durch mehrere Bundesregierungen steht. Sollte sich die Klimapolitik weiter verschärfen, dürfte diese Debatte in den kommenden Jahren noch an Bedeutung gewinnen, zumal der Verkehrssektor bislang eines der Felder ist, in denen Deutschland seine Klimaziele am deutlichsten verfehlt.`,
    preguntas: [
      { enunciado: 'Deutschland gehört zu den letzten Ländern Europas ohne generelles Tempolimit.', respuesta: true },
      { enunciado: 'Laut Umweltbundesamt hätte ein Tempolimit keinen Einfluss auf den CO2-Ausstoß.', respuesta: false },
      { enunciado: 'Gegner des Tempolimits betonen unter anderem das Argument der persönlichen Freiheit.', respuesta: true },
      { enunciado: 'Umfragen zeigen, dass die Mehrheit der Bevölkerung ein Tempolimit inzwischen befürwortet.', respuesta: true },
      { enunciado: 'Der Verkehrssektor erreicht laut Text seine Klimaziele bereits vollständig.', respuesta: false },
    ],
  },
  {
    slug: 'influencer-marketing-und-verbraucherschutz',
    nivel: 'B2',
    titulo: 'Influencer-Marketing und Verbraucherschutz',
    descripcion: 'Werbung durch Influencer wirft zunehmend Fragen zu Transparenz und Verbraucherschutz auf.',
    texto: `Influencer-Marketing hat sich in den vergangenen Jahren zu einem der wichtigsten Werbeinstrumente der digitalen Wirtschaft entwickelt. Unternehmen investieren mittlerweile Milliarden, damit bekannte Persönlichkeiten aus sozialen Netzwerken ihre Produkte präsentieren, da diese Empfehlungen bei jungen Zielgruppen als besonders glaubwürdig gelten. Anders als klassische Werbung wirkt Influencer-Marketing oft wie eine persönliche Empfehlung von Freunden, obwohl dahinter in der Regel bezahlte Kooperationen stehen.

Genau an diesem Punkt setzt die Kritik von Verbraucherschützern an. Sie bemängeln, dass viele Werbeinhalte nicht ausreichend als solche gekennzeichnet werden, wodurch insbesondere jüngere Nutzer die kommerzielle Absicht hinter einem Beitrag kaum erkennen können. Gerichte haben in den letzten Jahren mehrfach entschieden, dass auch scheinbar private Beiträge als Werbung gelten müssen, sobald ein wirtschaftlicher Vorteil damit verbunden ist. Dennoch fällt es Behörden schwer, die enorme Menge an täglich veröffentlichten Inhalten wirksam zu kontrollieren.

Ein weiteres Problem betrifft die Vermarktung von Finanzprodukten und Nahrungsergänzungsmitteln, bei denen fehlende Kennzeichnung besonders gravierende Folgen haben kann. Verbraucherschutzorganisationen fordern deshalb strengere gesetzliche Vorgaben sowie höhere Bußgelder für Verstöße. Ob eine schärfere Regulierung die Probleme tatsächlich löst, bleibt jedoch fraglich, solange die Plattformen selbst kaum Verantwortung für die Inhalte übernehmen, die über ihre Algorithmen verbreitet werden.`,
    preguntas: [
      { enunciado: 'Influencer-Marketing wird von jungen Zielgruppen oft als besonders glaubwürdig empfunden.', respuesta: true },
      { enunciado: 'Laut Text sind alle Werbeinhalte von Influencern klar als Werbung gekennzeichnet.', respuesta: false },
      { enunciado: 'Gerichte haben entschieden, dass bezahlte Beiträge als Werbung gelten müssen.', respuesta: true },
      { enunciado: 'Die Vermarktung von Finanzprodukten gilt laut Text als unproblematisch.', respuesta: false },
      { enunciado: 'Verbraucherschutzorganisationen fordern strengere gesetzliche Vorgaben.', respuesta: true },
    ],
  },
  {
    slug: 'sabbatical-und-die-neue-arbeitskultur',
    nivel: 'B2',
    titulo: 'Sabbatical und die neue Arbeitskultur',
    descripcion: 'Immer mehr Arbeitnehmer nehmen sich eine berufliche Auszeit, um Beruf und Leben neu auszubalancieren.',
    texto: `Die klassische Erwerbsbiografie, bei der Menschen ununterbrochen von der Ausbildung bis zur Rente arbeiten, verliert zunehmend an Bedeutung. Immer mehr Arbeitnehmerinnen und Arbeitnehmer entscheiden sich für ein Sabbatical, also eine mehrmonatige berufliche Auszeit, während der das Arbeitsverhältnis ruht oder in Teilzeit fortgeführt wird. Was vor einigen Jahren noch als exotisches Privileg einzelner Branchen galt, wird inzwischen von immer mehr Unternehmen aktiv angeboten, um als attraktiver Arbeitgeber wahrgenommen zu werden.

Die Gründe für eine solche Auszeit sind vielfältig: Manche nutzen die Zeit für ausgedehnte Reisen, andere widmen sich der Familie, einem Studium oder schlicht der Erholung von den Belastungen des Berufsalltags. Befürworter argumentieren, dass ein Sabbatical langfristig die Motivation und Kreativität der Beschäftigten steigere, da diese mit neuer Energie und frischen Ideen an ihren Arbeitsplatz zurückkehrten. Studien deuten zudem darauf hin, dass Mitarbeitende nach einer längeren Pause seltener unter Burnout-Symptomen leiden als jene, die ununterbrochen arbeiten.

Kritiker weisen hingegen darauf hin, dass nicht jeder Arbeitnehmer sich eine unbezahlte oder teilweise unbezahlte Auszeit finanziell leisten kann, wodurch das Modell vor allem gut verdienenden Angestellten vorbehalten bleibt. Zudem berichten manche Rückkehrer von Schwierigkeiten, nach längerer Abwesenheit wieder vollständig in ihre Teams integriert zu werden. Damit das Sabbatical nicht zu einem weiteren Statussymbol privilegierter Berufsgruppen wird, fordern Arbeitsmarktexperten flexiblere und sozial gerechtere Modelle, die allen Beschäftigten offenstehen, unabhängig von Einkommen und Position.`,
    preguntas: [
      { enunciado: 'Ein Sabbatical ist laut Text eine mehrmonatige berufliche Auszeit.', respuesta: true },
      { enunciado: 'Immer weniger Unternehmen bieten heute Sabbaticals an.', respuesta: false },
      { enunciado: 'Studien deuten darauf hin, dass Sabbaticals das Burnout-Risiko senken können.', respuesta: true },
      { enunciado: 'Laut Text können sich alle Arbeitnehmer ein Sabbatical problemlos finanziell leisten.', respuesta: false },
      { enunciado: 'Manche Rückkehrer berichten von Problemen bei der Wiedereingliederung ins Team.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-a1-leseverstehen-alltag',
    nivel: 'A1',
    titulo: 'Mein Tag in der Sprachschule',
    descripcion: 'Ein Schüler beschreibt seinen Alltag in einer deutschen Sprachschule. Leseverstehen A1 Goethe-Prüfung.',
    texto: `Ich heiße Marco und ich lerne Deutsch in einer Sprachschule in München. Jeden Morgen stehe ich um sieben Uhr auf. Ich frühstücke Brot mit Marmelade und trinke Kaffee. Um acht Uhr gehe ich zur Schule. Der Unterricht beginnt um halb neun.

In der Schule lese ich Texte und schreibe Sätze. Meine Lehrerin heißt Frau Müller. Sie ist sehr nett. Wir sprechen viel Deutsch im Unterricht. Am Nachmittag mache ich Hausaufgaben und lerne neue Wörter.

Am Abend koche ich mit meinen Mitbewohnern. Wir essen zusammen und sprechen Deutsch. Das ist gut für mein Leseverstehen und mein Schreiben. Ich möchte die Goethe-Prüfung A1 bestehen.`,
    preguntas: [
      { enunciado: 'Marco lernt Deutsch in Berlin.', respuesta: false },
      { enunciado: 'Der Unterricht beginnt um halb neun.', respuesta: true },
      { enunciado: 'Frau Müller ist seine Lehrerin.', respuesta: true },
      { enunciado: 'Marco macht keine Hausaufgaben.', respuesta: false },
      { enunciado: 'Marco möchte die Goethe-Prüfung A1 bestehen.', respuesta: true },
    ],
  },
  {
    slug: 'telc-a1-einkaufen-supermarkt',
    nivel: 'A1',
    titulo: 'Im Supermarkt einkaufen',
    descripcion: 'Einfacher Text über Einkaufen im Supermarkt. Leseverstehen Übung telc A1.',
    texto: `Heute gehe ich in den Supermarkt. Ich brauche Milch, Brot, Eier und Obst. Ich nehme einen Einkaufswagen und gehe durch die Gänge.

Zuerst nehme ich die Milch aus dem Kühlregal. Dann finde ich das Brot. Ich nehme Vollkornbrot. Die Eier sind neben der Butter. Ich nehme sechs Eier. Zum Schluss gehe ich zum Obst. Ich kaufe Äpfel und Bananen.

An der Kasse bezahle ich mit meiner Karte. Die Kassiererin sagt: 'Das macht elf Euro fünfzig.' Ich packe alles in meine Tasche und gehe nach Hause.`,
    preguntas: [
      { enunciado: 'Die Person braucht auch Käse.', respuesta: false },
      { enunciado: 'Die Milch steht im Kühlregal.', respuesta: true },
      { enunciado: 'Die Person kauft Vollkornbrot.', respuesta: true },
      { enunciado: 'Die Person bezahlt bar.', respuesta: false },
      { enunciado: 'Der Einkauf kostet elf Euro fünfzig.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-a1-schreiben-brief-freund',
    nivel: 'A1',
    titulo: 'Ein Brief an meinen Freund',
    descripcion: 'Paul schreibt einen Brief über seine neue Stadt. Leseverstehen und Schreiben Goethe A1.',
    texto: `Lieber Tom,

wie geht es dir? Mir geht es gut. Ich wohne jetzt in Hamburg. Die Stadt ist sehr schön. Meine Wohnung ist klein, aber gemütlich. Sie hat ein Zimmer, eine Küche und ein Bad.

Ich arbeite in einem Café. Ich arbeite von Montag bis Freitag. Am Wochenende habe ich frei. Dann gehe ich spazieren oder besuche Freunde.

Hamburg hat einen großen Hafen. Ich gehe oft zum Hafen und schaue die Schiffe an. Das Wetter ist manchmal kalt und regnerisch, aber ich mag die Stadt.

Kommst du mich mal besuchen? Das wäre toll!

Viele Grüße,
Paul`,
    preguntas: [
      { enunciado: 'Paul wohnt jetzt in München.', respuesta: false },
      { enunciado: 'Seine Wohnung hat ein Zimmer.', respuesta: true },
      { enunciado: 'Paul arbeitet in einem Restaurant.', respuesta: false },
      { enunciado: 'Am Wochenende hat Paul frei.', respuesta: true },
      { enunciado: 'Paul lädt Tom nach Hamburg ein.', respuesta: true },
    ],
  },
  {
    slug: 'telc-a2-leseverstehen-wohnungssuche',
    nivel: 'A2',
    titulo: 'Wohnungssuche in Deutschland',
    descripcion: 'Eine Familie sucht eine neue Wohnung. Leseverstehen Übung telc A2 Prüfungsvorbereitung.',
    texto: `Familie Schmidt sucht eine neue Wohnung in Frankfurt. Sie haben zwei Kinder und brauchen mindestens drei Zimmer. Herr Schmidt arbeitet im Zentrum und möchte nicht weit fahren.

Sie haben drei Anzeigen gefunden. Die erste Wohnung hat vier Zimmer und kostet 1200 Euro kalt. Sie liegt im Stadtzentrum, aber hat keinen Balkon. Die zweite Wohnung hat drei Zimmer mit Balkon und kostet 950 Euro. Sie liegt etwas außerhalb. Die dritte Wohnung hat vier Zimmer, einen Garten und kostet 1100 Euro, aber sie ist 30 Minuten vom Zentrum entfernt.

Frau Schmidt mag die dritte Wohnung wegen des Gartens. Die Kinder können dort spielen. Herr Schmidt findet die erste Wohnung besser, weil sie nah an seiner Arbeit ist. Am Ende entscheiden sie sich für die zweite Wohnung, weil der Preis gut ist und sie einen Balkon hat.`,
    preguntas: [
      { enunciado: 'Die Familie hat drei Kinder.', respuesta: false },
      { enunciado: 'Die erste Wohnung hat keinen Balkon.', respuesta: true },
      { enunciado: 'Die zweite Wohnung kostet 1200 Euro.', respuesta: false },
      { enunciado: 'Die dritte Wohnung hat einen Garten.', respuesta: true },
      { enunciado: 'Die Familie wählt die zweite Wohnung.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-a2-schreiben-urlaub',
    nivel: 'A2',
    titulo: 'Urlaubsplanung mit der Familie',
    descripcion: 'Eine E-Mail über Urlaubspläne schreiben. Goethe A2 Leseverstehen und Schreiben Übung.',
    texto: `Liebe Maria,

vielen Dank für deine E-Mail! Du fragst, wohin wir im Sommer fahren. Wir haben lange überlegt und uns für Österreich entschieden. Wir fahren an den Wolfgangsee.

Wir haben ein kleines Hotel direkt am See gebucht. Es hat ein Schwimmbad und einen Spielplatz für die Kinder. Wir bleiben zwei Wochen, vom 15. bis zum 29. Juli.

Mein Mann möchte wandern gehen. Die Kinder freuen sich auf das Schwimmen im See. Ich möchte die Altstadt von Salzburg besuchen und dort einkaufen gehen. Salzburg ist nur eine Stunde entfernt.

Letztes Jahr waren wir an der Ostsee. Das war auch schön, aber dieses Jahr wollten wir Berge sehen. Hast du auch schon Urlaubspläne?

Liebe Grüße,
Stefanie`,
    preguntas: [
      { enunciado: 'Die Familie fährt nach Italien.', respuesta: false },
      { enunciado: 'Das Hotel liegt direkt am See.', respuesta: true },
      { enunciado: 'Sie bleiben drei Wochen.', respuesta: false },
      { enunciado: 'Stefanie möchte Salzburg besuchen.', respuesta: true },
      { enunciado: 'Letztes Jahr war die Familie an der Ostsee.', respuesta: true },
    ],
  },
  {
    slug: 'telc-a2-leseverstehen-arztbesuch',
    nivel: 'A2',
    titulo: 'Beim Arzt — Termin und Anmeldung',
    descripcion: 'Text über einen Arztbesuch in Deutschland. Leseverstehen telc A2 Prüfungstraining.',
    texto: `Letzte Woche war ich krank. Ich hatte Kopfschmerzen und Fieber. Ich habe bei meinem Hausarzt angerufen und einen Termin bekommen. Der Termin war am Mittwoch um zehn Uhr.

Bei der Anmeldung habe ich meine Versicherungskarte gegeben. Dann habe ich im Wartezimmer gesessen. Nach zwanzig Minuten hat die Sprechstundenhilfe meinen Namen gerufen.

Der Arzt hat mich untersucht. Er hat meinen Hals angeschaut und meine Temperatur gemessen. Er hat gesagt, ich habe eine Erkältung. Er hat mir ein Rezept für Medikamente gegeben. Ich soll drei Tage zu Hause bleiben und viel Tee trinken.

In der Apotheke habe ich die Medikamente geholt. Nach drei Tagen ging es mir besser. Jetzt bin ich wieder gesund.`,
    preguntas: [
      { enunciado: 'Der Termin war am Dienstag.', respuesta: false },
      { enunciado: 'Im Wartezimmer hat die Person zwanzig Minuten gewartet.', respuesta: true },
      { enunciado: 'Der Arzt hat eine Grippe diagnostiziert.', respuesta: false },
      { enunciado: 'Die Person soll drei Tage zu Hause bleiben.', respuesta: true },
      { enunciado: 'Die Medikamente hat die Person in der Apotheke geholt.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b1-leseverstehen-bildungssystem',
    nivel: 'B1',
    titulo: 'Das deutsche Bildungssystem',
    descripcion: 'Überblick über das Schulsystem in Deutschland. Leseverstehen Goethe B1 Prüfungsvorbereitung.',
    texto: `Das deutsche Bildungssystem ist komplex und unterscheidet sich von Land zu Land, da Bildung in Deutschland Sache der Bundesländer ist. Nach der vierjährigen Grundschule müssen die Kinder und ihre Eltern eine wichtige Entscheidung treffen: Welche weiterführende Schule soll es sein?

Es gibt drei Haupttypen: die Hauptschule, die Realschule und das Gymnasium. Die Hauptschule bereitet die Schüler auf praktische Berufe vor und endet nach der neunten Klasse. Die Realschule bietet eine breitere Ausbildung und endet nach der zehnten Klasse mit dem Realschulabschluss. Das Gymnasium führt zum Abitur, das nach der zwölften oder dreizehnten Klasse abgelegt wird und zum Studium an einer Universität berechtigt.

In den letzten Jahren gibt es immer mehr Gesamtschulen, die alle drei Schulformen unter einem Dach vereinen. Kritiker des traditionellen Systems sagen, dass die Entscheidung nach der vierten Klasse zu früh kommt. Viele Eltern fühlen sich unter Druck gesetzt, ihre Kinder auf das Gymnasium zu schicken, weil sie glauben, dass nur das Abitur gute Berufschancen bietet.

Für die Goethe-Prüfung B1 ist es wichtig, Texte über gesellschaftliche Themen wie Bildung verstehen zu können. Leseverstehen ist ein zentraler Teil der Prüfung.`,
    preguntas: [
      { enunciado: 'Bildung ist in Deutschland bundesweit einheitlich geregelt.', respuesta: false },
      { enunciado: 'Die Grundschule dauert vier Jahre.', respuesta: true },
      { enunciado: 'Die Hauptschule endet nach der zehnten Klasse.', respuesta: false },
      { enunciado: 'Das Abitur berechtigt zum Universitätsstudium.', respuesta: true },
      { enunciado: 'Gesamtschulen vereinen verschiedene Schulformen.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b1-schreiben-beschwerde',
    nivel: 'B1',
    titulo: 'Beschwerdebrief an den Vermieter',
    descripcion: 'Formeller Brief als Beschwerde schreiben. Schreiben und Leseverstehen telc B1 Übung.',
    texto: `Frau Keller wohnt seit zwei Jahren in einer Mietwohnung in Düsseldorf. In den letzten Monaten hat sie mehrere Probleme mit ihrer Wohnung. Das Badezimmerfenster schließt nicht richtig und im Winter kommt kalte Luft herein. Außerdem funktioniert die Heizung im Schlafzimmer seit November nicht mehr. Sie hat ihren Vermieter, Herrn Weber, bereits zweimal angerufen, aber er hat nichts unternommen.

Deshalb hat Frau Keller beschlossen, einen formellen Beschwerdebrief zu schreiben. In dem Brief beschreibt sie die Probleme genau und setzt eine Frist von zwei Wochen für die Reparaturen. Sie erwähnt auch, dass sie das Recht hat, die Miete zu kürzen, wenn die Mängel nicht behoben werden.

Ihr Nachbar, Herr Fischer, hat ähnliche Probleme. Seine Küche hat Schimmel an der Wand, weil die Belüftung nicht funktioniert. Er hat Frau Keller geraten, sich an den Mieterverein zu wenden. Dort kann man kostenlose Rechtsberatung bekommen.

Das Schreiben von Beschwerdebriefen ist ein wichtiger Teil der telc B1-Prüfung. Man muss formell und höflich, aber bestimmt schreiben können.`,
    preguntas: [
      { enunciado: 'Frau Keller wohnt seit fünf Jahren in der Wohnung.', respuesta: false },
      { enunciado: 'Die Heizung im Schlafzimmer funktioniert nicht.', respuesta: true },
      { enunciado: 'Der Vermieter hat die Probleme sofort repariert.', respuesta: false },
      { enunciado: 'Frau Keller setzt eine Frist von zwei Wochen.', respuesta: true },
      { enunciado: 'Beim Mieterverein gibt es kostenlose Rechtsberatung.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b1-leseverstehen-ehrenamt',
    nivel: 'B1',
    titulo: 'Ehrenamtliches Engagement in Deutschland',
    descripcion: 'Text über Freiwilligenarbeit und Ehrenamt. Leseverstehen Goethe-Zertifikat B1.',
    texto: `In Deutschland engagieren sich rund 30 Millionen Menschen ehrenamtlich. Das bedeutet, sie arbeiten freiwillig und ohne Bezahlung für das Gemeinwohl. Ehrenamtliche helfen in vielen Bereichen: im Sport, in der Kultur, bei der Feuerwehr, im Umweltschutz oder in der Flüchtlingshilfe.

Sarah, 28, arbeitet zweimal pro Woche bei der Tafel. Die Tafel sammelt Lebensmittel, die Supermärkte nicht mehr verkaufen können, und verteilt sie an Menschen mit wenig Geld. 'Es ist ein gutes Gefühl zu wissen, dass weniger Essen weggeworfen wird und Menschen geholfen wird', sagt Sarah.

Thomas, 45, ist seit zehn Jahren bei der freiwilligen Feuerwehr. Er wird gerufen, wenn es brennt oder bei Unfällen. 'Das Training ist anspruchsvoll, aber die Kameradschaft ist großartig. Man lernt, Verantwortung zu übernehmen', erklärt er.

Die Bundesregierung unterstützt das Ehrenamt durch verschiedene Programme. Es gibt zum Beispiel die Ehrenamtskarte, mit der Freiwillige Vergünstigungen bei Kulturveranstaltungen und im öffentlichen Nahverkehr bekommen. Für junge Menschen gibt es das Freiwillige Soziale Jahr (FSJ), das oft als Orientierung vor dem Studium genutzt wird.`,
    preguntas: [
      { enunciado: 'Etwa 30 Millionen Deutsche arbeiten ehrenamtlich.', respuesta: true },
      { enunciado: 'Sarah arbeitet bei der Tafel jeden Tag.', respuesta: false },
      { enunciado: 'Thomas ist seit fünf Jahren bei der Feuerwehr.', respuesta: false },
      { enunciado: 'Die Ehrenamtskarte bietet Vergünstigungen.', respuesta: true },
      { enunciado: 'Das FSJ wird oft vor dem Studium gemacht.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b1-pruefung-teil1-freizeitangebote',
    nivel: 'B1',
    titulo: 'Goethe B1 — Freizeitangebote zuordnen',
    descripcion: 'Prüfungssimulation Goethe-Zertifikat B1 Leseverstehen Teil 1: Freizeitangebote.',
    texto: `In einer Zeitschrift finden Sie verschiedene Freizeitangebote.

Angebot 1: Kochkurs 'Mediterrane Küche' — Jeden Samstag von 10 bis 14 Uhr in der Volkshochschule. Kosten: 25 Euro pro Termin, inklusive Zutaten. Maximal 12 Teilnehmer. Anmeldung bis Donnerstag.

Angebot 2: Wandergruppe 'Bergfreunde' — Jeden Sonntag ab 8 Uhr am Hauptbahnhof. Verschiedene Schwierigkeitsgrade. Kostenfrei, aber eigene Verpflegung mitbringen. Keine Anmeldung nötig.

Angebot 3: Tanzkurs 'Salsa für Anfänger' — Dienstags und donnerstags, 19 bis 20:30 Uhr. Tanzschule Müller, Hauptstraße 15. 80 Euro für 8 Wochen. Tanzpartner nicht erforderlich.`,
    preguntas: [
      { enunciado: 'Der Kochkurs kostet 25 Euro für den ganzen Monat.', respuesta: false },
      { enunciado: 'Für die Wandergruppe muss man sich vorher anmelden.', respuesta: false },
      { enunciado: 'Der Salsa-Kurs findet zweimal pro Woche statt.', respuesta: true },
      { enunciado: 'Beim Kochkurs sind die Zutaten im Preis enthalten.', respuesta: true },
      { enunciado: 'Für den Salsa-Kurs braucht man einen Tanzpartner.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b1-pruefung-teil2-zeitungsartikel-verkehr',
    nivel: 'B1',
    titulo: 'Goethe B1 — Verkehrswende in deutschen Städten',
    descripcion: 'Prüfungssimulation Goethe B1 Leseverstehen Teil 2: Zeitungsartikel verstehen.',
    texto: `Immer mehr deutsche Städte setzen auf eine Verkehrswende. Das Ziel ist es, den Autoverkehr in den Innenstädten zu reduzieren und umweltfreundlichere Alternativen zu fördern. Hamburg hat als erste deutsche Großstadt begonnen, einzelne Straßen für Autos zu sperren und in Fahrradstraßen umzuwandeln.

Das öffentliche Nahverkehrsnetz wird in vielen Städten ausgebaut. München plant eine neue U-Bahn-Linie, die die Außenbezirke besser anbinden soll. In Karlsruhe wurde das Straßenbahnnetz erweitert, sodass Pendler aus dem Umland ohne Auto in die Stadt kommen können.

Doch nicht alle Bürger sind begeistert. Geschäftsinhaber in autofreien Zonen befürchten Umsatzeinbußen. Studien aus anderen europäischen Städten zeigen jedoch, dass Fußgängerzonen langfristig mehr Kunden anziehen, weil die Aufenthaltsqualität steigt.

Ein Streitpunkt bleibt das Tempolimit. Während die Grünen ein generelles Tempolimit von 30 km/h in Städten fordern, lehnen andere Parteien dies als unverhältnismäßig ab.`,
    preguntas: [
      { enunciado: 'Hamburg hat Straßen in Fahrradstraßen umgewandelt.', respuesta: true },
      { enunciado: 'München baut eine neue Straßenbahn.', respuesta: false },
      { enunciado: 'Alle Geschäftsinhaber unterstützen autofreie Zonen.', respuesta: false },
      { enunciado: 'Studien zeigen, dass Fußgängerzonen mehr Kunden anziehen.', respuesta: true },
      { enunciado: 'Alle Parteien wollen ein Tempolimit von 30 km/h.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b1-pruefung-gesunde-ernaehrung',
    nivel: 'B1',
    titulo: 'Goethe B1 — Gesunde Ernährung im Alltag',
    descripcion: 'Prüfungstext zum Thema Ernährung. Goethe-Zertifikat B1 Leseverstehen Übung.',
    texto: `Die Deutsche Gesellschaft für Ernährung empfiehlt, täglich fünf Portionen Obst und Gemüse zu essen. Doch die Realität sieht anders aus: Laut einer aktuellen Umfrage schaffen nur 15 Prozent der Deutschen diese Empfehlung. Besonders junge Erwachsene zwischen 18 und 29 Jahren ernähren sich häufig ungesund.

Der Grund dafür ist oft Zeitmangel. Viele greifen zu Fast Food oder Fertiggerichten, weil sie schnell und günstig sind. Ernährungsexperten raten jedoch, sich am Wochenende Zeit zum Kochen zu nehmen und Mahlzeiten für die Woche vorzubereiten.

Auch die Schulen spielen eine wichtige Rolle. In einigen Bundesländern gibt es bereits Programme, die Kindern beibringen, gesund zu kochen. In der Ganztagsschule Bergedorf in Hamburg kochen die Schüler einmal pro Woche gemeinsam.

Vegetarische und vegane Ernährung werden in Deutschland immer beliebter. Rund zehn Prozent der Bevölkerung leben vegetarisch, etwa zwei Prozent vegan.`,
    preguntas: [
      { enunciado: 'Die Mehrheit der Deutschen isst fünf Portionen Obst und Gemüse täglich.', respuesta: false },
      { enunciado: 'Junge Erwachsene ernähren sich besonders gesund.', respuesta: false },
      { enunciado: 'Meal Prep bedeutet, Mahlzeiten im Voraus vorzubereiten.', respuesta: true },
      { enunciado: 'In Hamburg kochen Schüler gemeinsam in der Schule.', respuesta: true },
      { enunciado: 'Etwa zehn Prozent der Deutschen leben vegetarisch.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b1-pruefung-digitales-lernen',
    nivel: 'B1',
    titulo: 'Goethe B1 — Digitales Lernen an Schulen',
    descripcion: 'Leseverstehen-Übung über Digitalisierung an Schulen. Goethe B1 Prüfungstraining.',
    texto: `Die Digitalisierung an deutschen Schulen kommt nur langsam voran. Während Länder wie Estland oder Dänemark bereits seit Jahren mit Tablets und digitalen Schulbüchern arbeiten, fehlt es in vielen deutschen Schulen an grundlegender Ausstattung. Eine Umfrage unter Lehrern zeigt, dass 40 Prozent der Schulen kein funktionierendes WLAN haben.

Der Digitalpakt, den die Bundesregierung 2019 beschlossen hat, stellt fünf Milliarden Euro für die digitale Ausstattung bereit. Doch die Umsetzung ist kompliziert: Die Schulen müssen zunächst ein Medienkonzept erstellen, bevor sie Geld beantragen können.

Lehrer berichten von gemischten Erfahrungen. Einerseits können digitale Medien den Unterricht interessanter machen. Andererseits lenken Smartphones und Tablets die Schüler ab. Einige Schulen in Frankreich haben Smartphones im Unterricht sogar verboten.

Experten sind sich einig, dass digitale Kompetenz zu den wichtigsten Fähigkeiten des 21. Jahrhunderts gehört.`,
    preguntas: [
      { enunciado: 'Die meisten deutschen Schulen haben gutes WLAN.', respuesta: false },
      { enunciado: 'Der Digitalpakt stellt fünf Milliarden Euro bereit.', respuesta: true },
      { enunciado: 'Schulen können das Geld ohne Medienkonzept beantragen.', respuesta: false },
      { enunciado: 'In Frankreich wurden Smartphones an Schulen verboten.', respuesta: true },
      { enunciado: 'Digitale Kompetenz gilt als wichtige Fähigkeit.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b1-pruefung-wohnen-in-der-stadt',
    nivel: 'B1',
    titulo: 'Goethe B1 — Wohnen in der Großstadt',
    descripcion: 'Text über Wohnungsmarkt und Mieten. Goethe B1 Leseverstehen.',
    texto: `Die Mieten in deutschen Großstädten sind in den letzten zehn Jahren drastisch gestiegen. In München, der teuersten Stadt Deutschlands, zahlt man durchschnittlich 20 Euro pro Quadratmeter kalt. Auch in Berlin, Hamburg und Frankfurt sind die Mieten deutlich gestiegen.

Besonders Studenten und junge Berufstätige haben Schwierigkeiten, bezahlbaren Wohnraum zu finden. Viele teilen sich eine Wohnung in einer Wohngemeinschaft (WG), um die Kosten zu senken.

Die Politik versucht, mit verschiedenen Maßnahmen gegenzusteuern. Die Mietpreisbremse soll verhindern, dass Vermieter bei Neuvermietungen überhöhte Preise verlangen. In Berlin wurde zeitweise ein Mietendeckel eingeführt, der allerdings vom Bundesverfassungsgericht für ungültig erklärt wurde.

Eine Lösung könnte der soziale Wohnungsbau sein. Die Bundesregierung hat versprochen, 400.000 neue Wohnungen pro Jahr zu bauen, davon 100.000 Sozialwohnungen.`,
    preguntas: [
      { enunciado: 'München ist die teuerste Stadt zum Wohnen in Deutschland.', respuesta: true },
      { enunciado: 'Studenten wohnen oft allein in eigenen Wohnungen.', respuesta: false },
      { enunciado: 'Der Berliner Mietendeckel ist noch gültig.', respuesta: false },
      { enunciado: 'Die Regierung will 400.000 Wohnungen pro Jahr bauen.', respuesta: true },
      { enunciado: 'Es gibt genug Baumaterial und Fachkräfte.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b1-pruefung-umweltschutz-alltag',
    nivel: 'B1',
    titulo: 'Goethe B1 — Umweltschutz im Alltag',
    descripcion: 'Wie man im Alltag die Umwelt schützen kann. Goethe-Zertifikat B1 Prüfungstext.',
    texto: `Umweltschutz beginnt im Alltag. Laut einer Studie achten 78 Prozent der Bevölkerung beim Einkaufen darauf, weniger Plastik zu verwenden. Stoffbeutel statt Plastiktüten, Glasflaschen statt Einwegflaschen — die kleinen Veränderungen machen einen Unterschied.

Mülltrennung gehört in Deutschland zum Alltag. Es gibt verschiedene Tonnen für Papier, Plastik, Biomüll und Restmüll. Das Pfandsystem für Flaschen und Dosen sorgt dafür, dass ein Großteil des Verpackungsmülls recycelt wird.

Auch beim Thema Energie sparen die Deutschen bewusster. Viele wechseln zu Ökostrom-Anbietern und investieren in energiesparende Haushaltsgeräte. Die Installation von Solaranlagen auf Privathäusern hat sich verdoppelt. Seit 2024 gibt es in einigen Bundesländern eine Solarpflicht für Neubauten.

Kritiker argumentieren jedoch, dass individuelles Handeln nicht ausreicht. Die größten CO2-Verursacher sind die Industrie und der Verkehrssektor.`,
    preguntas: [
      { enunciado: '78 Prozent der Deutschen achten auf weniger Plastik.', respuesta: true },
      { enunciado: 'In Deutschland gibt es kein Pfandsystem.', respuesta: false },
      { enunciado: 'Die Installation von Solaranlagen hat abgenommen.', respuesta: false },
      { enunciado: 'In einigen Bundesländern gibt es eine Solarpflicht für Neubauten.', respuesta: true },
      { enunciado: 'Der Text sagt, individuelles Handeln allein reicht aus.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b1-pruefung-generationenkonflikt',
    nivel: 'B1',
    titulo: 'Goethe B1 — Jung gegen Alt?',
    descripcion: 'Text über Generationenkonflikte und Zusammenleben. Goethe B1 Prüfungsvorbereitung Leseverstehen.',
    texto: `Das Verhältnis zwischen den Generationen in Deutschland hat sich verändert. Während früher drei Generationen oft unter einem Dach lebten, wohnen heute die meisten jungen Erwachsenen weit entfernt von ihren Eltern.

Gleichzeitig gibt es neue Formen des Zusammenlebens. In Mehrgenerationenhäusern leben junge Familien, Senioren und Singles zusammen. Sie teilen Gemeinschaftsräume und helfen sich gegenseitig: Die Älteren passen auf die Kinder auf, die Jüngeren helfen beim Einkaufen oder bei technischen Problemen.

Ein häufiges Konfliktthema ist die Digitalisierung. Viele ältere Menschen fühlen sich von der schnellen technologischen Entwicklung überfordert. Bankgeschäfte, Arzttermine, Zugtickets — alles soll online gemacht werden.

Doch Umfragen zeigen, dass die meisten jungen und alten Menschen ein positives Bild voneinander haben. 85 Prozent der Befragten sagen, dass sie von der anderen Generation lernen können.`,
    preguntas: [
      { enunciado: 'Früher lebten oft drei Generationen zusammen.', respuesta: true },
      { enunciado: 'In Mehrgenerationenhäusern leben nur Familien.', respuesta: false },
      { enunciado: 'Ältere Menschen haben keine Probleme mit Digitalisierung.', respuesta: false },
      { enunciado: '85 Prozent sagen, sie können von der anderen Generation lernen.', respuesta: true },
      { enunciado: 'Der Text bestätigt einen starken Generationenkonflikt.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b1-pruefung-deutsch-als-fremdsprache',
    nivel: 'B1',
    titulo: 'Goethe B1 — Deutsch als Fremdsprache weltweit',
    descripcion: 'Text über die Verbreitung der deutschen Sprache. Goethe-Zertifikat B1 Leseverstehen.',
    texto: `Deutsch ist mit rund 130 Millionen Sprechern eine der meistgesprochenen Sprachen Europas. Es ist Amtssprache in Deutschland, Österreich, der Schweiz, Luxemburg und Liechtenstein. Weltweit lernen etwa 15 Millionen Menschen Deutsch als Fremdsprache.

Die Goethe-Institute sind die wichtigsten Einrichtungen für die Vermittlung der deutschen Sprache im Ausland. Mit über 150 Standorten in 98 Ländern bieten sie Sprachkurse und Kulturprogramme an. Die Goethe-Prüfungen, vom Niveau A1 bis C2, sind international anerkannt.

In vielen Ländern ist Deutsch nach Englisch die beliebteste Fremdsprache. In Osteuropa, besonders in Polen und Tschechien, lernen viele Schüler Deutsch, weil Deutschland der wichtigste Handelspartner ist.

Die telc-Prüfungen sind eine Alternative zu den Goethe-Prüfungen und werden von vielen Behörden für Visa und Einbürgerungen akzeptiert. Beide Prüfungssysteme testen die vier Fertigkeiten Lesen, Hören, Schreiben und Sprechen.`,
    preguntas: [
      { enunciado: 'Deutsch ist Amtssprache in sechs Ländern.', respuesta: false },
      { enunciado: 'Es gibt über 150 Goethe-Institute weltweit.', respuesta: true },
      { enunciado: 'In Osteuropa ist Deutsch nicht beliebt.', respuesta: false },
      { enunciado: 'telc-Prüfungen werden für Einbürgerungen akzeptiert.', respuesta: true },
      { enunciado: 'Die B1-Prüfung testet vier Fertigkeiten.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b1-pruefung-stellenanzeige-lesen',
    nivel: 'B1',
    titulo: 'telc B1 — Stellenanzeigen verstehen',
    descripcion: 'Prüfungssimulation telc Deutsch B1: Stellenanzeigen lesen und verstehen.',
    texto: `Sie suchen eine neue Arbeitsstelle und lesen folgende Anzeigen:

Anzeige A: Restaurant 'Zum Goldenen Hirsch' sucht Servicekraft (m/w/d), Teilzeit 20 Std./Woche. Erfahrung erwünscht, aber nicht Bedingung. Abend- und Wochenendarbeit. Bewerbung per E-Mail.

Anzeige B: Kindergarten 'Sonnenschein' sucht Erzieher/in in Vollzeit. Staatliche Anerkennung erforderlich. Montag bis Freitag, 7:30 bis 16:00 Uhr. Gehalt nach TVöD. Bewerbungsfrist: 31. März.

Anzeige C: IT-Firma TechSolutions sucht Werkstudent/in für 15 Std./Woche. Studium der Informatik oder verwandtes Fach. Gute Deutschkenntnisse (mindestens B2). Homeoffice möglich. 15 Euro/Stunde.`,
    preguntas: [
      { enunciado: 'Für die Stelle im Restaurant braucht man unbedingt Erfahrung.', respuesta: false },
      { enunciado: 'Die Kindergarten-Stelle ist eine Teilzeitstelle.', respuesta: false },
      { enunciado: 'Für die IT-Stelle muss man Informatik studieren.', respuesta: true },
      { enunciado: 'Im Restaurant arbeitet man auch am Wochenende.', respuesta: true },
      { enunciado: 'Die IT-Stelle erfordert mindestens B2-Deutschkenntnisse.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b1-pruefung-formeller-brief',
    nivel: 'B1',
    titulo: 'telc B1 — Formellen Brief verstehen',
    descripcion: 'Brief von der Versicherung verstehen. Leseverstehen telc B1 Prüfungstraining.',
    texto: `Sehr geehrte Frau Yilmaz,

vielen Dank für Ihre Anfrage vom 15. Februar bezüglich der Änderung Ihres Versicherungsvertrags. Wir bestätigen hiermit, dass wir Ihren Antrag auf Wechsel in den Tarif 'Komfort Plus' erhalten haben.

Der neue Tarif tritt zum 1. April in Kraft. Ihr monatlicher Beitrag ändert sich von 89,50 Euro auf 112,30 Euro. Im neuen Tarif sind zusätzlich Zahnbehandlungen und Naturheilverfahren enthalten. Bitte beachten Sie, dass für Zahnersatz eine Wartezeit von acht Monaten gilt.

Sollten Sie innerhalb von 14 Tagen nach Erhalt dieses Schreibens von Ihrem Wechsel zurücktreten wollen, genügt eine schriftliche Mitteilung an uns.

Mit freundlichen Grüßen,
Stefan Braun
Kundenservice`,
    preguntas: [
      { enunciado: 'Der neue Tarif ist günstiger als der alte.', respuesta: false },
      { enunciado: 'Zahnbehandlungen sind im neuen Tarif enthalten.', respuesta: true },
      { enunciado: 'Für Zahnersatz gibt es keine Wartezeit.', respuesta: false },
      { enunciado: 'Man kann innerhalb von 14 Tagen zurücktreten.', respuesta: true },
      { enunciado: 'Der neue Tarif beginnt am 1. April.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b1-pruefung-reise-informationen',
    nivel: 'B1',
    titulo: 'telc B1 — Reiseinformationen auswerten',
    descripcion: 'Informationstexte über Reiseziele verstehen. telc B1 Leseverstehen Prüfung.',
    texto: `Im Reisebüro liegen drei Prospekte aus:

Reise 1: Wanderurlaub in Südtirol — 7 Tage, Halbpension im Berghotel. Geführte Wanderungen für alle Schwierigkeitsgrade. Inklusive Seilbahnticket. Ab 699 Euro pro Person. Anreise mit dem Bus ab München.

Reise 2: Städtereise Wien — 4 Tage, Übernachtung mit Frühstück. Stadtrundfahrt, Besuch von Schloss Schönbrunn und Abendkonzert. Ab 449 Euro pro Person. Flug ab Berlin inklusive.

Reise 3: Ostsee-Familienurlaub — 10 Tage, Ferienwohnung mit Küche. Strand, Fahrradverleih und Kinderanimation. Ab 89 Euro pro Nacht für 4 Personen. Eigene Anreise.`,
    preguntas: [
      { enunciado: 'Die Wanderreise beinhaltet Vollpension.', respuesta: false },
      { enunciado: 'Die Wien-Reise kostet ab 449 Euro mit Flug.', respuesta: true },
      { enunciado: 'Die Ostsee-Reise hat keine Kinderanimation.', respuesta: false },
      { enunciado: 'Die Ostsee-Reise ist die günstigste für Familien.', respuesta: true },
      { enunciado: 'Die Wien-Reise dauert eine Woche.', respuesta: false },
    ],
  },
  {
    slug: 'telc-b1-pruefung-hausordnung',
    nivel: 'B1',
    titulo: 'telc B1 — Hausordnung verstehen',
    descripcion: 'Regeln und Vorschriften in einer Hausordnung. telc Deutsch B1 Leseverstehen.',
    texto: `Hausordnung für das Mietshaus Gartenstraße 12

1. Ruhezeiten: Zwischen 22:00 und 7:00 Uhr sowie an Sonn- und Feiertagen ist jeder Lärm zu vermeiden. Waschmaschinen dürfen in dieser Zeit nicht benutzt werden.

2. Treppenhaus: Alle Mieter sind im wöchentlichen Wechsel für die Reinigung zuständig. Der Reinigungsplan hängt im Erdgeschoss aus. Fahrräder dürfen nicht im Treppenhaus abgestellt werden.

3. Müll: Bitte trennen Sie Ihren Müll. Sperrmüll darf nicht neben die Tonnen gestellt werden. Bitte melden Sie Sperrmüll bei der Stadtreinigung an.

4. Grillen: Grillen auf dem Balkon ist aus Brandschutzgründen verboten. Im Garten darf mit Einverständnis aller Nachbarn gegrillt werden.

5. Haustiere: Hunde und Katzen sind mit Zustimmung des Vermieters erlaubt.`,
    preguntas: [
      { enunciado: 'Man darf nach 22 Uhr die Waschmaschine benutzen.', respuesta: false },
      { enunciado: 'Fahrräder dürfen im Treppenhaus stehen.', respuesta: false },
      { enunciado: 'Sperrmüll muss bei der Stadtreinigung angemeldet werden.', respuesta: true },
      { enunciado: 'Grillen auf dem Balkon ist erlaubt.', respuesta: false },
      { enunciado: 'Haustiere sind mit Erlaubnis des Vermieters gestattet.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b1-pruefung-elternabend',
    nivel: 'B1',
    titulo: 'telc B1 — Einladung zum Elternabend',
    descripcion: 'Formelle Einladung der Schule verstehen. telc B1 Leseverstehen Übung.',
    texto: `Grundschule am Stadtpark, Köln

Liebe Eltern der Klasse 3b,

hiermit laden wir Sie herzlich zum Elternabend am Donnerstag, den 14. November, um 19:00 Uhr ein. Der Elternabend findet im Klassenzimmer (Raum 204, 2. OG) statt.

Tagesordnung:
1. Bericht über den Lernstand der Klasse
2. Planung der Klassenfahrt im Mai (Jugendherberge Eifel, 3 Tage, ca. 120 Euro)
3. Anschaffung neuer Lernmaterialien
4. Verschiedenes

Bitte teilen Sie uns bis zum 11. November mit, ob Sie teilnehmen können. Wir bitten darum, Kinder nicht mitzubringen, da es keine Betreuung gibt.

Mit freundlichen Grüßen,
Frau Dr. Lehmann (Klassenlehrerin)
Herr Özdemir (Elternvertreter)`,
    preguntas: [
      { enunciado: 'Der Elternabend ist am Mittwoch.', respuesta: false },
      { enunciado: 'Die Klassenfahrt soll in die Eifel gehen.', respuesta: true },
      { enunciado: 'Kinder dürfen zum Elternabend mitkommen.', respuesta: false },
      { enunciado: 'Man soll bis zum 11. November Bescheid geben.', respuesta: true },
      { enunciado: 'Herr Özdemir ist der Klassenlehrer.', respuesta: false },
    ],
  },
  {
    slug: 'telc-b1-pruefung-nachrichten-verstehen',
    nivel: 'B1',
    titulo: 'telc B1 — Nachrichten verstehen',
    descripcion: 'Kurze Nachrichtenmeldungen lesen. Leseverstehen telc B1 Prüfungssimulation.',
    texto: `Meldung 1: Neuer Radweg zwischen Köln und Bonn eröffnet — Ab sofort können Radfahrer auf einem 30 Kilometer langen, beleuchteten Radweg sicher zwischen den beiden Städten pendeln. Die Baukosten betrugen 12 Millionen Euro.

Meldung 2: Bücherbus für ländliche Gemeinden — Da viele kleine Ortschaften keine eigene Bibliothek haben, hat der Kreis Marburg-Biedenkopf einen Bücherbus eingeführt. Zweimal pro Woche fährt der Bus 15 Dörfer an. Die Ausleihe ist kostenlos.

Meldung 3: Kita-Streik in Nordrhein-Westfalen — Erzieherinnen und Erzieher streiken für bessere Arbeitsbedingungen. Rund 200 Kindergärten bleiben am Montag und Dienstag geschlossen. Die Gewerkschaft fordert zehn Prozent mehr Lohn.`,
    preguntas: [
      { enunciado: 'Der neue Radweg ist 30 Kilometer lang.', respuesta: true },
      { enunciado: 'Der Bücherbus fährt einmal pro Woche.', respuesta: false },
      { enunciado: 'Die Ausleihe im Bücherbus kostet Geld.', respuesta: false },
      { enunciado: 'Die Gewerkschaft fordert zehn Prozent mehr Lohn.', respuesta: true },
      { enunciado: 'Der Streik dauert eine ganze Woche.', respuesta: false },
    ],
  },
  {
    slug: 'telc-b1-pruefung-arzt-informationsblatt',
    nivel: 'B1',
    titulo: 'telc B1 — Informationsblatt beim Arzt',
    descripcion: 'Medizinisches Informationsblatt verstehen. telc B1 Leseverstehen Prüfungsformat.',
    texto: `Patienteninformation: Grippeschutzimpfung

Die Grippeimpfung wird jedes Jahr im Herbst empfohlen, besonders für Personen über 60, Schwangere, Menschen mit chronischen Erkrankungen und medizinisches Personal.

Die Impfung wird von der Krankenkasse bezahlt, wenn Sie zu einer Risikogruppe gehören. Der Impfschutz beginnt etwa zwei Wochen nach der Impfung und hält ungefähr sechs Monate.

Mögliche Nebenwirkungen: Rötung an der Einstichstelle, leichtes Fieber, Müdigkeit. Diese Beschwerden klingen normalerweise nach ein bis zwei Tagen ab.

Wichtig: Die Impfung sollte nicht durchgeführt werden, wenn Sie akut krank sind oder Fieber haben. Bitte informieren Sie uns über Allergien.

Termine: Montag bis Freitag, 8:00-11:00 Uhr, ohne Voranmeldung.`,
    preguntas: [
      { enunciado: 'Die Grippeimpfung wird im Frühling empfohlen.', respuesta: false },
      { enunciado: 'Für Risikogruppen bezahlt die Krankenkasse die Impfung.', respuesta: true },
      { enunciado: 'Der Impfschutz beginnt sofort nach der Impfung.', respuesta: false },
      { enunciado: 'Man braucht keinen Termin für die Impfung.', respuesta: true },
      { enunciado: 'Bei Fieber sollte man sich nicht impfen lassen.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b1-pruefung-vereinsmitgliedschaft',
    nivel: 'B1',
    titulo: 'telc B1 — Sportverein Anmeldung',
    descripcion: 'Informationen über Vereinsmitgliedschaft verstehen. telc B1 Leseverstehen.',
    texto: `Willkommen beim Sportverein Blau-Weiß Düsseldorf!

Mitgliedsbeiträge: Erwachsene 25 Euro/Monat, Jugendliche (14-17) 15 Euro/Monat, Kinder (bis 13) 10 Euro/Monat, Familienmitgliedschaft 50 Euro/Monat.

Im Beitrag enthalten: Nutzung aller Sportanlagen (Schwimmbad, Tennisplätze, Fitnessstudio), Teilnahme an Gruppentrainings.

Nicht enthalten: Einzeltraining mit Personal Trainer (35 Euro/Stunde), Sauna (5 Euro Aufpreis).

Anmeldung: Bitte bringen Sie einen gültigen Ausweis und eine Bankverbindung für den Lastschrifteinzug mit. Die Kündigungsfrist beträgt drei Monate zum Quartalsende.

Probetraining: Sie können zweimal kostenlos und unverbindlich trainieren.

Öffnungszeiten: Mo-Fr 6:00-22:00, Sa-So 8:00-20:00`,
    preguntas: [
      { enunciado: 'Eine Familienmitgliedschaft kostet 50 Euro pro Monat.', respuesta: true },
      { enunciado: 'Die Sauna ist im Mitgliedsbeitrag enthalten.', respuesta: false },
      { enunciado: 'Man kann einmal kostenlos probetrainieren.', respuesta: false },
      { enunciado: 'Die Kündigungsfrist beträgt drei Monate.', respuesta: true },
      { enunciado: 'Am Wochenende öffnet der Verein um 6 Uhr.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b2-leseverstehen-kuenstliche-intelligenz',
    nivel: 'B2',
    titulo: 'Künstliche Intelligenz und die Arbeitswelt',
    descripcion: 'Wie KI die Berufswelt verändert. Leseverstehen Goethe B2 Prüfungsvorbereitung.',
    texto: `Die rasante Entwicklung der künstlichen Intelligenz stellt die Arbeitswelt vor fundamentale Veränderungen. Laut einer Studie des Instituts für Arbeitsmarkt- und Berufsforschung könnten bis 2035 rund vier Millionen Arbeitsplätze in Deutschland durch Automatisierung wegfallen. Gleichzeitig entstehen jedoch neue Berufsfelder.

Besonders betroffen sind Routinetätigkeiten in der Verwaltung, im Bankwesen und in der Produktion. KI-Systeme können bereits heute Verträge analysieren, Kreditanträge bearbeiten und Qualitätskontrollen durchführen — oft schneller und fehlerfreier als Menschen.

Experten betonen jedoch, dass KI den Menschen nicht vollständig ersetzen wird. Kreative Tätigkeiten, soziale Kompetenzen und kritisches Denken bleiben Domänen des Menschen. Die Herausforderung besteht darin, die Arbeitskräfte durch Weiterbildung auf die neuen Anforderungen vorzubereiten. Das Konzept des lebenslangen Lernens gewinnt an Bedeutung.

Kritiker warnen vor einer zunehmenden sozialen Ungleichheit: Hochqualifizierte profitieren von der Technologie, während Geringqualifizierte ihre Existenzgrundlage verlieren könnten.`,
    preguntas: [
      { enunciado: 'Bis 2035 könnten vier Millionen Arbeitsplätze wegfallen.', respuesta: true },
      { enunciado: 'Kreative Tätigkeiten sind besonders von KI bedroht.', respuesta: false },
      { enunciado: 'KI kann bereits Verträge analysieren.', respuesta: true },
      { enunciado: 'Alle Experten sind sich einig, dass KI nur Vorteile bringt.', respuesta: false },
      { enunciado: 'Lebenslanges Lernen wird wichtiger.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b2-schreiben-eroerterung-homeoffice',
    nivel: 'B2',
    titulo: 'Erörterung: Homeoffice — Fluch oder Segen?',
    descripcion: 'Pro- und Kontra-Erörterung zum Thema Homeoffice. Schreiben und Leseverstehen telc B2.',
    texto: `Seit der Pandemie hat sich das Homeoffice in vielen Unternehmen etabliert. Was zunächst als Notlösung begann, ist für viele Arbeitnehmer zum bevorzugten Arbeitsmodell geworden.

Befürworter argumentieren, dass Homeoffice die Work-Life-Balance verbessert. Der Wegfall des täglichen Pendelns spart Zeit und reduziert Stress. Studien zeigen, dass viele Arbeitnehmer im Homeoffice produktiver arbeiten.

Gegner hingegen betonen die Risiken der sozialen Isolation. Der informelle Austausch an der Kaffeemaschine fehlt. Außerdem verschwimmen die Grenzen zwischen Arbeits- und Privatleben, was zu Überarbeitung und Burnout führen kann. Führungskräfte beklagen, dass die Teamdynamik und die Unternehmenskultur leiden.

Ein Kompromiss scheint das hybride Modell zu sein: zwei bis drei Tage im Büro, den Rest im Homeoffice. Entscheidend ist, dass Unternehmen klare Regeln aufstellen und in digitale Infrastruktur investieren.`,
    preguntas: [
      { enunciado: 'Homeoffice war von Anfang an das bevorzugte Arbeitsmodell.', respuesta: false },
      { enunciado: 'Laut Studien arbeiten viele im Homeoffice produktiver.', respuesta: true },
      { enunciado: 'Im Text wird erwähnt, dass Homeoffice zu Burnout führen kann.', respuesta: true },
      { enunciado: 'Führungskräfte sind alle für Homeoffice.', respuesta: false },
      { enunciado: 'Das hybride Modell wird als Kompromiss vorgeschlagen.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b2-leseverstehen-migration-integration',
    nivel: 'B2',
    titulo: 'Migration und Integration — eine Bestandsaufnahme',
    descripcion: 'Text über Migration und Integrationspolitik in Deutschland. Goethe-Zertifikat B2 Leseverstehen.',
    texto: `Deutschland ist in den letzten Jahrzehnten zu einem der wichtigsten Einwanderungsländer Europas geworden. Rund 22 Millionen Menschen mit Migrationshintergrund leben hier — das entspricht etwa einem Viertel der Gesamtbevölkerung.

Die Integrationspolitik hat sich seit den 2000er Jahren grundlegend gewandelt. Das Zuwanderungsgesetz von 2005 verankerte erstmals Integrationskurse gesetzlich. Diese Kurse umfassen 600 Stunden Deutschunterricht und 100 Stunden Orientierungskurs.

Der Spracherwerb gilt als Schlüssel zur Integration. Wer die Sprache beherrscht, hat deutlich bessere Chancen auf dem Arbeitsmarkt. Die Goethe-Institute und telc-Prüfungszentren spielen dabei eine zentrale Rolle, da ihre Zertifikate für Aufenthaltsgenehmigungen und Einbürgerungen anerkannt werden.

Dennoch bleibt Integration eine gesamtgesellschaftliche Herausforderung. Studien zeigen, dass Menschen mit ausländischen Namen trotz gleicher Qualifikation seltener zu Vorstellungsgesprächen eingeladen werden.`,
    preguntas: [
      { enunciado: 'Etwa ein Viertel der Bevölkerung hat Migrationshintergrund.', respuesta: true },
      { enunciado: 'Das Zuwanderungsgesetz wurde 2010 verabschiedet.', respuesta: false },
      { enunciado: 'Integrationskurse umfassen 600 Stunden Deutschunterricht.', respuesta: true },
      { enunciado: 'Goethe- und telc-Zertifikate sind für die Einbürgerung anerkannt.', respuesta: true },
      { enunciado: 'Laut dem Text gibt es keine Diskriminierung auf dem Arbeitsmarkt.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b2-pruefung-wissenschaftssprache',
    nivel: 'B2',
    titulo: 'Goethe B2 — Wissenschaftssprache verstehen',
    descripcion: 'Wissenschaftlicher Text über Schlafforschung. Goethe-Zertifikat B2 Leseverstehen Teil 1.',
    texto: `Schlafforscher der Universität München haben untersucht, wie sich chronischer Schlafmangel auf die kognitive Leistungsfähigkeit auswirkt. Die Ergebnisse sind beunruhigend: Bereits nach einer Woche mit weniger als sechs Stunden Schlaf pro Nacht sinkt die Konzentrationsfähigkeit um 30 Prozent.

Besonders alarmierend ist der sogenannte Gewöhnungseffekt. Probanden, die regelmäßig zu wenig schliefen, schätzten ihre eigene Leistungsfähigkeit deutlich besser ein, als sie tatsächlich war. 'Die Betroffenen merken gar nicht, wie stark ihre Fähigkeiten nachlassen', erklärt Studienleiterin Prof. Dr. Neumann.

Die volkswirtschaftlichen Kosten des Schlafmangels sind enorm. Schätzungen zufolge verursachen müdigkeitsbedingte Fehler jährliche Kosten von 60 Milliarden Euro allein in Deutschland.

Die Forscher empfehlen, den Schlaf als ebenso wichtig zu betrachten wie Ernährung und Bewegung. Einige Unternehmen haben bereits Schlafräume eingerichtet, in denen Mitarbeiter einen kurzen Mittagsschlaf halten können.`,
    preguntas: [
      { enunciado: 'Die Konzentration sinkt nach einer Woche Schlafmangel um 50 Prozent.', respuesta: false },
      { enunciado: 'Menschen mit chronischem Schlafmangel überschätzen ihre Leistung.', respuesta: true },
      { enunciado: 'Schlafmangel verursacht in Deutschland Kosten von 60 Milliarden Euro.', respuesta: true },
      { enunciado: 'Die Studie wurde an der Universität Berlin durchgeführt.', respuesta: false },
      { enunciado: 'Einige Unternehmen bieten Schlafräume für Mitarbeiter an.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b2-pruefung-meinungstext-gendern',
    nivel: 'B2',
    titulo: 'Goethe B2 — Gendern in der deutschen Sprache',
    descripcion: 'Meinungstext über geschlechtergerechte Sprache. Goethe B2 Leseverstehen Prüfungstraining.',
    texto: `Kaum ein sprachliches Thema wird in Deutschland so emotional diskutiert wie das Gendern. Die Debatte spaltet Gesellschaft, Medien und Politik.

Befürworter der geschlechtergerechten Sprache argumentieren, dass Sprache das Denken formt. Wenn immer nur die männliche Form verwendet wird, werden Frauen unsichtbar gemacht. Studien zeigen, dass Kinder sich mehr Berufe zutrauen, wenn beide Geschlechter genannt werden.

Kritiker hingegen sehen im Gendern einen Eingriff in die natürliche Sprachentwicklung. Das generische Maskulinum meine alle Geschlechter und sei seit Jahrhunderten etabliert. Gegenderte Texte seien zudem schwerer lesbar.

Der Rat für deutsche Rechtschreibung hat 2023 entschieden, Sonderzeichen wie den Genderstern nicht in das offizielle Regelwerk aufzunehmen. Gleichzeitig empfiehlt er, sensibel mit Sprache umzugehen. In der Praxis handhaben es Behörden, Medien und Unternehmen unterschiedlich.`,
    preguntas: [
      { enunciado: 'Die Debatte über das Gendern wird in Deutschland sachlich geführt.', respuesta: false },
      { enunciado: 'Studien zeigen einen Zusammenhang zwischen Sprache und Berufswahl bei Kindern.', respuesta: true },
      { enunciado: 'Der Genderstern wurde in das offizielle Regelwerk aufgenommen.', respuesta: false },
      { enunciado: 'Kritiker sagen, gegenderte Texte stören den Lesefluss.', respuesta: true },
      { enunciado: 'Alle Medien gendern einheitlich.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b2-pruefung-stadtplanung-zukunft',
    nivel: 'B2',
    titulo: 'Goethe B2 — Die Stadt der Zukunft',
    descripcion: 'Text über nachhaltige Stadtplanung und Smart Cities. Goethe-Zertifikat B2 Prüfungstext.',
    texto: `Wie werden wir in dreißig Jahren in unseren Städten leben? Stadtplaner arbeiten an Konzepten für die 'Smart City' — eine Stadt, die Technologie nutzt, um das Leben effizienter und nachhaltiger zu gestalten.

Das Modellprojekt 'Aspern Seestadt' in Wien zeigt, wie das aussehen kann. In dem neuen Stadtviertel für 20.000 Bewohner gibt es autofreie Zonen, begrünte Fassaden und ein intelligentes Energienetz. Die Häuser speichern im Winter die Sonnenwärme und bleiben im Sommer durch natürliche Belüftung kühl.

Doch nicht alle sind begeistert. Datenschützer warnen vor der totalen Überwachung, wenn Sensoren jeden Schritt erfassen. Sozialwissenschaftler befürchten, dass Smart Cities zu einer Zweiklassengesellschaft führen.

Der Architekt Jan Gehl betont, dass Technologie allein keine lebenswerte Stadt schafft. 'Gute Städte brauchen Plätze, an denen sich Menschen begegnen, Parks zum Verweilen und Straßen, die zum Spazieren einladen.'`,
    preguntas: [
      { enunciado: 'Smart Cities nutzen Technologie für effizienteres Stadtleben.', respuesta: true },
      { enunciado: 'Aspern Seestadt ist ein Projekt in Berlin.', respuesta: false },
      { enunciado: 'Datenschützer unterstützen die vollständige Sensorüberwachung.', respuesta: false },
      { enunciado: 'Jan Gehl betont die Bedeutung menschlicher Begegnungsorte.', respuesta: true },
      { enunciado: 'In Aspern Seestadt gibt es begrünte Fassaden.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b2-pruefung-psychologie-prokrastination',
    nivel: 'B2',
    titulo: 'Goethe B2 — Prokrastination verstehen',
    descripcion: 'Psychologischer Text über Aufschieberitis. Goethe B2 Leseverstehen Prüfungsvorbereitung.',
    texto: `Prokrastination — das chronische Aufschieben wichtiger Aufgaben — betrifft nach Schätzungen etwa 20 Prozent der Erwachsenen in klinisch relevantem Ausmaß. Es handelt sich nicht um Faulheit, sondern um ein komplexes psychologisches Phänomen der Emotionsregulation.

Dr. Fuschia Sirois erklärt: 'Prokrastination ist primär ein Problem der Emotionsregulation, nicht des Zeitmanagements. Menschen schieben Aufgaben auf, weil diese negative Gefühle auslösen — Angst vor dem Scheitern, Überforderung oder Langeweile.'

Neurowissenschaftliche Studien zeigen, dass bei Prokrastinierern die Amygdala — das Angstzentrum des Gehirns — stärker aktiviert ist. Gleichzeitig ist die Verbindung zum präfrontalen Kortex, der für Impulskontrolle zuständig ist, schwächer ausgeprägt.

Therapeutische Ansätze kombinieren kognitive Verhaltenstherapie mit praktischen Strategien. Studien zeigen, dass Selbstmitgefühl nach einem Rückfall hilft, erneutes Prokrastinieren zu vermeiden.`,
    preguntas: [
      { enunciado: 'Prokrastination ist dasselbe wie Faulheit.', respuesta: false },
      { enunciado: 'Etwa 20 Prozent der Erwachsenen sind klinisch betroffen.', respuesta: true },
      { enunciado: 'Prokrastination hängt mit Emotionsregulation zusammen.', respuesta: true },
      { enunciado: 'Bei Prokrastinierern ist die Amygdala weniger aktiv.', respuesta: false },
      { enunciado: 'Selbstmitgefühl kann gegen Prokrastination helfen.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b2-pruefung-kulturfoerderung',
    nivel: 'B2',
    titulo: 'Goethe B2 — Kulturförderung in der Krise',
    descripcion: 'Text über Kulturpolitik und öffentliche Förderung. Goethe-Zertifikat B2 Leseverstehen.',
    texto: `Die Kulturbranche in Deutschland steht vor existenziellen Herausforderungen. Deutschland gibt jährlich etwa 14 Milliarden Euro für Kultur aus. Im europäischen Vergleich ist das ein hoher Betrag, doch die Verteilung ist umstritten. Rund 80 Prozent fließen in etablierte Institutionen, während die freie Szene nur einen Bruchteil erhält.

Die Pandemie hat die Ungleichheit verschärft. Während Opernhäuser staatliche Hilfen in Millionenhöhe erhielten, gingen viele Solo-Selbstständige leer aus. Der Ruf nach einer grundlegenden Reform der Kulturförderung wird lauter. Vorschläge reichen von einem Grundeinkommen für Künstler bis zu einer Kulturabgabe auf Streamingdienste.

Verteidiger des Status quo argumentieren, dass die großen Institutionen ein kulturelles Erbe bewahren, das internationales Ansehen genießt. Deutsche Orchester und Theater gehören zu den besten der Welt. Diese Qualität sei nur durch kontinuierliche, hohe Förderung möglich.

Die Herausforderung besteht darin, das Bestehende zu erhalten und gleichzeitig die freie Szene besser zu unterstützen.`,
    preguntas: [
      { enunciado: 'Deutschland gibt jährlich etwa 14 Milliarden Euro für Kultur aus.', respuesta: true },
      { enunciado: 'Die freie Szene erhält den größten Teil der Kulturförderung.', respuesta: false },
      { enunciado: 'Während der Pandemie erhielten alle Kulturschaffenden gleich viel Hilfe.', respuesta: false },
      { enunciado: 'Es wird ein Grundeinkommen für Künstler vorgeschlagen.', respuesta: true },
      { enunciado: 'Der Text kritisiert die Qualität deutscher Orchester.', respuesta: false },
    ],
  },
  {
    slug: 'telc-b2-pruefung-wirtschaftstext-globalisierung',
    nivel: 'B2',
    titulo: 'telc B2 — Globalisierung und lokale Wirtschaft',
    descripcion: 'Wirtschaftstext über Globalisierung und Regionalität. telc B2 Leseverstehen Prüfung.',
    texto: `Die Globalisierung hat deutschen Unternehmen enorme Wachstumschancen eröffnet. Deutschland ist der drittgrößte Exporteur der Welt. Doch die Abhängigkeit von globalen Lieferketten hat Schattenseiten.

Als während der Pandemie Container-Schiffe im Suezkanal stecken blieben und chinesische Häfen geschlossen wurden, standen deutsche Fabriken still. Die Erfahrung hat viele Unternehmen zum Umdenken bewogen.

Der Trend geht nun zum 'Nearshoring' — der Verlagerung von Produktion in nahegelegene Länder statt nach Fernost. Osteuropäische Standorte wie Polen und Tschechien profitieren davon. Gleichzeitig erleben 'Made in Germany'-Produkte eine Renaissance: Konsumenten zahlen mehr für regional hergestellte Waren.

Ökonomen warnen jedoch vor übertriebener Abschottung. 'Protektionismus würde Deutschland mehr schaden als nützen. Wir brauchen offene Märkte — aber diversifizierte Lieferketten', betont Rainer Dulger.`,
    preguntas: [
      { enunciado: 'Deutschland ist der größte Exporteur der Welt.', respuesta: false },
      { enunciado: 'Die Pandemie hat Lieferkettenprobleme verursacht.', respuesta: true },
      { enunciado: 'Nearshoring bedeutet Verlagerung nach Fernost.', respuesta: false },
      { enunciado: 'Konsumenten zahlen mehr für regionale Produkte.', respuesta: true },
      { enunciado: 'Dulger fordert Protektionismus für Deutschland.', respuesta: false },
    ],
  },
  {
    slug: 'telc-b2-pruefung-bildung-chancengleichheit',
    nivel: 'B2',
    titulo: 'telc B2 — Bildungsgerechtigkeit in Deutschland',
    descripcion: 'Text über soziale Herkunft und Bildungschancen. telc B2 Leseverstehen Prüfungstraining.',
    texto: `In kaum einem anderen Industrieland hängt der Bildungserfolg so stark von der sozialen Herkunft ab wie in Deutschland. Die PISA-Studien belegen: Kinder aus Akademikerfamilien haben eine dreimal höhere Wahrscheinlichkeit, das Gymnasium zu besuchen als Arbeiterkinder — selbst bei gleicher Leistung.

Bereits im Vorschulalter zeigen sich Unterschiede im Wortschatz. Die frühe Aufteilung nach der Grundschule verfestigt diese Ungleichheit.

Ganztagsschulen gelten als Schlüssel zur Verbesserung. Sie bieten Kindern aus bildungsfernen Familien nachmittags Förderunterricht. Studien aus Skandinavien zeigen positive Effekte auf die soziale Mobilität.

Kritiker bemängeln, dass die Qualität der Ganztagsbetreuung in Deutschland sehr unterschiedlich ist. An vielen Schulen fehlt qualifiziertes Personal. Notwendig sei ein ganzheitlicher Ansatz, der individuelle Förderung, Elternarbeit und Sozialarbeit verbindet.`,
    preguntas: [
      { enunciado: 'In Deutschland hängt Bildungserfolg kaum von der sozialen Herkunft ab.', respuesta: false },
      { enunciado: 'Akademikerkinder besuchen dreimal häufiger das Gymnasium.', respuesta: true },
      { enunciado: 'In Skandinavien sind Ganztagsschulen seit Jahrzehnten üblich.', respuesta: true },
      { enunciado: 'Alle Ganztagsschulen in Deutschland haben qualifiziertes Personal.', respuesta: false },
      { enunciado: 'Vorlesen im Vorschulalter beeinflusst die Sprachentwicklung.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b2-pruefung-medienkonsum-jugendliche',
    nivel: 'B2',
    titulo: 'telc B2 — Medienkonsum bei Jugendlichen',
    descripcion: 'Text über Social Media und psychische Gesundheit. telc B2 Leseverstehen Übung.',
    texto: `Die durchschnittliche Bildschirmzeit deutscher Jugendlicher beträgt laut JIM-Studie 264 Minuten täglich — mehr als vier Stunden. Die Debatte über die Auswirkungen auf die psychische Gesundheit wird zunehmend kontrovers geführt.

Eine Studie der Universität Stanford hat einen Zusammenhang zwischen Social-Media-Nutzung und einem Anstieg von Depressionen bei Jugendlichen festgestellt. Die ständige Konfrontation mit idealisierten Selbstdarstellungen kann das Selbstwertgefühl untergraben. Cybermobbing betrifft rund ein Fünftel aller Jugendlichen.

Andererseits erfüllen soziale Medien auch positive Funktionen. Für viele Jugendliche sind sie ein wichtiges Mittel zur Identitätsfindung. Besonders für Jugendliche in ländlichen Gebieten bieten Online-Communities einen Raum der Zugehörigkeit.

Der Mittelweg liegt in der Medienkompetenz. Statt Verbote auszusprechen, sollten Eltern und Schulen Jugendlichen beibringen, Medien kritisch zu nutzen. Medienkompetenz wird zur Kernkompetenz des 21. Jahrhunderts.`,
    preguntas: [
      { enunciado: 'Deutsche Jugendliche verbringen durchschnittlich über vier Stunden am Bildschirm.', respuesta: true },
      { enunciado: 'Die Stanford-Studie fand keinen Zusammenhang zwischen Social Media und Depressionen.', respuesta: false },
      { enunciado: 'Cybermobbing betrifft etwa ein Fünftel der Jugendlichen.', respuesta: true },
      { enunciado: 'Der Text empfiehlt ein generelles Verbot sozialer Medien.', respuesta: false },
      { enunciado: 'Medienkompetenz wird als Kernkompetenz des 21. Jahrhunderts bezeichnet.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b2-pruefung-wohnformen-zukunft',
    nivel: 'B2',
    titulo: 'telc B2 — Alternative Wohnformen der Zukunft',
    descripcion: 'Text über Tiny Houses, Co-Living und neue Wohnkonzepte. telc B2 Leseverstehen.',
    texto: `Angesichts steigender Mieten gewinnen alternative Wohnformen an Bedeutung. Tiny Houses, Co-Living-Spaces und genossenschaftliches Wohnen sind keine Randphänomene mehr.

Tiny Houses — Minihäuser mit meist unter 30 Quadratmetern — sprechen vor allem junge Menschen an. Die niedrigen Kosten machen Wohneigentum erschwinglich. Allerdings scheitert die Umsetzung häufig an baurechtlichen Vorschriften.

Co-Living-Konzepte setzen auf Gemeinschaft. Bewohner haben private Zimmer, teilen sich aber Küchen, Wohnzimmer und manchmal Werkstätten. Der Nachteil: weniger Privatsphäre und Kompromissbereitschaft nötig.

Das älteste Modell — die Wohnungsgenossenschaft — erlebt eine Renaissance. In Wien, wo ein Drittel der Bevölkerung in Gemeindebauten lebt, dient das Modell vielen deutschen Städten als Vorbild. Experten sind sich einig: Eine Kombination verschiedener Wohnformen ist nötig.`,
    preguntas: [
      { enunciado: 'Tiny Houses haben meist unter 30 Quadratmeter.', respuesta: true },
      { enunciado: 'Tiny Houses dürfen überall dauerhaft bewohnt werden.', respuesta: false },
      { enunciado: 'Im Co-Living hat man mehr Privatsphäre als in einer normalen Wohnung.', respuesta: false },
      { enunciado: 'In Wien lebt ein Drittel der Bevölkerung in Gemeindebauten.', respuesta: true },
      { enunciado: 'Wohnungsgenossenschaften sind ein neues Konzept.', respuesta: false },
    ],
  },
  {
    slug: 'telc-b2-pruefung-psychologie-glueck',
    nivel: 'B2',
    titulo: 'telc B2 — Was macht uns glücklich?',
    descripcion: 'Psychologischer Text über Glücksforschung. telc B2 Leseverstehen Prüfungstext.',
    texto: `Was macht Menschen glücklich? Die Harvard-Studie zur Erwachsenenentwicklung, die seit 1938 läuft, kommt zu einem klaren Ergebnis: Der wichtigste Faktor für ein glückliches Leben sind gute soziale Beziehungen — nicht Geld, Erfolg oder Ruhm.

'Menschen, die im Alter von 50 Jahren die zufriedensten Beziehungen hatten, waren im Alter von 80 die gesündesten', fasst Studienleiter Prof. Robert Waldinger zusammen. Einsamkeit sei ebenso schädlich wie Rauchen.

Parallel dazu zeigt die Glücksforschung, dass materielle Güter nur bis zu einem bestimmten Punkt zum Wohlbefinden beitragen. Ab einem Jahreseinkommen von etwa 75.000 Dollar steigt das tägliche emotionale Wohlbefinden kaum noch — die sogenannte 'hedonische Anpassung'.

Interessanterweise unterschätzen die meisten Menschen, wie sehr alltägliche Erlebnisse — ein Spaziergang, ein gutes Gespräch — zu ihrem Glücksempfinden beitragen. Die Psychologie spricht vom 'Erlebnisparadox'.`,
    preguntas: [
      { enunciado: 'Die Harvard-Studie läuft seit 1938.', respuesta: true },
      { enunciado: 'Geld ist laut der Studie der wichtigste Glücksfaktor.', respuesta: false },
      { enunciado: 'Einsamkeit ist laut der Studie so schädlich wie Rauchen.', respuesta: true },
      { enunciado: 'Ab 75.000 Dollar Einkommen steigt das Wohlbefinden deutlich weiter.', respuesta: false },
      { enunciado: 'Alltägliche Erlebnisse tragen wenig zum Glück bei.', respuesta: false },
    ],
  },
  {
    slug: 'telc-b2-pruefung-arbeitswelt-fachkraeftemangel',
    nivel: 'B2',
    titulo: 'telc B2 — Fachkräftemangel in Deutschland',
    descripcion: 'Wirtschaftstext über den Fachkräftemangel. telc B2 Leseverstehen.',
    texto: `Der Fachkräftemangel hat sich zu einem der drängendsten wirtschaftlichen Probleme Deutschlands entwickelt. Laut dem Institut der deutschen Wirtschaft fehlen rund 630.000 qualifizierte Arbeitskräfte. Besonders betroffen sind Handwerk, Pflege, IT und Bildung.

Die Babyboomer gehen in den Ruhestand, während geburtenschwächere Jahrgänge nachrücken. Die Akademisierung hat dazu geführt, dass Ausbildungsberufe gemieden werden. In einigen Handwerksbranchen bleibt jede dritte Lehrstelle unbesetzt.

Das Fachkräfteeinwanderungsgesetz von 2020 erleichtert qualifizierten Arbeitskräften aus Nicht-EU-Ländern den Zugang. Die Anerkennung ausländischer Abschlüsse wurde vereinfacht.

Kritiker halten die Maßnahmen für unzureichend. Die Bürokratie bei Visa und Berufsanerkennung sei zu langsam. Viele Fachkräfte entschieden sich für Kanada oder Australien. Deutschland müsse nicht nur Hürden abbauen, sondern eine echte Willkommenskultur entwickeln.`,
    preguntas: [
      { enunciado: 'In Deutschland fehlen rund 630.000 Fachkräfte.', respuesta: true },
      { enunciado: 'Der Fachkräftemangel betrifft nur die IT-Branche.', respuesta: false },
      { enunciado: 'Jede dritte Lehrstelle im Handwerk bleibt unbesetzt.', respuesta: true },
      { enunciado: 'Das Fachkräfteeinwanderungsgesetz gilt seit 2024.', respuesta: false },
      { enunciado: 'Kritiker finden die Visaverfahren zu langsam.', respuesta: true },
    ],
  },
  {
    slug: 'telc-b2-pruefung-energie-wende',
    nivel: 'B2',
    titulo: 'telc B2 — Die Energiewende und ihre Herausforderungen',
    descripcion: 'Text über erneuerbare Energien und Energiepolitik. telc B2 Leseverstehen Prüfungsvorbereitung.',
    texto: `Deutschland will bis 2045 klimaneutral werden. Die Energiewende — der Umstieg auf erneuerbare Energien — ist das Herzstück der Klimapolitik. 2023 stammten bereits über 50 Prozent des Stroms aus Wind, Sonne und Biomasse.

Doch der Ausbau stockt. Genehmigungsverfahren für Windräder dauern durchschnittlich sieben Jahre. Bürgerinitiativen protestieren gegen Windparks in ihrer Nachbarschaft — das 'Nimby'-Phänomen. Auch der Netzausbau hinkt hinterher: Windstrom aus dem Norden muss in den Süden transportiert werden.

Deutsche Haushalte zahlen die höchsten Strompreise in Europa. Während die Industrie teilweise geschützt wird, tragen private Verbraucher die Hauptlast. Das Stichwort 'Energiearmut' gewinnt an Bedeutung.

Befürworter argumentieren, dass kurzfristige Kosten durch langfristige Einsparungen und die Vermeidung von Klimaschäden ausgeglichen werden. Die Energiewende sei nicht nur ökologisch, sondern auch industriepolitisch eine Chance.`,
    preguntas: [
      { enunciado: 'Deutschland will bis 2050 klimaneutral werden.', respuesta: false },
      { enunciado: 'Über 50 Prozent des Stroms kommen aus erneuerbaren Quellen.', respuesta: true },
      { enunciado: 'Genehmigungsverfahren für Windräder dauern durchschnittlich sieben Jahre.', respuesta: true },
      { enunciado: 'Deutsche Haushalte zahlen niedrige Strompreise.', respuesta: false },
      { enunciado: 'Die Energiewende wird auch als industriepolitische Chance gesehen.', respuesta: true },
    ],
  },
  {
    slug: 'goethe-b2-pruefung-ernaehrungstrends',
    nivel: 'B2',
    titulo: 'Goethe B2 — Ernährungstrends und ihre Folgen',
    descripcion: 'Kritischer Text über moderne Ernährungstrends. Goethe B2 Prüfungstext Leseverstehen.',
    texto: `Glutenfrei, laktosefrei, zuckerfrei, vegan — die Liste der Ernährungstrends wird immer länger. In deutschen Supermärkten hat sich das Sortiment an 'Free-from'-Produkten in den letzten fünf Jahren verdreifacht.

Prof. Dr. Keller von der Universität Hohenheim warnt: 'Nur etwa ein Prozent der Bevölkerung leidet an Zöliakie und muss tatsächlich Gluten meiden. Wenn gesunde Menschen ohne medizinischen Grund darauf verzichten, fehlen ihnen wichtige Ballaststoffe.'

Der Markt für pflanzliche Ersatzprodukte boomt. Allerdings sind diese nicht automatisch gesünder. Viele enthalten hohe Mengen an Zucker, Salz und Zusatzstoffen, um Geschmack und Textur nachzuahmen.

Soziologen sehen in den Ernährungstrends ein Spiegelbild gesellschaftlicher Entwicklungen. In einer Welt voller Unsicherheiten vermittelt die Kontrolle über die eigene Ernährung Sicherheit. Gleichzeitig birgt die Fixierung auf 'reines' Essen das Risiko einer Essstörung namens Orthorexie.`,
    preguntas: [
      { enunciado: 'Das Sortiment an Free-from-Produkten hat sich verdreifacht.', respuesta: true },
      { enunciado: 'Etwa zehn Prozent der Bevölkerung leiden an Zöliakie.', respuesta: false },
      { enunciado: 'Vegane Ersatzprodukte sind immer gesünder als tierische.', respuesta: false },
      { enunciado: 'Orthorexie ist eine Essstörung.', respuesta: true },
      { enunciado: 'Prof. Keller empfiehlt allen, auf Gluten zu verzichten.', respuesta: false },
    ],
  },
  {
    slug: 'goethe-b2-pruefung-digitale-demokratie',
    nivel: 'B2',
    titulo: 'Goethe B2 — Digitale Demokratie und Bürgerbeteiligung',
    descripcion: 'Text über Online-Bürgerbeteiligung und E-Government. Goethe B2 Leseverstehen.',
    texto: `Immer mehr Kommunen experimentieren mit digitalen Beteiligungsplattformen, auf denen Bürger über Haushaltsprioritäten abstimmen und Vorschläge einreichen können.

Die Stadt Wuppertal hat mit dem 'Talbeteiligung'-Portal eine Vorreiterrolle übernommen. Über 40.000 Bürger haben die Plattform genutzt und mehr als 3.000 Vorschläge eingereicht. Einige wurden umgesetzt — etwa die Umgestaltung eines Parkplatzes in einen Bürgerpark.

Doch Politikwissenschaftler mahnen zur Vorsicht. 'Es sind vor allem gut gebildete, mittelalte Männer, die sich auf diesen Plattformen engagieren. Ältere Menschen und Migranten werden oft nicht erreicht', warnt Prof. Kersting. Die digitale Kluft drohe, sich in eine demokratische Kluft zu verwandeln.

Ein weiteres Problem ist die Gefahr der Manipulation. Organisierte Interessengruppen können durch koordinierte Aktionen Abstimmungen beeinflussen. Die Herausforderung besteht darin, digitale Beteiligung inklusiv und sicher zu gestalten.`,
    preguntas: [
      { enunciado: 'Wuppertal hat eine digitale Beteiligungsplattform eingeführt.', respuesta: true },
      { enunciado: 'Über 40.000 Bürger haben die Plattform genutzt.', respuesta: true },
      { enunciado: 'Digitale Beteiligung erreicht alle Bevölkerungsgruppen gleich gut.', respuesta: false },
      { enunciado: 'Online-Abstimmungen sind gegen Manipulation geschützt.', respuesta: false },
      { enunciado: 'Ein Parkplatz wurde in einen Bürgerpark umgestaltet.', respuesta: true },
    ],
  },
  {
    slug: 'im-kaufhaus',
    nivel: 'A1',
    titulo: 'Im Kaufhaus',
    descripcion: 'Lisa kauft eine neue Jacke im Kaufhaus.',
    texto: `Lisa geht heute ins Kaufhaus. Sie braucht eine neue Jacke für den Winter. Das Kaufhaus ist groß und hat vier Stockwerke. Lisa fährt mit dem Aufzug in die zweite Etage. Dort sind die Jacken und Mäntel.

Eine Verkäuferin hilft Lisa. Sie zeigt ihr eine rote Jacke und eine blaue Jacke. Lisa mag die blaue Jacke sehr. Sie probiert die Jacke an. Die Jacke passt gut und ist nicht zu teuer.

Lisa bezahlt die Jacke an der Kasse. Die Verkäuferin packt die Jacke in eine Tüte. Lisa ist sehr glücklich. Sie trägt die neue Jacke sofort nach Hause.`,
    preguntas: [
      { enunciado: 'Lisa kauft eine neue Jacke.', respuesta: true },
      { enunciado: 'Das Kaufhaus hat nur zwei Stockwerke.', respuesta: false },
      { enunciado: 'Lisa mag die blaue Jacke.', respuesta: true },
      { enunciado: 'Die Jacke ist zu teuer für Lisa.', respuesta: false },
      { enunciado: 'Lisa bezahlt die Jacke an der Kasse.', respuesta: true },
    ],
  },
  {
    slug: 'die-uhrzeit',
    nivel: 'A1',
    titulo: 'Die Uhrzeit',
    descripcion: 'Tom lernt, wie man die Uhrzeit auf Deutsch sagt.',
    texto: `Tom ist neun Jahre alt. In der Schule lernt er heute die Uhrzeit. Die Lehrerin zeigt eine große Uhr an der Tafel. Tom lernt die Wörter „Stunde“, „Minute“ und „Sekunde“.

Um acht Uhr beginnt die Schule. Um zwölf Uhr isst Tom zu Mittag. Um halb vier ist die Schule zu Ende. Tom findet die Uhrzeit am Anfang schwierig. Die Lehrerin erklärt es aber sehr gut.

Am Abend übt Tom mit seiner Mutter. Er sagt: „Es ist sieben Uhr. Wir essen jetzt zu Abend.“ Seine Mutter ist stolz auf ihn. Jetzt kann Tom die Uhrzeit gut lesen.`,
    preguntas: [
      { enunciado: 'Tom lernt die Uhrzeit in der Schule.', respuesta: true },
      { enunciado: 'Die Schule beginnt um zehn Uhr.', respuesta: false },
      { enunciado: 'Tom isst um zwölf Uhr zu Mittag.', respuesta: true },
      { enunciado: 'Tom findet die Uhrzeit von Anfang an sehr einfach.', respuesta: false },
      { enunciado: 'Am Abend übt Tom mit seiner Mutter.', respuesta: true },
    ],
  },
  {
    slug: 'mein-klassenzimmer',
    nivel: 'A1',
    titulo: 'Mein Klassenzimmer',
    descripcion: 'Ein Kind beschreibt sein Klassenzimmer in der Schule.',
    texto: `Mein Klassenzimmer ist groß und hell. Es gibt viele Fenster und eine grüne Tafel. Meine Bank steht in der zweiten Reihe. Neben mir sitzt meine Freundin Emma.

An der Wand hängen bunte Bilder. Wir malen die Bilder immer im Kunstunterricht. Der Lehrertisch steht vorne, direkt neben der Tafel. Im Klassenzimmer gibt es auch einen Computer und ein Regal mit Büchern.

Ich mag mein Klassenzimmer sehr. Es ist warm und gemütlich. Jeden Morgen freue ich mich auf die Schule. Meine Lehrerin heißt Frau Bauer und ist sehr nett.`,
    preguntas: [
      { enunciado: 'Das Klassenzimmer ist klein und dunkel.', respuesta: false },
      { enunciado: 'Emma sitzt neben dem Kind.', respuesta: true },
      { enunciado: 'An der Wand hängen bunte Bilder.', respuesta: true },
      { enunciado: 'Es gibt keinen Computer im Klassenzimmer.', respuesta: false },
      { enunciado: 'Die Lehrerin heißt Frau Bauer.', respuesta: true },
    ],
  },
  {
    slug: 'am-kiosk',
    nivel: 'A1',
    titulo: 'Am Kiosk',
    descripcion: 'Paul kauft eine Zeitschrift und Süßigkeiten am Kiosk.',
    texto: `Paul geht jeden Samstag zum Kiosk an der Ecke. Der Kiosk verkauft Zeitungen, Zeitschriften und Süßigkeiten. Paul mag Comics und kauft oft ein Comic-Heft.

Heute kauft Paul ein Comic-Heft und eine Flasche Wasser. Er sieht auch Schokolade im Regal. Die Schokolade kostet zwei Euro. Paul hat genug Geld und kauft die Schokolade auch.

Der Verkäufer am Kiosk heißt Herr Yilmaz. Er ist immer freundlich. Paul bezahlt und sagt „Danke schön“. Dann geht er glücklich nach Hause und liest sein neues Comic-Heft.`,
    preguntas: [
      { enunciado: 'Paul geht jeden Sonntag zum Kiosk.', respuesta: false },
      { enunciado: 'Der Kiosk verkauft Zeitungen und Süßigkeiten.', respuesta: true },
      { enunciado: 'Paul kauft heute kein Comic-Heft.', respuesta: false },
      { enunciado: 'Die Schokolade kostet zwei Euro.', respuesta: true },
      { enunciado: 'Der Verkäufer heißt Herr Yilmaz.', respuesta: true },
    ],
  },
  {
    slug: 'die-wochentage',
    nivel: 'A1',
    titulo: 'Die Wochentage',
    descripcion: 'Mia erzählt, was sie an jedem Wochentag macht.',
    texto: `Mia hat eine feste Routine. Am Montag geht sie zur Schule und hat Sportunterricht. Am Dienstag lernt sie Englisch und Musik. Am Mittwoch hat Mia frei am Nachmittag und spielt mit Freunden.

Am Donnerstag geht Mia zum Schwimmkurs. Sie schwimmt sehr gern. Am Freitag hat sie Kunstunterricht und malt gerne Bilder. Am Wochenende, also am Samstag und Sonntag, bleibt Mia zu Hause bei ihrer Familie.

Mias Lieblingstag ist der Donnerstag. Dort schwimmt sie. Sie mag auch den Sonntag. Dann kocht die ganze Familie zusammen. Jede Woche freut sich Mia auf ihre Aktivitäten.`,
    preguntas: [
      { enunciado: 'Am Montag hat Mia Sportunterricht.', respuesta: true },
      { enunciado: 'Am Mittwoch hat Mia keine Zeit für Freunde.', respuesta: false },
      { enunciado: 'Mia geht am Donnerstag zum Schwimmkurs.', respuesta: true },
      { enunciado: 'Mias Lieblingstag ist der Montag.', respuesta: false },
      { enunciado: 'Am Sonntag kocht die Familie zusammen.', respuesta: true },
    ],
  },
  {
    slug: 'meine-freunde',
    nivel: 'A1',
    titulo: 'Meine Freunde',
    descripcion: 'Ein Kind stellt seine besten Freunde vor.',
    texto: `Ich habe drei gute Freunde. Sie heißen Ben, Lea und Noah. Ben spielt gern Fußball. Lea malt gern Bilder. Noah liest gern Bücher.

Wir treffen uns oft im Park. Dort spielen wir zusammen und lachen viel. Ben bringt immer seinen Fußball mit. Lea hat bunte Stifte dabei. Noah hat immer ein Buch in der Tasche.

Meine Freunde sind sehr wichtig für mich. Wir feiern zusammen Geburtstage und helfen uns gegenseitig. Am liebsten spiele ich mit meinen Freunden am Wochenende.`,
    preguntas: [
      { enunciado: 'Das Kind hat drei gute Freunde.', respuesta: true },
      { enunciado: 'Ben liest gern Bücher.', respuesta: false },
      { enunciado: 'Lea malt gern Bilder.', respuesta: true },
      { enunciado: 'Die Freunde treffen sich nie im Park.', respuesta: false },
      { enunciado: 'Die Freunde feiern zusammen Geburtstage.', respuesta: true },
    ],
  },
  {
    slug: 'besuch-bei-der-tante',
    nivel: 'A2',
    titulo: 'Ein Besuch bei der Tante',
    descripcion: 'Sophie besucht ihre Tante auf dem Land und erlebt einen schönen Tag.',
    texto: `Sophie hat am Wochenende ihre Tante Rita besucht. Tante Rita wohnt auf dem Land, weit weg von der Stadt. Sophie ist mit dem Zug gefahren, weil ihre Tante keinen Bahnhof in der Nähe hat, sondern nur einen kleinen Haltepunkt.

Als Sophie angekommen ist, hat Tante Rita schon Kuchen gebacken. Sie haben zusammen im Garten gesessen und Kaffee getrunken. Tante Rita hat viele Tiere: zwei Katzen, einen Hund und mehrere Hühner. Sophie hat den Hühnern beim Füttern geholfen, weil sie das noch nie gemacht hatte.

Am Abend ist Sophie mit dem letzten Zug wieder nach Hause gefahren. Sie war ein bisschen traurig, dass der Besuch schon vorbei war. Trotzdem hat sie sich sehr gefreut, dass sie ihre Tante wieder gesehen hat. Sie hat versprochen, bald wiederzukommen.`,
    preguntas: [
      { enunciado: 'Tante Rita wohnt in der Stadt.', respuesta: false },
      { enunciado: 'Sophie ist mit dem Auto gefahren.', respuesta: false },
      { enunciado: 'Tante Rita hat Kuchen gebacken.', respuesta: true },
      { enunciado: 'Sophie hat den Hühnern beim Füttern geholfen.', respuesta: true },
      { enunciado: 'Sophie war froh, dass der Besuch so schnell vorbei war.', respuesta: false },
    ],
  },
  {
    slug: 'die-autofahrt-in-den-urlaub',
    nivel: 'A2',
    titulo: 'Die Autofahrt in den Urlaub',
    descripcion: 'Die Familie Bergmann fährt mit dem Auto in den Sommerurlaub nach Italien.',
    texto: `Die Familie Bergmann ist am Samstag früh losgefahren, weil die Fahrt nach Italien sehr lang ist. Herr Bergmann hat das Auto gepackt, während die Kinder noch geschlafen haben. Frau Bergmann hat Sandwiches und Getränke für die Reise vorbereitet.

Nach drei Stunden haben sie an einer Raststätte angehalten, weil die Kinder Hunger hatten. Sie haben dort zu Mittag gegessen und sich ein bisschen die Beine vertreten. Auf der Autobahn in Österreich gab es viel Verkehr, sodass die Familie später als geplant angekommen ist.

Als sie endlich am Meer angekommen sind, waren alle sehr müde, aber auch glücklich. Die Kinder sind sofort ins Wasser gesprungen. Frau Bergmann hat gesagt, dass sich die lange Fahrt gelohnt hat. Der Urlaub konnte endlich beginnen.`,
    preguntas: [
      { enunciado: 'Die Familie Bergmann ist am Sonntag losgefahren.', respuesta: false },
      { enunciado: 'Sie haben an einer Raststätte Mittag gegessen.', respuesta: true },
      { enunciado: 'In Österreich gab es keinen Verkehr.', respuesta: false },
      { enunciado: 'Die Familie ist später als geplant am Meer angekommen.', respuesta: true },
      { enunciado: 'Die Kinder sind sofort ins Wasser gesprungen.', respuesta: true },
    ],
  },
  {
    slug: 'ausflug-nach-dresden',
    nivel: 'A2',
    titulo: 'Ein Ausflug nach Dresden',
    descripcion: 'Markus und seine Kollegen machen einen Tagesausflug nach Dresden.',
    texto: `Markus ist mit drei Kollegen nach Dresden gefahren, weil die Firma einen Betriebsausflug organisiert hat. Sie sind früh mit dem Zug losgefahren und haben nach zwei Stunden Dresden erreicht. Das Wetter war sonnig, und alle waren gut gelaunt.

Zuerst haben sie die Frauenkirche besichtigt. Der Reiseführer hat erklärt, dass die Kirche im Zweiten Weltkrieg zerstört und später wieder aufgebaut wurde. Danach sind sie durch die Altstadt spaziert und haben in einem Café Kaffee und Kuchen gegessen.

Am Nachmittag haben sie das Grüne Gewölbe besucht, ein berühmtes Museum mit wertvollen Schätzen. Markus hat viele Fotos gemacht, damit er sich später noch gut an den Tag erinnern kann. Am Abend sind sie müde, aber zufrieden nach Hause gefahren.`,
    preguntas: [
      { enunciado: 'Markus ist allein nach Dresden gefahren.', respuesta: false },
      { enunciado: 'Die Gruppe ist mit dem Zug gefahren.', respuesta: true },
      { enunciado: 'Die Frauenkirche wurde nie zerstört.', respuesta: false },
      { enunciado: 'Sie haben das Grüne Gewölbe besucht.', respuesta: true },
      { enunciado: 'Markus hat keine Fotos gemacht.', respuesta: false },
    ],
  },
  {
    slug: 'der-handwerker-kommt',
    nivel: 'A2',
    titulo: 'Der Handwerker kommt',
    descripcion: 'Herr Krause wartet auf einen Handwerker, weil die Heizung kaputt ist.',
    texto: `Die Heizung in Herrn Krauses Wohnung ist letzte Woche kaputtgegangen. Es war sehr kalt, weil es draußen schon Winter war. Herr Krause hat sofort einen Handwerker angerufen, damit die Heizung schnell repariert wird.

Der Handwerker hat gesagt, dass er erst am nächsten Tag kommen kann. Herr Krause hat die Nacht mit einer zusätzlichen Decke verbracht, weil die Wohnung so kalt war. Am nächsten Morgen ist der Handwerker pünktlich gekommen und hat sofort mit der Arbeit begonnen.

Nach zwei Stunden war die Heizung wieder repariert. Der Handwerker hat erklärt, dass ein kleines Teil kaputt war und er es ausgetauscht hat. Herr Krause war sehr erleichtert, dass es keine große Reparatur war. Er hat dem Handwerker gedankt und die Rechnung bezahlt.`,
    preguntas: [
      { enunciado: 'Die Heizung ist im Sommer kaputtgegangen.', respuesta: false },
      { enunciado: 'Herr Krause hat einen Handwerker angerufen.', respuesta: true },
      { enunciado: 'Der Handwerker ist noch am selben Tag gekommen.', respuesta: false },
      { enunciado: 'Die Reparatur hat zwei Stunden gedauert.', respuesta: true },
      { enunciado: 'Herr Krause musste eine sehr große Reparatur bezahlen.', respuesta: false },
    ],
  },
  {
    slug: 'die-geburtstagsueberraschung',
    nivel: 'A2',
    titulo: 'Die Geburtstagsüberraschung',
    descripcion: 'Freunde planen heimlich eine Überraschungsparty für Anna.',
    texto: `Annas Freunde haben beschlossen, eine Überraschungsparty für ihren Geburtstag zu organisieren. Sie haben sich heimlich getroffen, damit Anna nichts von den Plänen erfährt. Jeder hat eine Aufgabe bekommen: Tim hat die Einladungen geschrieben, und Sarah hat den Kuchen bestellt.

Am Tag der Party hat Anna gedacht, dass sie nur zu einem normalen Abendessen mit ihrer besten Freundin gehen wird. Als sie die Wohnung betreten hat, haben plötzlich alle „Überraschung!“ gerufen. Anna war so überrascht, dass sie fast geweint hat.

Die Party war ein großer Erfolg. Alle haben getanzt, gelacht und den leckeren Kuchen gegessen. Anna hat sich sehr gefreut, dass ihre Freunde sich so viel Mühe gegeben hatten. Sie hat gesagt, dass es der schönste Geburtstag ihres Lebens war.`,
    preguntas: [
      { enunciado: 'Annas Freunde haben die Party heimlich geplant.', respuesta: true },
      { enunciado: 'Anna hat vorher von der Party gewusst.', respuesta: false },
      { enunciado: 'Tim hat den Kuchen bestellt.', respuesta: false },
      { enunciado: 'Anna war überrascht, als alle „Überraschung!“ gerufen haben.', respuesta: true },
      { enunciado: 'Anna fand es einen schlechten Geburtstag.', respuesta: false },
    ],
  },
  {
    slug: 'julias-verlorener-schluessel',
    nivel: 'A2',
    titulo: 'Der verlorene Schlüssel',
    descripcion: 'Julia hat ihren Wohnungsschlüssel verloren und sucht ihn überall.',
    texto: `Julia ist gestern Abend nach Hause gekommen und hat gemerkt, dass sie ihren Schlüssel nicht mehr hatte. Sie hat in ihrer Tasche gesucht, aber der Schlüssel war nicht da. Julia hat sich sehr geärgert, weil es draußen kalt war und sie nicht in die Wohnung konnte.

Sie hat ihre Nachbarin, Frau Weber, angerufen. Frau Weber hat einen Ersatzschlüssel und hat Julia sofort geholfen. „Ich habe gewusst, dass so etwas irgendwann passiert“, hat Frau Weber gelacht. Julia war sehr erleichtert und hat sich herzlich bedankt.

Am nächsten Morgen hat Julia ihren Schlüssel gefunden. Er lag unter dem Autositz. Sie hatte ihn beim Einsteigen fallen lassen. Seitdem trägt Julia den Schlüssel immer an einer Kette, damit das nicht wieder passiert.`,
    preguntas: [
      { enunciado: 'Julia hat ihren Schlüssel in der Tasche gefunden.', respuesta: false },
      { enunciado: 'Frau Weber hat Julia geholfen.', respuesta: true },
      { enunciado: 'Julia konnte problemlos in die Wohnung, weil die Tür offen war.', respuesta: false },
      { enunciado: 'Julia hat den Schlüssel am nächsten Morgen im Auto gefunden.', respuesta: true },
      { enunciado: 'Julia trägt den Schlüssel jetzt an einer Kette.', respuesta: true },
    ],
  },
  {
    slug: 'mein-taschengeld',
    nivel: 'A1',
    titulo: 'Mein Taschengeld',
    descripcion: 'Paul bekommt jede Woche Taschengeld und spart für ein neues Fahrrad.',
    texto: `Paul ist zehn Jahre alt. Er bekommt jede Woche fünf Euro Taschengeld. Seine Eltern geben ihm das Geld am Sonntag. Paul spart das Geld in einer kleinen Box. Die Box steht auf seinem Regal. Er möchte ein neues Fahrrad kaufen. Das Fahrrad kostet hundert Euro.

Manchmal kauft Paul auch Süßigkeiten. Er mag Schokolade sehr gern. Aber er kauft nicht jede Woche etwas. Er will sein Geld sparen. Seine Schwester Lisa spart auch Geld. Sie möchte ein Buch kaufen. Am Ende des Monats zählen Paul und Lisa ihr Geld zusammen. Sie sind stolz auf sich.`,
    preguntas: [
      { enunciado: 'Paul bekommt jeden Tag Taschengeld.', respuesta: false },
      { enunciado: 'Paul spart Geld für ein Fahrrad.', respuesta: true },
      { enunciado: 'Paul kauft jede Woche Süßigkeiten.', respuesta: false },
      { enunciado: 'Lisa möchte auch etwas kaufen.', respuesta: true },
      { enunciado: 'Paul und Lisa zählen ihr Geld nie zusammen.', respuesta: false },
    ],
  },
  {
    slug: 'im-obstladen',
    nivel: 'A1',
    titulo: 'Im Obstladen',
    descripcion: 'Mia kauft frisches Obst in einem kleinen Laden in ihrer Straße.',
    texto: `Mia geht heute in den Obstladen. Der Laden ist klein und bunt. Es gibt rote Äpfel, gelbe Bananen und grüne Trauben. Mia mag Äpfel am liebsten. Sie kauft drei Äpfel und zwei Bananen. Der Verkäufer ist sehr freundlich.

„Guten Tag! Was möchten Sie noch?“, fragt der Verkäufer. Mia denkt kurz nach. Sie nimmt auch eine Packung Erdbeeren. Die Erdbeeren sind rot und süß. Mia bezahlt an der Kasse. Sie bezahlt fünf Euro. Dann geht sie glücklich nach Hause.`,
    preguntas: [
      { enunciado: 'Der Obstladen ist groß.', respuesta: false },
      { enunciado: 'Mia kauft drei Äpfel.', respuesta: true },
      { enunciado: 'Mia mag keine Äpfel.', respuesta: false },
      { enunciado: 'Die Erdbeeren sind rot.', respuesta: true },
      { enunciado: 'Mia bezahlt zehn Euro.', respuesta: false },
    ],
  },
  {
    slug: 'meine-abendroutine',
    nivel: 'A1',
    titulo: 'Meine Abendroutine',
    descripcion: 'Tom erzählt, was er jeden Abend vor dem Schlafen macht.',
    texto: `Jeden Abend um sieben Uhr isst Tom mit seiner Familie. Nach dem Essen räumt er den Tisch auf. Dann macht er seine Hausaufgaben. Tom braucht dafür ungefähr eine Stunde. Danach darf er ein bisschen fernsehen.

Um neun Uhr putzt Tom seine Zähne. Er zieht seinen Pyjama an. Seine Mutter liest ihm eine Geschichte vor. Tom hört die Geschichte sehr gern. Um halb zehn schläft er ein. Am Wochenende bleibt er manchmal länger wach.`,
    preguntas: [
      { enunciado: 'Tom isst um sieben Uhr mit seiner Familie.', respuesta: true },
      { enunciado: 'Tom macht zuerst die Hausaufgaben und isst danach.', respuesta: false },
      { enunciado: 'Tom putzt um neun Uhr seine Zähne.', respuesta: true },
      { enunciado: 'Toms Vater liest ihm eine Geschichte vor.', respuesta: false },
      { enunciado: 'Tom bleibt am Wochenende immer schon um neun Uhr wach.', respuesta: false },
    ],
  },
  {
    slug: 'meine-lieblingsspiele',
    nivel: 'A1',
    titulo: 'Meine Lieblingsspiele',
    descripcion: 'Sofie erzählt von ihren Lieblingsspielen mit Freunden im Garten.',
    texto: `Sofie spielt sehr gern mit ihren Freunden. Ihr Lieblingsspiel ist Verstecken. Sie spielen oft im Garten. Der Garten ist groß und hat viele Bäume. Sofie versteckt sich immer hinter dem großen Baum.

Ihre Freundin Emma spielt lieber Fangen. Fangen ist auch lustig, findet Sofie. Manchmal spielen sie beide Spiele zusammen. Am Nachmittag trinken sie Saft und essen Kekse. Sofie freut sich immer auf das Spielen mit Emma.`,
    preguntas: [
      { enunciado: 'Sofies Lieblingsspiel ist Verstecken.', respuesta: true },
      { enunciado: 'Sofie spielt lieber allein.', respuesta: false },
      { enunciado: 'Der Garten ist klein.', respuesta: false },
      { enunciado: 'Emma mag Fangen.', respuesta: true },
      { enunciado: 'Sofie und Emma trinken am Nachmittag Kaffee.', respuesta: false },
    ],
  },
  {
    slug: 'unsere-familie-am-abend',
    nivel: 'A1',
    titulo: 'Unsere Familie am Abend',
    descripcion: 'Ben beschreibt, was seine Familie jeden Abend zusammen macht.',
    texto: `Am Abend ist die ganze Familie zu Hause. Bens Mutter kocht das Abendessen. Sein Vater deckt den Tisch. Ben und seine Schwester helfen auch ein bisschen. Sie stellen die Teller auf den Tisch.

Nach dem Essen spielen sie oft zusammen ein Brettspiel. Ben gewinnt nicht immer, aber das Spiel macht ihm Spaß. Seine kleine Schwester lacht sehr viel. Um acht Uhr gehen die Kinder ins Bett. Die Eltern schauen dann noch ein bisschen fern.`,
    preguntas: [
      { enunciado: 'Bens Vater kocht das Abendessen.', respuesta: false },
      { enunciado: 'Ben hilft beim Tischdecken.', respuesta: true },
      { enunciado: 'Die Familie spielt nach dem Essen ein Brettspiel.', respuesta: true },
      { enunciado: 'Ben gewinnt immer.', respuesta: false },
      { enunciado: 'Die Kinder gehen um acht Uhr ins Bett.', respuesta: true },
    ],
  },
  {
    slug: 'meine-drei-lieblingsfarben',
    nivel: 'A1',
    titulo: 'Meine drei Lieblingsfarben',
    descripcion: 'Nina erzählt, welche Farben sie am liebsten mag und warum.',
    texto: `Nina mag drei Farben besonders gern: Blau, Grün und Gelb. Ihr Zimmer ist blau. Sie findet Blau sehr ruhig. Ihr Fahrrad ist grün. Grün ist die Farbe von Bäumen und Gras.

Ninas Lieblingspullover ist gelb. Gelb macht sie fröhlich. Ihre beste Freundin Lea mag lieber Rosa und Lila. Die zwei Mädchen malen oft zusammen Bilder. Sie benutzen viele bunte Farben.`,
    preguntas: [
      { enunciado: 'Nina mag Blau, Grün und Gelb.', respuesta: true },
      { enunciado: 'Ninas Lieblingspullover ist gelb.', respuesta: true },
      { enunciado: 'Ihr Fahrrad ist rot.', respuesta: false },
      { enunciado: 'Lea mag lieber Rosa und Lila.', respuesta: true },
      { enunciado: 'Nina und Lea malen nie zusammen.', respuesta: false },
    ],
  },
  {
    slug: 'der-verlorene-rucksack-im-flugzeug',
    nivel: 'A2',
    titulo: 'Der verlorene Rucksack im Flugzeug',
    descripcion: 'Jonas hat auf dem Rückflug aus Barcelona seinen Rucksack vergessen.',
    texto: `Jonas ist letzte Woche nach Barcelona geflogen, weil er dort seine Cousine besucht hat. Der Flug war sehr angenehm, und er hat viele schöne Tage in der Stadt verbracht. Am Sonntag ist er zum Flughafen gefahren, um zurück nach Deutschland zu fliegen. Er hat seinen Rucksack unter den Sitz gestellt und ist während des Fluges eingeschlafen.

Als das Flugzeug gelandet ist, ist Jonas schnell aufgestanden und ausgestiegen, weil er seinen Anschlussflug nicht verpassen wollte. Erst am Gate hat er gemerkt, dass er seinen Rucksack im Flugzeug vergessen hatte. Er ist sofort zum Info-Schalter gelaufen und hat der Mitarbeiterin die Situation erklärt. Sie hat im System nachgeschaut und ihm gesagt, dass der Rucksack gefunden wurde.

Nach einer Stunde hat Jonas seinen Rucksack endlich zurückbekommen. Er war sehr erleichtert, weil sein Laptop und sein Reisepass darin waren. „Das war eine wichtige Lektion“, hat er später seiner Cousine am Telefon erzählt. Seitdem kontrolliert er vor jedem Aussteigen genau, ob er alle seine Sachen dabeihat.`,
    preguntas: [
      { enunciado: 'Jonas ist nach Barcelona geflogen, um seine Cousine zu besuchen.', respuesta: true },
      { enunciado: 'Jonas hat seinen Rucksack im Taxi vergessen.', respuesta: false },
      { enunciado: 'Jonas hat erst am Gate gemerkt, dass er den Rucksack vergessen hatte.', respuesta: true },
      { enunciado: 'Der Rucksack wurde nicht gefunden.', respuesta: false },
      { enunciado: 'In dem Rucksack waren Jonas\' Laptop und Reisepass.', respuesta: true },
    ],
  },
  {
    slug: 'ein-regnerisches-wochenende-zuhause',
    nivel: 'A2',
    titulo: 'Ein regnerisches Wochenende zuhause',
    descripcion: 'Familie Berger hat wegen des schlechten Wetters das Wochenende drinnen verbracht.',
    texto: `Am Samstag hat es den ganzen Tag geregnet, deshalb ist Familie Berger zu Hause geblieben. Eigentlich wollten sie einen Ausflug in die Berge machen, aber das Wetter hat ihre Pläne geändert. Herr Berger hat vorgeschlagen, stattdessen einen Filmnachmittag zu machen. Die Kinder haben sich sehr darüber gefreut.

Frau Berger hat Popcorn gemacht, während die Kinder Decken und Kissen ins Wohnzimmer gebracht haben. Sie haben zusammen zwei Filme angeschaut und viel gelacht. Als es am Abend immer noch geregnet hat, haben sie ein Brettspiel gespielt. Der kleine Tim hat das Spiel gewonnen, weil er sehr viel Glück hatte.

Am Sonntag hat die Sonne wieder geschienen, aber die Familie war trotzdem froh über den gemütlichen Samstag. „Wenn es regnet, können wir immer noch Spaß haben“, hat Frau Berger gesagt. Sie haben beschlossen, den Ausflug in die Berge für das nächste Wochenende zu planen.`,
    preguntas: [
      { enunciado: 'Familie Berger ist am Samstag in die Berge gefahren.', respuesta: false },
      { enunciado: 'Es hat den ganzen Samstag geregnet.', respuesta: true },
      { enunciado: 'Die Kinder haben sich über den Filmnachmittag geärgert.', respuesta: false },
      { enunciado: 'Tim hat das Brettspiel gewonnen.', respuesta: true },
      { enunciado: 'Am Sonntag hat es wieder geregnet.', respuesta: false },
    ],
  },
  {
    slug: 'die-nachbarin-zieht-ein',
    nivel: 'A2',
    titulo: 'Die Nachbarin zieht ein',
    descripcion: 'Herr Wolf lernt seine neue Nachbarin kennen, die gerade in die Wohnung nebenan gezogen ist.',
    texto: `Letzten Monat ist eine neue Nachbarin in die Wohnung neben Herrn Wolf gezogen. Sie heißt Carla und kommt aus Italien. Am ersten Tag hat Herr Wolf gehört, wie Möbel getragen wurden, deshalb ist er hinausgegangen, um zu helfen. Carla hat sich sehr über die Hilfe gefreut.

Sie haben sich lange im Treppenhaus unterhalten, weil sie beide gerne über Kochen sprechen. Carla hat erzählt, dass sie in Italien als Köchin gearbeitet hat. Herr Wolf hat sie eingeladen, auf einen Kaffee vorbeizukommen, wenn sie mit dem Auspacken fertig ist. Carla hat die Einladung gerne angenommen.

Am Wochenende hat Carla ihm einen selbstgemachten Kuchen gebracht, um sich zu bedanken. Herr Wolf war sehr überrascht und hat sich riesig gefreut. Seitdem trinken sie fast jeden Sonntag zusammen Kaffee. Herr Wolf ist froh, dass er eine so nette Nachbarin hat.`,
    preguntas: [
      { enunciado: 'Carla kommt aus Spanien.', respuesta: false },
      { enunciado: 'Herr Wolf hat Carla beim Einzug geholfen.', respuesta: true },
      { enunciado: 'Carla hat noch nie als Köchin gearbeitet.', respuesta: false },
      { enunciado: 'Herr Wolf hat Carla zu einem Kaffee eingeladen.', respuesta: true },
      { enunciado: 'Herr Wolf und Carla trinken nie zusammen Kaffee.', respuesta: false },
    ],
  },
  {
    slug: 'ein-brief-an-meinen-freund-in-kanada',
    nivel: 'A2',
    titulo: 'Ein Brief an meinen Freund in Kanada',
    descripcion: 'Felix schreibt seinem alten Freund Noah einen Brief über sein neues Leben an der Universität.',
    texto: `Lieber Noah,

ich hoffe, dass es dir und deiner Familie in Kanada gut geht. Ich wollte dir schon lange schreiben, aber ich hatte viel zu tun, weil ich vor zwei Monaten mit dem Studium angefangen habe. Ich studiere jetzt Wirtschaft an der Universität in Leipzig und wohne in einer kleinen Wohngemeinschaft mit zwei anderen Studenten.

Am Anfang war alles neu und ein bisschen schwierig, weil ich niemanden in der Stadt kannte. Zum Glück habe ich schnell nette Leute in meinen Kursen kennengelernt. Letzte Woche haben wir zusammen einen Ausflug an den See gemacht, und das hat mir sehr gut gefallen. Ich vermisse trotzdem unsere gemeinsamen Fußballspiele sehr.

Schreib mir bitte bald zurück und erzähl mir, wie es dir geht. Vielleicht können wir uns im Sommer treffen, wenn du nach Deutschland kommst. Ich würde mich sehr darüber freuen.

Viele Grüße
Felix`,
    preguntas: [
      { enunciado: 'Felix studiert Medizin.', respuesta: false },
      { enunciado: 'Felix hat vor zwei Monaten mit dem Studium angefangen.', respuesta: true },
      { enunciado: 'Felix kannte am Anfang schon viele Leute in Leipzig.', respuesta: false },
      { enunciado: 'Felix und seine Kommilitonen haben einen Ausflug an den See gemacht.', respuesta: true },
      { enunciado: 'Felix vermisst die Fußballspiele mit Noah nicht.', respuesta: false },
    ],
  },
  {
    slug: 'ein-termin-beim-hautarzt',
    nivel: 'A2',
    titulo: 'Ein Termin beim Hautarzt',
    descripcion: 'Julia geht wegen eines Ausschlags zum Hautarzt und bekommt eine Salbe verschrieben.',
    texto: `Julia hat seit einigen Tagen einen roten Ausschlag am Arm gehabt, deshalb hat sie einen Termin beim Hautarzt gemacht. Sie war ein bisschen nervös, weil sie noch nie bei diesem Arzt gewesen war. Am Morgen des Termins ist sie früh aufgestanden, um pünktlich in der Praxis zu sein.

Der Hautarzt hat sich den Ausschlag genau angeschaut und ein paar Fragen gestellt. Er hat gefragt, ob Julia neue Kosmetikprodukte benutzt hat. Julia hat geantwortet, dass sie tatsächlich vor einer Woche eine neue Creme gekauft hat. Der Arzt hat gesagt, dass sie wahrscheinlich allergisch auf diese Creme reagiert.

Er hat ihr eine spezielle Salbe verschrieben und ihr geraten, die neue Creme nicht mehr zu benutzen. Julia ist danach in die Apotheke gegangen und hat sich die Salbe geholt. Nach ein paar Tagen ist der Ausschlag verschwunden, und Julia war sehr erleichtert.`,
    preguntas: [
      { enunciado: 'Julia hatte einen Ausschlag am Bein.', respuesta: false },
      { enunciado: 'Julia war schon oft bei diesem Hautarzt.', respuesta: false },
      { enunciado: 'Der Arzt vermutet eine allergische Reaktion auf eine Creme.', respuesta: true },
      { enunciado: 'Julia hat eine Salbe verschrieben bekommen.', respuesta: true },
      { enunciado: 'Der Ausschlag ist nach ein paar Tagen nicht besser geworden.', respuesta: false },
    ],
  },
  {
    slug: 'das-wochenende-am-fluss',
    nivel: 'A2',
    titulo: 'Das Wochenende am Fluss',
    descripcion: 'Lukas und seine Freunde haben ein entspanntes Wochenende beim Angeln und Grillen am Fluss verbracht.',
    texto: `Am Freitagabend sind Lukas und seine Freunde zu einem kleinen Fluss außerhalb der Stadt gefahren, weil sie dort campen wollten. Sie haben ihre Zelte am Ufer aufgebaut und ein kleines Lagerfeuer gemacht. Es war ein warmer Abend, und alle haben sich sehr auf das Wochenende gefreut.

Am Samstagmorgen sind sie früh aufgestanden, um zu angeln. Lukas hat nach zwei Stunden endlich einen Fisch gefangen, obwohl er vorher gedacht hatte, dass er kein Glück haben würde. Am Nachmittag haben sie den Fisch gegrillt und zusammen mit Gemüse gegessen. Danach sind sie im Fluss schwimmen gegangen, weil das Wasser sehr klar war.

Am Sonntag mussten sie leider schon wieder abreisen, weil einige von ihnen am Montag arbeiten mussten. Sie haben ihre Zelte abgebaut und den Platz sauber hinterlassen. „Das war eines der schönsten Wochenenden dieses Jahres“, hat Lukas beim Nachhausefahren gesagt.`,
    preguntas: [
      { enunciado: 'Lukas und seine Freunde sind in ein Hotel gefahren.', respuesta: false },
      { enunciado: 'Lukas hat einen Fisch gefangen.', respuesta: true },
      { enunciado: 'Sie haben den Fisch nicht gegessen.', respuesta: false },
      { enunciado: 'Sie sind im Fluss schwimmen gegangen.', respuesta: true },
      { enunciado: 'Am Sonntag sind sie noch länger geblieben.', respuesta: false },
    ],
  },
  {
    slug: 'der-erste-schnee',
    nivel: 'A1',
    titulo: 'Der erste Schnee',
    descripcion: 'Kinder freuen sich über den ersten Schnee im Winter.',
    texto: `Es ist Winter. Heute schneit es zum ersten Mal. Lena und Tom schauen aus dem Fenster. Die Straße ist weiß. Die Bäume sind weiß. Lena ruft: „Der Schnee ist so schön!" Tom lacht und zieht seine warme Jacke an. Die Kinder ziehen auch Mützen und Handschuhe an. Sie laufen schnell nach draußen.

Im Garten bauen Lena und Tom einen Schneemann. Sie machen einen großen Kopf und einen kleinen Körper. Tom findet zwei Steine für die Augen. Lena nimmt eine Karotte für die Nase. Der Schneemann bekommt auch einen alten Hut. Die Kinder sind sehr glücklich.

Nach dem Spielen sind Lena und Tom müde und kalt. Sie gehen ins Haus. Die Mutter macht heißen Kakao für die Kinder. Lena und Tom trinken den Kakao am Fenster. Sie schauen auf ihren Schneemann im Garten.`,
    preguntas: [
      { enunciado: 'Es ist Sommer.', respuesta: false },
      { enunciado: 'Die Kinder bauen einen Schneemann.', respuesta: true },
      { enunciado: 'Der Schneemann hat keine Augen.', respuesta: false },
      { enunciado: 'Die Mutter macht heißen Kakao.', respuesta: true },
      { enunciado: 'Lena und Tom bleiben den ganzen Tag draußen.', respuesta: false },
    ],
  },
  {
    slug: 'im-kindergarten',
    nivel: 'A1',
    titulo: 'Im Kindergarten',
    descripcion: 'Ein Tag im Kindergarten von der kleinen Mia.',
    texto: `Mia ist vier Jahre alt. Sie geht jeden Morgen in den Kindergarten. Der Kindergarten ist bunt und groß. Viele Kinder spielen dort zusammen. Mia hat eine beste Freundin. Sie heißt Emma. Mia und Emma malen gern Bilder.

Am Vormittag singen die Kinder Lieder. Danach essen sie gemeinsam einen Snack. Mia isst gern einen Apfel. Emma mag lieber Kekse. Nach dem Essen gehen die Kinder in den Garten. Dort gibt es eine Schaukel und eine Rutsche. Mia schaukelt sehr gern.

Am Nachmittag holt der Vater Mia ab. Mia erzählt ihm von ihrem Tag. Sie zeigt ihm ihr Bild vom Vormittag. Der Vater findet das Bild sehr schön. Mia freut sich und lacht.`,
    preguntas: [
      { enunciado: 'Mia ist sechs Jahre alt.', respuesta: false },
      { enunciado: 'Mia und Emma sind Freundinnen.', respuesta: true },
      { enunciado: 'Die Kinder essen keinen Snack.', respuesta: false },
      { enunciado: 'Mia schaukelt gern im Garten.', respuesta: true },
      { enunciado: 'Die Mutter holt Mia ab.', respuesta: false },
    ],
  },
  {
    slug: 'die-tiere-im-wald',
    nivel: 'A1',
    titulo: 'Die Tiere im Wald',
    descripcion: 'Ein Spaziergang im Wald mit vielen Tieren.',
    texto: `Paul und seine Schwester Nina gehen heute in den Wald. Der Wald ist grün und ruhig. Die Kinder hören Vögel singen. Sie sehen auch einen kleinen Fuchs. Der Fuchs läuft schnell zwischen den Bäumen.

Nina findet Spuren im Boden. „Das sind Spuren von einem Reh", sagt der Vater. Die Familie geht leise weiter. Plötzlich sehen sie ein Eichhörnchen auf einem Baum. Das Eichhörnchen hat eine Nuss im Mund. Paul macht ein Foto von dem Eichhörnchen.

Am Ende des Spaziergangs sind Paul und Nina hungrig. Die Familie setzt sich auf eine Bank. Sie essen Brote und trinken Tee aus einer Thermoskanne. Nina sagt: „Der Wald ist mein Lieblingsort."`,
    preguntas: [
      { enunciado: 'Paul und Nina gehen in den Wald.', respuesta: true },
      { enunciado: 'Die Kinder hören Vögel singen.', respuesta: true },
      { enunciado: 'Sie sehen einen Löwen im Wald.', respuesta: false },
      { enunciado: 'Die Familie isst Brote im Wald.', respuesta: true },
      { enunciado: 'Nina mag den Wald nicht.', respuesta: false },
    ],
  },
  {
    slug: 'mein-lieblingsspielzeug',
    nivel: 'A1',
    titulo: 'Mein Lieblingsspielzeug',
    descripcion: 'Ein Junge erzählt von seinem liebsten Spielzeug.',
    texto: `Ich heiße Ben und ich bin sieben Jahre alt. Mein Lieblingsspielzeug ist ein roter Roboter. Der Roboter heißt Max. Max hat große Augen und kleine Arme. Ich spiele jeden Tag mit ihm.

Mein Roboter kann laufen und leuchten. Er macht auch lustige Geräusche. Am Abend nehme ich Max mit ins Bett. Meine Schwester hat auch ein Lieblingsspielzeug. Ihr Spielzeug ist eine Puppe. Die Puppe heißt Lisa.

Manchmal spielen wir zusammen. Max und Lisa sind dann gute Freunde. Wir bauen ihnen ein Haus aus Bauklötzen. Das macht viel Spaß.`,
    preguntas: [
      { enunciado: 'Ben ist zehn Jahre alt.', respuesta: false },
      { enunciado: 'Der Roboter heißt Max.', respuesta: true },
      { enunciado: 'Max kann fliegen.', respuesta: false },
      { enunciado: 'Bens Schwester hat eine Puppe.', respuesta: true },
      { enunciado: 'Ben und seine Schwester spielen nie zusammen.', respuesta: false },
    ],
  },
  {
    slug: 'meine-oma',
    nivel: 'A1',
    titulo: 'Meine Oma',
    descripcion: 'Ein Kind beschreibt den Besuch bei seiner Oma.',
    texto: `Meine Oma heißt Erika. Sie wohnt in einem kleinen Haus auf dem Land. Ich besuche sie oft am Wochenende. Omas Haus hat einen großen Garten mit vielen Blumen.

Oma kocht sehr gern. Sie macht immer Suppe und Kuchen für mich. Ihr Apfelkuchen schmeckt fantastisch. Nach dem Essen gehen wir zusammen im Garten spazieren. Oma zeigt mir ihre Tomaten und Erdbeeren.

Am Abend liest Oma mir eine Geschichte vor. Ich mag ihre Geschichten sehr. Dann sage ich „Gute Nacht" und schlafe im Gästezimmer. Der Besuch bei Oma ist immer schön.`,
    preguntas: [
      { enunciado: 'Oma heißt Erika.', respuesta: true },
      { enunciado: 'Oma wohnt in der Stadt.', respuesta: false },
      { enunciado: 'Oma backt einen Apfelkuchen.', respuesta: true },
      { enunciado: 'Im Garten gibt es keine Blumen.', respuesta: false },
      { enunciado: 'Oma liest am Abend eine Geschichte vor.', respuesta: true },
    ],
  },
  {
    slug: 'eine-reise-nach-salzburg',
    nivel: 'A2',
    titulo: 'Eine Reise nach Salzburg',
    descripcion: 'Familie Berger hat ein Wochenende in Salzburg verbracht.',
    texto: `Familie Berger hat letztes Wochenende eine Reise nach Salzburg gemacht. Sie sind mit dem Auto gefahren, weil die Zugverbindung zu teuer war. Die Fahrt hat ungefähr drei Stunden gedauert. Als sie angekommen sind, haben sie zuerst ein Hotel in der Altstadt gesucht.

Am Samstag haben sie die Festung Hohensalzburg besucht. Der Blick über die Stadt war wunderschön. Danach sind sie durch die engen Gassen der Altstadt spaziert und haben dort eine typische österreichische Mehlspeise probiert. Die Kinder haben sich besonders über den Musikbrunnen im Mirabellgarten gefreut, weil das Wasser im Takt der Musik gesprungen ist.

Am Sonntag hat es leider geregnet, aber die Familie war trotzdem zufrieden. Sie sind ins Mozart-Museum gegangen, weil sie mehr über den berühmten Komponisten erfahren wollten. Am Nachmittag sind sie müde, aber glücklich nach Hause gefahren. Herr Berger hat gesagt, dass er die Stadt bald wieder besuchen möchte.`,
    preguntas: [
      { enunciado: 'Familie Berger ist mit dem Zug gefahren.', respuesta: false },
      { enunciado: 'Sie haben die Festung Hohensalzburg besucht.', respuesta: true },
      { enunciado: 'Am Sonntag hat die Sonne geschienen.', respuesta: false },
      { enunciado: 'Die Kinder haben den Musikbrunnen gemocht.', respuesta: true },
      { enunciado: 'Herr Berger will die Stadt nie wieder besuchen.', respuesta: false },
    ],
  },
  {
    slug: 'der-besuch-im-tierheim',
    nivel: 'A2',
    titulo: 'Der Besuch im Tierheim',
    descripcion: 'Familie Klein hat im Tierheim einen neuen Hund gefunden.',
    texto: `Familie Klein hat schon lange über einen Hund gesprochen. Letzten Samstag sind sie deshalb ins Tierheim gefahren, weil sie einen Hund adoptieren wollten. Im Tierheim haben sie viele Hunde gesehen, aber ein kleiner brauner Hund hat ihnen besonders gut gefallen.

Die Tierpflegerin hat erzählt, dass der Hund Bruno heißt und schon zwei Jahre alt ist. Bruno war sehr schüchtern, weil er lange im Tierheim gelebt hat. Trotzdem hat er die Kinder sofort gemocht und ist zu ihnen gelaufen. Die Familie hat sich sofort in Bruno verliebt.

Am Ende haben Herr und Frau Klein die Papiere unterschrieben, und Bruno durfte mit nach Hause kommen. Die Kinder waren sehr aufgeregt, weil sie sich schon lange einen Hund gewünscht haben. Seit diesem Tag schläft Bruno jeden Abend im Wohnzimmer der Familie Klein.`,
    preguntas: [
      { enunciado: 'Familie Klein wollte eine Katze adoptieren.', respuesta: false },
      { enunciado: 'Der Hund heißt Bruno.', respuesta: true },
      { enunciado: 'Bruno war zuerst sehr schüchtern.', respuesta: true },
      { enunciado: 'Die Kinder wollten keinen Hund.', respuesta: false },
      { enunciado: 'Bruno lebt jetzt bei Familie Klein.', respuesta: true },
    ],
  },
  {
    slug: 'der-neue-kollege-im-buero',
    nivel: 'A2',
    titulo: 'Der neue Kollege im Büro',
    descripcion: 'Julia erzählt von ihrem neuen Kollegen bei der Arbeit.',
    texto: `Julia arbeitet seit drei Jahren in einem Büro in Frankfurt. Letzte Woche hat ein neuer Kollege angefangen. Er heißt Daniel und kommt aus Hamburg. Julia hat sich gefreut, weil das Team einen neuen Mitarbeiter gebraucht hat.

Am ersten Tag hat Julia Daniel das Büro gezeigt. Sie hat ihm erklärt, wo die Küche und die Meetingräume sind. Daniel war sehr freundlich und hat viele Fragen gestellt. Julia hat gemerkt, dass Daniel sehr fleißig ist. Zum Mittagessen sind die beiden zusammen in ein Restaurant gegangen, weil Daniel die Stadt noch nicht gut gekannt hat.

Nach ein paar Tagen hat Daniel schon viele Kollegen kennengelernt. Er hat gesagt, dass er sich im Team sehr wohlfühlt. Julia und Daniel arbeiten jetzt oft zusammen an Projekten. Sie sind schnell gute Kollegen geworden.`,
    preguntas: [
      { enunciado: 'Daniel kommt aus München.', respuesta: false },
      { enunciado: 'Julia hat Daniel das Büro gezeigt.', respuesta: true },
      { enunciado: 'Daniel hat keine Fragen gestellt.', respuesta: false },
      { enunciado: 'Julia und Daniel sind zusammen essen gegangen.', respuesta: true },
      { enunciado: 'Daniel fühlt sich im Team nicht wohl.', respuesta: false },
    ],
  },
  {
    slug: 'die-deutschpruefung-an-der-volkshochschule',
    nivel: 'A2',
    titulo: 'Die Deutschprüfung an der Volkshochschule',
    descripcion: 'Marco hat sich auf seine erste Deutschprüfung vorbereitet.',
    texto: `Marco lernt seit einem Jahr Deutsch an der Volkshochschule. Letzten Monat hat er sich sehr auf seine erste Prüfung vorbereitet, weil er unbedingt bestehen wollte. Jeden Abend hat er Vokabeln gelernt und Grammatikübungen gemacht.

Am Tag der Prüfung war Marco sehr nervös. Zuerst hat er den schriftlichen Teil geschrieben. Danach hat er mit einer Partnerin mündlich gesprochen. Die Lehrerin hat gesagt, dass die Prüfung aus vier Teilen besteht: Hören, Lesen, Schreiben und Sprechen. Marco hat sich beim Sprechen ein bisschen unsicher gefühlt, obwohl er viel geübt hatte.

Zwei Wochen später hat Marco die Ergebnisse bekommen. Er hat die Prüfung bestanden! Seine Familie hat sich riesig gefreut, weil Marco so hart gearbeitet hat. Jetzt möchte er den nächsten Kurs besuchen, um sein Deutsch weiter zu verbessern.`,
    preguntas: [
      { enunciado: 'Marco lernt seit einem Jahr Deutsch.', respuesta: true },
      { enunciado: 'Die Prüfung hat nur zwei Teile.', respuesta: false },
      { enunciado: 'Marco hat sich beim Sprechen sicher gefühlt.', respuesta: false },
      { enunciado: 'Marco hat die Prüfung bestanden.', respuesta: true },
      { enunciado: 'Marco möchte keinen weiteren Kurs machen.', respuesta: false },
    ],
  },
  {
    slug: 'ein-sommerjob-am-see',
    nivel: 'A2',
    titulo: 'Ein Sommerjob am See',
    descripcion: 'Sophie hat einen Sommerjob im Café am See gefunden.',
    texto: `Sophie ist Studentin und hat für die Sommerferien einen Job gesucht. Sie hat Glück gehabt und eine Stelle in einem kleinen Café am See gefunden. Das Café gehört einer netten Familie, die jeden Sommer viele Touristen bedient.

In den ersten Tagen war die Arbeit anstrengend, weil Sophie noch nicht wusste, wo alles steht. Sie hat gelernt, Kaffee zu machen und Eis zu verkaufen. Die Gäste waren meistens freundlich, obwohl es manchmal sehr viel zu tun gab. Am Wochenende war das Café besonders voll, weil viele Familien an den See gekommen sind.

Nach den Ferien hat Sophie erzählt, dass ihr die Arbeit trotz des Stresses viel Spaß gemacht hat. Sie hat neue Freunde gefunden und viel Geld für ihr Studium gespart. Nächstes Jahr möchte sie wieder im selben Café arbeiten.`,
    preguntas: [
      { enunciado: 'Sophie hat im Winter gearbeitet.', respuesta: false },
      { enunciado: 'Das Café liegt an einem See.', respuesta: true },
      { enunciado: 'Sophie wusste am ersten Tag schon alles.', respuesta: false },
      { enunciado: 'Am Wochenende war wenig los im Café.', respuesta: false },
      { enunciado: 'Sophie möchte im nächsten Jahr wieder dort arbeiten.', respuesta: true },
    ],
  },
  {
    slug: 'die-theatergruppe-an-der-schule',
    nivel: 'B1',
    titulo: 'Die Theatergruppe an der Schule',
    descripcion: 'Jonas berichtet von seinen Erfahrungen in der Theater-AG.',
    texto: `Seit diesem Schuljahr nimmt Jonas an der Theatergruppe seiner Schule teil, obwohl er am Anfang große Angst vor dem Auftritt hatte. Ein Freund hatte ihn überredet mitzumachen, und mittlerweile ist das wöchentliche Training einer seiner liebsten Momente in der Woche. Die Gruppe besteht aus fünfzehn Schülern verschiedener Klassenstufen, die sich einmal pro Woche nach dem Unterricht treffen.

Nachdem die Gruppe monatelang an einem Theaterstück über Freundschaft gearbeitet hatte, stand endlich die Premiere bevor. In den letzten Wochen vor der Aufführung wurde viel geprobt, und manche Schüler mussten sogar am Wochenende zusätzlich üben. Jonas spielte die Hauptrolle, was ihn zunächst überforderte. Trotzdem gab ihm die Theaterlehrerin viele hilfreiche Tipps, sodass er von Vorstellung zu Vorstellung sicherer wurde.

Am Tag der Aufführung waren alle sehr aufgeregt. Obwohl Jonas kurz vor dem Auftritt seinen Text vergaß, half ihm ein Mitschüler leise weiter. Das Publikum applaudierte am Ende begeistert, und die ganze Mühe hatte sich gelohnt. Seitdem denkt Jonas darüber nach, auch nächstes Jahr wieder mitzumachen, weil ihm die Erfahrung so viel gegeben hat.`,
    preguntas: [
      { enunciado: 'Jonas hatte von Anfang an keine Angst vor dem Auftritt.', respuesta: false },
      { enunciado: 'Die Theatergruppe trifft sich einmal pro Woche.', respuesta: true },
      { enunciado: 'Jonas spielte eine kleine Nebenrolle.', respuesta: false },
      { enunciado: 'Jonas vergaß kurz seinen Text während der Aufführung.', respuesta: true },
      { enunciado: 'Jonas möchte nächstes Jahr sicher nicht mehr mitmachen.', respuesta: false },
    ],
  },
  {
    slug: 'laerm-in-der-stadt',
    nivel: 'B2',
    titulo: 'Lärm in der Stadt – ein unterschätztes Gesundheitsrisiko',
    descripcion: 'Ein Überblick über die gesundheitlichen Folgen von Verkehrslärm in deutschen Großstädten.',
    texto: `In vielen deutschen Großstädten gehört der ständige Lärm von Straßen, Schienen und Flughäfen längst zum Alltag. Während Luftverschmutzung und Feinstaub in der öffentlichen Debatte breiten Raum einnehmen, wird die gesundheitliche Belastung durch Lärm oft unterschätzt. Dabei zeigen zahlreiche Studien, dass dauerhafter Verkehrslärm nicht nur das Wohlbefinden beeinträchtigt, sondern auch ernsthafte körperliche Erkrankungen begünstigen kann.

Besonders betroffen sind Menschen, die an stark befahrenen Hauptstraßen wohnen und deren Schlaf durch nächtlichen Lärm regelmäßig gestört wird. Wissenschaftler weisen darauf hin, dass chronischer Lärmstress das Risiko für Bluthochdruck und Herz-Kreislauf-Erkrankungen erhöht. Wenn der Körper über Jahre hinweg ständig erhöhten Lärmpegeln ausgesetzt wäre, würde dies langfristig zu einer messbaren Verkürzung der Lebenserwartung führen, so das Ergebnis einer viel zitierten Untersuchung. Trotzdem wird das Thema in der Stadtplanung häufig nachrangig behandelt, weil wirtschaftliche Interessen und der Wunsch nach kurzen Verkehrswegen im Vordergrund stehen.

In den letzten Jahren wurden in mehreren Städten Maßnahmen ergriffen, um die Lärmbelastung zu reduzieren. So wurden beispielsweise Tempo-30-Zonen eingerichtet und lärmarmer Asphalt verlegt, der den Fahrgeräuschen entgegenwirken soll. Auch Lärmschutzwände entlang stark befahrener Straßen wurden errichtet. Kritiker bemängeln jedoch, dass diese Maßnahmen oft nur punktuell umgesetzt werden, anstatt ein umfassendes Konzept zu verfolgen, das die gesamte Stadt einbezieht.

Sollte sich an dieser Situation nichts ändern, könnten die gesundheitlichen Kosten für das Gesundheitssystem in Zukunft erheblich steigen. Experten fordern deshalb, dass Lärmschutz von Anfang an in die Stadtplanung integriert wird, anstatt erst nachträglich als Reaktion auf Beschwerden der Anwohner zu erfolgen. Nur so ließe sich langfristig eine spürbare Verbesserung der Lebensqualität in urbanen Räumen erreichen.`,
    preguntas: [
      { enunciado: 'Lärm wird in der öffentlichen Debatte genauso stark diskutiert wie Luftverschmutzung.', respuesta: false },
      { enunciado: 'Chronischer Lärm kann das Risiko für Bluthochdruck erhöhen.', respuesta: true },
      { enunciado: 'In deutschen Städten wurden keinerlei Maßnahmen gegen Lärm ergriffen.', respuesta: false },
      { enunciado: 'Kritiker meinen, dass die Maßnahmen oft nur punktuell sind.', respuesta: true },
      { enunciado: 'Experten fordern, dass Lärmschutz erst nach Beschwerden der Anwohner beginnen soll.', respuesta: false },
    ],
  },
  {
    slug: 'im-schuhgeschaeft',
    nivel: 'A1',
    titulo: 'Im Schuhgeschäft',
    descripcion: 'Lisa kauft neue Schuhe für den Winter.',
    texto: `Lisa braucht neue Schuhe. Es ist Winter und ihre alten Schuhe sind kaputt. Sie geht mit ihrer Mutter in ein Schuhgeschäft in der Stadt.

Im Geschäft gibt es viele Schuhe. Es gibt schwarze, braune und rote Schuhe. Lisa mag die roten Stiefel. Die Verkäuferin fragt: „Welche Größe hast du?“ Lisa sagt: „Ich habe Größe 36.“

Lisa probiert die roten Stiefel an. Sie sind warm und bequem. Die Mutter bezahlt die Schuhe an der Kasse. Lisa ist sehr glücklich. Sie trägt die neuen Stiefel sofort nach Hause.`,
    preguntas: [
      { enunciado: 'Lisa braucht neue Schuhe für den Sommer.', respuesta: false },
      { enunciado: 'Lisa geht mit ihrer Mutter einkaufen.', respuesta: true },
      { enunciado: 'Lisa mag die roten Stiefel.', respuesta: true },
      { enunciado: 'Lisa hat Schuhgröße 40.', respuesta: false },
      { enunciado: 'Die Mutter bezahlt die Schuhe.', respuesta: true },
    ],
  },
  {
    slug: 'am-wochenende-zuhause',
    nivel: 'A1',
    titulo: 'Am Wochenende zuhause',
    descripcion: 'Tom erzählt, was er am Samstag und Sonntag zuhause macht.',
    texto: `Am Samstag steht Tom spät auf. Er frühstückt mit seiner Familie. Danach räumt er sein Zimmer auf und hilft seiner Mutter in der Küche.

Am Nachmittag spielt Tom mit seinem Bruder im Garten. Sie spielen Fußball und lachen viel. Am Abend sehen sie zusammen einen Film.

Am Sonntag ist Tom faul. Er liest ein Buch und hört Musik. Die Familie isst zu Mittag zusammen. Tom mag das Wochenende, weil er Zeit für seine Familie hat.`,
    preguntas: [
      { enunciado: 'Tom steht am Samstag früh auf.', respuesta: false },
      { enunciado: 'Tom hilft seiner Mutter in der Küche.', respuesta: true },
      { enunciado: 'Tom spielt mit seinem Bruder Fußball.', respuesta: true },
      { enunciado: 'Am Sonntag geht Tom schwimmen.', respuesta: false },
      { enunciado: 'Die Familie isst am Sonntag zusammen zu Mittag.', respuesta: true },
    ],
  },
  {
    slug: 'mein-lieblingsbuch',
    nivel: 'A1',
    titulo: 'Mein Lieblingsbuch',
    descripcion: 'Sofia erzählt von ihrem Lieblingsbuch über einen Drachen.',
    texto: `Sofia liest gern Bücher. Ihr Lieblingsbuch heißt „Der kleine Drache“. Das Buch hat viele bunte Bilder.

Die Geschichte ist über einen Drachen. Der Drache ist klein und freundlich. Er wohnt in einem Berg und hat viele Freunde. Sofia liest das Buch jeden Abend vor dem Schlafen.

Sofias Mama liest ihr manchmal auch vor. Sofia möchte später auch ein Buch schreiben. Sie mag Drachen sehr.`,
    preguntas: [
      { enunciado: 'Sofias Lieblingsbuch heißt „Der kleine Drache“.', respuesta: true },
      { enunciado: 'Das Buch hat keine Bilder.', respuesta: false },
      { enunciado: 'Der Drache in der Geschichte ist böse.', respuesta: false },
      { enunciado: 'Sofia liest das Buch jeden Abend.', respuesta: true },
      { enunciado: 'Sofia möchte später ein Buch schreiben.', respuesta: true },
    ],
  },
  {
    slug: 'wochenende-bei-den-grosseltern',
    nivel: 'A2',
    titulo: 'Ein Wochenende bei den Großeltern',
    descripcion: 'Paul hat das Wochenende bei seinen Großeltern auf dem Land verbracht.',
    texto: `Letztes Wochenende hat Paul seine Großeltern besucht. Sie wohnen auf dem Land, weit weg von der Stadt. Paul ist mit dem Auto gefahren, weil es keinen direkten Zug gibt.

Am Samstag hat Paul mit seinem Opa im Garten gearbeitet. Sie haben Äpfel gepflückt und Unkraut entfernt. Danach hat die Oma einen Kuchen gebacken, weil Paul Geburtstag hatte. Am Abend haben alle zusammen gegessen und alte Fotos angeschaut.

Am Sonntag ist Paul mit dem Opa spazieren gegangen. Sie haben über die Vergangenheit gesprochen, und Paul hat viel gelernt. Als er nach Hause gefahren ist, war er ein bisschen traurig, dass das Wochenende schon vorbei war.`,
    preguntas: [
      { enunciado: 'Pauls Großeltern wohnen in der Stadt.', respuesta: false },
      { enunciado: 'Paul ist mit dem Zug gefahren.', respuesta: false },
      { enunciado: 'Paul hatte an diesem Wochenende Geburtstag.', respuesta: true },
      { enunciado: 'Die Oma hat einen Kuchen gebacken.', respuesta: true },
      { enunciado: 'Paul war froh, dass das Wochenende endlich vorbei war.', respuesta: false },
    ],
  },
  {
    slug: 'der-verspaetete-flug',
    nivel: 'A2',
    titulo: 'Der verspätete Flug',
    descripcion: 'Julia wartet stundenlang am Flughafen, weil ihr Flug nach Mallorca Verspätung hat.',
    texto: `Julia wollte am Freitag nach Mallorca fliegen. Sie ist früh zum Flughafen gefahren, weil sie pünktlich sein wollte. Am Flughafen hat sie aber schlechte Nachrichten bekommen: Ihr Flug hatte drei Stunden Verspätung.

Zuerst war Julia sehr enttäuscht. Sie hat sich hingesetzt und ein Buch gelesen, weil sie warten musste. Später hat sie in einem Café einen Kaffee getrunken und mit ihrer Freundin telefoniert. Die Zeit ist trotzdem langsam vergangen.

Endlich, um 22 Uhr, ist ihr Flugzeug gestartet. Julia war müde, aber froh, dass sie doch noch geflogen ist. Als sie in Mallorca angekommen ist, hat sie sofort ihren Urlaub genossen.`,
    preguntas: [
      { enunciado: 'Julia ist zu spät zum Flughafen gekommen.', respuesta: false },
      { enunciado: 'Ihr Flug hatte drei Stunden Verspätung.', respuesta: true },
      { enunciado: 'Julia hat im Café einen Kaffee getrunken.', respuesta: true },
      { enunciado: 'Das Flugzeug ist nie gestartet.', respuesta: false },
      { enunciado: 'Julia war froh, als sie in Mallorca angekommen ist.', respuesta: true },
    ],
  },
  {
    slug: 'der-fahrradunfall-im-park',
    nivel: 'A2',
    titulo: 'Der Fahrradunfall im Park',
    descripcion: 'Markus hat einen kleinen Unfall mit dem Fahrrad und muss zum Arzt.',
    texto: `Markus ist am Sonntag mit seinem Fahrrad im Park gefahren. Er ist schnell gefahren, weil er trainieren wollte. Plötzlich ist ein Hund auf den Weg gelaufen, und Markus ist gestürzt.

Sein Knie hat stark geblutet, deshalb ist eine Frau aus dem Park zu ihm gekommen und hat geholfen. Sie hat einen Krankenwagen gerufen, obwohl Markus gesagt hat, dass es nicht so schlimm sei. Im Krankenhaus hat der Arzt die Wunde gereinigt und einen Verband angelegt.

Markus musste eine Woche zu Hause bleiben, weil sein Knie noch wehgetan hat. Seitdem trägt er beim Radfahren immer einen Helm und fährt vorsichtiger.`,
    preguntas: [
      { enunciado: 'Markus ist im Park spazieren gegangen.', respuesta: false },
      { enunciado: 'Ein Hund ist auf den Weg gelaufen.', respuesta: true },
      { enunciado: 'Niemand hat Markus geholfen.', respuesta: false },
      { enunciado: 'Der Arzt hat Markus im Krankenhaus behandelt.', respuesta: true },
      { enunciado: 'Markus trägt jetzt immer einen Helm.', respuesta: true },
    ],
  },
  {
    slug: 'das-sommerfestival',
    nivel: 'B1',
    titulo: 'Das Sommerfestival',
    descripcion: 'Eine Stadt organisiert ein Musikfestival, das trotz schlechten Wetters ein Erfolg wird.',
    texto: `Jedes Jahr im Juli findet in der Kleinstadt Marburg ein Sommerfestival statt. Lokale Bands, Foodstände und ein Kunsthandwerkermarkt locken tausende Besucher an. In diesem Jahr sollte das Festival besonders groß werden, weil es das zehnjährige Jubiläum gab.

Am Morgen des Festivaltags sah es jedoch nach Regen aus, und die Organisatoren waren nervös. Obwohl der Wetterbericht schlecht war, entschieden sie sich, das Festival trotzdem zu öffnen. Nachdem die ersten Bands aufgetreten waren, klarte der Himmel überraschend auf. Die Besucher tanzten bis in den Abend, und die Stimmung war ausgelassen.

Am Ende war das Sommerfestival trotz aller Zweifel ein großer Erfolg. Die Organisatoren waren erleichtert und planen bereits, das Festival im nächsten Jahr noch größer zu machen. Für viele Einwohner ist es inzwischen der Höhepunkt des Sommers.`,
    preguntas: [
      { enunciado: 'Das Sommerfestival findet jedes Jahr im Winter statt.', respuesta: false },
      { enunciado: 'In diesem Jahr feierte das Festival sein zehnjähriges Jubiläum.', respuesta: true },
      { enunciado: 'Wegen des schlechten Wetters wurde das Festival abgesagt.', respuesta: false },
      { enunciado: 'Der Himmel klarte im Laufe des Tages auf.', respuesta: true },
      { enunciado: 'Die Organisatoren wollen das Festival nicht wiederholen.', respuesta: false },
    ],
  },
  {
    slug: 'die-neue-wg',
    nivel: 'B1',
    titulo: 'Die neue WG',
    descripcion: 'Felix zieht in eine Wohngemeinschaft und muss sich an das Zusammenleben gewöhnen.',
    texto: `Nachdem Felix sein Studium in einer anderen Stadt begonnen hatte, musste er eine Wohnung finden. Da die Mieten sehr hoch waren, entschied er sich für eine Wohngemeinschaft mit zwei anderen Studenten. Anfangs war er unsicher, ob das Zusammenleben mit fremden Menschen funktionieren würde.

In den ersten Wochen gab es kleine Konflikte, zum Beispiel über die Küche oder die Lautstärke der Musik. Trotzdem lernte Felix schnell, wie wichtig klare Absprachen sind. Die Mitbewohner erstellten gemeinsam einen Putzplan und trafen sich regelmäßig zum Kochen, um sich besser kennenzulernen.

Mit der Zeit wurden aus den Mitbewohnern echte Freunde. Obwohl das Zusammenleben manchmal anstrengend war, vermisst Felix heute die gemeinsamen Abende in der WG, seit er in eine eigene Wohnung gezogen ist.`,
    preguntas: [
      { enunciado: 'Felix hat sich sofort für eine eigene Wohnung entschieden.', respuesta: false },
      { enunciado: 'In den ersten Wochen gab es keine Konflikte in der WG.', respuesta: false },
      { enunciado: 'Die Mitbewohner haben einen Putzplan erstellt.', respuesta: true },
      { enunciado: 'Aus den Mitbewohnern wurden echte Freunde.', respuesta: true },
      { enunciado: 'Felix vermisst die WG-Zeit nicht.', respuesta: false },
    ],
  },
  {
    slug: 'streit-mit-der-besten-freundin',
    nivel: 'B1',
    titulo: 'Streit mit der besten Freundin',
    descripcion: 'Nach einem Missverständnis streiten sich zwei beste Freundinnen und finden am Ende wieder zueinander.',
    texto: `Emma und Lea sind seit der Grundschule beste Freundinnen. Vor zwei Wochen hatten sie jedoch einen großen Streit, weil Lea einen wichtigen Termin von Emma vergessen hatte. Emma war sehr enttäuscht, obwohl sie wusste, dass Lea es nicht mit Absicht getan hatte.

Nachdem sie tagelang nicht miteinander gesprochen hatten, schrieb Lea ihrer Freundin eine lange Nachricht. Darin erklärte sie, dass sie in letzter Zeit viel Stress in der Schule gehabt hatte und deshalb unaufmerksam gewesen war. Trotzdem entschuldigte sie sich ehrlich für ihr Verhalten.

Als sich die beiden Mädchen wieder trafen, weinten sie zunächst beide. Danach umarmten sie sich und versprachen, in Zukunft offener miteinander zu reden. Seitdem ist ihre Freundschaft sogar noch stärker geworden, weil sie gelernt haben, Konflikte nicht zu verdrängen.`,
    preguntas: [
      { enunciado: 'Emma und Lea kennen sich erst seit kurzer Zeit.', respuesta: false },
      { enunciado: 'Lea hatte einen Termin von Emma vergessen.', respuesta: true },
      { enunciado: 'Lea hat sich nie für ihr Verhalten entschuldigt.', respuesta: false },
      { enunciado: 'Die beiden Freundinnen haben sich wieder versöhnt.', respuesta: true },
      { enunciado: 'Ihre Freundschaft ist danach zerbrochen.', respuesta: false },
    ],
  },
  {
    slug: 'deepfakes-medienkompetenz',
    nivel: 'B2',
    titulo: 'Deepfakes – Wenn man den eigenen Augen nicht mehr trauen kann',
    descripcion: 'Ein Text über die wachsende Bedrohung durch KI-generierte Fälschungen und die Notwendigkeit von Medienkompetenz.',
    texto: `Künstliche Intelligenz macht es heute möglich, täuschend echte Videos zu erstellen, in denen Personen Dinge sagen oder tun, die nie stattgefunden haben. Diese sogenannten Deepfakes werden mithilfe komplexer Algorithmen erzeugt, wobei das Gesicht einer Person digital auf den Körper einer anderen übertragen wird. Was vor wenigen Jahren noch aufwendige Spezialkenntnisse erforderte, kann inzwischen mit frei verfügbarer Software erledigt werden.

Besonders besorgniserregend ist, dass Deepfakes zunehmend für Desinformationskampagnen und Betrug eingesetzt werden. So wurden bereits gefälschte Videos von Politikern verbreitet, die diesen Aussagen in den Mund legten, die sie nie getätigt hatten. Würde diese Technologie unkontrolliert weiterentwickelt, könnte das Vertrauen in audiovisuelle Medien insgesamt erschüttert werden, da Bild- und Tonaufnahmen nicht länger als verlässliche Beweise gelten würden.

Experten fordern deshalb, dass Medienkompetenz bereits in der Schule stärker gefördert wird, damit Jugendliche lernen, Inhalte kritisch zu hinterfragen. Zudem wird an technischen Lösungen gearbeitet, mit denen Deepfakes automatisch erkannt werden sollen. Ob diese Werkzeuge jedoch mit der rasanten Entwicklung der Fälschungstechnologie Schritt halten können, bleibt fraglich. Klar ist jedoch, dass ein rein technischer Ansatz allein nicht ausreichen wird, wenn nicht gleichzeitig ein gesellschaftliches Bewusstsein für dieses Problem geschaffen wird.`,
    preguntas: [
      { enunciado: 'Für die Erstellung von Deepfakes ist heute immer noch hochspezialisiertes Fachwissen nötig.', respuesta: false },
      { enunciado: 'Deepfakes wurden bereits genutzt, um Politikern falsche Aussagen zuzuschreiben.', respuesta: true },
      { enunciado: 'Der Text sieht keine Gefahr für das Vertrauen in audiovisuelle Medien.', respuesta: false },
      { enunciado: 'Experten fordern mehr Medienkompetenz bereits in der Schule.', respuesta: true },
      { enunciado: 'Laut dem Text reicht eine rein technische Lösung allein vollkommen aus.', respuesta: false },
    ],
  },
  {
    slug: 'mietpreisbremse-wohnungsnot',
    nivel: 'B2',
    titulo: 'Mietpreisbremse – Ein wirksames Mittel gegen die Wohnungsnot?',
    descripcion: 'Der Text beleuchtet, ob die staatliche Regulierung von Mietpreisen tatsächlich zur Entspannung des Wohnungsmarkts beiträgt.',
    texto: `In vielen deutschen Großstädten sind die Mieten in den letzten Jahren drastisch gestiegen, sodass für viele Menschen bezahlbarer Wohnraum kaum noch zu finden ist. Als Reaktion darauf wurde die sogenannte Mietpreisbremse eingeführt, die verhindern soll, dass Neuvermietungen die ortsübliche Vergleichsmiete um mehr als zehn Prozent überschreiten. Ziel dieser Maßnahme ist es, den Anstieg der Mieten zu bremsen und einkommensschwächere Haushalte zu schützen.

Kritiker bezweifeln jedoch, dass die Mietpreisbremse ihr Ziel tatsächlich erreicht. Sie argumentieren, dass Vermieter aufgrund der Regulierung seltener bereit seien, in die Sanierung ihrer Immobilien zu investieren, da sich höhere Modernisierungskosten nicht mehr über die Miete refinanzieren ließen. Zudem würden viele Vermieter Schlupflöcher nutzen, indem Wohnungen möbliert oder als Zweitwohnsitz vermietet werden, wodurch die gesetzliche Obergrenze umgangen wird.

Befürworter halten dem entgegen, dass ohne die Mietpreisbremse die Situation für Mieter noch dramatischer wäre. Studien zeigten zwar, dass der Mietanstieg in regulierten Gebieten leicht gebremst werde, das grundlegende Problem – ein zu geringes Angebot an Wohnraum – werde dadurch aber nicht gelöst. Wäre der Wohnungsbau in den vergangenen Jahrzehnten stärker gefördert worden, hätte sich die aktuelle Wohnungsnot vermutlich gar nicht erst in diesem Ausmaß entwickelt. Die Mietpreisbremse allein kann daher bestenfalls als Symptombekämpfung betrachtet werden.`,
    preguntas: [
      { enunciado: 'Die Mietpreisbremse erlaubt es, die ortsübliche Vergleichsmiete beliebig zu überschreiten.', respuesta: false },
      { enunciado: 'Kritiker befürchten, dass Vermieter weniger in Sanierungen investieren.', respuesta: true },
      { enunciado: 'Laut dem Text nutzen manche Vermieter Schlupflöcher, um die Regelung zu umgehen.', respuesta: true },
      { enunciado: 'Studien zeigen, dass die Mietpreisbremse das Wohnraumangebot deutlich erhöht hat.', respuesta: false },
      { enunciado: 'Der Text bezeichnet die Mietpreisbremse als vollständige Lösung des Wohnungsproblems.', respuesta: false },
    ],
  },
  {
    slug: 'ganztagsschulen-chancengleichheit',
    nivel: 'B2',
    titulo: 'Ganztagsschulen – Mehr Chancengleichheit oder Stress für Kinder?',
    descripcion: 'Eine Auseinandersetzung mit den Vor- und Nachteilen des Ausbaus von Ganztagsschulen in Deutschland.',
    texto: `Der Ausbau von Ganztagsschulen wird in Deutschland seit Jahren kontrovers diskutiert. Befürworter argumentieren, dass verlängerte Schulzeiten dazu beitragen könnten, Bildungsungerechtigkeiten abzubauen, da Kinder aus bildungsfernen Familien in der Schule zusätzliche Förderung erhalten würden, die ihnen zu Hause oft fehlt. Zudem erleichtere das Ganztagsangebot berufstätigen Eltern die Vereinbarkeit von Familie und Beruf erheblich.

Kritiker hingegen warnen davor, dass viele Kinder durch einen längeren Schultag überfordert würden. Nachdem sie bereits sechs oder sieben Stunden konzentriert gearbeitet hätten, bliebe kaum noch Zeit für Hobbys, Sport oder freies Spielen, was für die kindliche Entwicklung ebenso wichtig sei wie schulisches Lernen. Manche Experten fordern deshalb, dass Ganztagsschulen nicht einfach die Unterrichtszeit verlängern, sondern durch sinnvolle Freizeitangebote ergänzt werden sollten.

Ein weiteres Problem stellt der Personalmangel dar: Ohne ausreichend qualifiziertes Personal könnten viele Schulen die notwendige Betreuungsqualität gar nicht gewährleisten. Würde der Ausbau überstürzt vorangetrieben, ohne gleichzeitig in Lehrkräfte und Räumlichkeiten zu investieren, bestünde die Gefahr, dass die Qualität der Betreuung leidet und das eigentliche Ziel – mehr Chancengleichheit – verfehlt wird. Die Debatte zeigt, dass eine rein quantitative Ausweitung der Betreuungszeit allein keine Garantie für bessere Bildungschancen ist.`,
    preguntas: [
      { enunciado: 'Befürworter sehen in Ganztagsschulen eine Möglichkeit, Bildungsungerechtigkeit zu verringern.', respuesta: true },
      { enunciado: 'Kritiker befürchten, dass Kinder durch längere Schultage zu wenig Zeit für Freizeit haben.', respuesta: true },
      { enunciado: 'Laut dem Text gibt es keinen Mangel an qualifiziertem Personal an Ganztagsschulen.', respuesta: false },
      { enunciado: 'Der Text behauptet, dass mehr Betreuungszeit automatisch zu besseren Bildungschancen führt.', respuesta: false },
      { enunciado: 'Manche Experten fordern zusätzliche sinnvolle Freizeitangebote an Ganztagsschulen.', respuesta: true },
    ],
  },
  {
    slug: 'im-buecherladen',
    nivel: 'A1',
    titulo: 'Im Buchladen',
    descripcion: 'Lena kauft ein Geschenk für ihren Bruder Paul.',
    texto: `Lena geht heute in den Buchladen. Der Buchladen ist in der Stadtmitte. Lena sucht ein Geschenk für ihren Bruder Paul. Paul mag Abenteuergeschichten. Im Laden gibt es viele Bücher. Die Bücher stehen in bunten Regalen. Lena schaut lange und findet ein Buch über Piraten. Das Buch kostet zwölf Euro. Lena bezahlt an der Kasse. Die Verkäuferin lächelt und packt das Buch schön ein.

Danach geht Lena noch in ein Café neben dem Buchladen. Sie trinkt einen Kakao und isst ein Stück Kuchen. Draußen scheint die Sonne. Lena ist glücklich. Sie freut sich schon auf den Geburtstag von Paul. Am Abend zeigt sie das Buch ihrer Mutter. Die Mutter findet das Geschenk sehr schön.`,
    preguntas: [
      { enunciado: 'Lena kauft ein Geschenk für ihre Schwester.', respuesta: false },
      { enunciado: 'Der Buchladen ist in der Stadtmitte.', respuesta: true },
      { enunciado: 'Paul mag Abenteuergeschichten.', respuesta: true },
      { enunciado: 'Das Buch kostet zwölf Euro.', respuesta: true },
      { enunciado: 'Lena trinkt Kaffee im Café.', respuesta: false },
    ],
  },
  {
    slug: 'die-strassenbahnfahrt',
    nivel: 'A1',
    titulo: 'Die Straßenbahnfahrt',
    descripcion: 'Tom fährt zum ersten Mal allein mit der Straßenbahn.',
    texto: `Tom ist neun Jahre alt. Heute fährt er zum ersten Mal allein mit der Straßenbahn. Die Straßenbahn hält direkt vor seinem Haus. Tom hat eine Fahrkarte in der Tasche. Er steigt ein und setzt sich ans Fenster. Die Straßenbahn ist nicht sehr voll. Tom zählt die Haltestellen. Er muss an der vierten Haltestelle aussteigen.

Die Fahrt dauert zehn Minuten. Tom schaut aus dem Fenster und sieht Geschäfte, Autos und Menschen. An der vierten Haltestelle steigt er aus. Seine Oma wartet schon auf ihn. Sie umarmt Tom und lobt ihn. Tom ist stolz. Er erzählt seiner Oma alles über die Fahrt. Danach gehen sie zusammen nach Hause und essen Kuchen.`,
    preguntas: [
      { enunciado: 'Tom ist neun Jahre alt.', respuesta: true },
      { enunciado: 'Tom fährt mit dem Bus.', respuesta: false },
      { enunciado: 'Die Fahrt dauert zehn Minuten.', respuesta: true },
      { enunciado: 'Tom muss an der zweiten Haltestelle aussteigen.', respuesta: false },
      { enunciado: 'Toms Oma wartet an der Haltestelle.', respuesta: true },
    ],
  },
  {
    slug: 'mein-lieblingstier',
    nivel: 'A1',
    titulo: 'Mein Lieblingstier',
    descripcion: 'Mia erzählt von ihrem Lieblingstier, dem Delfin.',
    texto: `Mia liebt Tiere. Ihr Lieblingstier ist der Delfin. Delfine leben im Meer. Sie sind sehr klug und schnell. Mia sieht oft Videos von Delfinen im Internet. Delfine springen gern aus dem Wasser. Sie leben in Gruppen und spielen zusammen.

Im Sommer besucht Mia mit ihrer Familie ein Delfinarium. Sie sieht dort echte Delfine. Die Delfine schwimmen elegant durch das Wasser. Mia klatscht und lacht. Nach der Show darf sie einen Delfin sogar streicheln. Das ist der schönste Moment für Mia. Sie möchte später vielleicht mit Delfinen arbeiten.`,
    preguntas: [
      { enunciado: 'Mias Lieblingstier ist der Delfin.', respuesta: true },
      { enunciado: 'Delfine leben im Wald.', respuesta: false },
      { enunciado: 'Mia besucht im Sommer ein Delfinarium.', respuesta: true },
      { enunciado: 'Mia darf einen Delfin streicheln.', respuesta: true },
      { enunciado: 'Mia mag keine Tiere.', respuesta: false },
    ],
  },
  {
    slug: 'der-verlorene-regenschirm',
    nivel: 'A2',
    titulo: 'Der verlorene Regenschirm',
    descripcion: 'Jana verliert ihren Regenschirm bei einem Ausflug in den Bergen.',
    texto: `Am Samstag ist Jana mit ihren Freunden in die Berge gefahren. Das Wetter war am Morgen schön, aber am Nachmittag hat es plötzlich angefangen zu regnen. Jana hat schnell ihren Regenschirm aus dem Rucksack geholt. Sie und ihre Freunde haben sich unter einem Baum untergestellt, weil der Regen sehr stark war. Nach einer halben Stunde hat der Regen aufgehört, und die Gruppe ist weitergewandert.

Als sie am Abend zu Hause ankam, hat Jana bemerkt, dass ihr Regenschirm fehlte. Sie hatte ihn wahrscheinlich unter dem Baum vergessen. Jana war traurig, weil der Regenschirm ein Geschenk von ihrer Großmutter war. Am nächsten Tag ist sie mit dem Auto zurück zu dem Wanderweg gefahren. Zum Glück hat sie den Regenschirm noch dort gefunden, genau unter dem Baum. Sie hat sich sehr gefreut und den Regenschirm nie wieder vergessen.`,
    preguntas: [
      { enunciado: 'Jana ist am Samstag in die Berge gefahren.', respuesta: true },
      { enunciado: 'Am Nachmittag hat es zu regnen angefangen.', respuesta: true },
      { enunciado: 'Jana hat ihren Regenschirm zu Hause vergessen.', respuesta: false },
      { enunciado: 'Der Regenschirm war ein Geschenk von ihrem Vater.', respuesta: false },
      { enunciado: 'Jana hat den Regenschirm am nächsten Tag wiedergefunden.', respuesta: true },
    ],
  },
  {
    slug: 'ein-ausflug-mit-dem-fahrrad',
    nivel: 'A2',
    titulo: 'Ein Ausflug mit dem Fahrrad',
    descripcion: 'Paul und seine Schwester machen eine Fahrradtour zu einem See.',
    texto: `Am letzten Sonntag haben Paul und seine Schwester Emma eine Fahrradtour gemacht. Sie sind früh am Morgen losgefahren, weil sie einen See besuchen wollten, der zwanzig Kilometer entfernt lag. Der Weg führte durch einen Wald und über mehrere kleine Brücken. Paul hatte Wasser und Brote eingepackt, damit sie unterwegs eine Pause machen konnten.

Nach zwei Stunden sind sie endlich am See angekommen. Das Wasser war klar und ruhig, und viele Vögel saßen am Ufer. Emma wollte schwimmen, obwohl das Wasser noch etwas kalt war. Paul hat lieber am Ufer gesessen und ein Buch gelesen. Am Nachmittag sind beide müde, aber zufrieden nach Hause gefahren. Sie haben sich vorgenommen, den Ausflug im nächsten Monat zu wiederholen.`,
    preguntas: [
      { enunciado: 'Paul und Emma sind mit dem Auto gefahren.', respuesta: false },
      { enunciado: 'Der See lag zwanzig Kilometer entfernt.', respuesta: true },
      { enunciado: 'Emma ist im See geschwommen.', respuesta: true },
      { enunciado: 'Paul ist auch geschwommen.', respuesta: false },
      { enunciado: 'Sie wollen den Ausflug nie wieder machen.', respuesta: false },
    ],
  },
  {
    slug: 'das-picknick-im-regen',
    nivel: 'A2',
    titulo: 'Das Picknick im Regen',
    descripcion: 'Eine Familie plant ein Picknick, aber das Wetter macht ihnen einen Strich durch die Rechnung.',
    texto: `Die Familie Meier hatte für Sonntag ein Picknick im Park geplant. Sie haben Sandwiches, Kuchen und Getränke vorbereitet, weil alle sich auf einen schönen Tag gefreut haben. Als sie im Park ankamen, war der Himmel noch blau. Doch nach einer Stunde haben dunkle Wolken den Himmel bedeckt, und es hat angefangen zu regnen.

Die Familie ist schnell unter ein großes Zelt in der Nähe geflüchtet, das für ein Straßenfest aufgebaut war. Dort haben sie ihr Picknick einfach fortgesetzt. Die Kinder fanden das lustig, weil der Regen laut auf das Zeltdach getrommelt hat. Nach dem Essen hat der Regen aufgehört, und die Sonne kam wieder heraus. Die Familie ist noch eine Stunde im Park spazieren gegangen, bevor sie nach Hause gefahren sind.`,
    preguntas: [
      { enunciado: 'Die Familie Meier hat das Picknick am Samstag geplant.', respuesta: false },
      { enunciado: 'Es hat angefangen zu regnen, nachdem sie im Park ankamen.', respuesta: true },
      { enunciado: 'Die Familie ist sofort nach Hause gefahren, als es zu regnen begann.', respuesta: false },
      { enunciado: 'Die Kinder fanden den Regen lustig.', respuesta: true },
      { enunciado: 'Nach dem Essen kam die Sonne wieder heraus.', respuesta: true },
    ],
  },
  {
    slug: 'der-jazzabend-in-der-altstadt',
    nivel: 'B1',
    titulo: 'Der Jazzabend in der Altstadt',
    descripcion: 'Ein spontaner Konzertbesuch verändert Sophies Meinung über Jazzmusik.',
    texto: `Sophie hatte nie viel für Jazzmusik übrig, obwohl ihr bester Freund Ben seit Jahren begeisterter Jazzfan war. Als Ben sie zu einem Jazzabend in der Altstadt einlud, sagte sie trotzdem zu, weil sie ihm einen Gefallen tun wollte. Der Abend fand in einem kleinen Club statt, der früher eine alte Lagerhalle gewesen war. Die Atmosphäre war gemütlich, mit gedämpftem Licht und runden Holztischen.

Nachdem das erste Stück begonnen hatte, änderte sich Sophies Meinung schnell. Die Musiker spielten mit so viel Energie und Improvisation, dass sie den Rhythmus förmlich spüren konnte. Besonders der Saxofonist beeindruckte sie mit seinem virtuosen Spiel. Obwohl sie die Melodien nicht kannte, fand sie sich bald mitwippend im Takt der Musik.

Am Ende des Abends fragte Ben, ob ihr der Abend gefallen habe. Sophie lachte und meinte, sie werde bestimmt wiederkommen. Seitdem besucht sie regelmäßig Jazzkonzerte in der Stadt und hat sogar begonnen, selbst Klavier zu spielen, um die Musik besser zu verstehen.`,
    preguntas: [
      { enunciado: 'Sophie war schon immer eine große Jazzfan.', respuesta: false },
      { enunciado: 'Ben lud Sophie zu einem Konzert in der Altstadt ein.', respuesta: true },
      { enunciado: 'Der Club war früher eine Lagerhalle.', respuesta: true },
      { enunciado: 'Sophie fand den Abend langweilig.', respuesta: false },
      { enunciado: 'Nach dem Konzert begann Sophie, Klavier zu spielen.', respuesta: true },
    ],
  },
  {
    slug: 'die-projektwoche-in-der-schule',
    nivel: 'B1',
    titulo: 'Die Projektwoche in der Schule',
    descripcion: 'Eine Schulklasse plant und gestaltet eine ungewöhnliche Projektwoche zum Thema Nachhaltigkeit.',
    texto: `An der Gesamtschule in Münster fand in diesem Jahr zum ersten Mal eine Projektwoche zum Thema Nachhaltigkeit statt. Die Schüler der neunten Klasse durften sich eigene Projekte ausdenken, nachdem die Lehrer ihnen einige Beispiele vorgestellt hatten. Manche Gruppen bauten ein kleines Hochbeet im Schulgarten, andere organisierten eine Kleidertauschbörse.

Obwohl einige Schüler zu Beginn skeptisch waren, entwickelten sich die meisten Projekte im Laufe der Woche zu echten Erfolgsgeschichten. Eine Gruppe reparierte alte Fahrräder, die sonst weggeworfen worden wären, und stellte sie später für bedürftige Familien zur Verfügung. Trotzdem gab es auch Herausforderungen: Das Wetter machte den Gartengruppen an manchen Tagen zu schaffen, und Material musste oft improvisiert werden.

Am letzten Tag präsentierten alle Gruppen ihre Ergebnisse vor der gesamten Schule. Die Fahrradgruppe erhielt besonders viel Applaus, weil sie zwölf Fahrräder repariert hatte. Die Schulleitung entschied daraufhin, die Projektwoche im nächsten Jahr zu wiederholen und noch mehr Klassen einzubeziehen.`,
    preguntas: [
      { enunciado: 'Die Projektwoche fand an einer Schule in Münster statt.', respuesta: true },
      { enunciado: 'Alle Schüler mussten dasselbe Projekt machen.', respuesta: false },
      { enunciado: 'Die Fahrradgruppe hat zwölf Fahrräder repariert.', respuesta: true },
      { enunciado: 'Es gab während der Projektwoche keine Herausforderungen.', respuesta: false },
      { enunciado: 'Die Schulleitung möchte die Projektwoche nicht wiederholen.', respuesta: false },
    ],
  },
  {
    slug: 'kuenstliche-intelligenz-im-bewerbungsprozess',
    nivel: 'B2',
    titulo: 'Künstliche Intelligenz im Bewerbungsprozess',
    descripcion: 'Ein Blick auf Chancen und Risiken, wenn Algorithmen über Bewerbungen entscheiden.',
    texto: `Immer mehr Unternehmen setzen bei der Personalauswahl auf künstliche Intelligenz. Bewerbungsunterlagen werden mittlerweile in vielen Branchen automatisch analysiert, bevor ein Mensch sie überhaupt zu Gesicht bekommt. Algorithmen sollen dabei helfen, geeignete Kandidaten schneller zu identifizieren und die Personalabteilungen von zeitaufwendiger Vorauswahl zu entlasten. Befürworter argumentieren, dass solche Systeme objektiver seien als menschliche Entscheidungen, da sie frei von persönlichen Vorurteilen agierten.

Kritiker hingegen weisen darauf hin, dass die Algorithmen selbst auf Daten trainiert werden, die historische Ungleichheiten widerspiegeln können. Wäre ein System beispielsweise mit Daten aus einer Branche trainiert worden, in der bisher überwiegend Männer eingestellt wurden, könnte es unbewusst weibliche Bewerberinnen benachteiligen. Studien haben gezeigt, dass solche Verzerrungen in der Praxis tatsächlich auftreten können, auch wenn die Entwickler dies nicht beabsichtigt hatten.

Ein weiteres Problem besteht in der mangelnden Transparenz vieler Systeme. Bewerber erfahren häufig nicht, warum sie aussortiert wurden, weil die Entscheidungsprozesse der Algorithmen selbst für Fachleute schwer nachvollziehbar sind. Datenschützer fordern deshalb, dass Unternehmen verpflichtet werden sollten, ihre Auswahlkriterien offenzulegen. Nur so könne sichergestellt werden, dass Bewerber fair behandelt werden und im Falle einer Diskriminierung rechtlich dagegen vorgehen können.

Trotz dieser Bedenken dürfte der Einsatz von KI im Bewerbungsprozess in den kommenden Jahren eher zunehmen als abnehmen, da die Zahl der Bewerbungen in vielen Berufsfeldern stetig steigt. Experten empfehlen daher, dass Algorithmen stets von menschlichen Entscheidungen begleitet werden sollten, damit fragwürdige automatisierte Urteile korrigiert werden können, bevor sie zu einer echten Benachteiligung führen.`,
    preguntas: [
      { enunciado: 'Laut dem Text setzen immer mehr Unternehmen KI bei der Personalauswahl ein.', respuesta: true },
      { enunciado: 'Befürworter meinen, dass KI-Systeme objektiver als Menschen seien.', respuesta: true },
      { enunciado: 'Studien zeigen, dass Algorithmen niemals Vorurteile aus Trainingsdaten übernehmen.', respuesta: false },
      { enunciado: 'Laut dem Text erfahren Bewerber immer genau, warum sie abgelehnt wurden.', respuesta: false },
      { enunciado: 'Experten empfehlen, dass menschliche Entscheidungen die Algorithmen begleiten sollten.', respuesta: true },
    ],
  },
  {
    slug: 'share-economy-und-nachhaltiger-konsum',
    nivel: 'B2',
    titulo: 'Share Economy und nachhaltiger Konsum',
    descripcion: 'Warum das Teilen von Gütern als Lösung für Ressourcenknappheit diskutiert wird.',
    texto: `Ob Carsharing, Werkzeugverleih oder Kleidertauschbörsen: Die sogenannte Share Economy hat sich in den letzten Jahren in vielen deutschen Städten fest etabliert. Die Grundidee ist einfach: Statt Produkte zu besitzen, die nur selten genutzt werden, sollen sie von mehreren Menschen gemeinsam verwendet werden. Befürworter dieses Modells sehen darin einen wichtigen Beitrag zu einem nachhaltigeren Konsumverhalten, da weniger Ressourcen verbraucht und weniger Güter produziert werden müssten.

Tatsächlich zeigen Untersuchungen, dass ein einzelnes Auto im Carsharing im Durchschnitt bis zu acht private Fahrzeuge ersetzen kann. Wäre dieses Modell flächendeckend umgesetzt, könnte dies den Flächenbedarf für Parkplätze in Innenstädten erheblich reduzieren. Auch beim Werkzeugverleih argumentieren Experten, dass ein Bohrer, der nur wenige Male im Jahr benutzt wird, sinnvoller geteilt als von jedem Haushalt einzeln gekauft werden sollte.

Dennoch wird die Share Economy nicht nur positiv bewertet. Kritiker bemängeln, dass viele kommerzielle Plattformen weniger von Nachhaltigkeit als von Profit getrieben seien. Zudem könne der zusätzliche Verkehr, der durch Lieferdienste und Fahrten zu Abholstationen entsteht, die ökologischen Vorteile teilweise wieder zunichtemachen. Manche Soziologen weisen zudem darauf hin, dass echtes Teilen ein gewisses Vertrauen zwischen Menschen voraussetze, das in anonymen App-basierten Systemen oft fehle.

Ob die Share Economy tatsächlich zu einem nachhaltigeren Lebensstil führt, hängt letztlich stark davon ab, wie die einzelnen Angebote gestaltet und genutzt werden. Klar ist jedoch, dass sie das Potenzial hätte, unser Verständnis von Besitz grundlegend zu verändern, sofern ökologische Ziele stärker in den Vordergrund gerückt würden.`,
    preguntas: [
      { enunciado: 'Laut dem Text kann ein Carsharing-Auto im Durchschnitt bis zu acht private Autos ersetzen.', respuesta: true },
      { enunciado: 'Alle Experten sind sich einig, dass die Share Economy ausschließlich positive Effekte hat.', respuesta: false },
      { enunciado: 'Kritiker bemängeln, dass manche Plattformen eher profitorientiert als nachhaltig seien.', respuesta: true },
      { enunciado: 'Laut dem Text führt Lieferverkehr niemals zu zusätzlichen ökologischen Nachteilen.', respuesta: false },
      { enunciado: 'Der Text stellt fest, dass echtes Teilen Vertrauen zwischen Menschen voraussetzt.', respuesta: true },
    ],
  },
  {
    slug: 'landwirtschaft-und-wasserknappheit',
    nivel: 'B2',
    titulo: 'Landwirtschaft und Wasserknappheit',
    descripcion: 'Wie sich Landwirte in Deutschland auf zunehmende Trockenheit einstellen müssen.',
    texto: `Die vergangenen trockenen Sommer haben deutlich gemacht, dass Wasserknappheit längst nicht mehr nur ein Problem südlicher Länder ist. Auch in Deutschland klagen immer mehr Landwirte über sinkende Grundwasserspiegel und ausbleibende Niederschläge, besonders in den östlichen Bundesländern. Ernteausfälle, die früher die Ausnahme waren, häufen sich inzwischen von Jahr zu Jahr, was viele Betriebe finanziell stark belastet.

Um auf diese Entwicklung zu reagieren, setzen manche Landwirte auf sogenannte Präzisionsbewässerung, bei der Sensoren im Boden genau messen, wie viel Wasser eine Pflanze tatsächlich benötigt. Auf diese Weise könne der Wasserverbrauch erheblich gesenkt werden, ohne dass die Erträge darunter leiden müssten. Andere Betriebe wechseln zu trockenresistenteren Getreidesorten, die zwar geringere Erträge liefern, dafür aber auch in besonders trockenen Jahren zuverlässiger wachsen.

Umweltverbände fordern zudem, dass die Landwirtschaftspolitik stärker auf den Wasserschutz ausgerichtet werden sollte. Subventionen, die bislang vor allem den Anbau wasserintensiver Kulturen wie Mais begünstigten, müssten überdacht werden, damit sich nachhaltigere Anbaumethoden langfristig auch wirtschaftlich lohnten. Gleichzeitig warnen Agrarökonomen davor, die Landwirte allein für die Folgen des Klimawandels verantwortlich zu machen, da diese oft nur begrenzte finanzielle Spielräume für teure Investitionen hätten.

Letztlich zeigt die Debatte, dass eine nachhaltige Wasserpolitik nur gelingen kann, wenn Landwirtschaft, Politik und Gesellschaft gemeinsam an Lösungen arbeiten. Ohne gezielte Förderprogramme und eine langfristige Strategie dürfte es vielen kleineren Betrieben schwerfallen, sich an die veränderten klimatischen Bedingungen anzupassen.`,
    preguntas: [
      { enunciado: 'Wasserknappheit betrifft laut dem Text ausschließlich südliche Länder.', respuesta: false },
      { enunciado: 'Präzisionsbewässerung nutzt Sensoren, um den Wasserbedarf von Pflanzen zu messen.', respuesta: true },
      { enunciado: 'Trockenresistente Getreidesorten liefern laut dem Text stets höhere Erträge als herkömmliche Sorten.', respuesta: false },
      { enunciado: 'Umweltverbände fordern eine Überprüfung von Subventionen für wasserintensive Kulturen.', respuesta: true },
      { enunciado: 'Agrarökonomen warnen davor, die gesamte Verantwortung allein den Landwirten zuzuschreiben.', respuesta: true },
    ],
  },
  {
    slug: 'elterngeld-und-gleichberechtigung',
    nivel: 'B2',
    titulo: 'Elterngeld und Gleichberechtigung',
    descripcion: 'Inwiefern das deutsche Elterngeld die Aufteilung von Familien- und Erwerbsarbeit beeinflusst.',
    texto: `Seit seiner Einführung im Jahr 2007 gilt das Elterngeld in Deutschland als ein zentrales familienpolitisches Instrument. Es sollte nicht nur die finanzielle Belastung junger Familien abfedern, sondern auch dazu beitragen, dass sich Väter stärker an der Kindererziehung beteiligen. Durch die sogenannten Partnermonate, die nur ausgezahlt werden, wenn auch der zweite Elternteil einen Teil der Elternzeit übernimmt, sollte ein Anreiz geschaffen werden, familiäre Aufgaben gleichmäßiger zu verteilen.

Statistiken zeigen, dass sich der Anteil der Väter, die Elterngeld beziehen, seit der Reform deutlich erhöht hat. Dennoch bleibt die Dauer der Elternzeit zwischen den Geschlechtern höchst ungleich verteilt: Während Mütter im Durchschnitt mehrere Monate zu Hause bleiben, beschränken sich viele Väter auf die minimale Anzahl der Partnermonate. Kritiker bemängeln, dass dadurch die traditionelle Rollenverteilung letztlich kaum verändert werde, selbst wenn formal beide Elternteile Elterngeld in Anspruch nähmen.

Befürworter einer Reform schlagen vor, dass die Partnermonate deutlich ausgeweitet werden sollten, damit eine wirklich gleichberechtigte Aufteilung der Elternzeit gefördert würde. Skandinavische Länder, in denen Väter oft verpflichtende Elternzeitanteile übernehmen müssen, würden in diesem Zusammenhang häufig als Vorbild genannt. Gegner einer solchen Reform argumentieren hingegen, dass staatliche Vorgaben die individuelle Entscheidungsfreiheit von Familien zu stark einschränken würden.

Ob eine Reform des Elterngeldes tatsächlich zu mehr Gleichberechtigung führen würde, lässt sich schwer vorhersagen. Klar scheint jedoch, dass finanzielle Anreize allein nicht ausreichen, um tief verwurzelte gesellschaftliche Rollenbilder zu verändern, solange sich auch am Arbeitsmarkt und in den Unternehmenskulturen nichts Grundlegendes ändert.`,
    preguntas: [
      { enunciado: 'Das Elterngeld wurde im Jahr 2007 in Deutschland eingeführt.', respuesta: true },
      { enunciado: 'Väter nehmen laut dem Text im Durchschnitt genauso lange Elternzeit wie Mütter.', respuesta: false },
      { enunciado: 'Die Partnermonate sollen einen Anreiz schaffen, dass sich beide Elternteile an der Kindererziehung beteiligen.', respuesta: true },
      { enunciado: 'Alle Kritiker fordern eine Abschaffung des Elterngeldes.', respuesta: false },
      { enunciado: 'Skandinavische Länder werden im Text als mögliches Vorbild genannt.', respuesta: true },
    ],
  },
  {
    slug: 'meine-mittagspause',
    nivel: 'A1',
    titulo: 'Meine Mittagspause',
    descripcion: 'Lena erzählt, was sie jeden Tag in der Mittagspause macht.',
    texto: `Lena arbeitet in einem Büro in München. Um 12 Uhr hat sie Mittagspause. Sie isst nicht am Schreibtisch. Sie geht immer nach draußen. In der Nähe gibt es einen kleinen Park mit Bäumen und Bänken.

Lena bringt oft ihr eigenes Essen mit. Sie mag Salat mit Käse und Brot. Manchmal kauft sie auch eine Suppe im Café um die Ecke. Nach dem Essen trinkt sie einen Kaffee. Ihre Kollegin Petra isst meistens mit ihr zusammen. Sie sprechen über die Arbeit und über ihre Familien.

Nach der Pause geht Lena wieder ins Büro zurück. Die Pause ist kurz, aber wichtig für sie. Sie sagt: „Die Mittagspause ist meine Lieblingszeit am Tag."`,
    preguntas: [
      { enunciado: 'Lena isst immer am Schreibtisch.', respuesta: false },
      { enunciado: 'In der Nähe von Lenas Büro gibt es einen Park.', respuesta: true },
      { enunciado: 'Lena trinkt nach dem Essen einen Kaffee.', respuesta: true },
      { enunciado: 'Petra isst nie mit Lena zusammen.', respuesta: false },
      { enunciado: 'Die Mittagspause ist Lenas Lieblingszeit.', respuesta: true },
    ],
  },
  {
    slug: 'im-spielzeugladen',
    nivel: 'A1',
    titulo: 'Im Spielzeugladen',
    descripcion: 'Tom geht mit seinem Vater in einen Spielzeugladen und sucht ein Geschenk.',
    texto: `Tom ist sechs Jahre alt. Heute geht er mit seinem Vater in einen Spielzeugladen. Sein Freund Paul hat bald Geburtstag, und Tom möchte ein Geschenk kaufen. Der Laden ist groß und bunt. Es gibt viele Regale mit Autos, Bällen und Puzzles.

Tom sieht einen roten Ball und ein blaues Auto. Er kann sich nicht entscheiden. Sein Vater fragt: „Was mag Paul mehr, Autos oder Bälle?" Tom denkt kurz nach und sagt: „Paul spielt gern Fußball. Der Ball ist besser." Sie gehen zur Kasse und bezahlen den Ball.

Vor dem Laden gibt es auch ein Eis. Tom bekommt ein kleines Eis mit Schokolade. Er freut sich sehr auf die Geburtstagsparty von Paul am Samstag.`,
    preguntas: [
      { enunciado: 'Tom geht allein in den Spielzeugladen.', respuesta: false },
      { enunciado: 'Paul hat bald Geburtstag.', respuesta: true },
      { enunciado: 'Tom kauft ein blaues Auto für Paul.', respuesta: false },
      { enunciado: 'Paul spielt gern Fußball.', respuesta: true },
      { enunciado: 'Tom bekommt kein Eis.', respuesta: false },
    ],
  },
  {
    slug: 'im-eiscafe',
    nivel: 'A1',
    titulo: 'Im Eiscafé',
    descripcion: 'Julia und ihre Schwester besuchen an einem heißen Tag ein Eiscafé.',
    texto: `Es ist Sommer und sehr heiß. Julia und ihre kleine Schwester Mia gehen zusammen in ein Eiscafé. Das Café ist im Zentrum der Stadt. Viele Menschen sitzen draußen und essen Eis.

Julia bestellt ein Eis mit Vanille und Erdbeere. Mia möchte Schokolade und Banane. Der Kellner bringt zwei große Becher. Das Eis ist kalt und sehr lecker. Mia lacht und sagt: „Das ist das beste Eis der Welt!"

Nach dem Eis trinken die Schwestern noch Wasser. Dann gehen sie langsam nach Hause. Der Tag ist warm, aber sehr schön.`,
    preguntas: [
      { enunciado: 'Es ist Winter.', respuesta: false },
      { enunciado: 'Julia und Mia sind Schwestern.', respuesta: true },
      { enunciado: 'Mia bestellt Vanille und Erdbeere.', respuesta: false },
      { enunciado: 'Der Kellner bringt zwei Becher Eis.', respuesta: true },
      { enunciado: 'Nach dem Eis trinken sie Kaffee.', respuesta: false },
    ],
  },
  {
    slug: 'der-verpasste-zug',
    nivel: 'A2',
    titulo: 'Der verpasste Zug',
    descripcion: 'Felix kommt zu spät zum Bahnhof und muss seine Reisepläne ändern.',
    texto: `Felix wollte am Freitag um 8 Uhr mit dem Zug nach Köln fahren. Er hat seinen Wecker gestellt, aber er hat ihn nicht gehört. Als er aufgewacht ist, war es schon 7:40 Uhr. Er ist schnell aus dem Bett gesprungen, weil er den Zug nicht verpassen wollte.

Felix ist zum Bahnhof gerannt, aber er ist trotzdem zu spät gekommen. Der Zug ist ohne ihn abgefahren. Er war sehr frustriert, weil er ein wichtiges Treffen in Köln hatte. Am Schalter hat er gefragt, wann der nächste Zug fährt. Die Frau am Schalter hat gesagt, dass es einen Zug um 9:15 Uhr gibt.

Felix hat sofort seinen Kollegen angerufen und erklärt, dass er später ankommen wird. Der Kollege war nicht böse, weil so etwas manchmal passiert. Felix hat versprochen, dass er in Zukunft zwei Wecker benutzen wird.`,
    preguntas: [
      { enunciado: 'Felix wollte um 8 Uhr nach Köln fahren.', respuesta: true },
      { enunciado: 'Felix hat seinen Wecker gehört.', respuesta: false },
      { enunciado: 'Felix hat den Zug pünktlich erreicht.', respuesta: false },
      { enunciado: 'Der nächste Zug fährt um 9:15 Uhr.', respuesta: true },
      { enunciado: 'Der Kollege war sehr böse.', respuesta: false },
    ],
  },
  {
    slug: 'die-wanderung-im-schwarzwald',
    nivel: 'A2',
    titulo: 'Die Wanderung im Schwarzwald',
    descripcion: 'Eine Gruppe von Freunden macht eine Wanderung im Schwarzwald und erlebt schlechtes Wetter.',
    texto: `Im August sind Sabine und drei Freunde in den Schwarzwald gefahren, weil sie eine lange Wanderung machen wollten. Am Morgen war das Wetter schön, und die Sonne hat geschienen. Sie sind früh losgegangen und haben viele schöne Wälder und Seen gesehen.

Am Nachmittag hat es plötzlich stark geregnet. Die Gruppe hatte keine Regenjacken dabei, weil sie den Regen nicht erwartet hatten. Sie sind schnell unter einen großen Baum gelaufen und haben dort gewartet. Nach einer halben Stunde hat der Regen aufgehört, und sie konnten weitergehen.

Am Abend sind sie müde, aber glücklich in der Hütte angekommen. Sie haben zusammen gekocht und über den Tag gesprochen. Sabine hat gesagt, dass die Wanderung trotz des Regens ein tolles Erlebnis war.`,
    preguntas: [
      { enunciado: 'Am Morgen hat es geregnet.', respuesta: false },
      { enunciado: 'Die Gruppe hatte Regenjacken dabei.', respuesta: false },
      { enunciado: 'Sie haben sich unter einem Baum vor dem Regen versteckt.', respuesta: true },
      { enunciado: 'Der Regen hat den ganzen Tag gedauert.', respuesta: false },
      { enunciado: 'Sabine fand die Wanderung trotzdem toll.', respuesta: true },
    ],
  },
  {
    slug: 'ein-wochenende-ohne-handy',
    nivel: 'A2',
    titulo: 'Ein Wochenende ohne Handy',
    descripcion: 'Nora probiert aus, wie es ist, ein Wochenende ohne ihr Smartphone zu verbringen.',
    texto: `Nora hat ihren Freunden erzählt, dass sie zu viel Zeit am Handy verbringt. Deshalb hat sie entschieden, ein ganzes Wochenende ohne Handy zu verbringen. Am Samstagmorgen hat sie das Handy in eine Schublade gelegt und den Schlüssel ihrer Mitbewohnerin gegeben.

Zuerst war es schwierig, weil Nora oft automatisch nach dem Handy gegriffen hat. Sie wusste nicht, wie spät es war, weil sie keine Uhr auf dem Handy hatte. Am Nachmittag ist sie mit ihrer Schwester spazieren gegangen und hat viel mehr mit ihr geredet als sonst. Sie hat auch ein Buch gelesen, das sie schon lange lesen wollte.

Am Sonntagabend hat Nora das Handy wieder geholt. Sie hatte viele Nachrichten, aber sie war nicht gestresst. Sie hat gemerkt, dass sie das Wochenende sehr ruhig fand. Nora hat beschlossen, dass sie das jetzt öfter machen möchte.`,
    preguntas: [
      { enunciado: 'Nora hat das Wochenende mit ihrem Handy verbracht.', respuesta: false },
      { enunciado: 'Am Anfang war es für Nora leicht, ohne Handy zu sein.', respuesta: false },
      { enunciado: 'Nora ist mit ihrer Schwester spazieren gegangen.', respuesta: true },
      { enunciado: 'Nora hat kein Buch gelesen.', respuesta: false },
      { enunciado: 'Nora möchte das Experiment öfter wiederholen.', respuesta: true },
    ],
  },
  {
    slug: 'die-abschlussfeier',
    nivel: 'B1',
    titulo: 'Die Abschlussfeier',
    descripcion: 'Nach dem Abitur feiert eine Klasse gemeinsam ihren Abschluss, obwohl nicht alles nach Plan läuft.',
    texto: `Nach zwölf Jahren Schule hatte die Klasse von Herrn Bauer endlich ihr Abitur bestanden. Die Schülerinnen und Schüler hatten monatelang eine große Abschlussfeier geplant. Sie wollten die Aula der Schule schmücken und eine Band einladen, obwohl das Budget der Klasse sehr klein war.

Am Tag der Feier gab es einige Probleme. Die Band, die sie gebucht hatten, sagte kurzfristig ab, weil ein Mitglied krank geworden war. Trotzdem ließen sich die Schüler nicht entmutigen. Sie organisierten schnell eine Playlist mit ihrer Lieblingsmusik und stellten Lautsprecher auf. Nachdem die ersten Gäste angekommen waren, merkte niemand mehr, dass ursprünglich eine echte Band spielen sollte.

Die Feier dauerte bis spät in die Nacht. Viele Eltern und Lehrer kamen vorbei, um den Schülern zu gratulieren. Am Ende des Abends waren alle sehr emotional, weil sie wussten, dass sich ihre Wege bald trennen würden. Trotz der kleinen Panne am Nachmittag war es für die meisten einer der schönsten Abende ihres Lebens.`,
    preguntas: [
      { enunciado: 'Die Klasse hat die Feier spontan ohne Planung organisiert.', respuesta: false },
      { enunciado: 'Die gebuchte Band ist kurzfristig abgesagt worden.', respuesta: true },
      { enunciado: 'Die Schüler haben deshalb die ganze Feier abgesagt.', respuesta: false },
      { enunciado: 'Nach dem Ausfall der Band spielten sie Musik von einer Playlist.', respuesta: true },
      { enunciado: 'Am Ende des Abends waren die Schüler traurig, weil niemand zur Feier kam.', respuesta: false },
    ],
  },
  {
    slug: 'der-umzug-in-die-grossstadt',
    nivel: 'B1',
    titulo: 'Der Umzug in die Großstadt',
    descripcion: 'Jonas zieht vom Dorf in eine Großstadt und muss sich an ein neues Leben gewöhnen.',
    texto: `Jonas ist in einem kleinen Dorf mit nur dreihundert Einwohnern aufgewachsen. Nach seinem Studium hat er eine Stelle in Hamburg gefunden und musste in die Großstadt ziehen, obwohl er das Leben auf dem Land immer geliebt hatte. Am Anfang war alles fremd für ihn: der Lärm, die vielen Menschen und die hohen Häuser.

Nachdem er in seine neue Wohnung eingezogen war, fühlte sich Jonas oft einsam. Er kannte niemanden in der Stadt, und seine Nachbarn grüßten ihn kaum. Trotzdem versuchte er, positiv zu bleiben, und meldete sich bei einem Fußballverein in der Nähe an. Dort lernte er schnell neue Leute kennen, die ihm halfen, sich in der Stadt zurechtzufinden.

Nach einigen Monaten hatte sich Jonas an sein neues Leben gewöhnt. Er vermisste zwar die Ruhe seines Dorfes, genoss aber auch die vielen Möglichkeiten, die eine Großstadt bietet: Kinos, Restaurants und kulturelle Veranstaltungen. Heute sagt er, dass der Umzug am Anfang schwer war, sich aber am Ende gelohnt hat.`,
    preguntas: [
      { enunciado: 'Jonas ist in einer Großstadt aufgewachsen.', respuesta: false },
      { enunciado: 'Am Anfang fühlte sich Jonas in Hamburg wohl.', respuesta: false },
      { enunciado: 'Jonas ist einem Fußballverein beigetreten.', respuesta: true },
      { enunciado: 'Durch den Verein hat Jonas neue Leute kennengelernt.', respuesta: true },
      { enunciado: 'Jonas bereut den Umzug und möchte zurück aufs Dorf.', respuesta: false },
    ],
  },
  {
    slug: 'die-wiedersehensfeier-nach-zehn-jahren',
    nivel: 'B1',
    titulo: 'Die Wiedersehensfeier nach zehn Jahren',
    descripcion: 'Ehemalige Klassenkameraden treffen sich nach zehn Jahren wieder und stellen fest, dass sich vieles verändert hat.',
    texto: `Zehn Jahre nach dem Schulabschluss organisierte Melanie ein Klassentreffen. Sie hatte lange nichts von den meisten ihrer alten Freunde gehört, obwohl sie früher jeden Tag zusammen waren. Über eine Chatgruppe lud sie alle ein, die sie noch erreichen konnte, und viele sagten sofort zu.

Als sich die Gruppe im alten Schulhof traf, erkannten sich einige zunächst kaum wieder. Manche hatten ihr Aussehen stark verändert, andere hatten sich kaum verändert. Nachdem die ersten Minuten etwas unsicher verlaufen waren, kamen die Gespräche schnell in Gang. Alle wollten wissen, was aus den anderen geworden war: wer studiert hatte, wer eine Familie gegründet hatte und wer in ein anderes Land gezogen war.

Am Ende des Abends waren sich alle einig, dass sie sich öfter treffen sollten. Melanie versprach, in Zukunft jedes Jahr ein kleines Treffen zu organisieren, damit die alte Freundschaft nicht wieder verloren geht. Trotz der vielen Jahre und der unterschiedlichen Lebenswege fühlte es sich für die meisten an, als wären sie nie getrennt gewesen.`,
    preguntas: [
      { enunciado: 'Melanie hatte in den letzten zehn Jahren regelmäßigen Kontakt zu allen Klassenkameraden.', respuesta: false },
      { enunciado: 'Das Treffen fand auf dem alten Schulhof statt.', respuesta: true },
      { enunciado: 'Alle erkannten sich sofort ohne Probleme.', respuesta: false },
      { enunciado: 'Die Gäste sprachen darüber, was aus ihrem Leben geworden ist.', respuesta: true },
      { enunciado: 'Am Ende wollte niemand ein weiteres Treffen organisieren.', respuesta: false },
    ],
  },
  {
    slug: 'der-sprachkurs-im-ausland',
    nivel: 'B1',
    titulo: 'Der Sprachkurs im Ausland',
    descripcion: 'Paula verbringt einen Monat in Spanien, um ihre Sprachkenntnisse zu verbessern, und lernt dabei mehr als nur die Sprache.',
    texto: `Paula wollte schon lange ihr Spanisch verbessern und entschied sich, einen einmonatigen Sprachkurs in Sevilla zu machen. Obwohl sie vorher nervös war, weil sie noch nie allein im Ausland gelebt hatte, freute sie sich auch sehr auf das Abenteuer.

In der Sprachschule lernte Paula Menschen aus vielen verschiedenen Ländern kennen. Nachdem der Unterricht am Vormittag beendet war, trafen sich die Kursteilnehmer oft zum Mittagessen und erkundeten gemeinsam die Stadt. Anfangs fiel es Paula schwer, auf Spanisch zu sprechen, weil sie Angst hatte, Fehler zu machen. Ihre Lehrerin ermutigte sie jedoch, einfach weiterzureden, auch wenn nicht alles perfekt war.

Am Ende des Monats konnte Paula viel besser Spanisch sprechen als vorher. Sie hatte nicht nur die Sprache gelernt, sondern auch neue Freundschaften geschlossen und viel über die spanische Kultur erfahren. Trotzdem war sie froh, wieder nach Hause zu fliegen, weil sie ihre Familie sehr vermisst hatte.`,
    preguntas: [
      { enunciado: 'Paula machte einen Sprachkurs in Barcelona.', respuesta: false },
      { enunciado: 'Paula hatte vorher schon oft allein im Ausland gelebt.', respuesta: false },
      { enunciado: 'Die Kursteilnehmer trafen sich nach dem Unterricht zum Mittagessen.', respuesta: true },
      { enunciado: 'Paula hatte am Anfang keine Angst, Fehler zu machen.', respuesta: false },
      { enunciado: 'Am Ende des Kurses konnte Paula besser Spanisch sprechen.', respuesta: true },
    ],
  },
  {
    slug: 'wohnungsnot-in-deutschen-grossstaedten',
    nivel: 'B2',
    titulo: 'Wohnungsnot in deutschen Großstädten',
    descripcion: 'Der Text beleuchtet die Ursachen und möglichen Lösungen der Wohnungsknappheit in deutschen Ballungsräumen.',
    texto: `In Großstädten wie München, Berlin und Frankfurt ist bezahlbarer Wohnraum in den letzten Jahren immer knapper geworden. Während die Mieten kontinuierlich gestiegen sind, hat sich das Angebot an neuen Wohnungen nur langsam entwickelt. Experten führen dies auf mehrere Faktoren zurück: hohe Baukosten, strenge Bauvorschriften und ein anhaltender Zuzug in die urbanen Zentren, der durch attraktive Arbeitsmärkte begünstigt wird.

Besonders betroffen von der Wohnungsnot sind Menschen mit geringem oder mittlerem Einkommen, die sich die stetig steigenden Mieten kaum noch leisten können. Wäre der soziale Wohnungsbau in den vergangenen Jahrzehnten stärker gefördert worden, hätte sich diese Entwicklung vermutlich abmildern lassen. Stattdessen wurde ein erheblicher Teil des einst öffentlichen Wohnungsbestands privatisiert, was den Druck auf dem ohnehin angespannten Markt zusätzlich verschärft hat.

Um der Krise entgegenzuwirken, werden verschiedene Maßnahmen diskutiert. Manche Politiker fordern eine strengere Mietpreisbremse, die verhindern soll, dass Mieten bei Neuvermietungen übermäßig steigen. Andere plädieren dafür, dass mehr staatlich geförderter Wohnraum geschaffen werden müsse, damit einkommensschwache Haushalte nicht aus den Städten verdrängt werden. Kritiker solcher Eingriffe argumentieren wiederum, dass zu starke Regulierungen private Investoren abschrecken und den Wohnungsbau langfristig sogar bremsen könnten.

Ob sich die Wohnungsnot in absehbarer Zeit entspannen wird, bleibt ungewiss. Klar ist jedoch, dass eine Lösung nur gelingen kann, wenn Politik, Bauwirtschaft und Kommunen gemeinsam an nachhaltigen Konzepten arbeiten, die sowohl den Bedarf an neuem Wohnraum decken als auch soziale Gerechtigkeit berücksichtigen.`,
    preguntas: [
      { enunciado: 'Die Mieten in deutschen Großstädten sind in den letzten Jahren gesunken.', respuesta: false },
      { enunciado: 'Hohe Baukosten werden als eine Ursache der Wohnungsnot genannt.', respuesta: true },
      { enunciado: 'Menschen mit geringem Einkommen sind von der Wohnungsnot besonders betroffen.', respuesta: true },
      { enunciado: 'Alle Politiker sind sich einig, dass eine strengere Mietpreisbremse die beste Lösung ist.', respuesta: false },
      { enunciado: 'Laut dem Text braucht eine Lösung die Zusammenarbeit von Politik, Bauwirtschaft und Kommunen.', respuesta: true },
    ],
  },
  {
    slug: 'bildschirmzeit-bei-kindern',
    nivel: 'B2',
    titulo: 'Bildschirmzeit bei Kindern – Fluch oder Segen?',
    descripcion: 'Der Artikel diskutiert die Auswirkungen digitaler Medien auf die kindliche Entwicklung und mögliche Lösungsansätze für Eltern.',
    texto: `Kaum ein Thema wird unter Eltern und Pädagogen so kontrovers diskutiert wie die Bildschirmzeit von Kindern. Smartphones, Tablets und Streaming-Dienste sind heute fester Bestandteil des Alltags, selbst für die Jüngsten. Während manche Eltern digitale Medien bewusst begrenzen, wachsen andere Kinder nahezu selbstverständlich mit Bildschirmen auf, ohne dass klare Regeln existieren.

Befürworter eines maßvollen Medienkonsums verweisen auf Studien, die zeigen, dass übermäßige Bildschirmzeit mit Konzentrationsproblemen, Schlafstörungen und geringerer sozialer Kompetenz in Verbindung gebracht wird. Wären Kinder stattdessen häufiger draußen aktiv oder würden sie mehr Zeit mit realen sozialen Interaktionen verbringen, so die Argumentation, könnte sich dies positiv auf ihre kognitive und emotionale Entwicklung auswirken. Andererseits betonen einige Experten, dass digitale Kompetenzen für das spätere Berufsleben zunehmend unverzichtbar würden und ein vollständiges Verbot digitaler Medien daher wenig sinnvoll sei.

Ein entscheidender Faktor scheint weniger die reine Bildschirmzeit an sich zu sein als vielmehr die Art der Nutzung. Passives Konsumieren von Videos wird von Fachleuten kritischer bewertet als interaktive Anwendungen, bei denen Kinder aktiv gestalten, programmieren oder lernen. Zudem spiele die Vorbildfunktion der Eltern eine zentrale Rolle: Kinder, deren Eltern selbst ständig auf ihr Smartphone schauen, würden dieses Verhalten häufig unbewusst übernehmen.

Letztlich scheint es keine pauschale Lösung zu geben, die für alle Familien gleichermaßen geeignet wäre. Die meisten Experten empfehlen jedoch klare, altersgerechte Regeln sowie gemeinsam mit den Kindern ausgehandelte Bildschirmzeiten, damit digitale Medien weder verteufelt noch unreflektiert genutzt werden.`,
    preguntas: [
      { enunciado: 'Alle Eltern sind sich einig, wie viel Bildschirmzeit für Kinder angemessen ist.', respuesta: false },
      { enunciado: 'Laut dem Text kann übermäßige Bildschirmzeit mit Schlafstörungen zusammenhängen.', respuesta: true },
      { enunciado: 'Alle Experten fordern ein vollständiges Verbot digitaler Medien für Kinder.', respuesta: false },
      { enunciado: 'Die Art der Mediennutzung spielt laut dem Text eine wichtigere Rolle als die reine Bildschirmzeit.', respuesta: true },
      { enunciado: 'Das Verhalten der Eltern hat laut dem Text keinen Einfluss auf die Kinder.', respuesta: false },
    ],
  },
  {
    slug: 'im-fahrradladen',
    nivel: 'A1',
    titulo: 'Im Fahrradladen',
    descripcion: 'Tim kauft mit seinem Vater ein neues Fahrrad für die Schule.',
    texto: `Tim braucht ein neues Fahrrad. Sein altes Fahrrad ist kaputt. Er geht mit seinem Vater in den Fahrradladen. Der Laden ist groß und hat viele Fahrräder. Es gibt rote, blaue und grüne Fahrräder. Tim mag die Farbe Blau.

Der Verkäufer zeigt Tim drei Fahrräder. Tim probiert jedes Fahrrad im Laden aus. Ein Fahrrad ist zu groß. Ein Fahrrad ist zu klein. Das blaue Fahrrad passt perfekt. „Das ist mein Fahrrad!“, sagt Tim froh. Der Vater bezahlt an der Kasse. Tim bekommt auch einen neuen Helm.

Am Nachmittag fährt Tim mit dem neuen Fahrrad zur Schule. Der Weg ist nicht weit. Tim ist sehr glücklich. Er fährt jetzt jeden Tag mit dem Fahrrad.`,
    preguntas: [
      { enunciado: 'Tim kauft ein neues Fahrrad.', respuesta: true },
      { enunciado: 'Tims altes Fahrrad funktioniert noch gut.', respuesta: false },
      { enunciado: 'Tim mag die Farbe Blau.', respuesta: true },
      { enunciado: 'Das erste Fahrrad passt perfekt.', respuesta: false },
      { enunciado: 'Tim bekommt keinen Helm.', respuesta: false },
    ],
  },
  {
    slug: 'im-waschsalon',
    nivel: 'A1',
    titulo: 'Im Waschsalon',
    descripcion: 'Lena wäscht am Samstag ihre Wäsche im Waschsalon.',
    texto: `Lena hat viel schmutzige Wäsche zu Hause. Ihre Waschmaschine ist kaputt. Am Samstag geht sie in den Waschsalon. Der Waschsalon ist in der Nähe von ihrer Wohnung. Dort stehen viele große Waschmaschinen.

Lena steckt ihre Kleidung in eine Maschine. Sie braucht Geld für die Maschine. Sie wirft Münzen in den Automaten. Die Maschine startet und wäscht die Wäsche. Lena wartet und liest ein Buch. Nach einer Stunde ist die Wäsche fertig und sauber.

Lena nimmt die saubere Wäsche aus der Maschine. Die Kleidung riecht frisch. Sie legt alles in eine Tasche. Zu Hause hängt sie die Wäsche zum Trocknen auf. Lena ist zufrieden mit ihrem Samstag.`,
    preguntas: [
      { enunciado: 'Lenas Waschmaschine funktioniert nicht.', respuesta: true },
      { enunciado: 'Lena geht am Sonntag in den Waschsalon.', respuesta: false },
      { enunciado: 'Lena braucht Münzen für die Maschine.', respuesta: true },
      { enunciado: 'Die Wäsche ist nach zehn Minuten fertig.', respuesta: false },
      { enunciado: 'Lena ist mit ihrem Tag zufrieden.', respuesta: true },
    ],
  },
  {
    slug: 'der-malkurs',
    nivel: 'A1',
    titulo: 'Der Malkurs',
    descripcion: 'Paul besucht jeden Mittwoch einen Malkurs im Jugendzentrum.',
    texto: `Paul malt sehr gern. Jeden Mittwoch geht er zu einem Malkurs. Der Kurs ist im Jugendzentrum. Acht Kinder sind im Kurs. Die Lehrerin heißt Frau Berger.

Heute malen die Kinder einen Wald. Paul nimmt grüne und braune Farbe. Er malt Bäume und einen kleinen Fluss. Seine Freundin Mia malt einen Vogel im Himmel. Die Kinder sprechen und lachen viel beim Malen.

Am Ende zeigt jedes Kind sein Bild. Frau Berger findet alle Bilder sehr schön. Paul hängt sein Bild in seinem Zimmer auf. Er freut sich schon auf den nächsten Mittwoch.`,
    preguntas: [
      { enunciado: 'Paul geht jeden Montag zum Malkurs.', respuesta: false },
      { enunciado: 'Der Malkurs ist im Jugendzentrum.', respuesta: true },
      { enunciado: 'Acht Kinder sind im Kurs.', respuesta: true },
      { enunciado: 'Paul malt heute ein Auto.', respuesta: false },
      { enunciado: 'Paul hängt sein Bild nicht auf.', respuesta: false },
    ],
  },
  {
    slug: 'die-fahrradreparatur',
    nivel: 'A2',
    titulo: 'Die Fahrradreparatur',
    descripcion: 'Jonas hat eine Reifenpanne und lernt bei einem Mechaniker, wie man ein Fahrrad repariert.',
    texto: `Am Dienstag ist Jonas mit dem Fahrrad zur Arbeit gefahren. Plötzlich hat er ein lautes Geräusch gehört. Der Vorderreifen war platt. Jonas ist abgestiegen und hat sich das Rad angeschaut, weil er wissen wollte, was passiert war. Er hat einen kleinen Nagel im Reifen gefunden.

Jonas hat sein Fahrrad zu einer Werkstatt geschoben, weil er selbst keine Ahnung von Reparaturen hatte. Der Mechaniker hieß Herr Klein und hat sofort mit der Arbeit begonnen. „Das ist kein großes Problem“, hat er gesagt. Er hat den alten Schlauch herausgenommen und einen neuen eingebaut. Jonas hat dabei zugeschaut und viel gelernt.

Nach zwanzig Minuten war das Fahrrad wieder fertig. Jonas hat dem Mechaniker gedankt und ihn nach dem Preis gefragt. Die Reparatur war nicht teuer. Seitdem trägt Jonas immer ein kleines Reparaturset dabei, damit er beim nächsten Mal selbst helfen kann.`,
    preguntas: [
      { enunciado: 'Jonas hatte eine Reifenpanne auf dem Weg zur Arbeit.', respuesta: true },
      { enunciado: 'Jonas hat das Fahrrad selbst repariert.', respuesta: false },
      { enunciado: 'Der Mechaniker heißt Herr Klein.', respuesta: true },
      { enunciado: 'Die Reparatur hat zwei Stunden gedauert.', respuesta: false },
      { enunciado: 'Jonas trägt jetzt immer ein Reparaturset dabei.', respuesta: true },
    ],
  },
  {
    slug: 'der-kochkurs-am-wochenende',
    nivel: 'A2',
    titulo: 'Der Kochkurs am Wochenende',
    descripcion: 'Sofia nimmt an einem italienischen Kochkurs teil und lernt, Pasta selbst zu machen.',
    texto: `Sofia hat sich schon lange für einen Kochkurs interessiert. Am Samstag hat sie endlich an einem italienischen Kochkurs teilgenommen. Der Kurs hat in einer kleinen Küche in der Innenstadt stattgefunden. Zehn Personen haben mitgemacht, weil das Thema „Pasta selbst machen“ sehr beliebt war.

Der Kochlehrer hat zuerst gezeigt, wie man den Teig macht. Sofia hat Mehl, Eier und ein bisschen Salz gemischt. Danach hat sie den Teig lange geknetet, bis er weich war. Mit einer Maschine hat sie dünne Nudeln geschnitten. Ihre Nachbarin am Tisch hat ihr geholfen, weil Sofia am Anfang etwas unsicher war.

Am Ende des Kurses haben alle zusammen gegessen. Die selbstgemachte Pasta hat besser geschmeckt, als Sofia gedacht hatte. Sie hat das Rezept mitgenommen, damit sie es zu Hause noch einmal kochen kann. Der nächste Kurs ist schon geplant.`,
    preguntas: [
      { enunciado: 'Der Kochkurs hat am Sonntag stattgefunden.', respuesta: false },
      { enunciado: 'Im Kurs hat man gelernt, Pasta selbst zu machen.', respuesta: true },
      { enunciado: 'Zehn Personen haben am Kurs teilgenommen.', respuesta: true },
      { enunciado: 'Sofia hat den Teig nicht geknetet.', respuesta: false },
      { enunciado: 'Sofia hat das Rezept mit nach Hause genommen.', respuesta: true },
    ],
  },
  {
    slug: 'die-verspaetete-post',
    nivel: 'A2',
    titulo: 'Die verspätete Post',
    descripcion: 'Marie wartet auf ein wichtiges Paket, das viel später als erwartet ankommt.',
    texto: `Marie hat vor zwei Wochen ein Buch im Internet bestellt. Der Versand sollte nur fünf Tage dauern. Weil das Paket nicht gekommen ist, hat sie beim Kundendienst angerufen. Die Mitarbeiterin hat gesagt, dass es leider eine Verzögerung gibt.

Marie hat jeden Tag auf die Post gewartet, aber das Paket ist einfach nicht angekommen. Sie hat sich geärgert, weil sie das Buch für ihre Deutschprüfung gebraucht hat. Ihr Nachbar hat vorgeschlagen, dass sie eine E-Mail an den Verkäufer schreibt. Marie hat das sofort gemacht.

Drei Tage später hat es endlich an der Tür geklingelt. Der Postbote hat ihr das Paket gebracht. Marie hat sich sehr gefreut, obwohl das Warten lange gedauert hat. Sie hat sofort mit dem Lernen begonnen.`,
    preguntas: [
      { enunciado: 'Marie hat ein Buch bestellt.', respuesta: true },
      { enunciado: 'Das Paket ist nach fünf Tagen angekommen.', respuesta: false },
      { enunciado: 'Marie hat sich beim Kundendienst gemeldet.', respuesta: true },
      { enunciado: 'Ihr Nachbar hat ihr nicht geholfen.', respuesta: false },
      { enunciado: 'Am Ende ist das Paket doch noch angekommen.', respuesta: true },
    ],
  },
  {
    slug: 'die-erste-arbeitswoche',
    nivel: 'B1',
    titulo: 'Die erste Arbeitswoche',
    descripcion: 'Felix berichtet von seinen ersten Eindrücken und Herausforderungen im neuen Job.',
    texto: `Nachdem Felix sein Studium beendet hatte, hat er endlich seine erste Stelle als Ingenieur angetreten. Am ersten Tag war er sehr aufgeregt, obwohl er sich schon lange auf diesen Moment gefreut hatte. Sein neuer Chef hat ihn den Kollegen vorgestellt und ihm das Büro gezeigt. Alles war neu: die Software, die Abläufe und sogar die Kaffeemaschine.

In den ersten Tagen musste Felix viele Informationen gleichzeitig aufnehmen. Trotzdem hat er versucht, ruhig zu bleiben und Notizen zu machen. Ein Kollege namens Herr Wagner hat ihm geduldig alles erklärt, nachdem er gemerkt hatte, dass Felix unsicher war. Am Mittwoch durfte Felix zum ersten Mal an einem eigenen Projekt arbeiten, was ihn sehr stolz gemacht hat.

Am Ende der Woche war Felix müde, aber zufrieden. Obwohl nicht alles perfekt gelaufen war, hatte er das Gefühl, schon viel gelernt zu haben. Er hat seiner Familie erzählt, dass ihm die neue Arbeit trotz der anfänglichen Schwierigkeiten großen Spaß macht. Für die nächste Woche hat er sich vorgenommen, noch mutiger Fragen zu stellen.`,
    preguntas: [
      { enunciado: 'Felix hat vor seinem ersten Arbeitstag sein Studium beendet.', respuesta: true },
      { enunciado: 'Felix kannte am ersten Tag schon alle Abläufe im Büro.', respuesta: false },
      { enunciado: 'Herr Wagner hat Felix geholfen, sich einzuarbeiten.', respuesta: true },
      { enunciado: 'Felix durfte in der ersten Woche an keinem Projekt arbeiten.', respuesta: false },
      { enunciado: 'Am Ende der Woche macht Felix die neue Arbeit Spaß.', respuesta: true },
    ],
  },
  {
    slug: 'freundschaft-trotz-distanz',
    nivel: 'B1',
    titulo: 'Freundschaft trotz Distanz',
    descripcion: 'Zwei Freundinnen erzählen, wie sie ihre Freundschaft nach dem Umzug einer von ihnen ins Ausland aufrechterhalten.',
    texto: `Als Nora vor einem Jahr nach Kanada gezogen ist, hatten viele gedacht, dass die Freundschaft zwischen ihr und Lisa nicht lange halten würde. Die beiden kennen sich schon seit der Grundschule und wollten den Kontakt trotz der großen Entfernung nicht verlieren. Obwohl sechs Stunden Zeitunterschied zwischen Deutschland und Kanada liegen, haben sie eine Lösung gefunden.

Jeden Sonntagabend telefonieren die beiden per Videoanruf, nachdem sie tagsüber ihren eigenen Beschäftigungen nachgegangen sind. Sie erzählen sich von der Arbeit, von neuen Bekanntschaften und von kleinen Alltagsproblemen. Trotzdem ist es nicht immer einfach, weil manchmal die Technik nicht funktioniert oder einer der beiden zu müde zum Reden ist. Lisa hat einmal gesagt, dass ihr die Gespräche trotz aller Schwierigkeiten sehr wichtig geworden sind.

Im Sommer hat Nora Lisa in Deutschland besucht, und es war, als wäre keine Zeit vergangen. Beide waren überrascht, wie vertraut sich alles anfühlte, obwohl sie sich ein ganzes Jahr nicht persönlich gesehen hatten. Nach diesem Besuch sind sie sich sicher, dass ihre Freundschaft auch die nächste Zeit der Distanz überstehen wird.`,
    preguntas: [
      { enunciado: 'Nora ist vor einem Jahr nach Kanada gezogen.', respuesta: true },
      { enunciado: 'Nora und Lisa kennen sich erst seit Kurzem.', respuesta: false },
      { enunciado: 'Die beiden telefonieren jeden Sonntag miteinander.', respuesta: true },
      { enunciado: 'Die Videoanrufe funktionieren immer ohne Probleme.', respuesta: false },
      { enunciado: 'Nora hat Lisa im Sommer in Deutschland besucht.', respuesta: true },
    ],
  },
  {
    slug: 'digitale-kluft-in-der-bildung',
    nivel: 'B2',
    titulo: 'Die digitale Kluft in der Bildung',
    descripcion: 'Ein Blick auf die ungleichen Voraussetzungen von Schülerinnen und Schülern beim digitalen Lernen.',
    texto: `Seit der Corona-Pandemie ist digitales Lernen aus dem deutschen Bildungssystem nicht mehr wegzudenken. Während einige Schulen inzwischen mit modernen Tablets, schnellem Internet und geschultem Personal ausgestattet sind, kämpfen andere weiterhin mit veralteter Technik oder fehlender Ausstattung. Diese Ungleichheit wird von Bildungsforschern als „digitale Kluft“ bezeichnet und betrifft nicht nur die Schulen selbst, sondern auch die Familien der Schülerinnen und Schüler.

Besonders deutlich zeigt sich das Problem, wenn Hausaufgaben online erledigt werden sollen. Kinder aus einkommensschwachen Familien haben oft keinen eigenen Laptop und müssen sich ein Gerät mit Geschwistern teilen, was zu Konflikten und verpassten Fristen führen kann. Wäre die technische Ausstattung flächendeckend vorhanden, könnten viele dieser Nachteile vermieden werden. Kritiker bemängeln zudem, dass Lehrkräfte häufig nicht ausreichend im Umgang mit digitalen Werkzeugen geschult werden, obwohl von ihnen erwartet wird, modernen Unterricht zu gestalten.

Politisch wird seit Jahren über Lösungen diskutiert. Der sogenannte Digitalpakt Schule sollte Milliarden Euro für digitale Ausstattung bereitstellen, doch die Umsetzung verlief in vielen Bundesländern schleppend, da bürokratische Hürden den Mittelabruf erschwerten. Bildungsexperten fordern daher nicht nur mehr Geld, sondern auch einfachere Antragsverfahren und eine bessere Fortbildung für Lehrkräfte, damit digitale Bildung tatsächlich allen Kindern gleichermaßen zugutekommt.

Ob sich die digitale Kluft in den kommenden Jahren schließen lässt, hängt maßgeblich davon ab, wie konsequent die vorhandenen Programme umgesetzt werden. Ohne gezielte Investitionen in strukturschwache Regionen droht die Ungleichheit zwischen Schulen und Familien sich weiter zu vertiefen, was langfristig auch die Chancengleichheit im späteren Berufsleben beeinträchtigen könnte.`,
    preguntas: [
      { enunciado: 'Alle deutschen Schulen sind mittlerweile gleich gut mit digitaler Technik ausgestattet.', respuesta: false },
      { enunciado: 'Kinder aus einkommensschwachen Familien müssen sich manchmal ein Gerät mit Geschwistern teilen.', respuesta: true },
      { enunciado: 'Lehrkräfte werden laut Text immer ausreichend im Umgang mit digitalen Werkzeugen geschult.', respuesta: false },
      { enunciado: 'Der Digitalpakt Schule wurde in allen Bundesländern reibungslos umgesetzt.', respuesta: false },
      { enunciado: 'Experten fordern unter anderem einfachere Antragsverfahren für digitale Fördermittel.', respuesta: true },
    ],
  },
  {
    slug: 'mentale-gesundheit-am-arbeitsplatz',
    nivel: 'B2',
    titulo: 'Mentale Gesundheit am Arbeitsplatz',
    descripcion: 'Warum psychische Belastungen im Berufsleben zunehmend ernst genommen werden.',
    texto: `Lange Zeit galt psychische Gesundheit am Arbeitsplatz als Tabuthema, über das kaum offen gesprochen wurde. Wer unter Stress, Erschöpfung oder Angstzuständen litt, fürchtete häufig, als schwach oder nicht belastbar zu gelten. Inzwischen hat sich dieses Bild in vielen Unternehmen gewandelt, nicht zuletzt, weil die Zahl der Krankheitstage aufgrund psychischer Erkrankungen in den letzten Jahren deutlich gestiegen ist.

Immer mehr Firmen bieten daher Programme zur Stressprävention an, etwa Achtsamkeitskurse, anonyme Beratungsangebote oder flexible Arbeitszeiten. Manche Unternehmen haben sogenannte Mental-Health-Beauftragte eingeführt, die als erste Ansprechpartner für Mitarbeitende dienen sollen. Dennoch bemängeln Experten, dass solche Maßnahmen oft nur oberflächlich wirken, solange sich die eigentlichen Ursachen wie Zeitdruck, Personalmangel oder eine ständige Erreichbarkeit nicht ändern.

Besonders diskutiert wird die Rolle von Führungskräften. Würden Vorgesetzte offener mit dem Thema umgehen und selbst über eigene Belastungen sprechen, könnte dies laut Studien das Arbeitsklima spürbar verbessern und die Hemmschwelle senken, sich Hilfe zu suchen. Kritiker weisen jedoch darauf hin, dass viele Führungskräfte selbst unter hohem Druck stehen und daher kaum Kapazitäten haben, sich intensiv um das Wohlbefinden ihres Teams zu kümmern.

Letztlich zeigt sich, dass mentale Gesundheit am Arbeitsplatz kein rein individuelles Problem ist, sondern eng mit den Strukturen eines Unternehmens zusammenhängt. Nur wenn Prävention, offene Kommunikation und realistische Arbeitsanforderungen zusammenkommen, lässt sich langfristig verhindern, dass psychische Belastungen zu ernsthaften Erkrankungen führen.`,
    preguntas: [
      { enunciado: 'Psychische Gesundheit am Arbeitsplatz war früher ein häufig offen diskutiertes Thema.', respuesta: false },
      { enunciado: 'Die Zahl der Krankheitstage wegen psychischer Erkrankungen ist laut Text gestiegen.', respuesta: true },
      { enunciado: 'Laut Experten lösen oberflächliche Präventionsprogramme automatisch alle strukturellen Probleme.', respuesta: false },
      { enunciado: 'Offenere Führungskräfte könnten laut Studien das Arbeitsklima verbessern.', respuesta: true },
      { enunciado: 'Der Text beschreibt mentale Gesundheit als rein individuelles Problem.', respuesta: false },
    ],
  },
  {
    slug: 'das-lieferkettengesetz',
    nivel: 'B2',
    titulo: 'Das Lieferkettengesetz und seine Folgen',
    descripcion: 'Eine Auseinandersetzung mit den Chancen und Schwierigkeiten des deutschen Lieferkettengesetzes.',
    texto: `Mit dem Lieferkettensorgfaltspflichtengesetz sollten deutsche Unternehmen stärker in die Verantwortung genommen werden, wenn es um Menschenrechte und Umweltstandards in ihren globalen Lieferketten geht. Ziel des Gesetzes ist es, dass Firmen genauer prüfen, unter welchen Bedingungen ihre Produkte im Ausland hergestellt werden, etwa in Textilfabriken oder Bergwerken.

Befürworter des Gesetzes betonen, dass es überfällig gewesen sei, Unternehmen für Missstände wie Kinderarbeit oder gefährliche Arbeitsbedingungen haftbar zu machen. Ohne eine gesetzliche Grundlage, so argumentieren sie, würden sich viele Firmen kaum freiwillig um die Zustände bei ihren Zulieferern kümmern. Verbraucherschützer sehen darin zudem einen wichtigen Schritt hin zu mehr Transparenz, da Kundinnen und Kunden künftig besser nachvollziehen könnten, unter welchen Bedingungen ein Produkt entstanden ist.

Kritiker hingegen weisen darauf hin, dass besonders kleinere und mittlere Unternehmen mit dem hohen bürokratischen Aufwand überfordert seien. Sie müssten Lieferketten dokumentieren, die oft aus Dutzenden Zwischenhändlern bestehen, was in der Praxis kaum vollständig kontrollierbar sei. Manche Wirtschaftsverbände fordern deshalb, das Gesetz zu vereinfachen oder zumindest auf große Konzerne zu beschränken, damit kleinere Betriebe nicht unverhältnismäßig belastet werden.

Ob das Gesetz tatsächlich zu besseren Arbeitsbedingungen in den Herstellerländern führt, lässt sich bislang nur schwer beurteilen, da entsprechende Auswirkungen erst über einen längeren Zeitraum sichtbar werden. Klar ist jedoch, dass die Debatte über unternehmerische Verantwortung in globalen Lieferketten durch das Gesetz neuen Auftrieb erhalten hat und auch auf europäischer Ebene weiter diskutiert wird.`,
    preguntas: [
      { enunciado: 'Das Lieferkettengesetz betrifft ausschließlich deutsche Umweltstandards im Inland.', respuesta: false },
      { enunciado: 'Befürworter sehen im Gesetz einen Schritt zu mehr Transparenz für Verbraucher.', respuesta: true },
      { enunciado: 'Laut Kritikern sind besonders kleinere Unternehmen von hohem bürokratischem Aufwand betroffen.', respuesta: true },
      { enunciado: 'Alle Wirtschaftsverbände lehnen das Gesetz vollständig ab.', respuesta: false },
      { enunciado: 'Die langfristigen Auswirkungen des Gesetzes sind laut Text bereits eindeutig belegt.', respuesta: false },
    ],
  },
  {
    slug: 'algorithmische-diskriminierung',
    nivel: 'B2',
    titulo: 'Algorithmische Diskriminierung im digitalen Alltag',
    descripcion: 'Wie Algorithmen unbeabsichtigt Vorurteile verstärken können und welche Lösungsansätze diskutiert werden.',
    texto: `Algorithmen entscheiden heute über immer mehr Bereiche unseres Lebens mit, von der Vergabe eines Kredits über die Auswahl von Bewerbungsunterlagen bis hin zu den Inhalten, die uns in sozialen Netzwerken angezeigt werden. Viele gehen davon aus, dass solche automatisierten Systeme objektiver entscheiden als Menschen, da sie angeblich frei von persönlichen Vorurteilen seien. Diese Annahme wird jedoch zunehmend infrage gestellt.

Untersuchungen haben gezeigt, dass Algorithmen die Vorurteile widerspiegeln können, die bereits in den Daten enthalten sind, mit denen sie trainiert wurden. Wurde ein System beispielsweise überwiegend mit Bewerbungsdaten männlicher Kandidaten trainiert, könnte es unbewusst Bewerbungen von Frauen benachteiligen. Ähnliche Probleme sind auch bei der Kreditvergabe aufgetreten, wo bestimmte Wohngegenden oder Namen zu schlechteren Bewertungen geführt haben, obwohl die betroffenen Personen finanziell durchaus zuverlässig gewesen wären.

Als Reaktion darauf fordern Wissenschaftlerinnen und Wissenschaftler mehr Transparenz bei der Entwicklung solcher Systeme. Unternehmen sollten offenlegen müssen, welche Daten verwendet werden und wie Entscheidungen zustande kommen, damit Betroffene sich gegen unfaire Bewertungen wehren können. Gleichzeitig wird diskutiert, ob unabhängige Prüfstellen eingerichtet werden sollten, die Algorithmen regelmäßig auf diskriminierende Muster hin untersuchen, bevor diese in sensiblen Bereichen eingesetzt werden dürfen.

Die Europäische Union hat mit ihrer KI-Verordnung bereits erste rechtliche Rahmenbedingungen geschaffen, die den Einsatz von Hochrisiko-Systemen stärker regulieren sollen. Ob diese Maßnahmen ausreichen, um algorithmische Diskriminierung wirksam einzudämmen, bleibt abzuwarten, doch das Bewusstsein für das Problem ist in den letzten Jahren spürbar gewachsen.`,
    preguntas: [
      { enunciado: 'Algorithmen gelten laut Text automatisch als völlig objektiv und vorurteilsfrei.', respuesta: false },
      { enunciado: 'Ein mit überwiegend männlichen Bewerbungsdaten trainiertes System kann Frauen benachteiligen.', respuesta: true },
      { enunciado: 'Bei der Kreditvergabe hat die Wohngegend laut Text nie eine Rolle gespielt.', respuesta: false },
      { enunciado: 'Wissenschaftler fordern mehr Transparenz bei der Entwicklung solcher Systeme.', respuesta: true },
      { enunciado: 'Die EU hat bislang keinerlei rechtliche Regelungen zu KI-Systemen geschaffen.', respuesta: false },
    ],
  },
];

// Permite importar desde Node.js (generate-pages.js) sin romper el navegador
if (typeof module !== 'undefined') module.exports = TEXTOS;
