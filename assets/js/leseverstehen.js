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
