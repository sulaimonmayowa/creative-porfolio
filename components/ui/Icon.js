/**
 * Material Symbols icon wrapper.
 * Replace with lucide-react icons for full SVG support when ready.
 */
export default function Icon({ name, className = '', filled = false, size = 'text-2xl' }) {
  return (
    <span
      className={`material-symbols-outlined ${size} ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}
