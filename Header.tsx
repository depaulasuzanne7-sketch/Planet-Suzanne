import NewsletterForm from "@/components/NewsletterForm";
export const metadata = { title: "Join" };
export default function JoinPage() {
  return (
    <main className="inner-page">
      <section className="page-intro paper-panel centered-page">
        <p className="eyebrow">Founder Edition</p>
        <h1>Join the first 100 Explorers.</h1>
        <p className="lead">Reserve your place at the beginning of Planet Suzanne and receive early updates as the Explorer Passport, Founder Kit, and first Discoveries come to life.</p>
        <NewsletterForm />
      </section>
    </main>
  );
}
