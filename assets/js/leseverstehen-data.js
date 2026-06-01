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
];

// Permite importar desde Node.js (generate-pages.js) sin romper el navegador
if (typeof module !== 'undefined') module.exports = TEXTOS;
