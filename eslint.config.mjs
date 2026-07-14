export default function PlanetMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "planet-mark compact" : "planet-mark"} aria-hidden="true">
      <span className="planet-core">
        <span className="planet-shine" />
        <span className="planet-continent continent-one" />
        <span className="planet-continent continent-two" />
      </span>
      <span className="planet-ring" />
      <span className="planet-star star-one">✦</span>
      <span className="planet-star star-two">✧</span>
    </span>
  );
}
