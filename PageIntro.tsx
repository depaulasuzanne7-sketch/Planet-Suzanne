:root {
  --font-display: Georgia, "Times New Roman", serif;
  --font-body: Arial, Helvetica, sans-serif;
  --navy: #123c4a;
  --navy-deep: #0b2a35;
  --cream: #f6f0df;
  --paper: #fffaf0;
  --sand: #dfcba7;
  --coral: #db6c55;
  --seafoam: #8ebcaf;
  --gold: #c99a43;
  --silver: #c7cbc7;
  --ink: #263737;
  --muted: #687875;
  --line: rgba(18, 60, 74, 0.18);
  --shadow: 0 18px 60px rgba(22, 52, 55, 0.12);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background:
    radial-gradient(circle at 10% 10%, rgba(201,154,67,.08), transparent 24rem),
    radial-gradient(circle at 90% 35%, rgba(142,188,175,.11), transparent 28rem),
    var(--cream);
  font-family: var(--font-body), Arial, sans-serif;
}
a { color: inherit; text-decoration: none; }
button, input { font: inherit; }
.site-shell { min-height: 100vh; overflow: hidden; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

.site-header {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--line);
  position: relative;
  z-index: 20;
}
.brand-lockup { display: flex; align-items: center; gap: 12px; }
.brand-lockup strong { display: block; font-family: var(--font-display); font-size: 1.45rem; color: var(--navy); line-height: .9; }
.brand-lockup small { display: block; text-transform: uppercase; letter-spacing: .24em; font-size: .58rem; color: var(--coral); margin-top: 6px; font-weight: 800; }
.main-nav { display: flex; align-items: center; gap: 28px; font-size: .88rem; font-weight: 800; color: var(--navy); }
.main-nav a { transition: opacity .2s ease, transform .2s ease; }
.main-nav a:hover { opacity: .65; transform: translateY(-1px); }
.nav-cta { border: 1px solid var(--navy); padding: 10px 18px; border-radius: 999px; }

.hero {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  min-height: 690px;
  display: grid;
  grid-template-columns: 1.02fr .98fr;
  align-items: center;
  gap: 60px;
  padding: 75px 0 90px;
}
.eyebrow { color: var(--coral); text-transform: uppercase; letter-spacing: .24em; font-size: .7rem; font-weight: 800; margin: 0 0 18px; }
.eyebrow.light { color: #f0c875; }
h1, h2, h3 { font-family: var(--font-display), Georgia, serif; color: var(--navy); margin-top: 0; }
.hero h1 { font-size: clamp(4.2rem, 8vw, 7.8rem); line-height: .76; letter-spacing: -.055em; margin-bottom: 30px; }
.hero h1 em { font-weight: 500; color: var(--coral); }
.hero-tagline { font-family: var(--font-display); font-size: 2rem; color: var(--navy); margin: 0 0 18px; font-weight: 700; }
.hero-copy { max-width: 590px; font-size: 1.08rem; line-height: 1.8; color: var(--muted); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin: 34px 0 17px; }
.button { display: inline-flex; align-items: center; justify-content: center; min-height: 52px; padding: 0 24px; border-radius: 999px; font-weight: 800; font-size: .9rem; transition: transform .2s ease, box-shadow .2s ease; }
.button:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(18,60,74,.14); }
.button.primary { background: var(--navy); color: white; }
.button.secondary { border: 1px solid var(--navy); color: var(--navy); background: rgba(255,255,255,.28); }
.microcopy { color: var(--muted); text-transform: uppercase; letter-spacing: .14em; font-size: .65rem; font-weight: 800; }

.hero-art { min-height: 550px; position: relative; display: grid; place-items: center; }
.planet-mark { display: inline-block; position: relative; width: 360px; height: 360px; }
.planet-mark.compact { width: 54px; height: 54px; flex: 0 0 54px; }
.planet-core { position: absolute; inset: 14%; border-radius: 50%; background: linear-gradient(135deg, #f3f3ef 5%, #aeb8b5 45%, #e0e0da 70%, #8f9b99); border: 3px solid var(--navy); box-shadow: inset -18px -18px 35px rgba(18,60,74,.2), inset 12px 10px 20px rgba(255,255,255,.65), 0 22px 45px rgba(18,60,74,.16); z-index: 2; }
.planet-shine { position: absolute; width: 24%; height: 18%; border-radius: 50%; background: rgba(255,255,255,.7); top: 18%; left: 23%; transform: rotate(-30deg); filter: blur(2px); }
.planet-continent { position: absolute; background: var(--seafoam); border: 2px solid var(--navy); opacity: .86; }
.continent-one { width: 28%; height: 20%; left: 20%; top: 38%; border-radius: 54% 35% 55% 28%; transform: rotate(18deg); }
.continent-two { width: 21%; height: 31%; right: 20%; bottom: 18%; border-radius: 35% 60% 45% 50%; transform: rotate(-22deg); }
.planet-ring { position: absolute; left: 1%; top: 39%; width: 98%; height: 24%; border: 5px solid var(--coral); border-radius: 50%; transform: rotate(-15deg); z-index: 3; box-shadow: 0 4px 0 rgba(18,60,74,.7); }
.planet-star { position: absolute; color: var(--gold); font-size: 2rem; z-index: 5; }
.star-one { top: 8%; right: 10%; }
.star-two { left: 3%; bottom: 15%; }
.compact .planet-core { border-width: 1.5px; }
.compact .planet-ring { border-width: 2px; box-shadow: 0 2px 0 rgba(18,60,74,.7); }
.compact .planet-star { font-size: .55rem; }
.orbit-word { position: absolute; color: var(--navy); letter-spacing: .34em; font-size: .62rem; font-weight: 900; }
.orbit-one { top: 11%; left: 4%; transform: rotate(-20deg); }
.orbit-two { right: 1%; bottom: 17%; transform: rotate(-20deg); }
.passport-stamp { position: absolute; bottom: 0; right: 5%; width: 170px; height: 170px; border: 2px solid var(--navy); border-radius: 50%; background: rgba(246,240,223,.88); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; transform: rotate(8deg); box-shadow: var(--shadow); }
.passport-stamp::before { content: ""; position: absolute; inset: 7px; border: 1px dashed var(--navy); border-radius: 50%; }
.passport-stamp span, .passport-stamp small { font-size: .49rem; letter-spacing: .17em; font-weight: 900; z-index: 1; }
.passport-stamp strong { color: var(--coral); font-family: var(--font-display); font-size: 1.42rem; line-height: .9; margin: 10px 0; z-index: 1; }

.section-wrap { width: min(1120px, calc(100% - 40px)); margin: 0 auto 110px; }
.welcome-section { display: grid; grid-template-columns: 80px 1fr 1fr; gap: 45px; align-items: start; padding-top: 90px; border-top: 1px solid var(--line); }
.section-number { font-family: var(--font-display); font-size: 2rem; color: var(--coral); }
.welcome-copy h2, .section-heading h2, .founder-copy h2, .join-section h2 { font-size: clamp(2.8rem, 5vw, 4.6rem); line-height: .95; letter-spacing: -.03em; }
.welcome-body { color: var(--muted); font-size: 1.02rem; line-height: 1.9; }
.welcome-body p:first-child { margin-top: 0; }

.dark-panel { background: var(--navy-deep); color: white; padding: 75px; border-radius: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; box-shadow: var(--shadow); }
.dark-panel h2 { color: white; font-size: clamp(3rem, 6vw, 5rem); line-height: .9; }
.code-list { list-style: none; padding: 0; margin: 0; }
.code-list li { border-bottom: 1px solid rgba(255,255,255,.16); padding: 17px 0; display: flex; gap: 25px; font-family: var(--font-display); font-size: 1.65rem; }
.code-list li span { color: #f0c875; font-family: var(--font-body); font-size: .64rem; letter-spacing: .12em; padding-top: 8px; }

.section-heading.centered { text-align: center; max-width: 720px; margin: 0 auto 48px; }
.section-heading > p:not(.eyebrow) { color: var(--muted); line-height: 1.75; }
.kit-grid, .discovery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.kit-card { padding: 38px; background: rgba(255,250,240,.72); border: 1px solid var(--line); border-radius: 24px; min-height: 280px; transition: transform .25s ease; }
.kit-card:hover, .discovery-card:hover { transform: translateY(-5px); }
.kit-icon { width: 55px; height: 55px; display: grid; place-items: center; border: 1px solid var(--navy); border-radius: 50%; color: var(--coral); font-size: 1.6rem; margin-bottom: 40px; }
.kit-card h3, .discovery-card h3 { font-size: 2rem; line-height: 1; }
.kit-card p, .discovery-card p { color: var(--muted); line-height: 1.7; }
.center-action { text-align: center; margin-top: 35px; }
.text-link { color: var(--navy); font-weight: 900; border-bottom: 1px solid var(--coral); padding-bottom: 4px; }

.split-heading { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-bottom: 38px; }
.discovery-card { transition: transform .25s ease; }
.discovery-top { display: flex; justify-content: space-between; color: var(--coral); text-transform: uppercase; letter-spacing: .14em; font-size: .58rem; font-weight: 900; margin-bottom: 12px; }
.discovery-image-placeholder { aspect-ratio: 4 / 3; border-radius: 20px; display: grid; place-items: center; background: linear-gradient(155deg, var(--seafoam), var(--sand)); border: 1px solid var(--line); margin-bottom: 25px; overflow: hidden; position: relative; }
.discovery-image-placeholder::before, .discovery-image-placeholder::after { content: ""; position: absolute; width: 70%; height: 70%; border-radius: 50%; border: 1px solid rgba(18,60,74,.25); }
.discovery-image-placeholder::after { width: 40%; height: 40%; }
.discovery-image-placeholder span { position: relative; z-index: 2; font-size: 2.4rem; color: var(--paper); }

.paper-panel { background: var(--paper); border: 1px solid rgba(18,60,74,.13); box-shadow: var(--shadow); }
.founder-section { padding: 60px; border-radius: 32px; display: grid; grid-template-columns: .8fr 1.2fr; gap: 65px; align-items: center; }
.founder-portrait { min-height: 440px; border-radius: 50% 50% 30px 30px; background: linear-gradient(180deg, #93bcb3 0%, #d2c497 60%, #c87157 100%); display: grid; place-items: center; color: white; text-align: center; text-transform: uppercase; letter-spacing: .13em; font-size: .7rem; font-weight: 900; position: relative; overflow: hidden; }
.portrait-sun { position: absolute; font-size: 7rem; color: rgba(255,247,191,.45); top: 25px; right: 35px; }
.founder-copy p { color: var(--muted); line-height: 1.82; }
.founder-copy .signature { font-family: var(--font-display); color: var(--coral); font-size: 1.8rem; }

.join-section { text-align: center; max-width: 820px; }
.join-emblem { margin-bottom: 18px; }
.join-section > p:not(.eyebrow) { color: var(--muted); max-width: 660px; margin: 0 auto 30px; line-height: 1.75; }
.newsletter-form { display: flex; max-width: 660px; margin: 0 auto 15px; padding: 7px; background: white; border: 1px solid var(--line); border-radius: 999px; box-shadow: 0 12px 35px rgba(18,60,74,.09); }
.newsletter-form input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; padding: 0 18px; color: var(--ink); }
.newsletter-form button { border: 0; border-radius: 999px; padding: 15px 23px; color: white; background: var(--coral); font-weight: 900; cursor: pointer; }
.join-section small { color: var(--muted); }
.form-success { max-width: 660px; margin: 0 auto; display: flex; text-align: left; align-items: center; gap: 18px; background: rgba(142,188,175,.22); border: 1px solid var(--seafoam); border-radius: 18px; padding: 22px; }
.form-success > span { font-size: 1.8rem; color: var(--gold); }
.form-success strong { color: var(--navy); }
.form-success p { margin: 5px 0 0; color: var(--muted); line-height: 1.55; font-size: .87rem; }

.closing-note { background: var(--coral); color: white; text-align: center; padding: 80px 20px; }
.closing-note p { font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 4.4rem); margin: 0; }
.closing-note strong { display: block; font-family: var(--font-display); font-size: clamp(3rem, 7vw, 6rem); line-height: .9; }
.closing-note span { display: block; color: #f5d67c; font-size: 2rem; margin-top: 20px; }

.site-footer { background: var(--navy-deep); color: white; padding: 55px max(20px, calc((100% - 1120px)/2)); display: grid; grid-template-columns: 1fr auto; gap: 35px; align-items: center; }
.footer-brand { display: flex; align-items: center; gap: 15px; }
.footer-brand strong { font-family: var(--font-display); font-size: 1.35rem; }
.footer-brand p { margin: 4px 0 0; color: rgba(255,255,255,.55); font-size: .76rem; }
.footer-links { display: flex; gap: 24px; font-size: .78rem; font-weight: 800; }
.copyright { grid-column: 1 / -1; padding-top: 25px; border-top: 1px solid rgba(255,255,255,.12); color: rgba(255,255,255,.45); font-size: .68rem; letter-spacing: .08em; }

.inner-page { min-height: 70vh; width: min(1120px, calc(100% - 40px)); margin: 70px auto 110px; display: grid; place-items: center; }
.page-intro { width: 100%; padding: clamp(45px, 8vw, 100px); border-radius: 32px; }
.page-intro h1 { font-size: clamp(3.8rem, 8vw, 7rem); line-height: .83; letter-spacing: -.05em; max-width: 850px; margin-bottom: 30px; }
.page-intro .lead { max-width: 760px; font-size: 1.16rem; color: var(--muted); line-height: 1.85; }
.page-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 25px; margin-top: 35px; }
.centered-page { text-align: center; }
.centered-page h1, .centered-page .lead { margin-left: auto; margin-right: auto; }
.centered-page .newsletter-form { margin-top: 35px; }

@media (max-width: 900px) {
  .main-nav a:not(.nav-cta) { display: none; }
  .hero { grid-template-columns: 1fr; text-align: center; padding-top: 55px; }
  .hero-copy { margin-left: auto; margin-right: auto; }
  .hero-actions { justify-content: center; }
  .hero-art { min-height: 480px; }
  .welcome-section { grid-template-columns: 55px 1fr; }
  .welcome-body { grid-column: 2; }
  .dark-panel, .founder-section { grid-template-columns: 1fr; }
  .kit-grid, .discovery-grid { grid-template-columns: 1fr; }
  .founder-portrait { min-height: 350px; }
}

@media (max-width: 620px) {
  .site-header { width: min(100% - 26px, 1180px); min-height: 78px; }
  .brand-lockup strong { font-size: 1.18rem; }
  .nav-cta { padding: 8px 13px; }
  .hero, .section-wrap, .inner-page { width: min(100% - 26px, 1120px); }
  .hero h1 { font-size: clamp(3.55rem, 17vw, 5rem); }
  .hero-art { transform: scale(.78); margin: -55px 0; }
  .welcome-section { grid-template-columns: 1fr; gap: 15px; }
  .welcome-body { grid-column: 1; }
  .section-number { display: none; }
  .dark-panel, .founder-section, .page-intro { padding: 38px 25px; border-radius: 22px; }
  .split-heading { display: block; }
  .split-heading .text-link { display: inline-block; margin-top: 15px; }
  .newsletter-form { border-radius: 20px; flex-direction: column; padding: 8px; }
  .newsletter-form input { min-height: 52px; text-align: center; }
  .newsletter-form button { width: 100%; }
  .site-footer { grid-template-columns: 1fr; text-align: center; }
  .footer-brand, .footer-links { justify-content: center; flex-wrap: wrap; }
}
