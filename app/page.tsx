"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const models = ["Manzayork Costa", "Manzayork Brisa", "Manzayork Sol"];

function BeachLogo() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="23" fill="#FFF0B8" />
      <path d="M16 22a8 8 0 0 1 16 0" fill="#FF684B" />
      <path d="M12 23h24" stroke="#087C78" strokeLinecap="round" strokeWidth="1.8" />
      <path
        d="M8 29c4-2 7-2 11 0s7 2 11 0 7-2 11 0M10 35c4-2 7-2 11 0s7 2 11 0 5-2 7-1"
        stroke="#087C78"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path d="M37 25c-1-5-1-9 1-13m-1 5c-3-3-5-4-8-4m8 7c3-3 5-4 8-4m-8 0c0-4 1-6 3-8" stroke="#15594D" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function BeachIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="beach-art"
      fill="none"
      viewBox="0 0 660 430"
    >
      <defs>
        <linearGradient id="sky" x1="330" x2="330" y1="14" y2="337" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFCA73" />
          <stop offset=".58" stopColor="#FF8B67" />
          <stop offset="1" stopColor="#FFD7A0" />
        </linearGradient>
        <linearGradient id="sea" x1="332" x2="332" y1="212" y2="368" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38B8AB" />
          <stop offset="1" stopColor="#087C78" />
        </linearGradient>
        <linearGradient id="sand" x1="335" x2="335" y1="302" y2="422" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAC08E" />
          <stop offset="1" stopColor="#F6D9AB" />
        </linearGradient>
      </defs>
      <rect x="28" y="16" width="604" height="398" rx="28" fill="url(#sky)" />
      <circle cx="478" cy="119" r="47" fill="#FFEAC0" />
      <path d="M29 226c53-10 89-3 132 10 53 16 90 16 142-2 61-21 112-26 167-10 61 17 107 17 162 4v123H29V226Z" fill="url(#sea)" />
      <path d="M28 324c86-32 151-30 226-12 68 16 120 24 196-3 64-23 123-22 182-8v113H28V324Z" fill="url(#sand)" />
      <path d="M31 274c44-9 73-7 106 2m57 0c32 8 54 7 86-1m69 4c37-9 69-7 101 3m51-4c34-8 65-6 98 4" stroke="#D6B185" strokeLinecap="round" strokeOpacity=".75" strokeWidth="3" />
      <path d="M39 306c33-7 58-6 81 1m138 5c32-7 54-5 77 1m109-5c30-7 54-5 80 2m52-4c17-4 32-3 45 1" stroke="#D8B68C" strokeLinecap="round" strokeOpacity=".7" strokeWidth="2" />
      <path d="M127 366c52-12 109-8 151 3m54 5c41-10 82-8 121 3m44-5c28-6 53-4 80 3" stroke="#D2A977" strokeLinecap="round" strokeOpacity=".66" strokeWidth="2" />
      <path d="M151 215c-12-24-13-47-5-71m0 18c-17-10-27-23-32-39m37 25c16-12 24-27 27-44m-43 78c-18-5-31-14-41-28" stroke="#15594D" strokeLinecap="round" strokeWidth="6" />
      <path d="M124 194c-24-13-38-29-44-48 20 3 36 14 47 32m12-20c-3-23 2-42 14-59 11 18 13 37 6 56m8 19c6-23 19-39 39-48-1 21-11 39-29 52" fill="#35845D" />
      <path d="M455 263c32-8 56-7 81 0m-287 20c23-5 43-4 62 1m166 30c20-5 38-4 55 1" stroke="#C5D5C4" strokeLinecap="round" strokeOpacity=".65" strokeWidth="3" />
      <path d="M321 242c13-10 24-10 36 0-12 8-24 8-36 0Zm-8 11c17-4 31-4 46 0" stroke="#F3DCC1" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [model, setModel] = useState(models[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    
    <main>
      <header className="site-header">
        <a aria-label="Manzayork, inicio" className="brand" href="#">
          <BeachLogo />
          <span>manzayork</span>
        </a>
        <nav aria-label="Navegación principal" className="main-nav">
          <a href="#experiencia">La experiencia</a>
          <a href="#modelos">Modelos</a>
          <a className="nav-cta" href="#agenda">
            Agenda tu prueba <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="experiencia">
        <div className="hero-copy">
          <p className="eyebrow"><span /> TU PRÓXIMA HISTORIA EMPIEZA AQUÍ</p>
          <h1>
            Hay caminos
            <br />
            que se sienten
            <br />
            <em>como vacaciones.</em>
          </h1>
          <p className="hero-description">
            Conoce Manzayork al volante. Encuentra tu ritmo, elige tu ruta y
            déjate llevar un poco más lejos.
          </p>
          <a className="primary-button" href="#agenda">
            Agenda tu prueba <span aria-hidden="true">↗</span>
          </a>
          <div className="hero-note">
            <span aria-hidden="true">✳</span> Un nuevo horizonte te espera
          </div>
        </div>
        <div className="hero-visual">
          <BeachIllustration />
          <div className="image-caption">
            <span className="caption-sun" aria-hidden="true">☼</span>
            <div>
              <strong>Sal de la rutina.</strong>
              <span>Encuentra tu propio camino.</span>
            </div>
          </div>
          <div className="floating-stamp">made for<br />the getaway</div>
        </div>
        <a className="scroll-hint" href="#agenda">
          <span /> DESLIZA PARA DESCUBRIR
        </a>
      </section>

      <section className="booking-section" id="agenda">
        <div className="booking-intro">
          <p className="eyebrow"><span /> EL PRIMER PASO ES TUYO</p>
          <h2>Tu lugar está<br />al <em>volante.</em></h2>
          <p>
            Déjanos tus datos y nos pondremos en contacto para encontrar el
            mejor momento para tu prueba de manejo.
          </p>
          <div className="booking-detail">
            <span aria-hidden="true">01</span>
            <div><strong>Elige tu modelo</strong><small>El que va contigo.</small></div>
          </div>
          <div className="booking-detail">
            <span aria-hidden="true">02</span>
            <div><strong>Cuéntanos de ti</strong><small>Te contactamos para coordinar.</small></div>
          </div>
          <div className="booking-detail">
            <span aria-hidden="true">03</span>
            <div><strong>Disfruta el camino</strong><small>La aventura empieza al salir.</small></div>
          </div>
        </div>

        <div className="form-card" id="modelos">
          {submitted ? (
            <div aria-live="polite" className="success-state">
              <span className="success-icon" aria-hidden="true">✓</span>
              <p className="eyebrow"><span /> SOLICITUD COMPLETADA</p>
              <h2>¡Gracias por<br /><em>elegir tu ruta!</em></h2>
              <p>
                Tu solicitud de prueba para {model} quedó registrada en esta
                demostración.
              </p>
              <button className="text-button" onClick={() => setSubmitted(false)} type="button">
                Enviar otra solicitud <span aria-hidden="true">↗</span>
              </button>
            </div>
          ) : (
            <>
              <div className="form-heading">
                <div>
                  <p className="eyebrow">AGENDA TU EXPERIENCIA</p>
                  <h2>Hagámoslo <em>real.</em></h2>
                </div>
                <span className="form-sparkle" aria-hidden="true">✳</span>
              </div>
              <form onSubmit={handleSubmit}>
                <label className="field field-full">
                  <span>Modelo de interés</span>
                  <select value={model} onChange={(event) => setModel(event.target.value)}>
                    {models.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
                <div className="field-row">
                  <label className="field">
                    <span>Nombre</span>
                    <input autoComplete="given-name" name="nombre" placeholder="Tu nombre" required />
                  </label>
                  <label className="field">
                    <span>Apellido</span>
                    <input autoComplete="family-name" name="apellido" placeholder="Tu apellido" required />
                  </label>
                </div>
                <div className="field-row">
                  <label className="field">
                    <span>Teléfono</span>
                    <input autoComplete="tel" inputMode="tel" name="telefono" placeholder="+52 55 1234 5678" required type="tel" />
                  </label>
                  <label className="field">
                    <span>Correo electrónico</span>
                    <input autoComplete="email" name="correo" placeholder="hola@ejemplo.com" required type="email" />
                  </label>
                </div>
                <div className="field-row">
                  <label className="field">
                    <span>Estado</span>
                    <select defaultValue="" name="estado" required>
                      <option disabled value="">Selecciona tu estado</option>
                      <option>Ciudad de México</option>
                      <option>Jalisco</option>
                      <option>Nuevo León</option>
                      <option>Quintana Roo</option>
                      <option>Yucatán</option>
                      <option>Otro estado</option>
                    </select>
                  </label>
                  <label className="field">
                    <span>¿Cómo prefieres que te contactemos?</span>
                    <select defaultValue="Teléfono" name="preferencia">
                      <option>Teléfono</option>
                      <option>Correo electrónico</option>
                      <option>WhatsApp</option>
                    </select>
                  </label>
                </div>
                <label className="consent">
                  <input name="consentimiento" required type="checkbox" />
                  <span>
                    Acepto que Manzayork me contacte para dar seguimiento a mi
                    solicitud y he leído el <a href="#privacidad">aviso de privacidad</a>.
                  </span>
                </label>
                <button className="submit-button" type="submit">
                  Solicitar mi prueba <span aria-hidden="true">↗</span>
                </button>
                <p className="form-footnote">Sin compromiso. Solo el comienzo de algo bueno.</p>
              </form>
            </>
          )}
        </div>
<section style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>
  <h3>Aviso de Confidencialidad</h3>
  <p>
    La información proporcionada en este formulario es confidencial y será
    utilizada únicamente para dar seguimiento a tu solicitud de prueba de
    manejo. No será compartida con terceros.
  </p>
</section>
      </section>
      <footer className="site-footer" id="privacidad">
        <a aria-label="Manzayork, inicio" className="brand footer-brand" href="#">
          <BeachLogo /><span>manzayork</span>
        </a>
        <p>Un horizonte propio. © {new Date().getFullYear()} Manzayork.</p>
        <a href="#agenda">Proyecto final de la materia de ingenieria de software - Angel Said Vazquez Cisneros - 225361652 <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
