<?php
/**
 * Title: Landing Samuel Home
 * Slug: samuel-coach-blocks/landing-home
 * Categories: samuel-coach
 * Inserter: true
 * Description: Landing editable por bloques para la home de Samuel Coach de Aleman.
 */
defined('ABSPATH') || exit;

$logo = esc_url(get_template_directory_uri() . '/assets/landinglogo.png');
?>
<!-- wp:group {"align":"full","className":"sam-notice","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull sam-notice">
<!-- wp:paragraph -->
<p>Agenda cerrada hasta el 22.06. Mientras tanto, <a href="/blog">aprende aleman gratis en el blog</a>.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section","align":"wide","className":"sam-hero","style":{"spacing":{"padding":{"top":"48px","bottom":"48px","left":"32px","right":"32px"},"margin":{"top":"32px","bottom":"56px"}}},"layout":{"type":"constrained"}} -->
<section class="wp-block-group alignwide sam-hero" style="margin-top:32px;margin-bottom:56px;padding-top:48px;padding-right:32px;padding-bottom:48px;padding-left:32px">
<!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"left":"40px"}}}} -->
<div class="wp-block-columns are-vertically-aligned-center">
<!-- wp:column {"verticalAlignment":"center","width":"62%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:62%">
<!-- wp:image {"id":0,"sizeSlug":"full","linkDestination":"none","className":"sam-logo"} -->
<figure class="wp-block-image size-full sam-logo"><img src="<?php echo $logo; ?>" alt="Samuel Coach de Aleman"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":1,"fontSize":"x-large"} -->
<h1 class="wp-block-heading has-x-large-font-size">Willkommen bei Samuel Coach de Aleman</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size">Aprende aleman online con un metodo individualizado, clases practicas y un plan de estudio adaptado a tus metas reales.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Preparacion Goethe, TELC y certificaciones</li><li>Aleman conversacional y profesional</li><li>Clases 100% online desde Fuengirola, Malaga</li></ul>
<!-- /wp:list -->

<!-- wp:buttons {"layout":{"type":"flex","flexWrap":"wrap"}} -->
<div class="wp-block-buttons">
<!-- wp:button {"backgroundColor":"white","textColor":"teal-dark"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-teal-dark-color has-white-background-color has-text-color has-background wp-element-button" href="tel:644220965">Habla conmigo</a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"dark","textColor":"white"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-white-color has-dark-background-color has-text-color has-background wp-element-button" href="mailto:samuelcoachdealeman@gmail.com">Mas informacion</a></div>
<!-- /wp:button -->

<!-- wp:button {"style":{"color":{"background":"#25d366","text":"#ffffff"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="https://wa.me/34644220965" style="background-color:#25d366;color:#ffffff">WhatsApp</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
</div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"38%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:38%">
<!-- wp:group {"className":"sam-hero-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group sam-hero-card">
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Primera consulta gratis</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Cuéntame tu nivel, tu objetivo y cuánto tiempo tienes. A partir de ahí diseñamos un plan contigo.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sam-small-muted"} -->
<p class="sam-small-muted">Aqui puedes sustituir esta caja por una foto tuya, un video o una imagen promocional.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section","align":"wide","style":{"spacing":{"margin":{"bottom":"56px"}}},"layout":{"type":"constrained"}} -->
<section class="wp-block-group alignwide" style="margin-bottom:56px">
<!-- wp:paragraph {"align":"center","className":"sam-kicker"} -->
<p class="has-text-align-center sam-kicker">Las 3 claves</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","className":"sam-section-title","fontSize":"x-large"} -->
<h2 class="wp-block-heading has-text-align-center sam-section-title has-x-large-font-size">Aprende aleman gracias a mis 3 claves</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"muted"} -->
<p class="has-text-align-center has-muted-color has-text-color">Da igual cuales sean tus metas y tu situacion, juntos alcanzaremos tus objetivos.</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"style":{"spacing":{"margin":{"top":"28px"},"blockGap":{"left":"24px"}}}} -->
<div class="wp-block-columns" style="margin-top:28px">
<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"className":"sam-card","style":{"spacing":{"padding":{"top":"28px","bottom":"28px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group sam-card" style="padding-top:28px;padding-right:24px;padding-bottom:28px;padding-left:24px">
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Experiencia y dedicacion</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>La enseñanza es mi pasion y eso se transmite en cada clase. Mas de 171 reseñas de 5 estrellas lo avalan.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"className":"sam-card","style":{"spacing":{"padding":{"top":"28px","bottom":"28px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group sam-card" style="padding-top:28px;padding-right:24px;padding-bottom:28px;padding-left:24px">
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Aprendizaje practico</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Entrenaras tu mente aprendiendo aleman de forma efectiva, con enfasis en lo que de verdad sirve en la vida real.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"className":"sam-card","style":{"spacing":{"padding":{"top":"28px","bottom":"28px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group sam-card" style="padding-top:28px;padding-right:24px;padding-bottom:28px;padding-left:24px">
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Objetivos individualizados</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Un plan de estudios diseñado para ti, basado en tus metas personales, tu nivel y tu ritmo de aprendizaje.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section","align":"wide","style":{"spacing":{"padding":{"top":"48px","bottom":"48px","left":"24px","right":"24px"},"margin":{"bottom":"56px"}},"color":{"background":"#f6f6f6"}},"layout":{"type":"constrained"}} -->
<section class="wp-block-group alignwide has-background" style="background-color:#f6f6f6;margin-bottom:56px;padding-top:48px;padding-right:24px;padding-bottom:48px;padding-left:24px">
<!-- wp:heading {"textAlign":"center","className":"sam-section-title","fontSize":"x-large"} -->
<h2 class="wp-block-heading has-text-align-center sam-section-title has-x-large-font-size">Lo que dicen mis alumnos</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"muted"} -->
<p class="has-text-align-center has-muted-color has-text-color">Reseñas verificadas en Google y Superprof.</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"className":"sam-proof","style":{"spacing":{"margin":{"top":"28px","bottom":"28px"}}}} -->
<div class="wp-block-columns sam-proof" style="margin-top:28px;margin-bottom:28px">
<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","bottom":"20px","left":"20px","right":"20px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px">
<!-- wp:paragraph {"className":"sam-platform is-google"} -->
<p class="sam-platform is-google">Google</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">5.0 estrellas</h4>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"sam-small-muted"} -->
<p class="sam-small-muted">171 reseñas</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","bottom":"20px","left":"20px","right":"20px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px">
<!-- wp:paragraph {"className":"sam-platform is-superprof"} -->
<p class="sam-platform is-superprof">Superprof</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">5.0 estrellas</h4>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"sam-small-muted"} -->
<p class="sam-small-muted">Valoraciones excelentes</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"20px"},"margin":{"top":"12px"}}}} -->
<div class="wp-block-columns" style="margin-top:12px">
<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"className":"sam-testimonial","layout":{"type":"constrained"}} -->
<div class="wp-block-group sam-testimonial">
<!-- wp:paragraph {"className":"sam-platform is-google"} -->
<p class="sam-platform is-google">Google</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>"Las clases son muy dinamicas y personalizadas. Samuel se adapta perfectamente a mi nivel y avanzamos a buen ritmo."</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong>Alumno Google</strong></p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"className":"sam-testimonial","layout":{"type":"constrained"}} -->
<div class="wp-block-group sam-testimonial">
<!-- wp:paragraph {"className":"sam-platform is-google"} -->
<p class="sam-platform is-google">Google</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>"Samuel explica muy bien, adapta cada clase a lo que necesito y siempre resuelve mis dudas. En pocos meses note un avance increible."</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong>Alumno Google</strong></p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"className":"sam-testimonial","layout":{"type":"constrained"}} -->
<div class="wp-block-group sam-testimonial">
<!-- wp:paragraph {"className":"sam-platform is-superprof"} -->
<p class="sam-platform is-superprof">Superprof</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>"Prepare el Goethe B2 con Samuel y lo aprobe a la primera. Su metodo es muy practico y las clases son dinamicas."</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong>Alumno Superprof</strong></p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section","align":"wide","style":{"spacing":{"margin":{"bottom":"56px"}}},"layout":{"type":"constrained"}} -->
<section class="wp-block-group alignwide" style="margin-bottom:56px">
<!-- wp:heading {"textAlign":"center","className":"sam-section-title","fontSize":"x-large"} -->
<h2 class="wp-block-heading has-text-align-center sam-section-title has-x-large-font-size">Entrada reciente del blog</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"muted"} -->
<p class="has-text-align-center has-muted-color has-text-color">Aqui encontrarás contenido util para aprender aleman y entender mejor la vida en Alemania.</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"className":"sam-blog-box","style":{"spacing":{"margin":{"top":"28px"}}}} -->
<div class="wp-block-columns sam-blog-box" style="margin-top:28px">
<!-- wp:column {"width":"34%","className":"sam-blog-thumb"} -->
<div class="wp-block-column sam-blog-thumb" style="flex-basis:34%"></div>
<!-- /wp:column -->

<!-- wp:column {"width":"66%"} -->
<div class="wp-block-column" style="flex-basis:66%">
<!-- wp:group {"style":{"spacing":{"padding":{"top":"28px","bottom":"28px","left":"26px","right":"26px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:28px;padding-right:26px;padding-bottom:28px;padding-left:26px">
<!-- wp:paragraph {"className":"sam-pill"} -->
<p class="sam-pill">Blog</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">¿Sabias esto del TEKAMOLO? El truco que cambia tu aleman para siempre</h3>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>El TEKAMOLO es una de las reglas mas importantes del aleman y una de las menos conocidas. Usa este bloque para destacar tu ultimo articulo.</p>
<!-- /wp:paragraph -->
<!-- wp:buttons -->
<div class="wp-block-buttons">
<!-- wp:button {"backgroundColor":"teal","textColor":"white"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-white-color has-teal-background-color has-text-color has-background wp-element-button" href="/blog">Ver blog</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->
</div>
<!-- /wp:columns -->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section","align":"wide","className":"sam-faq","style":{"spacing":{"padding":{"top":"48px","bottom":"48px","left":"24px","right":"24px"},"margin":{"bottom":"56px"}},"color":{"background":"#f6f6f6"}},"layout":{"type":"constrained"}} -->
<section id="faq" class="wp-block-group alignwide sam-faq has-background" style="background-color:#f6f6f6;margin-bottom:56px;padding-top:48px;padding-right:24px;padding-bottom:48px;padding-left:24px">
<!-- wp:heading {"textAlign":"center","className":"sam-section-title","fontSize":"x-large"} -->
<h2 class="wp-block-heading has-text-align-center sam-section-title has-x-large-font-size">Preguntas frecuentes</h2>
<!-- /wp:heading -->

<!-- wp:details -->
<details class="wp-block-details"><summary>¿Como son las clases de aleman online?</summary><p>Las clases se realizan por videollamada. Son personalizadas, con materiales adaptados a tu nivel y objetivos.</p></details>
<!-- /wp:details -->

<!-- wp:spacer {"height":"12px"} -->
<div style="height:12px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:details -->
<details class="wp-block-details"><summary>¿Desde qué nivel puedo empezar?</summary><p>Desde cero absoluto hasta nivel avanzado. Adaptamos el programa a tu punto de partida.</p></details>
<!-- /wp:details -->

<!-- wp:spacer {"height":"12px"} -->
<div style="height:12px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:details -->
<details class="wp-block-details"><summary>¿Me ayudas con Goethe o TELC?</summary><p>Si. Ofrezco preparacion específica para Goethe, TELC, DSD y otras certificaciones internacionales.</p></details>
<!-- /wp:details -->

<!-- wp:spacer {"height":"12px"} -->
<div style="height:12px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:details -->
<details class="wp-block-details"><summary>¿Cual es el precio?</summary><p>El precio varia según el tipo de clase y la frecuencia. Contáctame para recibir una propuesta personalizada.</p></details>
<!-- /wp:details -->
</section>
<!-- /wp:group -->

<!-- wp:group {"tagName":"section","align":"wide","className":"sam-contact","style":{"spacing":{"padding":{"top":"44px","bottom":"44px","left":"24px","right":"24px"},"margin":{"bottom":"32px"}}},"layout":{"type":"constrained"}} -->
<section id="contacto" class="wp-block-group alignwide sam-contact" style="margin-bottom:32px;padding-top:44px;padding-right:24px;padding-bottom:44px;padding-left:24px">
<!-- wp:heading {"textAlign":"center","fontSize":"x-large"} -->
<h2 class="wp-block-heading has-text-align-center has-x-large-font-size">Hablemos sin compromiso</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Cuéntame tu situación y diseñamos juntos el mejor plan para que consigas tu objetivo en aleman.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap"}} -->
<div class="wp-block-buttons">
<!-- wp:button {"backgroundColor":"white","textColor":"teal-dark"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-teal-dark-color has-white-background-color has-text-color has-background wp-element-button" href="tel:644220965">Llámame</a></div>
<!-- /wp:button -->
<!-- wp:button {"style":{"color":{"background":"#25d366","text":"#ffffff"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="https://wa.me/34644220965" style="background-color:#25d366;color:#ffffff">WhatsApp</a></div>
<!-- /wp:button -->
<!-- wp:button {"backgroundColor":"dark","textColor":"white"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-white-color has-dark-background-color has-text-color has-background wp-element-button" href="mailto:samuelcoachdealeman@gmail.com">Enviar email</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->

<!-- wp:paragraph {"align":"center","className":"sam-small-muted"} -->
<p class="has-text-align-center sam-small-muted">Fuengirola, Malaga, España. Clases 100% online.</p>
<!-- /wp:paragraph -->
</section>
<!-- /wp:group -->
