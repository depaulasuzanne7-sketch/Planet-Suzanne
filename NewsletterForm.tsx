import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import PlanetMark from "@/components/PlanetMark";

const kitItems = [
  { icon: "▤", title: "Explorer Passport", text: "A pocket-sized place for discoveries, detours, meals, memories, and stories." },
  { icon: "◇", title: "Founder Number", text: "A personal Explorer number recognizing the first people who joined the journey." },
  { icon: "✦", title: "Keepsake Pieces", text: "A sticker, welcome note, Explorer’s Oath, and a hidden Carpe Diem card." },
];

const discoveries = [
  { number: "001", category: "Coastal", title: "The quiet beach after everyone leaves", note: "Salt air, an empty boardwalk, and the feeling that the day belongs to you." },
  { number: "002", category: "Local Table", title: "The seafood shack with the handwritten specials", note: "The places worth remembering rarely need a billboard." },
  { number: "003", category: "Scenic Route", title: "The overlook that was not on the itinerary", note: "Some of the best stories begin when the plan changes." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">A DePaula Discoveries experience</p>
          <h1>Welcome to<br /><em>Planet Suzanne.</em></h1>
          <p className="hero-tagline">Collect Moments. Not Things.</p>
          <p className="hero-copy">A warm, curious world for hidden places, meaningful detours, local stories, and adventures close to home.</p>
          <div className="hero-actions">
            <Link href="/join" className="button primary">Become a Founder Explorer</Link>
            <Link href="/discoveries" className="button secondary">Explore Discoveries</Link>
          </div>
          <p className="microcopy">Founder Edition · First 100 Explorers</p>
        </div>
        <div className="hero-art" aria-label="Illustrated Planet Suzanne emblem">
          <div className="orbit-word orbit-one">CURIOSITY</div>
          <div className="orbit-word orbit-two">STORIES</div>
          <PlanetMark />
          <div className="passport-stamp">
            <span>PLANET SUZANNE</span>
            <strong>FOUNDER<br />EDITION</strong>
            <small>EXPLORE · DISCOVER · REMEMBER</small>
          </div>
        </div>
      </section>

      <section className="welcome-section section-wrap">
        <div className="section-number">01</div>
        <div className="welcome-copy">
          <p className="eyebrow">Welcome, Explorer</p>
          <h2>The best places become part of your story.</h2>
        </div>
        <div className="welcome-body">
          <p>Planet Suzanne is not about racing through a bucket list. It is about noticing the little seafood shack, the mountain overlook, the neighborhood bookstore, the quiet beach, and the people who make a place unforgettable.</p>
          <p>We explore with curiosity, support local, and bring home something better than a souvenir: a story worth telling.</p>
        </div>
      </section>

      <section className="manifesto section-wrap dark-panel">
        <div>
          <p className="eyebrow light">The Explorer’s Code</p>
          <h2>Take the scenic route.</h2>
        </div>
        <ol className="code-list">
          <li><span>01</span>Stay curious.</li>
          <li><span>02</span>Support local.</li>
          <li><span>03</span>Try the unexpected.</li>
          <li><span>04</span>Leave places better.</li>
          <li><span>05</span>Tell your story.</li>
        </ol>
      </section>

      <section className="kit-section section-wrap">
        <div className="section-heading centered">
          <p className="eyebrow">The Founder Collection</p>
          <h2>A tiny kit for a lifetime of journeys.</h2>
          <p>The first Planet Suzanne Explorer Kit is designed to feel discovered in a beloved vintage surf shop and carried for years.</p>
        </div>
        <div className="kit-grid">
          {kitItems.map((item) => (
            <article className="kit-card" key={item.title}>
              <span className="kit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="center-action"><Link href="/explorer-kit" className="text-link">See what is inside the Explorer Kit →</Link></div>
      </section>

      <section className="discoveries-section section-wrap">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">From the Field Journal</p><h2>Early Discoveries</h2></div>
          <Link href="/discoveries" className="text-link">View all discoveries →</Link>
        </div>
        <div className="discovery-grid">
          {discoveries.map((item) => (
            <article className="discovery-card" key={item.number}>
              <div className="discovery-top"><span>Discovery No. {item.number}</span><span>{item.category}</span></div>
              <div className="discovery-image-placeholder"><span>✦</span></div>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-section section-wrap paper-panel">
        <div className="founder-portrait" aria-label="Founder photo placeholder">
          <div className="portrait-sun">☀</div>
          <span>Founder photo<br />coming soon</span>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">Meet the Chief Explorer</p>
          <h2>Hi, I’m Suzanne.</h2>
          <p>I started Planet Suzanne because some of my happiest memories came from tiny restaurants, hidden beaches, thrift shops, hiking trails, sporting events, and conversations I never expected to have.</p>
          <p>I believe life is not measured only by the miles we travel. It is measured by the moments we remember—and the stories we give ourselves permission to tell.</p>
          <p className="signature">— Suzanne</p>
          <Link href="/about" className="text-link">Read the Planet Suzanne story →</Link>
        </div>
      </section>

      <section className="join-section section-wrap">
        <div className="join-emblem"><PlanetMark compact /></div>
        <p className="eyebrow">Join the First 100</p>
        <h2>Become a Founder Explorer.</h2>
        <p>Receive an early Explorer number, future Discovery notes, weekend missions, and first access to the Founder Collection.</p>
        <NewsletterForm />
        <small>No clutter. Just discoveries worth sharing.</small>
      </section>

      <section className="closing-note">
        <p>Somewhere nearby is a place you have never seen.</p>
        <strong>Go find it.</strong>
        <span>✦</span>
      </section>
    </main>
  );
}
